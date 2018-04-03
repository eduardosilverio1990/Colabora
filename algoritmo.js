window.onload = function() {
	//0 - Vetores com as informacoes de cores e nomes de regioes a serem utilizadas no mapa e na legenda
	var cores = ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0"];
	var regioes = ["Norte", "Nordeste", "Sudeste", "Sul", "Centro Oeste"];

  //1 - Mapa centrado no Brasil
	var map = L.map("meumapa", {
		center: [-15, -49],
		zoom: 4.5,
		zoomSnap: 0.5,
		zoomDelta: 0.5,
		minZoom: 4.5,
		maxZoom: 8.5
	});
  
  //2 - Camadas base
	var osmPretoBranco = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
	var osmColorido = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  
  //3 - Camadas de sobreposiçao
	var camadaGeojson = L.geoJson(estadosBrasil, {
		style: obterSimbologia,
		onEachFeature: colocarTooltips
	}).addTo(map);
  
  //4 - Controle de Camadas
	var camadasBase = {
		"OSM Preto e Branco": osmPretoBranco,
		"OSM Colorido": osmColorido	
	}
	
	var camadasSobreposicao = {
		"Estados": camadaGeojson
	}
	
	var controleCamadas = new L.control.layers(camadasBase, camadasSobreposicao).addTo(map);
  
  //5 - Funcao para anexar etiquetas com o nome de cada estado
	function colocarTooltips(feicao, camada) {
		camada.bindTooltip(feicao.properties.NOME);
	}
  
  //6 - Mapa de Visao Geral (plugin)
	var osmColorido2 = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
	var mapaVisaoGeral = new L.Control.MiniMap(osmColorido2).addTo(map);
  
  //7 - Coordenadas do mouse (plugin) //Lembrar de editar o css para aumentar a letra das coordenadas
	var coordenadasMouse = new L.control.mousePosition({
		prefix: "Latitude: ",
		separator: " Longitude: ",
		numDigits: 2
	}).addTo(map);
  
  //8 - Escala Gráfica
	var escalaGrafica = new L.control.scale({position: "bottomright"}).addTo(map);
  
  //9 - Funcao para retornar objeto com a simbologia de cada estado
    function obterSimbologia(feicao) {			
	  return {
	    weight: 0.5,
	    color: "#000",
		fillColor: cores[feicao.properties.GEOCODIGO[0]-1],
		fillOpacity: 1
	  }
    }
  
  //10 - Legenda
	for(var i=0; i<regioes.length; i++) {
		document.getElementById("legenda").innerHTML += "<caixalegenda style='background-color:" + cores[i] + "'></caixalegenda> <textolegenda>" + regioes[i] + "</textolegenda> <br />";
	}

  //11 - Evento de clique (abrir popup que apresenta as coordenadas)
	map.on("click", function(evento) {
		L.popup().setLatLng(evento.latlng).setContent("Latitude: " + evento.latlng.lat.toFixed(2) + " Longitude: " + evento.latlng.lng.toFixed(2)).openOn(map);
  }
         
  //12 - Adicionar posiçao do usuário ao mapa
	map.locate();	
	map.on("locationfound", function(evento) {
		L.marker(evento.latlng).addTo(map).bindPopup("Você está aqui!");
	});
}
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
}
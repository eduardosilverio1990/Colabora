window.onload = function() {
	//0 - Vetores com as informacoes de cores e nomes de regioes a serem utilizadas no mapa e na legenda
	var cores = ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0"];
	var regioes = ["Norte", "Nordeste", "Sudeste", "Sul", "Centro Oeste"];
	
	//7 - Coordenadas do mouse (plugin) //Lembrar de editar o css para aumentar a letra das coordenadas
	var coordenadasMouse = new L.control.mousePosition({
		prefix: "Latitude: ",
		separator: " Longitude: ",
		numDigits: 2
	}).addTo(map);
}
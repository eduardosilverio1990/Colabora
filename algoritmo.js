window.onload = function() {
	//0 - Vetores com as informacoes de cores e nomes de regioes a serem utilizadas no mapa e na legenda
	var cores = ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0"];
	var regioes = ["Norte", "Nordeste", "Sudeste", "Sul", "Centro Oeste"];
	
	//3 - Camadas de sobreposiçao
	var camadaGeojson = L.geoJson(estadosBrasil, {
		style: obterSimbologia,
		onEachFeature: colocarTooltips
	}).addTo(map);
}
window.onload = function() {
	//0 - Vetores com as informacoes de cores e nomes de regioes a serem utilizadas no mapa e na legenda
	var cores = ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0"];
	var regioes = ["Norte", "Nordeste", "Sudeste", "Sul", "Centro Oeste"];
	
	//6 - Mapa de Visao Geral (plugin)
	var osmColorido2 = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
	var mapaVisaoGeral = new L.Control.MiniMap(osmColorido2).addTo(map);
}
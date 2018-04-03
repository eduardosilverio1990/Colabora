window.onload = function() {
	//0 - Vetores com as informacoes de cores e nomes de regioes a serem utilizadas no mapa e na legenda
	var cores = ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0"];
	var regioes = ["Norte", "Nordeste", "Sudeste", "Sul", "Centro Oeste"];
	
	//4 - Controle de Camadas
	var camadasBase = {
		"OSM Preto e Branco": osmPretoBranco,
		"OSM Colorido": osmColorido	
	}
	
	var camadasSobreposicao = {
		"Estados": camadaGeojson
	}
	
	var controleCamadas = new L.control.layers(camadasBase, camadasSobreposicao).addTo(map);
}
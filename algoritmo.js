window.onload = function() {
	//0 - Vetores com as informacoes de cores e nomes de regioes a serem utilizadas no mapa e na legenda
	var cores = ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0"];
	var regioes = ["Norte", "Nordeste", "Sudeste", "Sul", "Centro Oeste"];
	
	//5 - Funcao para anexar etiquetas com o nome de cada estado
	function colocarTooltips(feicao, camada) {
		camada.bindTooltip(feicao.properties.NOME);
	}
}
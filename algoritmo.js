window.onload = function() {
	//0 - Vetores com as informacoes de cores e nomes de regioes a serem utilizadas no mapa e na legenda
	var cores = ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0"];
	var regioes = ["Norte", "Nordeste", "Sudeste", "Sul", "Centro Oeste"];
	
	//10 - Legenda
	for(var i=0; i<regioes.length; i++) {
		document.getElementById("legenda").innerHTML += "<caixalegenda style='background-color:" + cores[i] + "'></caixalegenda> <textolegenda>" + regioes[i] + "</textolegenda> <br />";
	}
}
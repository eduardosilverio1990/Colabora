window.onload = function() {
	//0 - Vetores com as informacoes de cores e nomes de regioes a serem utilizadas no mapa e na legenda
	var cores = ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0"];
	var regioes = ["Norte", "Nordeste", "Sudeste", "Sul", "Centro Oeste"];
	
	//9 - Funcao para retornar objeto com a simbologia de cada estado
    function obterSimbologia(feicao) {			
	  return {
	    weight: 0.5,
	    color: "#000",
		fillColor: cores[feicao.properties.GEOCODIGO[0]-1],
		fillOpacity: 1
	  }
	}
}
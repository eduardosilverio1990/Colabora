window.onload = function() {
	//0 - Vetores com as informacoes de cores e nomes de regioes a serem utilizadas no mapa e na legenda
	var cores = ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0"];
	var regioes = ["Norte", "Nordeste", "Sudeste", "Sul", "Centro Oeste"];
	
	//11 - Evento de clique (abrir popup que apresenta as coordenadas)
	map.on("click", function(evento) {
		L.popup().setLatLng(evento.latlng).setContent("Latitude: " + evento.latlng.lat.toFixed(2) + " Longitude: " + evento.latlng.lng.toFixed(2)).openOn(map);
	});
}
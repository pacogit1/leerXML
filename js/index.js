////////////////////////////////////////////////////////////////////
// Cuando el documento esté cargado llamamos a la función iniciar().
////////////////////////////////////////////////////////////////////
$(document).ready(function(){ 
//  http://unravelthesource.wordpress.com/2014/11/25/soluciones-para-el-cross-domain/
//  http://www.formandome.es/javascript/cors-vs-jsonp-solicitudes-ajax-entre-dominios/
	$.support.cors = true; 
	$.ajax({
//		url: 'http://opendata.jcyl.es/ficheros/cct/wtur/monumentos.xml',
		url: 'OfertasdeEmpleo.xml',
//		url: 'http://elpais.com/tag/rss/futbol/a/',
		type: 'GET',
		dataType: "xml",
		async: true,
		success: mostrarXML,
		error: function (result) {
				alert('ERROR ' + result.status + ' ' + result.statusText);
		}       
	});  
});
function obtenerDatos(etiqueta){
      alert("Etiqueta = ");
//	alert("Etiqueta = " + $(etiqueta).first().html());
	
/*	titulos=CDs[i].getElementsByTagName("TITLE");
	$(etiqueta).each(function(){
		alert("Etiquetas dentro = " + $(this).html());
	}); */ 
}
/////////////////////////////////////////////////////////
function mostrarXML(resultadosXML){
	var i = 1;
	$(resultadosXML).find('element').each(function(){
		console.log(" **********  Listado del elemento = " + i );
		$(this).find('attribute').each(function(){
			obtenerDatos($(this).html());
			var dato1 = $(this).html();
//			var dato = $(this).html().first().html();
			var dato = $(dato1).first().html();
			$('#resultados').html(dato);
			$('#indicador').html(dato);
			switch ($(this).attr('name'))
			{
			case "Identificador":
				console.log(" El Identificador es: " + dato);
				break;
			case "Titulo_es":
				console.log(" Titulo_es es: " + dato);
				break;
			case "Tematica":
				console.log(" La Tematica es: " + dato);
				break;
			case "Provincia":
				console.log(" La Provincia es: " + dato);
				break;
			case "FechaPublicacion":
				console.log(" La FechaPublicacion es: " + dato);
			}
		});
		i++;
		if (i == 10){
			return false;
		}

	});
}  
/*
**============================= SE IDENTIFICA EL INPUT BUSCADOR =============================
*/
document.querySelector("#buscar-data").addEventListener('keyup', function(){
	BuscarElementos()
})

/*
**============================= SE TOMAN LOS ELEMENTOS QUE SE MODIFICARAN SEGUN EL RESULTADO DE BUSQUEDA =============================
*/
var msj = document.querySelector("#no_results")
var contenedorElementos = document.querySelectorAll('.contenedor-data > .data')
var html = "<h1>No se encontraron coincidencias</h1>"

/*
**============================= FUNCIÓN QUE SE LLAMARÁ CUANDO SE REALICE UN CAMBIO EN EL BUSCADOR =============================
*/
function BuscarElementos() {

	//OBTENEMOS EL VALOR QUE TENGA EN BUSCADOR Y LO PASAMOS A MAYÚSCULAS]
	var x = document.querySelector("#buscar-data")
	var buscando = x.value.toUpperCase()
	var txtContent = "" //VARIABLE QUE CONTENDRÁ LOS VALORES DE LA LISTA DE DATA

	//SE VERIFICA SI SE INGRESÓ TEXTO EN EL BUSCADOR
	if (buscando.length > 0) {

		//SI ES VERDADERO, RECORREMOS LOS ELEMENTOS QUE CONTIENE LA DATA
		for (var i = 0; i < contenedorElementos.length; i++) {
				
			//SE VERIFICA SI LO HIJOS DEL CONTENEDOR TIENEN HIJOS
			if(contenedorElementos[i].hasChildNodes()){
				
				//SI ES ASÍ ALMACENAMOS LOS HIJOS EN UN SEGUNDO NODO
				var nodo1 = contenedorElementos[i].childNodes

				//SE VERIFICA NUEVAMENTE SI EL NUEVO NODO TIENE HIJOS
				if(nodo1[1].hasChildNodes()){

					//DE SER ASÍ VOLVEMOS A GUARDAR LOS HIJOS EN OTRO NODO
					var nodo2 = nodo1[1].childNodes
					//COPIAMOS EL CONTENIDO EN TEXTO A LA VARIABLE CORRESPONDIENTE
					txtContent = nodo2[1].textContent.toString().toUpperCase()

					//VER NIVEL DE NODO
					console.log("Nivel -> Nodo[2]")

					//indexOf () devuelve la posición de la primera aparición de un valor especificado en una cadena.
					if(txtContent.indexOf(buscando)>=0){
						//SI UN ELEMENTO COINCIDE LE QUITAMOS LA CLASE HIDE SI EN DADO CASO LO TIENE
						contenedorElementos[i].classList.remove("hide")
						//Y OCULTAMOS EL MENSAJE POR SI SE ESTÁ MOSTRANDO
						msj.classList.add("hide")
					}else{
						contenedorElementos[i].classList.add("hide")
						msj.innerHTML = html
					}
					
					/*
					//COMPARAMOS SI EL CONTENIDO ES IGUAL A LO BUSCADO
					if((i+1) == contenedorElementos.length && txtContent != buscando){
						//SI ES EL ULTIMO ELEMENTO Y NO COINCIDEN LOS RESULTADOS, LOS OCULTAMOS TODOS
						contenedorElementos[i].classList.add("hide")
						//MOSTRAMOS UN MENSAJE QUE NO SE ENCONTRÓ NINGUN RESULTADO
						msj.innerHTML = html
					} else if(txtContent != buscando){
						//SI CADA ELEMENTO NO COINCIDE CON LA BUSQUEDA, LO OCULTAMOS
						contenedorElementos[i].classList.add("hide")
					} else {
						//SI UN ELEMENTO COINCIDE LE QUITAMOS LA CLASE HIDE SI EN DADO CASO LO TIENE
						contenedorElementos[i].classList.remove("hide")
						//Y OCULTAMOS EL MENSAJE POR SI SE ESTÁ MOSTRANDO
						msj.classList.add("hide")
					}
					*/
				} else {
					//SI EL NODO HIJO NO TIENE HIJOS, SE REALIZAN LAS MISMAS OPERACIONES ANTERIORES
					txtContent = nodo1[1].textContent.toString().toUpperCase()
						
					//VER NIVEL DE NODO
					console.log("Nivel -> Nodo[1]")
					
					//indexOf () devuelve la posición de la primera aparición de un valor especificado en una cadena.
					if(txtContent.indexOf(buscando)>=0){
						//SI UN ELEMENTO COINCIDE LE QUITAMOS LA CLASE HIDE SI EN DADO CASO LO TIENE
						contenedorElementos[i].classList.remove("hide")
						//Y OCULTAMOS EL MENSAJE POR SI SE ESTÁ MOSTRANDO
						msj.classList.add("hide")
					}else{
						contenedorElementos[i].classList.add("hide")
						msj.innerHTML = html
					}
				}
			} else {
				//SI LOS HIJOS DEL CONTENEDOR NO TIENEN HIJOS, SE REALIZAN LAS MISMAS OPERACIONES ANTERIORES
				txtContent = contenedorElementos[i].textContent.toString().toUpperCase()
				
				//VER NIVEL DE NODO
				console.log("Nivel -> Nodo[0]")

				//indexOf () devuelve la posición de la primera aparición de un valor especificado en una cadena.
				if(txtContent.indexOf(buscando)>=0){
					//SI UN ELEMENTO COINCIDE LE QUITAMOS LA CLASE HIDE SI EN DADO CASO LO TIENE
					contenedorElementos[i].classList.remove("hide")
					//Y OCULTAMOS EL MENSAJE POR SI SE ESTÁ MOSTRANDO
					msj.classList.add("hide")
				}else{
					contenedorElementos[i].classList.add("hide")
					msj.innerHTML = html
				}
			}

		}

	} else {
		//SI EN EL BUSCADOR NO HAY TEXTO, SE QUITA LA CLASE HIDE Y SE OCULTA EL MENSAJE SI SE ESTÁ MOSTRANDO
		for (var i = 0; i < contenedorElementos.length; i++) {
			contenedorElementos[i].classList.remove("hide")
		}
		msj.classList.add("hide")
	}
}
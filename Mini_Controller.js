
var lista = []
var menuItems =["La mejor pella de la universidad", "Buena", "Bonita","Barata"]
function getValueType (paellaType){

	this.paellaType = paellaType;
	lista.push(this.paellaType)
	//console.log(lista)
}

var temp=[]
var res 
function getValuePrice(paellaprice){

	this.paellaprice = paellaprice;
	console.log(paellaprice.value)

	var org = paellaprice.value
	var iva = (paellaprice.value*19)/100

	console.log("original",org-iva)
	console.log("Iva",iva)

	res = paellaprice.value


}

function getValueCoin(cash){

	this.cash = cash 
	if (cash.value=="dolar"){

		var ans =CalculatePaellaPrice(res)
		console.log(ans)
	}
	if(cash.value=="euro"){
		var ans =CalculatePaellaPrice2(res)
		console.log(ans)
	}	


}


function getValueInput (valueInput){
	this.valueInput = valueInput;
	lista.push(this.valueInput)
	//console.log(this.valueInput.value);
}

function buildPaella(){
	for (var i = 0; i < lista.length; i++) {
		var factory = executeFactory(lista[i].value);
		var paellaProduct = generatePaella(factory.type);
		temp.push(paellaProduct)	
	}
	var carrito = new buildShoppingCar(temp)
	console.log(carrito);
	var decorator = new excuteDecorator(menuItems);
	console.log(decorator)
}
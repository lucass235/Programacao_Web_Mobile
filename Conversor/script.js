
var btnTaxa;

function converterReal() {
	btnTaxa = document.querySelector(".btn-taxa")
	var valorDolar = document.getElementById('valordolar').value
	var resultadoReal = document.getElementById('resultadoReal')
	var retorno = taxaConversao();

	if (retorno === undefined) {
		alert('Adicione uma taxa de conversão!')
	} else if (valorDolar <= 0) {
		alert('Valor inválido, digite um numero maior que 0!')
	} else {
		var resultado = valorDolar * retorno;
		resultadoReal.textContent = "Valor em real é: R$" + resultado.toFixed(2);
		btnTaxa.disabled = false;
	}

}

function converterDolar() {
	btnTaxa = document.querySelector(".btn-taxa")
	var valorReal = document.getElementById('valorreal').value
	var resultadoDolar = document.getElementById('resultadoDolar')
	var retorno = taxaConversao();

	if (retorno === undefined) {
		alert('Adicione uma taxa de conversão!')
	} else if (valorReal <= 0) {
		alert('Valor inválido, digite um numero maior que 0!')
	} else {
		var resultado = valorReal / retorno;
		resultadoDolar.textContent = "Valor em dólar é: $" + resultado.toFixed(2);
		btnTaxa.disabled = false;
	}

}

function taxaConversao() {
	var taxa = document.getElementById('taxaconversao').value;
	btnTaxa = document.querySelector(".btn-taxa")


	if (taxa > 0) {
		btnTaxa.disabled = true;
		return taxa;
	}
}
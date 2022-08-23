'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var dec = 0;
  var str = num.split("").reverse();
  for (var i = 0; i < str.length; i++){
    dec += Math.pow(2,i)*parseInt(str[i])
  }
 	return dec;
}

function DecimalABinario(num) { //a, b, c, d
  // tu codigo aca
  var bin = [];
  var residuo = 0;
  var cociente = 0;
    while (num >= 1){
      cociente = (num/2);
      residuo = num%2;
      bin.push(Math.floor(residuo));
      num = Math.floor(cociente);
    }
      return bin.reverse().join("")

      //return num.toString(2) => Resuelve con el metodo de decimal a binario.

}
BinarioADecimal('111')

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}



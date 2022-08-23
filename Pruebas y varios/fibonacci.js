// fibonacci 0 1 1 2 3 5 8 13 21 34
          // a b c
var contador = 0;
var arr = [];
var a = 0, b = 1, c = 1; 

while (c <= 34){
    c = a + b;
    a = b;
    b = c;
    contador++;
}
console.log (c, contador);

// x = 1; //crea una variable global no declarada. También genera una advertencia estricta de JavaScript. Las variables globales no declaradas a menudo pueden provocar un comportamiento inesperado. Por lo tanto, se desaconseja utilizar variables globales no declaradas.
// var a = 5; // a = 5
// var b = 10; // b = 10
// var c = function(a, b, c) {
//   var x = 10; // craa una variable local de la función x = 10
//   console.log(x); // imprime x = 10
//   console.log(a); // imprime el valor que otorgues en el argumento "a" de la funcion
//   var f = function(a, b, c) {
//     b = a; 
//     console.log(b); //b = 5
//     b = c; 
//     var x = 5; //modifica la variable de x pasada por referencia, altera a c function()
//   }
//   f(a,b,c);
//   console.log(b); // imprime b = 10
// }
// c(8,9,10);
// console.log(b);
// console.log(x);
// ```

//Closure 

// function producto(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }
// var producto2 = producto(2);
// var producto3 = (producto2(3));
// console.log(producto3(4))
/*
function nFactorial(4) {
    while (n>0){
      if (n===1) return 1;
      return (4 * nFactorial(4-1))
        return (3 * nFactorial(3-1))
            return (2 * nFactorial(2-1))
                n = 1
                    return (2 * nFactorial(1))
                        return (3 * nFactorial(2))
                            return (4 * nFactorial(6)) reotrna 24
    }
  }
function nFibonacci(2) {
    n1 = 0;
    n2 = 1;
  while (n>=0){
    if (n === 0) return 0;
    else if(n===1) return 1;
    else (n = n-1 + n-2)
  }
}
*/
// function nFactorial(n) {
//   while (n>0){
//     if (n=== 0 || n===1) return 1;
//     return (n * nFactorial(n-1))
//   }
// }

// function nFibonacci(n) {
//    if (n === 0) return 0;
//     else if(n === 1) return 1;
//     return (nFibonacci(n-1) + nFibonacci(n-2));
// }

// function multiplicar(n){

// }

// String.prototype.repeatify("string",n);
//   this.string = String;
//   if (n.isInteger()){
//     return(this.string*n)
//   }

//   console.log('hola'.repeatify(3));

// function Node(data) {
//   this.data = data;
//   this.next = null;
// }
// function List(){
//   this._length = 0;
//   this.head = null;
// }

// List.prototype.add = function (value) {
//   const newNode = new Node(value);

//   this._length++;

//   if (this.head === null) this.head = newNode;
//   else {
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

// }

// const tren = new List();
// tren.add (5);
// tren.add (9);
// tren.add (10);
// tren.add (12);
// console.log(tren)

// LinkedList.prototype.search = function(param){
//   let current = this.head;
//   if (!current)return null;
//   do {
//     if (current.value == param){
//         return current.value;
//       }
//     current = current.next;
//   }
//   while (current.next); return null;
    
//   };
  var sum = 0;
  var palabra = "palabra";
  for (var i = 0; i < palabra.length; i++){
    sum += palabra.charCodeAt(i)

  }
  return sum;
"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor
   o un callback. En el primer caso,
   buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, 
   al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this._length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

// LinkedList.prototype.add = function(value){
//   const newNode = new Node(value);
//   this._length++;
//   if (this.head === null) this.head = newNode;
//   else{
//     let current = this.head;
//     while (current.next){
//       current = current.next
//     }
//     current.next = newNode;
//   }
// }

LinkedList.prototype.add = function(value){
  
  const newNode = new Node(value);
  this._length++;
  if (this.head === null) this.head = newNode;
  else{
    let current = this.head;
    const addRecursion = function(current){
      if (current.next === null) current.next = newNode;
      else current = addRecursion(current.next);
    }
    return addRecursion(current);
  }
}

LinkedList.prototype.remove = function(){
  if(this.head) {
    if (this.head.next === null){
      let value = this.head.value;
      this.head = null;
      this._length--;
      return value;
    }
    if(this.head.next.next === null){
      let value = this.head.next.value;
      this.head.next = null;
      return value;
    }
  }
  else return null; 
  }
//   if(this.head) {
//     let current = this.head;
//     if (current.next === null){
//       let value = current.value;
//       this.head = null;
//       this._length--;
//       return value;
//     } else {
//       let current = this.head.next;
//       const removeRecursion = function(current){
//         if(current.next === null){
//           let value = current.value;
//           ru = null;
//           this._length--;
//           return value;
//         }else current = removeRecursion(current.next);
//       }
//       removeRecursion(current);
      
//     }
//   }
//   else return null; 
// }

LinkedList.prototype.search = function(value){
  let current = this.head;
  if (current) {
    if (typeof value === "string" || typeof value === "String"){
      if (value === current.value) return current.value;
        while(current.next){
          if(current.next.value === value) return current.next.value;
          current = current.next;
      }   
    } 
  
    else if (typeof value === "function" || typeof value === "Function"){
      if (value(current.value)) return current.value;
        while(current.next){
          if(value(current.next.value)) return current.next.value;
          else current = current.next;
      }    
    } //
  }
return null;
}
// one = this.head.value, two = this.head.next.value,three = this.head.next.next.value, 
// four = this.head.next.next.next.value
// LinkedList.prototype.search = function(value) { 
//   if(typeof value === 'function') {
//     if (value(arg) === this.head.value) {
//       return (this.head.value);
//     }else {
//       let current = this.head;
//       while (current.next){
//         if (current.next.value === value(arg)){
//           return (current.next.value);
//         }else current = current.next;
//       }  
//     return null;
//   }
// }
//   else if (typeof value === 'string'){
//     if (this.head.value === value){
//       (this.head.value);
//     }else if (this.head.next.value === value){
//       return (this.head.next.value);
//     }
//   }
//   else return null;
// }
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, 
  posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor 
  (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional, 
  pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)
  
La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, 
  suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) 
  y calcula el módulo % de ese número total por la cantidad de buckets; de esta manera determina la posición 
  de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, 
  y almacena todo el conjunto en el bucket correcto. 
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave 
  (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, 
si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), 
se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
  //this.buckets = new Array(this.numBuckets);
}
HashTable.prototype.hash = function(palabra) {
  let valor = 0;
  for (var i = 0; i < palabra.length; i++) {
    valor += palabra.charCodeAt(i); //foo 9a / ofo 9b / f + o + o / oof 9c
  }
 return (valor % 35);
}; // buckets[foo] 

HashTable.prototype.set = function (key, value) {
 if (typeof key !== "string" ) throw new TypeError();
  const ubicacion = this.hash(key);
  if (this.buckets[ubicacion] === undefined) {
    this.buckets[ubicacion] = {};
    }
  this.buckets[ubicacion][key] = value;
};

HashTable.prototype.get = function (key) {
  const ubicacion = this.hash(key);
  return this.buckets[ubicacion][key];
};
HashTable.prototype.hasKey = function (key) {
  const ubicacion = this.hash(key);
  return this.buckets[ubicacion].hasOwnProperty(key);
}; 

module.exports = {
  Node,
  LinkedList,
  HashTable,
};

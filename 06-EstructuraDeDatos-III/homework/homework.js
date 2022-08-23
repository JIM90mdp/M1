"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value,
  this.left = null,        
  this.rigth = null;
  this._length = 0   
 };
 BinarySearchTree.prototype.insert = function (value) {
  const newNodo = new BinarySearchTree (value);
  this._length++;
  if (value >= this.value){
    if (this.right){
      this.right.insert(value);
    }else {
      this.right = newNodo;
    }
  }else {
    if (this.left){
      this.left.insert(value);
    }else {
      this.left = newNodo;
    }
  }
};
BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true;
  if (value >= this.value){
      if (this.right){
          return this.right.contains(value);
          // console.log("va a la derecha a buscar ");
      }
  }
  if (value < this.value){
      if (this.left){
          return this.left.contains(value);
          // console.log("va a la izq a buscar");
      }
  }return false;
};
 BinarySearchTree.prototype.depthFirstForEach = function (cb, type) {
    if (type === 'pre-order'){
        cb(this.value);
        if (this.left) this.left.depthFirstForEach(cb, type); 
        if (this.right) this.right.depthFirstForEach(cb, type);
    }
      if (type === 'post-order'){
        if (this.left) this.left.depthFirstForEach(cb, type); 
        if (this.right) this.right.depthFirstForEach(cb, type);
        cb(this.value);
    } if (type === 'in-order' || type === undefined || type === null){
        if (this.left) this.left.depthFirstForEach(cb); 
        cb(this.value);
        if (this.right) this.right.depthFirstForEach(cb); 
   }
};
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  cb(this.value);

  if (this.left) array.push(this.left);
  if (this.right) array.push(this.right);

  let nexNode = array.shift();
  if (nexNode) nexNode.breadthFirstForEach(cb, array);
};
BinarySearchTree.prototype.size = function (){
  if(!this.left && !this.rigth) return 1;
  if(!this.left) return 1 + this.right.size();
  if(!this.right) return 1 + this.left.size();
  else return 1 + this.left.size() + this.right.size();
  
//   if (this.left && this.rigth) {
//     this._length = this._length + 2;
//     this.left.size();
//     this.right.size();
//   };
//  if (!this.left && this.rigth){
//   this._length ++;
//     this.right.size();
//   };
//   if (this.left && !this.rigth){
//     this._length ++;
//     this.left.size();
//   };
//   return this._length; 
};

module.exports = {
  BinarySearchTree,};
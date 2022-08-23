"use strict";
var tree,
      testArr,
      valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];

function BinarySearchTree(value) {
  this.value = value,
  this.left = null,        
  this.rigth = null;
  this._length = 1   
 }

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
    } if (type === undefined){
        if (this.left) this.left.depthFirstForEach(cb); 
        cb(this.value);
        if (this.right) this.right.depthFirstForEach(cb); 
   }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb) {
  // guarda izq y despues derecha, baja de nivel y guarda izq y despues derecha.
  if (this.left) console.log ("va a ejecutar cb a la izq"),cb(this.value), arr.push(this.value);
  if (this.right)  console.log ("va a ejecutar cb a la der"), cb(this.value), arr.push(this.value);
  if (this.left) this.left.breadthFirstForEach(cb);
  if (this.right) this.right.breadthFirstForEach(cb);
};

var tree = new BinarySearchTree(20);
var testArr = [];


tree.insert(15);
tree.insert(25);
tree.insert(5);
tree.insert(17);
tree.insert(21);
tree.insert(28);
tree.insert(0);
tree.insert(14);
tree.insert(50);
tree.insert(1);
tree.insert(45);
tree.insert(13);
tree.insert(12);
tree.insert(11);
tree.insert(30);
tree.insert(35);
tree.insert(33);
tree.insert(31);
tree.insert(34);

tree.depthFirstForEach(function(val){ testArr.push(val); });

tree.depthFirstForEach(function(val){ testArr.push(val); return testArr }, 'in-order');
tree.depthFirstForEach(function(val){ testArr.push(val); return testArr}, 'pre-order');
tree.depthFirstForEach(function(val){ testArr.push(val); return testArr}, 'post-order');

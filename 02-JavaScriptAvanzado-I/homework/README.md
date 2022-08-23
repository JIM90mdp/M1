
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; //crea una variable global no declarada. También genera una advertencia estricta de JavaScript. Las variables globales no declaradas a menudo pueden provocar un comportamiento inesperado. Por lo tanto, se desaconseja utilizar variables globales no declaradas.
var a = 5; // a = 5
var b = 10; // b = 10
var c = function(a, b, c) {
  var x = 10; // craa una variable local de la función
  console.log(x); // imprime x = 10
  console.log(a); //  pasada por referencia.
  var f = function(a, b, c) {
    b = a; 
    console.log(b); //b = 5 (si toma el valor del contexto global, pero la función tiene un argumento llamado b y puede estar siendo invocado)
    b = c; 
    var x = 5; //modifica la variable de x pasada por referencia, altera a c function()
  }
  f(a,b,c);//is not defined
  console.log(b); // imprime b = 10
}
c(8,9,10); //imprime 8
console.log(b); //imprime b = 10
console.log(x);//is not defined
```

```javascript
console.log(bar);//is not defined
console.log(baz);//is not defined
foo();//imprime hola  de la función foo. 
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //Franco (if true le pregunta a window y cambia la variable global de instructor, solo porque es IF.)
```

```javascript
var instructor = "Tony";
console.log(instructor); //imprime Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Imprime Franco (la variable es del contexto local de la función )
   }
})();
console.log(instructor); //imprime Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//The Flash
    console.log(pm);//Reverse Flash
}
console.log(instructor);//The Flash
console.log(pm);//Reverse Flash
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3"//6
4 + 5 + "px"//9px
"$" + 4 + 5//$45
"4" - 2//2
"4px" - 2//Not a number
7 / 0//error...
{}[0]
parseInt("09")
5 && 2// 3
2 && 5// 5
5 || 0// 5
0 || 5// 5
[3]+[3]-[10]//33-10 = 23
3>2>1//false
[] == ![]// 
```


> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined
   console.log(foo()); // 2
   var a = 1;
   function foo() {
      return 2;
   }
}

test(); //undefined y 2
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // undefined
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//'Aurelio De Rosa'

var test = obj.prop.getFullname; //'Juan Perez'

console.log(test()); //'Juan Perez'
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 0);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); //1, 4, 3, 2
```

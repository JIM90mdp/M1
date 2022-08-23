function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    let arr = [1];
    let n = 2;
    let sum = num;
    function fRecursion(num) {
        while(sum < num && sum >= 1){
            if(sum%n === 0){ //180/2     //90/2   //45/2
                sum = sum/n; //90       //45      //false
                arr.push(2) //2        //2
                sum.fRecursion()
            }else {
                n++;    
                sum.fRecursion()        //45/3  //15
            }
        }
     }
    fRecursion(num);
}

let arr = [];
let n = 2;
while(num > 1){ 
  if(num%n === 0){ 
    num = num/n;
    arr.push(n) 
    }
  else {
    n++;
  } 
  if (num === 1){
    arr.unshift(1);
  }
 }
return arr;
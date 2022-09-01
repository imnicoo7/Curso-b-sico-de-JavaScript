
// La forma de convertir un type a otro: Coercion 
let a = 4 + "7";
typeof(a)
//cohersion implicita que regresara un string
let b = 4*"7";
typeof(b)
//* cohersion implicita que regresarara un number 

let c = 20;
let d = String(c)
//cohersion explicita
//* obligamos que la var c se vuelva un string

var e = Number(d)

/*  
Number + Number = Number
Number + String = String
String + Number = String
String + String = String
*/
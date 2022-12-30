//1
var a = +prompt("введіть початок діапазону");
var n = +prompt("введіть кінець діапазону");
var sum = 0;
 
while(a <= n){       
       sum+=a;  
       a++;
    }
 
alert(sum);

//2
var a = +prompt('ввведить перше число')
var b = +prompt('ввведить друге число')
var gcd;
while (a!=b) {
  if (a>b) {
    a = a -b;
  }
  else {
    b = b - a;
  }
}
gcd = a;
alert(gcd);

//3

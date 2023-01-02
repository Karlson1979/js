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
var x=prompt('введить число');
var i=1;
 var a="";

while (i<x){
  if(x%i===0) {
   a += i + " ";
  }
  i++;
  
}
 
  alert(a);

  //4
  var x=+prompt('введить число');
var res="";
i=0
while(x!=0)
{
  x=parseInt(x/10);
  i++; 
res=i;

}

alert(res);
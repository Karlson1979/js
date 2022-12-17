// //1
var x=+prompt('Вкажить свій вік:');
if(x>=0&&x<=2) alert('Ви дитина');
if(x>=12&&x<18) alert('Ви підліток');
if(x>=18&&x<=59) alert('Ви дорослий');
if(x>=60) alert('Ви пенсіонер');

//2
var x=+prompt('Вкажить число від 0 до 9:');
switch(x){
    case 0: alert(')');
    break;
    case 1: alert('!');
    break;
    case 2: alert('@');
    break;
    case 3: alert('#');
    break;
    case 4: alert('$');
    break; 
    case 5: alert('%');
    break;
    case 6: alert('^');
    break;
    case 7: alert('&');
    break;
    case 8: alert('*');
    break;
    case 9: alert('(');
    break; 

    default: alert('не вірно вказано число');
}

// //3 не зроблена
var x=+prompt('введить трьохзначне число:');
var y= charAt(0);
var z= charAt(1);
var w= charAt(2);
if(y==z||y==w||z==w);
alert ('В числі є однакові числа');


//4
var x=+prompt('введить рік');
if(x%400==0|| x%4==0 && x%100!=0)
document.write ('рік високосний');
else document.write ('рік не високосний');

//5


//6
var x=+prompt('введить кількість USD');
var y=prompt('введить в яку валюту перевести: EUR UAN AZN');

switch (y) {
  case 'EUR': alert(x*1.2);
 break;
    case 'UAN': alert(x*0.2);
 break;
case 'AZN': alert(x*0.4);
 break;
    default: alert('не вірно задані параметри');
}

//7
var x=+prompt('Введить сумму покупки');
y=x-(x*0.03);
w= x-(x*0.05);
z=x-(x*0.07)

if(x>=200 && x<300) alert ('Сума до сплати:'+ y);
else if(x>=300 && x<500) alert ('Сума до сплати:' + w);
else if(x>=500) alert ('Сума до сплати:' + z);

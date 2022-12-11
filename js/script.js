//3
var x=+prompt('Введить значення змінної х');
if(x>=0 && x<=100)
alert (x+ ' -  належить');
else alert (x+ ' - не належить');

//4
var x=+prompt('Введить значення змінної х');
var y=+prompt('Введить значення змінної y');
if(x<y) alert('x<y');
if(x>y) alert('x>y');
if(x==y) alert('x=y');

//5

var x=+prompt('Введить значення змінної х');
if (x>=0 && x<=100) alert(x + '- належить до диапазону 0...100')
else if (x>=101 && x<=200) alert(x + '- належить до диапазону 101...200')
else if (x>=201 && x<=300) alert(x + '- належить до диапазону 201...300')
else alert(x +' не належить жодному діапазону');

//6
var x=+prompt('Введить цифру');

switch(x){
    case 0: alert('нуль');
break;
case 1: alert('один');
break;
case 2: alert('два');
break;
case 3: alert('три');
break;
case 4: alert('чотири');
break;
case 5: alert('пʼять');
break;
case 6: alert('шість');
break;
case 7: alert('сім');
break;
case 8: alert('вісім');
break;
case 9: alert('девʼять');
break;
default: alert('не цифра');
}
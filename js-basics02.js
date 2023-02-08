//if
isChild = age<18
isAdult = age>=18
//in this 2 variables are used, to avoid many variables and easy method is using 'if'
var age = 10
if(age>18)
{
    console.log('Adult')
}
else{
    console.log('Child')
}

var s = 10
if(s==10)
    console.log('Equals')
else
    console.log('Not Equals')

//for
var i
for(var i=0;i<5;i++)
{
    console.log('Hello World')
}

var j
for(var j=0;j<5;j++)
{
    console.log('Hello World:' +j)
}
//Hello World:0
//Hello World:1
//Hello World:2
//Hello World:3
//Hello World:4

//while
let aa=1
while(aa<10)
{
    console.log('In while loop:' +aa)
    aa++
}

//switch
var bb=9
switch(bb)
{
    case 1: console.log('B value is 1')
    break;
    case 5: console.log('B value is 5')
    break;
    case 8: console.log('B value is 8')
    break;
    default: console.log('B value is' +bb)
    break;
}
//B value is 9


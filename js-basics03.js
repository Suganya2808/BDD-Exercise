//array
let aa = [] //[]
let a = ['Adam','Eva','Joe','Mike','Jack','Eva']
var ages = [10,12,15,16,17]
console.log(a)
console.log(a[2])
console.log(ages[2])
console.log(a.length)//display how many values in an array
console.log(a.indexOf('Eva'))// if name is twice it will take the first occurence
console.log(ages.indexOf('Mike'))//it value is not there it will give -1
console.log(ages.indexOf(12))//display the index number
//index number starts with 0

let car = {
    make:'BMW',
    model1:'X5',
    year: 2022,
    type: 'SUV'
}
console.log(car)


let student=
{
    idNno:1002,//camel case
    name: 'Suganya',
    age: 12,
    school :'First Lutheran',
    class:'8th grade',
    score:'85%',//it should specify as string because % is a string
    hobbies: ['fishing','reeading books']
}
console.log(student)
//other types to diaplay only one property
console.log(student.name)
console.log(student['school'])

//function
function addNumbers(x,y)
{
    return x+y
}
console.log(addNumbers(15,10))

//function with no parameters
function printData()
{
    console.log('Hello World')
}
console.log(printData())

//multiply
function multiplyNumbers(m,n)
{
    return m*n
}
console.log(multiplyNumbers(10,5))

//Square
function giveSquare(d)
{
    return d*d
}
console.log(giveSquare(4))

//area of triangle
function areaOfTriangle(b,h){
    return 1/2*b*h
}
console.log(areaOfTriangle(10,40))

//find biggest
function findBig(m,n)
{
    if(m>n) return m
    else
    return n
}
console.log(findBig(50,75))

//odd or even
function isOdd(z)
{
    return z%2==1
}
console.log(isOdd(9))//true
console.log('Is Odd:' +isOdd(9))//Is Odd: true

const countries = ['India','US','Uk','France']
console.log(countries[0])//India
console.log(countries.indexOf('India'))
console.log(countries)
countries.push('Pakistan')//added in the end
console.log(countries)
countries.unshift('Mexico')//added in th beginning
countries.pop()//remove the last value
countries.shift()//remove the first value
//to remove specific value(banana)
let fruits = ['apple','mango','banana','peach','pear']
let index = 2 //2 is index number of banana
fruits.splice(index,1) //1 is how many values to be deleted
console.log(fruits)//['apple', 'mango', 'peach', 'pear']
fruits.push('papaya','orange','berries','grapes')
console.log(fruits) //['apple', 'mango', 'peach', 'pear', 'papaya', 'orange', 'berries', 'grapes']
fruits.splice(index,3) //delete 3 items
console.log(fruits) //['apple', 'mango', 'orange', 'berries', 'grapes']

function findArrayLength(arr)
{
    return arr.length
}
const arr = ['India','US','UK','France','Mexico']
console.log(findArrayLength('UK'))
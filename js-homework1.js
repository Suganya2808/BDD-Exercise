//1.function to count the characters in a string
function countCharacters(arr)
{
    return arr.length
}
console.log(countCharacters('Suganya'))
//7

//2.function to accept 2 numbers and return the largest number
function largestNumber(a,b)
{
    if(a>b)
    return a
    else
    return b
}
console.log(largestNumber(20,40))

//3.function that return boolean value if number is between 5000 and 9999
function returnBooleanValue(num)
{
    if(num>5000 && num<9999)
    return true
    else
    return false
}
console.log(returnBooleanValue(5500))

//4. accepts a number and returns cuberoot
function returnCubeRoot(n)
{
    return n*n*n
}
console.log(returnCubeRoot(5))

//5. function to convert inches into feet, get inch as inout parameter return value in feet
function inchesToFeet(m)
{
    return m/12
}
console.log('value in feet:' +inchesToFeet(3))

//6. function to convert degree to fahrenheit
function degreeToFahren(s)
{
    return (s * 9/5) + 32
}
console.log(degreeToFahren(10) +'°F')

//7. program to convert kilo to lb and viceversa
function kiloToPounds(xx)
{
    return xx * 2.205
    
}
function poundsToKilo(yy)
{
    return yy / 2.205
}
console.log(kiloToPounds(3) + 'lb')
console.log(poundsToKilo(5) + 'kg')

//10. function to return longest string if 2 strings are given as input
function longestString(string1,string2)
{
    if(string1.length>string2.length)
    return string1
    else
    return string2
}
console.log(longestString('Suganya','Eva'))

// 11. function that returns string of shortest length in an array 0f parameters
//reduce is a prototype(that defines some rules)
const arr = ['Adam','Joe','Suganya','Vishagan','Ramesh']
console.log(arr.reduce(function(str1,str2) 
    {
        return str1.length <= str2.length ? str1 : str2;
    })
)
//?: --> is a ternary operator(if the statement is true it print str1 else str2)






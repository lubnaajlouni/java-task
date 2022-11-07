function  largestNumber(a,b) {
if(b>a){
    return b}
    else {return a}
}

var a=prompt("Please enter the value", "1");      // var a=2
var b=prompt("Please enter the value", "1");     // var b=4
 document.write("the two numbers are:" + a + "and" + b + ",and the largest number is:" + largestNumber(a,b));
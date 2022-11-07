var str= ["lubna2","lubna222","lubna22","lubna22222"]

function shorterInArray(str){
var short=str[0].length;
let index=0;
for(let i=1;i<str.length;i++)
{if(str[i].length <short){short=str[i].length; index=i;}
}
return str[index];
}
document.write(shorterInArray(str));
  
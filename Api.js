async function getdata(){
    const select=document.getElementById("select")
    const response = await fetch("https://www.breakingbadapi.com/api/characters")
    const data = await response.json();
    console.log(data);
     for( let i=0 ; i<data.length ; i++ ){
        document.getElementById("select").innerHTML += `<option value=${data[i].img}>${data[i].name}</option>`
  
 }}
 getdata();
 function change(){
    let v=document.getElementById("select").value
    document.getElementById("image").src=v;

   }
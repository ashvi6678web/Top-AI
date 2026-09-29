const button=document.querySelector("button");
const input=document.querySelector("input");

button.onclick=()=>{

if(input.value.trim()=="") return;

alert("TopAI : "+input.value);

input.value="";

}

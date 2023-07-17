const txt=document.getElementById("txt");
const mes=document.getElementById("aff");
const hie=document.getElementById("hide");
const button=document.querySelector("button");

button.addEventListener('click',function(){
   if(txt.value === ''){
    document.getElementById("hide").classList.add('show');
   }
    mes.textContent=txt.value;
    // txt.textContent="";
})

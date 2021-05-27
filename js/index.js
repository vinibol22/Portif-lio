const title=document.querySelector(".title-animation")
console.log(title)
function typeWriter(element){
    const titleArray=element.innerHTML.split("")
    element.innerHTML="";
    titleArray.forEach((let,i)=>{
        setTimeout (()=>
      element.innerHTML+=let,75*i);

});
}

typeWriter(title);



/*
const card=document.querySelector(".card");
document.addEventListener('click'),e=>{
  do
}*/
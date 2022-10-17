const adviceId=document.querySelector(".advice-id");
const adviceContainer=document.querySelector(".advice");
const newAdvice=document.querySelector(".dice-container");



const getAdvice=async function(){
    const res= await fetch("https://api.adviceslip.com/advice");
    const data=await res.json();
    const {slip:{id},slip:{advice}}=data;
    adviceId.textContent=`ADVICE # ${id}`;
    adviceContainer.textContent=`"${advice}"`;
    console.log(id ,advice);
    };

    getAdvice();


newAdvice.addEventListener('click',getAdvice);


    

const wrapper=document.querySelector(".wrapper")
const qrimg=document.querySelector(".qr-code img")
const generatebtn=wrapper.querySelector(".form button");
const qrinput=wrapper.querySelector(".form input");
generatebtn.addEventListener("click",()=>{
    let qrvalue=qrinput.value;
    console.log(qrvalue);
    if(!qrvalue) return;
    qrimg.src=` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
    wrapper.classList.add("active");
});
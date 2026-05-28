const button = document.querySelector("#btn");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector(".result");

button.addEventListener("click", (e)=>{
    e.preventDefault();

    let add = parseInt(num1.value) + parseInt(num2.value);
    if(isNaN(add)){
        alert("Please Enter numbers");
    }else{
        result.textContent = `Result : ${add}`;
    }
});
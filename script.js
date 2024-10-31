document.querySelector("#addTaskBtn").addEventListener("click",function(){
    document.querySelector("#formContainer").style.display = "flex";
})
document.querySelector("#cancelBtn").addEventListener("click",()=>{
    document.querySelector("#formContainer").style.display = "none"
})
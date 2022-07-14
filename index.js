document.querySelector(".submit").addEventListener("click", function(){
    alert("registered successfully");
})

document.addEventListener("keydown", function (event) {
    if(event.key === "Enter")
    {
        document.querySelector(".submit").click();
    }
});
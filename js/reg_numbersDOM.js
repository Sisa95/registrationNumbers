let list = document.getElementById("myList");
var checkedRadioBtn = document.querySelector("input[name='town']:checked");
    

var regNumberInstance = registrationNumbers()
function registration(){
  
    var textArea = document.querySelector(".text").value;

    regNumberInstance.storeTown(textArea)//////////////////////////////////    
    regNumberInstance.getStoreTown().forEach((item)=>{
        alert(item)
    let li = document.createElement("li");
    li.innerText = item;
    list.innerHTML = item
    });
}

document.querySelector(".addButton").addEventListener("click", registration)
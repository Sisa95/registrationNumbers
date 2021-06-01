let list = document.getElementById("myList");
var checkedRadioBtn = document.querySelector("input[name='town']:checked");
    

var regNumberInstance = registrationNumbers()
function registration(){
  
    if(checkedRadioBtn){

        let li = document.createElement("button");
    
        li.innerText = regNumberInstance.filterReg(checkedRadioBtn.value) 
        list.appendChild(li);
    }

    var textArea = document.querySelector(".text").value;

    regNumberInstance.storeTown(textArea)//////////////////////////////////  
    
    // regNumberInstance.getStoreTown().forEach((item)=>{
        
    //     let li = document.createElement("li");
    //     li.innerText = "Hello," + item;
    //     list.appendChild(li);
    // });

    let li = document.createElement("button");
    
    li.innerText = regNumberInstance.cities(textArea) 
    list.appendChild(li);
}

document.querySelector(".addButton").addEventListener("click", registration)
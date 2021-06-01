
function registrationNumbers(){
    var found = [];
   

    function cities(city){
        // var regex = /^[A-Za-z ]+$/;
        var city =  city.trim().toUpperCase();
        // var isValid = regex.test(city)
        // if(!isValid){
            return city;
        // }
    }

    function storeTown(town){
        var town = town.trim().toUpperCase();
        if(!found.includes(town)){
            found.push(town)
        } else {
            return "Town is already stored";
        }
    }
    
    function getStoreTown(){
        return found;
    }

    function filterReg(city){
        var selectedCity = city
        for(var i = 0; i < found.length; i++){
            if(selectedCity == found[i].startsWith("CY")){
                return found[i]
            } else if(selectedCity == found[i].startsWith("CJ")){
                return found[i]
            } else if(selectedCity == found[i].startsWith("CA")){
                return found[i]
            }
        }
    }
    return{
        cities,
        storeTown,
        filterReg,
        storeTown,
        getStoreTown,
    }
}
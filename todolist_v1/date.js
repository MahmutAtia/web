


module.exports.getDate = getDate;


function getDate(){
    let date = new Date();
const option = {
        weekday : "long",
        day : "numeric",
        month : "long"
                    }

    
day = date.toLocaleDateString("en-US", option);
return day
}


module.exports.getDay = getDay;


function getDay(){
    let date = new Date();
const option = {
        weekday : "long"
                    }

    
day = date.toLocaleDateString("en-US", option);
return day
}

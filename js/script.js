$(document).ready(function(){
    // Get current date
    const date = new Date();
    const hour = date.getHours();
    console.log(hour);
    let message = '';
    if(hour <= 12) {
        message = "Good Morning";
    }
    if(hour > 12){
        message = "Good Afternoon";
    }
    if(hour > 17) {
        message =  "Good Evening";
    }
    $('#headingtext').empty().append(message + " From Sunny");
})
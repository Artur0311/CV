var EmailTitle = document.getElementById("EmailTitle")
var Email =  document.getElementById("Email")




EmailTitle.onmouseover = function(event){
    Email.style.display = "inline";
}

EmailTitle.onmouseout = function(event){
    Email.style.display = "none";
}
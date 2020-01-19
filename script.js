//generate random password
function pgenerate(){
    //password length[8-128 characters]
    let pRange = document.getElementById("slider").value;
    //pasword types
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let rPassword = "";
    
    //choose password characters
    for (var i=0; i<= pRange; i++){
        rPassword = rPassword + values.charAt(Math.floor(Math.random()*Math.floor(values.length -1)));
    }
    //add password to text area
    document.getElementById("password").value = rPassword;
    //add password to previous generated passwords
    document.getElementById("lastPasswords").innerHTML+= rPassword + "<br/>";
}
//start range at 64
document.getElementById("length").innerHTML = "Length: 64"
//length range
document.getElementById("slider").oninput = function(){
  if (document.getElementById("slider").value > 0){
      document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
}
//copy to clipboard
function copyPwd(){
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password has been copied to Clipboard");
}

    

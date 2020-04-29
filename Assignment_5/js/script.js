function getSubmit() {
    var name            = document.getElementById("fullName").value;
    var emailId         = document.getElementById("emailId").value;
    var passwd          = document.getElementById("passwd").value;
    var confrmPasswd    = document.getElementById("confrmPasswd").value;
    var altEmail        = document.getElementById("altEmail").value;
    var mobno           = document.getElementById("mobno").value;
    
    var element = document.getElementById("dabba");
    element.innerHTML = "Fullname &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp : "+ name + "<br>";
    element.innerHTML += "Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp &nbsp; &nbsp; : " + emailId + "<br>";
    element.innerHTML += "Password &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp: " + passwd + "<br>";
    element.innerHTML += "Aternet Email &nbsp; &nbsp; &nbsp;: " + altEmail + "<br>";
    element.innerHTML += "Contact &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp : " + mobno + "<br>";

}
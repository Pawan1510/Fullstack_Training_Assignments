
function getSubmit() {
    var name            = document.getElementById("fullName").value;
    var emailId         = document.getElementById("emailId").value;
    var passwd          = document.getElementById("passwd").value;
    var confrmPasswd    = document.getElementById("confrmPasswd").value;
    var altEmail        = document.getElementById("altEmail").value;
    var mobno           = document.getElementById("mobno").value;
    var day             = document.getElementById("day").value;
    var month           = document.getElementById("month").value;
    var year            = document.getElementById("year").value;
    var dob             = day + " / " + month + " / " + year;
    var ele = document.getElementsByName("gender");
    var gender = "";
    for(i =0; i < ele.length; i++){
        if(ele[i].type="radio") {
            if(ele[i].checked){
                gender = ele[i].value;
            }
        }
    }
    var country         = document.getElementById("country").value;
    var city            = document.getElementById("city").value;
    var captcha         = document.getElementById("captcha").value;

    var element = document.getElementById("dabba");
    
    element.innerHTML = "Fullname &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp : "+ name + "<br>";
    element.innerHTML += "Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp &nbsp; &nbsp; : " + emailId + "<br>";
    element.innerHTML += "Password &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp: " + passwd + "<br>";
    element.innerHTML += "Aternet Email &nbsp; &nbsp; &nbsp;: " + altEmail + "<br>";
    element.innerHTML += "Contact &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp : " + mobno + "<br>";
    element.innerHTML += "DateOfBirth &nbsp;&nbsp &nbsp; &nbsp : " + dob + "<br>";
    element.innerHTML += "Gender &nbsp; &nbsp;&nbsp; &nbsp &nbsp; &nbsp &nbsp; &nbsp;: " + gender + "<br>";
    element.innerHTML += "Country &nbsp; &nbsp; &nbsp &nbsp; &nbsp &nbsp; &nbsp;: " + country + "<br>";
    element.innerHTML += "City  &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp &nbsp; &nbsp &nbsp; &nbsp;: " + city + "<br>";
    element.innerHTML += "Captcha  &nbsp;&nbsp;&nbsp; &nbsp &nbsp; &nbsp &nbsp; : " + captcha + "<br>";

}
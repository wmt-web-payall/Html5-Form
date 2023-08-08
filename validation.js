function submit(){
    const password = document.getElementById("password")
    console.log(password);
    console.log("hello")
    alert("form is submitted")
  
   
}


    const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    const email = document.getElementById("email").value
    const confirmemail = document.getElementById("confirmemail").value
    document.getElementById("myForm").addEventListener("submit", function (e) {
        console.log(e)
        e.preventDefault();
        alert("form submitted----")

        if (password == "") {
            document.getElementById("message").innerHTML = "**Fill the password please!";
            return false;
        }


        if (password.length < 6) {
            document.getElementById("message").innerHTML = "**Password length must be atleast 6 characters";
            return false;
        }


        if (password.length > 15) {
            document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
            return false;
        }
        if (password != confirmpassword) {
            alert("Passwords do not match.");
            return false;
        }
    })

    document.getElementById("email").addEventListener("change", function (e) {
        console.log("email validation")
        if (mailformat.test(email)) {
            return true
        }
        else {
            document.getElementById("errmessage").innerHTML = "**Invalid email address";

        }
    })

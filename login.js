const check =()=>{
    let uEmail= document.getElementById('inputEmail').value;
    let uPassword= document.getElementById('inputPassword').value;

    let stringifyRegUser= localStorage.getItem("REG_USER");

    let registerUser= JSON.parse(stringifyRegUser);

    console.log(registerUser);

    if(registerUser)
    {
    if(uEmail === registerUser.email && uPassword === registerUser.password)
    {
        location.href='home-page.html'
    }
    else
    {
        document.getElementById('errorMessage').innerHTML="Wrong Username or Password";
    }
    }
    else
    {
        document.getElementById('errorMessage').innerHTML="No Registered User Found";
    }
}
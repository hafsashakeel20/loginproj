const onRegister=()=>{
  let firstname= document.getElementById('fname').value;
  let lastName= document.getElementById('lname').value;

  let email= document.getElementById('email').value;
  let password= document.getElementById('password').value;

  let phone= document.getElementById('phone').value;
  let company= document.getElementById('company').value;


  let registerUser={
      name : firstname+" "+lastName,
      email,
      password,
      phone,
      company
  };

  console.log(registerUser)
  let stringifyRegUser= JSON.stringify(registerUser);

  localStorage.setItem("REG_USER",stringifyRegUser);

}
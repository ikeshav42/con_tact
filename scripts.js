function valid()
{
  let nameVar = document.getElementById("name").value;
  let emailVar = document.getElementById("email").value;
  let passVar = document.getElementById("pass").value;
  let cpassVar = document.getElementById("cpass").value;

  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  let e = 0;
  
  let text;
  if(nameVar.length < 3)
  {
    text = "Please Enter valid Name";
    document.getElementById('error_name').innerHTML = text
    document.getElementById('name').style.borderColor = "red";
    
  }
  else if(nameVar.length >=3)
  {
    text = "";
    document.getElementById('error_name').innerHTML = text
    document.getElementById('name').style.borderColor = "green";
    a=1;
  }
  if(emailVar.indexOf("@") == -1 || emailVar.length < 4)
  {
    text = "Please Enter valid Email";
    document.getElementById('error_email').innerHTML = text
    document.getElementById('email').style.borderColor = "red";
    
  }
  else if(emailVar.indexOf("@") == 1 || emailVar.length > 4)
  {
    text = "";
    document.getElementById('error_email').innerHTML = text
    document.getElementById('email').style.borderColor = "green";
    b=1;
  }
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
  if(passVar.length<8)
  {
    text = "Please Enter valid password (greater than 8 characters)";
    document.getElementById('error_pass').innerHTML = text
    document.getElementById('pass').style.borderColor = "red";
    
  }
  else if(!(passVar.length<8))
  {
    text = "";
    document.getElementById('error_pass').innerHTML = text
    document.getElementById('pass').style.borderColor = "green";
    c=1;
  }
  if(cpassVar!=passVar || cpassVar.length<8)
  {
    text = "Passwords do not match";
    document.getElementById('error_cpass').innerHTML = text
    document.getElementById('cpass').style.borderColor = "red";
    
  }
  else if(cpassVar==passVar)
  {
    text = "";
    document.getElementById('error_cpass').innerHTML = text
    document.getElementById('cpass').style.borderColor = "green";
    d=1;
  }
  if(a==1 && b==1 && c==1 && d==1)
  {
    return true;
  }
  else
  {
    return false;
  }
}


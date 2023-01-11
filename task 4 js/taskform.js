let Userid = document.getElementById("fname");
let Password = document.getElementById("password");
let Name = document.getElementById("iname");
let Address = document.getElementById("address");
let Country = document.getElementById("country");
let ZIP = document.getElementById("zip");
let Email = document.getElementById("email");
let Sex = document.getElementById("sex");
let Language = document.getElementById("language");
let About = document.getElementById("about");

function validated(){
    if(fname.value == "" )
    {
        alert("invalid")
        return false;
    }
    else if(fname.value.length>=7 )
    {
        alert("user id is wrong")
        return false;
    }
    else if (passsword.value == "") 
    {
        alert("invalid")
        return false;
    }
    else if(password.value.length>=8 )
    {
        alert("user password is too long")
        return false;
    }
    else if(iname.value == "" )
    {
        alert("invalid")
        return false;
    }
    else if(address.value == "" )
    {
        alert("invalid")
        return false;
    }
    else if(country.value == "" )
    {
        alert("invalid")
        return false;
    }
    else if(zip.value == "" )
    {
        alert("invalid")
        return false;
    }
    else if(email.value == "" )
    {
        alert("invalid")
        return false;
    }
    else if(sex.value == "" )
    {
        alert("invalid")
        return false;
    }
    else if(language.value == "" )
    {
    alert("invalid")
    return false;
    }
    else if (about.value == "" )
    {
        alert("invalid")
        return false;
    }
    else{
        alert("validated")
        return true;
    }
}
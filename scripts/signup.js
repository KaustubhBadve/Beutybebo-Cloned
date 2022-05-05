import {header,footer} from "../component/navbar.js";
document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();



let register = async (e) => {
    e.preventDefault();

    let form_data = {
      name: document.getElementById("first-name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      username: document.getElementById("email").value,
      mobile: document.getElementById("phone").value,
      description: document.getElementById("cpassword").value,
    };
    if(!form_data.name || !form_data.email || !form_data.password || !form_data.username || !form_data.mobile){
        alert('Please fill all the required fields')
        return
    }

    form_data = JSON.stringify(form_data);

    let res = await fetch(
      "https://masai-api-mocker.herokuapp.com/auth/register",
      {
        method: "POST",
        body: form_data,
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

    let data = await res.json();
    console.log(data);
    if(data.error==true){
        alert('Registration failed, user already exists')
        return
    }
    else{
        
        window.location.href= "./login.html";
    }
  };
  let data = JSON.parse(localStorage.getItem("acc_data")) || [] ;
  let append = (data)=>{
    let acc = document.querySelector("#acc");
    acc.textContent = data.name;
  //   acc.append();

}
append(data);

  document.getElementById("submit").addEventListener("click", register);
  
import {header,footer} from "../component/navbar.js";
document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();

let login = async () => {
    event.preventDefault();
    let user_data = {
      username: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    user_data = JSON.stringify(user_data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: user_data,

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();

    let username = document.getElementById('email').value;
    getUserDetail(username, data.token);
    console.log(data);
    if(data.error==true){
        alert('Sign-in failed check user credentials')
        return
    }
    else{
        alert('Sign-in Successfull')
        setTimeout(()=>{
            window.location.href= "./myAccount.html";
        },2000)
    }
   
  };

  document.getElementById("submit").addEventListener("click", login);

  let getUserDetail = async (username, token) => {
      console.log("here");
    let res = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${username}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    let data = await res.json();
    console.log("user data: ", data);
    append(data);

    
    localStorage.setItem("acc_data",JSON.stringify(data)) || [];
       
      
  };
  let data1 = JSON.parse(localStorage.getItem("acc_data")) ;

  let append = (data1)=>{
    
        let acc = document.querySelector("#acc");
        acc.textContent =  data1.name;
   
    }
    append(data1);
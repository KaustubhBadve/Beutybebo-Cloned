import {header,footer} from "../component/navbar.js";
document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();

let data1 = JSON.parse(localStorage.getItem("acc_data")) ;

  let append = (data1)=>{
    
        let acc = document.querySelector("#acc");
        acc.textContent =  data1.name;

        let naam = document.querySelector("#nameToShow");
        naam . textContent = data1.name

        let mail = document.querySelector("#mailToShow");
        mail . textContent = data1.email;
   
    }
    append(data1);

    
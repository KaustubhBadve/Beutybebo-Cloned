import {header,footer} from "../component/navbar.js";
document.getElementById("header1").innerHTML=header();
document.getElementById("footer").innerHTML=footer();

function c(s)
{
    return console.log(s);
}
let prod=JSON.parse(localStorage.getItem("cart_products"));
c(prod);

let cart_total=localStorage.getItem("Totalprice");
c(cart_total);
document.getElementById("Total_items").innerText=`Rs ${Number(cart_total).toFixed(2)}`;
document.getElementById("Total_amount").innerText=`Rs ${(Number(cart_total)+55).toFixed(2)}`;

function create(s)
{
    return document.createElement(s);
}

prod.forEach(function(e)
{
    let z10=create("div");
    z10.setAttribute("id","box5-r")
    let z1=create("img");
    z1.setAttribute("id","img1");
    z1.src=e.img;
    z10.append(z1);
    let z0=create("p");
    z0.innerText=e.title;
    let z2=create("p");
    z2.innerText=e.price;
    let z3=create("p");
    z3.innerText=e.qty;
    let z4=create("p");
    z4.innerText=Number(e.price)*Number(e.qty);
    let z11=create("div");
    z11.setAttribute("id","box66-r");
    let z12=create("hr")
    z11.append(z10,z0,z2,z3,z4);
    document.getElementById("box6-rr").append(z11,z12);
})



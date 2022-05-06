import {header,footer} from "../component/navbar.js";
document.getElementById("header1").innerHTML=header();
document.getElementById("footer").innerHTML=footer();

let prod_total=JSON.parse(localStorage.getItem("cart_products"));

let cart_total=localStorage.getItem("Totalprice");
//console.log(Totalprice);
document.getElementById("subtotal-r").innerText=Number(cart_total).toFixed(2);
document.getElementById("total_gst").innerText=Number(cart_total).toFixed(2);


function create(s)
{
    return document.createElement(s);
}
var prod=JSON.parse(localStorage.getItem("cart_products"));
console.log(prod)
prod.forEach(function(e,i)
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
    z11.setAttribute("id","box6-r")
    z11.append(z10,z0,z2,z3,z4);
    let z7=create("div");
    z7.setAttribute("id","box7-r")
    let z5=create("button");
    z5.innerText='Edit';
    let z6=document.createElement("button");
    z6.innerText='Remove item';
<<<<<<< HEAD
    z6.addEventListener("click",function(e,i){
       removeitem(e,i)
=======
    z6.addEventListener("click",function(){
      del(e);
>>>>>>> 6861d2e801ab9414460051a3844e45126e6571c4
    })
  z7.append(z5,z6);
    document.getElementById("box6-rr").append(z11,z7);
})
function del(e)
{
    for(let i=0;i<prod.length;++i)
    {
      if(prod[i].title==e.title)
      {
        if(e.qty==1)
        prod.splice(i,1);
        else
        {
          let k=Number(e.qty);
          --k;
          prod[i].qty=k;
        }
      }
      
    }
    var total=localStorage.getItem("Totalprice");
    total=Number(total)-Number(e.price);
    localStorage.setItem("Totalprice",total);
    localStorage.setItem("cart_products",JSON.stringify(prod))
    location.reload();
    
}


function removeitem(e,i){
  // if(e.qty==1){
    prod.splice(i,1)
    console.log(prod)
    localStorage.setItem("cart_products",JSON.stringify(prod))
    window.location.reload()
  // }
  // else{
  //   let k=Number(e.qty)
  //   k--
  //   e.qty=k
  //   console.log(prod)
  //   localStorage.setItem("cart_products",JSON.stringify(prod))
  //   // window.location.reload()
  // }
  
}


import {header,footer} from "../component/navbar.js"

document.getElementById("header").innerHTML=header()


document.getElementById("footer").innerHTML=footer()





document.getElementById("profilesymbol").addEventListener("click",showlogindiv)
var flag=false
function showlogindiv(){
  if(flag==false)
  {
    document.getElementById("profile").style.display="block"
    flag=true
  }
  else if(flag=true)
  {
    document.getElementById("profile").style.display="none"
    flag=false
  }
  
}





document.getElementById("searchsymbol").addEventListener("click",searchProduct)


async function searchProduct(){
  try{

let query=document.getElementById("inputsearch").value

let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${query}`)

let data=await res.json()

console.log(data)
showSearch(data)

  }catch(err)
  {
    console.log(err)
  }
}

var searchflag=false

function showSearch(data){

  document.getElementById("searchresultdiv").innerHTML=null

if(searchflag==false){
  document.getElementById("searchresultdiv").style.display="block"
  searchflag=true
}
else if(searchflag==true){
  document.getElementById("searchresultdiv").style.display="none"
  searchflag=false
}


 
  data.forEach(function(elem){

    let main=document.createElement("div")
    main.setAttribute("id","searchmain")

    let name=document.createElement("div")
    name.innerText=elem.name
    name.setAttribute("id","searchname")

    let imagdiv=document.createElement("div")
    imagdiv.setAttribute("id","searchimgdiv")

    let image_link=document.createElement("img")
    image_link.src=elem.image_link

    imagdiv.append(image_link)

    let brand=document.createElement("div")
    brand.innerText="Brand Name : "+elem.brand
    brand.setAttribute("id","brandname")
    

    let description=document.createElement("div")
    description.innerText="Description"+"  "+elem.description
    description.setAttribute("id","searchdescription")

    let merge=document.createElement("div")
    merge.append(name,brand,description)
    merge.setAttribute("id","mergesearch")

    main.append(imagdiv,merge)

    document.getElementById("searchresultdiv").append(main)
  })
 
}




document.getElementById("navbartitle1").addEventListener("mouseover",mouseover)

function mouseover(){

document.querySelector("#A").style.display="block"
}

document.getElementById("navbartitle1").addEventListener("mouseout",mouseout)

function mouseout(){

document.querySelector("#A").style.display="none"
}





document.getElementById("navbartitle2").addEventListener("mouseover",mouseover2)

function mouseover2(){

document.querySelector("#BB").style.display="block"
}

document.getElementById("navbartitle2").addEventListener("mouseout",mouseout2)

function mouseout2(){

document.querySelector("#BB").style.display="none"
}



document.getElementById("navbartitle3").addEventListener("mouseover",mouseover3)

function mouseover3(){

document.querySelector("#CC").style.display="block"
}

document.getElementById("navbartitle3").addEventListener("mouseout",mouseout3)

function mouseout3(){

document.querySelector("#CC").style.display="none"
}




document.getElementById("navbartitle4").addEventListener("mouseover",mouseover4)

function mouseover4(){

document.querySelector("#DD").style.display="block"
}

document.getElementById("navbartitle4").addEventListener("mouseout",mouseout4)

function mouseout4(){

document.querySelector("#DD").style.display="none"
}






document.getElementById("navbartitle5").addEventListener("mouseover",mouseover5)

function mouseover5(){

document.querySelector("#EE").style.display="block"
}

document.getElementById("navbartitle5").addEventListener("mouseout",mouseout5)

function mouseout5(){

document.querySelector("#EE").style.display="none"
}







document.getElementById("navbartitle6").addEventListener("mouseover",mouseover6)

function mouseover6(){

document.querySelector("#AA").style.display="block"
}

document.getElementById("navbartitle6").addEventListener("mouseout",mouseout6)

function mouseout6(){

document.querySelector("#AA").style.display="none"
}



 //To keep the navbar position fix

window.onscroll = function() {myFunctionn()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunctionn() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




let totalcart=localStorage.getItem("Totalprice")


document.getElementById("cartvalue").innerHTML= totalcart || 0 

document.getElementById("totalpriceofallproduct").innerHTML= ("₹ "+ totalcart+".00") || 0 



let productlist_cart=JSON.parse(localStorage.getItem("cart_products"))


function Cartelementshow(){

document.getElementById("product_lists").innerHTML=null;

productlist_cart.forEach(function(elem){

let mainnnn=document.createElement("div")
mainnnn.setAttribute("id","mainnnn")

let imgdivCart=document.createElement("div")
imgdivCart.setAttribute("id","imgdivcart")

let imgcart=document.createElement("img")
imgcart.src=elem.img

imgdivCart.append(imgcart)

let besideimgmain=document.createElement("div")
besideimgmain.setAttribute("id","besideimgmain")

let cartprodtitle=document.createElement("div")
cartprodtitle.innerText=elem.title
cartprodtitle.setAttribute("id","cartprodtitle")

let cartprodprice=document.createElement("div")
cartprodprice.innerText="₹ "+elem.price+".00"
cartprodprice.setAttribute("id","cartprdprice")

let qtydiv=document.createElement("div")
qtydiv.setAttribute("id","qtydiv")

let qtycart=document.createElement("div")
qtycart.innerText="QTY : "
qtycart.setAttribute("id","qtycart")

let qtybox=document.createElement("div")
qtybox.innerText=elem.qty;
qtybox.setAttribute("id","qtybox")

qtydiv.append(qtycart,qtybox)

besideimgmain.append(cartprodtitle,cartprodprice,qtydiv)

mainnnn.append(imgdivCart,besideimgmain)

document.getElementById("product_lists").append(mainnnn)

})
}

document.getElementById("cartnavbar").addEventListener("click",toshowcartproduct)

var cartelemflag=false

function toshowcartproduct(){
  if(cartelemflag==false){
    document.getElementById("cartproductlist").style.display="block"
    cartelemflag=true
  }
 else if(cartelemflag==true)
 {
  document.getElementById("cartproductlist").style.display="none"
  cartelemflag=false
 }
}



var cart_product=JSON.parse(localStorage.getItem("cart_products"))||[];
let price=localStorage.getItem("Totalprice") || 0



function addcart(e)
{
 
var p=0;
for(let i=0;i<cart_product.length;i++)
{
if(cart_product[i].title===e.title)
{
  let K=cart_product[i].qty;
  K=Number(K)+1;
  cart_product[i].qty=K;
  var pric=cart_product[i].price;
  ++p;
}
}   
if(p==0)
 {cart_product.push(e);
  price=parseInt(price)+parseInt(e.price)
  document.getElementById("cartaddconfirmation").style.display="block"
  document.getElementById("main-r").style.marginTop="-290px"
  document.getElementById("textappearhere").innerText=` You added ${e.title} in your Cart`
 
 
  setTimeout(function(){

    document.getElementById("cartaddconfirmation").style.display="none"
    document.getElementById("main-r").style.marginTop="00px"
    window.location.reload()

  },5000)

  localStorage.setItem("Totalprice",price)
  
  localStorage.setItem("cart_products",JSON.stringify(cart_product));
}
else if(p!=0){
  price=parseInt(price)+parseInt(pric);
  localStorage.setItem("Totalprice",price);
  localStorage.setItem("cart_products",JSON.stringify(cart_product));
  Cartelementshow();
  window.location.reload();
}
}

Cartelementshow()







































if(document.querySelector("#emailinput").value.length==0)
{
    document.getElementById("errorMsg").textContent = "This is a required field.";
}
else if(document.querySelector("#emailinput").value.length>0){
    document.getElementById("errorMsg").textContent =""
}






if(document.querySelector("#nameinput").value.length==0)
{
    document.getElementById("errorMsg1").textContent = "This is a required field.";
}
if(document.querySelector("#lastnameinput").value.length==0)
{
    document.getElementById("errorMsg2").textContent = "This is a required field.";
}
if(document.querySelector("#streetinput").value.length==0)
{
    document.getElementById("errorMsg3").textContent = "This is a required field.";
}
if(document.querySelector("#cityinput").value.length==0)
{
    document.getElementById("errorMsg4").textContent = "This is a required field.";
}
if(document.querySelector("#ZipPostalinput").value.length==0)
{
    document.getElementById("errorMsg6").textContent = "This is a required field.";
}
if(document.querySelector("#Countryinput").value.length==0)
{
    document.getElementById("errorMsg7").textContent = "This is a required field.";
}
if(document.querySelector("#stateinput").value.length==0)
{
    document.getElementById("errorMsg5").textContent = "This is a required field.";
}










document.querySelector("#nameinput").addEventListener("input",funinput)

function funinput(){
    console.log("Hii")
    if(document.querySelector("#nameinput").value.length>1){
        document.getElementById("errorMsg1").textContent =""
        let firstname=document.querySelector("#nameinput").value
        setTimeout(function(){
            localStorage.setItem("firstname",firstname)
        },2000)
    }
    else{
        document.getElementById("errorMsg1").textContent = "This is a required field."
    }
}

document.querySelector("#emailinput").addEventListener("input",funinput1)

function funinput1(){
    console.log("Hii")
    if(document.querySelector("#emailinput").value.length>1){
        document.getElementById("errorMsg").textContent =""
    }
    else{
        document.getElementById("errorMsg").textContent = "This is a required field."
    }
}

document.querySelector("#lastnameinput").addEventListener("input",funinput2)

function funinput2(){
    console.log("Hii")
    if(document.querySelector("#lastnameinput").value.length>1){
        document.getElementById("errorMsg2").textContent =""
        let lastname=document.querySelector("#lastnameinput").value
        setTimeout(function(){
            localStorage.setItem("lastname",lastname)
        },2000)
    }
    else{
        document.getElementById("errorMsg2").textContent = "This is a required field."
    }
}


var addressArr=[]



document.querySelector("#streetinput").addEventListener("input",funinput3)

function funinput3(){
    console.log("Hii")
    if(document.querySelector("#streetinput").value.length>1){
        document.getElementById("errorMsg3").textContent =""
        
        
    }
    else{
        document.getElementById("errorMsg3").textContent = "This is a required field."
    }
}

document.querySelector("#cityinput").addEventListener("input",funinput4)

function funinput4(){
    console.log("Hii")
    if(document.querySelector("#cityinput").value.length>1){
        document.getElementById("errorMsg4").textContent =""
    }
    else{
        document.getElementById("errorMsg4").textContent = "This is a required field."
    }
}

document.querySelector("#ZipPostalinput").addEventListener("input",funinput6)

function funinput6(){
    console.log("Hii")
    if(document.querySelector("#ZipPostalinput").value.length>1){
        document.getElementById("errorMsg6").textContent =""
    }
    else{
        document.getElementById("errorMsg6").textContent = "This is a required field."
    }
}

document.querySelector("#Countryinput").addEventListener("input",funinput7)

function funinput7(){
    console.log("Hii")
    if(document.querySelector("#Countryinput").value.length>1){
        document.getElementById("errorMsg7").textContent =""
    }
    else{
        document.getElementById("errorMsg7").textContent = "This is a required field."
    }
}

document.querySelector("#stateinput").addEventListener("input",funinput5)

function funinput5(){
    console.log("Hii")
    if(document.querySelector("#stateinput").value.length>1){
        document.getElementById("errorMsg5").textContent =""

        let address={
             streetname:document.querySelector("#streetinput").value,
             cityname:document.querySelector("#cityinput").value,
             ZIPname:document.querySelector("#ZipPostalinput").value,
             Countryname:document.querySelector("#Countryinput").value,
             statename:document.querySelector("#stateinput").value
        }
localStorage.setItem("address",JSON.stringify(address))
    }
    else{
        document.getElementById("errorMsg5").textContent = "This is a required field."
    }
}

document.querySelector("#Phoneinput").addEventListener("input",funinput8)

function funinput8(){
    console.log("Hii")
    if(document.querySelector("#Phoneinput").value.length>1){
        document.getElementById("errorMsg8").textContent =""

        let Mobile=document.querySelector("#Phoneinput").value
        setTimeout(function(){
            localStorage.setItem("Mobile",Mobile)
        },2000)
    }
    else{
        document.getElementById("errorMsg5").textContent = "This is a required field."
    }
}













let cartitem=JSON.parse(localStorage.getItem("cart_products"))

document.getElementById("cartitem").innerText="  "+cartitem.length






let productlist_cartt=JSON.parse(localStorage.getItem("cart_products"))

function CCartelementshoww(){

    document.getElementById("product_listss").innerHTML=null;
     
    productlist_cartt.forEach(function(elem){
    
    let mainnnn=document.createElement("div")
    mainnnn.setAttribute("id","mainnnn")
    
    let imgdivCart=document.createElement("div")
    imgdivCart.setAttribute("id","imgdivcart")
    
    let imgcart=document.createElement("img")
    imgcart.src=elem.img
    
    imgdivCart.append(imgcart)
    
    let besideimgmain=document.createElement("div")
    besideimgmain.setAttribute("id","besideimgmain")
    
    let cartprodtitle=document.createElement("div")
    cartprodtitle.innerText=elem.title
    cartprodtitle.setAttribute("id","cartprodtitle")
    
    let cartprodprice=document.createElement("div")
    cartprodprice.innerText="₹ "+elem.price+".00"
    cartprodprice.setAttribute("id","cartprdprice")
    
    let qtydiv=document.createElement("div")
    qtydiv.setAttribute("id","qtydiv")
    
    let qtycart=document.createElement("div")
    qtycart.innerText="QTY : "
    qtycart.setAttribute("id","qtycart")
    
    let qtybox=document.createElement("div")
    qtybox.innerText=elem.qty;
    qtybox.setAttribute("id","qtybox")
    
    qtydiv.append(qtycart,qtybox)
    
    besideimgmain.append(cartprodtitle,cartprodprice,qtydiv)
    
    mainnnn.append(imgdivCart,besideimgmain)
    
    document.getElementById("product_listss").append(mainnnn)
    
    })
      }
    
      document.getElementById("sidediv").addEventListener("click",toshowcartproductt)
    


     var flag=false

      function toshowcartproductt(){
          if(flag==false){
            document.getElementById("cartproductlistt").style.display="block"
            CCartelementshoww()
            flag=true
          }
        else if(flag==true)
        {
            document.getElementById("cartproductlistt").style.display="none"
            flag=false
        }
      }

      document.querySelector(".next").addEventListener("click",funredirect)

      function funredirect(){
        window.location.href="paymentmethod.html"
      }

    ///////////toShowUserName//////////////
let data101 = JSON.parse(localStorage.getItem("acc_data")) ;

let append101 = (data101)=>{
  
      let acc = document.querySelector("#acc");
      acc.textContent =  data101.name;
 
  }
  append101(data101);

/////////////////////////////////////





















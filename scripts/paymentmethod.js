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









document.getElementById("sidediv1").addEventListener("click",funcdis)

var flafdis=false

function funcdis(){
    if (flafdis==false){
        document.getElementById("aplycoupdiv").style.display="block"
        flafdis=true
    }

    else if (flafdis==true){
        document.getElementById("aplycoupdiv").style.display="none"
        flafdis=false
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



      let adresarr=JSON.parse(localStorage.getItem("address"))
      let firstname=localStorage.getItem("firstname")
      let lastname=localStorage.getItem("lastname")
      let Mobile=localStorage.getItem("Mobile")
      let Totalprice=localStorage.getItem("Totalprice")

      document.getElementById("fullname").innerText=firstname+" "+lastname

      document.getElementById("addresss").innerText=adresarr.streetname+adresarr.ZIPname

      document.getElementById("stateabdcity").innerText=adresarr.cityname+" "+adresarr.statename

      document.getElementById("country").innerText=adresarr.Countryname

      document.getElementById("contactno").innerText=Mobile
 
      document.getElementById("cartsubtotal").innerText="₹ "+(Number(Totalprice)).toFixed(2) 
      
      document.getElementById("gst").innerText=(Number(Totalprice)/6.5).toFixed(2)
      document.getElementById("totwithgst").innerText="₹ "+(Number(Totalprice)).toFixed(2)  

      document.getElementById("totwithoutgst").innerText="₹ "+((Number(Totalprice)).toFixed(2)- (Number(Totalprice)/6.5).toFixed(2))




      document.getElementById("checklab1").addEventListener("click",funcbyCOD)

      var codflag=false
      function funcbyCOD(){
        if(codflag==false){
          document.getElementById("COD").style.display="block"
          codflag=true
        }
        else if(codflag==true){
          document.getElementById("COD").style.display="none"
          codflag=false
        }
        
      }


      document.getElementById("checklab2").addEventListener("click",funcbycard)



      var Cardflag=false
      function funcbycard(){
        if(Cardflag==false){
          document.getElementById("cardmethodmaindiv").style.display="block"
          Cardflag=true
        }
        else if(Cardflag==true){
          document.getElementById("cardmethodmaindiv").style.display="none"
          Cardflag=false
        }
        
      }



      document.getElementById("CODD").addEventListener("click",funCOD)

function funCOD(){
  document.getElementById("loadinggifdiv").style.display="block"

  document.getElementById("outermost").style.opacity="0.2"
  setTimeout(function(){
    
    window.location.href="confirmed.html"
  },4000)
 
}





















document.querySelector("#CODNOt").addEventListener("click",popup);

function popup()
{
    document.getElementById("popkunal").style.display="block";
    document.getElementById("outermost").style.opacity="0.2"
    document.getElementById("popkunal").style.zIndex="1"
    document.getElementById("outermost").style.zIndex="-1"
}

document.querySelector("#cross-k").addEventListener("click",cross);
function cross()
{
    document.getElementById("popkunal").style.display="none";
    document.getElementById("outermost").style.opacity="1";
    window.location.reload()
}


document.getElementById("www").addEventListener("click",payment);

function payment()
{
    document.getElementById("paymentoption-text").innerText=null;
    document.getElementById("paymentoption-text").innerText="CARDS(CREDIT/DEBIT)";
    document.getElementById("hello").innerHTML=null;
    console.log("HIIII")
    append()
}




function append()
{   
    let div= document.createElement("div")
    div.setAttribute("id","lowerbox-k")

    // NEW CARD
    let newcard=document.createElement("p");
    newcard.innerText="New Card";
    let input1=document.createElement("input");


    let div1=document.createElement("div");
        // EXPIRY 
    let div1a=document.createElement("div");
    let expiry=document.createElement("p");
    expiry.innerText="Expiry";
    let input2=document.createElement("input");
    div1a.append(expiry,input2);

        // CVV
    let div1b=document.createElement("div");
    let cvv=document.createElement("p");
    cvv.innerText="CVV";
    let input3=document.createElement("input");
    div1b.append(cvv,input3);

    div1.append(div1a,div1b);
    // div1.

    // NAME ON CARD

    let nameoncard=document.createElement("p");
    nameoncard.innerText=("Name On Card")
    let input4=document.createElement("input");

let kunal=document.createElement("div")
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "check");

    let secure=document.createElement("p");
    secure.innerText="Secure this option for faster checkouts";
    kunal.append(checkbox,secure);
    kunal.setAttribute("id","kunal")

    // BUTTON
    let btndiv=document.createElement("div")
    let btn=document.createElement("button");
    btn.addEventListener("click",function(){
      window.location.href="otp.html"
    })
    btn.setAttribute("id","Proceedbtn")
    btn.innerText="PROCEED"
    btndiv.append(btn);

    

    div.append(newcard,input1,div1,nameoncard,input4,kunal,btndiv)

    document.querySelector("#hello").append(div)
    
}





let totalprice=localStorage.getItem("Totalprice")

document.getElementById("paumenttotalrs").innerText="₹ "+totalprice
     
///////////toShowUserName//////////////
let data101 = JSON.parse(localStorage.getItem("acc_data")) ;

  let append101 = (data101)=>{
    
        let acc = document.querySelector("#acc");
        acc.textContent =  data101.name;
   
    }
    append101(data101);

/////////////////////////////////////
      





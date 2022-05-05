import {header,footer} from "../component/navbar.js";
document.getElementById("header1").innerHTML=header();
document.getElementById("footer").innerHTML=footer();



document.getElementById("profilesymbol").addEventListener("click",showlogindiv)

function showlogindiv(){
  document.getElementById("profile").style.display="block"
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


function showSearch(data){

  document.getElementById("searchresultdiv").innerHTML=null
  document.getElementById("searchresultdiv").style.display="block"
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
document.querySelector("#main-r").style.marginTop="-690px"
}

document.getElementById("navbartitle1").addEventListener("mouseout",mouseout)

function mouseout(){

document.querySelector("#A").style.display="none"
document.querySelector("#main-r").style.marginTop="10px"
}





document.getElementById("navbartitle2").addEventListener("mouseover",mouseover2)

function mouseover2(){

document.querySelector("#BB").style.display="block"
document.querySelector("#main-r").style.marginTop="-690px"
}

document.getElementById("navbartitle2").addEventListener("mouseout",mouseout2)

function mouseout2(){

document.querySelector("#BB").style.display="none"
document.querySelector("#main-r").style.marginTop="10px"
}



document.getElementById("navbartitle3").addEventListener("mouseover",mouseover3)

function mouseover3(){

document.querySelector("#CC").style.display="block"
document.querySelector("#main-r").style.marginTop="-690px"
}

document.getElementById("navbartitle3").addEventListener("mouseout",mouseout3)

function mouseout3(){

document.querySelector("#CC").style.display="none"
document.querySelector("#main-r").style.marginTop="10px"
}




document.getElementById("navbartitle4").addEventListener("mouseover",mouseover4)

function mouseover4(){

document.querySelector("#DD").style.display="block"
document.querySelector("#main-r").style.marginTop="-690px"
}

document.getElementById("navbartitle4").addEventListener("mouseout",mouseout4)

function mouseout4(){

document.querySelector("#DD").style.display="none"
document.querySelector("#main-r").style.marginTop="10px"
}






document.getElementById("navbartitle5").addEventListener("mouseover",mouseover5)

function mouseover5(){

document.querySelector("#EE").style.display="block"
document.querySelector("#main-r").style.marginTop="-690px"
}

document.getElementById("navbartitle5").addEventListener("mouseout",mouseout5)

function mouseout5(){

document.querySelector("#EE").style.display="none"
document.querySelector("#main-r").style.marginTop="10px"
}







document.getElementById("navbartitle6").addEventListener("mouseover",mouseover6)

function mouseover6(){

document.querySelector("#AA").style.display="block"
document.querySelector("#main-r").style.marginTop="-690px"
}

document.getElementById("navbartitle6").addEventListener("mouseout",mouseout6)

function mouseout6(){

document.querySelector("#AA").style.display="none"
document.querySelector("#main-r").style.marginTop="10px"
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

























let ayur_arr=[{"bracket":7,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/8/18_12_3.jpg","price":"285","title":"Vaadi Herbals Aloe Vera Face Scrub"},{"bracket":9,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/7/17_14_4.jpg","price":"320","title":"Vaadi Herbals 24 Carat Gold Massage Gel With 24 Carat Gold Dust & Grape"},{"bracket":9,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/4/o45.jpg","price":"450","title":"O3+ Volcano Scrub"},{"bracket":9,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/4/o41_1.jpg","price":"431","title":"O3+ Milk Scrub Dry Skin Dermal Zone"},{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/8/288.jpg","price":"260","title":"Himalaya Herbals Oil-Free Radiance Gel Cream"},{"bracket":0,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/7/s7.jpg","price":"640","title":"Shahnaz Husain Shalocks Plus Ayurvedic Hair Oil"},{"bracket":0,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/1/s1_1.jpg","price":"1734","title":"Shahnaz Husain Gold 2-In-1 Anti Ageing Gel"},{"bracket":7,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/l/a/la9.jpg","price":"400","title":"L'Oreal Paris White Perfect Scrub"},{"bracket":8,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/2/b28.jpg","price":"199","title":"Biotique Bio Sea Weed Revitalizing Anti Fatigue Eye Gel"},{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/2/b25.jpg","price":"599","title":"Bioderma Atoderm Intensive Gel Moussant"},{"bracket":4,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/1/c1.jpg","price":"1070","title":"Cetaphil Sun SPF 30 Light Gel"},{"bracket":2,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/3/b3.jpg","price":"338","title":"Biotique Advanced Organics Tea Tree Targeted Skin Clearing Gel"},{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/j/6/j6.jpg","price":"170","title":"Joy Hydra Refresh Ultra Light Gel Moisturiser"},{"bracket":0,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be106.jpg","price":"394","title":"Beeone Papaya Scrub"},{"bracket":7,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be102_1.jpg","price":"210","title":"Beeone Papaya Facial Gel"},{"bracket":6,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be100.jpg","price":"248","title":"Beeone Oxygen Facial Gel"},{"bracket":1,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be97.jpg","price":"210","title":"Beeone Orange Facial Gel"},{"bracket":4,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be95.jpg","price":"394","title":"Beeone Neem Scrub"},{"bracket":0,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be93.jpg","price":"230","title":"Beeone Neem And Tulsi Face Pack"},{"bracket":2,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be91.jpg","price":"210","title":"Beeone Mint Facial Gel Be the first to review this product"}];



function Verticalappend(){
    console.log(ayur_arr);
    ayur_arr.map(function(e,index){
     
        let main=document.createElement("div")
  
    main.setAttribute("id","mainnn")
  
    let imgdivv=document.createElement("div")
    imgdivv.setAttribute("id","imgdivvv")
  
    let img=document.createElement("img")
    img.src=e.img
    img.setAttribute("id","productimg")
  
    imgdivv.append(img)
  
    let title=document.createElement("div")
    title.innerText=e.title
    title.setAttribute("id","titleee")
  
    let starandbracket=document.createElement("div")
    starandbracket.setAttribute("id","starandbrackett")
  
     let starimgdiv=document.createElement("div")
    starimgdiv.setAttribute("id","starimgdiv")
  
  
    let star=document.createElement("img")
    star.src="https://static.vecteezy.com/system/resources/thumbnails/004/435/915/small/rating-stars-web-signs-5-stars-yellow-isolated-on-transparent-background-vector.jpg"
    star.setAttribute("id","starimg")
  
    starimgdiv.append(star)
  
    let bracket=document.createElement("div")
    bracket.innerText=`(${e.bracket})` 
  
    starandbracket.append(starimgdiv,bracket)
  
    let pricediv=document.createElement("div")
    pricediv.setAttribute("id","pricedivv")
  
    let cutoffprice=document.createElement("div")
       cutoffprice.innerText="₹ 500"
       cutoffprice.setAttribute("id","cutoff")
  
    let price=document.createElement("div")
    price.innerText="₹"+e.price+".00"
    price.setAttribute("id","price")
  
    let off=document.createElement("div")
    off.innerText="30% off"
    off.setAttribute("id","offprice")
  
  pricediv.append(cutoffprice,price,off)
  
  
    let buttons=document.createElement("div")
    buttons.setAttribute("id","buttonproductt")
  
    let addtocart=document.createElement("button")
         addtocart.innerText="Add To Cart"
         addtocart.setAttribute("id","addtocartbtn");

         addtocart.addEventListener("click",function(){
           addcart(e);
         })


    let favourate=document.createElement("button")
    favourate.innerText="♥"
    favourate.setAttribute("id","favouratebtn")
  
    buttons.append(addtocart,favourate)
  
    main.append(imgdivv,title,starandbracket,pricediv,buttons)
  
    document.getElementById("prodlist-r").append(main);
  
    }
    )
  }
  








  Verticalappend();
  

  let totalcart=localStorage.getItem("Totalprice")


  document.getElementById("cartvalue").innerHTML= totalcart || 0 

  document.getElementById("totalpriceofallproduct").innerHTML= ("₹ "+ totalcart+".00") || 0 



let productlist_cart=JSON.parse(localStorage.getItem("cart_products"))

  function Cartelementshow(){
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
qtybox.innerText="1"
qtybox.setAttribute("id","qtybox")

qtydiv.append(qtycart,qtybox)

besideimgmain.append(cartprodtitle,cartprodprice,qtydiv)

mainnnn.append(imgdivCart,besideimgmain)

document.getElementById("product_lists").append(mainnnn)

})
  }

  document.getElementById("cartnavbar").addEventListener("click",toshowcartproduct)

  function toshowcartproduct(){
    document.getElementById("cartproductlist").style.display="block"
  }



  var cart_product=JSON.parse(localStorage.getItem("cart_products"))||[];
  let price=localStorage.getItem("Totalprice") || 0



  function addcart(e)
  {
    cart_product.push(e);
    console.log(e.price)
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

  Cartelementshow()








 
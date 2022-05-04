import {header,footer} from "../component/navbar.js";
document.getElementById("header1").innerHTML=header();
document.getElementById("footer").innerHTML=footer();

let ayur_arr=[{"bracket":7,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/8/s8.jpg","price":"3468","title":"Calvin Klein Eternity For Men Eau De Parfum"},{"bracket":9,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo21.jpg","price":"255","title":"Fogg Bleu Series Island Fragrance Body Spray"},{"bracket":4,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo20.jpg","price":"230","title":"Fogg Force Fragrance Body Spray"},{"bracket":8,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo19.jpg","price":"230","title":"Fogg Punch Fragrance Body Spray"},{"bracket":4,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo18.jpg","price":"255","title":"Fogg Bleu Series Mountain Fragrance Body Spray Be the first to review this product"},{"bracket":4,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo17.jpg","price":"230","title":"Fogg Rush Fragrance Body Spray"},{"bracket":2,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo16.jpg","price":"275","title":"Fogg Bleu Skies Fragrance Body Spray"},{"bracket":0,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo15.jpg","price":"539","title":"Fogg Scent Intensio Men Fragrance Body Spray"},{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo13.jpg","price":"275","title":"Fogg Master Cedar Body Spray"},{"bracket":4,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo12.jpg","price":"250","title":"Fogg Black Fresh Aromatic Fragrance Body Spray Be the first to review this product"},{"bracket":6,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo10.jpg","price":"275","title":"Fogg Master Agar Body Spray"},{"bracket":4,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo9.jpg","price":"250","title":"Fogg Black Fresh Fougere Body Spray Deodorant For Men"},{"bracket":1,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo8.jpg","price":"539","title":"Fogg Scent Xpressio Men Fragrance Body Spray Be the first to review this product"},{"bracket":1,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo7.jpg","price":"250","title":"Fogg Dynamic Fragrance Body Spray"},{"bracket":2,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo6.jpg","price":"539","title":"Fogg Scent Xtremo Men Fragrance Body Spray"},{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo5.jpg","price":"234","title":"Fogg Black Fresh Spicy Body Spray Deodorant For Men"},{"bracket":8,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo3.jpg","price":"275","title":"Fogg Master Oak Body Spray"},{"bracket":2,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo1.jpg","price":"275","title":"Fogg Master Pine Body Spray"},{"bracket":0,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/r/rr.jpg","price":"539","title":"Fogg Scent Beautiful Secret Women Fragrance Body Spray"},{"bracket":3,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e55.jpg","price":"459","title":"Engage Yin Eau De Parfum For Men"},{"bracket":2,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e54.jpg","price":"195","title":"Engage Sport Cool Deodorant For Women, Citrus & Spicy, Skin Friendly"},{"bracket":9,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/5/e52.jpg","price":"195","title":"Engage Sport Fresh Deodorant For Women"}];



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
         addtocart.setAttribute("id","addtocartbtn")
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


  document.getElementById("navbartitle1").addEventListener("mouseover",mouseover)

function mouseover(){

document.querySelector("#A").style.display="block"
document.querySelector("#divbelownavbar").style.marginTop="-250px"
}

document.getElementById("navbartitle1").addEventListener("mouseout",mouseout)

function mouseout(){

document.querySelector("#A").style.display="none"
document.querySelector("#divbelownavbar").style.marginTop="10px"
}





document.getElementById("navbartitle2").addEventListener("mouseover",mouseover2)

function mouseover2(){

document.querySelector("#BB").style.display="block"
document.querySelector("#divbelownavbar").style.marginTop="-250px"
}

document.getElementById("navbartitle2").addEventListener("mouseout",mouseout2)

function mouseout2(){

document.querySelector("#BB").style.display="none"
document.querySelector("#divbelownavbar").style.marginTop="10px"
}



document.getElementById("navbartitle3").addEventListener("mouseover",mouseover3)

function mouseover3(){

document.querySelector("#CC").style.display="block"
document.querySelector("#divbelownavbar").style.marginTop="-250px"
}

document.getElementById("navbartitle3").addEventListener("mouseout",mouseout3)

function mouseout3(){

document.querySelector("#CC").style.display="none"
document.querySelector("#divbelownavbar").style.marginTop="10px"
}




document.getElementById("navbartitle4").addEventListener("mouseover",mouseover4)

function mouseover4(){

document.querySelector("#DD").style.display="block"
document.querySelector("#divbelownavbar").style.marginTop="-250px"
}

document.getElementById("navbartitle4").addEventListener("mouseout",mouseout4)

function mouseout4(){

document.querySelector("#DD").style.display="none"
document.querySelector("#divbelownavbar").style.marginTop="10px"
}






document.getElementById("navbartitle5").addEventListener("mouseover",mouseover5)

function mouseover5(){

document.querySelector("#EE").style.display="block"
document.querySelector("#divbelownavbar").style.marginTop="-250px"
}

document.getElementById("navbartitle5").addEventListener("mouseout",mouseout5)

function mouseout5(){

document.querySelector("#EE").style.display="none"
document.querySelector("#divbelownavbar").style.marginTop="10px"
}







document.getElementById("navbartitle6").addEventListener("mouseover",mouseover6)

function mouseover6(){

document.querySelector("#AA").style.display="block"
document.querySelector("#divbelownavbar").style.marginTop="-250px"
}

document.getElementById("navbartitle6").addEventListener("mouseout",mouseout6)

function mouseout6(){

document.querySelector("#AA").style.display="none"
document.querySelector("#divbelownavbar").style.marginTop="10px"
}



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


  document.querySelector("#divbelownavbar").addEventListener("click",removesearch)

  function removesearch(){
    document.getElementById("searchresultdiv").style.display="none"
    document.getElementById("inputsearch").value=""
    document.getElementById("profile").style.display="none"
  }


  document.getElementById("profilesymbol").addEventListener("click",showlogindiv)

  function showlogindiv(){
    document.getElementById("profile").style.display="block"
  }
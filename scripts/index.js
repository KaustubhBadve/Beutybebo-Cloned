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



function addcart()
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


























// For sliding images

let slideimg=["https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg","https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg","https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg"]

function slidingimage()
{
    let i=0

    let slidingshow=document.getElementById("slidingshow")
    let image=document.createElement("img")
    setInterval(function(){
        if(slideimg.length==i)
        {
            i=0
        }
        image.src=slideimg[i]
        slidingshow.append(image)
        i++
    },2000)
}

slidingimage()

// Read more function

function myFunction() {
  var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  document.getElementById("myBtn").addEventListener("click",myFunction)




 



// Product constructor function

 function products(imgurl,title,bracketno,price)
{
  this.img=imgurl,
  this.title=title,
  this.bracket=bracketno,
  this.price=price
}

let productArr=[]

let p1=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/o/ponds_super_light_gel_oil_free_moisturiser_with_hyaluronic_acid_vitamin_e2.jpg","Ponds Super Light Gel Oil Free Moisturiser With Hyaluronic Acid + Vitamin E","20","299" )

let p2=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/l/cl-08_strawberry_love-min_2.png","Blue Heaven Candy Matte Lip Color","18","125")

let p3=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/s/dsfsdafsdfsd.jpg","Ponds Pimple Clear Face Wash - pack of 2")

let p4=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/e/repair_shampoo_650-2_1_1.jpg","Dove Intense Repair Shampoo 650ml","1","350")

let p5=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8908003416557_1.png","Organic Harvest Cleansing Milk With Essential Oils","0","491")

let p6=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg","Lotus Herbals Whiteglow Vitamin C Radiance Cream Spf 20","1","428")

let p7=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/5/o5_1_1.jpg","O3+ Whitening Facial Kit With Brightening & Whitening Peel Off Mask","1","499")

let p8=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/x/z/xzxzxzxzxz.jpeg","Ponds White Beauty Anti Spot Fairness Day Cream SPF 15 PA++","4","240")

let p9=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/g/v/gvhjgvyjhv.jpg","Vaseline Body Lotion 400ml + Pond's Moisturising Cold Cream 55ml  Free ","5","310")

let p10=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/e/repair_shampoo_650-2_1_1.jpg","dove intense repair shampoo 650ml","2","491")

let p11=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8908003416557_1.png","organic harvest cleansing milk with essential oils","5","491")

let p12=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg","Lotus Herbals Whiteglow Vitamin C Radiance Cream Spf 20","5","428")

let p13=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/6/3699c478906105612174-2.jpg","WOW Skin Science Caffeine Face Serum","5","515")

let p14=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg","Miss Claire Eyelash Glue - Clear Tone","1","322")

let p15=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/b/5b990e16902395773146_3.jpg","Maybelline New York Fit Me Primer - Dewy+Smooth","1","475")

let p16=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/9/6902395735908_0.jpg","L'Oreal Paris Infallible Full Wear Concealer","1","735")

let p17=new products("https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/1/51c18ra5qzs._sl1500_.jpg","Faces Canada Ultime Pro Matte Play Eyeliner","1","604")

productArr.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17)

console.log(productArr)




function append(a,cont){

  let main=document.createElement("div")

  main.setAttribute("id","main")

  let imgdivv=document.createElement("div")
  imgdivv.setAttribute("id","imgdivv")

  let img=document.createElement("img")
  img.src=productArr[a].img
  img.setAttribute("id","productimg")

  imgdivv.append(img)

  let sidediv=document.createElement("div")

  let title=document.createElement("div")
  title.innerText=productArr[a].title
  title.setAttribute("id","titlee")

  let starandbracket=document.createElement("div")
  starandbracket.setAttribute("id","starandbracket")

   let starimgdiv=document.createElement("div")
  starimgdiv.setAttribute("id","starimgdiv")


  let star=document.createElement("img")
  star.src="https://static.vecteezy.com/system/resources/thumbnails/004/435/915/small/rating-stars-web-signs-5-stars-yellow-isolated-on-transparent-background-vector.jpg"
  star.setAttribute("id","starimg")

  starimgdiv.append(star)

  let bracket=document.createElement("div")
  bracket.innerText=`(${productArr[a].bracket})` 

  starandbracket.append(starimgdiv,bracket)

  let pricediv=document.createElement("div")
  pricediv.setAttribute("id","pricediv")

  let cutoffprice=document.createElement("div")
     cutoffprice.innerText="₹ 500"
     cutoffprice.setAttribute("id","cutoff")

  let price=document.createElement("div")
  price.innerText="₹"+productArr[a].price+".00"
  price.setAttribute("id","price")

  let off=document.createElement("div")
  off.innerText="30% off"
  off.setAttribute("id","offprice")

pricediv.append(cutoffprice,price,off)


  let buttons=document.createElement("div")
  buttons.setAttribute("id","buttonproduct")

  let addtocart=document.createElement("button")
       addtocart.innerText="Add To Cart"
       addtocart.setAttribute("id","addtocartbtn")
  let favourate=document.createElement("button")
  favourate.innerText="♥"
  favourate.setAttribute("id","favouratebtn")

  buttons.append(addtocart,favourate)


sidediv.append(title,starandbracket,pricediv,buttons)

  main.append(imgdivv,sidediv)

  document.getElementById(cont).append(main)

}

append(0,"a")
append(1,"b")
append(2,"c")

append(3,"d")
append(4,"e")
append(5,"f")

append(6,"g")
append(7,"h")
append(8,"i")









var cart_product=JSON.parse(localStorage.getItem("cart_products"))||[];


// For vertically append product part

function Verticalappend(a,cont){

  let main=document.createElement("div")

  main.setAttribute("id","mainn")

  let imgdivv=document.createElement("div")
  imgdivv.setAttribute("id","imgdivvv")

  let img=document.createElement("img")
  img.src=productArr[a].img
  img.setAttribute("id","productimg")

  imgdivv.append(img)

  let title=document.createElement("div")
  title.innerText=productArr[a].title
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
  bracket.innerText=`(${productArr[a].bracket})` 

  starandbracket.append(starimgdiv,bracket)

  let pricediv=document.createElement("div")
  pricediv.setAttribute("id","pricedivv")

  let cutoffprice=document.createElement("div")
  cutoffprice.innerText="₹ "+(Number(productArr[a].price)*1.3).toFixed(2)
     cutoffprice.setAttribute("id","cutoff")

  let price=document.createElement("div")
  price.innerText="₹"+productArr[a].price+".00"
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














       addtocart.addEventListener("click",function(){
       
        console.log("product",productArr[a])
        var p=0;
        for(let i=0;i<cart_product.length;i++)
        {
        if(cart_product[i].title===productArr[a].title)
        {
          let K=cart_product[i].qty;
          K=Number(K)+1;
          cart_product[i].qty=K;
          var pric=cart_product[i].price;
          console.log("price",pric)
          ++p;
        }
        }   
        if(p==0)
         {cart_product.push(productArr[a]);
          console.log(cart_product)
          price=parseInt(price)+parseInt(productArr[a].price)
          document.getElementById("cartaddconfirmation").style.display="block"
          // document.getElementById("main-r").style.marginTop="-290px"
          document.getElementById("textappearhere").innerText= "You added in your Cart"+ productArr[a].title
         
         

          setTimeout(function(){
        
            document.getElementById("cartaddconfirmation").style.display="none"
            // document.getElementById("main-r").style.marginTop="00px"
            window.location.reload()
        
          },16000)
        
          localStorage.setItem("Totalprice",price)
          console.log("local",price)
          
          localStorage.setItem("cart_products",JSON.stringify(cart_product));
        }
        else if(p!=0){
          price=parseInt(price)+parseInt(pric);
          localStorage.setItem("Totalprice",price);
          localStorage.setItem("cart_products",JSON.stringify(cart_product));
          Cartelementshow();
          window.location.reload();
        }
        
      })

  let favourate=document.createElement("button")
  favourate.innerText="♥"
  favourate.setAttribute("id","favouratebtn")

  buttons.append(addtocart,favourate)

  main.append(imgdivv,title,starandbracket,pricediv,buttons)

  document.getElementById(cont).append(main)

}

Verticalappend(10,"j")
Verticalappend(11,"k")
Verticalappend(12,"l")
Verticalappend(9,"m")


Verticalappend(13,"n")
Verticalappend(14,"o")
Verticalappend(15,"p")
Verticalappend(16,"q")







// function addcart(productArr[a])
// {
 
// var p=0;
// for(let i=0;i<cart_product.length;i++)
// {
// if(cart_product[i].title===e.title)
// {
//   let K=cart_product[i].qty;
//   K=Number(K)+1;
//   cart_product[i].qty=K;
//   var pric=cart_product[i].price;
//   ++p;
// }
// }   
// if(p==0)
//  {cart_product.push(e);
//   price=parseInt(price)+parseInt(e.price)
//   document.getElementById("cartaddconfirmation").style.display="block"
//   document.getElementById("main-r").style.marginTop="-290px"
//   document.getElementById("textappearhere").innerText=` You added ${e.title} in your Cart`
 
 
//   setTimeout(function(){

//     document.getElementById("cartaddconfirmation").style.display="none"
//     document.getElementById("main-r").style.marginTop="00px"
//     window.location.reload()

//   },5000)

//   localStorage.setItem("Totalprice",price)
  
//   localStorage.setItem("cart_products",JSON.stringify(cart_product));
// }
// else if(p!=0){
//   price=parseInt(price)+parseInt(pric);
//   localStorage.setItem("Totalprice",price);
//   localStorage.setItem("cart_products",JSON.stringify(cart_product));
//   Cartelementshow();
//   window.location.reload();
// }
// }

Cartelementshow()


































document.getElementById("witharrow1").addEventListener("mouseover",mouseover7)

function mouseover7(){
console.log("Hii")
document.querySelector("#SideHA").style.display="block"
}

document.getElementById("witharrow1").addEventListener("mouseout",mouseout7)

function mouseout7(){

document.querySelector("#SideHA").style.display="none"
}




document.getElementById("witharrow2").addEventListener("mouseover",mouseover8)

function mouseover8(){

document.getElementById("SideHB").style.display="block"
}

document.getElementById("witharrow2").addEventListener("mouseout",mouseout8)

function mouseout8(){

document.getElementById("SideHB").style.display="none"
}



document.getElementById("witharrow3").addEventListener("mouseover",mouseover9)

function mouseover9(){

document.getElementById("SideHC").style.display="block"
}

document.getElementById("witharrow3").addEventListener("mouseout",mouseout9)

function mouseout9(){

document.getElementById("SideHC").style.display="none"
}




document.getElementById("witharrow4").addEventListener("mouseover",mouseover10)

function mouseover10(){

document.getElementById("SideHD").style.display="block"
}

document.getElementById("witharrow4").addEventListener("mouseout",mouseout10)

function mouseout10(){

document.getElementById("SideHD").style.display="none"
}


document.getElementById("witharrow5").addEventListener("mouseover",mouseover11)

function mouseover11(){

document.getElementById("SideHE").style.display="block"
}

document.getElementById("witharrow5").addEventListener("mouseout",mouseout11)

function mouseout11(){

document.getElementById("SideHE").style.display="none"
}





  document.querySelector("#divbelownavbar").addEventListener("click",removesearch)

  function removesearch(){
    document.getElementById("searchresultdiv").style.display="none"
    document.getElementById("inputsearch").value=""
    document.getElementById("profile").style.display="none"
  }











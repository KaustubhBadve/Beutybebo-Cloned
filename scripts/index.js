import {header,footer} from "../component/navbar.js"

document.getElementById("header").innerHTML=header()


document.getElementById("footer").innerHTML=footer()




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
  buttons.setAttribute("id","buttonproductt")

  let addtocart=document.createElement("button")
       addtocart.innerText="Add To Cart"
       addtocart.setAttribute("id","addtocartbtn")
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
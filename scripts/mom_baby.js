import {header,footer} from "../component/navbar.js";
document.getElementById("header1").innerHTML=header();
document.getElementById("footer").innerHTML=footer();

let ayur_arr=[{"bracket":3,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/1/31_7_4.jpg","price":"351","title":"Mamaearth Agent Apple Body Lotion For Kids With Apple & Oat Milk"},{"bracket":2,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/0/30_6_4.jpg","price":"351","title":"Mamaearth Brave Blueberry Body Lotion For Kids With Blueberry And Kokum"},{"bracket":3,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/5/25_13_1.jpg","price":"351","title":"Mamaearth Original Orange Body Lotion For Kids With Orange & Shea Butter"},{"bracket":3,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/3/23_11_3.jpg","price":"351","title":"Mamaearth Super Strawberry Body Lotion For Kids With Strawberry & Shea"},{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/7/17_14_2.jpg","price":"433","title":"Mamaearth After Bite Roll On For Rashes And Insect Bites - Roman Chamomile &"},{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/6/16_17.jpg","price":"433","title":"Mamaearth Easy Tummy Roll On For Indigestion And Colic Relief - Hing And"},{"bracket":4,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va133.jpg","price":"347","title":"Mamaearth Milky Soft Shampoo With Oats, Milk And Calendula For Babies"},{"bracket":8,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va131.jpg","price":"347","title":"Mamaearth Milky Soft Body Wash For Babies With Oats, Milk And Calendula"},{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va126.jpg","price":"347","title":"Mamaearth Milky Soft Body Lotion With Oats, Milk & Calendula"},{"bracket":6,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va96.jpg","price":"438","title":"Mamaearth Milky Soft Bathing Bar For Babies With Oats, Milk & Calendula -"},{"bracket":0,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/v/a/va94.jpg","price":"299","title":"Mamaearth Milky Soft Diaper Rash Cream For Babies"},{"bracket":3,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be176.jpg","price":"450","title":"Chicco Natural Sensation Bath Shampoo"},{"bracket":3,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/e/be172.jpg","price":"235","title":"Johnson's Baby Powder"},{"bracket":3,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mm1_1.jpg","price":"299","title":"Mamaearth Agent Apple Body Wash For Kids With Apple & Oat Protein"},{"bracket":0,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/l/o/lot1.jpg","price":"348","title":"Lotus Herbals Baby + Eternal Love Baby Massage Oil"},{"bracket":6,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mmm254.jpg","price":"163","title":"Mamaearth Clean Cuties Skin Cleanser"},{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mmm253.jpg","price":"299","title":"Mamaearth Perfume Body Mist 6 Months+ - Tropical Garden"},{"bracket":4,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mmm248.jpg","price":"299","title":"Mamaearth Perfume Body Mist 6 Months+ - Joyful Jasmine"},{"bracket":9,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mmm243.jpg","price":"270","title":"Mamaearth Moisturizing Daily Lotion For Babies And Milky Soft Natural Baby Face"},{"bracket":1,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/m/m/mmm232.jpg","price":"150","title":"Mamaearth Natural Baby Lip Balm For Babies With Coconut Oil, Cocoa Butter &"}];


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
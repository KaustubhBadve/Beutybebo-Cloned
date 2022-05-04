import {header,footer} from "../component/navbar.js";
document.getElementById("header1").innerHTML=header();
document.getElementById("footer").innerHTML=footer();

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
import {header,footer} from "../component/navbar.js"

document.getElementById("header1").innerHTML=header()


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
























let ayur_arr=[{"bracket":2,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/e/repair_shampoo_650-2_1_1.jpg","price":"350","title":"Dove Intense Repair Shampoo 650ml","qty":"1"},
{"bracket":4,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/f/efbafe2nywow000083__1_.jpg","price":"515","title":"WOW Skin Science 10 In 1 Miracle Hair Oil","qty":"1"},
{"bracket":1,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/8/88b239c8904311904281__1_.jpg","price":"395","title":"WOW Skin Science Himalayan Rose Conditioner","qty":"1"},
{"bracket":6,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/4/d4fb39c8904311904267__1_.jpg","price":"349","title":"WOW Skin Science Moroccan Argan Hair Oil - WITH COMB APPLICATOR -","qty":"1"},
{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/a/9a21c478906105615175-2.jpg","price":"449","title":"WOW Skin Science Rice Hair Mask With Rice Water, Rice Keratin & Lavender Oil Be the first to review this product","qty":"1"},
{"bracket":6,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/1/51x4yt0-ucl._sl1000_.jpg","price":"295","title":"Joy Natural Actives Dandruff Control And Scalp Nourish Hair Treatment","qty":"1"},
{"bracket":6,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/1/51wck34jr0l._sl1000_.jpg","price":"295","title":"Joy Natural Actives Anti Hair Fall And Damage Control Hair Treatment Mask","qty":"1"},
{"bracket":9,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311903680_1.jpg","price":"429","title":"WOW Skin Science Green Tea & Tea Tree Anti-Dandruff Shampoo Be the first to review this product","qty":"1"},
{"bracket":3,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/0/e08092aorgaa00000032_p.jpg","price":"364","title":"Organic Harvests Color Protect Quinoa Shampoo, Sulfate-Free Shampoo For","qty":"1"},{"bracket":3,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/t/e/tea-tree-beard-oil_1.jpg","price":"449","title":"Mamaearth Tea Tree Beard Oil With Tea Tree & Salicylic Acid For Itch-Free","qty":"1"},
{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/n/onion-beard-oil_1.jpg","price":"449","title":"Mamaearth Onion Beard Oil With Onion & Redensyl For Beard Growth","qty":"1"},
{"bracket":7,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/l/almond-beard-oil_1.jpg","price":"449","title":"Mamaearth Almond Beard Oil With Almond & Biotin For Beard Nourishment Be the first to review this product","qty":"1"},{"bracket":2,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/1/71utdazxekl._sl1500_.jpg","price":"698","title":"Schwarzkopf Osis+ Curl Honey Curl Cream Be the first to review this product","qty":"1"},
{"bracket":7,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787429534.jpg","price":"950","title":"Schwarzkopf Professional Bonacure Hyaluronic Moisture Kick Masque Treatment","qty":"1"},
{"bracket":7,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787429633_2.jpg","price":"846","title":"Schwarzkopf Professional Bonacure Collagen Volume Boost Micellar","qty":"1"},
{"bracket":7,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787429138.jpg","price":"846","title":"Schwarzkopf Professional Bonacure Hyaluronic Moisture Kick Micellar Shampoo Be the first to review this product","qty":"1"},{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787429138.jpg","price":"846","title":"Schwarzkopf Professional Bonacure Hyaluronic Moisture Kick Micellar Shampoo Be the first to review this product","qty":"1"},{"bracket":1,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787232233_1.jpg","price":"698","title":"Schwarzkopf Professional Osis + Session Label Strong Hold Hair Super Dry Fix Spray Be the first to review this product","qty":"1"},
{"bracket":5,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787314908_1.jpg","price":"814","title":"Schwarzkopf Professional OSiS+ Flatliner Heat Protection Hair Spray Be the first to review this product","qty":"1"},{"bracket":7,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787430523_2.jpg","price":"400","title":"Schwarzkopf Professional Bonacure Peptide Repair Rescue Sealed Ends","qty":"1"},
{"bracket":3,"img":"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787430646_2_1.jpg","price":"691","title":"Schwarzkopf Professional Bonacure Peptide Repair Rescue Nutri-Shield Serum Be the first to review this product","qty":"1"}]



function Verticalappend(ayur_arr){

  document.getElementById("prodlist-r").innerHTML=null;
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
       cutoffprice.innerText="₹ "+(Number(e.price)*1.3).toFixed(2)
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
  
  Verticalappend(ayur_arr);
  






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
    price=parseInt(price)+parseInt(e.price);
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












  
  
  let flaggg = true;
  let LetMagicBegins = ()=>{
    let babba = document.getElementById("popupShopBy");
    let BtN = document.querySelector("#plusSignforPop");
    if(flaggg==true){
      babba.style.display = "block" ;
      BtN.textContent = "-";
      flaggg=false;
    }
    else if(flag==false){
      babba.style.display = "none" ;
      BtN.textContent = "+";
      flaggg=true
    }
    
  }
  //
  let flag2 = true;
  let LetMagicBegins2 = ()=>{
    let babba2 = document.getElementById("popupShopBy2");
    let BtN2 = document.querySelector("#plusSignforPop2");
    if(flag2==true){
      babba2.style.display = "block" ;
      BtN2.textContent = "-";
      flag2=false;
    }
    else{
      babba2.style.display = "none" ;
      BtN2.textContent = "+";
      flag2=true
    }
    
  }
  //
  let flag3 = true;
  let LetMagicBegins3 = ()=>{
    let babba3 = document.getElementById("popupShopBy3");
    let BtN3 = document.querySelector("#plusSignforPop3");
    if(flag3==true){
      babba3.style.display = "block" ;
      BtN3.textContent = "-";
      flag3=false;
    }
    else{
      babba3.style.display = "none" ;
      BtN3.textContent = "+";
      flag3=true
    }
    
  }
  // LetMagicBegins();
  document.querySelector("#plusSignforPop").addEventListener("click",LetMagicBegins);
  document.querySelector("#plusSignforPop2").addEventListener("click",LetMagicBegins2);
  document.querySelector("#plusSignforPop3").addEventListener("click",LetMagicBegins3);









// less than thousand
document.getElementById("CombiNationChecked1").addEventListener("click",as1);
var b1000=[];
var w=0;
function as1()
{b1000=[];
  if(w%2==0)
  {
    let z1=document.getElementById("CombiNationChecked1").value;
if(z1==='on')
{
    for(let i=0;i<ayur_arr.length;++i)
    {
        
        if(Number(ayur_arr[i].price)<1000)
      {
        b1000.push(ayur_arr[i])
      }
      
    }
    document.getElementById("prodlist-r").innerHTML=null;
    Verticalappend(b1000);
}
  }
else{
  Verticalappend(ayur_arr);
}
++w;
}
// greater than thousand
document.getElementById("CombiNationChecked2").addEventListener("click",as2);
var b1000=[];
var y=0;
function as2()
{b1000=[];
  if(y%2==0)
  {
    let z1=document.getElementById("CombiNationChecked2").value;
if(z1==='on')
{
    for(let i=0;i<ayur_arr.length;++i)
    {
        
        if(Number(ayur_arr[i].price)>=1000)
      {
        b1000.push(ayur_arr[i])
      }
      
    }
    Verticalappend(b1000);
}
  }
  else{
    Verticalappend(ayur_arr);
  }
++y;
}

// sort by name
document.getElementById("sort-r").addEventListener("click",as3);
var b1000=[];
// var ayurarr1=ayur_arr
let r=0;
for(let i=0;i<ayur_arr.length;++i)
{}
function as3()
{if(r%2!=0)
 {
  // console.log(document.getElementById("sort-r").value)
  b1000=[];
    let z1=document.getElementById("sort-r").value;
if(z1==3)
{
  ayur_arr.sort(function(a,b){
    return a.price-b.price;
  })
 } 
 else if(z1==4)
 {
   ayur_arr.sort(function(a,b){
     return b.price-a.price;
   })
  } 
  else if(z1==1)
  {
    ayur_arr.sort(function(a,b){
      let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
    })
   }

 console.log(ayur_arr)
 document.getElementById("prodlist-r").innerHTML=null;
 Verticalappend(ayur_arr);
}
++r;


}
///////////toShowUserName//////////////
let data101 = JSON.parse(localStorage.getItem("acc_data")) ;

  let append101 = (data101)=>{
    
        let acc = document.querySelector("#acc");
        acc.textContent =  data101.name;
   
    }
    append101(data101);

/////////////////////////////////////
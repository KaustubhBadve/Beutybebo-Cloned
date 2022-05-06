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
    
      document.getElementById("sidediv").addEventListener("click",toshowcartproduct)
    


     var flag=false

      function toshowcartproduct(){
          if(flag==false){
            document.getElementById("cartproductlist").style.display="block"
            document.getElementById("secondbig").style.height="auto"
            Cartelementshow()
            flag=true
          }
        else if(flag==true)
        {
            document.getElementById("cartproductlist").style.display="none"
            document.getElementById("secondbig").style.height="auto"
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
     
      





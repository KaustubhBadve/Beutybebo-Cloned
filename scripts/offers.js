
// IMPORT
import {header,footer} from "../component/navbar.js"
document.getElementById("header").innerHTML=header();
document.getElementById("footer").innerHTML=footer();

//DATA
var data1=[{url:"https://www.beautybebo.com/pub/media/mega-menu/L-Oreal-paris.png"},{url:"https://www.beautybebo.com/pub/media/ads/off_wella_1.png"},{url:"https://www.beautybebo.com/pub/media/ads/off_venus_1.png"}];

var data2=[{url:"https://www.beautybebo.com/pub/media/ads/vlcc-banner.jpg"},{url:"https://www.beautybebo.com/pub/media/ads/plum-banner.jpg"},{url:"https://www.beautybebo.com/pub/media/ads/nivea-banner.jpg"},{url:"https://www.beautybebo.com/pub/media/ads/lakme-banner.jpg"}];

var data3=[{url:"https://www.beautybebo.com/pub/media/ads/offer_mamaearth.png"},{url:"https://www.beautybebo.com/pub/media/ads/offer_blue_heaven.png"},{url:"https://www.beautybebo.com/pub/media/ads/pantene.jpg"}];

var data4=[
{text:"AROMA MAGIC",url:"https://www.beautybebo.com/brand/aroma-magic.html"},
{text:"BIOTIQUE",url:"https://www.beautybebo.com/brand/biotique.html"},
{text:"CETAPHIL",url:"https://www.beautybebo.com/brand/cetaphil.html"},
{text:"DOVE",url:"https://www.beautybebo.com/brand/dove.html"},
{text:"EVERYUTH NATURALS",url:"https://www.beautybebo.com/brand/everyuth-naturals.html"},
{text:"FOGG",url:"https://www.beautybebo.com/brand/fogg.html"},

{text:"JOY",url:"https://www.beautybebo.com/brand/aroma-magic.html"},
{text:"GARNIER",url:"https://www.beautybebo.com/brand/biotique.html"},
{text:"HIMALAYA",url:"https://www.beautybebo.com/brand/cetaphil.html"},
{text:"LOREAL PARIS",url:"https://www.beautybebo.com/brand/dove.html"},
{text:"LAKME",url:"https://www.beautybebo.com/brand/everyuth-naturals.html"},
{text:"LOTUS HERBALS",url:"https://www.beautybebo.com/brand/fogg.html"}
,

{text:"JOMAMAEARTHY",url:"https://www.beautybebo.com/brand/aroma-magic.html"},
{text:"MAYBELLINE",url:"https://www.beautybebo.com/brand/biotique.html"},
{text:"NEUTROGENA",url:"https://www.beautybebo.com/brand/cetaphil.html"},
{text:"NIVEA",url:"https://www.beautybebo.com/brand/dove.html"},
{text:"PANTENE",url:"https://www.beautybebo.com/brand/everyuth-naturals.html"},
{text:"OLAY",url:"https://www.beautybebo.com/brand/fogg.html"}
,

{text:"PARACHUTE",url:"https://www.beautybebo.com/brand/aroma-magic.html"},
{text:"POND'S",url:"https://www.beautybebo.com/brand/biotique.html"},
{text:"VASELINE",url:"https://www.beautybebo.com/brand/cetaphil.html"},
{text:"VEGA",url:"https://www.beautybebo.com/brand/dove.html"},
{text:"VLCC",url:"https://www.beautybebo.com/brand/everyuth-naturals.html"},
{text:"PLUM",url:"https://www.beautybebo.com/brand/fogg.html"}
,

{text:"HAMDARD",url:"https://www.beautybebo.com/brand/aroma-magic.html"},
{text:"HEAD&SHOULDERS",url:"https://www.beautybebo.com/brand/biotique.html"},
{text:"INDULEKHA",url:"https://www.beautybebo.com/brand/cetaphil.html"},
{text:"SHAHNAZ HUSAIN",url:"https://www.beautybebo.com/brand/dove.html"},
{text:"SUNSILK",url:"https://www.beautybebo.com/brand/everyuth-naturals.html"},
{text:"TRESEMME",url:"https://www.beautybebo.com/brand/fogg.html"}
,

{text:"BLUE HEAVEN",url:"https://www.beautybebo.com/brand/aroma-magic.html"},
{text:"BIODERMA",url:"https://www.beautybebo.com/brand/biotique.html"},
{text:"CALVIN KLEIN",url:"https://www.beautybebo.com/brand/cetaphil.html"},
{text:"BAJAJ ALMOND DROPS",url:"https://www.beautybebo.com/brand/dove.html"},
{text:"BOROPLUS",url:"https://www.beautybebo.com/brand/everyuth-naturals.html"},
{text:"CHICCO",url:"https://www.beautybebo.com/brand/fogg.html"}
,

{text:"DENVER",url:"https://www.beautybebo.com/brand/aroma-magic.html"},
{text:"ENGAGE",url:"https://www.beautybebo.com/brand/biotique.html"},
{text:"FACES CANADA",url:"https://www.beautybebo.com/brand/cetaphil.html"},
{text:"FAIR AND LOVELY",url:"https://www.beautybebo.com/brand/dove.html"},
{text:"GODREJ ANOOP",url:"https://www.beautybebo.com/brand/everyuth-naturals.html"},
{text:"EVA",url:"https://www.beautybebo.com/brand/fogg.html"}
,

{text:"INNISFREE",url:"https://www.beautybebo.com/brand/aroma-magic.html"},
{text:"KHADI ESSENTIALS",url:"https://www.beautybebo.com/brand/biotique.html"},
{text:"LOTUS MAKE UP",url:"https://www.beautybebo.com/brand/cetaphil.html"},
{text:"MAMYPOKO",url:"https://www.beautybebo.com/brand/dove.html"},
{text:"MISS CLAIRE",url:"https://www.beautybebo.com/brand/everyuth-naturals.html"},
{text:"JOHNSONS",url:"https://www.beautybebo.com/brand/fogg.html"},

{text:"MYGLAMM",url:"https://www.beautybebo.com/brand/aroma-magic.html"},
{text:"NYX",url:"https://www.beautybebo.com/brand/biotique.html"},
{text:"03+",url:"https://www.beautybebo.com/brand/cetaphil.html"},
{text:"PAC",url:"https://www.beautybebo.com/brand/dove.html"},
{text:"PATANJALI",url:"https://www.beautybebo.com/brand/everyuth-naturals.html"},
{text:"REJUVENATING UBTAN",url:"https://www.beautybebo.com/brand/fogg.html"}

];

//EVENTLISTENER
document.querySelector(".tabs1").addEventListener("click",trendingoffers1);
document.querySelector(".tabs2").addEventListener("click",trendingoffers2);
document.querySelector(".tabs3").addEventListener("click",trendingoffers3);
document.querySelector(".tabs4").addEventListener("click",trendingoffers4);



function trendingoffers1(){

    document.querySelector(".tabs1").style.background="#e58";
    document.querySelector(".tabs2").style.background="white";
    document.querySelector(".tabs3").style.background="white";
    document.querySelector(".tabs4").style.background="white";
    tonull()
    document.querySelector(".offers_rowk").style.gridTemplateColumns="1fr 1fr 1fr"
    append(data1)
}
function trendingoffers2(){
    document.querySelector(".tabs1").style.background="white";
    document.querySelector(".tabs2").style.background="#e58";
    document.querySelector(".tabs3").style.background="white";
    document.querySelector(".tabs4").style.background="white";
    tonull();
    document.querySelector(".offers_rowk").style.gridTemplateColumns="1fr 1fr 1fr 1fr";
    append(data2)
}

function trendingoffers3(){
    document.querySelector(".tabs1").style.background="white";
    document.querySelector(".tabs2").style.background="white";
    document.querySelector(".tabs3").style.background="#e58";
    document.querySelector(".tabs4").style.background="white";
    tonull();
    document.querySelector(".offers_rowk").style.gridTemplateColumns="1fr 1fr 1fr"
    append(data3)
}

function trendingoffers4(){
    document.querySelector(".tabs1").style.background="white";
    document.querySelector(".tabs2").style.background="white";
    document.querySelector(".tabs3").style.background="white";
    document.querySelector(".tabs4").style.background="#e58";
    tonull()
    document.querySelector(".offers_rowk").style.gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr";
    appendtext(data4)
}

function tonull()
{
    var x=document.querySelector(".offers_rowk").innerHTML=null
    return x
}

function append(data)
{
data.map(function(ele)
    {
        let div1=document.createElement("div")
        let img1=document.createElement("img");
        img1.setAttribute("id","imgk")
        img1.src=ele.url;
        div1.append(img1);
        document.querySelector(".offers_rowk").append(div1)
    })
}

function appendtext(data)
{
    data.map(function(ele)
    {
        let div1=document.createElement("div");
        div1.setAttribute("id","allofferstextk")
        let p=document.createElement("p");
        p.innerText=ele.text;
        div1.append(p);
        document.querySelector(".offers_rowk").append(div1);

        div1.addEventListener("click",function()
        {
            hreffunction(ele)
        })
    })
}

function hreffunction(ele)
{
    window.location.href=ele.url
}
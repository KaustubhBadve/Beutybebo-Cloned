function header(){
    return `
    <div id="indextopimgdiv"><img src="https://www.beautybebo.com/pub/media/bb-app.png" alt=""></div>
        

        <div id="belowtopimgdiv">
            <div><img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt=""></div>
            <select name="" id="" aria-placeholder="All Categories">
                <option value="">All Categories</option>
                <option value="">--Makeup</option>
                <option value="">----Face</option>
                <option value="">------Foundation</option>
                <option value="">------Blush</option>
                <option value="">------Highlighter</option>
                <option value="">------Concealer</option>
                <option value="">------Compact & Powder</option>
                <option value="">------Face Primer</option>
                <option value="">------Make up remover</option>
                <option value="">------Contour</option>
                <option value="">------Bronzer</option>
                <option value="">------BB Cream</option>
                <option value="">------Loose Powder</option>
                <option value="">------Makeup Kits</option>
                <option value="">------CC Cream</option> 
              
                <option value="">----Eye</option>
                <option value="">------Eye Shadow</option>
                <option value="">------Eye liner</option>
                <option value="">------False Eye lashes</option>
                <option value="">------Maskara</option>
                <option value="">------Eye bro Enhancer</option>
                <option value="">------Kajal</option>
                <option value="">------Under Eye Concealer</option>
                <option value="">------Eye Makeup Remover</option>
                <option value="">------Contact Lenses</option>
                <option value="">------Eye Primer</option>
                <option value="">------Eye Kits</option>
                <option value="">------Makeup Kits</option>
                <option value="">------CC Cream</option>
    
                <option value="">----Fragrance</option>
                <option value="">------Perfumes</option>
                <option value="">------deodorants-roll-on</option>
                <option value="">------Body Mist / Spray</option>
    
                <option value="">----Natural Hair Care</option>
                <option value="">------Hair Oil</option>
                <option value="">------Hair Serum</option>
                <option value="">------Hair Gel</option>
                <option value="">------Shampoo</option>
                <option value="">------Conditioner</option>
                <option value="">--Latest Offer</option>
            </select>
        
        <div><input type="text"  placeholder="Enter your search..." id="inputsearch"></div>
        <div id="searchsymbol"><span><i class="fa-solid fa-magnifying-glass"></i></span></div>
        <div id="heartsymbol"><span><i class="fa-solid fa-heart"></i></span></div>
        <div id="profilesymbol"><span><i class="fa-solid fa-user"></i></span></div>
        <div id="acc">My Account</div>
        </div>
    
       
        <div id="navbar">
        <div>
        <div id="navbartitle1">MAKEUP <span><i class="fa-solid fa-angle-down"></i></span></div>
        </div>

       

        
    <div> <div id="navbartitle2">SKIN <span><i class="fa-solid fa-angle-down"></i></span></div></div>
    <div> <div id="navbartitle3">HAIR <span><i class="fa-solid fa-angle-down"></i></span></div></div>
    <div><div id="navbartitle4">PERSONAL CARE <span><i class="fa-solid fa-angle-down"></i></span></div></div>
    <div><div id="navbartitle5">MOM & BABY CARE <span><i class="fa-solid fa-angle-down"></i></span></div></div>
    <div> <div id="navbartitle">FRAGRANCE <span><i class="fa-solid fa-angle-down"></i></span></div></div>
    <div> <div id="navbartitle6">AYURVEDA <span><i class="fa-solid fa-angle-down"></i></span></div></div>
    <div> <div id="navbartitle7">BRANDS <span><i class="fa-solid fa-angle-down"></i></span></div></div>
        <div id="cartnavbar"><span><i class="fa-solid fa-bag-shopping"></i></span> MY CART</div>
    </div>

    `
}

function footer(){
   return `
    <div id="footertop">


    <div id="footertopfirst">


        <div>
            <div id="foothead">CONTACT INFO</div>
            <div style="color:#dd0285">--------</div>
             <div class="color o1ne">(+91) 97990 30777</div>
             <div class="color o2ne">support@beautybebo.com</div>
             <div class="color o3ne">sales@beautybebo.com</div>
             <div class="color o4ne" >Open time: 10:00AM - 7:00PM</div>
             <div id="insta">
                <div id="facebook"><i class="fa-brands fa-facebook-f"></i></div>
                <div id="facebook"><i class="fa-brands fa-instagram"></i></div>
            </div>
        </div>


        <div>
            <div id="foothead">QUICK LINKS</div>
            <div style="color:#dd0285">--------</div>
            <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Refund & Return Policy</li>
                <li>Shipping Policy</li>
            </ul>
        </div>
        <div>
            <div id="foothead">CUSTOMER INFO</div>
            <div style="color:#dd0285">--------</div>
            <ul>
                <li>My Account</li>
                <li>Track your Order</li>
                <li>Order Returns</li>
                <li>Wishlist</li>
                <li>News & Events</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div>
            <div id="foothead">CATEGORIES</div>
            <div style="color:#dd0285">--------</div>
            <ul>
                <li>Makeup</li>
                <li>Skin</li>
                <li>Hair</li>
                <li>Personal Care</li>
                <li>Mom & Baby Care</li>
                <li>Fragrance</li>
                <li>Ayurveda</li>
            </ul>
        </div>
       
    </div>


    <hr>
    <div id="secondlastfooterdiv">
        <div id="footersecondlastimg"><img src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" alt=""></div>
        <div id="footerinput">
            <div>Signup For Newsletter</div>
            <div><input type="text" placeholder="Your email address"></div>
            <div id="subscribe">Subscribe</div>
        </div>
    </div>
</div>

<div id="topdownfooter">© 2020 All Rights Reserved.</div>

    `
}



export {header,footer}




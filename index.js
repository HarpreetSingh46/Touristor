let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardMen = document.querySelector(".cardMen");
let cardgirl = document.querySelector(".cardgirl");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");

let cart = [];
let cartCount = document.querySelector(".cartCount");
let cartContainer = document.querySelector(".cartItems");

let fullPage = document.querySelector(".fullPage");


// ================= HIDE ALL SECTIONS =================

function hideAllSections(){
   mainPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   blogContent.style.display = "none";
   aboutPage.style.display = "none";
   contactus.style.display = "none";
   fullPage.style.display = "none";
}


// ================= HOME =================

function home(){

   hideAllSections();

   mainPage.style.display = "flex";
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   blogContent.style.display = "block";

   document.getElementById("home").style.color = "rgb(1,190,190)";
   document.getElementById("shop").style.color = "black";
   document.getElementById("blog").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color = "black";
}


// ================= DESTINATIONS =================

function shop(){

   hideAllSections();

   cardMen.style.display = "block";
   cardgirl.style.display = "block";

   document.getElementById("shop").style.color = "rgb(1,190,190)";
   document.getElementById("home").style.color = "black";
   document.getElementById("blog").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color = "black";
}


// ================= BLOG =================

function blog(){

   hideAllSections();

   blogContent.style.display = "block";

   document.getElementById("blog").style.color = "rgb(1,190,190)";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color = "black";
}


// ================= ABOUT =================

function about(){

   hideAllSections();

   aboutPage.style.display = "block";

   document.getElementById("about").style.color = "rgb(1,190,190)";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("blog").style.color = "black";
   document.getElementById("contact").style.color = "black";
}


// ================= CONTACT =================

function contact(){

   hideAllSections();

   contactus.style.display = "block";

   document.getElementById("contact").style.color = "rgb(1,190,190)";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("blog").style.color = "black";
   document.getElementById("about").style.color = "black";
}


// ================= IMAGE POPUP =================

function showCard(img){

   let newImg = document.getElementById("cartImg");
   newImg.src = img.src;

   fullPage.style.display = "flex";
}


// ================= CART OPEN =================

function addItem(){

   document.querySelector(".addCart").style.display="block";
}


// ================= ADD PRODUCT =================

function addProduct(button){

   let card = button.closest(".crd");
   let img = card.querySelector("img").src;
   let title = card.querySelector("h3").innerText;

   cart.push({image:img,name:title});

   updateCart();
}


// ================= UPDATE CART =================

function updateCart(){

   cartContainer.innerHTML = "";
   cartCount.innerText = cart.length;

   cart.forEach(item=>{
      cartContainer.innerHTML += `
         <div class="cartItem">
            <img src="${item.image}">
            <p>${item.name}</p>
         </div>
      `;
   });
}


// ================= CLOSE CART =================

function closeCart(){

   document.querySelector(".addCart").style.display="none";
}


// ================= DARK MODE =================

function toggleTheme(){

   document.body.classList.toggle("dark-theme");

   let btn = document.getElementById("themeToggle");

   if(document.body.classList.contains("dark-theme")){
      btn.innerText = "☀";
   }else{
      btn.innerText = "🌙";
   }
}


// ================= ALERT CART =================

function addToCart(){

   alert("Added To Cart");
   location.reload();
}
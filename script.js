// Premium Bakery Website Script - Part 1

const phone = "9779807242440";

function orderNow(cake, price){
    const msg =
`Hello! I want to quick-order the ${cake} for NRs ${price}. Please confirm my order.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
}

// Theme Toggle
let dark=false;

function toggleTheme(){

dark=!dark;

if(dark){

document.body.classList.add("bg-gray-900","text-white");

}else{

document.body.classList.remove("bg-gray-900","text-white");

}

}

// Simple Page Switch

function showPage(id){

document.querySelectorAll(".page").forEach(p=>{

p.style.display="none";

});

document.getElementById(id).style.display="block";

}

// Floating WhatsApp

function openWhatsApp(){

const text="Namaste! I would like to inquire about your special cakes.";

window.open(

`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,

"_blank"

);

}

console.log("Premium Bakery Website Loaded Successfully");

const testimonials = [
    {
        nme: "Suvo Datta",
        imgUrl: "./assets/suvo-cd-img.png",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    },

    {
        nme: "Rajib Datta",
        imgUrl:  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels."
    },

    {
        nme: "Kanak Datta",
        imgUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best."
    },

    {
        nme: "Kamal Datta",
        imgUrl:"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "Hi shuvo datta.This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    }
]
    

let testimonialImage = document.getElementById("pic");
let textimonialText = document.getElementById("text");
let textimonialName = document.getElementById("name");

let indx = 0;

updateTestimonial();

function updateTestimonial(){
    const {nme, imgUrl, text} = testimonials[indx]

    textimonialName.innerHTML = nme;
    testimonialImage.src = imgUrl;
    textimonialText.innerHTML = text;

    indx++

    if(indx === testimonials.length) {
        indx = 0;
    }

    setTimeout(function(){
        updateTestimonial()
    }, 3000)

}
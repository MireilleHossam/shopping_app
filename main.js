function validInfo(){
    var firstName= document.getElementById("firstName").value;
    var secondName= document.getElementById("secondName").value;
    var phoneNo= document.getElementById("phoneNo").value;
    var branchName= document.getElementById("branchName").value;
    var email_form= document.getElementById("email_form").value;
    var message_form= document.getElementById("message_form").value;
    var error_message= document.getElementById("error_message");

    error_message.style.padding ="10px";
    var text;
    if(firstName.length < 3){
        text= "Please Enter valid First Name";
        error_message.innerHTML= text;
        return false;
    }
    if(secondName.length < 3){
        text= "Please Enter valid Second Name";
        error_message.innerHTML= text;
        return false;
    }
    if( isNaN(phoneNo) || phoneNo.length !=11  ){
        text= "Please Enter valid Phone Number";
        error_message.innerHTML= text;
        return false;
    }
    if( emailRegex.test(email_form)== false ){
        text= "Please Enter valid Phone Number";
        error_message.innerHTML= text;
        return false;
    }
    if( message_form.length<=50 ){
        text= "Please Enter valid Phone Number";
        error_message.innerHTML= text;
        return false;
    }

}

/* SLIDER ANIMATED*/
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}


function Slider( element ) {
	this.el = document.querySelector( element );
	this.init();
}	


/*  NUMBER SLIDER ANIMATED */
Slider.prototype = {
	init: function() {
		this.links = this.el.querySelectorAll( "#slider-nav a" );
		// this.wrapper = this.el.querySelector( "#slider-wrapper" );
		this.navigate();
	},
	navigate: function() {
	
		for( var i = 0; i < this.links.length; ++i ) {
			var link = this.links[i];
			this.slide( link );	
		}
	},
	
	
	setCurrentLink: function( link ) {
		var parent = link.parentNode;
		var a = parent.querySelectorAll( "a" );
		
		link.className = "current";
		
		for( var j = 0; j < a.length; ++j ) {
			var cur = a[j];
			if( cur !== link ) {
				cur.className = "";
			}
		}
	}	
};

document.addEventListener( "DOMContentLoaded", function() {
	var aSlider = new Slider( "#slider" );
});


/* =-----------------CART -------------------------*/
const openBtn = document.getElementById('open_cart_btn')
const cart = document.getElementById('sidecart')
const closeBtn = document.getElementById('close_btn')
const backdrop = document.querySelector('.backdrop')

openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
backdrop.addEventListener('click', closeCart)

// Open Cart
function openCart(){
	cart.classList.add('open')
	backdrop.style.display='block'

	setTimeout(()=>{
		backdrop.classList.add('show')
	},0)
	
}

// Close Cart
function closeCart(){
	cart.classList.remove('open')
	backdrop.classList.remove('show')
	
	setTimeout(()=>{
		backdrop.style.display='none'
	}, 500);
}

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


// /*  NUMBER SLIDER ANIMATED */
Slider.prototype = {
	init: function() {
        try
        {
            this.links = this.el.querySelectorAll( "#slider-nav a" );
            this.navigate();
        }
        catch(err)
        {
            return;
        }
		
		
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


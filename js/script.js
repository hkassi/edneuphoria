/* menu toggle 
*/

	let menu_elt = document.querySelector(".responsive-menu");
	let menu_is_visible = false;
	let showMenu= function(){
		if(menu_is_visible){
			menu_elt.style.left= "-120%";
			menu_is_visible = false;
		}
		else {
			menu_elt.style.left= "0";
			menu_is_visible = true;
		}
	}

/* featured slide */
	let featuredSlide=function(target){
		document.querySelector('.featured-image').setAttribute('src','./img/featured/image-'+target+'.png');
		document.querySelector('.active-slider').setAttribute('class', 'inactive-slider');
		document.querySelector('.slider-tracker >div:nth-child('+target+')').setAttribute('class', 'active-slider');
	}


/* product slider
*/
	let elt= document.querySelector(".product-photo img");
	let showTulips=function(tulip_color){
		switch(tulip_color){
			case 'white':
				elt.setAttribute("src","./img/product/white-tulips.png");
				document.querySelector(".price-tag h3").innerHTML = "White tulips";
				break;
			case 'yellow':
				elt.setAttribute("src","./img/product/yellow-tulips.png");
				document.querySelector(".price-tag h3").innerHTML = "Yellow tulips";
				break;
			case 'purple':
				elt.setAttribute("src","./img/product/purple-tulips.png");
				document.querySelector(".price-tag h3").innerHTML = "Purple tulips";
				break;
			case 'red':
				elt.setAttribute("src","./img/product/red-tulips.png");
				document.querySelector(".price-tag h3").innerHTML = "Red tulips";
				break;
			case 'pink':
				elt.setAttribute("src","./img/product/pink-tulips.png");
				document.querySelector(".price-tag h3").innerHTML = "Pink tulips";
				break;
		}
	}
	/*     accordion  collapsing script */


	let accollapse=function(target){
		if(target.nextElementSibling.className === "accordion-not-collapsed"){
			target.nextElementSibling.className = "accordion-collapsed";
			target.lastElementChild.innerHTML = "+";
		}else {
			target.nextElementSibling.className = "accordion-not-collapsed";
			target.lastElementChild.innerHTML = "-";
		}
	}

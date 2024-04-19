window.addEventListener("load",function(){
	document.querySelector(".controller .prev-btn").addEventListener("click",function(e){
		e.preventDefault();
		swiper.slidePrev();
	});
	document.querySelector(".controller .next-btn").addEventListener("click",function(e){
		e.preventDefault();
		swiper.slideNext();
	});
	var swiper = new Swiper(".mySwiper", {
		loop:true,
		autoplay: 
        {delay: 3000}
	});
	let sectionList=[];
	sectionList[0]=document.querySelector(".start");
	let section=this.document.querySelectorAll("section");
		for(let i=0; i<section.length; i++){
		sectionList.push(section[i]);
	}
	let n=0; 
	let moving=false;
	let winh; 
	let total=sectionList.length+1; 
	let headerFix=document.querySelector(".header");
	function initFn(){
		for(let i=0; i<sectionList.length; i++){
			if(i == 0){
				sectionList[i].classList.add("active");
			}
		}
	}
	initFn();
	function categoryFn(){ 
		moving=true; 
		winh=window.innerHeight;
		for(let i=0; i <sectionList.length; i++){ 
			if(n < sectionList.length){
				if(i <= n){ 
					if(i == n){ 
						for(j=0; j<sectionList.length; j++){
							if(j == n){
								sectionList[j].classList.add("active");
							}
							else{
								sectionList[j].classList.remove("active");
							}
						}

						gsap.to(sectionList[i], {top: 0, duration: 1, onComplete: function(){
							moving=false;
						}});
					}
				}

				else{ 
					gsap.to(sectionList[i], {top: winh, duration: 1});
				}
			}
			else{ 
				gsap.to(sectionList[sectionList.length-1], {top: -358, duration: 1, onComplete: function(){
					moving=false;
				}});
			}
		}

		if(n !== 0){
			headerFix.classList.add("fixed");
		}
		else{
			headerFix.classList.remove("fixed");
		}
	}
	document.addEventListener("wheel",function(e){
		if(moving)return;
		if(e.wheelDeltaY > 0){  
			if(n >0){ 
				n=n-1; 
			}
			else {
				return;
			}
		}
		else { 
			if(n < total-1){ 
				n=n+1;
			}
			else { 
				return;
			}
		}
		categoryFn();
	});
	let gnbList=document.querySelectorAll("#desktop > ul > li");
	let header=document.querySelector(".header");
	let wint;
let tabs=document.querySelector('.tab_container a.tab');
let mobile=document.getElementById("mobile");

let dim=document.querySelector(".dim");

	tabs.addEventListener("click",function(e){
		e.preventDefault();
		if(tabs.classList.contains("active")===true){ 
			tabs.classList.remove("active"); 
			mobile.classList.remove("active"); 
			dim.classList.remove("active");
			document.body.classList.remove("fixed"); 
		}
		else { 
			tabs.classList.add("active"); 
			mobile.classList.add("active"); 
			dim.classList.add("active"); 
			document.body.classList.add("fixed"); 
		}
	});
let mobileListItems=document.querySelectorAll("#mobile > ul > li");
for(let i=0; i<mobileListItems.length; i++){ 
	mobileListItems[i].addEventListener("click", function(e){ 
		e.preventDefault();
		if(e.currentTarget.classList.contains("active") === false){
			for(let j=0; j<mobileListItems.length; j++){
				if(j === i){
					mobileListItems[j].classList.add("active");
					gsap.fromTo(mobileListItems[j].querySelector("ul"), {display: "block", height: 0}, {height:"auto", duration: 0.3});
				}
				else{
					mobileListItems[j].classList.remove("active");
					gsap.to(mobileListItems[j].querySelector("ul"), {height: 0, duration: 0.3, onComplete: function(){
						mobileListItems[j].querySelector("ul").removeAttribute("style");
					}});
				}
			}
		}
		else{ 
			mobileListItems[i].classList.remove("active");
			gsap.to(mobileListItems[i].querySelector("ul"), {height: 0, duration: 0.3, onComplete: function(){
				mobileListItems[i].querySelector("ul").removeAttribute("style");
			}});
		}
	});
}
let winw;
this.window.addEventListener("resize",function(){
winw=window.innerWidth;
if(winw > 720){
	if(tabs.classList.contains("active")){ 
		this.document.body.classList.remove("fixed"); 
		mobile.classList.remove("active"); 
		tabs.classList.remove("active");
		dim.classList.remove("active");
	}
}
});
	for(let i=0; i < gnbList.length; i++){
		gnbList[i].addEventListener("mouseenter",function(){
			headerFix.classList.add("active");
		});
		gnbList[i].addEventListener("mouseleave",function(){
			headerFix.classList.remove("active");
		});
	}
	});
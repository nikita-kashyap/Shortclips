function sidenavopen(){
	document.getElementById("extradiv").style.display="block";
	if (window.matchMedia("(max-width: 400px)").matches) {
		document.getElementById("sidenav").style.width = "100%";
	}else if(window.matchMedia("(max-width: 595px)").matches){
		document.getElementById("sidenav").style.width = "80%";
	}else if(window.matchMedia("(max-width: 830px)").matches){
		document.getElementById("sidenav").style.width = "50%";
	}else{
		var sidenav= document.getElementById("sidenav");
		sidenav.style.width="30%";
	}
}
function sidenavclose(){
	var sidenav=document.getElementById("sidenav");
	sidenav.style.width="0";
	document.getElementById("extradiv").style.display="none";
}
function setheading(){
	var div1=document.getElementById("header");
	div1.style.height="90px";
	var heading=document.getElementById("heading");
	heading.style.fontSize="30px";
	heading.style.left="0";
	heading.style.top="3%";
}
function moremenu(){
	var menubar=document.getElementById("more");
	var topnav= document.getElementById("topnav");
	if(topnav.style.height=="auto"){
		topnav.style.height="49px";
		menubar.style.backgroundColor="#663966";
	}
	else{		
		topnav.style.height="auto";
		menubar.style.backgroundColor="#360936";
	}		
}



	
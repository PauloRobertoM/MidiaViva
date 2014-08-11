function slide1(){
	document.getElementById('id').src="images/baner.jpg";
	setTimeout("slide2()", 2000);
	document.getElementById('aId').href="portfolio.html";
}
			 
function slide2(){
	document.getElementById('id').src="images/baner2.jpg";
	setTimeout("slide3()", 2000);
	document.getElementById('aId').href="portfolio.html";
}
	 
function slide3(){
	document.getElementById('id').src="images/baner3.jpg";
	setTimeout("slide1()", 2000);
	document.getElementById('aId').href="portfolio.html";
}
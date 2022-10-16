var slides;

window.onload = init;

function init(){
    setTimeout(hideURLbar, 0);
    asignarVariables();
	
	if(slides)
	{
		new Splide( '.splide',{type:'loop',autoplay:true} ).mount();
	}
}

function asignarVariables(){
	slides = document.getElementById("slide_01");
}
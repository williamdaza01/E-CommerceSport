let menu_items = [];
let paginas = [];
let slides;
const menu_html = `<li>
<a href="javascript:void(0);" id="item_1">Home</a>
</li>
<li>
<a href="javascript:void(0);" id="item_2">About Us</a>
</li>
<li>
<!-- First Tier Drop Down -->
<label for="drop-2" class="toggle">
Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span>
</label>
<a href="#">Dropdown 
<span class="fa fa-angle-down" aria-hidden="true"></span>
</a>
<input type="checkbox" id="drop-2" />
<ul>
    <li><a href="javascript:void(0);" id="item_3" class="drop-text">Services</a></li>
    <li><a href="javascript:void(0);" id="item_4" class="drop-text">Single Page</a></li>
</ul>
</li>
<li>
<a href="javascript:void(0);" id="item_5">Collections</a>
</li>
<li>
<a href="javascript:void(0);" id="item_6">Contact</a>
</li>`;

window.onload = init;

function init() {
    setTimeout(hideURLbar, 0);
    asignarVariables();	
    if(slides)
	{
		new Splide( '.splide',{type:'loop',autoplay:true} ).mount();
	}
}

const navegacion = (event) => {
	menu_items.push(document.getElementById("item_1"));
    menu_items.push(document.getElementById("item_2"));
    menu_items.push(document.getElementById("item_3"));
    menu_items.push(document.getElementById("item_4"));
    menu_items.push(document.getElementById("item_5"));
    menu_items.push(document.getElementById("item_6"));
    menu_items.push(document.getElementById("item_7"));

    paginas["item_1"] = "index.html";
    paginas["item_2"] = "about.html";
    paginas["item_3"] = "coming.html";
    paginas["item_4"] = "single.html";
    paginas["item_5"] = "shop.html";
    paginas["item_6"] = "contact.html";
    paginas["item_6"] = "contact.html";
    paginas["item_7"] = "login.html";

    for(let i of menu_items)
    {
        i.addEventListener("click",abrirPagina);
    }
}

const abrirPagina = (evento) => {
    let pagina = evento.target.id;
    location.href = paginas[pagina];    
}

const asignarVariables = () => {
	slides = document.getElementById("slide_01");
}

window.onload = function(){
    contenedor_menu = document.querySelector(".menu");
    contenedor_menu.innerHTML = menu_html;
    setTimeout(hideURLbar, 0);
    navegacion();
}

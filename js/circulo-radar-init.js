// JavaScript Document

//CANVA RADAR
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("0BCF6E9AB25F4476BB38F5828B569D86");
	var lib=comp.getLibrary();
	handleComplete({},comp);
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.circuloradar3();
	exportRoot.addEventListener("tick", AdobeAn.handleFilterCache);
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
//	AdobeAn.makeResponsive(false,'both',true,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}


//TOOLTIP
const tooltip = document.getElementById("welcome-tooltip");
const tooltipText = tooltip.querySelector("span");

const mensagens = [
    "Bem-vindo",
    "Welcome",
    "Bienvenue"
];

let idiomaAtual = 0;
let intervalo;

function mostrarMensagem() {
    tooltip.style.opacity = "0";

    setTimeout(() => {
        tooltipText.textContent = mensagens[idiomaAtual];
        tooltip.style.opacity = "1";

        idiomaAtual = (idiomaAtual + 1) % mensagens.length;
    }, 800);
}

document
    .getElementById("animation_container")
    .addEventListener("mouseenter", () => {

        mostrarMensagem();

        intervalo = setInterval(
            mostrarMensagem,
            3000
        );
    });

document
    .getElementById("animation_container")
    .addEventListener("mouseleave", () => {

        clearInterval(intervalo);
        tooltip.style.opacity = "0";
    });

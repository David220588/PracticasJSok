import countdown from "./modulos/cuenta_regresiva.js";
import hamburguerMenu from "./modulos/menu_burguer.js";
import { digitalClock , alarma} from "./modulos/reloj.js";
import { moveBall } from "./modulos/teclado.js";
import scrollTopButton from"./modulos/boton_scroll.js"
import darkMode from "./modulos/tema_oscuro.js";
import responsiveMedia from "./modulos/objeto_responsive.js";
import responsiveTester from "./modulos/prueba.js";
import userDeviceInfo from "./modulos/deteccion_dispositivos.js";
import networkStatus from "./modulos/deteccion_red.js";
import webCam from "./modulos/deteccion_webcam.js";
import getGeolocation from "./modulos/geolocalizacion.js";
import searchFilters from "./modulos/filtro_busqueda.js";
import draw from "./modulos/sorteo.js";
import slider from "./modulos/carrousel.js";
import scrollSpy from "./modulos/scroll_espia.js";
import smartVideo from "./modulos/video.js";
import contactFormValidations from "./modulos/validaciones_formulario.js";
import speechReader from "./modulos/narrador.js";




const d= document;
d.addEventListener("DOMContentLoaded",e =>{
    hamburguerMenu(".hamburger-inner",".panel",".menu a")
    digitalClock("#reloj","#activarReloj","#desactivarReloj")
    alarma("./assets/sonidoalarma.mp3","#activarAlarma","#desactivarAlarma")
    countdown("countdown",
    "jan 01,2024 00:00",
    "feliz año 2024!!!!!!!!!!!!!!")
    scrollTopButton(".scroll-top-btn")
   responsiveMedia("yt","(min-width: 1024px)",`<a href="https://www.youtube.com/embed/vTW1Q03GNWk" target="_blank" rel="noopener">Ver Video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/vTW1Q03GNWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
   responsiveMedia("gm","(min-width: 1024px)",`<a href="https://goo.gl/maps/qpMEnFTDbmdAPyS78" target="_blank" rel="noopener">Ver Mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d210177.06960026242!2d-58.6699615!3d-34.6037389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1683667509892!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`) 
   responsiveTester("responsive-tester")  
    userDeviceInfo("userDevice") 
    webCam("webcam")  
    getGeolocation("geolocation") 
    searchFilters(".card-filter",".card")    
    draw("#winner-btn",".player") 
    slider() 
    scrollSpy() 
    smartVideo();  
    contactFormValidations() 
})

d.addEventListener("keydown", e =>{
    // shortcuts(e)
    moveBall(e,".ball",".stage")
})

darkMode(".dark", "dark-mode") 
networkStatus();
 speechReader()

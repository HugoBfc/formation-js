/**
 * Fonction de loader de js pour suppression du bandeau js loaded
 */

function loadJS() {
    var divIsJsLoaded = document.querySelector('#is-js-loaded');
    console.log(divIsJsLoaded)

    divIsJsLoaded.innerHTML = "Js est chargé"
    divIsJsLoaded.style.backgroundColor="green";
    divIsJsLoaded.style.color="white";
    divIsJsLoaded.style.textDecoration="underline";

    divIsJsLoaded.remove()
    setNavbarEvent();
    
}


document.addEventListener('DOMContentLoaded', loadJS);





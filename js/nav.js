function setNavbarEvent() {
    document.querySelector('#create').addEventListener('click',create)
    document.querySelector('#thumbnail').addEventListener('click',thumbnail)
    document.querySelector('#home').addEventListener('click',home)
}
/**
 * 
 * @param {objet} event event déclencheur
 * @param {boolean} setActiveparentLi mettre le parent actif ou non
 */
function setActiveLinkNavBar(event, setActiveparentLi = true) {
    var tousLesLi = document.querySelectorAll('nav>.navbar li');
    tousLesLi.forEach(function(element){
        element.classList.remove('active');
    })
    if (setActiveparentLi) {
         event.target.parentElement.classList.add('active');
    }
}
function home(event) {
    event.preventDefault()
    console.log('fonction home', event);
    setActiveLinkNavBar(event);
}
function thumbnail(event) {
    event.preventDefault()
    console.log('fonction thumbnail', event);
    setActiveLinkNavBar(event);
}
function create(event) {
    event.preventDefault()
    console.log('fonction create', event);
    setActiveLinkNavBar(event);
}
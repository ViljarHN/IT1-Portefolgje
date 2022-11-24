/*
function show_help() {
    const helpModal = document.getElementById('helpModal')
    helpModal.style.display = 'block'
}

function close_help() {
    const helpModal = document.getElementById('helpModal')
    helpModal.style.display = 'none'
}
*/

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px'
}

const navLink = document.querySelectorAll('.h-navbar li a')
const section = document.querySelectorAll('section')

window.onscroll = () => {
    const bottomOfWebpage = document.body.scrollHeight - window.innerHeight
    let current = ""
    section.forEach(section => {
        if (Math.round(window.scrollY) >=  section.offsetTop - 1) {
            current = section.getAttribute('id')
        } 
        if (Math.round(window.scrollY) === bottomOfWebpage) {
            current = section.getAttribute('id')
        }
    });
    navLink.forEach(link => {
        link.classList.remove('active')
        if (link.classList.contains(current)) {
            link.classList.add('active')
        }
    });
}
/*
function ScrollToSection(id) {
    const currentSection = document.getElementById(id+'-selector')
    currentSection.scrollIntoView();
    //HTML: onmouseup="ScrollToSection(this.id);"
}
*/
function show_help() {
    const helpModal = document.getElementById('helpModal')
    helpModal.style.display = 'block'
}

function close_help() {
    const helpModal = document.getElementById('helpModal')
    helpModal.style.display = 'none'
}
/*
function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px'
}
*/

function add_class(id) {
    const element = document.querySelectorAll('section')
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove('active')
    }
    const addToClass = document.getElementById(id+'-section')
    addToClass.classList.add('active')
}
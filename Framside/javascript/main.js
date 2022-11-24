function show_help() {
    const helpModal = document.getElementById('helpModal')
    helpModal.style.display = 'block'
}

function close_help() {
    const helpModal = document.getElementById('helpModal')
    helpModal.style.display = 'none'
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px'
}
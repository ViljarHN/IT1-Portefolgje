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
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

const navLink = document.querySelectorAll('.h-navbar li a');
const section = document.querySelectorAll('section');
//let sectionArray = [];

window.onscroll = () => {
    let current = "";
    section.forEach(section => {
        if (window.scrollY + window.innerHeight/2 >= section.offsetTop) {
            current = section.getAttribute('id');
        }
    });
    navLink.forEach(link => {
        link.classList.remove('active');
        if (link.classList.contains(current)) {
            link.classList.add('active');
        }
    });
}

const showSkill = (id) => {
    let progressValue = 0;
    let skillValue = 0;
    const element = document.getElementById(id);
    const element_value = document.getElementById(id+'-skill');
    element.style.scale = '1.2';
    switch (id) {
        case 'html-progress':
            skillValue = 75;
            break;
        case 'css-progress':
            skillValue = 60;
            break;
        case 'js-progress':
            skillValue = 80;
            break;
    }
    let progress = setInterval(() => {
        progressValue++;
        element_value.innerHTML = `${progressValue}%`
        element.style.background = `conic-gradient(red ${progressValue * 3.6}deg, yellow ${progressValue * 3.6}deg)`;
        if (progressValue >= skillValue) {
            clearInterval(progress);
        }
    });
    
    setTimeout(() => {
        switch (id) {
            case 'html-progress':
                skillName = 'HTML';
                break;
            case 'css-progress':
                skillName = 'CSS';
                break;
            case 'js-progress':
                skillName = 'JS';
                break;
        }
        element.style.scale = '1';
        element_value.innerHTML = skillName;
        element.style.background = 'yellow'
    }, 3000)
};

/*
const hideSkill = (id) => {
    let skillName = '';
    const element = document.getElementById(id);
    const element_value = document.getElementById(id+'-skill');
    switch (id) {
        case 'html-progress':
            skillName = 'HTML';
            break;
        case 'css-progress':
            skillName = 'CSS';
            break;
        case 'js-progress':
            skillName = 'JS';
            break;
    }
    element.style.scale = '1';
    element_value.innerHTML = skillName;
    element.style.background = 'yellow'
};
*/

/*
window.onload = () => {
    section.forEach(section => {
        sectionArray.push((section.offsetTop + section.offsetHeight/2) - section.offsetHeight, section.offsetTop + section.offsetHeight/2)
        console.log(section.offsetTop, section.offsetHeight, section.offsetHeight/2, section.offsetTop + section.offsetHeight/2)
    })
}
*/
/*
function ScrollToSection(id) {
    const currentSection = document.getElementById(id+'-selector')
    currentSection.scrollIntoView();
    //HTML: onmouseup="ScrollToSection(this.id);"
}
*/
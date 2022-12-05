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

const home_text = document.getElementById('home-section-text');
const text = ['VHN Portfolio', 'Velkommen til min nettside', 'Naviger deg med topp-menyen', 'Håper du liker den'];
let textArrayIndex = 0;
let allowClick = true;

const typewriter = () => {
    if (allowClick == true) {
        let i = 0;
        allowClick = false;
        home_text.style.cursor = 'default'
        function loopFunction() {
            home_text.innerHTML = '';
            function writeText() {
                if(i < text[textArrayIndex].length) {
                    home_text.innerHTML += text[textArrayIndex].charAt(i);
                    i++;
                    setTimeout(writeText, 100)
                } else {
                    if (textArrayIndex < text.length-1) {
                        textArrayIndex += 1;
                        i = 0;
                        setTimeout(loopFunction, 2000)
                    } else {
                        textArrayIndex = 0;
                        setTimeout(() => {
                            allowClick = true;
                            home_text.style.cursor = 'pointer'
                            home_text.innerHTML = '';
                        }, 2000);
                    }   
                }
            }
            writeText();    
        }
        loopFunction();
    }
}


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

let allowShow_HTML_Skill = true;
let allowShow_CSS_Skill = true;
let allowShow_JS_Skill = true;

const showSkillFunction = (id) => {
    let progressValue = 0;
    let skillValue = 0;
    const element = document.getElementById(id);
    const element_value = document.getElementById(id+'-skill');
    element.style.scale = '1.2';
    switch (id) {
        case 'html-progress':
            skillValue = 75;
            allowShow_HTML_Skill = false;
            break;
        case 'css-progress':
            skillValue = 60;
            allowShow_CSS_Skill = false;
            break;
        case 'js-progress':
            skillValue = 80;
            allowShow_JS_Skill = false;
            break;
    }
    let progress = setInterval(() => {
        progressValue++;
        element_value.innerHTML = `${progressValue}%`;
        element.style.background = `conic-gradient(red ${progressValue * 3.6}deg, yellow ${progressValue * 3.6}deg)`;
        if (progressValue >= skillValue) {
            clearInterval(progress);
        }
    });
    
    setTimeout(() => {
        switch (id) {
            case 'html-progress':
                skillName = 'HTML';
                allowShow_HTML_Skill = true;
                break;
            case 'css-progress':
                skillName = 'CSS';
                allowShow_CSS_Skill = true;
                break;
            case 'js-progress':
                skillName = 'JS';
                allowShow_JS_Skill = true;
                break;
        }
        element.style.scale = '1';
        element_value.innerHTML = skillName;
        element.style.background = 'yellow';
    }, 3000);
};

const showSkill = (id) => {
    if (id === 'html-progress' && allowShow_HTML_Skill == true) {
        showSkillFunction(id);
    } else if (id === 'css-progress' && allowShow_CSS_Skill == true) {
        showSkillFunction(id);
    } else if (id == 'js-progress' && allowShow_JS_Skill == true) {
        showSkillFunction(id);
    }
}

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
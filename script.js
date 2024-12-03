const nav = document.getElementById('navlist');

function toggleNavlist() {
    if (nav.style.top === '3.5rem') {
        nav.style.top = 'calc(3.6rem - 100vh + 3.6rem)';
    } else {
        nav.style.top = '3.5rem';
    }
}

const tabs = ['home', 'about', 'skills', 'contact'];

function isSectionInViewport(element) {
    var rect = element.getBoundingClientRect();
    // var header = document.querySelector('.header');
    // var headerRect = header.getBoundingClientRect();
    // console.log(`${Math.ceil(rect.top)}`);
    // return rect.top >= 0 && (rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight);
    return rect.top >= 50 && rect.top <= 60;
}

document.getElementById('body').addEventListener(
    'scrollend', (event) => {
        tabs.forEach(tab => {
            var tabElement = document.getElementById(tab+'Tab');
            var sectionElement = document.getElementById(tab);
            if (isSectionInViewport(sectionElement)) {
                tabElement.classList.add('currentTab');
            } else {
                tabElement.classList.remove('currentTab');
            }
        });
    }
);

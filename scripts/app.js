"use strict";
var _a;
const skillsSection = document.getElementById('mainBottom');
if (skillsSection) {
    skillsSection.classList.remove('main-bottom-flex');
}
(_a = document.getElementById('toggleButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    if (skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
        skillsSection.classList.add('main-bottom-flex');
    }
    else if (skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.contains('main-bottom-flex')) {
        skillsSection.classList.remove('main-bottom-flex');
        skillsSection.classList.add('hidden');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const changeTextElements = document.getElementsByClassName('changeText');
    const hideBeforeClickElements = document.getElementsByClassName('hideBeforeClick');
    if (changeTextElements.length > 0 && hideBeforeClickElements.length > 0) {
        Array.from(changeTextElements).forEach((changeTextElement, index) => {
            const hideBeforeClickElement = hideBeforeClickElements[index];
            changeTextElement.addEventListener('click', () => {
                const changeText = changeTextElement;
                if (hideBeforeClickElement.style.display === 'none') {
                    hideBeforeClickElement.style.display = 'inline';
                    changeText.textContent = 'Read less';
                }
                else {
                    hideBeforeClickElement.style.display = 'none';
                    changeText.textContent = '...Read more';
                }
            });
        });
    }
});

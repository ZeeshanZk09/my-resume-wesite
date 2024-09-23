var _a;
var skillsSection = document.getElementById('mainBottom');
if (skillsSection) {
    skillsSection.classList.remove('main-bottom-flex');
}
(_a = document.getElementById('toggleButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    if (skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
        skillsSection.classList.add('main-bottom-flex');
    }
    else if (skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.contains('main-bottom-flex')) {
        skillsSection.classList.remove('main-bottom-flex');
        skillsSection.classList.add('hidden');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var changeTextElements = document.getElementsByClassName('changeText');
    var hideBeforeClickElements = document.getElementsByClassName('hideBeforeClick');
    if (changeTextElements.length > 0 && hideBeforeClickElements.length > 0) {
        Array.from(changeTextElements).forEach(function (changeTextElement, index) {
            var hideBeforeClickElement = hideBeforeClickElements[index];
            changeTextElement.addEventListener('click', function () {
                var changeText = changeTextElement;
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

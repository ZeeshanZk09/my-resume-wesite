const skillsSection = document.getElementById('mainBottom');

if (skillsSection) {
  skillsSection.classList.remove('main-bottom-flex');
}

document.getElementById('toggleButton')?.addEventListener('click', () => {
  if (skillsSection?.classList.contains('hidden')) {
    skillsSection.classList.remove('hidden');
    skillsSection.classList.add('main-bottom-flex');
  } else if (skillsSection?.classList.contains('main-bottom-flex')) {
    skillsSection.classList.remove('main-bottom-flex');
    skillsSection.classList.add('hidden');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const changeTextElements = document.getElementsByClassName('changeText');
  const hideBeforeClickElements = document.getElementsByClassName('hideBeforeClick');

  if (changeTextElements.length > 0 && hideBeforeClickElements.length > 0) {
    Array.from(changeTextElements).forEach((changeTextElement, index) => {
      const hideBeforeClickElement = hideBeforeClickElements[index] as HTMLElement;

      changeTextElement.addEventListener('click', () => {
        const changeText = changeTextElement as HTMLElement;

        if (hideBeforeClickElement.style.display === 'none') {
          hideBeforeClickElement.style.display = 'inline';
          changeText.textContent = 'Read less';
        } else {
          hideBeforeClickElement.style.display = 'none';
          changeText.textContent = '...Read more';
        }
      });
    });
  }
});

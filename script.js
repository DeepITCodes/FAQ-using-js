document.querySelectorAll('.faq-item').forEach(item => {
    const toggleBtn = item.querySelector('.toggle-btn');
    const answer = item.querySelector('.answer');
    const icon = toggleBtn.querySelector('.icon');
  
    toggleBtn.addEventListener('click', () => {
      if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        icon.src = './assets/images/icon-minus.svg';
        icon.alt = 'Collapse';
      } else {
        answer.style.display = 'none';
        icon.src = './assets/images/icon-plus.svg';
        icon.alt = 'Expand';
      }
    });
  });
  
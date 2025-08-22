document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('nav ul');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }
});
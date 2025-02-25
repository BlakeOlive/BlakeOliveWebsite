// script.js
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('actionButton');
    if (btn) {
      btn.addEventListener('click', () => {
        alert('Button clicked!');
      });
    }
  });
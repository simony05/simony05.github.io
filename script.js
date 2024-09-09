function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openModalVideo(modalId) {
    const modalVideoContainer = document.getElementById(modalId);
    modalVideoContainer.style.display = 'block';
  }
  
  document.querySelectorAll('.close-btn').forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      const modalVideoContainer = closeBtn.parentNode.parentNode;
      modalVideoContainer.style.display = 'none';
    });
  });
  
  document.querySelectorAll('.modal-video-container').forEach((modalVideoContainer) => {
    modalVideoContainer.addEventListener('click', (e) => {
      if (e.target === modalVideoContainer) {
        modalVideoContainer.style.display = 'none';
      }
    });
  });
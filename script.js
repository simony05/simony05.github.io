function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const buttonValues = {
  video1: 'Ya9FqpGUGQ0?si=fihCw89DTBi1b-5L',
  video2: 'H6BRfTwE9zc?si=GgK8jFPvEItorMdM',
  video3: '5BdGLMO1mQs?si=zcw5iwbM5oDumj4-&amp;start=158',
};

const modalBtns = document.querySelectorAll('.modal-btn');
const modal = document.querySelector('.modal-video-container');

modalBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const buttonId = e.target.id;
    const buttonValue = buttonValues[buttonId];
    modal.innerHTML = `
      <div class="modal-video">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/${buttonValue}" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div>
    `;
    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.opacity = "1";
    }, 50);
  });
});

modal.addEventListener('click', () => {
  modal.innerHTML = '';
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
  }, 450);
});

const modalVideo = document.querySelector('.modal-video');

modalVideo.addEventListener('load', () => {
  modalVideo.classList.add('show');
});

const showModalButton = document.querySelector('#show-modal-button');
showModalButton.addEventListener('click', () => {
  modalVideo.classList.add('show');
});

document.querySelectorAll('.modal-video').forEach((modalVideo) => {
  modalVideo.addEventListener('click', (e) => {
    if (e.target === modalVideo) {
      modalVideo.style.display = 'none';
    }
  });
});

const modalContainer = document.querySelector('.modal-container');

modalContainer.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});

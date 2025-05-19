
function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const fullMessage = `Hello! I'm ${name}, Phone: ${phone}%0A${message}`;
    const whatsappNumber = "919067863369";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, "_blank");
  }


  
  const galleryImages = document.querySelectorAll('.gallery img');
  const lightbox = document.getElementById('lightbox-overlay');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeBtn = document.querySelector('.lightbox .close');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Close lightbox on clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImage) {
      lightbox.style.display = 'none';
    }
  });

const openModalBtns = document.querySelectorAll('.open-modal-btn');
    openModalBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
      });
    });

    // Fechar modal
    const closeModalBtns = document.querySelectorAll('.close-modal-btn');
    closeModalBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.closest('.modal-overlay').style.display = 'none';
      });
    });

    // Fechar modal ao clicar fora
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach((modal) => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
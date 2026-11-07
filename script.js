
        // Curseur dynamique
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Menu Mobile Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Fermer le menu après un clic sur un lien (mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Lightbox Modal pour les photos
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImg');

        function openModal(element) {
            const imgSrc = element.querySelector('img').src;
            modalImg.src = imgSrc;
            modal.classList.add('active');
        }

        function closeModal() {
            modal.classList.remove('active');
        }

        // Fermer le modal avec la touche Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

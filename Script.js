/* ============================================================
   CTARS Website — script.js
   Part 3: Functionality & SEO Enhancements
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. DYNAMIC CONTENT: Search & Filter (Services page)
     ---------------------------------------------------------- */
  const searchInput = document.getElementById('pet-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const petCards = document.querySelectorAll('.pet-card');
  const noResultsMsg = document.getElementById('no-results');

  if (petCards.length > 0) {
    function filterPets() {
      const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
      const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
      let visibleCount = 0;

      petCards.forEach(card => {
        const petName = card.querySelector('h4').textContent.toLowerCase();
        const petDesc = card.querySelector('p').textContent.toLowerCase();
        const petType = card.dataset.type;

        const matchesSearch = petName.includes(searchTerm) || petDesc.includes(searchTerm);
        const matchesFilter = activeFilter === 'all' || petType === activeFilter;

        if (matchesSearch && matchesFilter) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Show/hide "no results" message
      if (noResultsMsg) {
        noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    // Attach search input event
    if (searchInput) {
      searchInput.addEventListener('input', filterPets);
    }

    // Attach filter button events
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        e.target.classList.add('active');
        filterPets();
      });
    });
  }

  /* ----------------------------------------------------------
     2. INTERACTIVE ELEMENTS: Modal Lightbox for Pet Gallery
     ---------------------------------------------------------- */
  const modal = document.getElementById('pet-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.querySelector('.modal-close');
  const viewBtns = document.querySelectorAll('.view-pet-btn');

  if (modal && viewBtns.length > 0) {
    viewBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        // Get data from the clicked button's parent card
        const card = btn.closest('.pet-card');
        const emoji = card.querySelector('.pet-emoji').textContent;
        const title = card.querySelector('h4').textContent;
        const desc = card.querySelector('p:not(.pet-detail)').textContent;

        // Populate modal
        modalImg.textContent = emoji; // Using emoji instead of image for now
        modalTitle.textContent = title;
        modalDesc.textContent = desc;

        // Show modal
        modal.style.display = 'flex';
      });
    });

    // Close modal functions
    const closeModal = () => { modal.style.display = 'none'; };
    if (modalClose) modalClose.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  /* ----------------------------------------------------------
     3. FORM VALIDATION: Enquiry Form (enquiry.html)
     ---------------------------------------------------------- */
  const enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent page reload
      let isValid = true;

      // Clear previous errors
      document.querySelectorAll('.error-message').forEach(el => el.remove());
      document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(el => {
        el.classList.remove('input-error');
      });

      // Validate First Name
      const firstName = document.getElementById('first-name');
      if (firstName.value.trim() === '') {
        showError(firstName, 'First name is required.');
        isValid = false;
      }

      // Validate Email
      const email = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
      }

      // Validate Enquiry Type
      const enquiryType = document.getElementById('enquiry-type');
      if (enquiryType.value === '') {
        showError(enquiryType, 'Please select an enquiry type.');
        isValid = false;
      }

      // Validate Message
      const message = document.getElementById('message');
      if (message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters long.');
        isValid = false;
      }

      // Validate Consent
      const consent = document.getElementById('consent');
      if (!consent.checked) {
        showError(consent, 'You must give consent to proceed.');
        isValid = false;
      }

      if (isValid) {
        // If valid, simulate AJAX submission
        const btn = enquiryForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        setTimeout(() => {
          alert('Success! Your enquiry has been sent. We will be in touch within 48 hours.');
          enquiryForm.reset();
          btn.innerHTML = originalText;
          btn.disabled = false;
        }, 1500);
      }
    });
  }

  /* ----------------------------------------------------------
     4. FORM VALIDATION: Contact Form (contact.html)
     ---------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      // Clear previous errors
      document.querySelectorAll('.error-message').forEach(el => el.remove());
      document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(el => {
        el.classList.remove('input-error');
      });

      const contactName = document.getElementById('contact-name');
      if (contactName.value.trim() === '') {
        showError(contactName, 'Full name is required.');
        isValid = false;
      }

      const contactEmail = document.getElementById('contact-email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactEmail.value.trim())) {
        showError(contactEmail, 'Please enter a valid email address.');
        isValid = false;
      }

      const contactMessage = document.getElementById('contact-message');
      if (contactMessage.value.trim() === '') {
        showError(contactMessage, 'Please enter your message.');
        isValid = false;
      }

      if (isValid) {
        // AJAX Submission simulation
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        setTimeout(() => {
          alert('Thank you! Your message has been sent.');
          contactForm.reset();
          btn.innerHTML = originalText;
          btn.disabled = false;
        }, 1500);
      }
    });
  }

  // Helper function to display errors
  function showError(inputElement, message) {
    inputElement.classList.add('input-error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;
    
    // Insert after the input
    inputElement.parentNode.appendChild(errorDiv);
  }

});

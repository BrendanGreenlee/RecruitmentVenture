// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form validation and submission handling
function initializeForms() {
  // Job seeker form
  const jobSeekerForm = document.getElementById('jobSeekerForm');
  if (jobSeekerForm) {
    jobSeekerForm.addEventListener('submit', handleFormSubmit);
  }

  // Employer form
  const employerForm = document.getElementById('employerForm');
  if (employerForm) {
    employerForm.addEventListener('submit', handleFormSubmit);
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData.entries());
  
  console.log('Form submission:', {
    formId: form.id,
    data: formDataObject,
    timestamp: new Date().toISOString()
  });
  
  // In production, this would be an API call to:
  // 1. ERPNext Web Form endpoint, or
  // 2. Your proxy server endpoint
  
  alert('Form submitted successfully!\n\nIn production, this data would be sent to ERPNext.');
  form.reset();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeForms);
} else {
  initializeForms();
}

// Add smooth animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe form containers for animation
document.querySelectorAll('.form-container, .contact-form-section').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
/* =============================================
   LEARNOVA — main.js
   Shared JavaScript across all pages
   ============================================= */

/* Mobile menu toggle */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

/* Close mobile menu on outside click */
document.addEventListener('click', function (e) {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (menu && hamburger) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('open');
    }
  }
});

/* Course filter (courses.html) */
function filterCourses(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  document.querySelectorAll('#courseGrid .course-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

/* Contact form validation & submission */
function submitForm() {
  const fn = document.getElementById('fn');
  const em = document.getElementById('em');

  if (fn && fn.value.trim() === '') {
    fn.focus();
    fn.style.borderColor = '#E24B4A';
    setTimeout(() => { fn.style.borderColor = ''; }, 2000);
    return;
  }

  if (em && em.value.trim() === '') {
    em.focus();
    em.style.borderColor = '#E24B4A';
    setTimeout(() => { em.style.borderColor = ''; }, 2000);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (em && !emailRegex.test(em.value.trim())) {
    em.focus();
    em.style.borderColor = '#E24B4A';
    setTimeout(() => { em.style.borderColor = ''; }, 2000);
    return;
  }

  const fields = document.getElementById('formFields');
  const success = document.getElementById('successMsg');
  if (fields && success) {
    fields.style.display = 'none';
    success.style.display = 'block';
  }
}

/* Scroll to top on page load */
window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});
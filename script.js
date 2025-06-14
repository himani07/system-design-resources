// script.js
// Handles search and filter for system design resources

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const categorySelect = document.getElementById('categorySelect');
  const resourceCards = document.querySelectorAll('.resource-card');

  function filterResources() {
    const search = searchInput.value.toLowerCase();
    const category = categorySelect.value;
    resourceCards.forEach(card => {
      const title = card.querySelector('.resource-title').textContent.toLowerCase();
      const desc = card.querySelector('.resource-desc').textContent.toLowerCase();
      const cat = card.getAttribute('data-category');
      const matchesSearch = title.includes(search) || desc.includes(search);
      const matchesCategory = category === 'All' || cat === category;
      card.style.display = (matchesSearch && matchesCategory) ? '' : 'none';
    });
  }

  searchInput.addEventListener('input', filterResources);
  categorySelect.addEventListener('change', filterResources);
});
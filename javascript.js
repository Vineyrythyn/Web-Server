document.querySelectorAll('.workout-card').forEach(card => {
    card.addEventListener('click', () => {
      alert(`You selected ${card.innerText}!`);
    });
  });
  
  document.querySelector('.signup-btn').addEventListener('click', () => {
    alert('Thank you for joining FitLife Gym!');
  });
  
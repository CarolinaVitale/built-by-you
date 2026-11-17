const programs = {
  strength: ['Strength Build', 'Build a base of strength with controlled movement and gradual progression.'],
  performance: ['Performance & Conditioning', 'Develop stamina and practice moving well at a faster pace.'],
  mobility: ['Mobility & Recovery', 'Explore controlled ranges of motion and make recovery part of your routine.'],
  foundation: ['Foundation (Beginners)', 'Start with basic movement patterns and build a routine you can repeat.'],
};

const dialog = document.querySelector('dialog');
document.querySelectorAll('[data-program]').forEach((card) => {
  card.addEventListener('click', () => {
    const [title, description] = programs[card.dataset.program];
    dialog.querySelector('h2').textContent = title;
    dialog.querySelector('p').textContent = description;
    dialog.showModal();
  });
});

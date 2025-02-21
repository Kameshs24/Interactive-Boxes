function toggleBox(selectedId) {
  
  document.querySelectorAll('.box').forEach(box => {
      box.classList.remove('active');
  });

  let selectedBox = document.getElementById(`box-${selectedId}`);
  selectedBox.classList.add('active');

  selectedBox.querySelector("input[type='radio']").checked = true;
}

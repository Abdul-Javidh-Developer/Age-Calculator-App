const birthdateInput = document.getElementById('birthdate');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');
const ageElement = document.getElementById('age');

function calculateAge() {
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();
  
  if (!birthdateInput.value) {
    alert("Please select a valid birthdate.");
    return;
  }

  let age = today.getFullYear() - birthdate.getFullYear();
  if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
    age--;
  }

  ageElement.textContent = age;
  resultDiv.style.display = 'block';
}

calculateBtn.addEventListener('click', calculateAge);

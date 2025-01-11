  // DOM Elements
  const birthdateInput = document.getElementById('birthdate');
  const calculateBtn = document.getElementById('calculate-btn');
  const resultDiv = document.getElementById('result');
  const ageElement = document.getElementById('age');
  
  // Calculate age based on the birthdate
  function calculateAge() {
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
  
    if (!birthdateInput.value) {
      alert("Please select a valid birthdate.");
      return;
    }
  
    // Calculate the difference in years
    let age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
  
    // Adjust age if the birthday hasn't occurred yet this year
    if (month < birthdate.getMonth() || (month === birthdate.getMonth() && day < birthdate.getDate())) {
      age--;
    }
  
    // Display the result
    ageElement.textContent = age;
    resultDiv.style.display = 'block';
  }
  
  // Event Listener
  calculateBtn.addEventListener('click', calculateAge);
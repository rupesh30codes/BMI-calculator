function calculateBMI(){
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    document.getElementById("resetBtn").style.display = "block";

    const heightMeters= height/100;
    const bmi= weight / (heightMeters**2);

    let bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal weight";
      } else if (bmi >= 24.9 && bmi < 29.9) {
        bmiCategory = "Overweight";
      } else {
        bmiCategory = "Obese";
      }
      const resultText = `Your BMI is: ${bmi.toFixed(1)} (${bmiCategory})`;
      document.querySelector("button").innerText =resultText;
}
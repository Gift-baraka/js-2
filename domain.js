function validatePhoneNumber() {
      const phone = document.getElementById("phone").value;
      const error = document.getElementById("error");
}
      /
      const pattern = /^07\d{8}$/;

      if (!pattern.test(phone)) {
        error.textContent = "Please enter a valid Kenyan phone number";
        return false; 
      }

      error.textContent = ""; 
      alert("Granted!");
      return true; 

if(password !== confirmPassword){
      document.getElementById("confirmerror").textContent = "Passwords dont match";
      valid = false;
}

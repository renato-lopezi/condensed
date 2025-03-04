document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.querySelector('.login-form');
  const errorMessage = document.getElementById("error-message");

  const employeeData = [
    { employeeNumber: "A00835871", password: "1234" }
  ];

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulario enviado");

    errorMessage.textContent = "";

    const employeeNumberInput = document.getElementById("employeeNumber").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    const validEmployee = employeeData.find(emp =>
      emp.employeeNumber === employeeNumberInput && emp.password === passwordInput
    );

    if (validEmployee) {
      console.log("Credenciales válidas, redirigiendo...");
      window.location.href = "new.html";
    } else {
      console.log("Credenciales inválidas");
      errorMessage.textContent = "Número de Empleado o Contraseña incorrectos. Por favor, inténtalo de nuevo.";
    }
  });
});

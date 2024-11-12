export function limparInputs() {
    const inputs = document.querySelectorAll(
      'input, textarea, input[type="checkbox"]'
    );
    inputs.forEach((input) => {
      if (input.type === "textarea") {
        input.value = "";
      } else if (input.type === "checkbox") {
        input.checked = false;
      } else {
        input.value = "";
      }
    });
  }
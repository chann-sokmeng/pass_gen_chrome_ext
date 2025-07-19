const defaultLength = parseInt(document.getElementById("stringLength").value);
document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("stringLength").focus();
      gen_pass(defaultLength);
      const passField = document.getElementById("genPass");
      passField.select();
      document.execCommand("copy");
    });

function gen_pass(length) {
  const letters = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specials = "!@#$%&+=?";
  let pass = [
    letters[Math.floor(Math.random() * letters.length)],
    numbers[Math.floor(Math.random() * numbers.length)],
    specials[Math.floor(Math.random() * specials.length)]
  ];
  const allChars = letters + numbers + specials;
  for (let i = 3; i < length; i++) {
    pass.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }
  // Shuffle the password array
  pass = pass.sort(() => Math.random() - 0.5).join("");
  document.getElementById("genPass").value = pass;
}
document.getElementById("generate").addEventListener("click", function() {
    const length = parseInt(document.getElementById("stringLength").value);
    if (isNaN(length) || length <= 0) {
        alert("Please enter a valid length.");
        return;
    }
    gen_pass(length);
});
document.getElementById("copy").addEventListener("click", function() {
    const passField = document.getElementById("genPass");
    passField.select();
    document.execCommand("copy");
});

document.getElementById("stringLength").addEventListener("input", function() {
    const length = parseInt(this.value);
    gen_pass(length);
});
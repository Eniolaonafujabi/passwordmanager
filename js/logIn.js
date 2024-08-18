const BASE_URL = "http://localhost:8080/api/user/login";
const form = document.querySelector(".logInForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const emailValue = document.querySelector('.logInEmail').value;
  console.log(emailValue);
  const passwordValue = document.querySelector('.logInPassword').value;
  console.log(passwordValue);

  const data = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: emailValue, password: passwordValue})
  })
  const response = await data.json();
  if (data.ok) {
    alert("Successfully LogIn!")
    window.location.href = "./dashboard.html";
  } else {
    const errorMessage = response.data;
    alert("error: " + errorMessage)
  }

})

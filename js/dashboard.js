BASE_URL = "http://localhost:8080/api/user/addPassword";
const form = document.querySelector(".securePasswordForm");

form.addEventListener("submit",async(e) => {
  e.preventDefault();
  const emailValue = document.querySelector('.emailInput').value;
  console.log(emailValue);
  const userNameValue = document.querySelector('.userNameInput').value;
  console.log(userNameValue);
  const webSiteLinkValue = document.querySelector('.websiteLinkInput').value;
  console.log(webSiteLinkValue);
  const passwordValue = document.querySelector('.passwordInput').value;
  console.log(passwordValue);

  const data = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailValue,
      userName: userNameValue,
      websiteLink: webSiteLinkValue,
      password: passwordValue
    })
  })
  const response = await data.json();
  if (data.ok) {
    alert("Successfully saved")
    // window.location.href = "./dashboard.html";
  } else {
    const errorMessage = response.data;
    alert("error: " + errorMessage)
  }
})

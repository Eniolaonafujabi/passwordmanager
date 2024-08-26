const BASE_URL = "http://localhost:8080/api/user/registerUser";
const form = document.querySelector(".form");

form.addEventListener("submit", async (event)  => {
  event.preventDefault();

  const userNameValue = document.querySelector('.userInput').value;
  console.log(userNameValue);

  const emailValue = document.querySelector('.emailInput').value;
  console.log(emailValue);

  const collectPhoneNumber= document.querySelector('.phoneNumberInput').value;
  console.log(collectPhoneNumber);

  const collectPassword = document.querySelector('.passWordInput').value;
  console.log(collectPassword);

  const data = await fetch(BASE_URL, {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({username: userNameValue, email:emailValue, phoneNumber:collectPhoneNumber,password:collectPassword})
  })
  const response = await data.json();
    if(data.ok){
      alert("Successfully registered!")
      window.location.href = "logInPage.html";
    }else {
      const errorMessage = response.data;
      alert("error: " + errorMessage)
      console.log(response.data)
    }
})


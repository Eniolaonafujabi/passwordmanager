const BASE_URL = "http://localhost:8080/api/user/registerUser";
const form = document.querySelector(".form");

form.addEventListener("submit", async (event)  => {
  event.preventDefault();
  const emailValue = document.querySelector('.emailInput').value;
  // console.log(emailValue);

  const collectPhoneNumber= document.querySelector('.phoneNumberInput').value;
  // console.log(collectPhoneNumber);

  const collectPassword = document.querySelector('.passWordInput').value;
  // console.log(collectPassword);

  const data = await fetch(BASE_URL, {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email:emailValue, phoneNumber:collectPhoneNumber,password:collectPassword})
  })
  console.log(data);
    if(data.ok){
      alert("Successfully registered!")
      window.location.href = "logInPage.html";
    }else {
      console.log(data.status)
    }
})


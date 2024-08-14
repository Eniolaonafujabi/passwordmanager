BASE_URL = "/api/user/";
Register_Api = "registerUser";

const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailValue = document.querySelector('.emailInput').value;
  // console.log(emailValue);

  const collectPhoneNumber= document.querySelector('.phoneNumberInput').value;
  // console.log(collectPhoneNumber);

  const collectPassword = document.querySelector('.passWordInput').value;
  // console.log(collectPassword);
})

// const registerUser = async (url)=>{
//   try{
//     const response = await fetch(url);
//     if(!response.ok){
//       throw new Error(`Error: ${response.statusText}`);
//     };
//     const data = await response.json();
//
//     console.log(data);
//   }catch (error){
//     console.log(error);
//   }
// }


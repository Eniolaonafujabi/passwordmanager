const id = sessionStorage.getItem("userId")
BASE_URL = "http://localhost:8080/api/user/addPassword";
BASEURL_LOGOUT = `http://localhost:8080/api/user/logOut/${id}`
const form = document.querySelector(".securePasswordForm");
const logOffButton = document.querySelector(".logOutDiv");
const userName = document.querySelector(".userName");

userName.innerHTML = '';
const userNameFromSessionStorage = sessionStorage.getItem("userName")
const divTag = document.createElement('div');
divTag.innerHTML = `
   <hi>
    Welcome ${userNameFromSessionStorage}
   </hi>
`;
userName.appendChild(divTag);

logOffButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const logoff = await fetch(BASEURL_LOGOUT,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    }
  })
  const response = await logoff.json();
  if (logoff.ok) {
    sessionStorage.removeItem("userId");
    alert("Successfully LogOut")
    window.location.href='register.html';
  } else {
    const errorMessage = response.logoff;
    alert("error: " + errorMessage)
  }
})

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
      userId: id,
      email: emailValue,
      userName: userNameValue,
      websiteLink: webSiteLinkValue,
      password: passwordValue
    })
  })
  const response = await data.json();
  if (data.ok) {
    alert("Successfully saved")
    window.location.href = "./dashboard.html";
  } else {
    const errorMessage = response.data;
    alert("error: " + errorMessage)
  }
})

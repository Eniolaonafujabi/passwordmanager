const id = sessionStorage.getItem("userId")
BASE_URL = "http://localhost:8080/api/user/addNote"
BASEURL_LOGOUT = `http://localhost:8080/api/user/logOut/${id}`
const form = document.querySelector(".secureNoteForm");
const logOffButton = document.querySelector(".logOutDiv");

logOffButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const logoff = await fetch(BASEURL_LOGOUT,{
    method: "Patch",
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

form.addEventListener("submit", async (event)  => {
  event.preventDefault();
  const titleValue = document.querySelector('.titleInput').value;
  console.log(titleValue);

  const contentValue= document.querySelector('.contentArea').value;
  console.log(contentValue);

  const data = await fetch(BASE_URL, {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId:id,
      title:titleValue,
      content:contentValue
    })
  })
  const response = await data.json();
  if(data.ok){
    alert("Successfully Saved!")
  }else {
    const errorMessage = response.data;
    alert("error: " + errorMessage)
    console.log(response.data)
  }
})

BASE_URL = "http://localhost:8080/api/user/addNote"
const form = document.querySelector(".secureNoteForm");

form.addEventListener("submit", async (event)  => {
  event.preventDefault();
  const titleValue = document.querySelector('.titleInput').value;
  console.log(titleValue);

  const contentValue= document.querySelector('.contentArea').value;
  console.log(contentValue);

  const id =sessionStorage.getItem("userId")

  const data = await fetch(BASE_URL, {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({userId:id, title:titleValue, content:contentValue})
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

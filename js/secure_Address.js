const id = sessionStorage.getItem("userId");
BASE_URL = "http://localhost:8080/api/user/addAddress";
BASEURL_LOGOUT = `http://localhost:8080/api/user/logOut/${id}`
const form = document.querySelector(".secureAddressForm");
const logOffButton = document.querySelector(".logOutDiv");

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

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const firstNameValue = document.querySelector(".firstNameInput").value;
  console.log(firstNameValue);

  const middleNameValue = document.querySelector(".middleNameInput").value;
  console.log(middleNameValue);

  const lastNameValue = document.querySelector(".lastNameInput").value;
  console.log(lastNameValue);

  const genderValue = document.querySelector(".genderInput").value;
  console.log(genderValue);

  const birthdayValue = document.querySelector(".birthdayInput").value;
  console.log(birthdayValue);

  const companyValue = document.querySelector(".companyInput").value;
  console.log(companyValue);

  const addressValue = document.querySelector(".addressInput").value;
  console.log(addressValue);

  const address2Value = document.querySelector(".address2Input").value;
  console.log(address2Value);

  const cityOrTimeValue = document.querySelector(".cityOrTimeInput").value;
  console.log(cityOrTimeValue);

  const stateValue = document.querySelector(".stateInput").value;
  console.log(stateValue);

  const zipPostalCodeValue = document.querySelector(".zipPostalCodeInput").value;
  console.log(zipPostalCodeValue);

  const countryValue = document.querySelector(".countryInput").value;
  console.log(countryValue);

  const phoneNumberValue = document.querySelector(".phoneNumberInput").value;
  console.log(phoneNumberValue);

  const emailValue = document.querySelector(".emailInput").value;
  console.log(emailValue);

  const data = await fetch(BASE_URL, {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: id,
      firstName: firstNameValue,
      middleName: middleNameValue,
      lastName: lastNameValue,
      gender: genderValue,
      birthday: birthdayValue,
      company: companyValue,
      address1:addressValue,
      address2:address2Value,
      cityOrTown: cityOrTimeValue,
      state: stateValue,
      zipPostalCode: zipPostalCodeValue,
      country: countryValue,
      phone: phoneNumberValue,
      email: emailValue
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

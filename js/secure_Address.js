BASE_URL = "http://localhost:8080/api/user/addAddress";
const form = document.querySelector(".secureAddressForm");

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
})

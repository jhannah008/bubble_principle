window.addEventListener("DOMContentLoaded", event => {

  const licenseForm = document.getElementById("drivers-license-form")
  const licenseCard = document.querySelectorAll(".license__info")
  const submitButton = document.querySelector(".form__submit")

  // ** Phase 1B: Update license with event delegation and event.target ** 

  licenseForm.addEventListener("input", event => {
    licenseCard.forEach(field => {
      if (field.id.includes(event.target.id)) {
        field.innerHTML = event.target.value
      }
    })
  })

  // ** Phase 2: Add focus and blur events to form inputs **
 
  licenseForm.addEventListener("focus", event => {
    event.target.style.backgroundColor = "lightgreen"
  }, true)

  licenseForm.addEventListener("blur", event => {
    event.target.style.backgroundColor = "unset"
  }, true)



  // ** Phase 3: Check that license numbers match **
 

  // ** Phase 4: Update submit button click count **

 
});
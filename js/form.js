const submitFormButton = document.querySelector("#submit-form-button");
submitFormButton.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.querySelector(".contact-form");
  const formData = new FormData(form);
  if (!validateEmail(formData.get("email"))) {
    alert("Please enter a valid email address");
  } else {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/xnqwlrnw");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        console.log(this.responseText);
      }
    };
    xhr.send(formData);
    alert("Thank you for your message!");
    form.reset();
    location.replace(window.location);
  }
});

const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
};

// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var submitButton = document.getElementById("submit-button");    //variable to link to the submit-button element in the HTML
var contactPage = document.getElementById("contact-page");      //variable to link to the contact-page element in the HTML

function changeContactPage() {
    contactPage.innerHTML = "<p>Thank you for your message</p>";
    contactPage.style.fontSize = "24px";
}

submitButton.addEventListener("click", changeContactPage);      //Function called changeContactPage to change the innerHTML of the contact-page element
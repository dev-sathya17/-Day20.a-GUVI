const container = document.getElementById("row");
const URL = "https://fakerapi.it/api/v1/companies?_quantity=100";

let companiesData = [];
// Fetching the book details from faerapi.it's API endpoint.
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    companiesData = data.data;
    displayData(companiesData);
  })
  .catch((error) => console.warn("Outer Error:" + error));

function displayData(data) {
  data.forEach((element) => {
    const cardContainer = document.createElement("div");
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const title = document.createElement("div");
    const websiteText = document.createElement("div");
    const btn = document.createElement("button");
    const phoneIcon = document.createElement("i");
    const phoneText = document.createElement("div");
    const emailIcon = document.createElement("i");
    const emailText = document.createElement("div");
    const countryIcon = document.createElement("i");
    const countryText = document.createElement("div");
    const websiteIcon = document.createElement("i");

    // Adding classes to the card.
    card.classList.add("card");
    card.classList.add("h-100");
    card.classList.add("shadow");

    // Adding classes to the card container.
    cardContainer.classList.add("col-sm-6");
    cardContainer.classList.add("col-md-4");
    cardContainer.classList.add("col-lg-4");
    cardContainer.classList.add("col-xl-4");
    cardContainer.classList.add("mt-5");

    // Adding classes to the card header.
    title.classList.add("card-header");
    title.classList.add("text-center");
    title.classList.add("fs-4");
    title.classList.add("fw-semibold");

    // Updating value of the card header.
    title.innerHTML = element.name;

    // Adding classes to the card body.
    cardBody.classList.add("card-body");
    cardBody.classList.add("d-flex");
    cardBody.classList.add("flex-column");
    cardBody.classList.add("align-items-center");
    cardBody.classList.add("justify-content-between");

    // Adding classes and updating values to the card contents.
    phoneIcon.classList.add("fas");
    phoneIcon.classList.add("fa-phone-alt");
    phoneText.classList.add("card-text");
    phoneText.textContent = " " + element.phone;

    emailIcon.classList.add("fas");
    emailIcon.classList.add("fa-envelope");
    emailText.classList.add("card-text");
    emailText.textContent = " " + element.email;

    countryIcon.classList.add("fas");
    countryIcon.classList.add("fa-globe");
    countryText.classList.add("card-text");
    countryText.textContent = " " + element.country;

    websiteIcon.classList.add("fas");
    websiteIcon.classList.add("fa-globe");
    websiteText.classList.add("card-text");
    const link = document.createElement("a");
    link.href = element.website;
    link.textContent = " Our Website";
    websiteText.appendChild(link);

    // Adding classes and attributes to the button.
    btn.classList.add("btn");
    btn.classList.add("btn-primary");
    btn.classList.add("m-3");
    btn.setAttribute("data-bs-toggle", "modal");
    btn.setAttribute("data-bs-target", "#exampleModal");
    btn.innerHTML = "For more information...";

    // Adding event to the button
    btn.addEventListener("click", () => {
      document.getElementById("modalBody").innerHTML = "";
      const modalTitle = document.getElementById("modalTitle");
      const modalBody = document.getElementById("modalBody");
      const name = document.createElement("p");
      const phone = document.createElement("p");
      const email = document.createElement("p");
      const address = document.createElement("p");
      modalTitle.innerHTML = "Contact Details of : " + element.name;
      name.innerHTML =
        "Name: " + element.contact.firstname + " " + element.contact.lastname;
      phone.innerHTML = `Phone: ${element.contact.phone}`;
      email.innerHTML = "E-Mail: " + element.contact.email;
      address.innerHTML = `Address: ${element.contact.address.buildingNumber}, ${element.contact.address.street}, ${element.contact.address.streetName}, ${element.contact.address.city}, ${element.contact.address.country} - ${element.contact.address.zipcode}`;
      modalBody.appendChild(name);
      modalBody.appendChild(phone);
      modalBody.appendChild(email);
      modalBody.appendChild(address);
    });

    // Appending the changes to the DOM.
    phoneText.prepend(phoneIcon);
    emailText.prepend(emailIcon);
    countryText.prepend(countryIcon);
    websiteText.prepend(websiteIcon);
    cardBody.appendChild(phoneText);
    cardBody.appendChild(emailText);
    cardBody.appendChild(countryText);
    cardBody.appendChild(websiteText);
    cardBody.appendChild(btn);
    card.appendChild(title);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
    container.appendChild(cardContainer);
  });
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", function () {
  container.innerHTML = "";
  const searchTerm = searchBar.value.toLowerCase();
  console.log(searchTerm);
  const filteredCompanies = companiesData.filter((company) =>
    company.name.toLowerCase().includes(searchTerm)
  );

  displayData(filteredCompanies);
});

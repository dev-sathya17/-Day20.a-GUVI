# Day 20-GUVI

> **IMDb for Companies**  
> [Source Code](./index.html)  
> Explanation:
>
> First, we create an _index.html_ file to which we add our _script.js_ and _style.css_ files using _script_ and _link_ tags respectively.
> The page is styled using raw CSS and BootstrapCSS.
> Now, in our JavaScript code, first we declare the API Key and URL as a **const** variable.
> The row element is selected by using `document.getElementsById()`
> Let's get into the Code flow:
>
> - Fetch API is used to make a GET request to the URL of [fakerapi.it](https://fakerapi.it/api/v1/companies?_quantity=100).
> - The data is received from the API which is parsed to json using `then()` method.
> - Then the data is iterated using `forEach()` method.
>   -The data is passed to a helper function named as `displayData()`
> - Necessary elements such as div and button tags are created using `document.createElement()`.
> - All necessary bootstrap classes are added to the elements by selecting its classList.
> - An Event is established for the button to display the contact details of the company in a **Modal**.
> - The contact details are appended to the body of the Modal.
> - Thus, using the Fetch API, we retrieve the data from an API and render it as an application.

---

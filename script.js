

document.addEventListener("DOMContentLoaded", function() {
    var section1Button = document.getElementById("section1Button");
    var section1 = document.getElementById("section-1");
    var listpageSection = document.getElementById("listpage-section");
    var previousUserSection = document.getElementById("previous-user-section");
    var newList = document.getElementById("new-list");
    var viewList = document.getElementById("view-list");
    var listpage2 = document.getElementById("listpage2");

    section1Button.addEventListener("click", function() {
        section1.style.display = "none";
        listpageSection.style.display = "block";
        previousUserSection.style.display = "none";
        listpage2.style.display = "none";
    });

    var createListButton = document.getElementById("createListButton");
    createListButton.addEventListener("click", function() {
        section1.style.display = "none";
        listpageSection.style.display = "none";
        previousUserSection.style.display = "block";
        listpage2.style.display = "none";
    });

    newList.addEventListener("click", function() {
        section1.style.display = "none";
        listpageSection.style.display = "block";
        previousUserSection.style.display = "none";
        listpage2.style.display = "none";
    });

    viewList.addEventListener("click", function() {
        section1.style.display = "none";
        listpageSection.style.display = "none";
        previousUserSection.style.display = "none";
        listpage2.style.display = "block";
    });

    // Initially hide listpage-section, previous-user-section, and listpage2
    listpageSection.style.display = "none";
    previousUserSection.style.display = "none";
    listpage2.style.display = "none";
});





// document.addEventListener("DOMContentLoaded", function() {
//     var addCategoryButton = document.querySelector(".text-underline");

//     addCategoryButton.addEventListener("click", function() {
//         // Create a new div element to contain the input field
//         var categoryContainer = document.createElement("div");
//         categoryContainer.className = "category-input-container mt-3";

//         // Create a new input field for category
//         var categoryInput = document.createElement("input");
//         categoryInput.type = "text";
//         categoryInput.className = "form-control mb-3";
//         categoryInput.placeholder = "Enter category name";
//         categoryInput.style.width = "100%"; // Set input field to full width

//         // Append the input field to the category container
//         categoryContainer.appendChild(categoryInput);

//         // Get the parent element of the "ADD CATEGORY" tag
//         var parentElement = addCategoryButton.parentElement;

//         // Insert the category container before the "ADD CATEGORY" button
//         parentElement.insertBefore(categoryContainer, addCategoryButton);
//     });
// });



// Get the "ADD CATEGORY" element by its class
const addCategoryButton = document.querySelector('.add-categories');

// Add a click event listener to the "ADD CATEGORY" button
addCategoryButton.addEventListener('click', function() {
    // Create a new input element
    const inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('class', 'form-control mt-3');
    inputField.setAttribute('placeholder', 'Enter category name');

    // Get the parent element of the "ADD CATEGORY" button
    const parentElement = addCategoryButton.parentElement;

    // Append the input field to the parent element
    parentElement.appendChild(inputField);
});







 // JavaScript to add and remove 'fixed-top' class based on scroll position
 window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY >= 200) {
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("fixed-top");
    }
});





































































































// document.addEventListener("DOMContentLoaded", function() {
//     var addCategoryButton = document.querySelector(".text-underline");

//     addCategoryButton.addEventListener("click", function() {
//         // Create a new div element to contain the input field
//         var categoryContainer = document.createElement("div");
//         categoryContainer.className = "category-input-container mt-3";

//         // Create new input field for category
//         var categoryInput = document.createElement("input");
//         categoryInput.type = "text";
//         categoryInput.className = "form-control";
//         categoryInput.placeholder = "Enter category name";
//         categoryInput.style.width = "calc(100% - 20px)"; // Set input field to full width with some margin

//         // Create a delete button
//         var deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.className = "btn btn-danger mt-2";
//         deleteButton.style.marginLeft = "10px"; // Add some margin to the delete button

//         // Append input field and delete button to the category container
//         categoryContainer.appendChild(categoryInput);
//         categoryContainer.appendChild(deleteButton);

//         // Get the parent element of the "ADD CATEGORY" tag
//         var parentElement = addCategoryButton.parentElement;

//         // Append the category container to the parent element
//         parentElement.appendChild(categoryContainer);

//         // Add event listener to delete button
//         deleteButton.addEventListener("click", function() {
//             // Remove the category container when delete button is clicked
//             parentElement.removeChild(categoryContainer);
//         });
//     });
// });













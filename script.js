// Get references to form elements
const form = document.getElementById('create-post-form');
const titleInput = document.getElementById('title');
const briefDescription = document.getElementById('brief-description');
const detailedDescription = document.getElementById('detailed-description');
const imageInput = document.getElementById('image');
const barterType = document.getElementById('barter-type');
const offeringInput = document.getElementById('offering');
const requirementInput = document.getElementById('requirement');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const title = titleInput.value.trim();
    const briefDesc = briefDescription.value.trim();
    const detailedDesc = detailedDescription.value.trim();
    const image = imageInput.files[0]; // Access the uploaded file
    const barterTypeValue = barterType.value;
    const offering = offeringInput.value.trim();
    const requirement = requirementInput.value.trim();

    // Basic validation
    if (!title || !briefDesc || !detailedDesc || !image || !barterTypeValue || !offering || !requirement) {
        alert('Please fill in all fields before submitting!');
        return;
    }

    // Display a confirmation message
    alert(`Your post has been successfully submitted!\n\nTitle: ${title}\nBrief Description: ${briefDesc}\nBarter Type: ${barterTypeValue}`);

    // Optionally, clear the form after submission
    form.reset();
});

// Optional: Display the uploaded image name (or preview it)
imageInput.addEventListener('change', (event) => {
    const fileName = event.target.files[0]?.name || 'No file selected';
    alert(`You selected: ${fileName}`);
});

document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form values
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var budget = document.getElementById("budget").value;
    var preferences = document.getElementById("preferences").value;
    
    // Make an API call or perform calculations to find matched roommates based on the form values
    
    // Example: Display matched roommates dynamically
    var resultsList = document.getElementById("results-list");
    resultsList.innerHTML = ""; // Clear previous results
    
    // Dummy data for demonstration
    var matchedRoommates = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 28 },
      { name: "Carol", age: 25 }
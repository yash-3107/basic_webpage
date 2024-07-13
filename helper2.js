var sbmt = document.getElementById("button");
sbmt.addEventListener("click",details)
function details(event){
    event.preventDefault(); // Prevent form submission to stay on the page and show alert
    let inputs = document.querySelectorAll('form input[type="text"]');
    let checkbox = document.getElementById("box");

    for (let input of inputs) {
        if (input.value.trim() === "") {
            window.alert("One or more fields are empty, or you have not agreed to terms and conditions.");
            return;
        }
    }

    if (!checkbox.checked) {
        window.alert("One or more fields are empty, or you have not agreed to terms and conditions.");
        return;
    }

    // Submit the form if all checks pass
    event.target.closest('form').submit();}
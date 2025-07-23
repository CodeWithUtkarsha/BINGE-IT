


// Function to show the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Function for viewing all bookings
function viewAllBookings() {
    openModal('bookingsModal');
}

// Function for changing password
function changePassword() {
    openModal('passwordModal');
}

// Function for managing payment methods
function managePaymentMethods() {
    openModal('paymentModal');
}

// Function to update password
function updatePassword() {
    let newPassword = document.getElementById("newPassword").value;
    if (newPassword) {
        alert("Password updated successfully!");
        closeModal('passwordModal');
    } else {
        alert("Please enter a new password.");
    }
}

// Function to add payment method
function addPaymentMethod() {
    alert("New payment method added.");
}

// Function to confirm logout
function confirmLogout() {
    if (confirm("Are you sure you want to log out?")) {
        alert("You have been logged out.");
        // Add redirect or logout logic here
    }
}
function editProfile() {
    // Get references to the profile detail elements
    const nameField = document.getElementById("user-name");
    const emailField = document.getElementById("user-email");
    const phoneField = document.getElementById("user-phone");

    // Check if the fields are already editable
    if (nameField.contentEditable === "true") {
        // Save changes and disable editing
        nameField.contentEditable = "false";
        emailField.contentEditable = "false";
        phoneField.contentEditable = "false";
        
        alert("Profile updated successfully!");

        // Change the button text back to 'Edit Profile'
        document.querySelector(".edit-btn").innerText = "Edit Profile";
    } else {
        // Enable editing for the fields
        nameField.contentEditable = "true";
        emailField.contentEditable = "true";
        phoneField.contentEditable = "true";

        // Highlight the fields to indicate they are editable
        nameField.style.border = "1px dashed #ffa502";
        emailField.style.border = "1px dashed #ffa502";
        phoneField.style.border = "1px dashed #ffa502";

        // Change the button text to 'Save Changes'
        document.querySelector(".edit-btn").innerText = "Save Changes";
    }
}




// Function to open the payment methods modal
function managePaymentMethods() {
    const paymentModal = document.getElementById("paymentModal");
    paymentModal.style.display = "block"; // Show the modal
}

// Function to close the modal (used by the close button in the modal)
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none"; // Hide the modal
}

// Function to add a new payment method
function addPaymentMethod() {
    alert("New payment method added.");
    // Close the modal after adding a payment method
    closeModal("paymentModal");
}








// Function to open the payment methods modal
function managePaymentMethods() {
    const paymentModal = document.getElementById("paymentModal");
    paymentModal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none"; // Hide the modal

    // Reset forms when closing modal
    document.getElementById("cardForm").style.display = "none";
    document.getElementById("upiForm").style.display = "none";
}

// Function to show the Card details form
function showCardForm() {
    document.getElementById("cardForm").style.display = "block";
    document.getElementById("upiForm").style.display = "none";
}

// Function to show the UPI ID form
function showUPIForm() {
    document.getElementById("upiForm").style.display = "block";
    document.getElementById("cardForm").style.display = "none";
}

// Function to add a new card (with validation)
function addCard() {
    const cardNumber = document.getElementById("cardNumber").value;
    const cardName = document.getElementById("cardName").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    if (cardNumber && cardName && expiryDate && cvv) {
        alert("Card added successfully!");
        closeModal("paymentModal");
    } else {
        alert("Please fill in all card details.");
    }
}

// Function to add a new UPI ID (with validation)
function addUPI() {
    const upiID = document.getElementById("upiID").value;

    if (upiID) {
        alert("UPI ID added successfully!");
        closeModal("paymentModal");
    } else {
        alert("Please enter a UPI ID.");
    }
}

// Function to toggle the notifications dropdown
function toggleNotifications() {
    const dropdown = document.getElementById("notificationDropdown");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    
    // Clear the notification count after opening
    const count = document.getElementById("notificationCount");
    if (dropdown.style.display === "block") {
        count.style.display = "none"; // Hide notification count after viewing
    }
}

// Function to add a new notification
function addNotification(message) {
    const notificationList = document.getElementById("notificationList");
    const newNotification = document.createElement("li");
    newNotification.innerText = message;
    notificationList.appendChild(newNotification);

    // Show the notification count again
    const count = document.getElementById("notificationCount");
    count.style.display = "inline";
    count.innerText = parseInt(count.innerText) + 1;
}

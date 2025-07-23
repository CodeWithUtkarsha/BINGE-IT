// Function to show Gmail signup form
function showGmailSignup() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("gmail-signup-form").style.display = "block";
}

// Function to handle Gmail account creation with password validation
function createGmailAccount(event) {
    event.preventDefault();  // Prevent form submission

    const email = document.getElementById("gmail-email").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Simulate account creation
    alert(`Account created successfully for ${email}!`);

    // Redirect back to the login form
    document.getElementById("gmail-signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Function to show Forgot Password form
function showForgotPassword() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("forgot-password-form").style.display = "block";
}

// Function to simulate sending password reset email
function sendPasswordReset(event) {
    event.preventDefault();  // Prevent form submission

    const email = document.getElementById("reset-email").value;

    // Simulate sending password reset email
    alert(`A password reset link has been sent to ${email}. Please check your inbox.`);

    // Redirect to Gmail (simulate by opening Gmail in a new tab)
    window.open("https://mail.google.com", "_blank");

    // Return to the login form
    document.getElementById("forgot-password-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Function to go back to the login page from either Gmail signup or Forgot Password page
function goBackToLogin() {
    document.getElementById("gmail-signup-form").style.display = "none";
    document.getElementById("forgot-password-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

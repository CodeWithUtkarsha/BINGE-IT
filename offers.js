// Offer details data
const offers = {
    offer1: {
        title: "Weekend Special",
        description: "Enjoy 25% off on all movie tickets this weekend! Use code WEEKEND25 at checkout.",
    },
    offer2: {
        title: "Student Discount",
        description: "Get 20% off when you book a ticket with a valid student ID. Use code STUDENT20.",
    },
    offer3: {
        title: "Combo Deal",
        description: "Free popcorn with every weekday ticket! Use code COMBOFREE to redeem.",
    },
    offer4: {
        title: "First-Time User",
        description: "Welcome! Enjoy 30% off your first booking with code NEWUSER30.",
    },
};

// Function to show modal with offer details
function showOfferDetails(offerId) {
    const modal = document.getElementById("offerModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    // Set modal content based on selected offer
    modalTitle.innerText = offers[offerId].title;
    modalDescription.innerText = offers[offerId].description;

    // Display the modal
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("offerModal");
    modal.style.display = "none";
}

// Function to apply the offer and show confirmation
function applyOffer() {
    const modalDescription = document.getElementById("modalDescription");
    modalDescription.innerText = "Offer applied successfully! Enjoy your discount.";

    // Optional: Automatically close the modal after a short delay
    setTimeout(closeModal, 2000); // Closes after 2 seconds
}


const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();
let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}

// update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    //copy selected seats into arr
    // map through array
    //return new array of indexes

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// get data from localstorage and populate ui
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("occupied")
    ) {
        e.target.classList.toggle("selected");

        updateSelectedCount();
    }
});

// intial count and total
updateSelectedCount();

// Get Pay Button and Modal
const payButton = document.getElementById("payButton");
const paymentModal = document.getElementById("paymentModal");

// Show the payment modal
payButton.addEventListener("click", () => {
    paymentModal.style.display = "flex";
});

// Close modal
function closeModal() {
    paymentModal.style.display = "none";
    document.getElementById("upiForm").style.display = "none";
    document.getElementById("cardForm").style.display = "none";
}

// Show UPI payment form
function showUPIPayment() {
    document.getElementById("upiForm").style.display = "block";
    document.getElementById("cardForm").style.display = "none";
}

// Show Card payment form
function showCardPayment() {
    document.getElementById("cardForm").style.display = "block";
    document.getElementById("upiForm").style.display = "none";
}

// Process UPI Payment
function processUPIPayment() {
    const upiID = document.getElementById("upiID").value;
    if (upiID) {
        alert(`Payment successful with UPI ID: ${upiID}`);
        closeModal();
    } else {
        alert("Please enter a valid UPI ID.");
    }
}

// Process Card Payment
function processCardPayment() {
    const cardNumber = document.getElementById("cardNumber").value;
    const cardName = document.getElementById("cardName").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    if (cardNumber && cardName && expiryDate && cvv) {
        alert("Payment successful with Card");
        closeModal();
    } else {
        alert("Please fill in all card details.");
    }
}



// Ensure the slider displays the first image on load
window.onload = function() {
    document.getElementById('i1').checked = true;
    start();
};

// Automatically move to the next slide every 6 seconds
function start() {
    let i = 1;
    function Move() {
        i = (i % 4) + 1; // Loop through 4 slides
        document.getElementById('i' + i).checked = true;
    }
    setInterval(Move, 6000); // Change image every 6 seconds
}



const button = document.querySelector('.btn');
function displayButton() {
    button.style.display = "block";
}

function cardDesc1() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 6.6/10 <br> Content rating: PG-13 <br> Directed by: David Yates <br> Written by: J.K. Rowling · Steve Kloves <br> Release date: April 15, 2022 (USA)";
}
function cardDesc2() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 8.9/10 <br> Content rating: PG-13 <br> Directed by: S.S. Rajamouli <br> Produced by: D.V.V. Danayya <br> Release date: March 25, 2022 (USA)";
}
function cardDesc3() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 6.6/10 <br> Content rating: Not Rated <br> Directed by: Sujoy Ghosh <br> Written by: Suresh Nair · Ritesh Shah <br> Release date: December 2, 2016 (USA)";
}
function cardDesc4() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 9.6/10 <br> Content rating: Not Rated <br> Directed by: Prashanth Neel <br> Produced by: Vijay Kiragandur <br> Release date: March 14, 2022 (USA)";
}
function cardDesc5() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 6.6/10 <br> Content rating: PG · TV-PG · TV-Y7-FV <br> Directed by: Gil Kenan <br> Produced by: Jack Rapke · Steve Starkeyr <br> Release date: July 21, 2006 (USA)";
}
function cardDesc6() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 8.3/10 <br> Content rating: Not Rated <br> Directed by: Vivek Agnihotri <br> Written by: Saurabh M. Pandey <br> Release date: March 11, 2022 (USA)";
}
function cardDesc7() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 6.5/10 <br> Content rating: R <br> Directed by: David Gordon Green <br> Produced by: Malek Akkad · Bill Block · Jason Blum <br> Release date: October 19, 2018 (USA)";
}
function cardDesc8() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 8.8/10 <br> Content rating: Not Rated <br> Directed by: Christopher Nolan <br> Produced by: Legendary Entertainment <br> Release date: Jul 16, 2010 (USA)";
}


function confirmation(){
    window.alert("Thankyou for subscribing!");
}
// Payment Modal
const payButton = document.getElementById("payButton");
const paymentModal = document.getElementById("paymentModal");
const ticketInfo = document.getElementById("ticketInfo");

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

// Sample movie data for ticket generation
const movieData = {
    name: "Inception",
    date: "2023-12-25",
    time: "7:30 PM",
    location: "City Cinema Hall 1",
    seats: "A1, A2",
    totalPrice: 440
};

// Function to show the ticket after successful payment
function displayTicket() {
    document.getElementById("ticketMovie").innerText = movieData.name;
    document.getElementById("ticketDate").innerText = movieData.date;
    document.getElementById("ticketTime").innerText = movieData.time;
    document.getElementById("ticketLocation").innerText = movieData.location;
    document.getElementById("ticketSeats").innerText = movieData.seats;
    document.getElementById("ticketPrice").innerText = movieData.totalPrice;

    ticketInfo.style.display = "block"; // Show ticket section
}

// Process UPI Payment
function processUPIPayment() {
    const upiID = document.getElementById("upiID").value;
    if (upiID) {
        alert(`Payment successful with UPI ID: ${upiID}`);
        closeModal();
        displayTicket(); // Show the ticket after payment
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
        displayTicket(); // Show the ticket after payment
    } else {
        alert("Please fill in all card details.");
    }
}

// Function to print the ticket
function printTicket() {
    window.print();
}

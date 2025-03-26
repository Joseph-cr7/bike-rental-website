function bookVehicle(vehicleName, price) {
    document.getElementById('selected-vehicle').textContent = `Selected Bike: ${vehicleName} ($${price}/day)`;
    document.getElementById('booking-form').classList.remove('hidden');
    document.getElementById('booking-form').dataset.price = price;
}


function calculateCost() {
    let startDate = new Date(document.getElementById('start-date').value);
    let endDate = new Date(document.getElementById('end-date').value);
    let price = document.getElementById('booking-form').dataset.price;
    
    if (startDate && endDate && endDate > startDate) {
        let timeDiff = endDate - startDate;
        let days = timeDiff / (1000 * 60 * 60 * 24);
        let totalCost = days * price;
        document.getElementById('total-cost').textContent = totalCost;
    } else {
        document.getElementById('total-cost').textContent = 0;
    }
}

function confirmBooking() {
    let paymentMethod = document.getElementById('payment-method').value;
    alert(`Booking Confirmed! Payment Method: ${paymentMethod}. Thank you for choosing our service.`);
    document.getElementById('booking-form').classList.add('hidden');
    document.getElementById('thank-you-message').style.display = 'block';
}

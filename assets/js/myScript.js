function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function openInput() {
    document.getElementById("inputSearch").style.display = 'block';
    document.getElementById("btnSearch").style.backgroundColor = "orange"
}

// Function to populate the select menu with numbers from 1 to 50
function populateNumberSelect() {
    const selectElement = document.getElementById('numberSelect');

    for (let i = 1; i <= 50; i++) {
        const optionElement = document.createElement('option');
        optionElement.value = i;
        optionElement.text = i;
        selectElement.appendChild(optionElement);
    }
}

// Call the function to populate the select menu when the page loads
document.addEventListener('DOMContentLoaded', populateNumberSelect);

function toggleBtn() {
    const content = document.getElementById('searchToggle');
    content.classList.toggle('expanded');
    // const bg_btn = content.classList.contains('expanded') ? 'orange' : '#0F648D';
    // document.getElementById('toggleInput').style.backgroundColor = bg_btn;
}

function toggleReadMore() {
    const content = document.getElementById('content');
    content.classList.toggle('expanded');
    const buttonText = content.classList.contains('expanded') ? 'Thu gọn' : 'Xem thêm';
    document.getElementById('readMoreBtn').textContent = buttonText;
}

function updateRating(rating) {
    document.getElementById('rating').value = rating;
    for (var i = 1; i <= 5; i++) {
        var star = document.getElementById('star' + i);
        if (i <= rating) {
            star.classList.add('fas');
            star.classList.remove('far');
        } else {
            star.classList.add('far');
            star.classList.remove('fas');
        }
    }
}

function writeComment() {
    const comment = document.querySelector('.comment-form')
    const question = document.querySelector('.ask-form')
    comment.style.display = "block"
    question.style.display = "none"

}

function askQuestion() {
    const comment = document.querySelector('.comment-form')
    const question = document.querySelector('.ask-form')
    comment.style.display = "none"
    question.style.display = "block"
}

function preventScroll(event) {
    event.preventDefault();
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantityInput');
    let currentValue = parseInt(quantityInput.value, 10);
    if (!isNaN(currentValue) && currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantityInput');
    let currentValue = parseInt(quantityInput.value, 10);
    if (!isNaN(currentValue)) {
        quantityInput.value = currentValue + 1;
    }
}

function validateQuantity() {
    const quantityInput = document.getElementById('quantityInput');
    let currentValue = parseInt(quantityInput.value, 10);
    if (isNaN(currentValue) || currentValue < 1) {
        quantityInput.value = 1;
    }
}
// const cardImages = document.querySelectorAll("card");

// cardImages.forEach(cardImage) => {
//     cardImage.addEventListener('click', (e)=> {
//         e.preventDefault()
//         const filter = e.target.dataset.filter
//     })

// }

// click event and redirect to the dynamic page with the live stream
    document.getElementById("streamDiv").addEventListener("click", function() {
        window.location.href = "Stream/livestream.html";
    });
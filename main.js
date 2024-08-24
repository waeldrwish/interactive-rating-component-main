// Select all rating divs
document.querySelectorAll('.rate div').forEach((div) => {
    div.addEventListener('click', function() {
        // Remove 'active' class from all divs
        document.querySelectorAll('.rate div').forEach((d) => d.classList.remove('active'));
        // Add 'active' class to the clicked div
        this.classList.add('active');
        // Store the rating in sessionStorage
        sessionStorage.setItem("rate", this.innerHTML);
    });
});

document.querySelector(".selected span").innerHTML = sessionStorage.getItem("rate");
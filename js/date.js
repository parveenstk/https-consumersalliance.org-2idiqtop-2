// date function

document.addEventListener("DOMContentLoaded", function () {
    let date = new Date();
    date.setDate(date.getDate() - 14); // Subtract 14 days (2 weeks)

    let formattedDate = date.toLocaleDateString("en-US", {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    document.getElementById("lastUpdated").innerText = "Last Updated: " + formattedDate;
});

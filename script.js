document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            const imgElement = document.createElement("img");
            imgElement.src = data.message;
            imgElement.alt = "Random Dog";
            imgElement.style.width = "200px";
            document.getElementById("bio").appendChild(imgElement);
        })
        .catch(error => console.error("Error fetching dog image:", error));
});

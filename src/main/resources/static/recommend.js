document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const location = document.querySelector("#location").value;
        const date = document.querySelector("#date").value;
        getWeather(location, date);
    });

    const reloadButton = document.querySelector("#reload-btn");
    reloadButton.addEventListener("click", function () {
        location.reload();
    });

    function getWeather(location, date) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=34eb45e56562d6a4962cdcc9e35c1be8&units=metric`;

        fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const temperature = data.main.temp;

                let recommendation = "";
                let outfitImages = [];
                if (temperature > 23) {
                    recommendation = "Wear shorts and a t-shirt or a dress, and probably a hat!";
                    outfitImages = ["image/tshirt.jpg", "image/shorts.jpg", "image/dress.jpg", "image/cap.jpg"];
                } else if (temperature > 15) {
                    recommendation = "Wear a light jacket or a long-sleeve and jeans.";
                    outfitImages = ["image/light_jacket.jpg", "image/jeans.jpg", "image/long-sleeve.jpg"];
                } else if (temperature > 7) {
                    recommendation = "Wear a cozy sweater and pants!";
                    outfitImages = ["image/sweater.jpg", "image/pants.jpg"];
                } else {
                    recommendation = "Wear a heavy coat, gloves, and a hat.";
                    outfitImages = ["image/heavy_coat.jpg", "image/gloves.jpg", "image/hat.jpg"];
                }

                const output = document.querySelector("#output");
                const weatherParagraph = document.createElement("p");

                const temperatureF = temperature * 1.8 + 32;
                weatherParagraph.textContent = `The temperature in ${location} is ${temperatureF.toFixed(1)}°F.`;

                output.appendChild(weatherParagraph);
                const recommendationParagraph = document.createElement("p");
                recommendationParagraph.textContent = recommendation;
                output.appendChild(recommendationParagraph);

                const imagesList = document.createElement("ul");
                imagesList.style.display = "flex";
                imagesList.style.flexWrap = "wrap";
                imagesList.style.listStyle = "none";
                imagesList.style.margin = "0";
                imagesList.style.padding = "0";

                for (let i = 0; i < outfitImages.length; i++) {
                    const listItem = document.createElement("li");
                    const image = document.createElement("img");
                    image.src = outfitImages[i];
                    image.classList.add("outfit-image"); // Add a class to the img element
                    image.style.maxWidth = "100%";
                    image.style.height = "auto";
                    listItem.style.flex = "1 1 40%";
                    listItem.style.margin = "0.5rem";
                    listItem.appendChild(image);
                    imagesList.appendChild(listItem);
                }
                output.appendChild(imagesList);

            })
            .catch(function (error) {
                console.error(error);
            });
    }
});


function chooseConnection(topic) {
    localStorage.setItem("selectedTopic", topic);
    window.location.href = "connection.html";
}


const selectedTopic = localStorage.getItem("selectedTopic");

const selectedTopicText = document.getElementById("selected-topic");
const selectedName = document.getElementById("selected-name");
const selectedCategory = document.getElementById("selected-category");

if (selectedTopicText) {
    selectedTopicText.textContent = selectedTopic;
    selectedName.textContent = selectedTopic;

    if (selectedTopic === "Wolfgang Tillmans") {
        selectedCategory.textContent = "Photography";
    }

    if (selectedTopic === "Moonlight") {
        selectedCategory.textContent = "Film";
    }

    if (selectedTopic === "James Baldwin") {
        selectedCategory.textContent = "Literature";
    }
}


const revealButton = document.getElementById("reveal-button");

if (revealButton) {
    revealButton.addEventListener("click", function () {

        const revealText = document.getElementById("reveal-text");
        const description = document.getElementById("connection-description");

        if (selectedTopic === "Wolfgang Tillmans") {
            description.textContent =
                "Wolfgang Tillmans photographed Frank Ocean for his album Blonde.";
        }

        if (selectedTopic === "Moonlight") {
            description.textContent =
                "Frank Ocean's music and Moonlight explore similar themes of identity and emotion.";
        }

        if (selectedTopic === "James Baldwin") {
            description.textContent =
                "Frank Ocean and James Baldwin both explore identity, love and personal experience in their work.";
        }

        revealText.style.display = "block";
    });
}
const connections = {
    "Wolfgang Tillmans": {
        name: "WOLFGANG TILLMANS",
        category: "PHOTOGRAPHY",
        photo: "assets/reveal-wolfgang.png",
        title: "assets/reveal-wolfgang-title.svg",
        explanation: "Wolfgang Tillmans photographed Frank Ocean and contributed to the visual world around Frank Ocean's work. Their connection shows how music and photography can influence each other.",
        takeaway: "Music becomes image; photography becomes part of the sound."
    },
    Moonlight: {
        name: "MOONLIGHT",
        category: "FILM",
        explanation: "Moonlight and Frank Ocean both use quiet, emotional storytelling to explore identity, memory and tenderness.",
        takeaway: "A feeling can move between music and film."
    },
    "Boys Don’t Cry": {
        name: "BOYS DON’T CRY",
        category: "MAGAZINE",
        photo: "assets/boys-dont-cry-magazine.webp",
        photoAlt: "Frank Ocean’s Boys Don’t Cry magazine in its silver wrapper",
        title: "assets/quick-boys-title.svg",
        style: "preview-magazine",
        explanation: "Frank Ocean released the visual magazine Boys Don’t Cry alongside his album Blonde in 2016. The magazine brings together music, photography, visual art, and writing.",
        takeaway: "An album becomes more than music: it becomes a visual world."
    },
    "James Baldwin": {
        name: "JAMES BALDWIN",
        category: "LITERATURE",
        photo: "assets/quick-baldwin.png",
        title: "assets/quick-baldwin-title.svg",
        style: "preview-books",
        explanation: "James Baldwin and Frank Ocean both explore love, identity and the difficulty of being fully seen.",
        takeaway: "Personal stories can become larger cultural truths."
    }
};

function setText(id, text) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = text;
    }
}

function chooseConnection(connectionName) {
    localStorage.setItem("selectedConnection", connectionName);
    window.location.href = "reveal.html";
}

function getSelectedConnection() {
    const savedConnection = localStorage.getItem("selectedConnection");

    if (connections[savedConnection]) {
        return connections[savedConnection];
    }

    return connections["Wolfgang Tillmans"];
}

function showSelectedConnection() {
    const selectedConnection = getSelectedConnection();

    setText("selected-route", selectedConnection.name);
    setText("selected-name", selectedConnection.name);
    setText("selected-category", selectedConnection.category);
    setText("connection-text", selectedConnection.explanation);
    setText("takeaway-text", selectedConnection.takeaway);

    showSelectedSubject(selectedConnection);
}

function showSelectedSubject(selectedConnection) {
    const subject = document.getElementById("selected-subject");

    if (!subject) {
        return;
    }

    if (selectedConnection.style) {
        subject.classList.add(selectedConnection.style);
    }

    if (selectedConnection.photo) {
        const photo = document.getElementById("selected-photo");
        photo.src = selectedConnection.photo;
        photo.alt = selectedConnection.photoAlt || selectedConnection.name;
        photo.hidden = false;
    }

    if (selectedConnection.title) {
        const title = document.getElementById("selected-title");
        title.src = selectedConnection.title;
        title.alt = selectedConnection.name;
        title.hidden = false;
        document.getElementById("selected-name").hidden = true;
    }
}

showSelectedConnection();

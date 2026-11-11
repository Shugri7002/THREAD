const connections = {
    "Wolfgang Tillmans": {
        name: "WOLFGANG TILLMANS",
        category: "PHOTOGRAPHY",
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
        explanation: "Frank Ocean released the visual magazine Boys Don’t Cry alongside his album Blonde in 2016. The magazine brings together music, photography, visual art, and writing.",
        takeaway: "An album becomes more than music: it becomes a visual world."
    },
    "James Baldwin": {
        name: "JAMES BALDWIN",
        category: "LITERATURE",
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
}

function openRevealPage() {
    window.location.href = "reveal.html";
}

showSelectedConnection();

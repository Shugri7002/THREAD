function chooseConnection(topic) {
    localStorage.setItem("selectedTopic", topic);
    window.location.href = "connection.html";
}
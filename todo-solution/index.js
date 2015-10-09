function add() {
    // TODO: add the new todo item to the list
    var content = document.getElementById("content").value.trim();
    if (content.length > 0) {
        var listItemElement = document.createElement("li");
        var textNode = document.createTextNode(content);
        listItemElement.appendChild(textNode);
        document.getElementById("list").appendChild(listItemElement);
    }
    document.getElementById("content").value = "";
}

function add() {
    // TODO: add the new todo item to the list
    var content = document.getElementById("content").value;
    var item = document.createElement("li");
    var contentNode = document.createTextNode(content);
    item.appendChild(contentNode);
    document.getElementById("list").appendChild(item);
    document.getElementById("content").value = "";
}

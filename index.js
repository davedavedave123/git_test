const root = document.getElementById("root");

const text = "hi this is a message";
const node = document.createTextNode(text);

function click() {
    alert(":)")
}

const button = document.createElement("button");
button.innerHTML = "click here";
button.onclick = () => click()



root.appendChild(node);
root.appendChild(button);
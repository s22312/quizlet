(() => {
    let e = document.createElement("style");
    e.type = "text/css";
    e.innerHTML = `
.MatchModeQuestionGridTile-content {
    animation: none !important;
}`;
    document.head.appendChild(e);
})();
setTimeout(() => setInterval(() => {
    var parent = document.getElementsByClassName("MatchModeQuestionGridBoard-tiles")[0];
    var children = Array.from(parent.children);
    while (children.length) {
        e = children.splice(Math.floor(Math.random() *  children.length), 1)[0]
        //e.children[0].children[0].children[0].children[0].setAttribute("style", "display: block; animation: unset !important; transition: unset !important")
        //_e = e.children[0].children[0].children[0].children[0]
        //if (!_e.classList.contains("notransition")) _e.classList.add("notransition")
        parent.appendChild(e);
    }
}, 1000), 1000);
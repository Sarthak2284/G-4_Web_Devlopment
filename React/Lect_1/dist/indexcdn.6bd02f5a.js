const heading = React.createElement("div", {
    id: "parent",
    key: 1
}, [
    React.createElement("div", {
        id: "child1",
        key: 4
    }, React.createElement("h1", {
        id: "heading1",
        key: 2
    }, "This is heading 1")),
    React.createElement("div", {
        id: "child2",
        key: 5
    }, React.createElement("h1", {
        id: "heading1",
        key: 3
    }, "This is heading 1"))
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=indexcdn.6bd02f5a.js.map

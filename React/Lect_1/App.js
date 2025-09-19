{
  /* <div id parent>
  div id child1 h1 id heading1 THis is heading 1 /div
  div id child2 h1 id heading1 THis is heading 1 /div
</div>; */
}
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "div",
  { id: "parent", key: 1 },
  [
    React.createElement("div", 
      { id: "child1", key: 4 },
      React.createElement(
        "h1",
        { id: "heading1", key: 2 },
        "This is heading 1"
      )
    ),
    React.createElement("div",
      { id: "child2", key: 5 },
      React.createElement(
        "h1",
        { id: "heading1", key: 3 },
        "This is heading 2"
      ),
    )
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
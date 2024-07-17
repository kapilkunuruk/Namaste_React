const parent = React.createElement("div", {id:"parent"}, [React.createElement("div", {id:"child1"}, 
                [React.createElement("h1", {id:"headingfirst"}, "Heading from Child div inside parenr divh1"),
                React.createElement("h4", {id:"headingfirst"}, "Heading from Child div inside parenr divhh4")]),
                React.createElement("div", {id:"child2"}, 
                [React.createElement("h1", {id:"headingfirstchild2"}, "Heading from Child div inside parenr divh1 child2"),
                React.createElement("h4", {id:"headingfirst"}, "Heading from Child div inside parenr divhh4 child2")])]);
                
const heading = React.createElement("h2", { id: "heading", class: "main-header " }, "Hello World from React h2???");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);
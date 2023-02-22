const heading=React.createElement("h1",{id:"title",},"Heading 1");
const heading2=React.createElement("h2",{id:"title",},"Heading 2");

//jakhon more than 1 element react element a run korate chai then by array[] pass korte hoi
const container=React.createElement("div",{id:"container"},[heading,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));

//passing the react element inside the root
root.render(container);


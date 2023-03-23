/**<div id="parent">
    <div id="child">
        <h1> H1 tag</h1>
        <h2> H2 tag</h2>
    </div>
    <div id="child">
        <h1> H1 tag</h1>
        <h2> H2 tag</h2>
    </div>
</div> */


let parent = React.createElement("div", { id: 'parent' },[
    React.createElement("div", { id: 'child' },
        [
            React.createElement("h1", {}, "H1 tag"),
            React.createElement("h2", {}, "H2 tag")
        ] 
    ), React.createElement("div", { id: 'child' },
    [
        React.createElement("h1", {}, "H1 tag"),
        React.createElement("h2", {}, "H2 tag")
    ] 
)
  ]  );

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);



// let heading = React.createElement('h1', {id:"heading"} ,"hello react");
// let root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading);
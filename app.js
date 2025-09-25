    // const heading=React.createElement("h1",{id:"heading"},"Helllo wotld from react")
    // console.log(parent)//object(reactELEMENT)
    // const root= ReactDOM.createRoot(document.getElementById('root'))
    // root.render(heading)//take this object and convert into h1 put in root
/**
 * <div id="parent">
 * <div id="child">
 * <h1>im an h1 tag</h1>
 * <h2>im an h2 tag</h2>
 * </div>
 * <div id="child2">
 * <h1>im an h1 tag</h1>
 * <h2>im an h2 tag</h2>
 * </div>
 * </div>

 */
const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"im an h1 tag"),React.createElement("h2",{},"im an h2 tag")]),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"im an h1 tag"),React.createElement("h2",{},"im an h2 tag")]),
    ]
)
 console.log(parent)//object(reactELEMENT)
    const root= ReactDOM.createRoot(document.getElementById('root'))
    root.render(parent)//take this object and convert into h1 put in root
    //IF THERE is a content in the root it is replaced by the parent not append
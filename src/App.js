import Accordion from "./components/Accordion";

function App(){

    const items = [
        {
            id:"123",
            label:"Can I use React on a Project?",
            content: "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want."
        },
        {
            id:"234",
            label:"Can I use JS on a Project?",
            content: "You can use JS on any project you want. You can use JS on any project you want. You can use JS on any project you want."
        },
        {
            id:"345",
            label:"Can I use CSS on a Project?",
            content: "You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want."
        }
    ];

    return(
       <Accordion items={items}/> 
    );
}

export default App;
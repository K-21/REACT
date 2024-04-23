/*
In this created a custom react element by javascipt code. The purpose of the component is to display and link to a web page.
but in actual react js it is more simple than this 
*/
function customRender(reactElemnt,container){
    /*  
    const domElement=document.createElement(reactElemnt.type)//create element and take it from react element i.e type
      domElement.innerHTML=reactElemnt.Children // inside h1 tag take children from react element
      domElement.setAttribute("href",reactElemnt.props.target)// set href attribute to the link in react element
     container.appendChild(domElement)
    */

     const domElement=document.createElement(reactElemnt.type)//create element and take it from react element i.e type
     domElement.innerHTML=reactElemnt.children // inside h1 tag take children from react element
     for(const prop in reactElemnt.props){
        if(prop==="children") continue
        domElement.setAttribute(prop,reactElemnt.props[prop])
     }
     container.appendChild(domElement)
    }
const reactElemnt={
    type:"a",
    props:{ // props used for passing data from one component to another. They are read-only and are used to render dynamic data in our components.
        //if you have a  parent component and you want to pass data to a child component, you would use props.
        href:"https://reactjs.org",
        target:"_blank",

    },
    children:"Click me to learn more about React"
}
const mainCointainer=document.querySelector("#root")

customRender(reactElemnt,mainCointainer)//1st=what do want to inject and 2nd= where do you want inject

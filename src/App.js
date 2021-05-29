import React, { useState } from 'react';
import "./styles.css";

function Buttuon({text="Hello there",isTrue="false"}){
  //const {text} = props.text
  return (
    <button contenteditable={isTrue}>{text}</button>
  )
}

// function UI({cmp}){
//   const [type,setType] = useState('');

//   const { create } = cmp

//   function elememtProps(e){
//      setType(e.target.value)
//      console.log(type)
//   }

//   console.log(cmp.create)

//   return (
//     <div>
//       Type of Elememnt : <input type="text" onChange={elememtProps}/>
//       {cmp.create(type)}
//     </div>
//   )
// }


const ComponentFactory ={

   create(type="div",text="some value",isEditable="false",clsname){
     return  React.createElement(
      `${type}`,
      {
        contenteditable: `${isEditable}`,
        class : `${clsname}`
        },
      
      `${text}`
    );
  }
}

//console.log(ComponentFactory.create("button","true"))

//const Div = ComponentFactory("div","hello")



export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <UI cmp={ComponentFactory}/> */}
      
      <Buttuon  isTrue="true"/>
     
      {ComponentFactory.create("button","Bubby",true,"Some")}
      {ComponentFactory.create("h1","hey baby",true,"Some")}
      {ComponentFactory.create("select")}
     
    </div>
  );
}

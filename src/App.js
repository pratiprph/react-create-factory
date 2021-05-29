import React, { useState, useRef } from 'react';
import "./styles.css";

function Container(){
  return (
    <div id="container">
      <div id="editor">
      <Buttuon text="Rampurhat" isTrue="false" draggable="true"/>
      
      </div>
      <div id="dropble">
        droppable area
      </div>
    </div>
  )
}

function Buttuon({text="Hi there",isTrue="false", draggable="false"}){
  const [btnText, setBtnText] = useState(text) 
  console.log(btnText)
  const btnRef = useRef()
  console.log(btnRef)
  function changeText(e){
    console.log(btnRef.current.innerText)
    if(isTrue){

      console.log(btnRef.current.innerText)
      setBtnText(btnRef.current.innerText)
    }
  }
  return (
    <button contenteditable={isTrue} ref={btnRef} 
    onKeyPress={changeText} draggable={false}
    className="element_around">{btnText}</button>
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

   create(type="div",text="some value",isEditable="false"){
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
    <div>
      <Container/>
     
      
     
      {/* {ComponentFactory.create("button","Bubby",true,"Some")}
      {ComponentFactory.create("h1","hey baby",true,"Some")}
      {ComponentFactory.create("select")}
      */}
    </div>
  );
}

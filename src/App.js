import { useEffect,useState } from "react";
import './App.css'
import FirstBtn from "./components/firstBtn-component/firstBtn-component";
import SecondBtn from "./components/secondBtn-component/secondBtn-component";
import ThirdBtn from './components/thirdBtn-component/thirdBtn-component';
import FourthBtn from "./components/fourthBtn-component/fourthBtn-component";
import FifthBtn from "./components/fifthBtn-component/fifthBtn-component";

const App=()=>{
  const [colors,setColors]=useState([]);

  useEffect(()=>{
    fetch('https://gist.githubusercontent.com/jjdelc/1868136/raw/c9160b1e60bd8c10c03dbd1a61b704a8e977c46b/crayola.json')
    .then((Response)=>Response.json())
    .then((color)=>setColors(color));
  },[]);

  const randomColor=()=>{
    firstDiv();
    secondDiv();
    thirdDiv();
    fourhtDiv();
    fifthDiv();
  }

  const firstDiv=()=>{
    const random=colors[Math.floor(Math.random()*colors.length)]
    const div1=document.querySelector('.div1');
    const p1=document.querySelector('.p1')
    div1.style=`background-color:${random.hex} !important`;
    p1.textContent=`${random.name} `;
  }
  const secondDiv=()=>{
    const random=colors[Math.floor(Math.random()*colors.length)]
    const div2=document.querySelector('.div2');
    const p2=document.querySelector('.p2')
    div2.style=`background-color:${random.hex} !important`;
    p2.textContent= `${random.name} `;
  }
  const thirdDiv=()=>{
    const random=colors[Math.floor(Math.random()*colors.length)]
    const div3=document.querySelector('.div3');
    const p3=document.querySelector('.p3')
    div3.style=`background-color:${random.hex} !important`;
    p3.textContent=`${random.name} `; 
  }
  const fourhtDiv=()=>{
    const random=colors[Math.floor(Math.random()*colors.length)]
    const div4=document.querySelector('.div4');
    const p4=document.querySelector('.p4')
    div4.style=`background-color:${random.hex} !important`;
    p4.textContent=`${random.name} `;
  }
  const fifthDiv=()=>{
    const random=colors[Math.floor(Math.random()*colors.length)]
    const div5=document.querySelector('.div5');
    const p5=document.querySelector('.p5')
    div5.style=`background-color:${random.hex} !important`;
    p5.textContent=`${random.name} `; 
  }
  return(
    <div className="App" >
      <div className="body">
        <FirstBtn/>
        <SecondBtn/>
        <ThirdBtn/>
        <FourthBtn/>
        <FifthBtn/>
        <button className="changeBtn" onClick={randomColor}>Click to Change Palette</button>
      </div>
    
    </div>
  )
}

export default App;
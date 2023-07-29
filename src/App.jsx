import "./App.css";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import pizza from "../src/assets/icons/pizza.svg";
import sine from "../src/assets/icons/sino.svg";
import user from "../src/assets/icons/user.svg";
import saveReg from "../src/assets/icons/bookmark-regular.svg";
import plus from "../src/assets/icons/plus.svg";
import house from "../src/assets/icons/house.svg";

function Toolbar() {
  return (
    <div id="toolbar">
      <img src={user} />
      <img src={sine} />
    </div>
  );
}


function Navigation(props){
  const [active, setActive] = useState()

  const menu_items = [
    {
      id: 1,
      title: 'home',
      active: true
    },
    {
      id: 2,
      title: 'add',
      active: false
    },
    {
      id: 3,
      title: 'save',
      active: false
    },
  ]
  
  function handleClick(evt, bind){
    evt.preventDefault()
    setActive(bind)
  }
  return (
    <div id="navigation">
      <Link to='/'><div className={menu_items[0].active ? 'Selected': ''}  id="home">
        <img src={house}></img> 
        <p>Home</p>
      </div></Link>

      <img id='plus' src={plus} />
      
      <Link to='/save'><img id="save" src={saveReg} /></Link>

    </div>
  )
}

function App() {
  return (
    <>
      <div id="container">
      
       <Outlet />
       <Navigation active='home' />
      </div>
           
    </>
  );
}

export default App;

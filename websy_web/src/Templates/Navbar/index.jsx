import React from 'react'
import "./style.css"

const Navbar = (props) => {
  return (
    <nav>
      <input type="checkbox" id="botonMenu"/>
      <label for="botonMenu" class="botonMenuClass">
        <i class="fa fa-bars"></i>
      </label>
      <label class="tituloWeb">Label 1</label>
      <ul>
        <li><a href='#'>Li 1</a></li>
        <li><a href='#'>Li 2</a></li>
        <li><a href='#'>Li 3</a></li>
        <li><a href='#'>Li 4</a></li>

      </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='header__start'>
      <div className="container d-flex justify-content-between p-5">
        <div className='header__start__inp'>
        <i class="fa-solid fa-magnifying-glass"></i>  <input type="text" placeholder="Search" />
        </div>

        <div className='header__start__logo'><Link>SHOPPERS</Link></div>

        <ul className='d-flex gap-4 list-unstyled header__start__icons'>
            <li><Link><i class="fa-solid fa-user"></i></Link></li>
            <li><Link><i class="fa-regular fa-heart"></i></Link></li>
            <li><Link to="/basket"><i class="fa-solid fa-cart-shopping"></i></Link></li>
        </ul>
      </div>
    </header>

    <header className='header__end p-4'> 
      <div className="container d-flex justify-content-center">
        <ul className='header__end__list d-flex gap-5 list-unstyled'>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Shop</Link></li>
        <li><Link to="/admin">ADMIN</Link></li>
        <li><Link>New Arrivals</Link></li>
        <li><Link>Contact</Link></li>
        </ul>
      </div>
    </header>
    </>
   
  )
}

export default Header

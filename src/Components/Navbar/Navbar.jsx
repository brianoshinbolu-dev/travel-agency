import React from 'react';
import styles from './navbar.module.scss'
import {SiYourtraveldottv} from "react-icons/si"
import {AiFillCloseCircle} from "react-icons/ai"

const Navbar = () => {
	return(
		<section className={styles.navBarSection}>
			<header className="header flex">

					<div className="logoDiv">
						<a href="#" className="logo">
							<h1 ><SiYourtraveldottv className="icon"/>WAka WAka.</h1>
						</a>
					</div>

					<div className="navBar">
						<ul className="navLists flex">

							<li className="navItem">
								<a href="#" className="navLink">Home</a>
							</li>

							<li className="navItem">
								<a href="#" className="navLink">Packages</a>
							</li>

							<li className="navItem">
								<a href="#" className="navLink">Shop</a>
							</li>

							<li className="navItem">
								<a href="#" className="navLink">About</a>
							</li>

							<li className="navItem">
								<a href="#" className="navLink">Pages</a>
							</li>

							<li className="navItem">
								<a href="#" className="navLink">News</a>
							</li>

							<li className="navItem">
								<a href="#" className="navLink">Contact</a>
							</li>


							<button className="btn"><a href="#">BOOK NOW</a></button>
						</ul>

						<div className="closeNavbar">
							<AiFillCloseCircle className="icon"/>
						</div>
					</div>

					<div className="toggler">
					</div>

			</header>
		</section>
	)
}


export default Navbar;
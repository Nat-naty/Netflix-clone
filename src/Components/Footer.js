import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
			<div className="footer__links">
				<ul>
					<li>
                        <button >Audio Description </button>{" "}
					</li>
					<li>
                        <button href="#">Investor Relations </button>
					</li>
					<li>
                        <button href="#">Legal Notices </button>
					</li>
					
				</ul>
				<ul>
					<li>
                        <button href="#">Help Center </button>
					</li>
					<li>
                        <button href="#">Jobs </button>
					</li>
					<li>
                        <button href="#">Cookie Preferences </button>
					</li>
				</ul>

				<ul>
					<li>
                        <button href="#">Gift Cards </button>
					</li>
					<li>
                        <button href="#">Terms of Use </button>
					</li>
					<li>
                        <button href="#">Corporate Information </button>
					</li>
				</ul>
				<ul>
					<li>
                        <button href="#">Media Center </button>
					</li>
					<li>
                        <button href="#">Privacy </button>
					</li>
					<li>
                        <button href="#">Contact Us </button>
					</li>
				</ul>
			</div>
			<h2>
				netflix-clone By:  <a href="https://natigule.com/" rel='noopener noreferrer' target="_blank">Natnael Gulilat </a>
			</h2>
		</div>
    )
}

export default Footer
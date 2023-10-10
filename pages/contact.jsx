import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Contact() {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>

			<Navbar />

			<section className="hero">
				<div className="container">
					<div className="text-wrapper w-full">
						<h1 className="title">Contact</h1>
						<p className="description">
							Keep in touch with me
						</p>
						<ul className="contact-links">
							<li className="contact-item">Email: davidwijaya0801@gmail.com</li>
							<li className="contact-item">Phone: +6285710621032 (WA)</li>
							<li className="contact-item">
								Linkedin: <a href="https://www.linkedin.com/in/davidwijaya09/" target="_blank" rel="noopener noreferrer">davidwijaya09</a>
							</li>
							<li className="contact-item">
								Portfolio: <a href="https://www.canva.com/design/DAFwekXiVGA/7EyLjBFat_tmJcy_7bdnZQ/view?utm_content=DAFwekXiVGA&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank" rel="noopener noreferrer">David's Portfolio</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
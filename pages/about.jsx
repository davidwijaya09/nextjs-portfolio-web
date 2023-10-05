import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>

			<Navbar />

			<section className="hero">
				<div className="container">
					<div className="text-wrapper w-full">
						<h1 className="title">About</h1>
						<p className="description">
							Specialized in web and mobile application development with a deep passion for IT and user interface design.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
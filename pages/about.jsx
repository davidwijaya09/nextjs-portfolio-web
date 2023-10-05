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

			<section className="hero2">
				<div className="flex-container">
					<img src="/David_Wijaya.jpeg" alt="David Wijaya" className="profile-picture" />

					<div className="text-wrapper w-full">
						<h1 className="title">About</h1>
						<p className="description">
							I'm a specialist in web and mobile application development with a deep passion for IT and user interface design. I've utilized my skills, knowledge, and expertise to enhance software and user experiences for various companies and clients. Eager to leverage my abilities to contribute to a company's successful IT solutions development.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
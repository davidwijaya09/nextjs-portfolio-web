import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import { useState, useEffect } from 'react';
import PortfolioItem from '../components/PortofolioItem';


function Portfolio() {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			setTheme('light');
			document.documentElement.setAttribute('data-theme', 'light');
		}
	};

	const portfolioData = [
		{
			imageSrc: "/gotravl.png",
			title: "Go Travl",
			description: "GoTravL makes travel planning easy with its smart itinerary tool and AI helper.",
			skills: ["React Native", "Express.js", "Redux", "OpenAI API", "GoogleMaps API", "Firebase", "Jest", "Sequelize.js"]
		},
		{
			imageSrc: "/beveragebliss.png",
			title: "Beverage Bliss",
			description: "Beverage Bliss offers a variety of refreshing and healthy drinks. From fruity mixes to herbal drinks.",
			skills: ["Vue.js", "Express.js", "Pinia", "Axios", "JavaScript", "CSS", "Bootstrap (Framework)", "HTML5", "Sequelize.js"]
		},
		{
			imageSrc: "/subway-mobile.png",
			title: "Subway Mobile App",
			description: "I made a mobile app using React Native for Subway fans. The app lets users see Subway's menu, prices, and sandwich details. Users can look at sandwich pictures and know their ingredients.",
			skills: ["Expo", "Xcode", "React Native", "Axios", "JavaScript", "CSS"]
		},
		{
			imageSrc: "/sas.png",
			title: "Subway Admin CMS",
			description: "I made a copy of Subway's ordering system using React and other tools. It works like Subway's actual system but uses the latest tech like React for the look, and Redux to manage data.",
			skills: ["React", "Redux", "PostgreeSQL", "JWT"]
		},
		{
			imageSrc: "/job-search.png",
			title: "Job Search",
			description: "Job Search is a website made with tools like Vue.js and Axios, helping people find their dream jobs. It uses Pinia to manage data, sends emails with Supabase, and shows job details with QR Barcodes.",
			skills: ["Vue", "Pinia", "Axios", "Javascript", "Bootstrap", "HTML5"]
		},
	]

	useEffect(() => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		if (currentTheme) {
			setTheme(currentTheme);
		}
	}, []);

	return (
		<>
			<Head>
				<title>Portfolio</title>
			</Head>

			<Navbar />

			<section className="hero">
				<div className="theme-toggle-container">
					<label className="switch">
						<input
							type="checkbox"
							onChange={toggleTheme}
							checked={theme === 'dark'}
						/>
						<span className="slider round" data-checked="🌙" data-unchecked="☀️"></span>
					</label>
				</div>

				<div className="container">
					<div className="text-wrapper w-full">
						<h1 className="title">Portfolio</h1>
						<p className="description">
							Welcome to David's Portfolio, below are projects that I have worked on.
						</p>

						<div className="portfolio-wrapper">
							{portfolioData.map(project => (
								<PortfolioItem
									key={project.title}
									imageSrc={project.imageSrc}
									title={project.title}
									description={project.description}
									skills={project.skills}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Portfolio;

import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import { useState, useEffect } from 'react';


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

						<div className="portfolio-wrapper" style={{ marginTop: '20px' }}>
							<div className="portfolio-item">
								<img src="/gotravl.png" className="portfolio-image" />
								<h4 className="portfolio-name">Go Travl</h4>
								<div className="portfolio-category">Mobile Dev</div>
							</div>
							<div className="portfolio-item">
								<img src="/beveragebliss.png" className="portfolio-image" />
								<h4 className="portfolio-name">Beverage Bliss</h4>
								<div className="portfolio-category">Web Dev</div>
							</div>
						</div>
						<div className="portfolio-wrapper" style={{ marginTop: '20px' }}>
							<div className="portfolio-item">
								<img src="/subway-mobile.png" className="portfolio-image" />
								<h4 className="portfolio-name">Subway Mobile App</h4>
								<div className="portfolio-category">Mobile Dev</div>
							</div>
							<div className="portfolio-item">
								<img src="/sas.png" className="portfolio-image" />
								<h4 className="portfolio-name">Subway Admin</h4>
								<div className="portfolio-category">Web Dev</div>
							</div>
						</div>
						<div className="portfolio-wrapper" style={{ marginTop: '20px' }}>
							<div className="portfolio-item">
								<img src="/job-search.png" className="portfolio-image" />
								<h4 className="portfolio-name">Job Search</h4>
								<div className="portfolio-category">Web Dev</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Portfolio;

import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import { useState, useEffect } from 'react';

function About() {
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
				<title>About</title>
			</Head>

			<Navbar />

			<section className="hero2">
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
				<div className="flex-container">
					<img src="/David_Wijaya.jpeg" alt="David Wijaya" className="profile-picture" />

					<div className="text-wrapper w-full">
						<h1 className="title">About</h1>
						<p className="description">
							Hello, I'm David. I started learning web development in November 2019. After that, I worked and continue my studies in 2023 by joining a full-stack JavaScript bootcamp at Hactiv8 in Jakarta for upgrade my skills, then started watching a bunch of youtube videos
							to explore more about web development especially frontend development.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
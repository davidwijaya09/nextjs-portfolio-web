import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FaCode, FaReact, FaMobileAlt } from 'react-icons/fa';

function Expertise() {
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
				<title>My Expertise</title>
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
						<h1 className="title">My Expertise</h1>

						<div className="expertise-wrapper">
							<div className="expertise-item">
								<FaCode size={48} />
								<h3>Software Development</h3>
								<p>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</p>
							</div>
							<div className="expertise-item">
								<FaReact size={48} />
								<h3>Frontend Dev - React, NextJS</h3>
								<p>Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
							</div>
							<div className="expertise-item">
								<FaMobileAlt size={48} />
								<h3>Flutter Dev - Android, iOS</h3>
								<p>Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Expertise;

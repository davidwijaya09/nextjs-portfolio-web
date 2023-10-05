import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Portfolio() {
	return (
		<>
			<Head>
				<title>Portfolio</title>
			</Head>

			<Navbar />

			<section className="hero">
				<div className="container">
					<div className="text-wrapper w-full">
						<h1 className="title">Portfolio</h1>
						<p className="description">
							Incididunt in cillum magna occaecat nisi qui in.
						</p>

						<div className="portfolio-wrapper">
							<div className="portfolio-item">
								<img src="/gotravl.png" className="portfolio-image" />

								<h4 className="portfolio-name">Go Travl</h4>
								<div className="portfolio-category">Mobile Dev</div>
							</div>
							<div className="portfolio-item">
								<img src="/beveragebliss.jpg" className="portfolio-image" />

								<h4 className="portfolio-name">Beverage Bliss</h4>
								<div className="portfolio-category">Web Dev</div>
							</div>
							<div className="portfolio-item">
								<img src="/subway-mobile.jpg" className="portfolio-image" />

								<h4 className="portfolio-name">Subway Mobile App</h4>
								<div className="portfolio-category">Mobile Dev</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Portfolio;
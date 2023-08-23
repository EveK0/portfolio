import styles from './Home.module.css';
import { FiSearch } from 'react-icons/fi'
import { BsFolderCheck, BsPersonFillAdd } from 'react-icons/bs'
import { SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FaRust, FaHtml5, FaCss3 } from 'react-icons/fa';
import { DiScrum } from 'react-icons/di';
import Card from '../Components/Card/Card';
import CardLeft from '../Components/CardLeft/Cardleft';
import { useCopyToClipboard } from 'usehooks-ts'
import { AiOutlineMail } from 'react-icons/ai';
import { Reveal } from '../Components/Animations/Reveal';
import bg from '../assets/bg.svg';

const Home = () => {
	const [value, copy] = useCopyToClipboard()
	return (
		<div className={styles.content}>
			<header className={styles.header_content}>
				<img src={bg} />
				<Reveal>
					<h1>Searching for a<span> Backend Developer </span>who understands the nuances of<span> Frontend development? </span> </h1>
				</Reveal>
				<Reveal>
					<h1>I'm Kaylane Santos, welcome.</h1>
				</Reveal>
				<br />
				<Reveal>
					<div>
						<p>I've spent the last 4 years building and scaling software for some
							pretty cool companies and people. I also teach people to code and improve their skills(I try).</p>
					</div>
				</Reveal>
				<div className={styles.button_session}>
					<a href='#contact'>
						<button className={styles.button_primary}>Do it </button>
					</a>
					<a href='#contact'>
						<button className={styles.button_secondary}> More about</button>
					</a>
				</div>
				<div className={styles.see_more}>
					<svg width="23" height="33" viewBox="0 0 23 33" fill="none">
						<rect x="0.767442" y="0.767442" width="20.7209" height="31.4651" rx="10.3605" stroke="var(--text)" stroke-width="1.53488"></rect>
						<rect x="9" y="8" width="4" height="8" rx="2" fill="var(--text)"></rect>
					</svg>
					<p>Scroll down to see more</p>
				</div>
			</header>
			<center>
				<main>
					<section className={styles.projects}>
						<Reveal>
							<h1>Projects <span>.</span></h1>
						</Reveal>
						<div>
							<h2>
								Here you can see a little about my technological skills in practice</h2>
							<div className={styles.projects_wrapper}>
								<Card tech='Typescript & MongoDB' title='2Auth and Oauth system' icon={<BsPersonFillAdd />} link='#' description='Authentication system using 2auth and Oauth' backgroundColor='var(--bg)' />
								<Card tech='Rust' title='Organizer File' icon={<BsFolderCheck />} link='https://github.com/EveK0/rust-organizer' description='A organizer file by downloads of your PC.' backgroundColor='var(--bg)' />
								<Card tech='Javascript' title='Web scraping' icon={<FiSearch />} link='https://github.com/EveK0/subscan-srcaping' description='With this app you can get all ABIs of subscan ethereum net' backgroundColor='var(--bg)' />
							</div>
						</div>
					</section>
					<section className={styles.Skills}>
						<Reveal>
							<h1>Skills<span>.</span></h1>
						</Reveal>
						<h2>Here are my top skills and which ones I've used the most in the last year</h2>
						<div className={styles.skills_wrapper}>
							<CardLeft title='HTML' icon={<FaHtml5 />} hoverBackground='transparent' hoverColor='#B84022' />
							<CardLeft title='Typescript' icon={<SiTypescript />} hoverBackground='transparent' hoverColor='#4B739B' />
							<CardLeft title='Rust' icon={<FaRust />} hoverBackground='transparent' hoverColor='#424242' />
							<CardLeft title='CSS' icon={<FaCss3 />} hoverBackground='transparent' hoverColor='#2f8ce9' />
							<CardLeft title='Javascript' icon={<IoLogoJavascript />} hoverBackground='transparent' hoverColor='#d8c440' />
							<CardLeft title='SCRUM' icon={<DiScrum />} hoverBackground='transparent' hoverColor='#67b3ff' />
						</div>
					</section>
					<section className={styles.contact}>
						<Reveal>
							<h1 className={styles.touch} id='contact'>Get in touch<span>!</span></h1>
						</Reveal>
						<div>
							<Reveal>
								<div title='Click to copy' className={styles.email} style={{ backgroundColor: value ? 'var(--accent)' : 'var(--primary) ', transition: '0.5ms all ease-in-out' }}>
									<span id={styles.email_icon}><AiOutlineMail /></span>
									<span onClick={() => copy('kaylanefs39@gmail.com')}>{value ? 'Successfully copied' : 'kaylanefs39@gmail.com'}</span>
								</div>
							</Reveal>
						</div>
					</section>
					<Reveal>
						<footer>
							<div className={styles.footer}>
								<div className={styles.row}>
									<a target='_blank' href="https://www.instagram.com/santos_afk/"><i className="fa fa-instagram"></i></a>
									<a target='_blank' href="https://www.github.com/EveK0"><i className="fa fa-github"></i></a>
									<a target='_blank' href="https://www.linkedin.com/in/kaylane-santos07/"><i className="fa fa-linkedin"></i></a>
								</div>
								<div className={styles.row}>
									<ul>
										<li><a href="#contact">Contact us</a></li>
										<li><a href="#about">Privacy Policy</a></li>
										<li><a href="#">Career</a></li>
									</ul>
								</div>

								<div className="row">
									Copyright © 2023 Kaylane-dev
								</div>
							</div>
						</footer>
					</Reveal>
				</main>
			</center>

		</div>
	)
}

export default Home;
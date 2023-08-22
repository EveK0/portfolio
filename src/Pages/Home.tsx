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
					<h1>Searching for a Backend Developer who understands the nuances of frontend development?</h1>
				</Reveal>
				<Reveal>
					<h1>I'm Kaylane Santos,&nbsp; <span>welcome. </span></h1>
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
					<h1>SEE MORE</h1>
					<span id={styles.arrow}>&#x2193;</span>
				</div>
			</header>
			<center>
				<main>
					<section className={styles.projects}>
						<Reveal>
							<h1>Projects <span>.</span></h1>
						</Reveal>
						<div className={styles.projects_wrapper}>
							<Card tech='Typescript & MongoDB' title='2Auth and Oauth system' icon={<BsPersonFillAdd />} link='#' description='Authentication system using 2auth and Oauth' backgroundColor='#14141499' />
							<Card tech='Rust' title='Organizer File' icon={<BsFolderCheck />} link='https://github.com/EveK0/rust-organizer' description='A organizer file by downloads of your PC.' backgroundColor='#14141499' />
							<Card tech='Javascript' title='Web scraping' icon={<FiSearch />} link='https://github.com/EveK0/subscan-srcaping' description='With this app you can get all ABIs of subscan ethereum net' backgroundColor='#14141499' />
						</div>

					</section>
					<section className={styles.Skills}>
						<Reveal>
							<h1>Skills<span>.</span></h1>
						</Reveal>
						<div className={styles.skills_wrapper}>
							<CardLeft title='HTML' icon={<FaHtml5 />} backgroundColor='#0f3d1e ' hoverBackground='transparent' hoverColor='#B84022' />
							<CardLeft title='Typescript' icon={<SiTypescript />} backgroundColor='#0f3d1e ' hoverBackground='transparent' hoverColor='#4B739B' />
							<CardLeft title='Rust' icon={<FaRust />} backgroundColor='#0f3d1e ' hoverBackground='transparent' hoverColor='#424242' />
							<CardLeft title='CSS' icon={<FaCss3 />} backgroundColor='#0f3d1e ' hoverBackground='transparent' hoverColor='#2f8ce9' />
							<CardLeft title='Javascript' icon={<IoLogoJavascript />} backgroundColor='#0f3d1e ' hoverBackground='transparent' hoverColor='#d8c440' />
							<CardLeft title='SCRUM' icon={<DiScrum />} backgroundColor='#0f3d1e ' hoverBackground='transparent' hoverColor='#67b3ff' />
						</div>
					</section>
					<section className={styles.contact}>
						<Reveal>
							<h1 className={styles.touch} id='contact'>Get in touch<span>!</span></h1>
						</Reveal>

						<div>
							<Reveal>
								<div className={styles.email} style={{ backgroundColor: value ? '#d17347' : '#5a2eb8 ', transition: '0.5ms all ease-in-out' }}>
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
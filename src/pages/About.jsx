import React from "react";
import about from "../styles/about.css";
import afterEffects from "../assets/after_effects.png";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import illustrator from "../assets/illustrator.png";
import javascript from "../assets/javascript.png";
import photoshop from "../assets/photoshop.png";
import react from "../assets/react.png";

const About = () => {
	return (
		<div className="main">
			<div className="flex-container">
				<div className="about-left">
					<h1>
						<span>A</span>
						<span>b</span>
						<span>o</span>
						<span>u</span>
						<span>t</span>
						<span> </span>
						<span>M</span>
						<span>e</span>
					</h1>
					<p>
						I am a colombian web front-end
						developer and Graphic designer
						based on Italy, i love making
						creative and enjoyable things
						with code. <br /> My goal is to
						turn ideas into reality with
						code, there's no limit when you
						know the flexibility you have
						when creating things by your
						own.{" "}
					</p>
					<a href="/#/projects">
						Wanna see more?
					</a>
				</div>
				<div className="about-right">
					<span>
						<img
							src={afterEffects}
							alt=""
						/>
						<p>
							Give animation and bring
							images to life by
							customizing sections.{" "}
							<br /> Svg, png, jpg and
							so much more files can
							be modified with this
							tool{" "}
						</p>
					</span>
					<span>
						<img src={bootstrap} alt="" />
						<p>
							I love using bootstrap
							and react-bootstrap when
							we need to make the code
							easier and don't want to
							create all over from
							scratch{" "}
						</p>
					</span>
					<span>
						<img src={css} alt="" />
						<p>
							It's amazing the things
							you can create with just
							css styling, it's so
							much more customizible
							than we think such as
							amazing animations,
							transitions and
							colorfull things{" "}
						</p>
					</span>
					<span>
						<img src={github} alt="" />
						<p>
							I've worked on
							team-programming and
							pair-programming
							projects in order to
							make it better and
							easier, it's really
							important to be
							organized{" "}
						</p>
					</span>
					<span>
						<img src={html} alt="" />
						<p>
							Give structure and
							position correctly,
							according to the screen
							size and what we want
						</p>
					</span>
					<span>
						<img src={illustrator} alt="" />
						<p>
							Create images,
							characters, logotypes,
							custom text and badges.{" "}
							<br /> I use this tool
							in order to bring my
							ideas to reality{" "}
						</p>
					</span>
					<span>
						<img src={javascript} alt="" />
						<p>
							JavaScript makes web
							pages dynamic. HTML and
							CSS are only capable of
							creating static pages
							that can be styled but
							not interactive aside
							from hyperlinks
						</p>
					</span>
					<span>
						<img src={photoshop} alt="" />
						<p>
							Mostly used to modify
							images and customizing,
							give color, filters,
							masks and so much more..
						</p>
					</span>
					<span>
						<img src={react} alt="" />
						<p>
							I found easier to build
							user interfaces for web
							applications with react
							than with javascript,
							there's more options to
							create your web page
							faster
						</p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default About;

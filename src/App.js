import "./App.css";
import BackgroundDesktop from "./images/bg-pattern-desktop.svg";
import HeroDesktop from "./images/hero-desktop.jpg";
import HeroMobile from "./images/hero-mobile.jpg";
import Logo from "./images/logo.svg";
import ArrowIcon from "./images/icon-arrow.svg";
import ErrorIcon from "./images/icon-error.svg";
import { useState } from "react";

function App() {
	const [email, setEmail] = useState("");
	const [invalid, setInvalid] = useState(false);
	function handleSubmit() {
		if (
			String(email).match(
				/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
			)
		) {
			console.log(email);
			setInvalid(false);
		} else {
			setInvalid(true);
		}
	}
	function updateEmail(event) {
		setEmail(event.target.value);
	}
	return (
		<div className="App">
			<div className="detailsContainer">
				<img className="background" src={BackgroundDesktop} alt="background" />
				<img className="logo" src={Logo} alt="logo" />
				<img className="heroMobile" src={HeroMobile} alt="hero-mobile" />
				<div className="heroText">
					<h1>WE'RE</h1>
					<h2>COMING</h2>
					<h2>SOON</h2>
					<p>
						Hello fellow shoppers! We're currently building our new fashion
						store. Add your email below to stay up-to-date with announcements
						and our launch deals.
					</p>
				</div>
				<form className="formContainer" onSubmit={() => false}>
					<input
						onChange={updateEmail}
						value={email}
						id="email"
						type="email"
						placeholder="Email Address"
					/>
					{invalid && (
						<img className="errorIcon" src={ErrorIcon} alt="error-icon" />
					)}
					<button type="button" onClick={handleSubmit}>
						<img src={ArrowIcon} alt="arrow-icon" />
					</button>
					{invalid && (
						<h5 className="errorMessage">Please provide a valid email.</h5>
					)}
				</form>
			</div>
			<img className="heroImage" src={HeroDesktop} alt="hero-image" />
		</div>
	);
}

export default App;

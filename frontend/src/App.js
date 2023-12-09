import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Components/WelcomePage/Welcome";
import Context from "./Components/ContextProvider/Context";
import HomePage from "./Components/HomePage/HomePage";

function App() {
	const [language, setLanguage] = useState("en");
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [currency, setCurrency] = useState("usd");

	return (
		<Context.Provider
			value={{
				language: language,
				setLanguage: setLanguage,
				user: user,
				setUser: setUser,
				email: email,
				setEmail: setEmail,
				currency: currency,
				setCurrency: setCurrency,
				serverURL: "http://localhost:8080",
			}}
		>
			<Routes>
				<Route path="/home/:id" element={<HomePage />} />
				<Route
					path="/"
					element={
						<Welcome
							language={language}
							setLanguage={setLanguage}
							currency={currency}
						/>
					}
				/>
			</Routes>
		</Context.Provider>
	);
}

export default App;

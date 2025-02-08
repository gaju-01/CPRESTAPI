import { useState, useEffect, useContext } from "react";
import PopUpStyles from "./PopUp.module.css"; 
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import Context from "../ContextProvider/Context";

const generationConfig = { temperature: 1, topP: 0.95, topK: 40, maxOutputTokens: 8192, responseMimeType: "text/plain"};
  
const PopUp = (props) => {

    const context = useContext(Context);
    const [prompt, setPrompt] = useState("");
    const [apiKey, setAPIKey] = useState("");
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({model: "gemini-2.0-flash"});

    const promptHandler = (event) => {
        setPrompt(event.target.value);
    }

    const getResponseHandler = () => {
        async function run() {
            const chatSession = model.startChat({generationConfig, history: []});
            const result = await chatSession.sendMessage(prompt);
            props.setText(result.response.text());
        };
        run();
    }

    useEffect(() => {
        axios.get(`${context.serverURL}/cprestapi/textgenerator/apikey`, 
			{ headers: {Authorization: `Bearer ${sessionStorage.getItem("jwt")}`} })
			.then((resp) => {setAPIKey(resp.data)})
            .catch((resp) => {});
    }, [context.serverURL]);

    return <div className={`${PopUpStyles["decorate-popup"]}`}>
        <input onChange={promptHandler} type="text" placeholder="Write something to generate the response"></input>
        <button type="submit" onClick={getResponseHandler}>Get response</button>
    </div>
}

export default PopUp;
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Context from "../ContextProvider/Context";

const Following = () => {
	const [list, setList] = useState([]);
	const [title, setTitle] = useState("Following");
	const context = useContext(Context);

	useEffect(() => {
		axios({
			url: `${context.serverURL}/cprestapi/following`,
			params: {
				parent: context.user,
			},
			headers: {
				Authorization: "Basic " + window.btoa("user:pass"),
			},
		}).then((resp) => {
			setList(resp.data);
		});
	}, []);

	useEffect(() => {
		console.log("serverURL", context.serverURL);
		axios({
			method: "get",
			url: `${context.serverURL}/cprestapi/intl/title/title.following`,
			headers: {
				"Accept-Language": context.language,
				Authorization: "Basic " + window.btoa("user:pass"),
			},
		}).then((response) => {
			setTitle(response.data);
		});
	}, [context.language, context.serverURL]);

	return (
		<>
			<h2>{title}</h2>
			{list.map(function (data) {
				return <p key={data}>{data}</p>;
			})}
		</>
	);
};

export default Following;

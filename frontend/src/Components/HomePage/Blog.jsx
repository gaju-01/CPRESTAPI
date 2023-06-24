import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Context from "../ContextProvider/Context";
const Blog = () => {
	const context = useContext(Context);
	const [blogs, setBlogs] = useState([]);
	const [title, setTitle] = useState("Blogs");
	const [message, setMessage] = useState("");

	useEffect(() => {
		axios({
			method: "get",
			url: "http://localhost:8080/cprestapi/intl/title/title.blog",
			headers: { "Accept-Language": context.language },
		}).then((response) => {
			setTitle(response.data);
		});
	}, [context.language]);

	useEffect(() => {
		axios({
			method: "get",
			url: "http://localhost:8080/cprestapi/blogs",
		}).then((response) => {
			setBlogs(response.data);
		});
	}, []);

	const followHandler = (user) => {
		if (user === context.user) {
			setMessage("You cannot follow yourself");
		} else {
			axios({
				method: "post",
				url: `http://localhost:8080/cprestapi/following`,
				data: {
					userName: context.user,
				},
				params: {
					user: user,
				},
				headers: {
					"Content-Type": "application/json",
				},
			});
			setMessage(`You are now following ${user}`);
		}
	};

	return (
		<div>
			{message !== "" && (
				<div class="alert alert-success" role="alert">
					{message}
				</div>
			)}
			<div>
				<p className="fs-1">{title}</p>
			</div>
			<div>
				{blogs.map(function (data) {
					return (
						<div key={data.id}>
							<p className="fs-2">{data.title}</p>
							<p>Author: {data.userName}</p>
							<button
								type="submit"
								onClick={() => {
									followHandler(data.userName);
								}}
							>
								Follow
							</button>
							<p>lastModified:{data.lastModified}</p>
							<p>{data.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Blog;
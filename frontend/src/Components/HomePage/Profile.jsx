import { useContext, useState } from "react";
import Context from "../ContextProvider/Context";

const Profile = () => {
	const context = useContext(Context);
	const [src, setSrc] = useState("");

	const ppHandler = (e) => {
		setSrc(URL.createObjectURL(e.target.files[0]));
	};

	const deleteProfilePic = () => {
		setSrc("");
	};

	return (
		<div>
			{src && (
				<div>
					<img
						src={src}
						style={{ borderRadius: "50%", width: "20rem" }}
						alt="error"
					/>
					<input type="file" onChange={ppHandler} />
				</div>
			)}
			{!src && (
				<div>
					<button
						style={{
							borderRadius: "50%",
							backgroundColor: "skyblue",
							width: "6rem",
							height: "6rem",
							color: "white",
							fontSize: "60px",
						}}
					>
						{context.user.slice(0, 1).toUpperCase()}
					</button>
					<input type="file" onChange={ppHandler} />
				</div>
			)}
			<button type="submit" class="btn btn-danger" onClick={deleteProfilePic}>
				delete
			</button>
			<div>
				<p>user: {context.user}</p>
				<p>email: {context.email}</p>
			</div>
		</div>
	);
};

export default Profile;

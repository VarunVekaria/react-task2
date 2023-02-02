import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./App.css";
import axios from "axios";
import { display } from "@mui/system";
import { Card2 } from "./Card2";
export const Card1 = () => {
	const baseURL = "https://jsonplaceholder.typicode.com/users";

	let [post, setPost] = useState([]);

	useEffect(() => {
		axios
			.get(baseURL)
			.then((res) => {
				setPost(res.data);
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const display = () => {
		return post[0].name;
	};

	let postno = post.length;
	console.log(postno);
	console.log(post);
	let [no, setNo] = useState(0);

	function displayCard() {

		return (
			<div>
				<Card sx={{ minWidth: 275 }} className="cardproperty">
					<CardContent>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							{post[no].company.name}
						</Typography>
					</CardContent>
					<CardContent>
						<Typography color="text.primary">Contact</Typography>
						<Typography color="text.secondary">{post[no].name}</Typography>
					</CardContent>
					<CardContent>
						<Typography color="text.primary">Street</Typography>
						<Typography color="text.secondary">
							{post[no].address.street}
						</Typography>
					</CardContent>
					<CardContent>
						<Typography color="text.primary"> City</Typography>
						<Typography color="text.secondary">
							{post[no].address.city}
						</Typography>
					</CardContent>

					<CardActions>
						<Button size="small" onClick={Card2}>View Details</Button>
					</CardActions>
				</Card>
			</div>
		);
	};
	console.log(postno);

	return no < 10 ? post.map(displayCard): null;

	// console.log(pos)
};

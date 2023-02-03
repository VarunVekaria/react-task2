/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./App.css";
import axios from "axios";
import { display } from "@mui/system";
// import { Card2 } from "./Card2";
import { Pagination, Stack } from "@mui/material";
import "./Page.css";

export const Card1 = () => {
	const baseURL = "https://jsonplaceholder.typicode.com/users";

	let [post, setPost] = useState([]);
	const [page, setpage] = useState(1);
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

	useEffect(() => {}, [page]);

	const display = () => {
		return post[0].name;
	};

	let postno = post.length;
	console.log(postno);
	console.log(post);
	let [no, setNo] = useState(0);
	var count = 0;
	var count2 = 0;
	var count3 = page;
	// var c= count3
	count3 = Number(count3);
	count3 = (count3 - 1) * 3;

	function displayCard() {
		{
			count2 = count2 + 1;
			count3 = count3 + 1;
		}

		while (count2 < 4) {
			console.log(count3);

			// console.log(count3);

			return (
				<div>
					<Card sx={{ minWidth: 275 }} className="cardproperty">
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								gutterBottom
							>
								{post[count3].company.name}
							</Typography>
						</CardContent>
						<CardContent>
							<Typography color="text.primary">Contact</Typography>
							<Typography color="text.secondary">
								{post[count3].name}
							</Typography>
						</CardContent>
						<CardContent>
							<Typography color="text.primary">Street</Typography>
							<Typography color="text.secondary">
								{post[count3].address.street}
							</Typography>
						</CardContent>
						<CardContent>
							<Typography color="text.primary"> City</Typography>
							<Typography color="text.secondary">
								{post[count3].address.city}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">View Details</Button>
						</CardActions>
					</Card>
				</div>
			);

			setNo = setNo + 1;
		}
	}
	console.log(postno);
	const handleChange = (page) => {
		Number(page);
		setpage(page);
	};
	return (
		<div>
			{page < 10 ? post.map(displayCard) : null}
			<div className="pageproperty">
				<Pagination
					count={3}
					onChange={(e) => handleChange(e.target.textContent)}
					setpage={setpage}
					page={page}
					nextIconButtonProps={{disabled:true}} and backIconButtonProps={{disabled:true}}
				/>
			</div>
		</div>
	);
};

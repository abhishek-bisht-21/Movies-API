const express = require("express");
const PORT = 8080
const app = express();

const movies = [
	{
		name: "Dhoom",
		year: "2008",
		director: "Yash Raj",
		genre: "Action",
		rate: "9.2"
	},
	{
		name: "Dhoom 2",
		year: "2014",
		director: "Yash Raj",
		genre: "Action",
		rate: "9.2"
	}
]


app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/api/movies", (req, res) => {
	console.log({
		url: req.url,
		header: req.headers,
		body: req.body
	})
	res.send(movies);
});


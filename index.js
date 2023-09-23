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

const logger = (req, res, next) => {
	console.log(`Request received at ${new Date()} on Path ${req.url}`);
	next();
}

app.use(logger);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/api/movies", (req, res) => {
	res.send(movies);
});

app.get("/api/movies/:id", (req, res) => {
	const id = req.params.id;
	res.send(movies[parseInt(id)-1]);
});


const { application } = require("express");
const express = require("express");
const bodyParser = require('body-parser');
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
app.use(bodyParser.json());

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

app.post("/api/movies", (req,res) => {
	const movie = req.body
	movie.id = movies.length + 1;
	movies.push(movie);
	console.log(movies);
	res.send({success: true});
});

app.put("/api/movies/:id", (req,res) => {
	const id  = req.params.id;
	const body = req.body;
	body.id = id;
	movies[id-1] = body;
	console.log(movies);
	res.send({success: true});
});


app.delete("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  movies.splice(id - 1, 1);
  res.send({ success: true });
});

const express = require("express");
const cors = require("cors");
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.use(cors());

// to follow json formatting in req ans res object
app.use(express.json());

app.get("/api", async (req, res) => {
	// mongodb connection
	const client = await MongoClient.connect(
		"mongodb+srv://nidhi:nidhi123@cluster0.krlw5.mongodb.net/admin?retryWrites=true&w=majority",
		{ useUnifiedTopology: true }
	);
	// get database
	const db = client.db("recruitment");

	// get data from collection
	const data = await db.collection("movies").find().toArray();

	// send response back to client
	res.send(data);
});

app.listen(3000, function () {
	console.log("listening on 3000");
});

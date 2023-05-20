const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT || 3000

// Connect to MongoDB database
mongoose
	.connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
	.then(() => {
		const app = express()

		app.listen(PORT, () => {
			console.log("Server has started!")
		})
	})
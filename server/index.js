const express = require("express");
const port = 4000;

const app = express();

app.use(express.json());

// mock data
let users = [
		{
            id: 1,
			username: "mazkazov",
			password: "abc123"
		},
		{
            id: 2,
			username: "nekonic",
			password: "123abc"
		}

]

let conversations = [
    {
        id: 1,
        userIds: [1, 2],
        messages: []
    }
]

let messages = [
    {
        id: 1,
        content: "Privyet, mir!",
        conversation: 1,
        sender: 1,
        receiver: 2,
        dateSent: 12345678
    }
]

app.get("/", (request, response) => {
	response.send("Hello from my first ExpressJSAPI");
	}
)

app.get("/users", (request, response) => {
	response.send("Hello from my first ExpressJSAPI");
	}
)





app.listen(port, () => console.log(`Server is running at port ${port}`));


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

app.get("/greeting", (request, response) => {
	response.send("Hello from B230-Malinao");
	}
)

// retrieval of users in mock database
app.get("/users", (req, res) => {
	res.send(users);
})

app.post("/users" , (request, response) =>{

	let newUser = {
		username: request.body.username,
		password: request.body.password
	}

	users.push(newUser);
	console.log(users);

	response.send(users);
})

app.put("/users/:index", (req,res) => {

	console.log(req.body);

	console.log(req.params); // index: 1
	let index = parseInt(req.params.index); // '1' >> 1

	users[index].username = req.body.username;
	users[index].password = req.body.password;

	res.send(users[index]); 

})

// Delete the last element in an array
app.delete('/users', (req, res) => {
	users.pop();
	res.send(users);
});


//-------------

let items = [
		{
			name: "Mjolnir",
			price: 50000,
			isActive: true
		},
		{
			name: "Vibranium Shield",
			price: 70000,
			isActive: true
		}

]

app.get("/items", (request, response) => {
	response.send(items);
})

    app.post("/items" , (request, response) =>{

        let newItem = {
			name: request.body.name,
			price: request.body.price,
			isActive: request.body.isActive,
        }
    
        items.push(newItem);

        console.log(items);
    
        response.send(items);
    });

app.put("/items/:index", (request, response) => {

	let index = parseInt(request.params.index);

	items[index].price = request.body.price;

	response.send(items[index]); 

});

app.delete("/items/:index", (request, response) => {

	let index = parseInt(request.params.index);

    items = items.filter(item => items.indexOf(item) !== index);

    response.send(items);
});


app.listen(port, () => console.log(`Server is running at port ${port}`));


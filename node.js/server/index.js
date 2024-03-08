const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const port = 8000;

app.use(bodyparser.json());

let users = [];
let counter = 1;

app.get('/testdb', (req, res) => {
  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'yourdb'
  }).then((conn) => {
    // สิ่งนี้เราเรียกกันว่า promise
    conn
    .query('SELECT * FROM users')
    .then((results) => {
      res.json(results[0])
    })
    .catch((error) => {
      console.error('Error fetching users:', error.message)
      res.status(500).json({ error: 'Error fetching users' })
    })
  })
});

// path = GET /users
app.get('/users', (req, res) => {
  const filterUsers = users.map(user => {
    return {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      fullname: user.firstname + ' ' + user.lastname
    }
  });
  res.json(filterUsers)
});

// path = GET /users:id per user info
app.get('/users/:id', (req, res) => {
  let id = req.params.id;

  // find user 
  let selectedIndex = users.findIndex(user => user.id == id);

  res.json(users[selectedIndex]);
});

// path = POST /user
app.post('/users', (req, res) => {
  let user = req.body;
  user.id = counter;
  counter += 1;

  users.push(user);
  res.json({
    message: 'add ok',
    user: user
  });
});

// path = PUT /user/:id
app.put('/users/:id', (req, res) => {
  let id = req.params.id;
  let updateUser = req.body;

  // find user from id recieving
  let selectedIndex = users.findIndex(user => user.id == id);

  // update user
  users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
  users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;
  users[selectedIndex].age = updateUser.age || users[selectedIndex].age;
  users[selectedIndex].gender = updateUser.gender || users[selectedIndex].gender;

  res.json({
    message: 'update user complete!',
    date: {
      user: updateUser,
      indexUpdate: selectedIndex
    }
  });
});

// path = PATCH /user/:id
app.patch('/users/:id', (req, res) => {
  let id = req.params.id;
  let updateUser = req.body;

  // find user from id recieving
  let selectedIndex = users.findIndex(user => user.id == id);

  // update user
  if (updateUser.firstname) {
    users[selectedIndex].firstname = updateUser.firstname
  }

  if (updateUser.lastname) {
    users[selectedIndex].lastname = updateUser.lastname
  }

  if (updateUser.age) {
    users[selectedIndex].age = updateUser.age
  }

  if (updateUser.gender) {
    users[selectedIndex].gender = updateUser.gender
  }
  
  res.json({
    message: 'update user complete!',
    date: {
      user: updateUser,
      indexUpdate: selectedIndex
    }
  });
});

// path DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  let id = req.params.id;

  // find what index need to delete
  let selectedIndex = users.findIndex(user => user.id == id);

  // delete user
  users.splice(selectedIndex, 1);

  res.json({
    message: 'delete complate!',
    indexDeleted: selectedIndex
  });
});

app.listen(port, (req, res) => {
  console.log('http server run at ' + port);
});
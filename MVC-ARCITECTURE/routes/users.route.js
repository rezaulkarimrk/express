app.get('/users', (req, res) => {
    res.send(htmlForm);
});

app.post('/users', (req, res) => {
    const name =  req.body.name;
    const age =  Number(req.body.age);
    const user =  {
        name,
        age
    };

    users.push(user);
    res.status(200).json({
        success: true,
        users,
    });
});
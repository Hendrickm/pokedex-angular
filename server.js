const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/pokedex-angular'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/pokedex-angular/index.html')
});

app.listen(PORT, () => {
    console.log('SERVER STARTED ON PORT ' + PORT)
});

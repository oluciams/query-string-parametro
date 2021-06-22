const express = require('express');
const app = express();


app.get('/user/:nombre', (req, res) => {
    let name = req.params.nombre;
    let nameUpp= name.replace(name.charAt(0), name.charAt(0).toUpperCase())
    if (!name || name.length === 0) {
      name = "desconocido";
    }
  
    res.send(`<h1>Hola ${nameUpp}!</h1>`);
  });
  

  app.listen(3000, () => console.log('Listening on port 3000!'))
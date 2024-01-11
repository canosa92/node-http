const http =require ('node:http')
const dataPagina =require('./data.js')

const server= http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    const html=`<!DOCTYPE html>
    <html>
    <head>
      <title>${dataPagina.title}</title>
      <style>
      * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      font-family: system-ui, sans-serif;
      color: black;
    }
    #cabecera {
      font-weight: bold;
      padding: 10px;
      text-align: center;
      background-color: #eee;
    }
    #cabecera h1 {
      font-size: 2rem;
      text-decoration: underline;
      margin: 10px 10px 10px -10px;
    }
    #cabecera h2 {
      font-size: 1rem;
      margin: -10px 10px 10px 10px;
      font-style: italic;
    }
    p {
      text-align: center;
      margin: 20px 250px;
    }
    </style>
    </head>
    <body>
    <div id="cabecera">
      <h1>${dataPagina.title}</h1>
      <h2>${dataPagina.subtitle}</h2>
    </div>
    <p>${dataPagina.description}</p>
  </body>
    </html>
  `;

  res.end(html)
})


server.listen(0, () => {
    console.log(`Servidor corriendo en http://localhost:${server.address().port}`);
  });
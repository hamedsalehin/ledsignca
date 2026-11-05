const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // If it's a huge HTML file, just save it
    require('fs').writeFileSync('error.html', data);
    console.log("Status Code:", res.statusCode);
    console.log("Saved response to error.html");
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

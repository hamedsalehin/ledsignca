const { spawn } = require('child_process');
const http = require('http');

console.log("Starting next dev on port 3001...");
const nextDev = spawn('npm', ['run', 'dev', '--', '-p', '3001'], {
  cwd: 'c:\\Users\\eskan\\OneDrive\\Desktop\\nod js\\nano-signs',
  shell: true
});

nextDev.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(`[STDOUT] ${output}`);
  
  // Wait until it's ready
  if (output.includes('Ready in') || output.includes('started server on') || output.includes('Local:')) {
    console.log("Server is ready, fetching index...");
    setTimeout(() => {
        http.get('http://localhost:3001', (res) => {
          console.log(`Fetch returned status ${res.statusCode}`);
          setTimeout(() => {
            nextDev.kill();
            process.exit(0);
          }, 2000);
        }).on('error', (err) => {
          console.log("Fetch error:", err.message);
        });
    }, 1000);
  }
});

nextDev.stderr.on('data', (data) => {
  console.log(`[STDERR] ${data.toString()}`);
});

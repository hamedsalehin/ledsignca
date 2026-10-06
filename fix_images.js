const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'src', 'content', 'blog');
let fixedCount = 0;

if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir);
  
  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = path.join(blogDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      const originalContent = content;
      
      // Replace absolute and relative paths
      content = content.replace(/https?:\/\/led-sign\.ca\/wp-content\/uploads\//g, '/uploads/');
      content = content.replace(/\/wp-content\/uploads\//g, '/uploads/');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        fixedCount++;
      }
    }
  }
}

console.log(`Successfully fixed image paths in ${fixedCount} files.`);

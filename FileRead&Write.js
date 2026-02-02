const fs = require('fs');
// Read file asynchronously
fs.readFile('input.txt', 'utf8', (err, data) => {
   if (err) {
       console.error('Error reading file:', err);
       return;
   }
   const upperText = data.toUpperCase();
   // Write transformed content to a new file
   fs.writeFile('output.txt', upperText, 'utf8', (err) => {
       if (err) {
           console.error('Error writing file:', err);
           return;
       }
       console.log('File written successfully!');
   });
});
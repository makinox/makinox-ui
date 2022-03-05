const fs = require('fs');

const files = ['./dist/colors', './dist/cleaner.d.ts'];

fs.rmdir('./dist/stories', { recursive: true, force: true }, (err) => {
  if (err) return console.error('An error occurred in deleting directory', err);
  console.info('Directory deleted successfully');
});

files.forEach((file) => {
  fs.rm(file, { force: true }, (err) => {
    if (err) return console.error('An error occurred in deleting the file', err);
    console.info('File deleted successfully');
  });
});

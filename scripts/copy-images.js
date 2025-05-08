const fs = require('fs');
const path = require('path');

// Paths
const sourceDir = path.join(__dirname, '..', 'img');
const targetDir = path.join(__dirname, '..', 'public', 'img');

// Create directories if they don't exist
if (!fs.existsSync(path.join(__dirname, '..'))) {
  fs.mkdirSync(path.join(__dirname, '..'));
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

if (!fs.existsSync(path.join(targetDir, 'reviews'))) {
  fs.mkdirSync(path.join(targetDir, 'reviews'), { recursive: true });
}

// Copy function
function copyFiles(source, target) {
  // Get all files in source directory
  const files = fs.readdirSync(source);
  
  // Process each file
  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);
    
    // Check if it's a directory
    if (fs.statSync(sourcePath).isDirectory()) {
      // Create directory if it doesn't exist
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }
      
      // Recursively copy files from subdirectory
      copyFiles(sourcePath, targetPath);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied: ${sourcePath} -> ${targetPath}`);
    }
  });
}

// Start copying
try {
  copyFiles(sourceDir, targetDir);
  console.log('All images copied successfully!');
} catch (error) {
  console.error('Error copying images:', error);
}

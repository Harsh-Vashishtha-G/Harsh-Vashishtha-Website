const fs = require('fs');
const path = require('path');

const files = [
  'src/app/services/ai-development/page.tsx',
  'src/app/services/web-development/page.tsx',
  'src/app/services/cloud-infrastructure/page.tsx',
  'src/app/services/saas-building/page.tsx'
];

for (const file of files) {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // The outer div currently has style={{ minHeight: '80vh', paddingTop: '8rem', maxWidth: '1000px', margin: '0 auto' }}
  // We want to add paddingBottom: '8rem' or '10rem' to create more space before the footer.
  content = content.replace(
    /style=\{\{ minHeight: '80vh', paddingTop: '8rem', maxWidth: '1000px', margin: '0 auto' \}\}/,
    `style={{ minHeight: '80vh', paddingTop: '8rem', paddingBottom: '8rem', maxWidth: '1000px', margin: '0 auto' }}`
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated spacing in ${file}`);
}

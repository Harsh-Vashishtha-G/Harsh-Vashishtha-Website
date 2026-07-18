import os
import re

html_files = [
    ('index.html', 'page.tsx', ''),
    ('about.html', 'page.tsx', 'about'),
    ('projects.html', 'page.tsx', 'projects'),
    ('services.html', 'page.tsx', 'services'),
    ('skills.html', 'page.tsx', 'skills'),
    ('contact.html', 'page.tsx', 'contact')
]

for html_file, tsx_file, folder in html_files:
    if not os.path.exists(html_file):
        continue
        
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract body content (very basic, we just want to grab the main stuff and put it in the component)
    # Actually, we can just grab everything inside <body> and </body>
    body_match = re.search(r'<body>(.*?)</body>', content, re.DOTALL | re.IGNORECASE)
    if not body_match:
        continue
        
    body_content = body_match.group(1)
    
    # Simple HTML to JSX conversions
    body_content = body_content.replace('class=', 'className=')
    body_content = body_content.replace('for=', 'htmlFor=')
    body_content = body_content.replace('<!--', '{/*')
    body_content = body_content.replace('-->', '*/}')
    
    # Self close tags (very naive but works for standard templates usually, or we can use a library if this fails)
    body_content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1/>', body_content)
    body_content = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1/>', body_content)
    body_content = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1/>', body_content)
    body_content = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1/>', body_content)
    body_content = re.sub(r'style="([^"]*)"', '', body_content) # Strip inline styles for simplicity as they break JSX easily unless converted to objects
    
    # Wrap in a Next.js component
    component_name = "Page"
    
    jsx_content = f"""
import Link from 'next/link';

export default function {component_name}() {{
  return (
    <>
      <link rel="stylesheet" href="/css/style.css" />
      <link href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      {body_content}
    </>
  );
}}
"""
    
    # Save the file
    target_dir = os.path.join('nextjs-portfolio', 'src', 'app', folder)
    os.makedirs(target_dir, exist_ok=True)
    target_path = os.path.join(target_dir, tsx_file)
    
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(jsx_content.strip() + '\n')
        
    print(f"Converted {html_file} -> {target_path}")


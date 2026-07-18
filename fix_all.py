import os
import re

app_dir = 'nextjs-portfolio/src/app'

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx') and file != 'layout.tsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            
            # Replace script
            new_content = new_content.replace('<script src="/js/main.js"></script>', '<Script src="/js/main.js" strategy="lazyOnload" />')
            
            # Replace <a> with <Link> 
            new_content = re.sub(r'<a\s+href="([^"]+)"([^>]*)>', r'<Link href="\1"\2>', new_content)
            new_content = re.sub(r'<a\s+className="([^"]+)"\s+href="([^"]+)"([^>]*)>', r'<Link className="\1" href="\2"\3>', new_content)
            new_content = re.sub(r'</a>', r'</Link>', new_content)

            # Add imports
            if '<Link' in new_content and 'import Link from' not in new_content:
                new_content = 'import Link from "next/link";\n' + new_content
            
            if '<Script' in new_content and 'import Script from' not in new_content:
                new_content = 'import Script from "next/script";\n' + new_content
                
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Fixed {filepath}')

# Specific fixes for unescaped entities
def escape_entities(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

escape_entities('nextjs-portfolio/src/app/page.tsx', [
    ("let's", "let&apos;s"),
    ("I'm", "I&apos;m"),
    ("don't", "don&apos;t"),
    ("It's", "It&apos;s"),
    ("we're", "we&apos;re"),
    ('className="text-4xl"', 'className="text-4xl"'), # dummy
])

escape_entities('nextjs-portfolio/src/app/contact/page.tsx', [
    ("let's", "let&apos;s"),
    ("I'm", "I&apos;m"),
    ("don't", "don&apos;t"),
    ("It's", "It&apos;s"),
    ("we're", "we&apos;re"),
])

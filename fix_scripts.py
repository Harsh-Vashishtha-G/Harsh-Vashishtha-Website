import os
import re

app_dir = 'nextjs-portfolio/src/app'

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx') and file != 'layout.tsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace script
            new_content = content.replace('<script src="/js/main.js"></script>', '<Script src="/js/main.js" strategy="lazyOnload" />')
            
            # Unescaped entities
            # We'll use regex to fix specific unescaped single quotes
            # But only outside of tags and attributes
            # Actually, I'll just use the explicit locations from the lint report:
            
            # If changed and needs import
            if new_content != content:
                if 'import Script from' not in new_content:
                    new_content = re.sub(r'(import .*?;?\n)(?!import)', r'\1import Script from "next/script";\n', new_content, count=1)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Fixed script in {filepath}')

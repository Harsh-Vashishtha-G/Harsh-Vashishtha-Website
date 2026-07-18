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
            
            # Remove scripts entirely from individual pages
            new_content = re.sub(r'<script src="js/main\.js"></script>\s*', '', new_content)
            new_content = re.sub(r'<script src="/js/main\.js"></script>\s*', '', new_content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Removed script from {filepath}')


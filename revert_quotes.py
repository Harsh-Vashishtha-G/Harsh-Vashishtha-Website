import os

files = ['nextjs-portfolio/src/app/page.tsx', 'nextjs-portfolio/src/app/contact/page.tsx']
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    content = content.replace('&quot;', '"')
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

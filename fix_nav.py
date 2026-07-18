import os
import re

directory = r'nextjs-portfolio\src\app'

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # Fix HTML links to absolute paths
            content = content.replace('href="index.html"', 'href="/"')
            content = content.replace('href="about.html"', 'href="/about"')
            content = content.replace('href="projects.html"', 'href="/projects"')
            content = content.replace('href="services.html"', 'href="/services"')
            content = content.replace('href="skills.html"', 'href="/skills"')
            content = content.replace('href="contact.html"', 'href="/contact"')

            # Add Newsletter to Nav
            nav_item = '<li><a href="/contact">Contact</a></li>'
            nav_item_with_newsletter = '<li><a href="/contact">Contact</a></li>\n    <li><a href="/newsletter" style={{color: "#2563eb", fontWeight: "bold"}}>Newsletter</a></li>'
            
            if nav_item in content and '/newsletter' not in content[:content.find(nav_item)+100]:
                content = content.replace(nav_item, nav_item_with_newsletter)

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
                
print("Fixed navigation links and added Newsletter.")

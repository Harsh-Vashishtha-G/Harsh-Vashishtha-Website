import os
import re

def remove_tags(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove NAV comment and tag
    content = re.sub(r'\{/\* NAV \*/\}\s*<nav>.*?</nav>\s*', '', content, flags=re.DOTALL)
    # Remove nav if comment is missing
    content = re.sub(r'<nav>.*?</nav>\s*', '', content, flags=re.DOTALL)
    
    # Remove mobile menu
    content = re.sub(r'<div className="mobile-menu".*?</div>\s*', '', content, flags=re.DOTALL)
    
    # Remove FOOTER comment and tag
    content = re.sub(r'\{/\* FOOTER \*/\}\s*<footer>.*?</footer>\s*', '', content, flags=re.DOTALL)
    content = re.sub(r'<footer>.*?</footer>\s*', '', content, flags=re.DOTALL)
    
    # Remove SCROLL TO TOP comment and tag
    content = re.sub(r'\{/\* SCROLL TO TOP \*/\}\s*<button className="scroll-top".*?</button>\s*', '', content, flags=re.DOTALL)
    content = re.sub(r'<button className="scroll-top".*?</button>\s*', '', content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Processed {filepath}")

app_dir = os.path.join("src", "app")
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file == "page.tsx":
            filepath = os.path.join(root, file)
            remove_tags(filepath)

print("Done.")

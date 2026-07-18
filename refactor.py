import os
import re

app_dir = 'nextjs-portfolio/src/app'

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. Replace <a> with <Link> for internal links, but leave external links alone or change them to target="_blank"
    # Actually, Next.js <Link> is fine for external links too, but let's replace all <a> that don't have href="mailto:" or href="https://" with <Link>
    # Wait, the lint error says "Do not use an <a> element to navigate to '/'. Use <Link />"
    # So we should replace all <a href="/..."> with <Link href="/...">
    
    # Simple regex to replace internal <a href="/something"> to <Link href="/something">
    content = re.sub(r'<a (\s*[^>]*?)href="(/[^"]*)"([^>]*)>', r'<Link \1href="\2"\3>', content)
    
    # We must also replace the closing </a> for those!
    # Wait, doing this with regex for just internal links is hard because closing tags </a> don't know if they were internal.
    # Instead, let's replace ALL <a> with <Link> (Next.js Link handles external links fine in newer versions).
    content = re.sub(r'<a\s+href="([^"]+)"([^>]*)>', r'<Link href="\1"\2>', content)
    content = re.sub(r'<a\s+className="([^"]+)"\s+href="([^"]+)"([^>]*)>', r'<Link className="\1" href="\2"\3>', content)
    content = re.sub(r'</a>', r'</Link>', content)

    # Revert specific non-link things like anchors maybe?
    # If the user has <a class="nav-cta" href="mailto:..."> it becomes <Link href="mailto:..."> which is valid.

    # 2. Add imports if needed
    if '<Link' in content and 'import Link from' not in content:
        # Add after the last import
        content = re.sub(r'(import .*?;?\n)(?!import)', r'\1import Link from "next/link";\n', content, count=1)
    
    # 3. Replace <script> with <Script>
    if '<script src="/js/main.js"' in content:
        content = re.sub(r'<script src="/js/main.js"(?!>).*?</script>', r'<Script src="/js/main.js" strategy="lazyOnload" />', content)
        if 'import Script from "next/script"' not in content:
            content = re.sub(r'(import .*?;?\n)(?!import)', r'\1import Script from "next/script";\n', content, count=1)

    # 4. Remove stylesheets (we'll add them to layout.tsx)
    content = re.sub(r'<link rel="stylesheet" href="/css/style.css" />\s*', '', content)
    content = re.sub(r'<link href="https://cdn\.jsdelivr\.net/npm/boxicons.*?rel="stylesheet" />\s*', '', content)

    # 5. Fix unescaped entities
    # It's tricky to fix text via regex without breaking code.
    # I will manually fix contact/page.tsx and page.tsx later if the script fails to handle it perfectly.

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx') and file != 'layout.tsx':
            fix_file(os.path.join(root, file))

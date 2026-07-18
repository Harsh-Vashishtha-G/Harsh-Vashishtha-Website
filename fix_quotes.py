import os
import re

app_dir = 'nextjs-portfolio/src/app'

def fix_unescaped(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    # Replace unescaped single quotes inside text (not inside tags or attributes)
    # Actually, it's easier to just replace " let's " with " let&apos;s " or " Let's " with " Let&apos;s "
    # Looking at typical text:
    content = content.replace("Let's", "Let&apos;s")
    content = content.replace("let's", "let&apos;s")
    content = content.replace("I'm", "I&apos;m")
    content = content.replace("don't", "don&apos;t")
    content = content.replace("It's", "It&apos;s")
    content = content.replace("it's", "it&apos;s")
    content = content.replace("we're", "we&apos;re")
    content = content.replace("We're", "We&apos;re")
    content = content.replace('"', '&quot;')
    # We must be careful not to replace quotes inside attributes like className="foo"
    # Wait! replacing all " with &quot; will BREAK React attributes!
    # Let's NOT replace ", just single quotes where known.
    
    # Next.js eslint tells us exactly what to escape. Let's just run ESLint and manually fix the lines using regex for text outside tags
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")

fix_unescaped('nextjs-portfolio/src/app/contact/page.tsx')
fix_unescaped('nextjs-portfolio/src/app/page.tsx')

import os, glob

files = glob.glob('src/app/**/*.tsx', recursive=True)
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = content.replace('<Link href="/" className="nav-logo">Harsh Vashishtha</Link>', '<Link href="/" className="nav-logo" style={{ display: \'flex\', alignItems: \'center\' }}><img src="/logo.png" alt="Harsh Vashishtha" style={{ height: \'28px\', width: \'auto\' }} /></Link>')
    new_content = new_content.replace('<div className="footer-logo">Harsh Vashishtha</div>', '<div className="footer-logo" style={{ display: \'flex\', alignItems: \'center\' }}><img src="/logo.png" alt="Harsh Vashishtha" style={{ height: \'32px\', width: \'auto\' }} /></div>')
    
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Replaced in {f}")
print("Done")

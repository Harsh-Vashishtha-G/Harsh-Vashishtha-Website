import glob, os

html_files = glob.glob('*.html')
for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # 1. Add to Connect section
    target1 = '<li><a href="https://linkedin.com/in/theharshvashishtha" target="_blank" rel="noopener">LinkedIn</a></li>'
    replacement1 = target1 + '\n        <li><a href="https://www.linkedin.com/newsletters/the-intelligent-edge-7093083002045423617/" target="_blank" rel="noopener">Newsletter</a></li>'
    if target1 in content and replacement1 not in content:
        content = content.replace(target1, replacement1)

    # 2. Add to Contact Section (index.html, contact.html)
    target2_index = '<a class="contact-link" href="https://haqikos.com" target="_blank" rel="noopener"><i class="ti ti-world"></i> haqikos.com</a>'
    replacement2_index = target2_index + '\n    <a class="contact-link" href="https://www.linkedin.com/newsletters/the-intelligent-edge-7093083002045423617/" target="_blank" rel="noopener"><i class="ti ti-news"></i> The Intelligent Edge (Newsletter)</a>'
    if target2_index in content and 'The Intelligent Edge (Newsletter)' not in content:
        content = content.replace(target2_index, replacement2_index)
        
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print('Updated HTML files')

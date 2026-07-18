import os
import re

for f in os.listdir('.'):
    if f.endswith('.html'):
        text = open(f, 'r', encoding='utf-8').read()
        
        # Replace the main Hero button
        text = re.sub(
            r'<a class="btn-dark" href="[^"]*".*?><i class="ti ti-download"></i> Resume</a>',
            '<a class="btn-dark" href="/assets/resume/Harsh%20Vashishtha%20-%20Resume.pdf" target="_blank" rel="noopener" download="Harsh_Vashishtha_Resume.pdf"><i class="ti ti-download"></i> Resume</a>',
            text
        )
        
        # Replace the footer links
        text = re.sub(
            r'<li><a href="[^"]*".*?>Download Resume</a></li>',
            '<li><a href="/assets/resume/Harsh%20Vashishtha%20-%20Resume.pdf" target="_blank" rel="noopener" download="Harsh_Vashishtha_Resume.pdf">Download Resume</a></li>',
            text
        )
        
        open(f, 'w', encoding='utf-8').write(text)
print("Real resume linked with download attributes!")

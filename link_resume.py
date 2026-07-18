import os
for f in os.listdir('.'):
    if f.endswith('.html'):
        text = open(f, 'r', encoding='utf-8').read()
        text = text.replace('href="assets/resume/Harsh Vashishtha - Resume.pdf"><i class="ti ti-download"></i> Resume</a>', 'href="/assets/resume/harsh-resume.pdf" target="_blank" rel="noopener"><i class="ti ti-download"></i> Resume</a>')
        text = text.replace('href="assets/resume/Harsh Vashishtha - Resume.pdf">Download Resume</a>', 'href="/assets/resume/harsh-resume.pdf" target="_blank" rel="noopener">Download Resume</a>')
        open(f, 'w', encoding='utf-8').write(text)
print("done")

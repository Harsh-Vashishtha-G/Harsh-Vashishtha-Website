import os
import re

dir_path = "."

for filename in os.listdir(dir_path):
    if filename.endswith(".html"):
        filepath = os.path.join(dir_path, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Update all generic mailto links to personal email
        content = re.sub(r'href="mailto:[^"]+"', r'href="mailto:vashishthaharsh97@gmail.com"', content)
        
        # Replace displayed email text
        content = re.sub(r'>\s*harsh@haqikos\.com\s*<', '> vashishthaharsh97@gmail.com <', content)
        # Handle the one they manually updated
        content = re.sub(r'>\s*vashishthaharsh97@gmail\.com\s*<', '> vashishthaharsh97@gmail.com <', content)

        # Update GitHub links
        content = re.sub(r'href="https://github\.com/harshvashishtha"', r'href="https://github.com/Harsh-Vashishtha-G"', content)
        content = re.sub(r'href="https://github\.com/Harsh-Vashishtha-G"', r'href="https://github.com/Harsh-Vashishtha-G"', content) # in case already updated
        content = re.sub(r'>\s*github\.com/harshvashishtha\s*<', '> github.com/Harsh-Vashishtha-G <', content)

        # Update YouTube links
        # Currently it is youtube.com/@TheHarshVashishtha which is already correct, but just to be sure:
        content = re.sub(r'href="https://youtube\.com/@TheHarshVashishtha"', r'href="https://youtube.com/@TheHarshVashishtha"', content)

        # Update X (Twitter) links
        content = re.sub(r'href="https://twitter\.com/harsh_qia"', r'href="https://x.com/TheHVashishtha"', content)
        content = re.sub(r'href="https://twitter\.com/TheHVashishtha"', r'href="https://x.com/TheHVashishtha"', content)
        
        # Update X title
        content = re.sub(r'title="Twitter/X"', r'title="X"', content)

        # Update LinkedIn display text to match URL they manually updated in index
        content = re.sub(r'>\s*linkedin\.com/in/harshvashishtha\s*<', '> linkedin.com/in/theharshvashishtha <', content)
        content = re.sub(r'href="https://linkedin\.com/in/harshvashishtha"', r'href="https://linkedin.com/in/theharshvashishtha"', content)

        # Add Haqikos company email to contact section
        # Look for Haqikos link and append the email link
        haqikos_link = r'<a class="contact-link" href="https://haqikos.com" target="_blank" rel="noopener"><i class="ti ti-world"></i> haqikos.com</a>'
        haqikos_email_link = r'<a class="contact-link" href="mailto:haqikos.ai@gmail.com"><i class="ti ti-mail"></i> haqikos.ai@gmail.com (Haqikos)</a>'
        
        if haqikos_link in content and haqikos_email_link not in content:
            content = content.replace(haqikos_link, f'{haqikos_link}\n    {haqikos_email_link}')

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Updates complete.")

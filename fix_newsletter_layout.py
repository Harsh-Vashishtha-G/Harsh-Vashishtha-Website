import os

# Read page.tsx
with open('nextjs-portfolio/src/app/page.tsx', 'r', encoding='utf-8') as f:
    page_content = f.read()

# Extract links and nav
start_nav = page_content.find('<link rel="stylesheet"')
end_nav = page_content.find('</nav>') + 6
mobile_menu_start = page_content.find('<div className="mobile-menu"')
mobile_menu_end = page_content.find('</div>', mobile_menu_start) + 6
nav_html = page_content[start_nav:end_nav] + '\n' + page_content[mobile_menu_start:mobile_menu_end]

# Extract footer and scroll to top
start_footer = page_content.find('<footer>')
end_footer = page_content.find('</script>') + 9
footer_html = page_content[start_footer:end_footer]

# Process newsletter page
newsletter_path = 'nextjs-portfolio/src/app/newsletter/page.tsx'
with open(newsletter_path, 'r', encoding='utf-8') as f:
    newsletter_content = f.read()

# Replace nav
n_start_nav = newsletter_content.find('<nav className=')
n_end_nav = newsletter_content.find('</nav>') + 6
newsletter_content = newsletter_content[:n_start_nav] + nav_html + newsletter_content[n_end_nav:]

# Replace footer
n_start_footer = newsletter_content.find('<footer')
n_end_footer = newsletter_content.find('</footer>') + 9
newsletter_content = newsletter_content[:n_start_footer] + footer_html + newsletter_content[n_end_footer:]

with open(newsletter_path, 'w', encoding='utf-8') as f:
    f.write(newsletter_content)

print("Updated newsletter layout!")

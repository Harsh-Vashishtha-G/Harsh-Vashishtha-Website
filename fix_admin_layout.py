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

# Process admin page
admin_path = 'nextjs-portfolio/src/app/admin/page.tsx'
with open(admin_path, 'r', encoding='utf-8') as f:
    admin_content = f.read()

# Replace nav
n_start_nav = admin_content.find('<nav className=')
n_end_nav = admin_content.find('</nav>') + 6
admin_content = admin_content[:n_start_nav] + nav_html + admin_content[n_end_nav:]

# Replace footer
n_start_footer = admin_content.find('<footer')
n_end_footer = admin_content.find('</footer>') + 9
admin_content = admin_content[:n_start_footer] + footer_html + admin_content[n_end_footer:]

with open(admin_path, 'w', encoding='utf-8') as f:
    f.write(admin_content)

print("Updated admin layout!")

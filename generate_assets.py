import os
import re
from PIL import Image, ImageDraw, ImageFont
from fpdf import FPDF

# Paths
BASE_DIR = r"d:\Harsh Vashishtha\Harsh Vashishtha Website"
ASSETS_DIR = os.path.join(BASE_DIR, "assets")
IMG_DIR = os.path.join(ASSETS_DIR, "images")
RESUME_DIR = os.path.join(ASSETS_DIR, "resume")

os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(RESUME_DIR, exist_ok=True)

# ---------------------------------------------------------
# 1. GENERATE IMAGES (PIL)
# ---------------------------------------------------------
def create_image(size, bg_color, text, text_color, filename, is_ico=False, font_scale=0.5):
    img = Image.new('RGB', size, color=bg_color)
    d = ImageDraw.Draw(img)
    
    # Try to load a nice font, fallback to default
    try:
        # Windows default serif
        font = ImageFont.truetype("georgia.ttf", int(size[1] * font_scale))
    except:
        font = ImageFont.load_default()

    # Get text bounding box
    bbox = d.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    
    # Center text
    x = (size[0] - text_w) / 2
    y = (size[1] - text_h) / 2 - (bbox[1]) # adjust for offset
    
    d.text((x, y), text, font=font, fill=text_color)
    
    if is_ico:
        img.save(os.path.join(BASE_DIR, filename), format='ICO')
    else:
        # Check if root or assets based on path
        if "/" in filename or "\\" in filename:
            img.save(os.path.join(BASE_DIR, filename))
        else:
            img.save(os.path.join(BASE_DIR, filename))

# Favicons (Clean, minimal "H" on white)
create_image((32, 32), (255, 255, 255), "H", (0, 0, 0), "favicon.ico", is_ico=True, font_scale=0.7)
create_image((32, 32), (255, 255, 255), "H", (0, 0, 0), "favicon.png", font_scale=0.7)
create_image((180, 180), (255, 255, 255), "H", (0, 0, 0), "apple-touch-icon.png", font_scale=0.7)

# Profile (400x400 - dark bg, white initials "HV")
create_image((400, 400), (10, 10, 10), "HV", (255, 255, 255), r"assets\images\profile.jpg", font_scale=0.4)

# Haqikos Logo (Transparent bg, "Haqikos")
# Wait, JPEG doesn't support transparency, PNG does. 
logo_img = Image.new('RGBA', (300, 100), color=(255, 255, 255, 0))
d = ImageDraw.Draw(logo_img)
try:
    font = ImageFont.truetype("arialbd.ttf", 40)
except:
    font = ImageFont.load_default()
d.text((10, 25), "Haqikos", font=font, fill=(0, 0, 0, 255))
logo_img.save(os.path.join(IMG_DIR, "haqikos-logo.png"))

# OG Image (1200x630 - Dark background, text)
og_img = Image.new('RGB', (1200, 630), color=(10, 10, 10))
d = ImageDraw.Draw(og_img)
try:
    font_large = ImageFont.truetype("georgia.ttf", 90)
    font_small = ImageFont.truetype("arial.ttf", 40)
except:
    font_large = ImageFont.load_default()
    font_small = ImageFont.load_default()

d.text((100, 200), "Harsh Vashishtha", font=font_large, fill=(255, 255, 255))
d.text((100, 320), "AI Developer & Founder of Haqikos", font=font_small, fill=(180, 180, 180))
d.text((100, 500), "haqikos.com", font=font_small, fill=(100, 100, 100))
og_img.save(os.path.join(IMG_DIR, "og-image.png"))

print("Images generated.")

# ---------------------------------------------------------
# 2. GENERATE RESUME PDF (fpdf2)
# ---------------------------------------------------------
pdf = FPDF()
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.set_text_color(0, 0, 0)

# HELPER
def add_section(title, body=""):
    pdf.set_font("helvetica", "B", 12)
    pdf.cell(0, 8, title, ln=True)
    pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 190, pdf.get_y())
    pdf.ln(3)
    if body:
        pdf.set_font("helvetica", "", 10)
        pdf.multi_cell(0, 6, body)
        pdf.ln(5)

# HEADER
pdf.set_font("helvetica", "B", 24)
pdf.cell(0, 10, "HARSH VASHISHTHA", ln=True, align="C")
pdf.set_font("helvetica", "", 12)
pdf.cell(0, 8, "AI Developer · Founder, Haqikos · Jaipur, India", ln=True, align="C")
pdf.set_font("helvetica", "I", 10)
pdf.cell(0, 6, "harsh@haqikos.com | linkedin.com/in/theharshvashishtha | github.com/Harsh-Vashishtha-G | haqikos.com", ln=True, align="C")
pdf.ln(10)

# SUMMARY
add_section("SUMMARY", "AI developer and founder of Haqikos, an Indian AI technology company. Specializing in LLM integration, AI agents, React.js, Next.js, and full-stack SaaS development. MCA final semester student specializing in AI & ML at Lovely Professional University.")

# EXPERIENCE
pdf.set_font("helvetica", "B", 12)
pdf.cell(0, 8, "EXPERIENCE", ln=True)
pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 190, pdf.get_y())
pdf.ln(3)

pdf.set_font("helvetica", "B", 10)
pdf.cell(0, 6, "Founder & AI Developer — Haqikos (2024–Present)", ln=True)
pdf.set_font("helvetica", "", 10)
exp_text = ("- Built QIA: Perplexity-style AI answer engine using Claude API, Tavily, React.js, Firebase\n"
            "- Built Gearist: 24-tool AI SaaS platform with Next.js 14, Supabase, Razorpay integration\n"
            "- Built PayQIA: Personal finance PWA for Indian users with AI assistant and Supabase backend")
pdf.multi_cell(0, 6, exp_text)
pdf.ln(5)

# EDUCATION
pdf.set_font("helvetica", "B", 12)
pdf.cell(0, 8, "EDUCATION", ln=True)
pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 190, pdf.get_y())
pdf.ln(3)

pdf.set_font("helvetica", "B", 10)
pdf.cell(0, 6, "MCA — AI & ML Specialization", ln=True)
pdf.set_font("helvetica", "", 10)
pdf.cell(0, 6, "Lovely Professional University (2024–2026) | Online Mode | Final Semester", ln=True)
pdf.ln(5)

# SKILLS
add_section("SKILLS", "React.js · Next.js 14 · TypeScript · Python · Flask · TensorFlow · Claude API · Supabase · Firebase · Razorpay · Vercel · MySQL · Redis · Tailwind CSS · Prompt Engineering · PWA")

# PROJECTS
add_section("PROJECTS", "QIA | Gearist | PayQIA | Q-Verse")

pdf.output(os.path.join(RESUME_DIR, "harsh-resume.pdf"))
print("PDF generated.")

# ---------------------------------------------------------
# 3. UPDATE HTML FILES (SEO Tags & Favicon)
# ---------------------------------------------------------
seo_tags = """
  <!-- Favicons -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <!-- Primary Meta -->
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#ffffff">
  
  <!-- Open Graph -->
  <meta property="og:image" content="/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Harsh Vashishtha">
  <meta property="og:locale" content="en_IN">
  
  <!-- Twitter Card SEO -->
  <meta name="twitter:site" content="@TheHVashishtha">
  <meta name="twitter:image" content="/assets/images/og-image.png">
"""

for filename in os.listdir(BASE_DIR):
    if filename.endswith(".html"):
        filepath = os.path.join(BASE_DIR, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Skip if already added
        if 'href="/favicon.ico"' not in content:
            # Insert before </head>
            content = content.replace("</head>", seo_tags + "</head>")
            
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)

print("HTML files updated with SEO tags.")

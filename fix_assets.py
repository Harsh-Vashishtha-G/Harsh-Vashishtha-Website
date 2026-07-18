import os
from fpdf import FPDF
from fpdf.enums import XPos, YPos

# Paths
BASE_DIR = r"d:\Harsh Vashishtha\Harsh Vashishtha Website"
ASSETS_DIR = os.path.join(BASE_DIR, "assets")
RESUME_DIR = os.path.join(ASSETS_DIR, "resume")

os.makedirs(RESUME_DIR, exist_ok=True)

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
    pdf.cell(0, 8, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 190, pdf.get_y())
    pdf.ln(3)
    if body:
        pdf.set_font("helvetica", "", 10)
        pdf.multi_cell(0, 6, body)
        pdf.ln(5)

# HEADER
pdf.set_font("helvetica", "B", 24)
pdf.cell(0, 10, "HARSH VASHISHTHA", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")
pdf.set_font("helvetica", "", 12)
pdf.cell(0, 8, "AI Developer . Founder, Haqikos . Jaipur, India", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")
pdf.set_font("helvetica", "I", 10)
pdf.cell(0, 6, "harsh@haqikos.com | linkedin.com/in/theharshvashishtha | github.com/Harsh-Vashishtha-G | haqikos.com", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")
pdf.ln(10)

# SUMMARY
add_section("SUMMARY", "AI developer and founder of Haqikos, an Indian AI technology company. Specializing in LLM integration, AI agents, React.js, Next.js, and full-stack SaaS development. MCA final semester student specializing in AI & ML at Lovely Professional University.")

# EXPERIENCE
pdf.set_font("helvetica", "B", 12)
pdf.cell(0, 8, "EXPERIENCE", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 190, pdf.get_y())
pdf.ln(3)

pdf.set_font("helvetica", "B", 10)
# Replaced dashes with regular hyphen to avoid latin-1 encode error
pdf.cell(0, 6, "Founder & AI Developer - Haqikos (2024-Present)", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("helvetica", "", 10)
exp_text = ("- Built QIA: Perplexity-style AI answer engine using Claude API, Tavily, React.js, Firebase\n"
            "- Built Gearist: 24-tool AI SaaS platform with Next.js 14, Supabase, Razorpay integration\n"
            "- Built PayQIA: Personal finance PWA for Indian users with AI assistant and Supabase backend")
pdf.multi_cell(0, 6, exp_text)
pdf.ln(5)

# EDUCATION
pdf.set_font("helvetica", "B", 12)
pdf.cell(0, 8, "EDUCATION", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 190, pdf.get_y())
pdf.ln(3)

pdf.set_font("helvetica", "B", 10)
pdf.cell(0, 6, "MCA - AI & ML Specialization", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("helvetica", "", 10)
pdf.cell(0, 6, "Lovely Professional University (2024-2026) | Online Mode | Final Semester", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.ln(5)

# SKILLS
add_section("SKILLS", "React.js . Next.js 14 . TypeScript . Python . Flask . TensorFlow . Claude API . Supabase . Firebase . Razorpay . Vercel . MySQL . Redis . Tailwind CSS . Prompt Engineering . PWA")

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

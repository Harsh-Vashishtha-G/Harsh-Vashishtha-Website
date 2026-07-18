Set-Location -Path "D:\Harsh Vashishtha\Harsh Vashishtha Website"

Write-Output "Installing Vercel CLI..."
npm install -g vercel --no-fund

Write-Output "Logging into Vercel..."
vercel login

Write-Output "Deploying to Vercel..."
vercel --prod

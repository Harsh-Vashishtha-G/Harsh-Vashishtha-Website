Set-Location -Path 'd:\Harsh Vashishtha\Harsh Vashishtha Website'
Get-Content -Path 'out.txt' | Set-Content -Path 'out_utf8.txt' -Encoding utf8

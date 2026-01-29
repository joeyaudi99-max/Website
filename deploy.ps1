# Easy Deployment Script for React Portfolio

# Build the React app
Write-Host "Building React app..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful!" -ForegroundColor Green
    
    # Copy built files to root
    Write-Host "Copying built files to root..." -ForegroundColor Cyan
    Get-ChildItem "build" | ForEach-Object { 
        Copy-Item $_.FullName -Destination "." -Recurse -Force 
    }
    
    Write-Host "Files copied!" -ForegroundColor Green
    
    # Stage all changes
    Write-Host "Staging changes..." -ForegroundColor Cyan
    git add -A
    
    # Get commit message from user
    $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        $commitMessage = "Update React portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    }
    
    # Commit
    Write-Host "Committing changes..." -ForegroundColor Cyan
    git commit -m $commitMessage
    
    # Push
    Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
    git push origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n========================================" -ForegroundColor Green
        Write-Host "✅ DEPLOYMENT SUCCESSFUL!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "`nYour site will be live in 1-2 minutes at:" -ForegroundColor White
        Write-Host "https://joeyaudi.com" -ForegroundColor Cyan
        Write-Host "`n"
    } else {
        Write-Host "❌ Push failed. Check the error above." -ForegroundColor Red
    }
} else {
    Write-Host "❌ Build failed. Check the error above." -ForegroundColor Red
}

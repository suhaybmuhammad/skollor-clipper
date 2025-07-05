# Setup development environment
Write-Host "Setting up Skollor development environment..."

# Check for prerequisites
$prerequisites = @(
    @{Name="Git"; Command="git --version"},
    @{Name="Node.js"; Command="node --version"},
    @{Name="Roblox Studio"; Registry="HKLM:\SOFTWARE\ROBLOX Corporation"}
)

foreach ($prereq in $prerequisites) {
    Write-Host "Checking for $($prereq.Name)..."
    try {
        if ($prereq.Command) {
            Invoke-Expression $prereq.Command | Out-Null
        } else {
            Test-Path $prereq.Registry | Out-Null
        }
        Write-Host "✓ $($prereq.Name) found"
    } catch {
        Write-Host "✗ $($prereq.Name) not found"
        exit 1
    }
}

# Install global dependencies
npm install -g roblox-ts
npm install -g rbxlx-to-rojo
npm install -g prettier-lua

# Install project dependencies
npm install

# Setup Git hooks
Copy-Item .github/hooks/* .git/hooks/

Write-Host "Setup complete! You can now start developing."
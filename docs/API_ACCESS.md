# Skollor API Access Guide

## 🔑 Authentication

### API Keys
After subscribing, you'll receive:
- Primary API Key
- Secondary API Key (for backup)
- Webhook Secret

### Usage Example
```lua
local Skollor = require(game.ReplicatedStorage.Skollor)

-- Initialize with your API key
Skollor.init({
    apiKey = "sk_live_...",
    enabledFeatures = {
        "trading",
        "worldMap",
        "analytics"
    }
})
```

## 📊 Rate Limits
- 1000 requests per minute
- 100,000 requests per day
- Webhook callbacks: unlimited

## 🔒 Security Best Practices
1. Never expose your API key
2. Rotate keys every 90 days
3. Use webhook validation
4. Monitor usage patterns

## 💻 Implementation

### Server-Side
```lua
local ServerScriptService = game:GetService("ServerScriptService")
local Skollor = require(ServerScriptService.Skollor)

Skollor.init({
    apiKey = "sk_live_...",
    environment = "production"
})
```

### Client-Side
```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local SkollorClient = require(ReplicatedStorage.SkollorClient)

-- Client uses secure token system
SkollorClient.init()
```
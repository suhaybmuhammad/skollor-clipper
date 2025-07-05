# API Documentation

## Core API

### Trading System
```lua
-- Initialize trading system
Skollor.Features.Trading.init()

-- Get predicted value for item
local value = Skollor.Features.Trading.Calculator.getPredictedValue(itemId)

-- Track market trends
local trends = Skollor.Features.Trading.History.getMarketTrends()
```

### World Map
```lua
-- Create 3D world map
Skollor.Features.WorldMap.Renderer.create3DMap()

-- Add custom waypoint
Skollor.Features.WorldMap.Features.addWaypoint(Vector3.new(0, 0, 0), "Home")
```

### Analytics
```lua
-- Track performance metrics
Skollor.Services.Analytics.Metrics.trackPerformance()

-- Generate analytics report
local report = Skollor.Services.Analytics.Metrics.generateReport()
```

## Event System
```lua
-- Subscribe to events
Skollor.Events.on("tradingUpdate", function(data)
    -- Handle trading update
end)

-- Emit events
Skollor.Events.emit("tradingUpdate", {
    itemId = "123",
    newValue = 1000
})
```
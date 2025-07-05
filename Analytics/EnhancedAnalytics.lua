local EnhancedAnalytics = {
    VERSION = "3.0.0",
    LAST_UPDATED = "2025-07-04 10:42:01",
    AUTHOR = "skollors"
}

local PlaytimeTracker = {
    TRACKING_FEATURES = {
        totalPlaytime = {
            allTime = true,           -- Total lifetime playtime
            daily = true,             -- Daily playtime tracking
            weekly = true,            -- Weekly playtime analysis
            monthly = true,           -- Monthly playtime stats
            yearly = true,            -- Yearly playtime overview
            perGame = true,           -- Per-game playtime
            perServer = true,         -- Per-server playtime
            activeHours = true        -- Most active hours tracking
        },
        
        achievements = {
            playtimeMilestones = true, -- Playtime achievements
            serverMilestones = true,   -- Server-related achievements
            tradingMilestones = true,  -- Trading achievements
            rareMilestones = true      -- Rare event achievements
        }
    }
}

local FunStats = {
    INTERESTING_METRICS = {
        luckyNumbers = {
            bestTradingHours = true,   -- Hours with best trades
            luckyServers = true,       -- Servers with best outcomes
            fortunateItems = true      -- Items bringing most profit
        },
        
        records = {
            fastestTrades = true,      -- Quickest successful trades
            biggestProfit = true,      -- Highest profit trades
            serverRecords = true,      -- Server-related records
            rareFinds = true          -- Rare item discoveries
        },
        
        funFacts = {
            tradingStyle = true,       -- Personal trading style analysis
            serverPreferences = true,  -- Favorite server patterns
            itemLuck = true,          -- Lucky items statistics
            timePatterns = true       -- Lucky time patterns
        }
    }
}
local LeaderboardSystem = {
    MAX_DISPLAY_ENTRIES = 100,
    UPDATE_INTERVAL = 60, -- seconds
    CATEGORIES = {
        "Trading Value",
        "Rare Items Found",
        "Market Predictions",
        "Server Discoveries"
    }
}

function LeaderboardSystem:createCustomLeaderboard(config)
    return {
        title = config.title,
        updateInterval = config.updateInterval or self.UPDATE_INTERVAL,
        displayLimit = config.displayLimit or self.MAX_DISPLAY_ENTRIES,
        
        -- Custom styling
        theme = {
            backgroundColor = config.theme?.backgroundColor or Color3.fromRGB(35, 35, 35),
            textColor = config.theme?.textColor or Color3.fromRGB(255, 255, 255),
            accentColor = config.theme?.accentColor or Color3.fromRGB(0, 122, 255),
            font = config.theme?.font or Enum.Font.GothamSemibold
        },
        
        -- Custom animations
        animations = {
            entryUpdate = config.animations?.entryUpdate or "Smooth",
            scoreChange = config.animations?.scoreChange or "Bounce",
            rankChange = config.animations?.rankChange or "Flash"
        }
    }
end

function LeaderboardSystem:createEntry(player, category, value)
    return {
        userId = player.UserId,
        username = player.Name,
        displayName = player.DisplayName,
        value = value,
        category = category,
        timestamp = os.time(),
        rank = nil, -- Will be calculated
        previousRank = nil,
        avatar = player.ThumbnailId
    }
end

return LeaderboardSystem
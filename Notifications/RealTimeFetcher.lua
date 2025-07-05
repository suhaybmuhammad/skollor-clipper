local RealTimeFetcher = {
    FETCH_CONFIG = {
        trading = {
            interval = 5,    -- seconds
            batchSize = 10,  -- notifications per fetch
            priority = true  -- use priority system
        },
        server = {
            interval = 10,
            batchSize = 5,
            priority = true
        },
        analytics = {
            interval = 30,
            batchSize = 15,
            priority = false
        }
    }
}

function RealTimeFetcher:startFetching()
    self:initializeWebsocket()
    self:setupEventListeners()
    self:beginPolling()
end

function RealTimeFetcher:fetchNotifications()
    return {
        tradingUpdates = self:fetchTradingNotifications(),
        serverUpdates = self:fetchServerNotifications(),
        analyticsUpdates = self:fetchAnalyticsNotifications(),
        socialUpdates = self:fetchSocialNotifications()
    }
end
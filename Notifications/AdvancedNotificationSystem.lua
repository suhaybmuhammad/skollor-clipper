local NotificationSystem = {
    VERSION = "2.0.0",
    LAST_UPDATED = "2025-07-04 10:43:59",
    AUTHOR = "skollors"
}

local NotificationConfig = {
    REFRESH_RATE = 3, -- seconds
    MAX_STACK = 50,   -- maximum stacked notifications
    PRIORITY_LEVELS = {
        URGENT = 1,
        HIGH = 2,
        MEDIUM = 3,
        LOW = 4
    },
    CATEGORIES = {
        TRADING = "trade",
        SERVER = "server",
        SOCIAL = "social",
        SYSTEM = "system",
        ANALYTICS = "analytics",
        ACHIEVEMENTS = "achievements"
    }
}

function NotificationSystem:init()
    self.notificationQueue = {}
    self.activeNotifications = {}
    self:startFetching()
    self:setupListeners()
    return self
end
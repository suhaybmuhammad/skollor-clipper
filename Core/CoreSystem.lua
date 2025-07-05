local CoreSystem = {
    VERSION = "3.0.0",
    LAST_UPDATED = "2025-07-04 10:52:31",
    AUTHOR = "skollors",
    
    STATUS = {
        OPERATIONAL = true,
        LAST_CHECK = os.time(),
        UPTIME = 0,
        ERROR_RATE = 0
    }
}

-- Core system initialization with error handling
function CoreSystem:init()
    local success, result = pcall(function()
        self:initializeDatabase()
        self:initializeCache()
        self:startHeartbeat()
        self:initializeErrorTracking()
        return true
    end)
    
    if not success then
        self:logError("Core initialization failed: " .. tostring(result))
        return false
    end
    
    return true
end
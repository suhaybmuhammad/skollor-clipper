local NotificationManager = {
    QUEUE_SIZE = 100,
    RETRY_DELAY = 2,
    MAX_RETRIES = 3
}

-- Reliable notification delivery
function NotificationManager:sendNotification(notification)
    -- Validate notification
    if not self:validateNotification(notification) then
        return false, "Invalid notification format"
    end
    
    -- Add to queue
    local queueResult = self:queueNotification(notification)
    if not queueResult then
        return false, "Queue full"
    end
    
    -- Process queue
    local success, result = self:processQueue()
    
    -- Handle delivery confirmation
    if success then
        self:confirmDelivery(notification.id)
    else
        self:handleFailure(notification.id, result)
    end
    
    return success, result
end

function NotificationManager:processQueue()
    local queue = self:getQueue()
    local results = {}
    
    for _, notification in ipairs(queue) do
        local success = self:deliverNotification(notification)
        table.insert(results, {
            id = notification.id,
            success = success
        })
    end
    
    return results
end
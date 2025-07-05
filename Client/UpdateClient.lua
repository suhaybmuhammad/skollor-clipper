local UpdateClient = {
    ws = nil,
    connected = false,
    reconnectAttempts = 0,
    MAX_RECONNECT_ATTEMPTS = 5
}

function UpdateClient:connect()
    local token = self:getAuthToken()
    self.ws = WebSocket.connect("wss://api.skollor.dev/updates?token=" .. token)
    
    self.ws.onmessage = function(message)
        local data = game:GetService("HttpService"):JSONDecode(message)
        self:handleUpdate(data)
    end
    
    self.ws.onclose = function()
        self.connected = false
        self:attemptReconnect()
    end
    
    self.ws.onopen = function()
        self.connected = true
        self.reconnectAttempts = 0
    end
end

function UpdateClient:handleUpdate(data)
    if data.type == "update" then
        -- Notify the game of updates
        game:GetService("ReplicatedStorage").UpdateEvent:FireServer(data)
        
        -- Show update notification to players
        self:showUpdateNotification(data)
    end
end

function UpdateClient:showUpdateNotification(data)
    local notification = {
        title = "Live Update Available",
        message = string.format(
            "New version %s is available\nChanges:\n%s",
            data.version,
            table.concat(data.changes, "\n")
        ),
        duration = 10
    }
    
    -- Show notification UI
    game:GetService("ReplicatedStorage").ShowNotification:FireAllClients(notification)
end

return UpdateClient
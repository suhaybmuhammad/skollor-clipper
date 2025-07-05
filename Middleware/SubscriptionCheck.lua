local SubscriptionCheck = {}

function SubscriptionCheck:validate(callback)
    return function(...)
        local userId = game.Players.LocalPlayer.UserId
        
        if not Licensing:validateSubscription(userId) then
            SubscriptionUI:showPricingModal()
            return
        end
        
        return callback(...)
    end
end

return SubscriptionCheck
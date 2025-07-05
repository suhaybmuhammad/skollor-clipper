--[[
    Skollor Roblox Project
    Advanced Features and Systems
    
    Author: skollors
    Created: 2025-07-04
--]]

local Skollor = {
    Version = "1.0.0",
    Config = require(script.Config),
    Services = require(script.Services),
    Features = require(script.Features),
    UI = require(script.UI),
    Utils = require(script.Utils)
}

function Skollor.init(config)
    Skollor.Config.update(config)
    Skollor.Services.init()
    Skollor.Features.init()
    Skollor.UI.init()
    return Skollor
end

return Skollor
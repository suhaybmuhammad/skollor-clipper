local NotificationUI = {
    DISPLAY_CONFIG = {
        position = "topRight",
        maxVisible = 5,
        stackBehavior = "queue",
        animations = {
            show = "slideIn",
            hide = "fadeOut",
            update = "pulse"
        },
        styling = {
            theme = "premium",
            transparency = 0.9,
            rounded = true,
            shadow = true
        }
    }
}

function NotificationUI:createNotification(data)
    return {
        id = data.id,
        type = data.type,
        message = data.message,
        priority = data.priority,
        actions = data.actions,
        timestamp = os.time()
    }
end
local UIConfig = {
    Theme = {
        PRIMARY = Color3.fromRGB(255, 215, 0),
        SECONDARY = Color3.fromRGB(42, 42, 42),
        ACCENT = Color3.fromRGB(255, 69, 0),
        BACKGROUND = Color3.fromRGB(26, 26, 26),
        TEXT = Color3.fromRGB(255, 255, 255)
    },
    
    Animation = {
        DURATION = 0.3,
        STYLE = "Smooth",
        ENABLED = true
    },
    
    Performance = {
        LAZY_LOADING = true,
        CACHE_COMPONENTS = true,
        OPTIMIZE_IMAGES = true,
        THREAD_ANIMATIONS = true
    }
}

return UIConfig
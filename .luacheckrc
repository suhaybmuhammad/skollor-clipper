cache = true
std = "lua51"

globals = {
    "game",
    "workspace",
    "script",
    "wait",
    "spawn",
    "delay",
    "tick",
    "typeof",
    "Vector3",
    "CFrame",
    "Color3",
    "Instance",
    "Enum"
}

ignore = {
    "212", -- unused argument
    "213", -- unused loop variable
    "542", -- empty if branch
}

exclude_files = {
    "tests/*"
}
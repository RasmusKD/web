export default function getConfig() {
    return {
        "chunk-gc.period-in-ticks": [
            {
                "expressions": [
                    "parseInt(bukkit[\"chunk-gc\"][\"period-in-ticks\"]) >= 600"
                ],
                "prefix": "❌",
                "value": "Decrease this in bukkit.yml.\nRecommended: 400."
            }
        ],
        "ticks-per.monster-spawns": [
            {
                "expressions": [
                    "parseInt(bukkit[\"ticks-per\"][\"monster-spawns\"]) == 1"
                ],
                "prefix": "❌",
                "value": "Increase this in bukkit.yml.\nRecommended: 4."
            }
        ],
        "spawn-limits.monsters": [
            {
                "expressions": [
                    "parseInt(bukkit[\"spawn-limits\"][\"monsters\"]) >= 70"
                ],
                "prefix": "❌",
                "value": "Decrease this in bukkit.yml.\nRecommended: 15."
            }
        ],
        "spawn-limits.water-ambient": [
            {
                "expressions": [
                    "parseInt(bukkit[\"spawn-limits\"][\"water-ambient\"]) >= 20"
                ],
                "prefix": "❌",
                "value": "Decrease this in bukkit.yml.\nRecommended: 5."
            }
        ],
        "spawn-limits.ambient": [
            {
                "expressions": [
                    "parseInt(bukkit[\"spawn-limits\"][\"ambient\"]) >= 15"
                ],
                "prefix": "❌",
                "value": "Decrease this in bukkit.yml.\nRecommended: 1."
            }
        ],
        "spawn-limits.animals": [
            {
                "expressions": [
                    "parseInt(bukkit[\"spawn-limits\"][\"animals\"]) >= 10"
                ],
                "prefix": "❌",
                "value": "Decrease this in bukkit.yml.\nRecommended: 5."
            }
        ],
        "spawn-limits.water-animals": [
            {
                "expressions": [
                    "parseInt(bukkit[\"spawn-limits\"][\"water-animals\"]) >= 15"
                ],
                "prefix": "❌",
                "value": "Decrease this in bukkit.yml.\nRecommended: 5."
            }
        ]
    }
}
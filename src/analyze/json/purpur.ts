export default function getConfig() {
    return {
        "settings.use-alternate-keepalive": [
            {
                "expressions": [
                    "purpur[\"settings\"][\"use-alternate-keepalive\"] == \"false\"",
                    "plugins.find( plugin => plugin.name == \"TCPShield\" ) === undefined"
                ],
                "prefix": "❌",
                "value": "Enable this in purpur.yml."
            },
            {
                "expressions": [
                    "purpur[\"settings\"][\"use-alternate-keepalive\"] == \"true\"",
                    "plugins.find( plugin => plugin.name == \"TCPShield\" ) !== undefined"
                ],
                "prefix": "❌",
                "value": "Disable this in purpur.yml. It can cause issues with TCPShield"
            }
        ],
        "settings.dont-send-useless-entity-packets": [
            {
                "expressions": [
                    "purpur[\"settings\"][\"dont-send-useless-entity-packets\"] == \"false\""
                ],
                "prefix": "❌",
                "value": "Enable this in purpur.yml."
            }
        ],
        "mobs.villager.brain-ticks": [
            {
                "expressions": [
                    "parseInt(purpur[\"world-settings\"][\"default\"][\"mobs\"][\"villager\"][\"brain-ticks\"]) == 1"
                ],
                "prefix": "❌",
                "value": "Increase this in purpur.yml.\nRecommended: 4."
            }
        ],
        "mobs.villager.spawn-iron-golem.radius": [
            {
                "expressions": [
                    "parseInt(purpur[\"world-settings\"][\"default\"][\"mobs\"][\"villager\"][\"spawn-iron-golem\"][\"radius\"]) == 0"
                ],
                "prefix": "❌",
                "value": "Increase this in purpur.yml.\nRecommended: 5."
            }
        ],
        "mobs.zombie.aggressive-towards-villager-when-lagging": [
            {
                "expressions": [
                    "purpur[\"world-settings\"][\"default\"][\"mobs\"][\"zombie\"][\"aggressive-towards-villager-when-lagging\"] == \"true\""
                ],
                "prefix": "❌",
                "value": "Disable this in purpur.yml."
            }
        ],
        "gameplay-mechanics.player.teleport-if-outside-border": [
            {
                "expressions": [
                    "purpur[\"world-settings\"][\"default\"][\"gameplay-mechanics\"][\"player\"][\"teleport-if-outside-border\"] == \"false\""
                ],
                "prefix": "❌",
                "value": "Enable this in purpur.yml."
            }
        ]
    }
}
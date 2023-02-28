export default function getConfig() {
    return {
        "entity-activation-range.animals": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"animals\"]) >= 32"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 16."
            }
        ],
        "entity-activation-range.monsters": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"monsters\"]) >= 32"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 16."
            }
        ],
        "entity-activation-range.misc": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"misc\"]) >= 16"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 12."
            }
        ],
        "entity-activation-range.water": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"water\"]) >= 16"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 12."
            }
        ],
        "entity-activation-range.villagers": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"villagers\"]) >= 32"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 16."
            }
        ],
        "entity-activation-range.tick-inactive-villagers": [
            {
                "expressions": [
                    "spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"tick-inactive-villagers\"] == \"true\""
                ],
                "prefix": "❌",
                "value": "Disable this in spigot.yml."
            }
        ],
        "entity-activation-range.wake-up-inactive.villagers-for": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"wake-up-inactive\"][\"villagers-max-per-tick\"]) >= 1",
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"wake-up-inactive\"][\"villagers-for\"]) >= 100"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 20."
            }
        ],
        "entity-activation-range.wake-up-inactive.flying-monsters-for": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"wake-up-inactive\"][\"flying-monsters-max-per-tick\"]) >= 1",
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"wake-up-inactive\"][\"flying-monsters-for\"]) >= 100"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 60."
            }
        ],
        "entity-activation-range.wake-up-inactive.villagers-max-per-tick": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"wake-up-inactive\"][\"villagers-max-per-tick\"]) >= 4"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 1."
            }
        ],
        "entity-activation-range.wake-up-inactive.animals-for": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"wake-up-inactive\"][\"animals-max-per-tick\"]) >= 1",
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"wake-up-inactive\"][\"animals-for\"]) >= 100"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 40."
            }
        ],
        "entity-activation-range.wake-up-inactive.monsters-max-per-tick": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"wake-up-inactive\"][\"monsters-max-per-tick\"]) >= 8"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 4."
            }
        ],
        "entity-activation-range.wake-up-inactive.flying-monsters-max-per-tick": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"wake-up-inactive\"][\"flying-monsters-max-per-tick\"]) >= 8"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 1."
            }
        ],
        "entity-activation-range.wake-up-inactive.animals-max-per-tick": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"wake-up-inactive\"][\"animals-max-per-tick\"]) >= 4"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 2."
            }
        ],
        "entity-activation-range.wake-up-inactive.monsters-for": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"wake-up-inactive\"][\"monsters-max-per-tick\"]) >= 1",
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"entity-activation-range\"][\"wake-up-inactive\"][\"monsters-for\"]) >= 100"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 60."
            }
        ],
        "arrow-despawn-rate": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"arrow-despawn-rate\"]) >= 1200"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 300."
            }
        ],
        "merge-radius.item": [
            {
                "expressions": [
                    "parseFloat(spigot[\"world-settings\"][\"default\"][\"merge-radius\"][\"item\"]) <= 2.5"
                ],
                "prefix": "❌",
                "value": "Increase this in spigot.yml.\nRecommended: 4.0."
            }
        ],
        "merge-radius.exp": [
            {
                "expressions": [
                    "parseFloat(spigot[\"world-settings\"][\"default\"][\"merge-radius\"][\"exp\"]) <= 3.0"
                ],
                "prefix": "❌",
                "value": "Increase this in spigot.yml.\nRecommended: 6.0."
            }
        ],
        "max-entity-collisions": [
            {
                "expressions": [
                    "parseInt(spigot[\"world-settings\"][\"default\"][\"max-entity-collisions\"]) >= 8"
                ],
                "prefix": "❌",
                "value": "Decrease this in spigot.yml.\nRecommended: 2."
            }
        ]
    }
}
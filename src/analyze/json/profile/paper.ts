export default function getConfig() {
    return {
        "chunks.max-auto-save-chunks-per-tick": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"chunks\"][\"max-auto-save-chunks-per-tick\"]) >= 24"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 6."
            }
        ],
        "environment.optimize-explosions": [
            {
                "expressions": [
                    "paper[\"world-defaults.yml\"][\"environment\"][\"optimize-explosions\"] == \"false\""
                ],
                "prefix": "❌",
                "value": "Enable this in config/paper-world-defaults.yml."
            }
        ],
        "tick-rates.mob-spawner": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"tick-rates\"][\"mob-spawner\"]) == 1"
                ],
                "prefix": "❌",
                "value": "Increase this in config/paper-world-defaults.yml.\nRecommended: 2."
            }
        ],
        "entities.behavior.disable-chest-cat-detection": [
            {
                "expressions": [
                    "paper[\"world-defaults.yml\"][\"entities\"][\"behavior\"][\"disable-chest-cat-detection\"] == \"false\""
                ],
                "prefix": "❌",
                "value": "Enable this in config/paper-world-defaults.yml"
            }
        ],
        "tick-rates.container-update": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"tick-rates\"][\"container-update\"]) == 1"
                ],
                "prefix": "❌",
                "value": "Increase this in config/paper-world-defaults.yml.\nRecommended: 3."
            }
        ],
        "tick-rates.grass-spread": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"tick-rates\"][\"grass-spread\"]) == 1"
                ],
                "prefix": "❌",
                "value": "Increase this in config/paper-world-defaults.yml.\nRecommended: 4."
            }
        ],
        "entities.spawning.despawn-ranges.ambient.soft": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"ambient\"][\"soft\"]) >= 32"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 28."
            }
        ],
        "entities.spawning.despawn-ranges.ambient.hard": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"ambient\"][\"hard\"]) >= 128"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 96."
            }
        ],
        "entities.spawning.despawn-ranges.axolotls.soft": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"axolotls\"][\"soft\"]) >= 32"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 28."
            }
        ],
        "entities.spawning.despawn-ranges.axolotls.hard": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"axolotls\"][\"hard\"]) >= 128"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 96."
            }
        ],
        "entities.spawning.despawn-ranges.creature.soft": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"creature\"][\"soft\"]) >= 32"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 28."
            }
        ],
        "entities.spawning.despawn-ranges.creature.hard": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"creature\"][\"hard\"]) >= 128"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 96."
            }
        ],
        "entities.spawning.despawn-ranges.misc.soft": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"misc\"][\"soft\"]) >= 32"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 28."
            }
        ],
        "entities.spawning.despawn-ranges.misc.hard": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"misc\"][\"hard\"]) >= 128"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 96."
            }
        ],
        "entities.spawning.despawn-ranges.monster.soft": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"monster\"][\"soft\"]) >= 32"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 28."
            }
        ],
        "entities.spawning.despawn-ranges.monster.hard": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"monster\"][\"hard\"]) >= 128"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 96."
            }
        ],
        "entities.spawning.despawn-ranges.underground_water_creature.soft": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"underground_water_creature\"][\"soft\"]) >= 32"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 28."
            }
        ],
        "entities.spawning.despawn-ranges.underground_water_creature.hard": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"underground_water_creature\"][\"hard\"]) >= 128"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 96."
            }
        ],
        "entities.spawning.despawn-ranges.water_ambient.soft": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"water_ambient\"][\"soft\"]) >= 32"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 28."
            }
        ],
        "entities.spawning.despawn-ranges.water_ambient.hard": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"water_ambient\"][\"hard\"]) >= 128"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 96."
            }
        ],
        "entities.spawning.despawn-ranges.water_creature.soft": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"water_creature\"][\"soft\"]) >= 32"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 28."
            }
        ],
        "entities.spawning.despawn-ranges.water_creature.hard": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"despawn-ranges\"][\"water_creature\"][\"hard\"]) >= 128"
                ],
                "prefix": "❌",
                "value": "Decrease this in config/paper-world-defaults.yml.\nRecommended: 96."
            }
        ],
        "hopper.disable-move-event": [
            {
                "expressions": [
                    "paper[\"world-defaults.yml\"][\"hopper\"][\"disable-move-event\"] == \"false\""
                ],
                "prefix": "❌",
                "value": "Enable this in config/paper-world-defaults.yml"
            }
        ],
        "entities.spawning.non-player-arrow-despawn-rate": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"non-player-arrow-despawn-rate\"]) == -1"
                ],
                "prefix": "❌",
                "value": "Set a value in config/paper-world-defaults.yml.\nRecommended: 60"
            }
        ],
        "entities.spawning.creative-arrow-despawn-rate": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"creative-arrow-despawn-rate\"]) == -1"
                ],
                "prefix": "❌",
                "value": "Set a value in config/paper-world-defaults.yml.\nRecommended: 60"
            }
        ],
        "chunks.prevent-moving-into-unloaded-chunks": [
            {
                "expressions": [
                    "paper[\"world-defaults.yml\"][\"chunks\"][\"prevent-moving-into-unloaded-chunks\"] == \"false\""
                ],
                "prefix": "❌",
                "value": "Enable this in config/paper-world-defaults.yml."
            }
        ],
        "misc.redstone-implementation": [
            {
                "expressions": [
                    "paper[\"world-defaults.yml\"][\"misc\"][\"redstone-implementation\"] != \"ALTERNATE_CURRENT\""
                ],
                "prefix": "❌",
                "value": "Set this to \"ALTERNATE_CURRENT\" in config/paper-world-defaults.yml."
            }
        ],
        "collisions.fix-climbing-bypassing-cramming-rule": [
            {
                "expressions": [
                    "paper[\"world-defaults.yml\"][\"collisions\"][\"fix-climbing-bypassing-cramming-rule\"] == \"false\""
                ],
                "prefix": "❌",
                "value": "Enable this in config/paper-world-defaults.yml."
            }
        ],
        "entities.armor-stands.do-collision-entity-lookups": [
            {
                "expressions": [
                    "paper[\"world-defaults.yml\"][\"entities\"][\"armor-stands\"][\"do-collision-entity-lookups\"] == \"true\""
                ],
                "prefix": "❌",
                "value": "Disable this in config/paper-world-defaults.yml."
            }
        ],
        "entities.armor-stands.tick": [
            {
                "expressions": [
                    "paper[\"world-defaults.yml\"][\"entities\"][\"armor-stands\"][\"tick\"] == \"true\"",
                    "plugins.find( plugin => plugin.name == \"PetBlocks\" ) !== undefined",
                    "plugins.find( plugin => plugin.name == \"BlockBalls\" ) !== undefined",
                    "plugins.find( plugin => plugin.name == \"ArmorStandTools\" ) !== undefined"
                ],
                "prefix": "❌",
                "value": "Disable this in config/paper-world-defaults.yml."
            }
        ],
        "entities.spawning.per-player-mob-spawns": [
            {
                "expressions": [
                    "paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"per-player-mob-spawns\"] == \"false\""
                ],
                "prefix": "❌",
                "value": "Enable this in config/paper-world-defaults.yml."
            }
        ],
        "entities.spawning.alt-item-despawn-rate.enabled": [
            {
                "expressions": [
                    "paper[\"world-defaults.yml\"][\"entities\"][\"spawning\"][\"alt-item-despawn-rate\"][\"enabled\"] == \"false\""
                ],
                "prefix": "❌",
                "value": "Enable this in config/paper-world-defaults.yml."
            }
        ],
        "chunks.entity-per-chunk-save-limit.experience_orb": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"chunks\"][\"entity-per-chunk-save-limit\"][\"experience_orb\"]) == -1"
                ],
                "prefix": "❌",
                "value": "Set a value in config/paper-world-defaults.yml.\nRecommended: 16."
            }
        ],
        "chunks.entity-per-chunk-save-limit.snowball": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"chunks\"][\"entity-per-chunk-save-limit\"][\"snowball\"]) == -1"
                ],
                "prefix": "❌",
                "value": "Set a value in config/paper-world-defaults.yml.\nRecommended: 16."
            }
        ],
        "chunks.entity-per-chunk-save-limit.ender_pearl": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"chunks\"][\"entity-per-chunk-save-limit\"][\"ender_pearl\"]) == -1"
                ],
                "prefix": "❌",
                "value": "Set a value in config/paper-world-defaults.yml.\nRecommended: 16."
            }
        ],
        "chunks.entity-per-chunk-save-limit.arrow": [
            {
                "expressions": [
                    "parseInt(paper[\"world-defaults.yml\"][\"chunks\"][\"entity-per-chunk-save-limit\"][\"arrow\"]) == -1"
                ],
                "prefix": "❌",
                "value": "Set a value in config/paper-world-defaults.yml.\nRecommended: 16."
            }
        ]
    }
}
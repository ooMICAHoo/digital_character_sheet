# data model

ideally, this model would work for DCC/MCC so it should be flexible to account for differences in systems and classes. Fortunately the systems are quite similar!

```
{
    "name": "String",
    "class": "String",
    "title": "String", // occupation for level-0
    "experience": "Number",
    "level": "Number", // calculated by range of experience
    "alignment": "String",
    "attributes": {
        "strength": {
            "base": "Number",
            "current": "Number",
            "modifier": "Number" // calculated
        },
        "agility": {
            "base": "Number",
            "current": "Number",
            "modifier": "Number" // calculated
        },
        "stamina": {
            "base": "Number",
            "current": "Number",
            "modifier": "Number" // calculated
        },
        "personality": {
            "base": "Number",
            "current": "Number",
            "modifier": "Number" // calculated
        },
        "intelligence": {
            "base": "Number",
            "current": "Number",
            "modifier": "Number" // calculated
        },
        "luck": {
            "base": "Number",
            "current": "Number",
            "modifier": "Number" // calculated
        },
    },
    "armor_class": {
      "base": "Number", // calculated
      "current": "Number"
    },
    "hit_points": {
      "base": "Number",
      "current": "Number"
    },
    "base_speed": "Number",
    "combat": {
      "attack_die": "String",
      "critical_die": "String",
      "critical_table": "String",
      "initiative": "Number", // calculated
      "melee_attack": "Number", // calculated
      "melee_damage": "Number", // calculated
      "missile_attack": "Number", // calculated
      "missile_damage": "Number" // calculated
    },
    "saves": {
      "reflex": "Number", // calculated
      "fortitude": "Number", // calculated
      "willpower": "Number" // calculated
    },
    "birth_sign":  // (lucky roll)
    "inventory": {
      "armor": {},
      "weapons": {},
      "equipment": {},
      "funds": {}
    },

    // DCC specific
    "spells": {},

    // MCC specific
    "artifact_check": "String",
    "max_tech_level": "String",
    "mutations": {}
}
```
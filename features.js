[
    {
        "_id": "674655c22ae025efb5de44e7",
        "_project": "67465514473456cfff640346",
        "source": "dashboard",
        "status": "complete",
        "type": "release",
        "name": "Hello Togglebot - Example Feature",
        "key": "hello-togglebot",
        "description": "This is an auto-created feature to support the DevCycle example apps (https://docs.devcycle.com/examples)",
        "_createdBy": "google-oauth2|107886544336209658107",
        "createdAt": "2024-11-26T23:12:02.921Z",
        "updatedAt": "2024-12-03T11:37:02.643Z",
        "variations": [
            {
                "_id": "674655c22ae025efb5de44f9",
                "key": "variation-base",
                "name": "Base Variation",
                "variables": {
                    "togglebot-speed": "off",
                    "togglebot-wink": true,
                    "example-text": "step-1"
                }
            },
            {
                "_id": "674655c22ae025efb5de44fa",
                "key": "variation-spin",
                "name": "Spin Variation",
                "variables": {
                    "togglebot-speed": "slow",
                    "togglebot-wink": false,
                    "example-text": "step-2"
                }
            },
            {
                "_id": "674655c22ae025efb5de44fb",
                "key": "customizable-variation",
                "name": "Example",
                "variables": {
                    "togglebot-speed": "off-axis",
                    "togglebot-wink": true,
                    "example-text": "step-1"
                }
            }
        ],
        "controlVariation": "variation-base",
        "variables": [
            {
                "_id": "674655c22ae025efb5de44ed",
                "_project": "67465514473456cfff640346",
                "_feature": "674655c22ae025efb5de44e7",
                "name": "Togglebot Spin Speed",
                "key": "togglebot-speed",
                "type": "String",
                "status": "active",
                "source": "dashboard",
                "_createdBy": "google-oauth2|107886544336209658107",
                "createdAt": "2024-11-26T23:12:02.935Z",
                "updatedAt": "2024-11-26T23:12:03.633Z",
                "validationSchema": {
                    "schemaType": "enum",
                    "enumValues": [
                        "off",
                        "slow",
                        "fast",
                        "off-axis",
                        "surprise"
                    ],
                    "description": "Togglebot speed values recognized by the example app",
                    "exampleValue": "fast"
                }
            },
            {
                "_id": "674655c22ae025efb5de44ef",
                "_project": "67465514473456cfff640346",
                "_feature": "674655c22ae025efb5de44e7",
                "name": "Example App Display Text",
                "key": "example-text",
                "type": "String",
                "status": "active",
                "source": "dashboard",
                "_createdBy": "google-oauth2|107886544336209658107",
                "createdAt": "2024-11-26T23:12:02.935Z",
                "updatedAt": "2024-11-26T23:12:04.358Z",
                "validationSchema": {
                    "schemaType": "enum",
                    "enumValues": [
                        "default",
                        "step-1",
                        "step-2",
                        "step-3"
                    ],
                    "description": "Example text values recognized by the example app",
                    "exampleValue": "step-3"
                }
            },
            {
                "_id": "674655c22ae025efb5de44ee",
                "_project": "67465514473456cfff640346",
                "_feature": "674655c22ae025efb5de44e7",
                "name": "Togglebot Wink Enabled",
                "key": "togglebot-wink",
                "type": "Boolean",
                "status": "active",
                "source": "dashboard",
                "_createdBy": "google-oauth2|107886544336209658107",
                "createdAt": "2024-11-26T23:12:02.935Z",
                "updatedAt": "2024-11-26T23:12:02.935Z"
            }
        ],
        "tags": [],
        "readonly": false,
        "settings": {
            "optInEnabled": false,
            "publicName": "",
            "publicDescription": ""
        },
        "sdkVisibility": {
            "mobile": true,
            "client": true,
            "server": true
        }
    }
]
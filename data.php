<?php 

    header("content-type: application/octet-stream");
    header("access-control-allow-origin: *");
    header("cache-control: no-cache");

    $data = [

        [
            "section" => "Languages",
            "entries" => [
                [
                    "name" => "Italiano", 
                    "level" => "Lingua Nativa",
                    "img" => "https://giuseppecassanelli.altervista.org/lang/it.png"
                ],
                [
                    "name" => "Inglese", 
                    "level" => "Livello Base",
                    "img" => "https://giuseppecassanelli.altervista.org/lang/en.png"
                ],
                [
                    "name" => "Francese", 
                    "level" => "Conoscenze Informali",
                    "img" => "https://giuseppecassanelli.altervista.org/lang/fr.png"
                ],
            ]
        ],
        
        [
            "section" => "Frontend development",
            "entries" => [
                [
                    "name" => "HTML 5", 
                    "value" => 100,
                    "color" => "#E54C21",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/html.png"
                ],

                [
                    "name" => "EJS", 
                    "value" => 100,
                    "color" => "#B4CA65",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/ejs.png"
                ],

                [
                    "name" => "CSS", 
                    "value" => 100,
                    "color" => "#264DE4",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/css.png"
                ],

                [
                    "name" => "JavaScript", 
                    "value" => 85,
                    "color" => "#F7DF1E",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/javascript.png"
                ],
            ]
        ],

        [
            "section" => "Backend development",
            "entries" => [
                [
                    "name" => "Node.js", 
                    "value" => 90,
                    "color" => "#B4CA65",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/nodejs.png"
                ],
                [
                    "name" => "PHP", 
                    "value" => 40,
                    "color" => "#4F5D95",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/php.png"
                ],
            ]
        ],

        [
            "section" => "Software development",
            "entries" => [
                [
                    "name" => "Arduino IDE", 
                    "value" => 70,
                    "color" => "#19989E",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/arduinoide.png"
                ],
                [
                    "name" => "C++", 
                    "value" => 60,
                    "color" => "#00599D",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/cpp.png"
                ],
                [
                    "name" => "Java", 
                    "value" => 40,
                    "color" => "#ED2025",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/java.png"
                ],
            ]
        ],

        [
            "section" => "Dev technologies",
            "entries" => [
                [
                    "name" => "GitHub", 
                    "value" => 100,
                    "color" => "#FFFFFF",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/github.png"
                ],
                [
                    "name" => "NPM", 
                    "value" => 90,
                    "color" => "#CB3837",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/npm.png"
                ],
                [
                    "name" => "Git", 
                    "value" => 75,
                    "color" => "#F05033",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/git.png"
                ],
                [
                    "name" => "Amazon Aff", 
                    "value" => 50,
                    "color" => "#FFA724",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/amazon.png"
                ],
            ]
        ],

        [
            "section" => "Software",
            "entries" => [
                [
                    "name" => "Office 365", 
                    "value" => 100,
                    "color" => "#D83B01",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/office365.png"
                ],
                [
                    "name" => "VS Code", 
                    "value" => 100,
                    "color" => "#34A5F1",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/vscode.png"
                ],
                [
                    "name" => "Altervista", 
                    "value" => 90,
                    "color" => "#FFA200",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/altervista.png"
                ],
                [
                    "name" => "Adobe XD", 
                    "value" => 80,
                    "color" => "#FF61F6",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/adobexd.png"
                ],
                [
                    "name" => "Photoshop", 
                    "value" => 50,
                    "color" => "#31A8FF",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/photoshop.png"
                ],
                [
                    "name" => "WordPress", 
                    "value" => 35,
                    "color" => "#21759B",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/wordpress.png"
                ],
            ]
        ],

        [
            "section" => "Operating systems",
            "entries" => [
                [
                    "name" => "Windows 11", 
                    "value" => 100,
                    "color" => "#0078D4",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/win11.png"
                ],
                [
                    "name" => "Windows 10", 
                    "value" => 100,
                    "color" => "#0078D6",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/win10.png"
                ],
                [
                    "name" => "Windows 7", 
                    "value" => 100,
                    "color" => "#35B4E8",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/win7.png"
                ],
                [
                    "name" => "MacOS Monteray", 
                    "value" => 80,
                    "color" => "#c22ab6",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/macmonteray.png"
                ],
                [
                    "name" => "Kali Linux", 
                    "value" => 30,
                    "color" => "#696969",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/kalilinux.png"
                ],
            ]
        ],

        [
            "section" => "Other technologies",
            "entries" => [
                [
                    "name" => "AJAX", 
                    "value" => 10,
                    "color" => "#075b8a",
                    "img" => "https://giuseppecassanelli.altervista.org/skill/ajax.png"
                ]
            ]
        ]

    ];

    echo json_encode($data);
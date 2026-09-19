// 🦖 GIANT DINOSAUR
// FINAL LOOK VERSION
// Upright, scary, pixel-art T. rex

elements.giant_dinosaur = {
    name: "GIANT DINOSAUR",
    color: "#315c32",
    category: "life",
    state: "solid",
    behavior: behaviors.WALL,

    tick: function(pixel) {

        // Body parts must not create another dinosaur
        if (pixel.dino_part) return;

        pixel.dino_part = true;

        var x = pixel.x;
        var y = pixel.y;

        // Create one dinosaur part safely
        function makePart(elementID, px, py) {

            var newPixel = tryCreate(
                elementID,
                px,
                py
            );

            if (newPixel) {
                newPixel.dino_part = true;
            }

            return newPixel;
        }


        // =========================
        // 🦖 MAIN BODY
        // =========================

        for (var dx = -7; dx <= 6; dx++) {
            for (var dy = -3; dy <= 4; dy++) {

                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }


        // =========================
        // 🟫 BROWN BACK
        // =========================

        for (var dx = -7; dx <= 5; dx++) {
            for (var dy = -5; dy <= -3; dy++) {

                makePart(
                    "dinosaur_back",
                    x + dx,
                    y + dy
                );
            }
        }


        // =========================
        // 🦕 UPRIGHT NECK
        // =========================

        for (var dx = 4; dx <= 6; dx++) {
            for (var dy = -10; dy <= 1; dy++) {

                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }


        // =========================
        // 🟫 BROWN NECK RIDGE
        // =========================

        for (var dx = 3; dx <= 5; dx++) {
            for (var dy = -10; dy <= -5; dy++) {

                makePart(
                    "dinosaur_back",
                    x + dx,
                    y + dy
                );
            }
        }


        // =========================
        // 🦖 UPPER HEAD
        // =========================

        for (var dx = 6; dx <= 12; dx++) {
            for (var dy = -13; dy <= -8; dy++) {

                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }


        // =========================
        // 👃 SNOUT
        // =========================

        for (var dx = 10; dx <= 14; dx++) {
            for (var dy = -11; dy <= -8; dy++) {

                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }


        // =========================
        // 😈 DARK OPEN MOUTH
        // =========================

        for (var dx = 9; dx <= 14; dx++) {
            for (var dy = -7; dy <= -5; dy++) {

                makePart(
                    "dinosaur_mouth",
                    x + dx,
                    y + dy
                );
            }
        }


        // =========================
        // 🦷 UPPER TEETH
        // =========================

        for (var dx = 10; dx <= 14; dx += 2) {

            makePart(
                "dinosaur_tooth",
                x + dx,
                y - 7
            );
        }


        // =========================
        // 🦷 LOWER JAW
        // =========================

        for (var dx = 9; dx <= 14; dx++) {

            makePart(
                "giant_dinosaur",
                x + dx,
                y - 4
            );
        }


        // =========================
        // 🦷 LOWER TEETH
        // =========================

        for (var dx = 10; dx <= 14; dx += 2) {

            makePart(
                "dinosaur_tooth",
                x + dx,
                y - 4
            );
        }


        // =========================
        // 👁️ ONE-PIXEL BLACK EYE
        // =========================

        makePart(
            "dinosaur_eye",
            x + 9,
            y - 11
        );


        // =========================
        // 🦴 RAISED TAIL
        // =========================

        for (var dx = -8; dx >= -22; dx--) {

            var distance = Math.abs(dx);

            var tailY;

            if (distance < 12) {
                tailY = 2;
            }
            else if (distance < 17) {
                tailY = 1;
            }
            else {
                tailY = 0;
            }

            var width = Math.max(
                1,
                Math.floor((22 - distance) / 5)
            );

            for (var dy = -width; dy <= width; dy++) {

                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + tailY + dy
                );
            }
        }


        // =========================
        // 🦵 POWERFUL LEGS
        // =========================

        var legs = [-4, 4];

        for (var i = 0; i < legs.length; i++) {

            var legX = legs[i];

            // Upper leg
            for (var dy = 5; dy <= 9; dy++) {

                makePart(
                    "giant_dinosaur",
                    x + legX,
                    y + dy
                );

                makePart(
                    "giant_dinosaur",
                    x + legX + 1,
                    y + dy
                );
            }

            // Lower leg angled slightly
            for (var dy = 10; dy <= 13; dy++) {

                makePart(
                    "giant_dinosaur",
                    x + legX + 1,
                    y + dy
                );
            }

            // Foot
            for (var dx = -1; dx <= 2; dx++) {

                makePart(
                    "giant_dinosaur",
                    x + legX + dx,
                    y + 14
                );
            }
        }


        // =========================
        // 🦎 LITTLE T. REX ARMS
        // =========================

        makePart(
            "giant_dinosaur",
            x + 5,
            y + 1
        );

        makePart(
            "giant_dinosaur",
            x + 6,
            y + 2
        );

        makePart(
            "giant_dinosaur",
            x + 7,
            y + 3
        );


        // Tiny claws
        makePart(
            "dinosaur_tooth",
            x + 7,
            y + 4
        );
    }
};


// =========================
// 🟫 BROWN BACK
// =========================

elements.dinosaur_back = {
    name: "DinosaurBack",
    color: "#654321",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};


// =========================
// 👁️ ONE-PIXEL BLACK EYE
// =========================

elements.dinosaur_eye = {
    name: "DinosaurEye",
    color: "#000000",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};


// =========================
// 🦷 TEETH
// =========================

elements.dinosaur_tooth = {
    name: "DinosaurTooth",
    color: "#eeeecc",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};


// =========================
// 😈 DARK RED MOUTH
// =========================

elements.dinosaur_mouth = {
    name: "DinosaurMouth",
    color: "#5c1717",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};

// 🦖 GIANT DINOSAUR - VERSION 4
// Proper element IDs - fixes UNKNOWN pixels

elements.giant_dinosaur = {
    name: "GIANT DINOSAUR",
    color: "#315c32",
    category: "life",
    state: "solid",
    behavior: behaviors.WALL,

    tick: function(pixel) {

        // Body pieces must not create another dinosaur
        if (pixel.dino_part) return;

        pixel.dino_part = true;

        var x = pixel.x;
        var y = pixel.y;

        // Safely create a dinosaur part
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

        for (var dx = -8; dx <= 7; dx++) {
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

        for (var dx = -7; dx <= 7; dx++) {
            for (var dy = -5; dy <= -3; dy++) {

                makePart(
                    "dinosaur_back",
                    x + dx,
                    y + dy
                );
            }
        }

        // =========================
        // 🦕 NECK
        // =========================

        for (var dx = 5; dx <= 8; dx++) {
            for (var dy = -9; dy <= 1; dy++) {

                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }

        // =========================
        // 🦖 HEAD
        // =========================

        for (var dx = 8; dx <= 14; dx++) {
            for (var dy = -12; dy <= -5; dy++) {

                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }

        // =========================
        // 👃 LONG SNOUT
        // =========================

        for (var dx = 13; dx <= 18; dx++) {
            for (var dy = -10; dy <= -6; dy++) {

                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }

        // =========================
        // 👁️ BLACK EYE
        // =========================

        makePart(
            "dinosaur_eye",
            x + 11,
            y - 9
        );

        // =========================
        // 🦷 TEETH
        // =========================

        for (var dx = 13; dx <= 18; dx += 2) {

            makePart(
                "dinosaur_tooth",
                x + dx,
                y - 5
            );
        }

        // =========================
        // 🦴 LONG TAIL
        // =========================

        for (var dx = -9; dx >= -27; dx--) {

            var distance = Math.abs(dx);

            var width = Math.max(
                1,
                Math.floor((27 - distance) / 5)
            );

            for (var dy = -width; dy <= width; dy++) {

                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + 2 + dy
                );
            }
        }

        // =========================
        // 🦵 POWERFUL BACK LEGS
        // =========================

        var legs = [-5, 5];

        for (var i = 0; i < legs.length; i++) {

            var legX = legs[i];

            for (var dy = 5; dy <= 12; dy++) {

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

            // 🦶 Feet
            for (var dx = -2; dx <= 2; dx++) {

                makePart(
                    "giant_dinosaur",
                    x + legX + dx,
                    y + 13
                );
            }
        }

        // =========================
        // 🦎 LITTLE T. REX ARMS
        // =========================

        makePart(
            "giant_dinosaur",
            x + 7,
            y + 2
        );

        makePart(
            "giant_dinosaur",
            x + 8,
            y + 3
        );

        makePart(
            "giant_dinosaur",
            x + 9,
            y + 4
        );

        makePart(
            "giant_dinosaur",
            x + 10,
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
// 👁️ BLACK EYE
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

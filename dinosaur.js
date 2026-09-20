// 🦖 GIANT DINOSAUR - NEW FINAL BODY
// Pixel-art T. rex body design

elements.giant_dinosaur = {
    name: "GIANT DINOSAUR",
    color: "#315c32",
    category: "life",
    state: "solid",
    behavior: behaviors.WALL,

    tick: function(pixel) {

        // Prevent body parts from creating another dinosaur
        if (pixel.dino_part) return;

        pixel.dino_part = true;

        var x = pixel.x;
        var y = pixel.y;

        function makePart(elementID, px, py) {
            var p = tryCreate(elementID, px, py);

            if (p) {
                p.dino_part = true;
            }

            return p;
        }

        // =========================
        // 🟢 MAIN BODY
        // =========================

        for (var dx = -7; dx <= 5; dx++) {
            for (var dy = -2; dy <= 4; dy++) {
                makePart("giant_dinosaur", x + dx, y + dy);
            }
        }

        // =========================
        // 🟫 BROWN BACK
        // =========================

        for (var dx = -6; dx <= 4; dx++) {
            makePart("dinosaur_back", x + dx, y - 3);
        }

        // Raised brown ridge
        makePart("dinosaur_back", x + 1, y - 4);
        makePart("dinosaur_back", x + 2, y - 5);
        makePart("dinosaur_back", x + 3, y - 6);
        makePart("dinosaur_back", x + 4, y - 7);
        makePart("dinosaur_back", x + 5, y - 8);

        // =========================
        // 🦕 UPRIGHT NECK
        // =========================

        for (var dx = 3; dx <= 5; dx++) {
            for (var dy = -10; dy <= 1; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }

        // =========================
        // 🟢 HEAD
        // =========================

        for (var dx = 4; dx <= 9; dx++) {
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

        for (var dx = 8; dx <= 12; dx++) {
            for (var dy = -11; dy <= -8; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }

        // =========================
        // 😠 THREE-PIXEL ANGRY EYE
        // =========================

        tryCreate(
            "dinosaur_eye",
            x + 7,
            y - 10,
            true
        );

        tryCreate(
            "dinosaur_eye",
            x + 8,
            y - 11,
            true
        );

        tryCreate(
            "dinosaur_eye",
            x + 9,
            y - 12,
            true
        );

        // =========================
        // 🩸 OPEN MOUTH
        // =========================

        for (var dx = 8; dx <= 12; dx++) {
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

        tryCreate(
            "dinosaur_tooth",
            x + 9,
            y - 7,
            true
        );

        tryCreate(
            "dinosaur_tooth",
            x + 11,
            y - 7,
            true
        );

        // =========================
        // 🦖 LOWER JAW
        // =========================

        for (var dx = 8; dx <= 12; dx++) {
            makePart(
                "giant_dinosaur",
                x + dx,
                y - 4
            );
        }

        // =========================
        // 🦷 LOWER TEETH
        // =========================

        tryCreate(
            "dinosaur_tooth",
            x + 9,
            y - 4,
            true
        );

        tryCreate(
            "dinosaur_tooth",
            x + 11,
            y - 4,
            true
        );

        // =========================
        // 🦎 NEW TAIL
        // =========================

        // Thick base
        for (var dx = -8; dx >= -12; dx--) {
            for (var dy = 0; dy <= 3; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }

        // Middle tail
        for (var dx = -13; dx >= -17; dx--) {
            for (var dy = 0; dy <= 2; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }

        // Narrow tail
        for (var dx = -18; dx >= -22; dx--) {
            for (var dy = 0; dy <= 1; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }

        // Curved tail tip
        makePart("giant_dinosaur", x - 23, y - 1);
        makePart("giant_dinosaur", x - 24, y - 1);
        makePart("giant_dinosaur", x - 25, y - 2);

        // =========================
        // 🦵 NEW POWERFUL LEGS
        // =========================

        // Left leg
        for (var dy = 5; dy <= 9; dy++) {
            makePart(
                "giant_dinosaur",
                x - 3,
                y + dy
            );
        }

        for (var dy = 10; dy <= 13; dy++) {
            makePart(
                "giant_dinosaur",
                x - 4,
                y + dy
            );
        }

        // Left foot
        for (var dx = -5; dx <= -2; dx++) {
            makePart(
                "giant_dinosaur",
                x + dx,
                y + 14
            );
        }

        // Right leg
        for (var dy = 5; dy <= 9; dy++) {
            makePart(
                "giant_dinosaur",
                x + 3,
                y + dy
            );
        }

        for (var dy = 10; dy <= 13; dy++) {
            makePart(
                "giant_dinosaur",
                x + 4,
                y + dy
            );
        }

        // Right foot
        for (var dx = 2; dx <= 5; dx++) {
            makePart(
                "giant_dinosaur",
                x + dx,
                y + 14
            );
        }

        // =========================
        // 💪 TINY ARMS
        // =========================

        makePart(
            "giant_dinosaur",
            x + 5,
            y + 0
        );

        makePart(
            "giant_dinosaur",
            x + 6,
            y + 1
        );

        makePart(
            "giant_dinosaur",
            x + 7,
            y + 2
        );

        // Tiny claws
        tryCreate(
            "dinosaur_tooth",
            x + 7,
            y + 3,
            true
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
// 😠 BLACK EYE
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
// 🩸 MOUTH
// =========================

elements.dinosaur_mouth = {
    name: "DinosaurMouth",
    color: "#5c1717",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};

// 🦖 GIANT DINOSAUR - FINAL BODY DESIGN
// Upright pixel-art T. rex
// Angry 3-pixel eye

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
            makePart(
                "dinosaur_back",
                x + dx,
                y - 3
            );
        }

        // Raised brown neck ridge
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
        // 😠 ANGRY 3-PIXEL EYE
        //
        //     ■
        //     ■■
        // =========================

        // 😠 ANGRY 3-PIXEL EYE
        //     ■
        //     ■■
        tryCreate(
            "dinosaur_eye",
            x + 7,
            y - 12,
            true
        );

        tryCreate(
            "dinosaur_eye",
            x + 7,
            y - 11,
            true
        );

        tryCreate(
            "dinosaur_eye",
            x + 8,
            y - 11,
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
        // 🦎 FULLER RAISED TAIL
        // =========================

        for (var dx = -8; dx >= -13; dx--) {
            var width = 2;

            for (var dy = -width; dy <= width; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + 2 + dy
                );
            }
        }

        for (var dx = -14; dx >= -18; dx--) {
            var width = 1;

            for (var dy = -width; dy <= width; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + 1 + dy
                );
            }
        }

        for (var dx = -19; dx >= -23; dx--) {
            makePart(
                "giant_dinosaur",
                x + dx,
                y + 1
            );
        }

        // Raised tail tip
        makePart(
            "giant_dinosaur",
            x - 24,
            y
        );

        makePart(
            "giant_dinosaur",
            x - 25,
            y - 1
        );

        // =========================
        // 🦵 POWERFUL LEGS
        // =========================

        var legs = [-3, 3];

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

            // Lower leg
            for (var dy = 10; dy <= 13; dy++) {

                var offset;

                if (legX < 0) {
                    offset = -1;
                }
                else {
                    offset = 1;
                }

                makePart(
                    "giant_dinosaur",
                    x + legX + offset,
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
        // 💪 TINY T. REX ARMS
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

        // Tiny claw
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
// 🩸 DARK RED MOUTH
// =========================

elements.dinosaur_mouth = {
    name: "DinosaurMouth",
    color: "#5c1717",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};

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
            // Create the part, then mark the actual pixel.
            // tryCreate() does not return the created pixel.
            tryCreate(elementID, px, py, true);

            var p = getPixel(px, py);

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
        // 🟫 BROWN BACK — 1 PIXEL DEEP
        // Stops BEFORE the neck so brown never runs inside it.
        // The dorsal stripe will continue smoothly onto the tail below.
        // =========================

        for (var dx = -7; dx <= 2; dx++) {
            makePart(
                "dinosaur_back",
                x + dx,
                y - 3
            );
        }

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
        // 🟢 FILL THE OLD BLACK NECK GAP
        // Keeps the head, neck and mouth connected
        // =========================

        for (var dx = 6; dx <= 7; dx++) {
            for (var dy = -7; dy <= 1; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }

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

        tryCreate("dinosaur_tooth", x + 8, y - 7, true);
        tryCreate("dinosaur_tooth", x + 10, y - 7, true);
        tryCreate("dinosaur_tooth", x + 12, y - 7, true);

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

        tryCreate("dinosaur_tooth", x + 8, y - 4, true);
        tryCreate("dinosaur_tooth", x + 10, y - 4, true);
        tryCreate("dinosaur_tooth", x + 12, y - 4, true);

        // =========================
        // 🦎 SHORTER RAISED TAIL
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

        for (var dx = -14; dx >= -17; dx--) {
            var width = 1;

            for (var dy = -width; dy <= width; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + 1 + dy
                );
            }
        }

        for (var dx = -18; dx >= -20; dx--) {
            makePart(
                "giant_dinosaur",
                x + dx,
                y + 1
            );
        }

        makePart(
            "giant_dinosaur",
            x - 21,
            y
        );

        // =========================
        // 🟫 BROWN DORSAL STRIPE → TAIL
        // One pixel deep, stepping down naturally with the tail.
        // =========================

        makePart("dinosaur_back", x - 8, y - 2);
        makePart("dinosaur_back", x - 9, y - 1);
        makePart("dinosaur_back", x - 10, y);

        for (var dx = -11; dx >= -13; dx--) {
            makePart("dinosaur_back", x + dx, y + 1);
        }

        for (var dx = -14; dx >= -17; dx--) {
            makePart("dinosaur_back", x + dx, y);
        }

        for (var dx = -18; dx >= -20; dx--) {
            makePart("dinosaur_back", x + dx, y);
        }

        makePart("dinosaur_back", x - 21, y - 1);

        // =========================
        // 🦵 POWERFUL ANGLED LEGS
        // Match the pixel-art stance: thick upper legs,
        // angled lower legs, and wide feet.
        // =========================

        var legs = [-3, 3];

        for (var i = 0; i < legs.length; i++) {

            var legX = legs[i];

            // Thick upper leg
            for (var dy = 5; dy <= 9; dy++) {
                makePart("giant_dinosaur", x + legX, y + dy);
                makePart("giant_dinosaur", x + legX + 1, y + dy);
            }

            // Angled lower leg — each leg bends outward
            var offset;
            if (legX < 0) offset = -1;
            else offset = 1;

            for (var dy = 10; dy <= 13; dy++) {
                makePart("giant_dinosaur", x + legX + offset, y + dy);
                makePart("giant_dinosaur", x + legX + offset + 1, y + dy);
            }

            // Wide foot
            for (var dx = -1; dx <= 2; dx++) {
                makePart("giant_dinosaur", x + legX + offset + dx, y + 14);
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

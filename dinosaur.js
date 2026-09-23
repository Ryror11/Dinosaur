// 🦖 GIANT DINOSAUR - FINAL BODY DESIGN
// VERSION: NATIVE GROUP GRAVITY TEST — uses Sandboxels pixel relations
// Upright pixel-art T. rex
// Angry 3-pixel eye

var giantDinosaurRelationID = 100000;
elements.giant_dinosaur = {
    name: "GIANT DINOSAUR",
    color: "#315c32",
    category: "life",
    state: "solid",
    // Gravity is controlled by the dinosaur's tick function.
    movable: true,

    tick: function(pixel) {

        // Sandboxels 1.13+ has a native pixel-relation system.
        // Pixels with the same integer _r value fall and move together.
        if (pixel.dino_initialized) return;

        pixel.dino_initialized = true;

        var relationID = ++giantDinosaurRelationID;
        pixel._r = relationID;

        var x = pixel.x;
        var y = pixel.y;

        function makePart(elementID, px, py) {
            tryCreate(elementID, px, py, true);

            var p = getPixel(px, py);

            if (p) {
                p.dino_part = true;
                p.dino_id = relationID;
                p._r = relationID;
                p.dino_initialized = true;
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
        makePart("dinosaur_eye", x + 7, y - 12);
        makePart("dinosaur_eye", x + 7, y - 11);
        makePart("dinosaur_eye", x + 8, y - 11);

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

        makePart("dinosaur_tooth", x + 8, y - 7);
        makePart("dinosaur_tooth", x + 10, y - 7);
        makePart("dinosaur_tooth", x + 12, y - 7);

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

        makePart("dinosaur_tooth", x + 8, y - 4);
        makePart("dinosaur_tooth", x + 10, y - 4);
        makePart("dinosaur_tooth", x + 12, y - 4);

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
        // Follow the exact TOP of the tail, one pixel above it.
        // In Sandboxels, increasing Y goes downward, so the
        // back sits one pixel ABOVE the tail surface.
        // =========================

        for (var dx = -8; dx >= -13; dx--) {
            makePart("dinosaur_back", x + dx, y - 1);
        }

        for (var dx = -14; dx >= -17; dx--) {
            makePart("dinosaur_back", x + dx, y - 1);
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

        // Tiny black nail/claw
        makePart("dinosaur_nail", x + 7, y + 3);

        // Re-mark the original anchor after the body has been built.
        // This is the pixel that owns the dinosaur's relation.
        var anchor = getPixel(x, y);
        if (anchor) {
            anchor.dino_part = true;
            anchor.dino_id = relationID;
            anchor._r = relationID;
            anchor.dino_initialized = true;
        }

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


// =========================
// 🖤 NAIL / CLAW
// =========================

elements.dinosaur_nail = {
    name: "DinosaurNail",
    color: "#1a1a1a",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};

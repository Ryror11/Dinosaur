// 🦖 GIANT DINOSAUR - FINAL BODY DESIGN
// VERSION: ANTI-MULTIPLY FIX — body pixels are locked from spawning
// Upright pixel-art T. rex
// Angry 3-pixel eye

var giantDinosaurID = 100000;

elements.giant_dinosaur = {
    name: "GIANT DINOSAUR",
    color: "#315c32",
    category: "life",
    state: "solid",
    movable: true,

    // Build one complete dinosaur, then let Sandboxels'
    // native relation system handle gravity for the whole body.
    tick: function(pixel) {

        // If this pixel is already grouped, explicitly ask Sandboxels'
        // relation engine to apply gravity to the whole dinosaur.
        // The built-in engine also handles relations, but doing this here
        // makes the mod reliable across the Neal.fun version.
        if (pixel._r !== undefined) {
            var relation = getRelation(pixel._r);

            if (relation.lastMove !== pixelTicks) {
                tryMoveRelation(relation, 0, 1);
            }

            return;
        }

        // Every body pixel created by this function gets a permanent
        // part marker. This prevents the body from spawning new dinosaurs.
        if (pixel.dino_part === true) return;

        var x = pixel.x;
        var y = pixel.y;

        // Give this dinosaur its own native relation ID.
        var dinoRelationID = currentRelations._id++;

        function makePart(elementID, px, py) {
            tryCreate(elementID, px, py, true);

            var p = getPixel(px, py);

            if (p) {
                // Permanent marker: this pixel is already part of a dinosaur.
                // Without this, every body pixel with the giant_dinosaur
                // element would run tick() and build another dinosaur.
                p.dino_part = true;

                // Temporary marker so we can group only the final pixels.
                p.dino_spawn = true;
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

        // =========================
        // 🔗 GROUP THE FINAL BODY
        // =========================
        //
        // IMPORTANT:
        // The body is built first because several body parts overlap.
        // Grouping only the final pixels prevents duplicate/stale pixels
        // from entering the relation.

        for (var px = Math.max(0, x - 22); px <= Math.min(width - 1, x + 13); px++) {
            for (var py = Math.max(0, y - 14); py <= Math.min(height - 1, y + 15); py++) {
                var p = pixelMap[px][py];

                if (p && p.dino_spawn === true) {
                    addToRelation(p, dinoRelationID);
                    delete p.dino_spawn;
                }
            }
        }


    }
};


// =========================
// 🟫 BROWN BACK
// =========================

elements.dinosaur_back = {
    name: "DinosaurBack",
    color: "#654321",
    movable: true,
    category: "life",
    state: "solid"
};


// =========================
// 😠 BLACK EYE
// =========================

elements.dinosaur_eye = {
    name: "DinosaurEye",
    color: "#000000",
    movable: true,
    category: "life",
    state: "solid"
};


// =========================
// 🦷 TEETH
// =========================

elements.dinosaur_tooth = {
    name: "DinosaurTooth",
    color: "#eeeecc",
    movable: true,
    category: "life",
    state: "solid"
};


// =========================
// 🩸 DARK RED MOUTH
// =========================

elements.dinosaur_mouth = {
    name: "DinosaurMouth",
    color: "#5c1717",
    movable: true,
    category: "life",
    state: "solid"
};


// =========================
// 🖤 NAIL / CLAW
// =========================

elements.dinosaur_nail = {
    name: "DinosaurNail",
    color: "#1a1a1a",
    movable: true,
    category: "life",
    state: "solid"
};

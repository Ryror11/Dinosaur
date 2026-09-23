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

        // Only the original anchor controls the whole dinosaur.
        if (pixel.dino_part && !pixel.dino_root) return;

        // Existing dinosaur anchor: gravity first.
        // The dinosaur stays a solid multi-pixel body, so we move
        // every part downward together instead of giving each part
        // normal powder gravity.
        if (pixel.dino_root) {
            if (pixel.dino_gravity_cooldown > 0) {
                pixel.dino_gravity_cooldown--;
                return;
            }

            pixel.dino_gravity_cooldown = 2;

            var id = pixel.dino_id;
            var parts = [];

            // Find every part belonging to this dinosaur.
            for (var px = Math.max(0, pixel.x - 25); px <= Math.min(width - 1, pixel.x + 25); px++) {
                for (var py = Math.max(0, pixel.y - 20); py <= Math.min(height - 1, pixel.y + 20); py++) {
                    var p = pixelMap[px][py];
                    if (p && p.dino_id === id) {
                        parts.push(p);
                    }
                }
            }

            if (parts.length === 0) return;

            // Check whether any part is standing on something outside
            // the dinosaur. If not, the whole dinosaur can fall.
            var blocked = false;

            for (var i = 0; i < parts.length; i++) {
                var nx = parts[i].x;
                var ny = parts[i].y + 1;

                if (ny >= height) {
                    blocked = true;
                    break;
                }

                var target = pixelMap[nx][ny];

                if (target && target.dino_id !== id) {
                    blocked = true;
                    break;
                }
            }

            if (blocked) {
                return;
            }

            // Move from the lowest pixels upward so the body can move
            // into the spaces that its lower pixels just vacated.
            parts.sort(function(a, b) {
                return b.y - a.y;
            });

            for (var i = 0; i < parts.length; i++) {
                tryMove(parts[i], parts[i].x, parts[i].y + 1);
            }

            return;
        }

        // First pixel placed: create a unique group ID.
        pixel.dino_part = true;
        pixel.dino_root = true;

        var x = pixel.x;
        var y = pixel.y;
        var dinoId = "dino_" + pixelTicks + "_" + x + "_" + y;
        pixel.dino_id = dinoId;
        pixel.dino_dir = 1;
        pixel.dino_move_cooldown = 8;

        function makePart(elementID, px, py) {
            // Create the part, then mark the actual pixel.
            // tryCreate() does not return the created pixel.
            tryCreate(elementID, px, py, true);

            var p = getPixel(px, py);

            if (p) {
                p.dino_part = true;
                p.dino_id = dinoId;
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

        // Re-mark the anchor after the body has been built.
        // Some body parts overlap the original anchor pixel.
        var anchor = getPixel(x, y);
        if (anchor) {
            anchor.dino_part = true;
            anchor.dino_root = true;
            anchor.dino_id = dinoId;
            anchor.dino_dir = 1;
            anchor.dino_move_cooldown = 8;
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

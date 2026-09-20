// 🦖 GIANT DINOSAUR - FINAL BODY
// Upright pixel-art T. rex

elements.giant_dinosaur = {
    name: "GIANT DINOSAUR",
    color: "#315c32",
    category: "life",
    state: "solid",
    behavior: behaviors.WALL,

    tick: function(pixel) {

        // Prevent body parts from spawning another dinosaur
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

        // =====================================================
        // 🟢 MAIN BODY
        // =====================================================

        for (var dx = -6; dx <= 5; dx++) {
            for (var dy = -2; dy <= 4; dy++) {
                makePart("giant_dinosaur", x + dx, y + dy);
            }
        }

        // =====================================================
        // 🟫 SLOPING BROWN BACK
        // =====================================================

        for (var dx = -5; dx <= 4; dx++) {
            var backY = -3;

            if (dx >= 0) {
                backY = -4;
            }

            makePart(
                "dinosaur_back",
                x + dx,
                y + backY
            );
        }

        // Brown ridge rising toward the neck
        for (var i = 0; i < 7; i++) {
            makePart(
                "dinosaur_back",
                x + 2 + Math.floor(i / 2),
                y - 5 - i
            );
        }

        // =====================================================
        // 🦕 TALL UPRIGHT NECK
        // =====================================================

        for (var dx = 3; dx <= 5; dx++) {
            for (var dy = -10; dy <= 1; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }

        // =====================================================
        // 🟢 HEAD
        // =====================================================

        for (var dx = 4; dx <= 9; dx++) {
            for (var dy = -13; dy <= -8; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }

        // =====================================================
        // 👃 SNOUT
        // =====================================================

        for (var dx = 8; dx <= 12; dx++) {
            for (var dy = -11; dy <= -8; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + dy
                );
            }
        }

        // =====================================================
        // 👁️ ONE PIXEL EYE
        // =====================================================

        tryCreate(
            "dinosaur_eye",
            x + 7,
            y - 11,
            true
        );

        // =====================================================
        // 🩸 OPEN MOUTH
        // =====================================================

        for (var dx = 8; dx <= 12; dx++) {
            for (var dy = -7; dy <= -5; dy++) {
                makePart(
                    "dinosaur_mouth",
                    x + dx,
                    y + dy
                );
            }
        }

        // =====================================================
        // 🦷 UPPER TEETH
        // =====================================================

        for (var dx = 9; dx <= 12; dx += 2) {
            tryCreate(
                "dinosaur_tooth",
                x + dx,
                y - 7,
                true
            );
        }

        // =====================================================
        // 🦖 LOWER JAW
        // =====================================================

        for (var dx = 8; dx <= 12; dx++) {
            makePart(
                "giant_dinosaur",
                x + dx,
                y - 4
            );
        }

        // =====================================================
        // 🦷 LOWER TEETH
        // =====================================================

        for (var dx = 9; dx <= 12; dx += 2) {
            tryCreate(
                "dinosaur_tooth",
                x + dx,
                y - 4,
                true
            );
        }

        // =====================================================
        // 🦎 RAISED CURVED TAIL
        // =====================================================

        for (var dx = -7; dx >= -23; dx--) {

            var distance = Math.abs(dx);
            var tailY;

            if (distance <= 10) {
                tailY = 2;
            }
            else if (distance <= 15) {
                tailY = 1;
            }
            else if (distance <= 19) {
                tailY = 0;
            }
            else {
                tailY = -1;
            }

            var width = Math.max(
                1,
                Math.floor((23 - distance) / 5)
            );

            for (var dy = -width; dy <= width; dy++) {
                makePart(
                    "giant_dinosaur",
                    x + dx,
                    y + tailY + dy
                );
            }
        }

        // =====================================================
        // 🦵 POWERFUL LEGS
        // =====================================================

        var legs = [-3, 3];

        for (var i = 0; i < legs.length; i++) {

            var legX = legs[i];

            // Upper leg
            for (var dy = 5; dy <= 8; dy++) {
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

            // Angled lower leg
            for (var dy = 9; dy <= 13; dy++) {
                var offset = (legX < 0) ? -1 : 1;

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

        // =====================================================
        // 💪 TINY T. REX ARMS
        // =====================================================

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


// =========================================================
// 🟫 BROWN BACK
// =========================================================

elements.dinosaur_back = {
    name: "DinosaurBack",
    color: "#654321",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};


// =========================================================
// 👁️ BLACK EYE
// =========================================================

elements.dinosaur_eye = {
    name: "DinosaurEye",
    color: "#000000",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};


// =========================================================
// 🦷 TEETH
// =========================================================

elements.dinosaur_tooth = {
    name: "DinosaurTooth",
    color: "#eeeecc",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};


// =========================================================
// 🩸 DARK RED MOUTH
// =========================================================

elements.dinosaur_mouth = {
    name: "DinosaurMouth",
    color: "#5c1717",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};

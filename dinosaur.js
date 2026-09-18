// 🦖 GIANT DINOSAUR - VERSION 3
// First proper T. rex-shaped prototype

elements.giant_dinosaur = {
    name: "GIANT DINOSAUR",
    color: "#315c32",
    category: "life",
    state: "solid",
    behavior: behaviors.WALL,

    tick: function(pixel) {

        // Prevent body pieces from spawning another dinosaur
        if (pixel.dino_part) return;

        pixel.dino_part = true;

        var x = pixel.x;
        var y = pixel.y;

        // Safely create one dinosaur part
        function makePart(element, px, py) {
            var newPixel = tryCreate(element, px, py);

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
                    elements.giant_dinosaur,
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
                    elements.dinosaur_back,
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
                    elements.giant_dinosaur,
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
                    elements.giant_dinosaur,
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
                    elements.giant_dinosaur,
                    x + dx,
                    y + dy
                );
            }
        }


        // =========================
        // 👁️ BLACK EYE
        // =========================

        makePart(
            elements.dinosaur_eye,
            x + 11,
            y - 9
        );


        // =========================
        // 🦷 TEETH
        // =========================

        for (var dx = 13; dx <= 18; dx += 2) {
            makePart(
                elements.dinosaur_tooth,
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
                    elements.giant_dinosaur,
                    x + dx,
                    y + 2 + dy
                );
            }
        }


        // =========================
        // 🦵 POWERFUL BACK LEGS
        // =========================

        for (var legX of [-5, 5]) {

            for (var dy = 5; dy <= 12; dy++) {

                makePart(
                    elements.giant_dinosaur,
                    x + legX,
                    y + dy
                );

                makePart(
                    elements.giant_dinosaur,
                    x + legX + 1,
                    y + dy
                );
            }


            // 🦶 Feet
            for (var dx = -2; dx <= 2; dx++) {

                makePart(
                    elements.giant_dinosaur,
                    x + legX + dx,
                    y + 13
                );
            }
        }


        // =========================
        // 🦎 SMALL T. REX ARMS
        // =========================

        makePart(
            elements.giant_dinosaur,
            x + 7,
            y + 2
        );

        makePart(
            elements.giant_dinosaur,
            x + 8,
            y + 3
        );

        makePart(
            elements.giant_dinosaur,
            x + 9,
            y + 4
        );

        makePart(
            elements.giant_dinosaur,
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

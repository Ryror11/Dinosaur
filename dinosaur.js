// 🦖 GIANT DINOSAUR - VERSION 2

elements.giant_dinosaur = {
    name: "GIANT DINOSAUR",
    color: "#315c32",
    category: "life",
    state: "solid",
    behavior: behaviors.WALL,

    tick: function(pixel) {

        // Body parts do NOT create another dinosaur
        if (pixel.dino_part) return;

        // This pixel is the dinosaur's starting point
        pixel.dino_part = true;

        var x = pixel.x;
        var y = pixel.y;

        // Helper for creating dinosaur body parts
        function makePart(element, px, py) {
            var newPixel = tryCreate(element, px, py);

            if (newPixel) {
                newPixel.dino_part = true;
            }

            return newPixel;
        }

        // 🟢 Main body
        for (var dx = -8; dx <= 8; dx++) {
            for (var dy = -3; dy <= 4; dy++) {
                if (Math.random() < 0.9) {
                    makePart(elements.giant_dinosaur, x + dx, y + dy);
                }
            }
        }

        // 🟫 Brown back
        for (var dx = -7; dx <= 7; dx++) {
            for (var dy = -5; dy <= -3; dy++) {
                if (Math.random() < 0.85) {
                    makePart(elements.dinosaur_back, x + dx, y + dy);
                }
            }
        }

        // 🦕 Neck
        for (var dx = 5; dx <= 8; dx++) {
            for (var dy = -8; dy <= 2; dy++) {
                makePart(elements.giant_dinosaur, x + dx, y + dy);
            }
        }

        // 🦖 Head
        for (var dx = 8; dx <= 14; dx++) {
            for (var dy = -11; dy <= -4; dy++) {
                makePart(elements.giant_dinosaur, x + dx, y + dy);
            }
        }

        // 👃 Snout
        for (var dx = 13; dx <= 17; dx++) {
            for (var dy = -9; dy <= -5; dy++) {
                makePart(elements.giant_dinosaur, x + dx, y + dy);
            }
        }

        // 👁️ Eye
        makePart(elements.dinosaur_eye, x + 11, y - 9);

        // 🦷 Teeth
        for (var dx = 12; dx <= 17; dx += 2) {
            makePart(elements.dinosaur_tooth, x + dx, y - 4);
        }

        // 🦴 Tail
        for (var dx = -9; dx >= -25; dx--) {
            var width = Math.max(1, Math.floor((25 + dx) / 5));

            for (var dy = -width; dy <= width; dy++) {
                makePart(
                    elements.giant_dinosaur,
                    x + dx,
                    y + 2 + dy
                );
            }
        }

        // 🦵 Legs
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

            // Feet
            for (var dx = -2; dx <= 2; dx++) {
                makePart(
                    elements.giant_dinosaur,
                    x + legX + dx,
                    y + 13
                );
            }
        }

        // 🦎 Small arms
        for (var dx = 5; dx <= 9; dx++) {
            makePart(
                elements.giant_dinosaur,
                x + dx,
                y + 2 + Math.floor(dx / 2)
            );
        }
    }
};


// 🟫 Brown back
elements.dinosaur_back = {
    name: "DinosaurBack",
    color: "#654321",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};


// 👁️ Black eye
elements.dinosaur_eye = {
    name: "DinosaurEye",
    color: "#000000",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};


// 🦷 Teeth
elements.dinosaur_tooth = {
    name: "DinosaurTooth",
    color: "#eeeecc",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};

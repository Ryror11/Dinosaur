// 🦖 GIANT DINOSAUR - VERSION 1

elements.giant_dinosaur = {
    name: "GIANT DINOSAUR",
    color: "#315c32",
    category: "life",
    state: "solid",
    behavior: behaviors.WALL,

    // When you draw the dinosaur, create its body around the pixel.
    tick: function(pixel) {
        if (pixel.dino_spawned) return;

        pixel.dino_spawned = true;

        var x = pixel.x;
        var y = pixel.y;

        // Body
        for (var dx = -8; dx <= 8; dx++) {
            for (var dy = -3; dy <= 4; dy++) {
                if (Math.random() < 0.9) {
                    tryCreatePixel(elements.giant_dinosaur, x + dx, y + dy);
                }
            }
        }

        // Back
        for (var dx = -7; dx <= 7; dx++) {
            for (var dy = -5; dy <= -3; dy++) {
                if (Math.random() < 0.85) {
                    tryCreatePixel(elements.dinosaur_back, x + dx, y + dy);
                }
            }
        }

        // Neck
        for (var dx = 5; dx <= 8; dx++) {
            for (var dy = -8; dy <= 2; dy++) {
                tryCreatePixel(elements.giant_dinosaur, x + dx, y + dy);
            }
        }

        // Head
        for (var dx = 8; dx <= 14; dx++) {
            for (var dy = -11; dy <= -4; dy++) {
                tryCreatePixel(elements.giant_dinosaur, x + dx, y + dy);
            }
        }

        // Snout
        for (var dx = 13; dx <= 17; dx++) {
            for (var dy = -9; dy <= -5; dy++) {
                tryCreatePixel(elements.giant_dinosaur, x + dx, y + dy);
            }
        }

        // Eye
        tryCreatePixel(elements.dinosaur_eye, x + 11, y - 9);

        // Teeth
        for (var dx = 12; dx <= 17; dx += 2) {
            tryCreatePixel(elements.dinosaur_tooth, x + dx, y - 4);
        }

        // Tail
        for (var dx = -9; dx >= -25; dx--) {
            var width = Math.max(1, Math.floor((25 + dx) / 5));
            for (var dy = -width; dy <= width; dy++) {
                tryCreatePixel(elements.giant_dinosaur, x + dx, y + 2 + dy);
            }
        }

        // Legs
        for (var legX of [-5, 5]) {
            for (var dy = 5; dy <= 12; dy++) {
                tryCreatePixel(elements.giant_dinosaur, x + legX, y + dy);
                tryCreatePixel(elements.giant_dinosaur, x + legX + 1, y + dy);
            }

            // Feet
            for (var dx = -2; dx <= 2; dx++) {
                tryCreatePixel(elements.giant_dinosaur, x + legX + dx, y + 13);
            }
        }

        // Arms
        for (var dx = 5; dx <= 9; dx++) {
            tryCreatePixel(elements.giant_dinosaur, x + dx, y + 2 + Math.floor(dx / 2));
        }
    }
};

// 🟫 Brown back
elements.dinosaur_back = {
    color: "#654321",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};

// 👁️ Black eye
elements.dinosaur_eye = {
    color: "#000000",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};

// 🦷 Teeth
elements.dinosaur_tooth = {
    color: "#eeeecc",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid"
};

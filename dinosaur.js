// ============================================================
// GIANT DINOSAUR MOD FOR SANDBOXELS
// Version 1 - Multi-pixel T. rex
// ============================================================

"use strict";

// ------------------------------------------------------------
// DINOSAUR BODY PARTS
// ------------------------------------------------------------

elements.dinosaur_body = {
    color: ["#315c32", "#376b36", "#2d5930"],
    behavior: behaviors.WALL,
    category: "life",
    state: "solid",
    density: 900,
    hardness: 0.7,
    tempHigh: 120,
    stateHigh: "dinosaur_meat",
    tempLow: -30,
    stateLow: "dinosaur_frozen",
    description: "The main body of the giant dinosaur."
};

elements.dinosaur_back = {
    color: ["#70452b", "#805032", "#633b26"],
    behavior: behaviors.WALL,
    category: "life",
    state: "solid",
    density: 900,
    hardness: 0.7,
    tempHigh: 120,
    stateHigh: "dinosaur_meat",
    tempLow: -30,
    stateLow: "dinosaur_frozen"
};

elements.dinosaur_head = {
    color: ["#315c32", "#376b36", "#2d5930"],
    behavior: behaviors.WALL,
    category: "life",
    state: "solid",
    density: 850,
    hardness: 0.65,
    tempHigh: 120,
    stateHigh: "dinosaur_meat",
    tempLow: -30,
    stateLow: "dinosaur_frozen"
};

elements.dinosaur_jaw = {
    color: ["#294f2b", "#315c32", "#254727"],
    behavior: behaviors.WALL,
    category: "life",
    state: "solid",
    density: 850,
    hardness: 0.6,
    tempHigh: 120,
    stateHigh: "dinosaur_meat",
    tempLow: -30,
    stateLow: "dinosaur_frozen"
};

elements.dinosaur_teeth = {
    color: ["#f0ead0", "#fff8dc", "#d8d1b5"],
    behavior: behaviors.WALL,
    category: "life",
    state: "solid",
    density: 700,
    hardness: 0.4,
    tempHigh: 150,
    stateHigh: "dinosaur_tooth_piece"
};

elements.dinosaur_eye = {
    color: "#050505",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid",
    density: 800,
    hardness: 0.3,
    tempHigh: 80,
    stateHigh: "dinosaur_meat"
};

elements.dinosaur_leg = {
    color: ["#315c32", "#376b36", "#2d5930"],
    behavior: behaviors.WALL,
    category: "life",
    state: "solid",
    density: 1000,
    hardness: 0.75,
    tempHigh: 120,
    stateHigh: "dinosaur_meat",
    tempLow: -30,
    stateLow: "dinosaur_frozen"
};

elements.dinosaur_foot = {
    color: ["#294f2b", "#315c32", "#254727"],
    behavior: behaviors.WALL,
    category: "life",
    state: "solid",
    density: 1050,
    hardness: 0.8,
    tempHigh: 120,
    stateHigh: "dinosaur_meat",
    tempLow: -30,
    stateLow: "dinosaur_frozen"
};

elements.dinosaur_tail = {
    color: ["#315c32", "#376b36", "#70452b"],
    behavior: behaviors.WALL,
    category: "life",
    state: "solid",
    density: 850,
    hardness: 0.7,
    tempHigh: 120,
    stateHigh: "dinosaur_meat",
    tempLow: -30,
    stateLow: "dinosaur_frozen"
};

// ------------------------------------------------------------
// MEAT / BLOOD / FROZEN BODY
// ------------------------------------------------------------

elements.dinosaur_meat = {
    color: ["#682020", "#7d2828", "#542020"],
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 1050,
    tempHigh: 100,
    stateHigh: "smoke"
};

elements.dinosaur_blood = {
    color: ["#8b0000", "#a00000", "#650000"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1050,
    viscosity: 5
};

elements.dinosaur_frozen = {
    color: ["#315c42", "#3d6b50", "#47785b"],
    behavior: behaviors.WALL,
    category: "life",
    state: "solid",
    density: 1200,
    tempHigh: 5,
    stateHigh: "dinosaur_body",
    breakInto: "dinosaur_meat",
    hardness: 0.6,
    description: "A dinosaur frozen solid by extreme cold."
};

elements.dinosaur_tooth_piece = {
    color: ["#d8d1b5", "#f0ead0"],
    behavior: behaviors.POWDER,
    category: "life",
    state: "solid",
    density: 900,
    hardness: 0.5
};

// ------------------------------------------------------------
// MAIN GIANT DINOSAUR ELEMENT
// ------------------------------------------------------------

elements.giant_dinosaur = {
    color: "#315c32",
    behavior: behaviors.WALL,
    category: "life",
    state: "solid",
    density: 900,
    hardness: 0.7,

    description:
        "A giant multi-pixel T. rex. Tap to create the entire dinosaur.",

    // --------------------------------------------------------
    // When the player places the dinosaur, build the body.
    // --------------------------------------------------------

    onClicked: function(pixel) {
        createGiantDinosaur(pixel.x, pixel.y);
    }
};

// ------------------------------------------------------------
// CREATE THE GIANT DINOSAUR
// ------------------------------------------------------------

function createGiantDinosaur(cx, cy) {

    // The dinosaur is built from many pixels.
    //
    // Each entry is:
    // [x offset, y offset, element]
    //
    // The dinosaur faces RIGHT.

    var body = [

        // ---------------- BODY ----------------

        [-2, -3, "dinosaur_back"],
        [-1, -3, "dinosaur_back"],
        [ 0, -3, "dinosaur_back"],
        [ 1, -3, "dinosaur_back"],
        [ 2, -3, "dinosaur_back"],

        [-3, -2, "dinosaur_body"],
        [-2, -2, "dinosaur_body"],
        [-1, -2, "dinosaur_body"],
        [ 0, -2, "dinosaur_body"],
        [ 1, -2, "dinosaur_body"],
        [ 2, -2, "dinosaur_body"],
        [ 3, -2, "dinosaur_body"],

        [-3, -1, "dinosaur_body"],
        [-2, -1, "dinosaur_body"],
        [-1, -1, "dinosaur_body"],
        [ 0, -1, "dinosaur_body"],
        [ 1, -1, "dinosaur_body"],
        [ 2, -1, "dinosaur_body"],
        [ 3, -1, "dinosaur_body"],

        [-3, 0, "dinosaur_body"],
        [-2, 0, "dinosaur_body"],
        [-1, 0, "dinosaur_body"],
        [ 0, 0, "dinosaur_body"],
        [ 1, 0, "dinosaur_body"],
        [ 2, 0, "dinosaur_body"],
        [ 3, 0, "dinosaur_body"],

        [-2, 1, "dinosaur_body"],
        [-1, 1, "dinosaur_body"],
        [ 0, 1, "dinosaur_body"],
        [ 1, 1, "dinosaur_body"],
        [ 2, 1, "dinosaur_body"],

        // ---------------- HEAD ----------------

        [ 4, -4, "dinosaur_head"],
        [ 5, -4, "dinosaur_head"],
        [ 6, -4, "dinosaur_head"],

        [ 4, -3, "dinosaur_head"],
        [ 5, -3, "dinosaur_head"],
        [ 6, -3, "dinosaur_head"],
        [ 7, -3, "dinosaur_head"],

        [ 4, -2, "dinosaur_head"],
        [ 5, -2, "dinosaur_head"],
        [ 6, -2, "dinosaur_head"],
        [ 7, -2, "dinosaur_head"],

        [ 5, -1, "dinosaur_head"],
        [ 6, -1, "dinosaur_head"],
        [ 7, -1, "dinosaur_head"],

        // ---------------- EYE ----------------

        [ 6, -3, "dinosaur_eye"],

        // ---------------- JAW ----------------

        [ 5, 0, "dinosaur_jaw"],
        [ 6, 0, "dinosaur_jaw"],
        [ 7, 0, "dinosaur_jaw"],
        [ 8, 0, "dinosaur_jaw"],

        [ 5, 1, "dinosaur_jaw"],
        [ 6, 1, "dinosaur_jaw"],
        [ 7, 1, "dinosaur_jaw"],

        // ---------------- TEETH ----------------

        [ 5, 2, "dinosaur_teeth"],
        [ 6, 2, "dinosaur_teeth"],
        [ 7, 2, "dinosaur_teeth"],

        [ 8, 1, "dinosaur_teeth"],

        // ---------------- BACK LEGS ----------------

        [-2, 2, "dinosaur_leg"],
        [-2, 3, "dinosaur_leg"],
        [-2, 4, "dinosaur_leg"],
        [-2, 5, "dinosaur_leg"],

        [-3, 5, "dinosaur_foot"],
        [-2, 5, "dinosaur_foot"],
        [-1, 5, "dinosaur_foot"],

        // ---------------- FRONT LEGS ----------------

        [ 2, 2, "dinosaur_leg"],
        [ 2, 3, "dinosaur_leg"],
        [ 2, 4, "dinosaur_leg"],

        [ 1, 4, "dinosaur_foot"],
        [ 2, 4, "dinosaur_foot"],
        [ 3, 4, "dinosaur_foot"],

        // ---------------- TAIL ----------------

        [-4, -2, "dinosaur_tail"],
        [-5, -2, "dinosaur_tail"],
        [-6, -2, "dinosaur_tail"],

        [-5, -1, "dinosaur_tail"],
        [-6, -1, "dinosaur_tail"],
        [-7, -1, "dinosaur_tail"],

        [-7, 0, "dinosaur_tail"],
        [-8, 0, "dinosaur_tail"],
        [-9, 0, "dinosaur_tail"],

        [-9, 1, "dinosaur_tail"],
        [-10, 1, "dinosaur_tail"],
        [-11, 1, "dinosaur_tail"]
    ];

    // --------------------------------------------------------
    // Place every body pixel.
    // --------------------------------------------------------

    for (var i = 0; i < body.length; i++) {

        var part = body[i];

        var x = cx + part[0];
        var y = cy + part[1];
        var element = part[2];

        // Do not overwrite something already there.
        if (!getPixel(x, y)) {
            tryCreate(element, x, y);
        }
    }

    // Remove the original cursor pixel if it still exists.
    var centerPixel = getPixel(cx, cy);

    if (centerPixel && centerPixel.element === "giant_dinosaur") {
        tryDelete(cx, cy);
    }
}

export default {
    canvasWidth: 400,
    canvasHeight: 300,

    characterX: 80,
    characterY: 300-32,
    characterFrame: 0,
    characterPose: [ [0,0] ],
    isFacingLeft: true, //default is Right

    //Jumping
    verticalBoost: 0,

    //Keyboard
    isKeyboardLeftPressed: false,
    isKeyboardRightPressed: false,

    bullets: {
        // a: {
        //     x: 380,
        //     y: 200,
        //     direction: "left",
        //     speed: 4
        // },
        // b: {
        //     x: 420,
        //     y: 20,
        //     direction: "left",
        //     speed: 5
        // },
        // c: {
        //     x: 280,
        //     y: 100,
        //     direction: "left",
        //     speed: 4
        // },
        // d: {
        //     x: 380,
        //     y: 280,
        //     direction: "left",
        //     speed: 4
        // }
    }

}
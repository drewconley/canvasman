export default {
    canvasWidth: 400,
    canvasHeight: 300,

    characterX: 80,
    characterY: 10,
    characterFrame: 0,
    characterPose: [ [0,0] ],
    isFacingLeft: true, //default is Right

    //Jumping
    verticalBoost: 0,

    //Keyboard
    isKeyboardLeftPressed: false,
    isKeyboardRightPressed: false,


    walls: [
        {
            _id: "wall1",
            x: 5,
            y: 200,
            height: 40,
            width: 130
        },

        {
            _id: "wall2",
            x: 200,
            y: 150,
            height: 80,
            width: 150
        }
    ],



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
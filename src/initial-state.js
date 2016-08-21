export default {

    counter: 0,

    canvasWidth: 400,
    canvasHeight: 300,

    characterX: 80,
    characterY: 0,
    characterWidth: 20, //hitboxW
    characterHeight: 24, //hitboxY
    inAir: true,

    characterFrame: 0,
    characterPose: [ [0,0] ],
    isAbleToJump: false,
    isFacingLeft: true, //default is Right

    //Jumping
    verticalBoost: 0,

    //Keyboard
    isKeyboardLeftPressed: false,
    isKeyboardRightPressed: false,


    walls: [
        {
            "_id": "placement_1471799473495",
            "x": 0,
            "y": 0,
            "width": 16,
            "height": 288
        },
        {
            "_id": "placement_1471799503050",
            "x": 144,
            "y": 176,
            "width": 32,
            "height": 32
        },
        {
            "_id": "placement_1471799505017",
            "x": 80,
            "y": 144,
            "width": 32,
            "height": 16
        },
        {
            "_id": "placement_1471799507695",
            "x": 16,
            "y": 96,
            "width": 32,
            "height": 16
        },
        {
            "_id": "placement_1471799516043",
            "x": 208,
            "y": 96,
            "width": 16,
            "height": 16
        },
        {
            "_id": "placement_1471799517145",
            "x": 256,
            "y": 48,
            "width": 16,
            "height": 16
        },
        {
            "_id": "placement_1471799518135",
            "x": 288,
            "y": 96,
            "width": 64,
            "height": 16
        },
        {
            "_id": "placement_1471804629540",
            "x": 16,
            "y": 272,
            "width": 224,
            "height": 16
        },
        {
            "_id": "placement_1471804635390",
            "x": 384,
            "y": 0,
            "width": 16,
            "height": 288
        },
        {
            "_id": "placement_1471804652648",
            "x": 16,
            "y": 208,
            "width": 176,
            "height": 16
        },
        {
            "_id": "placement_1471804662424",
            "x": 320,
            "y": 112,
            "width": 32,
            "height": 128
        },
        {
            "_id": "placement_1471804690729",
            "x": 224,
            "y": 160,
            "width": 80,
            "height": 16
        },
        {
            "_id": "placement_1471804698268",
            "x": 304,
            "y": 272,
            "width": 80,
            "height": 16
        },
        {
            "_id": "placement_1471804739758",
            "x": 112,
            "y": 48,
            "width": 32,
            "height": 16
        }
        //{
        //    _id: "wall1",
        //    x: 0,
        //    y: 0,
        //    height: 32 * 20,
        //    width: 16
        //},
        //
        //{
        //    _id: "wall2",
        //    x: 400-16,
        //    y: 0,
        //    height: 32 * 20,
        //    width: 16
        //},
        //
        //{
        //    _id: "wall3",
        //    x: 16,
        //    y: 300-32,
        //    height: 16,
        //    width: 16 * 10
        //},
        //
        //{
        //    _id: "wall4",
        //    x: 16*10,
        //    y: 210,
        //    height: 32,
        //    width: 32*2
        //},
        //{
        //    _id: "wall5",
        //    x: 16*14,
        //    y: 210-32,
        //    height: 32,
        //    width: 32*2
        //},
        //{
        //    _id: "wall5",
        //    x: 16,
        //    y: 300-(32*4),
        //    height: 16,
        //    width: 16 * 5
        //}
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
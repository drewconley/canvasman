const Positions = {
    Stand: [0, 0],
    StepOff: [32, 0],

    Run1: [0, 32],
    Run2: [32, 32],
    Run3: [64, 32],

    Jump: [0, 64],

    //Left
    Left_Stand: [0, 96],
    Left_StepOff: [32, 96],

    Left_Run1: [0, 128],
    Left_Run2: [32, 128],
    Left_Run3: [64, 128],

    Left_Jump: [0, 162],
};

//Frame Arrays
export default {
    Stand: [Positions.Stand],
    StepOff: [Positions.StepOff],
    Run: [
        Positions.Run1, Positions.Run2, Positions.Run3, Positions.Run2
    ],
    Jump: [Positions.Jump],

    //Left
    Left_Stand: [Positions.Left_Stand],
    Left_StepOff: [Positions.Left_StepOff],
    Left_Run: [
        Positions.Left_Run1, Positions.Left_Run2, Positions.Left_Run3, Positions.Left_Run2
    ],
    Left_Jump: [Positions.Left_Jump],
}
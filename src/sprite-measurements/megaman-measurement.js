const Positions = {
    Stand: [0, 0],
    StepOff: [32, 0],

    Run1: [0, 32],
    Run2: [32, 32],
    Run3: [64, 32],

    Jump: [0, 64],

};

//Frame Arrays
export default {
    Stand: [Positions.Stand],
    StepOff: [Positions.StepOff],
    Run: [
        Positions.Run1, Positions.Run2, Positions.Run3, Positions.Run2
    ],
    Jump: [Positions.Jump],
}
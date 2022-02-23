// Code your solution in this file!

const hqBlock = 42
const feet = 264

function distanceFromHqInBlocks(blocks) {
    if (blocks>hqBlock) {
        return blocks-hqBlock
    } else {
        return hqBlock-blocks
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start>destination) {
        return (start-destination) * 264
    } else {
        return (destination-start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    } else if (distance < 2000) {
        return (((start-destination) * 264)-400) * 0.02
    } else if (distance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }

}


let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing >= 315 || bearing < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (bearing >= 45 && bearing < 135) {
        basic.showArrow(ArrowNames.West)
    } else if (bearing >= 135 && bearing < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (bearing >= 225 && bearing < 315) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.clearScreen()
    }
})

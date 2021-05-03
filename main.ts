basic.forever(function () {
    if (input.temperature() > 30) {
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 1)
        led.plot(1, 2)
        led.plot(3, 2)
        led.plot(1, 0)
        led.plot(3, 0)
        led.plot(1, 4)
        led.plot(3, 4)
        led.plot(0, 2)
        led.plot(4, 2)
    } else {
        basic.clearScreen()
    }
})

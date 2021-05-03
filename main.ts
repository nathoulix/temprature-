let strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.temperature() < 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
    if (input.temperature() > 20) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
    if (input.temperature() > 30) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
    }
    if (input.temperature() > 40) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    basic.pause(500)
})
basic.forever(function () {
    led.plotBarGraph(
    0,
    40
    )
})

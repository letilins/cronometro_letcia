let Numero = 0
input.onButtonPressed(Button.A, function () {
    Numero = 0
    while (Numero <= 10) {
        basic.showNumber(Numero)
        basic.pause(1000)
        Numero += 1
        basic.clearScreen()
    }
    basic.showString("  Acabou!")
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Numero = 10
    while (Numero >= 0) {
        basic.showNumber(Numero)
        basic.pause(1000)
        Numero += -1
        basic.clearScreen()
    }
    basic.showString("   Acabou!")
    basic.pause(1000)
    basic.clearScreen()
})

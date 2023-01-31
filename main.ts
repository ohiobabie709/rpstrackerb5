input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    PA += 1
    rounds += 1
    update_scoreboard()
    basic.clearScreen()
})
function update_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + Pb)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + rounds)
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    rounds += 1
    Ties += 1
    update_scoreboard()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    Pb += 1
    rounds += 1
    update_scoreboard()
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("shall we play a game on this nice day?")
    PA = 0
    rounds = 0
    Ties = 0
    Pb = 0
    basic.pause(2000)
}
let Ties = 0
let Pb = 0
let rounds = 0
let PA = 0
reset()

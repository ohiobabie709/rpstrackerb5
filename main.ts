input.onButtonPressed(Button.A, function () {
	
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
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
let Pb = 0
let Ties = 0
let rounds = 0
let PA = 0
OLED.init(128, 64)
OLED.writeStringNewLine("shall we play a game on this nice day?")
PA = 0
rounds = 0
Ties = 0
Pb = 0
basic.pause(2000)

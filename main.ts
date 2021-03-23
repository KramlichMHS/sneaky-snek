tiles.setTilemap(tilemap`backgroundMap`)
let snek = sprites.create(assets.image`headRight`, 0)
let x = 80
let y = 110
snek.setPosition(x, y)
let foodOut = true
let direction = "R"
// set directions
controller.right.onEvent(ControllerButtonEvent.Pressed, function rightPressed() {
    
    if (direction != "L") {
        direction = "R"
        snek.setImage(assets.image`headRight`)
    }
    
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function leftPressed() {
    
    if (direction != "R") {
        direction = "L"
        snek.setImage(assets.image`headLeft`)
    }
    
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function upPressed() {
    
    if (direction != "D") {
        direction = "U"
        snek.setImage(assets.image`headUp`)
    }
    
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function downPressed() {
    
    if (direction != "U") {
        direction = "D"
        snek.setImage(assets.image`headDown`)
    }
    
})
game.onUpdateInterval(500, function movement() {
    
    if (direction == "R") {
        x += 10
    } else if (direction == "L") {
        x -= 10
    } else if (direction == "U") {
        y -= 10
    } else {
        y += 10
    }
    
    snek.setPosition(x, y)
})

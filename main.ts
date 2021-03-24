tiles.setTilemap(tilemap`backgroundMap`)

let snek = sprites.create(assets.image`headRight`, SpriteKind.Player)
let x = 80
let y = 110
snek.setPosition(x, y)
let direction = "R"
let bodyParts = [snek]

let body = [[x,y]]

info.player1.setScore(0)
let food = sprites.create(img`
            . . . . 2 2 . . . .
            . . . 2 2 2 2 . . .
            . . . 2 2 2 2 . . .
            . . 2 2 2 2 2 2 . .
            . . 2 2 2 2 2 2 . .
            . 2 2 2 2 2 2 2 2 .
            . 2 2 2 2 2 2 2 2 .
            . 2 2 2 2 2 2 2 2 .
            2 2 2 2 2 2 2 2 2 2
            2 2 2 2 2 2 2 2 2 2
        `, SpriteKind.Food)
food.setPosition(randint(10, 150), randint(10,110))




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

//movement
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
    /*
    let temp = body[0]
    for(let i = 0; i < body.length; i++){
        temp = body[i]

    }
    */
    snek.setPosition(x, y)
})

//food overlap
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite: Sprite, otherSprite: Sprite) {
    info.player1.changeScoreBy(1)
    otherSprite.setPosition(randint(10,150), randint(10,110))
    let bodyPart = sprites.create(img`
        . 5 5 5 5 5 5 5 .
        5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5
        . 5 5 5 5 5 5 5 .
    `)
    bodyPart.setPosition(x, y)
})



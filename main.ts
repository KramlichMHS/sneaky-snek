tiles.setTilemap(tilemap`backgroundMap`)


let x = 80
let y = 110
let direction = "R"
let bodyParts = [sprites.create(assets.image`headRight`, SpriteKind.Player)]
bodyParts[0].setPosition(x, y)

let body = [[80,110]]

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
        bodyParts[0].setImage(assets.image`headRight`)
    }
    
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function leftPressed() {
    
    if (direction != "R") {
        direction = "L"
        bodyParts[0].setImage(assets.image`headLeft`)
    }
    
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function upPressed() {
    
    if (direction != "D") {
        direction = "U"
        bodyParts[0].setImage(assets.image`headUp`)
    }
    
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function downPressed() {
    
    if (direction != "U") {
        direction = "D"
        bodyParts[0].setImage(assets.image`headDown`)
    }
    
})

//movement
game.onUpdateInterval(500, function movement() {
    for(let i = 1; i < body.length; i++){
        body[i] = body[i - 1]
        bodyParts[i].setPosition(body[i][0], body[i][1])
    }

    if (direction == "R") {
        body[0][0] += 10
    } else if (direction == "L") {
        body[0][0] -= 10
    } else if (direction == "U") {
        body[0][1] -= 10
    } else {
        body[0][1] += 10
    }
    
    bodyParts[0].setPosition(body[0][0], body[0][1])
    
    

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
    bodyPart.setPosition(-10, -10)
    body.push([-10,-10])
    bodyParts.push(bodyPart)
})



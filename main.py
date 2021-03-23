tiles.set_tilemap(tilemap("""backgroundMap"""))
snek = sprites.create(assets.image("""headRight"""),
    0)
x = 80
y = 110

snek.set_position(x, y)

foodOut = True

direction = "R"

#set directions
def rightPressed():
    global direction
    if direction != "L":
        direction = "R"
        snek.set_image(assets.image("""headRight"""))
controller.right.on_event(ControllerButtonEvent.PRESSED, rightPressed)

def leftPressed():
    global direction
    if direction != "R":
        direction = "L"
        snek.set_image(assets.image("""headLeft"""))
controller.left.on_event(ControllerButtonEvent.PRESSED, leftPressed)

def upPressed():
    global direction
    if direction != "D":
        direction = "U"
        snek.set_image(assets.image("""headUp"""))
controller.up.on_event(ControllerButtonEvent.PRESSED, upPressed)

def downPressed():
    global direction
    if direction != "U":
        direction = "D"
        snek.set_image(assets.image("""headDown"""))
controller.down.on_event(ControllerButtonEvent.PRESSED, downPressed)


def movement():
    global x,y
    if direction == "R":
        x += 10
    elif direction == "L":
        x -= 10
    elif direction == "U":
        y -= 10
    else:
        y += 10
    snek.set_position(x,y)

game.on_update_interval(500, movement)

def placeFood():
    if !foodOut:
        
        

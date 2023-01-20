class Game {
    constructor() {
        this.player = new Player()
        this.treasure = new Treasure()
    }

    preload() {
        this.player.image = loadImage('../assets/character-up.png')
        this.player.imageUp = loadImage('../assets/character-up.png')
        this.player.imageDown = loadImage('../assets/character-down.png')
        this.player.imageLeft = loadImage('../assets/character-left.png')
        this.player.imageRight = loadImage('../assets/character-right.png')
        
        this.treasure.image = loadImage('../assets/treasure.png')
    }

    draw() {
        clear()
        this.drawGrid()
        this.player.draw()
        this.treasure.drawTreasure()
    }

    drawGrid() {
        for (let i = 0; i <= 10; i++) {
            line(0, HEIGHT / 10 * i, WIDTH, HEIGHT / 10 * i)
            line(WIDTH / 10 * i, 0, WIDTH / 10 * i, WIDTH);
        }

        // rows
        // line(0, HEIGHT / 10 * 0, WIDTH, HEIGHT / 10 * 0)
        // line(0, HEIGHT / 10 * 1, WIDTH, HEIGHT / 10 * 1)
        // line(0, HEIGHT / 10 * 2, WIDTH, HEIGHT / 10 * 2)
        // line(0, HEIGHT / 10 * 3, WIDTH, HEIGHT / 10 * 3)
        // line(0, HEIGHT / 10 * 4, WIDTH, HEIGHT / 10 * 4)
        // line(0, HEIGHT / 10 * 5, WIDTH, HEIGHT / 10 * 5)
        // line(0, HEIGHT / 10 * 6, WIDTH, HEIGHT / 10 * 6)
        // line(0, HEIGHT / 10 * 7, WIDTH, HEIGHT / 10 * 7)
        // line(0, HEIGHT / 10 * 8, WIDTH, HEIGHT / 10 * 8)
        // line(0, HEIGHT / 10 * 9, WIDTH, HEIGHT / 10 * 9)
        // line(0, HEIGHT / 10 * 10, WIDTH, HEIGHT / 10 * 10)

        // columns
        // line(WIDTH / 10 * 0, 0, WIDTH / 10 * 0, WIDTH)
        // line(WIDTH / 10 * 1, 0, WIDTH / 10 * 1, WIDTH)
        // line(WIDTH / 10 * 2, 0, WIDTH / 10 * 2, WIDTH)
        // line(WIDTH / 10 * 3, 0, WIDTH / 10 * 3, WIDTH)
        // line(WIDTH / 10 * 4, 0, WIDTH / 10 * 4, WIDTH)
        // line(WIDTH / 10 * 5, 0, WIDTH / 10 * 5, WIDTH)
        // line(WIDTH / 10 * 6, 0, WIDTH / 10 * 6, WIDTH)
        // line(WIDTH / 10 * 7, 0, WIDTH / 10 * 7, WIDTH)
        // line(WIDTH / 10 * 8, 0, WIDTH / 10 * 8, WIDTH)
        // line(WIDTH / 10 * 9, 0, WIDTH / 10 * 9, WIDTH)
        // line(WIDTH / 10 * 10, 0, WIDTH / 10 * 10, WIDTH)
    }
}

class Player {
    constructor() {
        this.col = 0
        this.row = 0
        this.imageUp
        this.imageDown
        this.imageLeft
        this.imageRight
        this.image
    }

    draw() {
        image(this.image, this.col, this.row, 100, 100)
    }     

    moveUp() {
        if (this.row >= 100) {
        this.row -= 100
        }

        game.treasure.collision()
        this.image = this.imageUp
    }

    moveDown() {
        if (this.row <= 800) {
        this.row += 100
        }

        game.treasure.collision()
        this.image = this.imageDown
    }

    moveLeft() {
        if (this.col >= 100) {
        this.col -= 100
        }

        game.treasure.collision()
        this.image = this.imageLeft
    }

    moveRight() {
        if (this.col <= 800) {
        this.col += 100
        }
        
        game.treasure.collision()
        this.image = this.imageRight
    }

}

class Treasure {
    constructor() {
        this.col = 0
        this.row = 0
        this.image

        this.setRandomPosition()
    }

    setRandomPosition() {
        this.col = Math.floor(Math.random() * 10) * 100
        this.row = Math.floor(Math.random() * 10) * 100
    }

    drawTreasure() {
        image(this.image, this.col, this.row, 100, 100)
    }

    collision() {
        if (dist(this.col, this.row, game.player.col, game.player.row) < 100) {
        this.setRandomPosition()
        }
    }
}



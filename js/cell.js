class Cell {
    constructor(x, y, index) {
        this.index = index
        this.size = 50
        this.text_size = 35
        this.pos = createVector(x, y)
        this.num = 0
        this.neighbors = []
        this.active = false
        this.mouse_in = false
        this.show_num = false
        this.new_input = true
    }

    show() {
        this.showAt(this.size, 49, 255)
    }

    showAt(size, color, text_color) {
        noStroke()

        if (this.mouse_in) {
            fill(255, 255, 0, 160)
            ellipse(this.pos.x, this.pos.y, size * 1.3, size * 1.3)
        }

        if (this.active) {
            fill(255, 255, 0)
            ellipse(this.pos.x, this.pos.y, size, size)
        } else {
            fill(color)
            ellipse(this.pos.x, this.pos.y, size, size)
        }

        if (this.show_num) {
            textAlign(CENTER, CENTER)
            textFont(font)
            textSize(this.text_size)
            if (this.active) {
                fill(49)
            } else {
                fill(text_color)
            }
            text(this.num, this.pos.x, this.pos.y)
        }
    }

    showEdge() {
        for (let neighor of this.neighbors) {
            if (this.index < neighor.index) {
                Cell.showEdge(this, neighor)
            }
        }
    }

    recalculateTextSize() {
        textSize(this.text_size)
        while (textWidth('' + this.num) > this.size - 5) {
            this.text_size -= 5
            textSize(this.text_size)
        }
    }

    static showEdge(cell_a, cell_b) {
        stroke(49)
        strokeWeight(7)
        line(cell_a.pos.x, cell_a.pos.y, cell_b.pos.x, cell_b.pos.y)
    }
}

love.load = () => {}

love.update = (dt: number) => {}

love.draw = () => {}

love.mousepressed = (x, y, button, isTouch) => {}

love.mousereleased = (x, y, button, isTouch) => {}

love.keypressed = (key, scancode, isRepeat) => {}

love.keyreleased = (key, scancode) => {
	// Close on escape
	if (key == "escape") {
		love.event.quit()
	}
}

love.wheelmoved = (x, y) => {}

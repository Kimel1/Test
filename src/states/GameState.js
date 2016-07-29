//import RainbowText from 'objects/RainbowText';
class GameState extends Phaser.State {

	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY };
		//let text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
		//text.anchor.set(0.5);
		var balls = this.game.add.sprite(center.x,center.y,"ball");
		balls.x = 10;
		var cursors = new GameState.input.keyboard.createCursorKeys();

	}
	preload(){
		this.game.load.image('ball','assets/sprites/shinyball.png');

	}

}

export default GameState;
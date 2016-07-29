
class GameState extends Phaser.State {
    constructor() {
    super();

    }
	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY };
		//let text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
		//text.anchor.set(0.5);
		this.balls = game.add.sprite(center.x,center.y,"ball");
        game.physics.arcade.enable(this.balls);
		this.cursors = game.input.keyboard.createCursorKeys();
		this.balls.anchor.setTo(0.5,0.5);
		this.mouse1X = center.x;
    	this.mouse1Y = center.y;


	}
	update() {

        game.physics.arcade.moveToPointer(this.balls, 1000);
        if (Phaser.Rectangle.contains(this.balls.body, game.input.x, game.input.y))
        {
			this.balls.body.velocity.setTo(0, 0);

			
        }
		console.log(`${this.mouse1X} и ${this.mouse1Y}`);
	}
	preload(){
		this.game.load.image('ball','assets/sprites/shinyball.png');

	}

}


class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'content');
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}
var game = new Game();

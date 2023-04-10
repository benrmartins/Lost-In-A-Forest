import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
	constructor() {
		super('hello-world')
	}

	preload() {
		this.load.image('forest', 'assets/forest.png')
		this.load.image('ground', 'assets/platform.png')
		this.load.image('ground2', 'assets/log.png')
		this.load.image('killground', 'assets/water.png')
		this.load.image('star', 'assets/star.png')
		this.load.image('bomb', 'assets/bomb.png')
		this.load.spritesheet('dude', 'assets/dude.png', {
			frameWidth: 32, frameHeight: 48
		})
	}

	create() {
		this.add.image(712, 375, 'forest')

		this.platforms = this.physics.add.staticGroup()
		this.logs = this.physics.add.staticGroup()
		this.water = this.physics.add.staticGroup()

		this.logs.create(700, 541, 'ground2').setScale(0.42).refreshBody()
		this.water.create(713, 632, 'killground').setScale(0.425).refreshBody()
		this.platforms.create(-50, 600, 'ground')
		this.platforms.create(1475, 600, 'ground')
	}
}

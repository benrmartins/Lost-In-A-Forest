import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 1425,
	height: 675,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			debug: true
		},
	},
	scene: [HelloWorldScene],
}

export default new Phaser.Game(config)

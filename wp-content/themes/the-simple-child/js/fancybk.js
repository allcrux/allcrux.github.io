jQuery(document).ready(function($) {
	// Particles animation for first section background
	new SuperParticles({
		maxFps: 30,
		autoStartAnimation: true,
		container: {
			element: '#topinsert',
			backgroundCssRule: null // css or null (null: don't modify container background)
		},
		pixiApp: {
			antialias: true,
			transparent: true,
			forceFXAA: false,
			powerPreference: 'high-performance',
			resolution: 1
		},
		particles: {
			amount: 200,
			radius: 2,
			velocity: 10,
			color: '0x02afd3',
			fadeInDuration: 3000,
			fadeOutDuration: 600,
			keepRelativePositionOnResize: true
		},
		lines: {
			minDistance: 0.1,
			color: '0x02afd3',
			maxOpacity: 0.4,
			thickness: 1,
			distanceBasedTransparency: true
		},
		debug: {
			showFps: false
		}
	});
});

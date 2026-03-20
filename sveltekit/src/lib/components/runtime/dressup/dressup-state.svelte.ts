export const HEADWEAR = [
	'party-hat',
	'headphones',
	'cap',
	'backwards-cap',
	'crown',
	'astronaut-helmet',
	'tuque',
	'headband',
	'top-hat',
	'bandana',
	'flower',
	'hard-hat',
	'witch-hat'
];

export const NECKWEAR = [
	'bowtie',
	'necktie',
	'scarf',
	'necklace',
	'css-necklace',
	'two-chain'
];

export const ACCESSORIES = [
	'balloons',
	'handlebars',
	'mustache',
	'sunglasses',
	'glasses',
	'mascara',
	'eyelashes',
	'skateboard',
	'tattoo',
	'fangs',
	'ferris'
];

export const COLORS = [
	'#70ffaf', // runtime
	'#ffdb1e', // fresh
	'#ff8a01', // subhosting
	'#00a341', // code-2 (green)
	'#01c2ff', // deploy
	'#1d4ed8', // blue-700
	'#613092', // purple
	'#f472b6', // pink-400
	'#dc2626', // red-600
	'#25272b' // gray-5
];

export const dressupState = $state({
	headwear: 'party-hat' as string,
	neckwear: 'bowtie' as string,
	accessories: [] as string[],
	headwearColor: COLORS[0],
	neckwearColor: COLORS[0],
	accessoryColor: COLORS[4],
	isMenuOpen: false
});

export function toReadable(str: string): string {
	return str
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (l) => l.toUpperCase())
		.replace('Css', 'CSS');
}

export function randomize() {
	const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];
	dressupState.headwear = HEADWEAR[Math.floor(Math.random() * HEADWEAR.length)];
	dressupState.neckwear = NECKWEAR[Math.floor(Math.random() * NECKWEAR.length)];
	dressupState.accessories = ACCESSORIES.filter(() => Math.random() > 0.5);
	dressupState.headwearColor = getRandomColor();
	dressupState.neckwearColor = getRandomColor();
	dressupState.accessoryColor = getRandomColor();
}

export function clearAll() {
	dressupState.headwear = '';
	dressupState.neckwear = '';
	dressupState.accessories = [];
}

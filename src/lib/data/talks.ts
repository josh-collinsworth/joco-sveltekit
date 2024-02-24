import type Talk from '../types/talk'

const talks: Talk[] = [
	{
		title: 'Be Classless – Optimizing Your CSS for WordPress',
		link: 'https://wordpress.tv/2015/11/17/josh-collinsworth-be-classless-optimizing-your-css/',
		event: 'WordCamp Omaha 2015',
		year: 2015
	},
	{
		title: 'WordPress Developer Course',
		event: 'AIM Code School course curriculum, 2015–2019',
		year: 2016
	},
	{
		title: 'Easy WordPress Security for Everyone',
		link: 'https://wordpress.tv/2017/03/05/josh-collinsworth-easy-wordpress-security-for-everyone/',
		event: 'WordCamp Omaha 2016',
		year: 2016
	},
	{
		title: 'A RESTed Development: Understanding the WP REST API Once and For All',
		link: '',
		event: 'WordCamp Omaha 2017',
		year: 2017
	},
	{
		title: 'CSS Variables (lightning talk)',
		link: 'https://techomaha.com/2018/11/josh-collinsworth-css-variables/',
		event: 'BarCamp Omaha 2018',
		year: 2018
	},
	{
		title: 'Getting the Most Out of Local by Flywheel',
		link: '',
		event: 'WordCamp Omaha 2018',
		year: 2018
	},
	{
		title: 'How Not to Make a Crappy-Looking Site: a Crash Course on (Web) Design',
		link: '',
		event: 'WordCamp Omaha 2019',
		year: 2019
	},
	{
		title: 'What is Managed WordPress Hosting?',
		link: 'https://www.youtube.com/watch?v=eBS6UBcDI9k',
		event: 'Video voiceover',
		year: 2019
	},
	{
		title: 'Intro to Accessibility',
		link: '',
		event: 'aware3 internal training',
		year: 2021
	},
	{
		title: 'Views on Svelte With Josh Collinsworth',
		link:
			'https://topenddevs.com/podcasts/views-on-vue/episodes/views-on-svelte-with-josh-collinsworth-vue-177',
		event: 'Views on Vue podcast',
		year: 2022,
		month: 1
	},
	{
		title: 'JS Party 244: The spicy React debate show 🌶️🌶️',
		link: 'https://changelog.com/jsparty/244',
		event: 'JS Party podcast',
		year: 2022,
		month: 9
	},
	{
		title: 'Debating React, Fonts, and Fatherhood with Josh Collinsworth',
		link:
			'https://www.whiskeywebandwhatnot.fm/debating-react-fonts-and-fatherhood-with-josh-collinsworth/',
		event: 'Whiskey, Web and Whatnot podcast',
		year: 2022,
		month: 11
	},
	{
		title: 'Why React is Outdated w/ Josh Collinsworth',
		link:
			'https://podcasters.spotify.com/pod/show/sean-g7/episodes/Why-ReactJS-is-Outdated-w-Josh-Collinsworth-e297f7j',
		event: 'Web Perspectives podcast',
		year: 2023,
		month: 9
	},
	{
		title: 'Deno, React Alternatives, and Copilot Concerns with Triple Threat Josh Collinsworth',
		link: 'https://shoptalkshow.com/603/',
		event: 'ShpTalk Show podcast',
		year: 2024,
		month: 2
	}
]

talks.sort((a, b) => b.year - a.year || b.month - a.month)

export { talks }

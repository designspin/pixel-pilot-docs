// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://designspin.github.io',
	base: process.env.NODE_ENV === 'production' ? '/pixel-pilot-docs' : '/',
	integrations: [
		starlight({
			title: 'Pixel Pilot',
			description: 'A powerful pixel art and animation editor for macOS. Create stunning sprites and bring them to life.',
			logo: {
				src: './src/assets/logo.png',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/designspin/pixel-pilot-docs' }
			],
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: '/pixel-pilot-docs/logo.png' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:card', content: 'summary' },
				},
				{
					tag: 'meta',
					attrs: { name: 'keywords', content: 'pixel art, sprite editor, animation, macOS, game development, pixel art editor, sprite animation' },
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'SoftwareApplication',
						name: 'Pixel Pilot',
						applicationCategory: 'GraphicsApplication',
						operatingSystem: 'macOS',
						offers: {
							'@type': 'Offer',
							price: '0',
							priceCurrency: 'USD'
						},
						description: 'A powerful pixel art and animation editor for macOS. Create stunning sprites and bring them to life.',
						keywords: 'pixel art, sprite editor, animation, macOS, game development'
					})
				},
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'guides/getting-started' },
						{ label: 'Keyboard Shortcuts', slug: 'guides/keyboard-shortcuts' },
					],
				},
				{
					label: 'Legal',
					items: [
						{ label: 'Privacy Policy', slug: 'legal/privacy' },
						{ label: 'Support', slug: 'legal/support' },
					],
				},
			],
		}),
	],
});

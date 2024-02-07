export interface AdhyaayaEventContact {
	name: string;
	phone: string;
}

export interface AdhyaayaCustomProperty {
	type: 'text' | 'select' | 'checkbox';
	label: string;
	options: string[];
	redirect: string[];
}

export interface AdhyaayaEvent {
	// event reference id, used in the url and internally
	id: string;
	mode: 'offline' | 'online'; // Offline / Online etc
	category: 'workshops'; // Technical / Non-Technical etc
	// Title of the event, used everywhere publicly
	name: string;
	description: string;
	// Make sure they are paired, amount[0] is for team_members[0]
	amount: number[];
	team_members: number[];
	// Gives the date and time of the event
	start_date: Date;
	end_date: Date;

	small_image: string; // Image for the card
	icon: string; // icon to use where entire image is not required
	poster: string; // Image for the event page
	contact: AdhyaayaEventContact[];
	whatsapp_link?: string;
	form_link: string;
	custom_instructions?: string[];
	is_active: boolean; // set this to false to hide the event from the list
	// Set values in this for custom props to take.
	custom_properties?: AdhyaayaCustomProperty[];
	is_open: boolean;
}

import virtual_placement_icon from '$lib/assets/icons/virtual-placement.png?url';
import respawn from '$lib/assets/icons/respawn.png';
import vaad_vivad from '$lib/assets/icons/vaad-vivad.png?url';
import foodoshit from '$lib/assets/icons/foodoholics.png?url';
import cricbash from '$lib/assets/icons/cricbash.png?url';
import cadoshit from '$lib/assets/icons/cadoshop.png?url';
import jigyasa from '$lib/assets/icons/jigyasa.png?url';
import stargaze from '$lib/assets/icons/stargazer.png?url';
import gdsc from '$lib/assets/icons/gdsc.png?url';
import valorant from '$lib/assets/icons/valorant1.png?url';
import BGMI from '$lib/assets/icons/BGMI.jpg?url';
import Lounge from '$lib/assets/icons/lounge.jpg?url';
import aeromodel from '$lib/assets/icons/aeromodel.png?url'
import stock from '$lib/assets/icons/stock.png?url';
import roborace from '$lib/assets/icons/roborace.png?url';
import inexpress from '$lib/assets/icons/inexpress.jpg?url';
import sspy from '$lib/assets/icons/sspy.png?url';
import qmaster from '$lib/assets/icons/qmaster.png?url';

// import multirotor from '$lib/assets/icons/multirotor.png?url';

// import p_coming_soon from '$lib/assets/posters/coming-soon.png?url';
import p_avishkar from '$lib/assets/posters/avish.jpg';
import p_bridge_o_craft from '$lib/assets/posters/bridge-o-craft.jpg';
import p_caddiction from '$lib/assets/posters/caddiction.jpg?url';
import p_codeventure from '$lib/assets/posters/cv.jpg';
import p_respawn from '$lib/assets/posters/respawn.jpg';
import p_virtual_placement from '$lib/assets/posters/vp.jpg';
import p_bornpsycos from '$lib/assets/posters/bp.jpg';
import p_cadoshit from '$lib/assets/posters/cad-o-shop.jpg';
import p_cricbash from '$lib/assets/posters/cb.jpg';
import p_foodoholics from '$lib/assets/posters/fh.jpg';
import p_gsdc from '$lib/assets/posters/ML.jpg';
import p_jigyasa from '$lib/assets/posters/jigyasa.jpg';
import p_roborace from '$lib/assets/posters/rr.jpg';
import p_stargaze from '$lib/assets/posters/sg.jpg';
import p_stock from '$lib/assets/posters/ST.jpg';
import p_vaadvivad from '$lib/assets/posters/vaad-vivaad.jpg';

export const Workshop: AdhyaayaEvent[] = [
	{
		id: 'aeromodelling',
		mode: 'offline',
		category: 'workshops',
		name: 'AirShow',
		form_link:'https://forms.gle/hqkitGHze4Hxc5PA8',
		description:
			'Explore the boundless skies at our exhilarating aeromodelling workshop, where enthusiasts come together to craft, customize, and soar high with their handcrafted flying machines. Unleash your creativity and engineering prowess in this hands-on experience that promises a thrilling journey into the world of aviation.',
		amount: [249_00, 249_00, 249_00, 249_00, 249_00],
		team_members: [1, 2, 3, 4, 5],
		start_date: new Date('11 Mar 2023 11:00'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${aeromodel}`,
		poster: p_bridge_o_craft,
		contact: [
			{
				name: 'Kalpana Rathod',
				phone: '8010961439'
			},
			{
				name: 'Pratham Chandankhede',
				phone: '7558281643'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/EV0HsCXDKrvC3xcf6hl1YM'
	},
	{
		id: 'cad-o-shop',
		mode: 'offline',
		category: 'workshops',
		name: 'Lounge',
		form_link:'https://forms.gle/WJmUVBYbJAm3icfD6',
		description:
			'Join CAD-O-SHOP, the ultimate destination for all aspiring engineers and designers! This event is an incredible opportunity to learn about the latest software trends and techniques demanded by the industry. With the guidance of expert professionals, you can explore the world of 3D modelling and turn your imagination into reality.',
		amount: [0],
		team_members: [1],
		start_date: new Date('10 Mar 2023 11:00'),
		end_date: new Date('10 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${Lounge}`,
		poster: p_cadoshit,
		contact: [
			{
				name: 'ATHARVA MANDE',
				phone: '8485056718'
			},
			{
				name: 'Sahil Brahme',
				phone: '9552269716'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/BIEeiqLyfQg41ZKZBT06WG'
	},
	{
		id: 'jigyasa',
		mode: 'offline',
		category: 'workshops',
		name: 'Jigyasa',
		form_link:'https://forms.gle/A2HJTjxd58EMYWrb6',
		description:
			"Are you passionate about serving your country technically? Want to gain insights and knowledge from esteemed personalities of Defense services/civil services? Join Trishakti Cell in collaboration with Adhyaaya for JIGYASA- an exclusive live interview with Air Vice Marshal Suryakant Chintaman Chafekar (AVSM,SC) Retd. Discover, Diagnose, and Demystify the ways to achieve your goals through this insightful event. Don't miss out on this opportunity to hear from a seasoned expert in the field! Register now, it's free of cost and open to all!",
		amount: [0],
		team_members: [1],
		start_date: new Date('9 Mar 2023 15:00'),
		end_date: new Date('9 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${jigyasa}`,
		poster: p_jigyasa,
		contact: [
			{
				name: 'Dovesh Aglawe',
				phone: '7385417432'
			},
			{
				name: 'Kunal Rahangdale',
				phone: '9657837613'
			},
			{
				name: 'Rohini Shambharkar',
				phone: '8862065056'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/GwpSrB9MEcL4sW54WL1Hto'
	},
	{
		id: 'stargaze',
		mode: 'offline',
		category: 'workshops',
		name: 'Stargaze',
		form_link:'https://forms.gle/kVe4gLgZ63T3yfPK9',
		description:
			"Explore the depths of the universe at Adhyaaya'24! Join the Astronomy Club at GCOEN for expert guest lectures, hands-on exploration sessions, and more. Come and STARGAZE with us!",
		amount: [59_00],
		team_members: [1],
		start_date: new Date('21 Feb 2024'),
		end_date: new Date('21 Feb 2024'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${stargaze}`,
		poster: p_stargaze,
		contact: [
			{
				name: 'Vedant Gotmare',
				phone: '9921707207'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/Kh6yyGQAQRhDOtQ4tUDJFG'
	},
	{
		id: 'stock-market-workshop',
		mode: 'offline',
		category: 'workshops',
		form_link:'https://forms.gle/fNndnp9LMDV1Ev4W7',
		name: 'Stock Talk',
		description:
			"Unleash the Power of the Stock Market: Join us for an exciting offline workshop where you'll learn the fundamentals of investing, develop your own trading strategies, and gain valuable insights from industry experts. Discover how to navigate the twists and turns of the market and make informed decisions that can lead to financial success. Whether you're a beginner or an experienced trader, this workshop is your opportunity to level up your stock market game and achieve your investment goals.",
		amount: [49_00],
		team_members: [1],
		start_date: new Date('9 Mar 2023 13:00'),
		end_date: new Date('9 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${stock}`,
		poster: p_stock,
		contact: [
			{
				name: 'SHLOK TAJNE',
				phone: '8237050035'
			},
			{
				name: 'MITHILESH ZHALKE',
				phone: '9511652253 '
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/HhguujUB4Hk4cMsLyw6nRJ'
	},
	{
		id: 'gdsc-lecture',
		mode: 'offline',
		category: 'workshops',
		name: 'GDSC ML workshop',
		form_link:'https://forms.gle/uK7MWkk8LhtZjiMr8',
		description:
			"Adhyaaya in collaboration with GSDC GCOEN is bringing the future to your doorstep with the cutting-edge realm of machine learning at our workshop, where participants delve into the intricacies of Tensor Flow. Unlock the potential of artificial intelligence as we guide you through hands-on experiences and empower you to harness the power of advanced algorithms!",
		amount: [0],
		team_members: [1],
		start_date: new Date('22 Feb 2024'),
		end_date: new Date('22 Feb 2024'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${gdsc}`,
		poster: p_gsdc,
		contact: [
			{
				name: 'Hitanshu Gedam',
				phone: '8007818439'
			},
			{
				name: 'Saket Tabhane',
				phone: '8669139466'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/BD6gqwlO5FC5qL4I4WEKAy'
	}

];

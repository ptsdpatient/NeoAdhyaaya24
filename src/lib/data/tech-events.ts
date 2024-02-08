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
	category: 'technical'; // Technical / Non-Technical etc
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
import codeventure from '$lib/assets/icons/Codeventure.png?url'
import roborace from '$lib/assets/icons/roborace.png?url';
import inexpress from '$lib/assets/icons/inexpress.jpg?url';
import sspy from '$lib/assets/icons/sspy.png?url';
import qmaster from '$lib/assets/icons/qmaster.png?url';
import avishkar from '$lib/assets/icons/avishkar.png?url'

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

export const TechEvent: AdhyaayaEvent[] = [
	
	{
		id: 'avishkar',
		mode: 'online',
		category: 'technical',
		name: 'Avishkar',
		form_link:'https://forms.gle/77QwMdibowwXqmiY6',
		description:
			'Avishkar is a project competition for engineering students to showcase their innovative ideas. Teams can have up to 5 members and projects can be in hardware or software categories. Competition consists of two rounds: elimination and questionnaire. Register today!',
		amount: [159_00, 159_00],
		team_members: [2, 4],
		start_date: new Date('9 Mar 2023 13:00'),
		end_date: new Date('9 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${avishkar}`,
		poster: p_avishkar,
		contact: [
			{
				name: 'Maithili Patil',
				phone: '9665555907'
			},
			{
				name: 'Shruti Gadge',
				phone: '7248907172 '
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/BPDlJw6eH90LKUv0AGcvAg'
	},
	{
		id: 'vp',
		mode: 'offline',
		category: 'technical',
		name: 'Virtual Placement',
		form_link:'https://forms.gle/wVqaFJ6uGTTLfiwk7',
		description:
			"Attention all students! Are you ready to take the first step towards your dream job? Adhyaaya'24 Virtual Placement is here to help you prepare and excel in your upcoming placements. With an entry fee of only 70/- and a price pool of up to 7k, this is an opportunity you cannot miss! You will be tested on your mental ability, communication skills, stress-handling, and confidence. Don't wait, register now and get ready to impress your future employers!",
		amount: [79_00],
		team_members: [1],
		start_date: new Date('20,21 Feb 2024'),
		end_date: new Date('20,21 Feb 2024'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: virtual_placement_icon,
		
		poster: p_virtual_placement,
		contact: [
			{
				name: 'Noopur Yelne',
				phone: '8830238801'
			},
			{
				name: 'Shreedhar Shinde',
				phone: '7058180488'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/Bb6BOwMLprsGoz0sggxGaz'
	},
	{
		id: 'codeventure',
		mode: 'online',
		category: 'technical',
		name: 'CodeVenture',
		form_link:'https://forms.gle/YH9YncDvWnWUZsrx8',
		description:
			'CodeVenture is a coding competition that tests your debugging and coding skills. Showcase your expertise in mathematics, data structures, algorithms and more. Compete solo using any programming language on a PC with a good internet connection. Join us for a thrilling coding experience!',
		amount: [0],
		team_members: [1],
		start_date: new Date('21 Feb 2024'),
		end_date: new Date('21 Feb 2024'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${codeventure}`,
		poster: p_codeventure,
		contact: [
			{
				name: 'HITANSHU GEDAM',
				phone: '8007818439'
			},
			{
				name: 'SAKET TABHANE',
				phone: '8669139466'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/BcAeNWFxTmBJyR8FwaQNIW'
	},
	{
		id: 'innovationxpress',
		mode: 'offline',
		category: 'technical',
		name: 'Innovation Xpress',
		form_link:'https://forms.gle/FRjQ2ovAgy1M95UW7',
		description:
			'Innovation Express, a dynamic event fostering creativity and ingenuity, accelerates the journey of groundbreaking ideas, propelling participants into a fast-paced realm of innovation and collaboration',
		amount: [249_00, 249_00, 249_00, 249_00, 249_00],
		team_members: [1, 2, 3, 4, 5],
		start_date: new Date('11 Mar 2023 11:00'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${inexpress}`,
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
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/EV0HsCXDKrvC3xcf6hl1YM'
	},
	
	{
		id: 'structurespy',
		mode: 'offline',
		category: 'technical',
		name: 'Structure Spy',
		form_link:'https://forms.gle/hEeaJg8xyuPHTi7G8',
		description:
			'Structure Spy, an innovative event, invites participants to unravel the secrets of design and architecture, fostering a creative exploration of built environments and inspiring a deeper understanding of the hidden stories within structures',
		amount: [249_00, 249_00, 249_00, 249_00, 249_00],
		team_members: [1, 2, 3, 4, 5],
		start_date: new Date('11 Mar 2023 11:00'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${sspy}`,
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
		id: 'quizmaster',
		mode: 'offline',
		category: 'technical',
		name: 'Quiz Masters',
		form_link:'https://forms.gle/2LS9rJ37fnAq3Gya6',
		description:
			'Quiz Masters, an intellectually charged event, combines the thrill of quiz-solving with the art of critical thinking, challenging minds to soar beyond facts and dive deep into the realms of analytical brilliance',
		amount: [249_00, 249_00, 249_00, 249_00, 249_00],
		team_members: [1, 2, 3, 4, 5],
		start_date: new Date('11 Mar 2023 11:00'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${qmaster}`,
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
		id: 'roborace',
		mode: 'offline',
		category: 'technical',
		name: 'RoboRace',
		form_link:'https://forms.gle/C4gLJo3HpxzrULFHA',
		description:
			"Are you ready to test your driving skills in a high-octane race against the clock? Join us for RoboRace, where you'll have the opportunity to navigate a challenging race track using a bot provided by DROID DEVS. Whether you're a seasoned pro or a first-time racer, this event is open to all students, so grab your friends and sign up for a chance to win big prizes! With an easier track to start and a final round with even more challenging obstacles, the competition will be fierce, but only the fastest will come out on top. So what are you waiting for? Join us for an unforgettable event that's sure to be a highlight of the year!",
		amount: [69_00],
		team_members: [1],
		start_date: new Date('21 Feb 2024'),
		end_date: new Date('21 Feb 2024'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${roborace}`,
		poster: p_roborace,
		contact: [
			{
				name: 'SHREEDHAR SHINDE',
				phone: '7058180488'
			},
			{
				name: 'ADITYA DAMBLE',
				phone: '8378847784'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KXtte17v1QuBEgTSesPT2q'
	},
	
	
	
	

];

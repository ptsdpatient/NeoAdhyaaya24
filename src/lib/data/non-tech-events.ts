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
	category: 'non-technical'; // Technical / Non-Technical etc
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
import bornpsychos from '$lib/assets/icons/born_psychos.png?url'

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

export const NonTechEvent: AdhyaayaEvent[] = [
	{
		// this is a pseudoevent.
		id: '::respawn',
		mode: 'offline',
		category: 'non-technical',
		name: 'Respawn',
		description:
			'Respawn is an e-sports event featuring popular games like COD, VALORANT and CHESS, available on Mobile and PC platforms. Open to all ages, COD and VALORANT have a team entry fee, with teams of 4 and 5 players respectively. CHESS has a solo entry fee. Matches in COD and VALORANT last for a maximum of 40 minutes and cheating will result in a ban. Joining information will be provided through a WhatsApp group.',
		amount: [0, 0, 0],
		team_members: [0, 0, 0],
		start_date: new Date('10 Mar 2023'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${respawn}`,
		poster: p_respawn,
		contact: [
			{
				name: 'Rohit Bhoge (Valo & COD)',
				phone: '7972520981'
			},
			{
				name: 'Shiwang Pandey (Chess)',
				phone: '8459795840'
			}
		],
		form_link: "",
		is_active: false,
		is_open: false,
		custom_properties: [
			{
				type: 'select',
				label: 'Select your game',
				options: ['Valorant - Squad', 'CoD Mobile - Quartet', 'Chess - Solo'],
				redirect: ['respawn-valorant', 'respawn-cod', 'respawn-chess']
			}
		]
	},
	{
		id: 'respawn',
		mode: 'online',
		category: 'non-technical',
		name: 'Valorant',
		form_link:'https://forms.gle/rLRDLYHYUKdTdHSo9',
		description:
			'Immerse yourself in the electrifying world of tactical prowess and precise aim at the upcoming Valorant Tournament, where teams clash in a battle of wits and skill. Brace for intense competition and unforgettable moments as players showcase their mastery in this adrenaline-fueled gaming spectacle.',
		amount: [159_00],
		team_members: [4],
		start_date: new Date('20,21 Feb 2024'),
		end_date: new Date('20,21 Feb 2024'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${valorant}`,
		poster: p_respawn,
		contact: [
			{
				name: 'ABHISHEKH KUBER',
				phone: '9145647809'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KXRX7DJTXR8HGTk1pE4GUw'
	},
	{
		id: 'respawn',
		mode: 'online',
		category: 'non-technical',
		name: 'BGMI',
		form_link:'https://forms.gle/rLRDLYHYUKdTdHSo9',
		description:
			'Thrilling battles and fierce competition took center stage at the BGMI Tournament, where skilled gamers clashed in an electrifying display of strategy and precision. The event was a celebration of esports excellence, showcasing the best players vying for victory in the world of Battlegrounds Mobile India',
		amount: [159_00],
		team_members: [4],
		start_date: new Date('21 Feb 2024'),
		end_date: new Date('21 Feb 2024'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${BGMI}`,
		poster: p_respawn,
		contact: [
			{
				name: 'SACHIN BAHEKAR',
				phone: '9145318774'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KXRX7DJTXR8HGTk1pE4GUw'
	},
	{
		id: 'respawn',
		mode: 'online',
		category: 'non-technical',
		name: 'Chess',
		form_link:'https://forms.gle/rLRDLYHYUKdTdHSo9',
		description:
			'The Call of Duty Tournament electrified the gaming community as skilled competitors clashed in intense battles, showcasing strategic prowess and precise reflexes. Spectators were on the edge of their seats, immersed in the thrilling virtual warfare that unfolded during this epic gaming showdown.',
		amount: [159_00],
		team_members: [4],
		start_date: new Date('20 Feb 2024'),
		end_date: new Date('21 Feb 2024'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${respawn}`,
		poster: p_respawn,
		contact: [
			{
				name: 'ZISHAN DESHMUKH',
				phone: '862388620'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KXRX7DJTXR8HGTk1pE4GUw'
	},
	{
		id: 'vaadvivad',
		mode: 'offline',
		category: 'non-technical',
		name: 'Vaad Vivad',
		form_link:'https://forms.gle/StvYoNWh6osNgS2B7',
		description:
			'VAAD-VIVAAD is a public speaking event with three rounds. Participants will be given topics related to social issues and will have 2 and 4 minutes to express their ideas respectively. Register now by paying the entry fee of 49/- (solo) and boost your public speaking skills',
		amount: [49_00],
		team_members: [1],
		start_date: new Date('21 Feb 2024'),
		end_date: new Date('21 Feb 2024'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${vaad_vivad}`,
		poster: p_vaadvivad,
		contact: [
			{
				name: 'PRACHITI KINARKAR',
				phone: '9209268768'
			},
			{
				name: 'MUKTI PUROHIT',
				phone: '8767333570'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/Fihx9B1pCwCEmE6yyJRIs7'
	},
	{
		id: 'born-psychos',
		mode: 'offline',
		category: 'non-technical',
		name: 'Born-Psychos',
		form_link:'https://forms.gle/eR48dAaDNgumtqy67',
		description:
			'Born Psychos is an adrenaline-fueled event that tests your aptitude skills through exciting rounds and challenges. Hone your critical thinking, leadership, and teamwork abilities while solving riddles and participating in elimination-style games. Join with a team of 4 for 199/-. Embrace your inner psychos and register today for a thrilling experience!',
		amount: [199_00],
		team_members: [4],
		start_date: new Date('21 Feb 2024'),
		end_date: new Date('21 Feb 2024'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${bornpsychos}`,
		poster: p_bornpsycos,
		contact: [
			{
				name: 'SAYLI THER',
				phone: '845944211'
			},
			{
				name: 'SUSHANT GUPTA',
				phone: '8080607617'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/ErzzKroyiw6IoL5pAWzHC5'
	},
	{
		id: 'foodoholic',
		mode: 'offline',
		form_link:'https://forms.gle/q2NNjZaLzz1gaBv39',
		category: 'non-technical',
		name: 'Food-O-Holic',
		description:
			'"Food-o-Holic" is an exciting competition for teams of 4 members with an entry fee of 299. The competition consists of 3 rounds: "Screaming Baloons," "Meri Foodie Kismat," and "Desert Island." In each round, teams compete in food-related challenges and quizzes, from collecting buns with tied hands to finishing a dessert without using their hands. The winning team is decided by points or speed. Register now for a fun and thrilling culinary adventure.',
		amount: [299_00],
		team_members: [4],
		start_date: new Date('20 Feb 2024'),
		end_date: new Date('20 Feb 2024'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${foodoshit}`,
		poster: p_foodoholics,
		contact: [
			{
				name: 'RANZ RATHOD',
				phone: '8010162405'
			},
			{
				name: 'SUMIT KAWDE',
				phone: '8007153888'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KoKTPhgXNZxEof5xHUBLCh'
	},
	{
		id: 'crickbash',
		mode: 'offline',
		category: 'non-technical',
		form_link:'https://forms.gle/ykkWEz7gBszqo5zXA',
		name: 'Cricbash',
		description:
			'Join the thrilling Cricbash cricket league with a team of 6 (mixed gender). Compete in 5-over matches with fun challenges and special "Bazooka" spot for bonus runs. Hurry and register your team now as slots are limited!',
		amount: [499_00],
		team_members: [6],
		start_date: new Date('20,21 Feb 2024'),
		end_date: new Date('20,21 Feb 2024'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `${cricbash}`,
		poster: p_cricbash,
		contact: [
			{
				name: 'Om Lokhande',
				phone: '7720012113'
			},
			{
				name: 'Virendra Rathod',
				phone: '8263055699'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/ETCp1yUYn5U8BEDSp5VtBH'
	},
	
];

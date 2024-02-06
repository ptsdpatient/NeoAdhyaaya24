<script lang="ts">
	import { onMount } from 'svelte';
	import { SPONSORS } from '$lib/data/sponsors';

	const TITLE_SPONSOR = SPONSORS.find((sponsor) => sponsor.category === 'TITLE');

	
	const SPONSORS_LIST = (SPONSORS.filter((sponsor) => sponsor.category != 'TITLE'));
</script>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
<svelte:head>
	<title>Our Sponsors | Adhyaaya'24</title>
</svelte:head>

<div
	
	class="-z-50 fixed h-screen w-screen scale-105 overflow-clip bg"
/>

<div class="flex items-center flex-col pt-28 px-4">
	<div class="text-4xl font-bold text-center">Sponsors</div>

	<!-- <div class="mt-12">
      <div class="text-3xl font-bold mb-4">{TITLE_SPONSOR?.title}</div>
      <img src={TITLE_SPONSOR?.image} alt={TITLE_SPONSOR?.title} />
    </div>
     -->
	<div class="mt-12 flex flex-row flex-wrap items-center gap-10 px-4">
		{#each SPONSORS_LIST as sponsor}
			<a href={sponsor.link} class="max-w-sm mx-auto mt-8 text-center">
				<img
					height="200"
					width="200"
					src={sponsor.image}
					alt={sponsor.title}
					class="bg-white rounded-md mx-auto"
				/>
				<div class="mt-2 text-lg font-bold nunu">{sponsor.name}</div>
				<div class="mt-2 text-md font-semibold">{sponsor.title}</div>
			</a>
		{/each}
	</div>
</div>

<style>
	
</style>

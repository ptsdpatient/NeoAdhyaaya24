<script lang="ts">
	import { onMount } from 'svelte';
	import { SPONSORS } from '$lib/data/sponsors';
    
    import adhyaayaLogo from '$lib/images/adhyaaya-logo.png' 
    import dropdownIcon from '$lib/images/dropdown.png'
	const TITLE_SPONSOR = SPONSORS.find((sponsor) => sponsor.category === 'TITLE');
    let dropdown=false;
    function toggle(){
        dropdown=!dropdown
        alert("hello")
    }
	
	const SPONSORS_LIST = (SPONSORS.filter((sponsor) => sponsor.category != 'TITLE'));
</script>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
<svelte:head>
	<title>Our Sponsors | Adhyaaya'24</title>
</svelte:head>
<div class="header fixed z-99 cursor-pointer">
    <a href="/" class="">
        <img class="adhyaayaLogo" src={adhyaayaLogo} alt="Adhyaaya Logo">
    </a>
    <a on:click={toggle} on:keydown={toggle} class="select" href="#">
        <img class="dropdownIcon"  src={(dropdown)?dropdownIcon:dropdownIcon} alt="Adhyaaya Logo">
        {#if dropdown}
        <div class="dropdown">
            <a class="dropdown_item" href="/">home</a>
            <a class="dropdown_item" href="/events">events</a>
            <a class="dropdown_item" href="/about">about us</a>
            <a class="dropdown_item" href="/contacts">contact</a>
            <a class="dropdown_item" href="/gallery">gallery</a>
            <a class="dropdown_item" href="/sponsors">sponsors</a>
            <a class="dropdown_item" href="/teams">teams</a>
        </div>
        {/if}
    </a>
</div>


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
	.header{
        width:100%;
        height:6rem;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .adhyaayaLogo{
        width:10rem;
        margin:auto;
        padding:0.4rem;
    
        padding-left: 1rem;;
    }
    
    .dropdownIcon{
        width:3rem;
        margin:auto;
        position:absolute;
        top:1rem;
        right:1rem;
        user-select:text
    }
   .dropdown{
    display:flex;
    position:absolute;
    flex-direction: column;
    width:6rem;
    gap:0.3rem;
    height:auto;
   }
   .dropdown_item{
    padding:0.5rem;
    height:1.2rem;
    text-align: center;
    width:4rem;
    background-color: antiquewhite;

}
</style>

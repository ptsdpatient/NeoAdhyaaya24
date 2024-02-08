<script lang="ts">
	import { onMount } from 'svelte';
	import { SPONSORS } from '$lib/data/sponsors';
    import hbackground from '$lib/images/horizontal-bg.jpg'
    import vbackground from '$lib/images/vertical-bg.jpg'
    import adhyaayaLogo from '$lib/images/adhyaaya-logo.png' 
    let logo=hbackground
    let mobile=false
    import dropdownIcon from '$lib/images/dropdown.png'
	const TITLE_SPONSOR = SPONSORS.find((sponsor) => sponsor.category === 'TITLE');
    let dropdown=false;
    function toggle(){
        dropdown=!dropdown
    }
    const handleResize = () => {
    logo=(window.innerWidth>1024)?hbackground:vbackground
    mobile=(window.innerWidth>1024)?false:true
  };
    onMount(() => {
    // mobile=(window.innerWidth>1024)?false:true
    mobile=(window.innerWidth>1024)?false:true
    logo=(window.innerWidth>1024)?hbackground:vbackground
    window.addEventListener('resize', handleResize);
 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
	
	const SPONSORS_LIST = (SPONSORS.filter((sponsor) => sponsor.category != 'TITLE'));
</script>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
<svelte:head>
	<title>Our Sponsors | Adhyaaya'24</title>
</svelte:head>
<img class="h-full w-full fixed filter brightness-60" style="z-index:-1;top:0;" src={(mobile)?vbackground:hbackground} alt="background" width=100% height=100% >

<div class="header fixed z-99 cursor-pointer" style="z-index:999">
    <a href="/" class="">
        <img class="adhyaayaLogo" src={adhyaayaLogo} alt="Adhyaaya Logo">
    </a>
    <a on:click={toggle} on:keydown={toggle} class="select" href="#" style="z-index:9999">
        <img class="dropdownIcon"  src={(dropdown)?dropdownIcon:dropdownIcon} alt="Adhyaaya Logo">
        {#if dropdown}
        <div class="dropdown flex flex-col w-40 bg-opacity-40 bg-gray-900 backdrop-blur-sm rounded border border-white" style=" display:flex;position: absolute;top: 4rem;right: 2rem;flex-direction: column;border-radius: 1rem;height:auto;">
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/">home</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600  p-2 w-40 transition-all-ease" href="/events">events</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600  p-2 w-40 transition-all-ease" href="/gallery">gallery</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/sponsors">sponsors</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/teams">teams</a>
        </div>
        {/if}
    </a>
</div>


<div class="flex items-center flex-col pt-28 px-4">
	<div class="text-4xl font-bold text-center text-white">Sponsors</div>

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
				<div class="mt-2 text-lg font-bold nunu text-white">{sponsor.name}</div>
				<div class="mt-2 text-md font-semibold text-white">{sponsor.title}</div>
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
    .dropdown_item{
    border-radius: 0.7rem;
   }
   .dropdown{
    display:flex;
    position:absolute;
    flex-direction: column;
    gap:0.3rem;
    height:auto;
   }
   .dropdown_item{
    border-radius: 0.7rem;
   }
   
</style>

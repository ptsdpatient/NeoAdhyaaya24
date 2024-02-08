<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
    import hbackground from '$lib/images/horizontal-bg.jpg'
    import vbackground from '$lib/images/vertical-bg.jpg'
    let logo = hbackground;
    import {onMount} from 'svelte'
    let dropdown=false;
    let mobile=false;

    function toggle(){
        dropdown=!dropdown
    }
    const handleResize = () => {
    logo=(window.innerWidth>1024)?hbackground:vbackground
    mobile=(window.innerWidth>1024)?false:true
  };
    onMount(() => {
		logo=(window.innerWidth>1024)?hbackground:vbackground
    mobile=(window.innerWidth>1024)?false:true
    window.addEventListener('resize', handleResize);
 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
    import adhyaayaLogo from '$lib/images/adhyaaya-logo.png' 
    import dropdownIcon from '$lib/images/dropdown.png'
let options = {
	type: 'loop',
	autoplay: true,
	interval: 3000,
}
</script>

<svelte:head>
	<title>Our Glorious Past | Adhyaaya'24</title>
</svelte:head>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<!-- zoomwall.js -->
<div class="header fixed">
    <a href="/">
        <img class="adhyaayaLogo" src={adhyaayaLogo} alt="Adhyaaya Logo">
    </a>
    <a on:click={toggle} on:keydown={toggle} class="select" href='#'>
        <img class="dropdownIcon"  src={(dropdown)?dropdownIcon:dropdownIcon} alt="Adhyaaya Logo">
        {#if dropdown}
        <div class="dropdown flex flex-col w-40 bg-opacity-40 bg-gray-900 backdrop-blur-sm rounded border border-white" style=" display:flex;position: absolute;top: 4rem;right: 2rem;flex-direction: column;border-radius: 1rem;height:auto;">
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/">home</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/events">events</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/gallery">gallery</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/sponsors">sponsors</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/teams">teams</a>
        </div>
        {/if}
    </a>
</div>
<img class="fixed h-full w-full" alt="bg" src={logo}>
<div
	class="events-container w-1/2 mx-auto grid grid-cols-1 justify-items-stretch scroll-smooth pb-16"
>
	<p class="text-white font-bold text-3xl md:text-6xl p-10 pb-0 m-auto" style="z-index:99">Gallery</p>
	
	<p class="text-white  text-5xl p-10  m-auto" style="z-index:99">2023</p>
	<Splide {options} aria-label="2023" id="2023">
		{#each Array.from({length: 6}) as _, i}
			<SplideSlide>
			<img src="/gallery/2023/{i}.JPG" alt="" class="mx-auto" />
		  </SplideSlide>
		{/each}
	  </Splide>
	
	
	<p class="text-white  text-5xl p-10  m-auto" style="z-index:99">2022</p>
	<Splide {options} aria-label="2022" id="2022">
		{#each Array.from({length: 6}) as _, i}
			<SplideSlide>
			<img src="/gallery/2022/{i}-min.jpg" alt="" class="mx-auto" />
		  </SplideSlide>
		{/each}
	  </Splide>


	  <p class="text-white  text-5xl p-10  m-auto" style="z-index:99">2021</p>

	<Splide {options} aria-label="2021" id="2021">
		{#each Array.from({length: 11}) as _, i}
			<SplideSlide>
			<img src="/gallery/2021/{i}.jpeg" alt="" class="mx-auto max-h-[50vh]" />
		  </SplideSlide>
		{/each}
	  </Splide>
	  <p class="text-white  text-5xl p-10  m-auto" style="z-index:99">2020</p>

	<!-- <div class="zoomwall" id="2020">
		<img src="/gallery/2020/0.jpg" alt="" />
		<img src="/gallery/2020/1.jpg" alt="" />
		<img src="/gallery/2020/2.jpg" alt="" />
		<img src="/gallery/2020/3.jpg" alt="" />
		<img src="/gallery/2020/4.jpg" alt="" />
		<img src="/gallery/2020/5.jpg" alt="" />
		<img src="/gallery/2020/6.jpg" alt="" />
		<img src="/gallery/2020/7.jpg" alt="" />
		<img src="/gallery/2020/8.jpg" alt="" />
		<img src="/gallery/2020/9.jpg" alt="" />
		<img src="/gallery/2020/10.jpg" alt="" />
		<img src="/gallery/2020/11.jpg" alt="" />
	</div> -->
	<Splide {options} aria-label="2020" id="2020">
		{#each Array.from({length: 11}) as _, i}
			<SplideSlide>
			<img src="/gallery/2020/{i}.jpg" alt="" class="mx-auto max-h-[50vh]" />
		  </SplideSlide>
		{/each}
	  </Splide>
	  <p class="text-white  text-5xl p-10  m-auto" style="z-index:99">2019</p>

	<!-- <div class="zoomwall" id="2019">
		<img src="/gallery/2019/0.jpg" alt="" />
		<img src="/gallery/2019/1.jpg" alt="" />
		<img src="/gallery/2019/2.jpg" alt="" />
		<img src="/gallery/2019/3.jpg" alt="" />
		<img src="/gallery/2019/4.jpg" alt="" />
		<img src="/gallery/2019/5.jpg" alt="" />
		<img src="/gallery/2019/6.jpg" alt="" />
		<img src="/gallery/2019/7.jpg" alt="" />
		<img src="/gallery/2019/8.jpg" alt="" />
		<img src="/gallery/2019/9.jpg" alt="" />
		<img src="/gallery/2019/10.jpg" alt="" />
		<img src="/gallery/2019/11.jpg" alt="" />
	</div> -->
	<Splide {options} aria-label="2019" id="2019">
		{#each Array.from({length: 11}) as _, i}
			<SplideSlide>
			<img src="/gallery/2019/{i}.jpg" alt="" class="mx-auto max-h-[50vh]" />
		  </SplideSlide>
		{/each}
	  </Splide>
	  <p class="text-white  text-5xl p-10  m-auto" style="z-index:99">2018</p>


	<Splide {options} aria-label="2018" id="2018">
		{#each Array.from({length: 11}) as _, i}
			<SplideSlide>
			<img src="/gallery/2018/{i}.jpg" alt="" class="mx-auto max-h-[50vh]" />
		  </SplideSlide>
		{/each}
	  </Splide>
</div>



<style>
	/* @import 'zoomwall.js/lib/zoomwall.css'; */

	.zoomwall {
		font-size: 0;
		overflow: hidden;
	}

	.zoomwall img {
		display: inline-block;
		width: auto;
		height: 15vw;
		opacity: 1;
		vertical-align: top;
		transform-origin: 0% 0%;
		transition-property: transform, opacity;
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
		padding-left: 1rem;
		padding-bottom: 1rem;
	}

	.zoomwall.lightbox img {
		opacity: 0.3;
		transition-timing-function: ease-in;
	}

	.zoomwall.lightbox img.active {
		opacity: 1;
	}


	.bg {
		background: var(--bg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.header{
        width:100%;
        height:6rem;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
		z-index:999;
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
</style>

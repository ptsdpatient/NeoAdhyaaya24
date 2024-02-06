<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import adhLogo from '$lib/images/adhyaaya-logo.png'
	import dropdown from '$lib/images/dropdown.png'

</script>

<header class="h-[6rem]  items-center" style="fixed">
	<div class="flex flex-row w-full h-full justify-between ">
	<div class="md:w-[10rem] h-full ">
		<a href="/">
		<img src={adhLogo} alt="adhyaaya logo" >
		</a>
	</div>

	<div class="h-full md:w-[4rem] bg-red-500 items-center">
		<nav>
		<a href="/events">
		<img src={dropdown} class=' m-auto ' alt="dropdown">
		</a>
	</nav>
	</div>
	</div>


</header>

<style>
	
</style>

<script>
    import adhyaayaLogo from '$lib/images/adhyaaya-logo.png' 
    import dropdownIcon from '$lib/images/dropdown.png'
	let dropdown=false;
    function toggle(){
        dropdown=!dropdown
    }
</script>

<svelte:head>
	<title>About</title>
</svelte:head>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<div class="header h-[10vh] fixed" style="z-index:9999">
    <a href="/">
        <img class="adhyaayaLogo" src={adhyaayaLogo} alt="Adhyaaya Logo">
    </a>
    <a on:click={toggle} on:keydown={toggle} class="select " href="#">
        <img class="dropdownIcon text-black p-1" src={dropdownIcon} alt="Adhyaaya Logo">
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
<div class="text-column">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>
<style>
.header{
    width:100%;
    height:6rem;
    display:flex;
    position:fixed;
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
</style>

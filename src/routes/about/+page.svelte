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
	<meta name="description" content="About this app" />
</svelte:head>
<div class="header">
    <a href="/">
        <img class="adhyaayaLogo" src={adhyaayaLogo} alt="Adhyaaya Logo">
    </a>
    <a on:click={toggle} on:keydown={toggle} class="select" href="/">
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

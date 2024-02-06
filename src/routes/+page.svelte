<script>
    import adhyaayaLogo from '$lib/images/adhyaaya-logo.png' 
    import dropdownIcon from '$lib/images/dropdown.png'
    let dropdown=false;
    function toggle(){
        dropdown=!dropdown
    }
</script>

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
        padding:1.8rem;
        padding-top:1.4rem;
        padding-bottom: 0%;
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

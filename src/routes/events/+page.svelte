<script>
  
    import { TechEvent } from '$lib/data/tech-events';
    import { NonTechEvent } from '$lib/data/non-tech-events';
    import { Workshop } from '$lib/data/workshop';
    import adhyaayaLogo from '$lib/images/adhyaaya-logo.png' 
    import dropdownIcon from '$lib/images/dropdown.png'
    import background from '$lib/images/bg-2.jpg'
    let dropdown=false;
    function toggle(){
        dropdown=!dropdown
    }
</script>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<div class="header fixed">
    <a href="/">
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
<img class="fixed w-full t-0" style="z-index:-1" src={background} alt="background" width=100% height=100% >

<div class=" w-full h-auto flex flex-col gap-10 p-4 m-auto bg-black bg-opacity-50">
    <div class="w-full flex flex-col md:flex-row md:flex-wrap gap-5 justify-around" >
        <div class="w-full text-7xl text-white font-bold text-center p-10">Technical Events</div>
        {#each TechEvent as event}
        <div class="card h-full  transform hover:scale-110 transition-all ease cursor-pointer">
            <img src={event.icon} alt={event.name} class="cardIcon p-20 pb-0">
            <div  class="w-40 m-auto text-center text-3xl text-white"><p>{event.name}</p></div>
            <br>
        </div>
    {/each}
    </div>

    <div class="w-full flex flex-col md:flex-row md:flex-wrap gap-5 justify-around" >
        <div class="w-full text-7xl text-white font-bold text-center p-10">Non-Technical Events</div>
        {#each NonTechEvent as event}
        <div class="card h-full   transform hover:scale-110 transition-all ease cursor-pointer">
            <img src={event.icon} alt={event.name} class="cardIcon p-20 pb-0">
            <div  class="w-40 m-auto text-center text-3xl text-white"><p>{event.name}</p></div>
           <br>
        </div>
    {/each}
    </div>

    <div class="w-full flex flex-col md:flex-row md:flex-wrap gap-5 justify-around" >
        <div class="w-full text-7xl text-white font-bold text-center p-10">Workshop</div>
        {#each Workshop as event}
        <div class="card h-full   transform hover:scale-110 transition-all ease cursor-pointer">
            <img src={event.icon} alt={event.name} class="cardIcon p-20 pb-0">
            <div  class="w-40 m-auto text-center text-3xl text-white"><p>{event.name}</p></div>
            <br>
        </div>
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
    .card{
        width:20rem;
        height:20rem;
    }
    .cardIcon{
        height:15rem;
        width:100%;
    }
    .dropdown{
    display:flex;
    position: absolute;
    top: 4rem;
    right: 0;
    flex-direction: column;
    width:6rem;
    gap:0.3rem;
    height:auto;
   }
   .dropdown_item{
    height:1.2rem;
    text-align: center;
    width:4rem;
 

}
</style>
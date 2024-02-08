<script>
  
    import { TechEvent } from '$lib/data/tech-events';
    import { NonTechEvent } from '$lib/data/non-tech-events';
    import { Workshop } from '$lib/data/workshop';
    import adhyaayaLogo from '$lib/images/adhyaaya-logo.png' 
    import dropdownIcon from '$lib/images/dropdown.png'
    let mobile=false;
    let dropdown=false;
    import hbackground from '$lib/images/horizontal-bg.jpg'
    import vbackground from '$lib/images/vertical-bg.jpg'
    let logo = hbackground;
    import {onMount} from 'svelte'
    function toggle(){
        dropdown=!dropdown
    }
    function handleShit(){

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
    
</script>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<div class="header fixed">
    <a href="/">
        <img class="adhyaayaLogo" src={adhyaayaLogo} alt="Adhyaaya Logo">
    </a>
    <a on:click={toggle} on:keydown={toggle} class="select" href="#">
        <img class="dropdownIcon"  src={(dropdown)?dropdownIcon:dropdownIcon} alt="Adhyaaya Logo">
        {#if dropdown}
        <div class="dropdown flex flex-col w-40 bg-opacity-40 bg-gray-900 backdrop-blur-sm rounded border border-white" style=" display:flex;position: absolute;top: 4rem;right: 2rem;;flex-direction: column;rem;border-radius: 1rem;height:auto;z-index:9999">
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/">home</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600  p-2 w-40 transition-all-ease" href="/events">events</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600  p-2 w-40 transition-all-ease" href="/gallery">gallery</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/sponsors">sponsors</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/teams">teams</a>
        </div>
        {/if}
    </a>
</div>
<img class="fixed w-full t-0 filter brightness-50" style="z-index:-1" src={mobile?vbackground:hbackground} alt="background" width=100% height=100% >


<div class=" w-full h-auto flex flex-col gap-10 m-auto mx-auto">
    <div class="w-full flex flex-col md:flex-row md:flex-wrap gap-5 justify-around" >
        <div class="w-full md:text-7xl text-4xl text-white font-bold text-center p-20 pb-0">Technical Events</div>
        {#each TechEvent as event}
    <a href={event.form_link}><div class="card h-full  {(!dropdown)?'transform hover:scale-110':''} transition-all ease cursor-pointer">
            <img src={event.icon} alt={event.name} class="cardIcon p-20 pb-0">
            <div  class="w-full font-bold m-auto text-center text-3xl text-white"><p>{event.name}</p></div>
            <br>
        </div>
    </a>
    {/each}
    </div>

    <div class="w-full flex flex-col md:flex-row md:flex-wrap gap-5 justify-around" >
        <div class="w-full md:text-7xl text-4xl text-white font-bold text-center mx-auto p-20 pb-0">Non-Technical Events</div>
        {#each NonTechEvent as event}
        <a href={event.form_link}><div class="card h-full  {(!dropdown)?'transform hover:scale-110':''} transition-all ease cursor-pointer">
            <img src={event.icon} alt={event.name} class="cardIcon p-20 pb-0">
            <div  class="w-full font-bold m-auto text-center text-3xl text-white"><p>{event.name}</p></div>
           <br>
        </div>
    </a>
    {/each}
    </div>

    <div class="w-full flex flex-col md:flex-row md:flex-wrap gap-5 justify-around" >
        <div class="w-full md:text-7xl text-4xl text-white font-bold text-center p-20 pb-0">Workshop</div>
        {#each Workshop as event}
        <a href={event.form_link}><div class="card h-full {(!dropdown)?'transform hover:scale-110':''} transition-all ease cursor-pointer">
            <img src={event.icon} alt={event.name} class="cardIcon p-20 pb-0">
            <div  class="w-full font-bold m-auto text-center text-3xl text-white"><p>{event.name}</p></div>
            <br>
        </div>
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
        right:2rem;
        user-select:text
    }
    .dropdown_item{
    border-radius: 0.7rem;
   }
    .card{
        width:20rem;
        height:15rem;
        margin:auto;
    }
    .cardIcon{
        height:15rem;
        width:100%;
    }
  

</style>
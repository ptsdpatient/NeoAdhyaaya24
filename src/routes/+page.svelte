<script>
    import adhyaayaLogo from '$lib/images/adhyaaya-logo.png' 
    import dropdownIcon from '$lib/images/dropdown.png'
    import hbackground from '$lib/images/horizontal-bg.jpg'
    import vbackground from '$lib/images/vertical-bg.jpg'
    import gear from '$lib/images/gear.png'
    import register from '$lib/images/register.png'
    import team from '$lib/images/team.jpg'
    import gallery from '$lib/images/gallery.jpg'
    import sponsor from '$lib/images/sponsors.png'
 import collegeLogo from '$lib/assets/logo/gcoen-knockout.png'
    let logo = hbackground
    import {onMount} from 'svelte'
    let dropdown=false;
    let mobile=false
    let waveTop='80%'
    function toggle(){
        dropdown=!dropdown
    }
    const handleResize = () => {
    logo=(window.innerWidth>1024)?hbackground:vbackground
    mobile=(window.innerWidth>1024)?false:true
    waveTop=mobile?'80%':'10%'
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


<svelte:head>
	<title>Adhyaaya'24</title>
</svelte:head>

<div class="header fixed" style="z-index:999">
    <a href="/">
        <img class="adhyaayaLogo" src={adhyaayaLogo} alt="Adhyaaya Logo">
    </a>
    <a on:click={toggle} on:keydown={toggle} class="select" href="#">
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


    <div class="w-full h-full relative" style="">
    {#if mobile}
    <div id="gear1" class="absolute" style="width:6rem;top:18%;left:32%;transition:all 1s ease;background-image: url({team}); background-size: 60% 70%;background-repeat: no-repeat; background-position: center;"><a href='/teams'><img src={gear} class="clockwise" alt="gearicon"></a></div>
    <div id="gear2" class="absolute" style="width:8rem;top:72%;left:50%;transition:all 1s ease;background-image: url({gallery}); background-size: 60% 70%;background-repeat: no-repeat; background-position: center;"><a href='/gallery'><img src={gear} class="anticlockwise" alt="gearicon"></a></div>
    <div id="gear3" class="absolute" style="width:10rem;top:51%;left:33%;transition:all 1s ease;background-image: url({sponsor}); background-size: 60% 70%;background-repeat: no-repeat; background-position: center;"><a href='/sponsors'><img src={gear} class="clockwise" alt="gearicon"></a></div>
    <div id="gear4" class="absolute" style="width:12rem;top:29%;left:3%;transition:all 1s ease;background-image: url({register}); background-size: 60% 70%;background-repeat: no-repeat; background-position: center;"><a href='/events'><img src={gear} class="anticlockwise" alt="gearicon"></a></div>
    {:else}
    <div id="gear1" class="absolute" style="width:14rem;top:17.5%;left:49%;transition:all 1s ease;background-image: url({team}); background-size: 60% 70%;background-repeat: no-repeat; background-position: center;"><a href='/teams'><img src={gear} class="clockwise" alt="gearicon"></a></div>
    <div id="gear2" class="absolute" style="width:15rem;top:42%;left:58.5%;transition:all 1s ease;background-image: url({gallery}); background-size: 60% 70%;background-repeat: no-repeat; background-position: center;"><a href='/gallery'><img src={gear} class="anticlockwise" alt="gearicon"></a></div>
    <div id="gear3" class="absolute" style="width:10rem;top:38%;left:76%;transition:all 1s ease;background-image: url({sponsor}); background-size: 60% 70%;background-repeat: no-repeat; background-position: center;"><a href='/sponsors'><img src={gear} class="clockwise" alt="gearicon"></a></div>
    <div id="gear4" class="absolute" style="width:16rem;top:29%;left:31%;transition:all 1s ease;background-image: url({register}); background-size: 60% 70%;background-repeat: no-repeat; background-position: center;"><a href='/events'><img src={gear} class="anticlockwise" alt="gearicon"></a></div>
    {/if}



<img src={logo} class="" style="" alt="background" width=100% height=100% >

</div>


<div class="content flex flex-col md:flex-row w-full h-4/6 gap-10 bg-black">
		
    <div
        class="us w-full max-w-2xl  xl:w-1/2 flex flex-col items-center justify-evenly h-auto text-justify backdrop-blur-none bg-opacity-0 rounded-lg lg:rounded-l-none p-6 gap-2 mx-auto"
    >
        <img loading="lazy" src={adhyaayaLogo} class="h-28" height="112" width="202" alt="" />
        <p class="max-w-lg md:text-xl nunu text-white">
            Adhyaaya is a premier technical festival, hosting a variety of events for students and
            professionals to showcase their talents in technology and the sciences. The annual
            symposium, organized by the Government College of Engineering in Nagpur, features lectures
            from renowned experts and attracts participants from across the region. Join us at Adhyaaya
            for a journey of innovation and creativity.
        </p>
        <a
            data-sveltekit-reload
            href="/teams"
            class="team-button bg-black/20 backdrop-blur-sm relative text-white px-5 py-3 text-3xl border border-solid border-white rounded-lg inline-flex items-center uppercase gap-2 hover:scale-110 hover:bg-white hover:text-black active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out mb-8"
            >Meet The Team <iconify-icon icon="mdi:arrow-right" /></a
        >
        
    </div>
    <div
        class="us w-full max-w-2xl  xl:w-1/2 flex flex-col items-center justify-evenly h-auto text-justify backdrop-blur-none rounded-lg lg:rounded-l-none p-6 gap-2 mx-auto"
    >
        <img loading="lazy" src={collegeLogo} class="h-28" height="112" width="355" alt="" />
        <p class="max-w-lg md:text-xl nunu text-white">
            Government College of Engineering, Nagpur is a premier engineering institute established in
            2016, affiliated to Rashtrasant Tukadoji Maharaj Nagpur University and mentored by
            Visvesvaraya National Institute of Technology. The campus is situated at New Khapri, Nagpur,
            providing a top-notch engineering education to its students.
        </p>
        <a
            data-sveltekit-reload
            href="https://gcoen.ac.in/"
            target="_blank"
            rel="noreferrer"
            class="team-button font-bold bg-black/20 backdrop-blur-sm relative text-white text-3xl text-3xl border border-solid border-white rounded-lg hover:scale-110 hover:bg-white hover:text-black py-3 px-5 rounded-lg inline-flex items-center uppercase gap-2 hover:scale-110 active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out mb-4 mt-4"
            >Our College <iconify-icon icon="mdi:arrow-right" /></a
        >

    </div>
    
</div>


{#if !mobile}
<div class="w-full h-auto bg-black">
   
    <div class="flex flex-col md:flex-row w-full" style="height:80vh">
        <div class="md:w-1/5 w-full md:h-1/2 m-auto text-white flex flex-col text-center justify-around">
            <h3 class="text-2xl font-bold">Contact Us</h3>
            <p class="text-xl cursor-pointer">Contact Info</p>
            <p class="text-xl cursor-pointer">Teams</p>
        </div>
        <div class="md:w-3/5 w-full md:h-full h-full text-white flex flex-col text-center">
            <img class="mx-auto bg-black my-4" style="width:10rem;z-index:100" src={adhyaayaLogo} alt="adhyaayalogo">
            <iframe class=" pb-0 h-2/3 p-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2214.0133855650065!2d79.05863812130883!3d21.052209904527864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1673198708695!5m2!1sen!2sin"  loading="lazy" title="collegeMap" referrerpolicy="no-referrer-when-downgrade"></iframe>  
             <p class="footer_bottom p-4">© ADHYAAYA'24 | GCOEN | ALL RIGHTS RESERVED</p>
        </div>
        <div class="md:w-1/5 w-full md:h-1/2 m-auto text-white flex flex-col  text-center justify-around">
            <h3 class="text-2xl font-bold">Support</h3>
            <p class="text-xl cursor-pointer ">Terms and Condition</p>
            <p class="text-xl cursor-pointer">Privacy Policy</p>
        </div>
    </div>
</div>
{/if}

{#if mobile}
<div class="h-auto w-full bg-black flex flex-col">
    <div class="w-4/5 m-auto text-white flex flex-col  text-center justify-around">
        <img class="mx-auto bg-black my-4" style="width:10rem;z-index:100" src={adhyaayaLogo} alt="adhyaayalogo">
       
        <h3 class="text-2xl font-bold">Contact Us</h3>
        <p class="text-xl cursor-pointer">Contact Info</p>
        <p class="text-xl cursor-pointer">Teams</p>
    </div>
    <div class="w-4/5 m-auto text-white flex flex-col  text-center justify-around">
        <h3 class="text-2xl font-bold">Support</h3>
        <p class="text-xl cursor-pointer ">Terms and Condition</p>
        <p class="text-xl cursor-pointer">Privacy Policy</p>
    </div>
    <div class="w-4/5 mx-auto md:h-full h-full text-white flex flex-col text-center">
        <iframe class=" pb-0 h-2/3 p-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2214.0133855650065!2d79.05863812130883!3d21.052209904527864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1673198708695!5m2!1sen!2sin"  loading="lazy" title="collegeMap" referrerpolicy="no-referrer-when-downgrade"></iframe>  
         <p class="footer_bottom p-4">© ADHYAAYA'24 | GCOEN | ALL RIGHTS RESERVED</p>
    </div>
</div>
{/if}

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

   #gear1:hover{
    transform:scale(1.2);
    transition:all 1s ease;
   }
   #gear2:hover{
    transform:scale(1.2);
    transition:all 1s ease;
   }
   #gear3:hover{
    transform:scale(1.2);
    transition:all 1s ease;
   }
   #gear4:hover{
    transform:scale(1.2);
    transition:all 1s ease;
   }
   
   .clockwise{
    animation: rotateAnimation 5s infinite linear;
    cursor: pointer;
   }
   .anticlockwise{
    animation: rotateAnimation-1 5s infinite linear;
    cursor: pointer;
   }
  
   @keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotateAnimation-1 {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
  }
</style>

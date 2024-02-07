<script>
    import adhyaayaLogo from '$lib/images/adhyaaya-logo.png' 
    import dropdownIcon from '$lib/images/dropdown.png'
    import hbackground from '$lib/images/horizontal-bg.jpg'
    import vbackground from '$lib/images/vertical-bg.jpg'
    let logo = hbackground;
    import {onMount} from 'svelte'
    let dropdown=false;
    let mobile=false;
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
        <div class="dropdown flex flex-col" style=" display:flex;position: absolute;top: 4rem;right: 2rem;flex-direction: column;width:6rem;border-radius: 1rem;height:auto;">
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/">home</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600  p-2 w-40 transition-all-ease" href="/events">events</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600  p-2 w-40 transition-all-ease" href="/about">about us</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600  p-2 w-40 transition-all-ease" href="/contacts">contact</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600  p-2 w-40 transition-all-ease" href="/gallery">gallery</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/sponsors">sponsors</a>
            <a class="dropdown_item text-xl text-white hover:bg-red-600 p-2 w-40 transition-all-ease" href="/teams">teams</a>
        </div>
        {/if}
    </a>
</div>



<img src={logo} style="margin-bottom:{mobile?'0rem':'-15rem'}-15rem" alt="background" width=100% height=100% >

<div class="w-full h-auto bg-black">
    
    <div class="flex flex-col md:flex-row w-full" style="height:{mobile?'auto':'80vh'}">
        
        <div class="md:w-1/5 w-full md:h-1/2 m-auto text-white flex flex-col text-center justify-around">
            <h3 class="text-2xl font-bold">Contact Us</h3>
            <p class="text-xl cursor-pointer">Contact Info</p>
            <p class="text-xl cursor-pointer">Teams</p>
        </div>
        <div class="md:w-3/5 w-full md:h-full h-full text-white flex flex-col text-center">
            <img class="m-auto p-2" style="width:10rem;z-index:100" src={adhyaayaLogo} alt="adhyaayalogo">
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
   
   
</style>

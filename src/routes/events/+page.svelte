<script>
    import { EVENTS } from '$lib/data/events';
    let technicalEvents = EVENTS.filter(event => event.category === 'technical');
    let nontechnicalEvents = EVENTS.filter(event => event.category === 'non-technical');
    let workshop = EVENTS.filter(event => event.category === 'workshops');
    
</script>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<div class="bg-red-500 w-full h-full flex flex-col gap-10 p-4">
    <div class="bg-red-500 w-full h-[100vh] flex flex-col md:flex-row md:flex-wrap gap-5">
        {#each technicalEvents as event (event.id)}
        <div class="h-full w-10 bg-white">
        <!-- <h2>{event.name}</h2> -->
        <!-- <p>Mode: {event.mode}</p> -->
            <p>{event.name}</p>
        </div>
    {/each}
    </div>
    <div>
        {#each nontechnicalEvents as event (event.id)}
        <div>
        <h2>{event.name}</h2>
        <p>Mode: {event.mode}</p>
    
        </div>
    {/each}
    </div>
    <div>
        {#each workshop as event (event.id)}
        <div>
        <h2>{event.name}</h2>
        <p>Mode: {event.mode}</p>
    
        </div>
    {/each}
    </div>
</div>
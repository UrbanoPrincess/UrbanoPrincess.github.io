<script>
    // @ts-nocheck
    import "../app.css"; // Import your CSS styles
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    // Correctly import icons from flowbite-svelte-icons
    import { HomeOutline, FileLinesOutline, AddressBookSolid, FolderOpenSolid } from 'flowbite-svelte-icons';

    export let name = "PRINCESS DIANE RODRIGUEZ URBANO";

    onMount(() => {
        // Navigate to the home page on load (optional)
        goto('/Home');
    });
</script>

<style>
    /* Header styles */
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #d291ff;
        padding: 10px;
        border-bottom: 2px solid #9948af;
        flex-wrap: wrap;
    }

    .title {
        font-weight: bold;
        color: #9948af;
        margin-left: 10px;
    }

    /* Tabs styles */
    nav.tabs {
        display: flex;
        flex-wrap: wrap;
    }

    nav.tabs a.tab {
        margin: 5px 10px;
        padding: 10px 20px;
        background-color: #d291ff;
        color: #9948af;
        text-decoration: none;
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    nav.tabs a.tab:hover {
        background-color: #9948af;
        color: #d291ff;
    }

   

    .text-label {
        display: inline; /* Initially show text */
    }

    /* Footer styles */
    footer {
        background-color: #d291ff;
        color: white;
        text-align: left;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
    }

    /* Media query for smaller screens */
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            align-items: flex-start;
        }

        nav.tabs {
            justify-content: center;
            width: 100%;
        }

        nav.tabs a.tab {
            flex: 1;
            text-align: center;
            padding: 10px 0;
        }

        .text-label {
            display: none; /* Hide text labels on smaller screens */
        }

        
    }
</style>

<main>
    <header>
        <h1 class="title">MY PORTFOLIO</h1>
        <nav class="tabs">
            <a class="tab" href="/Home" aria-label="Home">
                <HomeOutline class="icon" size="15" />
                <span class="text-label">Home</span>
            </a>
            <a class="tab" href="/About" aria-label="About">
                <FileLinesOutline class="icon" size="15" />
                <span class="text-label">About</span>
            </a>
            <a class="tab" href="/Portfolio" aria-label="Portfolio">
                <FolderOpenSolid class="icon" size="15" />
                <span class="text-label">Portfolio</span>
            </a>
            <a class="tab" href="/Contact" aria-label="Contact">
                <AddressBookSolid class="icon" size="15" />
                <span class="text-label">Contact</span>
            </a>
        </nav>
    </header>

    <!-- This slot will render the content of the current page -->
    <slot />
</main>

<footer>
    {name}
</footer>

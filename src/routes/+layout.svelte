<script>
    // @ts-nocheck
    import '../app.css';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { HomeOutline, FileLinesOutline, AddressBookSolid, FolderOpenSolid } from 'flowbite-svelte-icons';

    export let name = "PRINCESS DIANE RODRIGUEZ URBANO";

    onMount(() => {
   
        goto('/Home');
    });
</script>

<style>

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
        display: inline; 
    }


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


    @media (max-width: 500px) {
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
            display: none;
        }
    }
</style>

<main>
    <header>
        <h1 class="title">MY PORTFOLIO</h1>
        <nav class="tabs">
            <a class="tab" href="/Home" aria-label="Home">
                <HomeOutline style="width: 40px; height: 40px; margin-right: 5px;" />
                <span class="text-label">Home</span>
            </a>
            <a class="tab" href="/About" aria-label="About">
                <FileLinesOutline style="width: 40px; height: 40px; margin-right: 5px;" />
                <span class="text-label">About</span>
            </a>
            <a class="tab" href="/Portfolio" aria-label="Portfolio">
                <FolderOpenSolid style="width: 40px; height: 40px; margin-right: 5px;" />
                <span class="text-label">Portfolio</span>
            </a>
            <a class="tab" href="/Contact" aria-label="Contact">
                <AddressBookSolid style="width: 40px; height: 40px; margin-right: 5px;" />
                <span class="text-label">Contact</span>
            </a>
        </nav>
    </header>

    
    <slot />
</main>

<footer>
    {name}
</footer>

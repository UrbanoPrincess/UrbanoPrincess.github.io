<!-- src/routes/+layout.svelte -->
<script>
    import "../app.css"; // Import your CSS styles
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    export let name = "PRINCESS DIANE RODRIGUEZ URBANO";

    onMount(() => {
        // Navigate to the home page on load (optional)
        goto('/Home');
    });
</script>

<style>
    .header {
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
    .tabs {
        display: flex;
        flex-wrap: wrap;
    }
    .tab {
        margin: 5px 10px;
        padding: 10px 20px;
        background-color: #d291ff;
        color: #9948af;
        text-decoration: none;
        font-weight: bold;
    }
    .tab:hover {
        background-color: #9948af;
        color: #d291ff;
    }

    .footer {
        background-color: #d291ff;
        color: white;
        text-align: left;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
    }

    @media (max-width: 768px) {
        .header {
            flex-direction: column;
            align-items: flex-start;
        }
        .tabs {
            justify-content: center;
            width: 100%;
        }
        .tab {
            flex: 1;
            text-align: center;
        }
    }
</style>

<main>
    <div class="header">
        <div class="title">MY PORTFOLIO</div>
        <div class="tabs">
            <a class="tab" href="/home">Home</a>
            <a class="tab" href="/about">About</a>
            <a class="tab" href="/portfolio">Portfolio</a>
            <a class="tab" href="/contact">Contact</a>
        </div>
    </div>

    <!-- This slot will render the content of the current page -->
    <slot />
</main>

<div class="footer">
    {name}
</div>

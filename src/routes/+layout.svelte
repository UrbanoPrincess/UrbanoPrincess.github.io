<script>
    // @ts-nocheck
    import '../app.css';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    export let name;
    let isNavOpen = false;

    onMount(() => {
   
        goto('/Home');
    });
</script>

<style>
    :global(body) {
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: radial-gradient(circle at top left, #f5f3ff, #faf5ff, #f9fafb);
        color: #0f172a;
    }

    main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    header {
        position: sticky;
        top: 0;
        z-index: 10;
        backdrop-filter: blur(10px);
        background: linear-gradient(90deg, rgba(153, 72, 175, 0.95), rgba(210, 145, 255, 0.95));
        border-bottom: 1px solid rgba(255, 255, 255, 0.35);
        box-shadow: 0 12px 30px rgba(15, 23, 42, 0.15);
    }

    .header-inner {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0.85rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        flex-wrap: wrap;
    }

    .brand {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .nav-toggle {
        display: none;
        border: none;
        background: rgba(15, 23, 42, 0.16);
        border-radius: 999px;
        padding: 0.4rem 0.65rem;
        cursor: pointer;
        color: #f9fafb;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
    }

    .nav-toggle:hover {
        background: rgba(15, 23, 42, 0.26);
    }

    .nav-toggle-bars {
        display: inline-flex;
        flex-direction: column;
        gap: 3px;
    }

    .nav-toggle-bar {
        width: 16px;
        height: 2px;
        border-radius: 999px;
        background-color: #f9fafb;
    }

    .title {
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        font-size: 0.95rem;
        color: #f9fafb;
    }

    .subtitle {
        font-size: 0.8rem;
        color: rgba(249, 250, 251, 0.8);
    }

    nav.tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
    }

    nav.tabs a.tab {
        margin: 0;
        padding: 0.5rem 0.9rem;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.12);
        color: #f9fafb;
        text-decoration: none;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.85rem;
        border: 1px solid transparent;
        transition:
            background 150ms ease-out,
            transform 150ms ease-out,
            box-shadow 150ms ease-out,
            border-color 150ms ease-out,
            color 150ms ease-out;
    }

    nav.tabs a.tab:hover {
        background: #f9fafb;
        color: #4c1d95;
        transform: translateY(-1px);
        box-shadow: 0 6px 14px rgba(15, 23, 42, 0.2);
        border-color: rgba(148, 163, 184, 0.9);
    }

    nav.tabs a.tab:focus-visible {
        outline: 2px solid #e5e7eb;
        outline-offset: 2px;
    }

    .text-label {
        display: inline;
    }

    .page-content {
        flex: 1;
        max-width: 1100px;
        margin: 0 auto;
        padding: 2.5rem 1.5rem 4.5rem;
    }

    footer {
        border-top: 1px solid #e5e7eb;
        background: #ffffffd9;
        backdrop-filter: blur(10px);
        color: #4b5563;
        padding: 0.9rem 1.5rem;
        font-size: 0.8rem;
    }

    .footer-inner {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .footer-name {
        font-weight: 500;
    }

    .footer-meta {
        color: #9ca3af;
    }

    @media (max-width: 640px) {
        .header-inner {
            align-items: flex-start;
        }

        .nav-toggle {
            display: inline-flex;
        }

        nav.tabs {
            width: 100%;
            justify-content: center;
            display: none;
            margin-top: 0.5rem;
        }

        nav.tabs.tabs-open {
            display: flex;
            flex-direction: column;
        }

        nav.tabs a.tab {
            flex: 1 0 100%;
            justify-content: center;
        }

        .page-content {
            padding-top: 1.4rem;
        }
    }
</style>

<main>
    <header>
        <div class="header-inner">
            <div class="brand">
                <div>
                    <h1 class="title">My Portfolio</h1>
                    <div class="subtitle">Showcasing my work, skills & experience</div>
                </div>
            </div>
            <button
                class="nav-toggle"
                type="button"
                aria-label="Toggle navigation"
                aria-expanded={isNavOpen}
                on:click={() => (isNavOpen = !isNavOpen)}
            >
                <span class="nav-toggle-bars" aria-hidden="true">
                    <span class="nav-toggle-bar"></span>
                    <span class="nav-toggle-bar"></span>
                    <span class="nav-toggle-bar"></span>
                </span>
            </button>
            <nav class="tabs" class:tabs-open={isNavOpen} aria-label="Main navigation">
                <a class="tab" href="/Home" aria-label="Home" on:click={() => (isNavOpen = false)}>
                    <span class="text-label">Home</span>
                </a>
                <a class="tab" href="/About" aria-label="About" on:click={() => (isNavOpen = false)}>
                    <span class="text-label">About</span>
                </a>
                <a class="tab" href="/Portfolio" aria-label="Portfolio" on:click={() => (isNavOpen = false)}>
                    <span class="text-label">Portfolio</span>
                </a>
                <a class="tab" href="/Contact" aria-label="Contact" on:click={() => (isNavOpen = false)}>
                    <span class="text-label">Contact</span>
                </a>
            </nav>
        </div>
    </header>

    <div class="page-content">
        <slot />
    </div>
</main>

<footer>
    <div class="footer-inner">
        {#if name}
            <div class="footer-name">{name}</div>
        {/if}
        <div class="footer-meta">© {new Date().getFullYear()} · All rights reserved.</div>
    </div>
</footer>

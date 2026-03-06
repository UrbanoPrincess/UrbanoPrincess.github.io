<script>
    import { Avatar } from 'flowbite-svelte';
</script>

<style>
    .pt-serif-regular {
        font-family: 'PT Serif', serif;
        font-weight: 400;
        font-style: normal;
    }

    .pt-serif-bold-italic {
        font-family: 'PT Serif', serif;
        font-weight: 700;
        font-style: italic;
    }

    .home-container {
        margin: 1.5rem auto 0 auto;
        max-width: 880px;
        background: #ffffff;
        border-radius: 1.5rem;
        padding: 2.25rem 2rem;
        box-shadow:
            0 18px 45px rgba(15, 23, 42, 0.16),
            0 0 0 1px rgba(148, 163, 184, 0.2);
        text-align: left;
    }

    .intro-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.75rem;
    }

    @media (min-width: 768px) {
        .intro-header {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    .intro-copy {
        max-width: 30rem;
    }

    .intro-title {
        letter-spacing: 0.03em;
    }

    .intro-lead {
        color: #4b5563;
    }

    .intro-body {
        color: #6b7280;
    }
</style>

<section class="home-container">
    <header class="intro-header mb-4">
        <div class="mb-4 md:mb-0 md:mr-8">
            <Avatar src="images/profile.png" class="rounded-full ring-2 ring-secondary dark:ring-secondary-500" />
        </div>

        <article class="intro-copy">
            <h1 class="pt-serif-bold-italic intro-title text-3xl md:text-4xl mb-3 text-secondary">
                Welcome to my portfolio
            </h1>

            <p class="pt-serif-regular intro-lead text-lg mb-3">
                Hi, I'm Princess Diane Urbano, a 3rd-year BSIT student at Gordon College from Roosevelt,
                Dinalupihan, Bataan.
            </p>
            <p class="pt-serif-regular intro-body text-base md:text-lg">
                I’m passionate about learning and exploring different areas of information technology.
                I enjoy building software, sharpening my skills, and collaborating on projects that
                solve real-world problems and create meaningful impact.
            </p>
        </article>
    </header>
</section>

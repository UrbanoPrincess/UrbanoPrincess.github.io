<script>
   
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

    .about-shell {
        margin: 1.75rem auto 0 auto;
        max-width: 920px;
    }

    .about-container {
        background-color: #ffffff;
        border-radius: 1.5rem;
        padding: 2.4rem 2.1rem;
        box-shadow:
            0 20px 50px rgba(15, 23, 42, 0.16),
            0 0 0 1px rgba(148, 163, 184, 0.22);
        display: flex;
        flex-direction: column;
        gap: 1.75rem;
    }

    .about-header {
        text-align: center;
    }

    .about-heading {
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }

    .about-tagline {
        margin-top: 0.4rem;
        font-size: 0.95rem;
        color: #6b7280;
    }

    .about-layout {
        display: grid;
        grid-template-columns: minmax(0, 3fr) minmax(0, 2.3fr);
        gap: 2rem;
        align-items: start;
    }

    .about-image {
        width: 100%;
        height: auto;
        max-width: 340px;
        margin: 0 auto;
        display: block;
        border-radius: 1.25rem;
        border: 4px solid #ffffff;
        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.25);
    }

    .about-text p {
        color: #4b5563;
    }

    .about-text p + p {
        margin-top: 0.9rem;
    }

    @media (max-width: 900px) {
        .about-layout {
            grid-template-columns: minmax(0, 1fr);
        }
    }

    @media (max-width: 640px) {
        .about-container {
            padding: 1.9rem 1.4rem;
        }
    }
</style>

<main class="pt-serif-regular text-accent">
    <div class="about-shell">
        <section class="about-container">
            <header class="about-header">
                <h1 class="text-3xl md:text-4xl pt-serif-bold-italic about-heading text-secondary">
                    About me
                </h1>
                <p class="about-tagline">
                    A student developer learning to turn ideas into thoughtful digital experiences.
                </p>
            </header>

            <div class="about-layout">
                <div class="about-text">
                    <p class="pt-serif-regular text-lg">
                        I’m Princess Diane Urbano, a 3rd-year BSIT student at Gordon College from Roosevelt,
                        Dinalupihan, Bataan. My passion for technology and problem-solving drives me to continuously
                        learn and grow in this field. However, my journey hasn't been without its challenges.
                    </p>
                    <p class="pt-serif-regular text-lg">
                        There are many days when I find myself thinking, “Can I really do this?” Creativity sometimes
                        feels out of reach, and I hesitate to try new things, worrying I’ll make mistakes. The fear of
                        failure can be overwhelming, but these moments have also taught me resilience, self-awareness,
                        and the importance of perseverance.
                    </p>
                    <p class="pt-serif-regular text-lg">
                        One of my most memorable experiences as a student developer began with a simple to-do list for
                        personal use. Working alongside my friend, I realized its potential to help others, which led us
                        to transform it into a group manager application called “We Manage.” Through continuous
                        iterations and collaboration, we simplified its features and made it more user‑friendly. That
                        project reminded me why I love technology: it can make everyday life a little easier.
                    </p>
                </div>

                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img
                    src="images/intro.png"
                    class="about-image"
                    alt="Profile Image"
                />
            </div>
        </section>
    </div>
</main>

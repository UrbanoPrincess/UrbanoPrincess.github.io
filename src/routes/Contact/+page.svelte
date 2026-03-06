<script>
    // Your JavaScript code here if needed
</script>

<style>
    .contact-shell {
        margin: 1.75rem auto 0 auto;
        max-width: 720px;
    }

    .contact-container {
        background-color: #ffffff;
        padding: 2.4rem 2.1rem 2.2rem;
        border-radius: 1.5rem;
        box-shadow:
            0 20px 50px rgba(15, 23, 42, 0.18),
            0 0 0 1px rgba(148, 163, 184, 0.22);
        text-align: center;
    }

    .contact-subtitle {
        margin-top: 0.4rem;
        font-size: 0.98rem;
        color: #6b7280;
    }

    .content p {
        color: #4b5563;
    }

    .social-links {
        display: flex;
        justify-content: center;
        margin-top: 1.75rem;
        flex-wrap: wrap;
        gap: 0.75rem 1.75rem;
    }

    .social-links a {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.65rem 1.1rem;
        border-radius: 999px;
        color: #4c1d95;
        background: rgba(129, 140, 248, 0.06);
        text-decoration: none;
        font-size: 0.98rem;
        font-weight: 500;
        transition:
            background 160ms ease-out,
            transform 160ms ease-out,
            box-shadow 160ms ease-out,
            color 160ms ease-out;
    }

    .social-links a svg {
        width: 32px;
        height: 32px;
    }

    .social-links a:hover {
        background: #4c1d95;
        color: #f9fafb;
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(79, 70, 229, 0.3);
    }

    @media (max-width: 640px) {
        .contact-container {
            padding: 2rem 1.45rem 2rem;
        }

        .social-links a {
            width: 100%;
            justify-content: center;
        }
    }
</style>

<main>
    <div class="contact-shell">
        <section class="relative contact-container">
            <h1 class="text-3xl md:text-4xl pt-serif-bold-italic mb-1 text-secondary">Contact me</h1>
            <p class="contact-subtitle">
                I’d love to connect about opportunities, collaborations, or just to talk about tech.
            </p>

            <div class="content">
                <p class="pt-serif-regular text-lg mt-5">
                    You can reach me through any of the platforms below:
                </p>
            </div>

            <div class="social-links">
            <a href="https://github.com/UrbanoPrincess/UrbanoPrincess.github.io" aria-label="GitHub">
                <svg class="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                </svg> GitHub
            </a>
            <a href="https://www.facebook.com/princessdiane.urbano.3" aria-label="Facebook">
                <svg class="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                </svg> Facebook
            </a>
            <a href="mailto:202210285@gordoncollege.edu.ph" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
                    <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
                </svg> Email
            </a>
        </div>
        </section>
    </div>
</main>

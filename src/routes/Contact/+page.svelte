<script>
    // Your JavaScript code here if needed
</script>

<style>
    .contact-container {
        background-color: white; 
        padding: 20px;
        margin: 40px auto; 
        width: 90%;
        max-width: 600px; 
        min-height: 200px; 
        text-align: center; 
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    }

    .social-links {
        display: flex; 
        justify-content: center; 
        margin-top: 20px; 
        flex-wrap: wrap;
    }

    .social-links a {
        display: flex; 
        align-items: center; 
        margin: 10px;
        color: #9948af; 
        text-decoration: none;
        font-size: 2rem; /* Increased font size for better visibility */
    }

    .social-links a svg {
        width: 50px; /* Increased icon width */
        height: 50px; /* Increased icon height */
    }

    .social-links a:hover {
        text-decoration: underline; 
    }

    @media (max-width: 768px) {
        .contact-container {
            width: 95%; 
            padding: 15px; 
        }

        .social-links a {
            font-size: 1.5rem; /* Adjusted font size for mobile */
            margin: 5px; 
        }

        .social-links a svg {
            width: 40px; /* Decreased icon size for mobile */
            height: 40px; /* Decreased icon size for mobile */
        }
    }
</style>

<main>
    <div class="relative contact-container">
        <h1 class="text-3xl pt-serif-bold-italic mb-4 text-secondary">Contact Me</h1>
        <div class="content">
            <p class="pt-serif-regular text-lg mt-4">You can reach me through the following platforms:</p>
        </div>
        <div class="social-links">
            <a href="https://github.com/UrbanoPrincess/UrbanoPrincess.github.io" aria-label="GitHub">
                <svg class="w-[50px] h-[50px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                </svg> GitHub
            </a>
            <a href="https://www.facebook.com/princessdiane.urbano.3" aria-label="Facebook">
                <svg class="w-[50px] h-[50px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                </svg> Facebook
            </a>
            <a href="mailto:202210285@gordoncollege.edu.ph" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                    <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
                </svg> Email
            </a>
        </div>
    </div>
</main>

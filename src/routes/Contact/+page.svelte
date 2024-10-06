<script>
   
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
        font-size: 1.5rem; 
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
            font-size: 1.2rem; 
            margin: 5px; 
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
            <a href="https://github.com/UrbanoPrincess/UrbanoPrincess.github.io">
                <i class="fab fa-github fa-2x icon"></i> GitHub
            </a>
            <a href="https://www.facebook.com/princessdiane.urbano.3">
                <i class="fab fa-facebook fa-2x icon"></i> Facebook
            </a>
            <a href="mailto:202210285@gordoncollege.edu.ph">
                <i class="fas fa-envelope fa-2x icon"></i> Email
            </a>
        </div>
    </div>
</main>

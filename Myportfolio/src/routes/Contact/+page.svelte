<script>
    // Add any necessary logic for the Contact page here
</script>

<style>
    .container {
        background-color: #9948af;
        color: white;
        padding: 20px;
        border-radius: 8px;
        margin: 40px auto;
        width: 60%; /* Reduced width */
        max-width: 600px; /* Set a new maximum width */
        height: 200px; /* Increased height */
        text-align: center; /* Center-align text for the container */
    }

    h1 {
        color: #d291ff;
        margin: 0; /* Remove default margin */
        text-align: center; /* Center the heading */
    }

    .content {
        margin: 20px 0;
    }

    .social-links {
        display: flex; /* Use flexbox for alignment */
        justify-content: center; /* Center items horizontally */
        gap: 20px; /* Space between items */
    }

    a {
        color: #d291ff; /* Link color */
        text-decoration: none; /* Remove underline */
        display: flex; /* Use flexbox for icon and text alignment */
        align-items: center; /* Center items vertically */
    }

    a:hover {
        text-decoration: underline; /* Underline on hover */
    }

    .icon {
        margin-right: 5px; /* Space between icon and text */
    }
</style>

<main>
    <div class="container">
        <h1>Contact Me</h1>
        <div class="content">
            <p>You can reach me through the following platforms:</p>
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

<script>
    // Add any necessary logic for the Contact page here
</script>

<style>
    /* Container for the contact section */
    .about-container {
        background-color: white; /* White background color */
        padding: 20px;
        border-radius: 10px; /* Match the border radius from the home section */
        border: 5px solid #9948af; /* Set border width to 5px to match home section */
        margin: 40px auto; /* Center the container */
        width: 90%; /* Set width to 90% for better responsiveness */
        max-width: 600px; /* Set a new maximum width */
        min-height: 200px; /* Minimum height for content */
        text-align: center; /* Center-align text for the container */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
    }

    /* Styles for the social links container */
    .social-links {
        display: flex; /* Use flexbox for horizontal layout */
        justify-content: center; /* Center the icons horizontally */
        margin-top: 20px; /* Space above social links */
        flex-wrap: wrap; /* Allow wrapping for smaller screens */
    }

    .social-links a {
        display: flex; /* Align icon and text */
        align-items: center; /* Center icon vertically with text */
        margin: 10px; /* Space between links, responsive */
        color: #9948af; /* Change link color */
        text-decoration: none; /* Remove underline */
        font-size: 1.5rem; /* Font size for links */
    }

    .social-links a:hover {
        text-decoration: underline; /* Underline on hover for better UX */
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .about-container {
            width: 95%; /* Increase width for smaller screens */
            padding: 15px; /* Adjust padding */
        }

        .social-links a {
            font-size: 1.2rem; /* Smaller font size on mobile */
            margin: 5px; /* Less margin on smaller screens */
        }
    }
</style>

<main>
    <div class="relative about-container">
        <h1 class="text-3xl font-bold mb-4">Contact Me</h1>
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

<script>
    // Add any necessary logic for the About page here
</script>

<style>
    .about-container {
        border: 5px solid #9948af;
        border-radius: 10px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    /* Add this media query to target mobile devices */
    @media (max-width: 768px) {
        .flex-wrap {
            flex-wrap: nowrap;
        }
        .w-40 {
            width: 50%;
        }
    }
</style>

<main class="font-merriweather text-black">
    <div class="relative about-container bg-purple-600 text-black p-5 rounded-lg mx-auto my-10 max-w-3xl">
        <div class="flex flex-col md:flex-row justify-center items-center">
            <div class="flex-1 text-center mb-4 md:mb-0">
                <h1 class="text-3xl font-bold mb-4">About Me</h1>
            </div>
        
            <!-- Adjusted Image aligned with the title -->
            <img src="images/about2.jpg" class="rounded-full w-28 h-28 border-4 border-white shadow-lg ml-4" alt="About Me">
        </div>
        
        <!-- Content of About Me -->
        <div class="content my-5 text-black">
            <p>I’m Princess Diane Urbano, a 3rd-year BSIT student at Gordon College from Roosevelt, Dinalupihan, Bataan. My passion for technology and problem-solving drives me to continuously learn and grow in this field. However, my journey hasn't been without its challenges.</p>
        </div>
        <div>
            <p class="text-black">There are many days when I find myself thinking, "Can I really do this?" Creativity sometimes eludes me, and I hesitate to try new things, fearing I’ll just mess them up. At times, I feel lost and unsure of whether what I'm doing is right. The fear of failure can be overwhelming, causing me to avoid challenges altogether. But these experiences have taught me resilience and the importance of perseverance.</p>
        </div>
        <div>
            <p class="text-black" style="margin-top: 20px;">Despite these hurdles, I keep pushing forward. One of my most memorable experiences as a student developer began with my first proposed project: a simple to-do list for personal use. Working alongside my friend, I realized its potential to help others, which led us to transform it into a group manager application called "We Manage." Through continuous updates and collaboration, we simplified its features, making it more user-friendly and efficient. This project taught me the value of teamwork and the impact of technology in solving everyday problems.</p>
        </div>
    </div>

    <!-- Flexbox container for side images, outside the main content -->
    <div class="flex justify-between mx-8 mt-2 flex-wrap">
        <!-- Image on the left side of the container -->
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="images/about4.jpg" class="w-40 h-40 object-cover rounded-lg border-4 border-white shadow-lg mr-2 mb-2" alt="Left Image">
        
        <!-- Image on the right side of the container -->
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="images/about3.jpg" class="w-40 h-40 object-cover rounded-lg border-4 border-white shadow-lg mr-2 mb-2" alt="Right Image">
    </div>
</main>

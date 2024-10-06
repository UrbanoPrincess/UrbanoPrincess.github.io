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
        background-color: white; 
        padding: 20px;
        margin: 40px auto; 
        width: 90%;
        max-width: 800px; 
        min-height: 200px; 
        text-align: center; 
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    }
</style>

<section class="home-container mx-auto p-5 max-w-3xl mt-20">
    <header class="flex flex-col md:flex-row items-center justify-center mb-8">
        <div class="mb-4 md:mb-0 md:mr-8">
            <Avatar src="images/profile.png" class="rounded-full ring-2 ring-secondary dark:ring-secondary-500" />
        </div>

        <article class="text-left max-w-md">
            <!-- Title using PT Serif Bold Italic -->
            <h1 class="pt-serif-bold-italic text-3xl mb-4 text-secondary">Welcome to My Portfolio!</h1>

            <!-- Content using PT Serif Regular -->
            <p class="pt-serif-regular text-lg">Hi! I'm Princess Diane Urbano, a 3rd-year BSIT student at Gordon College from Roosevelt, Dinalupihan, Bataan.</p>
            <p class="pt-serif-regular text-lg mt-4">I am passionate about learning and exploring various aspects of information technology. I enjoy developing my skills in software development and collaborating on projects that aim to address real-world challenges.</p>
        </article>
    </header>
</section>

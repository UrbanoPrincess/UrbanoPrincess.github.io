<script>
    import { Avatar } from 'flowbite-svelte';
</script>

<style>
    
    .container {
      border: 5px solid #9948af;
      border-radius: 10px;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  </style>

<section class="container mx-auto p-5 max-w-3xl mt-20"> 
    <header class="flex flex-col md:flex-row items-center justify-center mb-8">
        <div class="mb-4 md:mb-0 md:mr-8">
            <Avatar src="images/profile.png" class="avatar-lg rounded-full" />
        </div>

        <article class="text-left max-w-md">
            <h1 class="text-3xl font-bold mb-4">Welcome to My Portfolio!</h1>
            <p class="text-lg">Hi! I'm Princess Diane Urbano, a 3rd-year BSIT student at Gordon College from Roosevelt, Dinalupihan, Bataan.</p>
            <p class="text-lg mt-4">I am passionate about learning and exploring various aspects of information technology. I enjoy developing my skills in software development and collaborating on projects that aim to address real-world challenges.</p>
        </article>
    </header>
</section>
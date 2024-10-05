<script>
    // @ts-nocheck
  
    // Array of images for the image mapping section
    export let imageMapping = [
        { src: 'images/Image Mapping1.png', alt: 'Image 1' },
        { src: 'images/Image Mapping2.png', alt: 'Image 2' },
        { src: 'images/Image Mapping3.png', alt: 'Image 3' },
        { src: 'images/Image Mapping4.png', alt: 'Image 4' },
    ];
  
    // Array of images for the game section
    export let gameImages = [
        { src: 'images/Game0.png', alt: 'Game 0' },
        { src: 'images/Game1.png', alt: 'Game 1' },
        { src: 'images/Game2.png', alt: 'Game 2' },
        { src: 'images/Game3.png', alt: 'Game 3' },
    ];
  
    // Array of images for the WeManage application
    export let weManageImages = [
        { src: 'images/Login-WeManage.png', alt: 'Login WeManage' },
        { src: 'images/Register-WeManage.png', alt: 'Register WeManage' },
        { src: 'images/Dashboard-WeManage.png', alt: 'Dashboard WeManage' },
        { src: 'images/Editprofile-WeManage.png', alt: 'Edit Profile WeManage' },
        { src: 'images/Progress-WeManage.png', alt: 'Progress WeManage' },
        { src: 'images/Sched-WeManage.png', alt: 'Schedule WeManage' },
    ];
  
    // Array of images for the Bloggy application
    export let bloggyImages = [
        { src: 'images/LogIn-Bloggy.png', alt: 'Log In Bloggy' },
        { src: 'images/SignUp-Bloggy.png', alt: 'Sign Up Bloggy' },
        { src: 'images/Addpost-Bloggy.png', alt: 'Add Post Bloggy' },
        { src: 'images/Home-Bloggy.png', alt: 'Home Bloggy' },
        { src: 'images/Newsfeed-Bloggy.png', alt: 'Newsfeed Bloggy' },
    ];
  
    // Array of images for NicheCentral UI Design section
    export let nicheCentralImages = [
        { src: 'images/UI design_niche1.png', alt: 'NicheCentral UI Design 1' },
        { src: 'images/UI design_niche2.png', alt: 'NicheCentral UI Design 2' },
        { src: 'images/UI design_niche3.png', alt: 'NicheCentral UI Design 3' }
    ];
  
    // Array of images for WeManage Simplified version section
    export let simplifiedWeManageImages = [
        { src: 'images/simplified_WeManage.png', alt: 'Simplified WeManage 1' },
        { src: 'images/simplified_WeManage1.png', alt: 'Simplified WeManage 2' },
        { src: 'images/simplified_WeManage2.png', alt: 'Simplified WeManage 3' }
    ];
  </script>
  
  <style>
    .gallery-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f7f7f7;
    }
  
    .gallery-title {
        text-align: center;
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 20px;
    }
  
    .gallery {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
  
    .we-manage-gallery, .bloggy-gallery, .niche-central-gallery, .simplified-wemanage-gallery {
        grid-template-columns: repeat(3, 1fr);
    }
  
    .gallery-item {
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
    }
  
    .gallery-item img {
        width: 100%;
        height: auto;
        display: block;
    }
  
    .gallery-item:hover {
        transform: scale(1.05);
    }
  
    @media (max-width: 768px) {
        .gallery {
            grid-template-columns: 1fr;
        }
        
        .we-manage-gallery, .bloggy-gallery, .niche-central-gallery, .simplified-wemanage-gallery {
            grid-template-columns: 1fr;
        }
    }
  
    @media (max-width: 480px) {
        .gallery-title {
            font-size: 2rem;
        }
    }
  </style>
  
  <div class="gallery-container">
    <h2 class="gallery-title">Image Mapping</h2>
    <div class="gallery image-mapping-gallery">
        {#each imageMapping as { src, alt }}
            <div class="gallery-item">
                <img src={src} alt={alt} />
            </div>
        {/each}
    </div>
  
    <h2 class="gallery-title">Hide and Find Game</h2>
    <div class="gallery game-gallery">
        {#each gameImages as { src, alt }}
            <div class="gallery-item">
                <img src={src} alt={alt} />
            </div>
        {/each}
    </div>
  
    <h2 class="gallery-title">NicheCentral UI Design</h2>
    <div class="gallery niche-central-gallery">
        {#each nicheCentralImages as { src, alt }}
            <div class="gallery-item">
                <img src={src} alt={alt} />
            </div>
        {/each}
    </div>
  
    <h2 class="gallery-title">WeManage - Web-based Task Manager</h2>
    <div class="gallery we-manage-gallery">
        {#each weManageImages as { src, alt }}
            <div class="gallery-item">
                <img src={src} alt={alt} />
            </div>
        {/each}
    </div>
  
    <h2 class="gallery-title">WeManage Simplified Version</h2>
    <div class="gallery simplified-wemanage-gallery">
        {#each simplifiedWeManageImages as { src, alt }}
            <div class="gallery-item">
                <img src={src} alt={alt} />
            </div>
        {/each}
    </div>
  
    <h2 class="gallery-title">Bloggy: Blogging Web Application</h2>
    <div class="gallery bloggy-gallery">
        {#each bloggyImages as { src, alt }}
            <div class="gallery-item">
                <img src={src} alt={alt} />
            </div>
        {/each}
    </div>
  </div>
  
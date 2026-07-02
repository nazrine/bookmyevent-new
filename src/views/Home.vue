<script setup>

</script>
<template>
    <div class="hero-section">
     <div class="search-container d-flex justify-content-center align-items-center">
            <div class="search-box p-4 text-center">
            <h2 class="text-white mb-3">
                Find Your Next Event
            </h2>
             <form class="d-flex justify-content-center">
                <input class="form-control me-2 search-input" type="search" 
                placeholder="Search" aria-label="Search">
                <button class="btn btn-danger px-4" type="submit">Search</button>
            </form>
        </div>
    </div>
    </div>  
</template>

<style scoped>
.hero-section{
    background-image: linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)),
    url(/images/card1.jpg);
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat ;
    /* for full screen */
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
}
.search-container{
    flex-grow: 1;
}
.search-box{
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    width: 100%;
    max-width: 600px;
    margin: 0 20px;
}
.search-input{
    border-radius: 8px;
}
</style>
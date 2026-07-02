<script setup>

</script>
<template>
    
        <nav class="navbar navbar-expand-lg bg-transparent-custom">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold " href="/">EventHub</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link active" aria-current="page">
                                    About</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link active">
                                    Contact</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                            <ul class="dropdown-menu ms-auto" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="login-btn">
                <button class="btn btn-danger px-4 m-3">Login</button>
            </div>
        </nav>
    
        


</template>

<style scoped>

/* background transparet */
.bg-transparent-custom
{
    background-color: rgba(255,255,255,0.1);
    /* for glass look */
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

</style>
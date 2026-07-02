<script setup>

</script>
<template>
    <div class="container my-5 text-start min-vh-100">
        <div class="text-center mb-5">
            <span class="badge bg-danger-subtle text-danger mb-2 px-3 py-2 fw-bold rounded-pill">Get In Touch</span>
            <h1 class="fw-bold text-dark">We'd Love to Hear From You</h1>
            <p class="text-muted max-width-md mx-auto small">
                Have questions about booking an event or want to list your business? Drop us a message!
            </p>
        </div>

        <div class="card p-4 border-0 shadow rounded-4 bg-white">
            <h4 class="fw-bold text-dark mb-2">
                Send a Message
            </h4>
            <p class="text-muted small mb-4">Fill out the form below and our team will 
                get back to you within 24 hours.</p>

            <form @submit.prevent="handleContactSubmit">
                <div class="row g-3">
                    <div class="col-md-6">
                        <label class="form-label small fw-bold text-secondary">Full Name</label>
                        <input type="text" v-model="name" class="form-control py-2" placeholder="Your Name"
                        required>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label small fw-bold text-secondary">
                            Email Address
                        </label>
                        <input type="email" v-model="email" class="form-control py-2"
                        placeholder="name@example.com" required>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>
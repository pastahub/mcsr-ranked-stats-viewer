<template>
    <div class="loading-grid">
        <div class="circle"></div>
        <div class="circle offset-1"></div>
        <div class="circle offset-2"></div>
    </div>
</template>

<style scoped>
.loading-grid {
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(3, 15px);
    gap: 0.5rem;
    margin: 24px;
}
.circle {
    background-color: var(--blue);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    opacity: 25%;
    animation: 1s infinite fade;
}

.offset-1 {
    animation-delay: .25s;
}

.offset-2 {
    animation-delay: .5s;
}

@keyframes fade {
    from, to {
        opacity: 25%;
    }

    50% {
        opacity: 100%;
    }
}
</style>
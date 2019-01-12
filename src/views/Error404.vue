<template>
  <div class="error-page">
    <h1 class="error-page-caption">404</h1>
    <p class="error-page-text">The page doesn't exist or it was deleted</p>
  </div>
</template>

<script>
export default {
  name: 'Error404',
};
</script>

<style lang="scss">
.error-page-caption {
  font-size: 70px;
}
.error-page-text {
    font-size: 30px;
    font-weight: bold;
}
</style>

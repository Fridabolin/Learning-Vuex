<template lang="">
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/counter">Counter</RouterLink>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 25px;
  padding: 2rem;

  a {
    text-decoration: none;
    color: Green;
  }
}
</style>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/form">Formulaire</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav h2 h3 h4 {
   margin:5;
   padding:0;
}
</style>

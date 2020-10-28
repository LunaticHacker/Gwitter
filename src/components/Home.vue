<template>
  <div class="home">
    <div class="card">
      <div class="profile-info">
        <img src="https://placekitten.com/g/64/64" alt="A Cat" />
        <p class="main-name">Jane Doe</p>
        <p>@John Doe</p>
      </div>
      <div class="gweet">
        <p>Gwitter is Gweet</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
.profile-info {
  display: flex;
  padding: 1em;
}
img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
p {
  margin-right: 1em;
  margin-left: 1em;
  font-family: "Helvetica Neue", Arial, sans-serif;
  word-break: break-all;
}
p.main-name {
  font-weight: bold;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 1em;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
</style>
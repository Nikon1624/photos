<template>
  <section class="user-profile">
    <div class="user-profile__user">
      <div class="user-profile__user-avatar-wrapper">
        <img :src="user.user.profile_image.large" alt="author" class="user-profile__user-avatar">
      </div>
      <div class="user-profile__user-contacts">
        <h2 class="user-profile__user-name indents-reset">{{ user.user.username }}</h2>
        <p class="user-profile__user-instagram indents-reset">@{{ user.user.username }}</p>
      </div>
    </div>
    <ul class="user-profile__photos list">
      <li v-for="(photo, i) in 10" :key="i" class="user-profile__photos-item">
        <img :src="user.urls.regular" alt="description">
      </li>
    </ul>
  </section>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "UserPage",
  computed: {
    ...mapGetters('photos', {
      getUser: 'getUser'
    }),
    userId() {
      return this.$route.params.id;
    },
    user() {
      return this.getUser(this.userId);
    }
  }
}
</script>

<style scoped>
.user-profile__user {
  display: flex;
  align-items: center;
  padding: 20px;
}

.user-profile__user-avatar-wrapper {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
}

.user-profile__photos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: -20px;
  overflow: hidden;
}

.user-profile__photos-item {
  height: 230px;
  margin-bottom: 20px;
  overflow: hidden;
}

@media (min-width: 480px) {
  .user-profile__photos-item {
    height: 300px;
  }
}

@media (min-width: 768px) {
  .user-profile__photos-item {
    width: calc((100% - 20px) / 2);
    height: 230px;
  }
}
</style>
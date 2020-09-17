<template>
  <ul class="photos list">
    <li v-for="photo in photos" :key="photo.id" class="photos__item photo">
      <div class="photo__author">
        <div class="photo__author-avatar-wrapper">
          <router-link :to="`/user/${photo.id}`"
                       tag="img"
                       :src="photo.user.profile_image.large"
                       alt="author"
                       class="photo__author-avatar"
          ></router-link>
        </div>
        <div class="photo__author-contacts">
          <router-link :to="`/user/${photo.id}`" tag="p" class="photo__author-name indents-reset">{{ photo.user.username }}</router-link>
          <p class="photo__author-instagram indents-reset">@{{ photo.user.username }}</p>
        </div>
      </div>
      <div class="photo__img-wrapper" :style="{backgroundColor: photo.color}">
        <img :src="photo.urls.regular" alt="description" class="photo__img">
      </div>
      <div class="photo__views-count-wrapper">
        <span class="photo__views-count">{{ photo.likes }}</span>
        <img src="@/assets/img/icons/visibility.svg" alt="icon" class="photo__views-count-icon">
      </div>
    </li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "PhotosList",
  computed: {
    ...mapGetters('photos', {
      photos: 'getPhotos'
    })
  },
}
</script>

<style scoped>
.photo__author {
  display: flex;
  align-items: center;
  padding: 10px;
}

.photo__author-avatar-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
}

.photo__author-avatar {
  cursor: pointer;
}

.photo__author-name {
  margin-bottom: 3px;
  font-weight: 700;
  color: #333333;
  cursor: pointer;
}

.photo__author-name:hover {
  text-decoration: underline;
}

.photo__author-instagram {
  color: #8D8D8D;
}

.photo__img-wrapper {
  display: flex;
  align-items: center;
  height: 230px;
  overflow: hidden;
}

.photo__views-count-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
}

.photo__views-count {
  margin-right: 5px;
  font-weight: 700;
  color: #8D8D8D;
}

@media (min-width: 480px) {
  .photo__img-wrapper {
    height: 300px;
  }
}

@media (min-width: 768px) {
  .photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .photos__item {
    width: calc((100% - 20px) / 2);
  }

  .photo__img-wrapper {
    height: 230px;
  }
}
</style>
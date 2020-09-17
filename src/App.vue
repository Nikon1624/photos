<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
      <Pagination :page-count="10"
                  :click-handler="loadPage"
                  prev-class="hidden"
                  next-class="hidden"
                  container-class="pagination"
                  page-class="pagination__item"
                  active-class="pagination__item--active"
                  break-view-class="pagination__item--break"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from 'vuejs-paginate';

export default {
  name: 'App',
  components: {
    Pagination
  },
  methods: {
    loadPage(pageNum) {
      this.$store.dispatch('photos/fetchPhotos', pageNum);
    }
  },
  beforeMount() {
    this.$store.dispatch('photos/fetchPhotos');
  }
}
</script>

<style>
@import "~@/assets/css/style.css";

.container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

.pagination {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 18px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.9);
}

.pagination__item {
  margin-right: 15px;
  outline: none;
  user-select: none;
}

.pagination__item a:focus {
  outline: none;
}

.pagination__item--active {
  font-size: 26px;
  font-weight: 700;
}

.hidden {
  display: none;
}

@media (min-width: 480px) {
  .container {
    padding: 0 20px;
  }
}
</style>

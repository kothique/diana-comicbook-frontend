<template>
  <div class="comic-book-card">
    <img class="cover" :style="{ backgroundImage: cover }">
    </img>

    <div class="info">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description}}</div>
      <div class="likes">{{ likes }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comic-book-card',
  props: {
    title: String,
    cover: String,
    description: String,
    likes: Number
  }
};
</script>

<style lang="stylus">
.comic-book-card
  padding $gap * 2
  display flex

  border-radius $border-radius
  border 1px solid blue

  .cover
    background black
    height 200px
    width calc(200px * 17 / 22)
    margin-right $gap

  .info
    display flex
    flex-direction column
    flex-grow 1

    .title
      text-align left
      font-size 1.2rem
      font-weight 600

    .description
      text-align left
      flex-grow 1

    .likes
      text-align right
      font-size 1.2rem
</style>

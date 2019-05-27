<template>
  <section id="comics-grid">
    <div class="grid">
      <ComicBookCard v-for="card of cards"
        :key="card.title"
        :title="card.title"
        :cover="card.cover"
        :description="card.description"
        :likes="0" />
    </div>
  </section>
</template>

<script>
import ComicBookCard from './ComicBookCard';

export default {
  name: 'comics-grid',
  data: () => ({
    cards: [
      {
        title: 'Boom 4xF400',
        cover: '/img/boom_4xf400.png',
        description: 'A comic book'
      },
      {
        title: 'Sex on The Beach',
        cover: '/img/sex_on_the_beach.png',
        description: 'Two girls lick each other\'s pussies on a beautiful shore.'
      },
      {
        title: 'Zoom 4xF400',
        cover: '/img/boom_4xf400.png',
        description: 'A comic book'
      },
      {
        title: 'Flex on The Beach',
        cover: '/img/sex_on_the_beach.png',
        description: 'Two girls lick each other\'s pussies on a beautiful shore.'
      }
    ]
  }),
  components: {
    ComicBookCard
  }
};
</script>

<style lang="stylus">
#comics-grid
  width 100%

  .grid
    display grid
    grid-template-columns repeat(auto-fill, minmax(min-content, $comics-card-width))
    grid-gap $gap * 2
    justify-content center
    overflow-y auto
    padding $gap-page
</style>

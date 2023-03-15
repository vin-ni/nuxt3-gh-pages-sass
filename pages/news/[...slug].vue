<script setup>
const { path } = useRoute()

const { data: article } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

function formatDate(date_string) {
  const options = { month: 'short', day: 'numeric', year: 'numeric' }
  return new Date(date_string).toLocaleDateString('en-US', options)
}
</script>

<template>
  <main class="news-single">
    <div v-if="article" class="content-container">
      <!-- <h1>{{ article.title }}</h1> -->
      <h1>TestTitle</h1>
      <p>
        <!-- <time datetime="{article.date}">{{ formatDate(article.date) }}</time> -->
      </p>
      <ContentDoc />
    </div>
  </main>
</template>

<style lang="scss">
// @import "assets/scss/variables.scss";
// @import "assets/scss/mixins.scss";


</style>

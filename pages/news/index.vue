<script setup>
const { data: news } = await useAsyncData('news', () => {
  return queryContent('news').sort({ date: 1 }).find()
})
</script>

<template>
  <main>
    <section>
      <div v-if="news">
        <div class="news-archive-container">
          <div v-for="article in news">
            <a :href="article._path" class="container">
              <div class="img-container">
                <img :src="article.teaser_img.src" :alt="article.teaser_img.alt">
              </div>
              <h4>
                {{ article.title }}
              </h4>
            </a>


          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
</style>
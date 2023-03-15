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
            <NuxtLink :to="article._path" class="container">
              <h4>
                {{ article.title }}
              </h4>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
</style>
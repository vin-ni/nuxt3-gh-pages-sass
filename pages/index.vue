<script setup>
const { data: news } = await useAsyncData('news', () => {
  return queryContent('news').sort({ date: 1 }).find()
})
</script>

<template>
  <div class="wrapper">
    <h1>Title</h1>

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

    <p>Loorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
      eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.</p>

    <img src="/image.png" alt="">

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
      eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.</p>

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
      eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.</p>
  </div>
</template>


<style lang="scss">
@import "@/assets/scss/mixins.scss";

.wrapper {
  width: 100%;
  padding: 24px;
  max-width: 900px;
  margin: 0 auto;

  h1 {
    font-size: 48px;
    margin-bottom: 24px;

    @include onScreen('phone-only') {
      font-size: 32px;
    }
  }

  p {
    font-size: 24px;

    @include onScreen('phone-only') {
      font-size: 16px;
    }
  }

  img {
    margin-bottom: 24px;
  }

  background-color: yellow;

  @include onScreen('phone-only') {
    background-color: greenyellow;
  }
}
</style>
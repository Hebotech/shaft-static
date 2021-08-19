/* eslint-disable no-var */
<template>
  <main class="distribuidor">
    <div
      class="typeform-widget animate__fadeInDown animate__animated"
      data-url="https://form.typeform.com/to/wXtpWP"
      data-transparency="100"
      style="width: 100%; height: 500px"
    />
  </main>
</template>

<script>
export default {
  name: 'Distribuidor',
  beforeMount() {
    function hello() {
      let js
      let q
      const d = document
      const gi = d.getElementById
      const ce = d.createElement
      const gt = d.getElementsByTagName
      const id = 'typef_orm'
      const b = 'https://embed.typeform.com/'
      if (!gi.call(d, id)) {
        js = ce.call(d, 'script')
        js.id = id
        js.src = `${b}embed.js`
        // eslint-disable-next-line prefer-destructuring
        q = gt.call(d, 'script')[0]
        q.parentNode.insertBefore(js, q)
      }
    }
    hello()
  },
}
</script>

<style lang="scss" scoped>
* {
  background-color: #253a5f;
}
.typeform-widget {
  max-height: 50vh;
}
.distribuidor {
  min-height: 100vh;
}
</style>

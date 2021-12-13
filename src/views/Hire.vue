<template>
  <div class="client-form">
    <h2>Ready to Book?</h2>
  </div>
  <h3>Please Check Calendar for Availability</h3>
  <div class="calendar">
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&src=aWphbWVzZGptY0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679"
      style="border: solid 1px #777"
      width="500"
      height="400"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
  <div class="client-form">
    <h3 class="next-steps">
      Next Step is to Fill out Client Form and make Initial Deposit
    </h3>
  </div>
  <section></section>
</template>

<script>
export default {
  name: "Hire",
};
</script>

<style>
.calendar {
  display: flex;
  justify-content: center;
}
</style>

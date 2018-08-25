<template>
  <li class="event-listitem">
  <div>

  <b-card title=""
          img-src="https://placeimg.com/400/200/nature?t=1535076287388"
          img-alt="Image"
          img-top
          tag="article"
          style="width: 20rem;"
          class="mb-2">
    <h2>{{event.name}}</h2>
    <b-button variant="primary" id = "create-button" :to="`/events/${event.id}`">Details</b-button>
  </b-card>

</div>
  </li>
</template>


<script>
export default {
  name: "EventsList",
  props: ["event"]
}
</script>


<style scoped>
h2 {
  font-size: 1.5vw;
  margin-bottom: 1vw;
}
p {
  font-size: 1vw;
}
.event-listitem {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
  margin-bottom: 1vw;
}
</style>

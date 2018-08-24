<template>
  <div class="event-listitem">
  <b-card title=""
          img-src="https://placeimg.com/400/200/nature?t=1535076287388"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 50vw;"
          class="mb-2">
    <h3>Event Name: {{this.myEvents[0].name}}</h3>
    <h3>Event Latitude: {{this.myEvents[0].lat}}</h3>
    <h3>Event Longitude: {{this.myEvents[0].long}}</h3>
    <p>Description: {{this.myEvents[0].description}}</p>
    <b-button variant="primary" @click="this.deleteEvent" id="delete" type="button" name="button">Delete</b-button>
  </b-card>
</div>
</template>

<script>
export default {
  name: "EventCard",
  props: ['myEvents'],
  methods: {
    deleteEvent (event) {
  console.log('delete was clicked')
  console.log('target',event.target.id)
  const event_id = event.target.id
  fetch(`https://openvillage.herokuapp.com/events/${this.myEvents[0].id}`, {
    method: 'DELETE'
  })
}
}
}
</script>

<style>
.event-listitem {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
  margin-bottom: 1vw;
}
#delete {
  font-size: 1vw;
  height: 3vw;
  width: 5vw;
  height: auto;
}
</style>

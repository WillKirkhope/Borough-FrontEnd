<template>
  <div class="event-listitem">
  <b-card title=""
          img-src="https://placeimg.com/400/200/nature?t=1535076287388"
          img-alt="Image"
          img-top
          tag="article"
          style="width: 50vw;"
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
    // .then(window.location.replace("https://openvillage-8d44b.firebaseapp.com/"))
}
}
}
</script>

<style>
/* .Event-card {
  display: flex;
  flex-direction: column;
  background-color:rgb(232, 245, 252);
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 1vw;
  height: 30vw;
  width: 30vw;
  /* font-weight: 400;
  margin-top: 10vw;
  margin-bottom: 1vw;
  padding: .5vw .5vw; */
  /* border-radius: .25vw;
  border: 1px solid black;
  box-shadow: .06vw .06vw .06vw 0vw rgba(0,0,0,0.75);
} */
/* p {
  font-size: 1.5vw;
} */

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

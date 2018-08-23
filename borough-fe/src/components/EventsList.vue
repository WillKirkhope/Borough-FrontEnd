<template>
  <li class="event-listitem">
  <div>
  <b-card title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <h2>{{event.name}}</h2>
    <p class="card-text">
      {{event.description}}
    </p>
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
/* li {
    display: flex;
    background-color:rgb(232, 245, 252);
    color: black;
    text-align: center;
    text-decoration: none;
    font-size: 1vw;
    font-weight: 400;
    margin: 0;
    margin-bottom: 1vw;
    padding: .5vw .5vw;
    border-radius: .25vw;
    border: 1px solid black;
    box-shadow: .06vw .06vw .06vw 0vw rgba(0,0,0,0.75);
} */
h2 {
  font-size: 1.5vw;
  margin-bottom: 0;
}
p {
  font-size: 1vw;
}
.event-listitem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2vw;
}
/* .moreButton {
  display: flex;
  justify-content: flex-end;
  margin-right: 2vw;
  height: 4vw;
  padding-left: 2vw;
}
#create-button {
  background-color:rgb(255, 233, 179);
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 1vw;
  font-weight: 400;
  margin: 0;
  margin-bottom: 1vw;
  padding: .5vw .5vw;
  cursor: pointer;
  border-radius: .25vw;
  border: 1px solid black;
  box-shadow: .25vw .25vw .125vw 0vw rgba(0,0,0,0.75);
} */
</style>

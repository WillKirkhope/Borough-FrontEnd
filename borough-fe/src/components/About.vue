<template>
  <div id="about">
      <h1>About The Borough</h1>
      <p>The Borough is an application that makes the process of helping your local community easy. The app allows you to find a community service event near you and read all about the event. Want to gather your community and help others? You can create your own community service event and have it seen by all other members. With The Borough, community service is more efficient than ever before.</p>
        <h2>The Borough Team</h2>
        <img src="https://pre00.deviantart.net/14ca/th/pre/f/2015/334/9/c/rammy_goat_vector___castle_crashers_by_mordefic-d9il0qf.png" alt="">
        <div class="event-listitem">
        <b-card title=""
                img-src=""
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 50vw;"
                class="mb-2">
          <h3>Will Kirkhope</h3>
          <h3>Lead Developer</h3>
          <p>Will has an imense amout of experience when it comes to Community Service.
          As an Eagle Scout, Will Spent many years working to help the community and other people as pften as he could.
        He then went pn top train younger scouts to do much of the same for many years.</p>
        <br>
        </b-card>
      </div>
  </div>
</template>


<script>
import Members from "./Members"
export default {
  name: 'About',
  components: {
    Members
  },
  data(){
    return {
      members: []
    }
  },
  methods: {
  getMembers() {
    fetch("https://openvillage.herokuapp.com/neighbors")
    .then(response => response.json())
    .then(myData => this.members = (myData.event))
    }
  },
  mounted(){
    this.getMembers()
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

h2 {
  font-size:3vw;
}
img {
height:25vh;
width: 21vw;
padding-right:2vw;
margin-left: 3vw;
}
p {
  padding: 0 2vw;
}
#about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left:2vw;
  background-color: rgb(228, 230, 234);
}
</style>

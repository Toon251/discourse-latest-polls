import Component from "@glimmer/component";
import { computed, action } from '@ember/object';
import Service from '@ember/service';
import { tracked } from "@glimmer/tracking";

export default class LatestPoll extends Component {
    @tracked polls = [];
    @tracked pollImg = "";
    @tracked title = "";

    @computed
    get isMobile() {
      return /Mobi|Android/i.test(navigator.userAgent);
    }
  
    constructor() {
        super(...arguments);
        this.loadEvents(); 
        
    }


    async loadEvents() {
        try {
        
          this.pollImg = settings.poll_img;
          this.title = settings.title;

        
          // Get
          const resp = await fetch(settings.url, 
            { 
              method: "GET",
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              } }
          );
          const respData = await resp.json();
          if(respData.success){
            this.polls = respData.data;
          }
          

        } catch (error) {
          console.error('Error during fetch:', error);
        }
      }
}
import { writable } from "svelte/store";

export const FeedbackStore =  writable([
     {id:1,
  rating:6,
  text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, est!"
},
{id:2,
  rating:10,
  text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, est!"
},
{id:3,
  rating:8,
  text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, est!"
},
])
<script>
import { FeedbackStore } from "../stores";
// import {onMount, onDestroy} from "svelte"
import {scale, fade} from "svelte/transition"
import FeedbackItem from "./FeedbackItem.svelte";
//  let feedback =[]

//  const unsubscribe = FeedbackStore.subscribe((data)=> feedback = data)

//  onDestroy(()=>{
//     unsubscribe()
//  })

</script>

{#each $FeedbackStore as fb (fb.id) }
    <div in:scale out:fade>
        <FeedbackItem item={fb}  />
    </div>
{/each}
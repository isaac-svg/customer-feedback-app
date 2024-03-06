<script>
    import { FeedbackStore } from "../stores";
 let count
 let average

$: count = $FeedbackStore.length
$: average = $FeedbackStore.reduce((prev, {rating})=>prev + rating,0) / $FeedbackStore.length

</script>


<div class="feedback-stats">
    <h4>{count} reviews</h4>
    <h4>{average} average</h4>
</div>

<style>
    .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
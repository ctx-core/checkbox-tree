<script>
export let expanded = false
</script>

<a
	href="."
	class="Checkbox_Tree_Knob"
	on:click
>
	{#if expanded}
		&#x25BC;
	{:else}
		&#x25B6;
	{/if}
</a>

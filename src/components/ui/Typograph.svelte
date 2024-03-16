<script>
	export let tag = 'p';
	export let text = 'Hello, world!';
	export let extraClass = '';
	let defaultClass = 'text-custom-gray  font-medium';
</script>

{@html `<${tag} class="${defaultClass} ${extraClass}">${text}</${tag}>`}

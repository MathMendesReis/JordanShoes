<script>
	import SiteHeader from '../components/features/SiteHeader.svelte';
	import './app.css';
</script>

<body class="">
	<SiteHeader />
	<main class="p-4">
		<slot />
	</main>
</body>

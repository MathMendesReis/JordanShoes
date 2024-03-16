<script>
	import jorda from '../assets/air-jordan-1-mid-dutch-green-1-400.svg';
	let items = [
		{
			name: 'Air Jordan 1 Mid Dutch Green',
			category: 'Tênis Air Jordan',
			price: 'R$ 1.199,99',
			image: jorda
		},
		{
			name: 'Air Jordan 2 Retro',
			category: 'Tênis Air Jordan',
			price: 'R$ 1.299,99',
			image: jorda
		},
		{
			name: 'Air Jordan 3 Retro',
			category: 'Tênis Air Jordan',
			price: 'R$ 1.399,99',
			image: jorda
		},
		{
			name: 'Air Jordan 3 Retro',
			category: 'Tênis Air Jordan',
			price: 'R$ 1.399,99',
			image: jorda
		},
		{
			name: 'Air Jordan 3 Retro',
			category: 'Tênis Air Jordan',
			price: 'R$ 1.399,99',
			image: jorda
		},
		{
			name: 'Air Jordan 3 Retro',
			category: 'Tênis Air Jordan',
			price: 'R$ 1.399,99',
			image: jorda
		},
		{
			name: 'Air Jordan 3 Retro',
			category: 'Tênis Air Jordan',
			price: 'R$ 1.399,99',
			image: jorda
		},
		{
			name: 'Air Jordan 3 Retro',
			category: 'Tênis Air Jordan',
			price: 'R$ 1.399,99',
			image: jorda
		},
		{ name: 'Air Jordan 3 Retro', category: 'Tênis Air Jordan', price: 'R$ 1.399,99', image: jorda }
	];
</script>

<svelte:head>
	<title>Jordan Shoes</title>
	<meta name="description" content="Jordan Shoes" />
</svelte:head>

<section class="max-w-[1920px] flex flex-col items-center md:px-0 px-2">
	<div class="max-w-[593px] text-center flex flex-col gap-6">
		<h1 class="text-black text-2xl">Os melhores em só lugar</h1>
		<h4 class="">
			A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo
			e conforto.
		</h4>
	</div>

	<main>
		<ul
			class="grid min-[1230px]:grid-cols-3 min-[800px]:grid-cols-2 grid-cols-1 gap-8 max-w-[1920px] mx-auto items-center justify-center mt-20"
		>
			{#each items as item}
				<li
					title={item.name}
					class="min-[392px]:w-[384px] w-full min-h-[326px] flex flex-col items-center justify-center bg-neutral-200 rounded-2xl cursor-pointer"
				>
					<div>
						<img
							src={item.image}
							alt={item.name}
							class="scale-90 hover:scale-105 delay-100 transition-all"
						/>
					</div>
					<div class="flex flex-col gap-2">
						<h3 class="text-black">{item.name}</h3>
						<div>
							<h4 class="text-[#7CA2F4]">{item.category}</h4>
							<p class="text-black">{item.price}</p>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</main>
</section>

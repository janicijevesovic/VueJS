<template>
	<div class="p-4 bg-green-300">
		<NuxtLayout>
			<header>
				<ul>
					<li>
						<NuxtLink to="/">Home</NuxtLink>
						<NuxtLink to="/events">Event</NuxtLink>
					</li>
				</ul>
			</header>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

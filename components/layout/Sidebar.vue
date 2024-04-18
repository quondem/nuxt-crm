<template>
	<aside class="px-5 py-8 bg-sidebar h-full relative">
		<NuxtLink
			to="/"
			class="mb-10 block">
			<NuxtImg
				src="/logo.svg"
				class="w-[140px] mx-auto" />
		</NuxtLink>

		<button
			@click="logout"
			class="absolute top-2 right-2 transition-colors hover:text-primary">
			<Icon
				name="line-md:log-out"
				size="20" />
		</button>

		<LayoutMenu />
	</aside>
</template>

<script setup lang="ts">
const isLoadingStore = useIsLoadingStore();
const store = useAuthStore();
const router = useRouter();

const logout = async () => {};
</script>

<template>
	<div class="mb-3">
		<label
			v-if="labelText"
			class="block opacity-75 text-xs mb-0.5">
			{{ labelText }}
		</label>

		<div class="text-base"><slot /></div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		labelText: {
			type: String,
			default: "",
		},
	});
</script>

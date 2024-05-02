import type { ICard } from "~/components/kanban/kanban.types";

const defaultvalue: { card: ICard | null; isOpen: boolean } = {
	card: null,
	isOpen: false,
};

export const useSlideOver = defineStore("auth", {
	state: () => defaultvalue,
	getters: {
		isOpen: state => state.isOpen,
	},
	actions: {
		clear() {
			this.$patch({ isOpen: false });
		},

		set(card: ICard) {
			this.$patch({ card, isOpen: true });
		},

		toggle() {
			this.isOpen = !this.isOpen;
		},
	},
});

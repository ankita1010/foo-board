export const formConfigs = {
    fooBoard: {
        fooBoardName: {
            type: "text",
            label: 'Board Name',
			max: 50,
            initial: ''
        },
        fooBoardSubtitle: {
            type: 'text',
            label: 'Subtitle',
			max: 100,
            initial: ''
        }
    },
	lists: {
		listTitle: {
			type: "text",
			label: "List Title",
			max: 50,
			initial: ''
		}
	},
	cards: {
		cardTitle: {
			type: "text",
			label: "Card Title",
			initial: ''
		},
		cardDesciption: {
			type: "text",
			label: 'Description',
			initial: ''
		}
	},
};
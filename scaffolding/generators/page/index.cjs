/**
 * Container Generator
 */

const componentExists = require("../utils/componentExists.cjs");
const features = require("../constants.cjs");

module.exports = {
	description: "Create a new screen",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "What should it be called?",
			default: "Home",
			validate: (value) => {
				if (/.+/.test(value)) {
					return componentExists(value)
						? "A component or screen with this name already exists"
						: true;
				}

				return "The name is required";
			},
		},
		{
			type: "confirm",
			name: "isShared",
			message: "Will this screen be shared across features?",
			default: "true",
		},
		{
			type: "list",
			name: "whichFeature",
			message: "Which feature will use this screen?",
			choices: features,
			when: (answers) => !answers.isShared,
		},
	],
	actions: ({ isShared }) => {
		// Generate index.js and index.test.js
		const pageTemplate = "./page/screen.js.hbs"; // eslint-disable-line no-var

		const actions = [];

		if (isShared) {
			actions.push(
				{
					type: "add",
					path: "../../src/(common)/(screens)/{{camelCase name}}/index.tsx",
					templateFile: pageTemplate,
					abortOnFail: true,
				},
				{
					type: "prettify",
					path: "../../src/(common)/(screens)",
				},
			);

			return actions;
		}

		actions.push(
			{
				type: "add",
				path: "../../src/(features)/({{camelCase whichFeature}})/(screens)/{{camelCase name}}/index.tsx",
				templateFile: pageTemplate,
				abortOnFail: true,
			},
			{
				type: "prettify",
				path: "../../src/common/pages",
			},
		);

		return actions;
	},
};

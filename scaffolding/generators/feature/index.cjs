/**
 * Feature Generator
 */

const componentExists = require("../utils/componentExists");

module.exports = {
	description: "Create a new feature",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "What should this feature be called?",
			default: "authentication",
			validate: (value) => {
				if (/.+/.test(value)) {
					return componentExists(value)
						? "A component/screen/feature with this name already exists"
						: true;
				}

				return "The name is required";
			},
		},
	],
	actions: (_data) => {
		// Generate index.js and index.test.js
		const featureTemplate = "./feature/feature.js.hbs";
		const findLineToModifyRegex = /,\s*](?![^[]*])/g;
		const addFeatureTemplate = "./feature/addFeature.js.hbs";

		const actions = [
			{
				type: "add",
				path: "../../src/(features)/({{camelCase name}})/(screens)/index.ts",
				templateFile: featureTemplate,
				abortOnFail: true,
			},
			{
				type: "add",
				path: "../../src/(features)/({{camelCase name}})/components/index.ts",
				templateFile: featureTemplate,
				abortOnFail: true,
			},
			{
				type: "modify",
				pattern: findLineToModifyRegex,
				path: "./constants.cjs",
				templateFile: addFeatureTemplate,
				abortOnFail: true,
			},
		];

		return actions;
	},
};

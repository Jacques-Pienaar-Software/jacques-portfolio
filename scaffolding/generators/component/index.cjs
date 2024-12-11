/**
 * Component Generator
 */

/* eslint strict: ["off"] */

"use strict";

const componentExists = require("../utils/componentExists.cjs");
const features = require("../constants.cjs");

module.exports = {
	description: "Create a new component",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "What should it be called?",
			default: "input",
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
			message: "Will this component be shared across features?",
			default: "true",
		},
		{
			type: "list",
			name: "whichFeature",
			message: "Which feature does this component fall under?",
			choices: features,
			when: (answers) => !answers.isShared,
		},
	],
	actions: ({ isShared }) => {
		const componentTemplate = "./component/component.js.hbs";
		const stylesTemplate = "./component/styles.scss.hbs";
		const typesTemplate = "./component/types.js.hbs";

		const actions = [];

		if (isShared) {
			actions.push(
				{
					type: "add",
					path: "../../src/(common)/components/{{camelCase name}}/index.tsx",
					templateFile: componentTemplate,
					abortOnFail: true,
				},
				{
					type: "add",
					path: "../../src/(common)/components/{{camelCase name}}/styles.ts",
					templateFile: stylesTemplate,
					abortOnFail: true,
				},
				{
					type: "add",
					path: "../../src/(common)/components/{{camelCase name}}/types.ts",
					templateFile: typesTemplate,
					abortOnFail: true,
				},
				{
					type: "prettify",
					path: "../../src/(common)/components",
				},
				{
					type: "add",
					path: "../../src/(common)/components/{{camelCase name}}/__tests__/index.test.tsx",
					templateFile: "./component/test.js.hbs",
					abortOnFail: true,
				},
			);

			return actions;
		}

		actions.push(
			{
				type: "add",
				path: "../../src/(features)/({{camelCase whichFeature}})/components/{{camelCase name}}/index.tsx",
				templateFile: componentTemplate,
				abortOnFail: true,
			},
			{
				type: "add",
				path: "../../src/(features)/({{camelCase whichFeature}})/components/{{camelCase name}}/styles.ts",
				templateFile: stylesTemplate,
				abortOnFail: true,
			},
			{
				type: "add",
				path: "../../src/(features)/({{camelCase whichFeature}})/components/{{camelCase name}}/types.ts",
				templateFile: typesTemplate,
				abortOnFail: true,
			},
			{
				type: "prettify",
				path: "../../src/(features)/({{camelCase whichFeature}})",
			},
			{
				type: "add",
				path: "../../src/(features)/({{camelCase whichFeature}})/components/{{camelCase name}}/__tests__/index.test.tsx",
				templateFile: "./component/test.js.hbs",
				abortOnFail: true,
			},
		);

		return actions;
	},
};

/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const componentGenerator = require("./component/index.cjs");
const featureGenerator = require("./feature/index.cjs");
const screenGenerator = require("./page/index.cjs");

module.exports = (plop) => {
	plop.setGenerator("component", componentGenerator);
	plop.setGenerator("feature", featureGenerator);
	plop.setGenerator("screen", screenGenerator);

	plop.addHelper("directory", (comp) => {
		try {
			fs.accessSync(
				path.join(__dirname, `../../src/(common)/(pages)/${comp}`),
				fs.F_OK,
			);

			return `src/(common)/(pages)/${comp}`;
		} catch (e) {
			return `src/(common)/components/${comp}`;
		}
	});

	plop.addHelper("curly", (option, open) => (open ? "{" : "}"));
	plop.setHelper("ifEquals", function (arg1, arg2, options) {
		return arg1 == arg2 ? options.fn(this) : options.inverse(this);
	});

	plop.setActionType("prettify", (answers, config) => {
		const folderPath = `${path.join(
			__dirname,
			"/../../src/",
			config.path,

			"**.ts",
		)}`;
		exec(`npm run prettify -- "${folderPath}"`);
		return folderPath;
	});
};

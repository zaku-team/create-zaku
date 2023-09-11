await Bun.build({
	entrypoints: ['./src/bin/main.ts'],
	outdir: './build',
	minify: true,
	target: 'bun',
	format: 'esm',
});

const readme = Bun.file('./README.md');
const license = Bun.file('./LICENSE.md');
const packageJSON = Bun.file('./package.json');

await Bun.write('./build/README.md', readme);
await Bun.write('./build/LICENSE.md', license);
await Bun.write('./build/package.json', packageJSON);

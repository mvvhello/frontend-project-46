install: #installing project dependencies
	npm ci

gendiff: 
	node bin/gendiff.js

publish: #make fake global publishing
	npm publish --dry-run

lint: 
	npx eslint .
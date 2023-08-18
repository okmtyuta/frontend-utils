
pre-push: typecheck fmt lint

lint:
	yarn run lint
	yarn run typecheck

typecheck:
	yarn typecheck

fmt:
	yarn fmt

pre-push:
	yarn build

auto-push:
	git add .
	git commit -m "auto-commit"
	git push origin HEAD

auto-deploy: pre-push auto-push
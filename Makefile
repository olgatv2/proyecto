.PHONY: test
build:
	docker compose build

start:
	docker compose up

stop:
	docker compose stop

test:
	docker compose run app npm run test $(ARGS)
	
 	

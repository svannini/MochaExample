REPORTER = list
MOCHA_OPTS = --ui bdd 

test:
	echo ****** Starting test *****
	./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	test/*.js
	echo ***** End test ******

.PHONY: test

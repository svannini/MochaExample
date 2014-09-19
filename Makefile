REPORTER = list
MOCHA_OPTS_BDD = --ui bdd
MOCHA_OPTS_TDD = --ui tdd

test:
	echo ****** Starting BDD tests *****
	./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS_BDD) \
	test/BDD/*.js
	echo ***** End BDD tests ******

test_BDD:
	echo ****** Starting BDD tests *****
	./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS_BDD) \
	test/BDD/*.js
	echo ***** End BDD tests ******

test_TDD:
	echo ****** Starting TDD tests *****
	./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS_TDD) \
	test/TDD/*.js
	echo ***** End TDD tests ******


.PHONY: test

import tests from "./tests.json";
import test from 'tape';

test('json loader test', function (t) {
    t.plan(1);

    t.deepEqual(tests, {
      "github": "particle4dev"
    });
});

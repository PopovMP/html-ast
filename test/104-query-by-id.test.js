import {parse, getElementById} from "../index.mjs";

import {describe, it} from "node:test";
import {equal} from "node:assert";

describe("query by id", () => {
    const html = '<div><div><div id="foo"></div></div></div>';
    const ast = parse(html);
    const element = ast.children[0];

    it("query by id", () => {
        const foo = getElementById(element, "foo");
        equal(foo.attributes["id"], "foo");
    });
});

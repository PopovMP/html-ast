import {parse} from "../index.mjs";

import {describe, it} from "node:test";
import {equal} from "node:assert";

describe("document", () => {
    it("Parse an empty HTML string to AST", () => {
        const ast = parse("");
        ast.tagName = "document";
        equal(typeof ast, "object");
    });
});

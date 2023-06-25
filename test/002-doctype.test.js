import {parse} from "../index.mjs";

import {describe, it} from "node:test";
import {equal} from "node:assert";

describe("doctype", () => {
    it("eat DocType", () => {
        const html = "<!DOCTYPE html><html></html>";
        const ast = parse(html);
        equal(ast.children.length, 1);
        equal(ast.children[0].tagName, "html");
    });

    it("no DocType", () => {
        const html = "<html></html>";
        const ast = parse(html);
        equal(ast.children.length, 1);
        equal(ast.children[0].tagName, "html");
    });
});

import {parse} from "../index.mjs";

import {describe, it} from "node:test";
import {equal} from "node:assert";

describe("attributes", () => {
    it('Parse one attribute', () => {
        const html = '<!DOCTYPE html><html lang="English"></html>';
        const ast = parse(html);
        const attributes = ast.children[0].attributes;
        equal(attributes["lang"], "English");
    });

    it('Parse two attributes', () => {
        const html = '<!DOCTYPE html><html lang="English" class="wrapper main-page"></html>';
        const ast = parse(html);
        const attributes = ast.children[0].attributes;
        equal(attributes["class"], "wrapper main-page");
    });
});

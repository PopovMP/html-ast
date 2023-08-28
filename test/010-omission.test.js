import {parse} from "../index.js";

import {describe, it} from "node:test";
import {equal} from "node:assert";

describe("end tag omission", () => {
    it("p", () => {
        const html = `<div><p>hello<p>world</div>`;
        const ast  = parse(html);
        const p1   = ast.children[0].children[0];
        equal(p1.tagName, "p");
        equal(p1.children[0].text, "hello");

        const p2 = ast.children[0].children[1];
        equal(p2.tagName, "p");
        equal(p2.children[0].text, "world");
    });

    it("td", () => {
        const html = `<tr><td>hello<td>world</tr>`;
        const ast  = parse(html);
        const td1   = ast.children[0].children[0];
        equal(td1.tagName, "td");
        equal(td1.children[0].text, "hello");

        const td2 = ast.children[0].children[1];
        equal(td2.tagName, "td");
        equal(td2.children[0].text, "world");
    });
});

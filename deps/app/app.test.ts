import { assert, fail, assertEquals } from "https://deno.land/std/testing/asserts.ts";

import "../core/core.js";
import { add } from "./app.js";

Deno.test("app.js", () => {
    assertEquals(add(1, 2), 3);
});

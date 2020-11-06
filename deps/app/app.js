import "../core/core.js";

export function add(a, b) {
    return a + b;
}

Core.use(Y => {
    Y.log("app/app.js", Y);
});

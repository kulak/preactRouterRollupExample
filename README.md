# README

UI Stack:

- preact
- preact-router
- htm instead of JSX
- TypeScript
- rollup

## Issue

Use of router `Link` results in error:

```
match.js:55 Uncaught TypeError: (0 , Router.exec) is not a function
    at Match.render (match.js:55)
    at T (preact.module.js:1)
    at preact.module.js:1
    at b (preact.module.js:1)
    at b (preact.module.js:1)
    at _ (preact.module.js:1)
    at T (preact.module.js:1)
    at preact.module.js:1
    at b (preact.module.js:1)
    at _ (preact.module.js:1)
render	@	match.js:55
T	@	preact.module.js:1
(anonymous)	@	preact.module.js:1
b	@	preact.module.js:1
b	@	preact.module.js:1
_	@	preact.module.js:1
T	@	preact.module.js:1
(anonymous)	@	preact.module.js:1
b	@	preact.module.js:1
_	@	preact.module.js:1
j	@	preact.module.js:1
T	@	preact.module.js:1
(anonymous)	@	preact.module.js:1
b	@	preact.module.js:1
b	@	preact.module.js:1
_	@	preact.module.js:1
j	@	preact.module.js:1
T	@	preact.module.js:1
(anonymous)	@	preact.module.js:1
b	@	preact.module.js:1
b	@	preact.module.js:1
_	@	preact.module.js:1
T	@	preact.module.js:1
(anonymous)	@	preact.module.js:1
b	@	preact.module.js:1
b	@	preact.module.js:1
_	@	preact.module.js:1
j	@	preact.module.js:1
T	@	preact.module.js:1
(anonymous)	@	preact.module.js:1
b	@	preact.module.js:1
b	@	preact.module.js:1
_	@	preact.module.js:1
T	@	preact.module.js:1
(anonymous)	@	preact.module.js:1
b	@	preact.module.js:1
b	@	preact.module.js:1
_	@	preact.module.js:1
T	@	preact.module.js:1
E	@	preact.module.js:1
(anonymous)	@	app.ts:32
(anonymous)	@	app.ts:35
```

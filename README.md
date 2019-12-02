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

## Externals

```
(!) Unresolved dependencies
https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
preact (imported by src/components/app.ts)
htm/preact (imported by src/components/app.ts, src/components/header/index.ts, src/routes/home/index.ts)
preact-router (imported by src/components/app.ts)
preact-router/match (imported by src/components/header/index.ts)
(!) Missing global variable names
Use output.globals to specify browser global variable names corresponding to external modules
preact (guessing 'preact')
htm/preact (guessing 'preact$1')
preact-router (guessing 'preactRouter')
preact-router/match (guessing 'match')
created build/bundle-app.js in 290ms
```

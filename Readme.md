# Webpacker Angular CSP demo

A Rails app demonstrating how Angular violates the default (no `:unsafe_eval`)
`content_security_policy` and does *not* work in production when using the default configs generated
by webpacker for Angular (`rails webpacker:install:angular`).

(If I can get it working, I will update to show it *does* work...)

How to run:

1. Compile assets and start web server
  ```
  rm -rf public/packs
  RAILS_ENV=production rails assets:precompile
  RAILS_ENV=production r s
  ```
2. Go to http://localhost:3000/
3. Observe error in console:
  ```
  compiler.js:6156 Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self' https:".
  ```


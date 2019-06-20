# Webpacker Angular CSP demo

A Rails app demonstrating how to configure webpacker/webpack to use Ahead-Of-Time (AOT) compilation
(using [@ngtools/webpack](https://www.npmjs.com/package/@ngtools/webpack#usage) plugin) instead of
the default Just-In-Time (JIT) compiler that uses eval and therefore violates any Content Security
Policy that doesn't include `:unsafe_eval` as an allowed `script_src`.

How to prove that it's working:

1. Compile assets and start web server
  ```
  rm -rf public/packs
  RAILS_ENV=production rails assets:precompile
  RAILS_ENV=production r s
  ```
2. Go to http://localhost:3000/
3. Observe that page shows "Hello Angular" and there are no Content Security Policy warnings in console

You can also enable the `BundleAnalyzerPlugin()` in `config/webpack/environment.js` and observe that
that the Angular `Compiler` module is *not* included.

## Original problem

See https://github.com/rails/webpacker/issues/1737 for the problem this fixes.

See [`aot_broken_by_default`](https://github.com/TylerRick/webpacker_angular_csp/tree/aot_broken_by_default) branch for a demonstration of the problem.

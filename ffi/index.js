(() => {
  // output/FFI/foreign.js
  var rootDir = process.cwd();
  var Sorttable = import(`${rootDir}/src/Sorttable.js`);
  function makeSortable(table) {
    Sorttable.makeSortable(table);
  }

  // output/Undefined/foreign.js
  var undefined = undefined;

  // output/Main/index.js
  var main = /* @__PURE__ */ makeSortable(undefined);

  // <stdin>
  main();
})();

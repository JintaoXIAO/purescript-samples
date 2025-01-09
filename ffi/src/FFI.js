const rootDir = process.cwd();
const Sorttable = import(`${rootDir}/src/Sorttable.js`);

export function makeSortable(table) {
  Sorttable.makeSortable(table);
}



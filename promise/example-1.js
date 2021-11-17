/**
 * You need to install on terminal (node.js):
 * -----------------------------------------------------
 * $ npm install pdfkit-table
 * -----------------------------------------------------
 * Run this file:
 * -----------------------------------------------------
 * $ node index-example.js
 * -----------------------------------------------------
 * 
 */

const fs = require("fs");
// const PDFDocument = require("../index");
// const PDFDocument = require("./index-back-padding-version");
const PDFDocument = require("./pdfkit-table-promise");
const doc = new PDFDocument({
  margin: 30, 
});
 
// to save on server
doc.pipe(fs.createWriteStream("./example-1.pdf"));

// -----------------------------------------------------------------------------------------------------
// Simple Table with Array
// -----------------------------------------------------------------------------------------------------
const table = {
  headers: ["Country", "Conversion rate", "Trend"],
  datas: [
    ["Switzerland", "12%", "+1.12%"],
    ["France", "67%", "-0.98%"],
    ["England", "33%", "+4.44%"],
  ],
};
doc.table( table, { width: 300, }).then( () => {
  doc.end();
});
// A4 595.28 x 841.89 (portrait) (about width sizes)
 
 // if your run express.js server:
 // HTTP response only to show pdf
 // doc.pipe(res);
 
 // done
 

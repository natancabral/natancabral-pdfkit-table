/**
 * You need install on terminal (node.js):
 * npm install express cors natancabral-pdfkit-table
 */
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.listen(3030, function () {
  console.log("Hello Server: port 3030");
});

app.get("/", function (req, res) {

  const fs = require("fs");
  const PDFDocument = require("natancabral-pdfkit-table");
  const doc = new PDFDocument({
    margin: 30, 
  });

  // to save on server
  doc.pipe(fs.createWriteStream("./file-table.pdf"));

  // -----------------------------------------------------------------------------------------------------
  // Simple Table with Array
  // -----------------------------------------------------------------------------------------------------
  const tableArray = {
    headers: ["Country", "Conversion rate", "Trend"],
    rows: [
      ["Switzerland", "12%", "+1.12%"],
      ["France", "67%", "-0.98%"],
      ["England", "33%", "+4.44%"],
    ],
  };
  doc.moveDown().table( tableArray, { width: 300 }); // A4 595.28 x 841.89 (portrait) (about width sizes)

  // -----------------------------------------------------------------------------------------------------
  // Complex Table with Object
  // -----------------------------------------------------------------------------------------------------
  // A4 595.28 x 841.89 (portrait) (about width sizes)
  const table = {
    headers: [
      { label:"Name", property: 'name', width: 60, renderer: null },
      { label:"Description", property: 'description', width: 150, renderer: null }, 
      { label:"Price 1", property: 'price1', width: 100, renderer: null }, 
      { label:"Price 2", property: 'price2', width: 100, renderer: null }, 
      { label:"Price 3", property: 'price3', width: 100, renderer: null }, 
      { label:"Price 4", property: 'price4', width: 43, renderer: null },
    ],
    datas: [
      {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis ante in laoreet egestas. ', price1: '$1', price3: '$ 3', price2: '$2', price4: '$4',name: 'Name 1', },
      {name: 'bold:Name 2', description: 'bold:Lorem ipsum dolor.', price1: 'bold:$1', price3: '$3', price2: '$2', price4: '$4', options: { fontSize: 8, separation: true}},
      {name: 'Name 3', description: 'Lorem ipsum dolor.', price1: 'bold:$1', price4: '$4', price2: '$2', price3: {label:'PRICE $3', options: { fontSize: 12 }}, },
    ],
    rows: [
      [
        "Apple",
        "Nullam ut facilisis mi. Nunc dignissim ex ac vulputate facilisis.",
        "$ 105,99",
        "$ 105,99",
        "$ 105,99",
        "$ 105,99",
      ],
      [
        "Tire",
        "Donec ac tincidunt nisi, sit amet tincidunt mauris. Fusce venenatis tristique quam, nec rhoncus eros volutpat nec. Donec fringilla ut lorem vitae maximus. Morbi ex erat, luctus eu nulla sit amet, facilisis porttitor mi.",
        "$ 105,99",
        "$ 105,99",
        "$ 105,99",
        "$ 105,99",
      ],
    ],
  };

  doc.table(table, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
    prepareRow: (row, i) => doc.font("Helvetica").fontSize(8),
  });

  // show pdf
  doc.pipe(res); // HTTP response only to show
  doc.end();

});
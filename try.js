"use strict";
module.exports = function (req, res) {
  // const fs = require("fs");
  // const PDFDocument = require("pdfkit");
  const fs = require("fs");
  const PDFDocument = require("./pdfkit-tables.js");
  const doc = new PDFDocument({
    margin: 30, 
  });

  doc.pipe(fs.createWriteStream("./src/pdf/file-table.pdf"));

  // A4 595.28 x 841.89 (portrait)
  const table0 = {
    // headers: ["Word", "Comment", "Summary", "Summary", "Summary", "Summary"],
    options: {

    },
    // code base
    // https://www.andronio.me/2017/09/02/pdfkit-tables/
    // idea
    // https://github.com/foliojs/pdfkit/issues/29#issuecomment-56504943
    // influency
    // https://github.com/voilab/voilab-pdf-table
    headers: [
      { label:"Word 1", property: 'name', width:60, renderer: null }, 
      { label:"Word 2 jaisjdioa djasij a", property: 'description', width:150, renderer: null }, 
      { label:"Word 3", property: 'price1', width:100, renderer: null }, 
      { label:"Word 4", property: 'price2', width:100, renderer: null }, 
      { label:"Word 5", property: 'price3', width:100, renderer: null }, 
      { label:"Word 6", property: 'price4', width:43, renderer: null },
    ],
    datas: [
      {description: 'Desc 1iasj dioasjdjaisojdajdoi ajiodjai djaoijdoia dia idjaiosjdiajidoaj oijo dadjai diaidojaosi djaios dioa jsioj', price1: '1', price3: '3', price2: '2', price4: '4',name: 'Name 1', },
      {name: 'XName 1', description: 'bold:XDesc 1', price1: 'bold:X1', price3: 'X3', price2: 'X2', price4: 'X4', options: { fontSize: 8, separation: true}},
      {name: 'XName 1', description: 'XDesc 1', price1: 'bold:X1', price4: 'X4', price2: 'X2', price3: {label:'XXX adjfjsdfsaod jfoiasdjifjsdf iosadjfo ', options: { fontSize: 12 }}, },
    ],
    rows: [
      [
        "Apple",
        "Not th asda sdas dsd a dd sdaasd asd ahsuhduaisdi ahsiudhauis dhaishdiu ",
        "R$ 105,99",
        "R$ 105,99",
        "R$ 105,99",
        "R$ 105,99",
      ],
      [
        "Apple",
        "Not th asda sdas dsd a dd sdaasd asd ahsuhduaisdi ahsiudhauis dhaishdiu ",
        "R$ 105,99",
        "R$ 105,99",
        "R$ 105,99",
        "R$ 105,99",
      ],
      [
        "Tire",
        "Smells like funnySmells like funny Not th asda sdas dsd a dd sdaasd asd ahsuhduaisdi ahsiudhauis dhaishdiu  Not th asda sdas dsd a dd sdaasd asd ahsuhduaisdi ahsiudhauis dhaishdiu ",
        "R$ 105,99",
        "R$ 105,99",
        "R$ 105,99",
        "R$ 105,99",
      ],
      [
        "Apple",
        "Not th asda sdas dsd a dd sdaasd asd ahsuhduaisdi ahsiudhauis dhaishdiu ",
        "R$ 105,99",
        "R$ 105,99",
        "R$ 105,99",
        "R$ 105,99",
      ],
      [
        "Apple",
        "Not th asda sdas dsd a dd sdaasd asd ahsuhduaisdi ahsiudhauis dhaishdiu ",
        "R$ 105,99",
        "R$ 105,99",
        "R$ 105,99",
        "R$ 105,99",
      ],
      [
        "Tire",
        "Smells like funnySmells like funny Not th asda sdas dsd a dd sdaasd asd ahsuhduaisdi ahsiudhauis dhaishdiu  Not th asda sdas dsd a dd sdaasd asd ahsuhduaisdi ahsiudhauis dhaishdiu ",
        "R$ 105,99",
        "R$ 105,99",
        "R$ 105,99",
        "R$ 105,99",
      ],
    ],
  };

  doc.table(table0, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
    prepareRow: (row, i) => doc.font("Helvetica").fontSize(8),
  });

  doc.table(table0, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
    prepareRow: (row, i) => doc.font("Helvetica").fontSize(8),
  });

  const table1 = {
    headers: ["Country", "Conversion rate", "Trend"],
    // headers2: [
    //   {label:"Word1x",width:100}, 
    //   {label:"Word2x",width:100}, 
    //   {label:"Word3x",width:100}, 
    // ],
    rows: [
      ["Switzerland as dasd asdiuiafhas udfhoasd fsahufshafsd hfs hufs hfsh fs hfdash fasduh dfsui fhsoadfhusdhfushi", "12%", "+1.12%"],
      ["France", "67%", "-0.98%"],
      ["England", "33%", "+4.44%"],
    ],
  };

  doc.moveDown().table(table1, doc.x, null, 
    // { width: 300 }
  );

  // show pdf
  doc.pipe(res); // HTTP response only to show

  doc.end();
};

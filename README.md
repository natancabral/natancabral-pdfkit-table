# natancabral-pdfkit-table


### Example 1 - Simple Array Table
```js
  // requires 
  const tableArray = {
    headers: ["Country", "Conversion rate", "Trend"],
    rows: [
      ["Switzerland", "12%", "+1.12%"],
      ["France", "67%", "-0.98%"],
      ["England", "33%", "+4.44%"],
    ],
  };
  doc.moveDown().table( tableArray, { width: 300 }); // A4 595.28 x 841.89 (portrait) (about width sizes)
  // end code
```


### Example 2 - Table
```js
  // require
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
```


### Example 3 - Full Code
```js
  // require
  const fs = require("fs");
  const PDFDocument = require("natancabral-pdfkit-table");
  const doc = new PDFDocument({
    margin: 30, 
  });

  doc.pipe(fs.createWriteStream("./file-table.pdf"));

  // table code

  doc.pipe(res); // HTTP response only to show pdf
  doc.end();
```

view pdf example | clone a full code example

### Options

| options |
---------------------|-------------|
| *Properties* | description |
---------------------|-------------|
| *width*      | width of table    |
| *x*          | position x (left) |
| *y*          | position y (top)  |
| *columnSpacing* |   |
| *rowSpacing*    |   |
---------------------|-------------|
| *Functions* | description |
---------------------|-------------|
| prepareHeader | prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8)  |
| prepareRow    | prepareRow: (row, i) => doc.font("Helvetica").fontSize(8)  |


```js
const options = {
  // properties
  width: 500, // {Number} default: undefined // A4 595.28 x 841.89 (portrait) (about width sizes)
  x: 500, // {Number} default: undefined
  y: 500, // {Number} default: undefined
  columnSpacing: 5, // {Number} default: 5
  rowSpacing: 3, // {Number} default: 3
  width: 500, // default: undefined
  // functions
  prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
  prepareRow: (row, i) => doc.font("Helvetica").fontSize(8),
}
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/natancabral.png?s=100" width="100"/>
    </td>
    <td>
      Natan Cabral<br />
      <a href="mailto:natancabral@hotmail.com">natancabral@hotmail.com</a><br />
      <a href="https://github.com/natancabral/">https://github.com/natancabral/</a>
    </td>
  </tr>
</table>

## Thank you

- pdfkit - [pdfkit](https://www.npmjs.com/package/pdfkit)
- code base - [andronio](https://www.andronio.me/2017/09/02/pdfkit-tables/)
- ideas - [giuseppe-santoro](https://github.com/foliojs/pdfkit/issues/29#issuecomment-56504943)
- influency [voilab](https://github.com/voilab/voilab-pdf-table)

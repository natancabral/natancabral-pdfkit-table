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
  doc.moveDown().table( tableArray, { width: 300 });
  // end code
```


### Example 2 - Table
```js
  // require
  // A4 595.28 x 841.89 (portrait) (about width sizes)
  const table = {
    headers: [
      { label:"Header 1", property: 'name', width: 60, renderer: null },
      { label:"Header 2", property: 'description', width: 150, renderer: null }, 
      { label:"Header 3", property: 'price1', width: 100, renderer: null }, 
      { label:"Header 4", property: 'price2', width: 100, renderer: null }, 
      { label:"Header 5", property: 'price3', width: 100, renderer: null }, 
      { label:"Header 6", property: 'price4', width: 43, renderer: null },
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

| options properties | description |
---------------------|-------------|
| *width* | sdasdasd |
| *x* | sdasdasd |
| *y* | sdasdasd |

*width* 

*x*

*y*

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

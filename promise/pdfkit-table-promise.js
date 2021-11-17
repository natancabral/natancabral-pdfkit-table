// comming son. 
// version v0.2.0

const PDFDocument = require("pdfkit");
class PDFDocumentWithTables extends PDFDocument {

  memory = {
    header: {
      columns: [],
    },
    data: {},
    rowFill:{},
  };

  constructor(option) {
    super(option);
  }

  logg(...args) {
    console.log(args);
  }

  createRowFill(data) {
    this.logg('createRowFill');
    return new Promise((resolve, reject) => {
      try {
        // this.text('createRowFill', this.x, this.y);
        resolve(this);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  createHeader(data) {
    this.logg('createHeader');
    return new Promise((resolve, reject) => {
      try {
        // this.text('createHeader', this.x, this.y);
        resolve(this);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  createRowArray(data) {
    this.logg('createRowArray');
    return new Promise((resolve, reject) => {

      // this.text('createRowArray', this.x, this.y);
      const { datas } = data;
      let text;

      datas.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
          this.logg(col, colIndex);
          text = col;
          this.text(text, this.x, this.y + 5 * colIndex );
        });
      });

      resolve(this);
    });
  }

  createRowObject(data) {
    this.logg('createRowObject');
    return new Promise((resolve, reject) => {

      // this.text('createRowObject', this.x, this.y);
      const { datas, headers } = data;
      
      datas.forEach((row, elIndex) => {
        this.logg(row);
        headers.forEach((col, heIndex) => {
          this.logg(col);
        });
      });

      resolve();
    });
  }

  async createTable(data) {
    this.logg('createTable');
    return new Promise(async (resolve, reject) => {

      // collections
      const { table, options } = data;
        let { headers, datas } = table;
        let { x, width, headerPreparer, rowPreparer } = options;

      // primary // validate
      datas || (datas = []);
      headers || (headers = []);

      // secondary
      const isDataArray = datas.length && Array.isArray(datas[0]);

      // loop
      if(isDataArray){
        await this.createRowArray({headers, datas, options});
      } else {
        await this.createRowObject({headers, datas, options});
      }

      datas.forEach((el, index) => {
        
      });

      resolve(this);
    });
  }

  async table(table, options, callback) {

    this.logg('table');

    try {
      await this.createRowFill({table, options});
      await this.createHeader({table, options});
      await this.createTable({table, options});
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }

    typeof callback === 'function' && callback();

    return this;
  }

}

module.exports = PDFDocumentWithTables;
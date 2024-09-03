function factory(library, orders) {
    // library - an associative array (object)
    // oders - array of objects
    // object(order)
    // {
    //     template: [Object],      Object -> product (product name)
    //     parts: string[]
    //   }
    let products = [];

    for (const order of orders) {
        let product = Object.assign({}, order.template); // { name: 'ACME Printer' }        
        for (const part of order.parts) {
            //product[part] = library[part];
            product[part] = library[part].bind(product);
        }        
        
        products.push(product);
    }

    return products;
    //return [order1, oder2,...];
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
const products = factory(library, orders);
console.log(products);

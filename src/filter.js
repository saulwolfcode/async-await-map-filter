function examplesFilter() {
    let listProduct = [{
            id: 1,
            name: "Cebolla",
            priceOrigin: 10,
            type: "kg",
            provaider: "Hnos.Casa",
            off: "5",
            priceList: 60,
            priceSelling: 30,
        },
        {
            id: 2,
            name: "Atun",
            priceOrigin: 20,
            type: "kg",
            provaider: "Chacra",
            off: "40",
            priceList: 70,
            priceSelling: 40,
        },
        {
            id: 3,
            name: "Tomate",
            priceOrigin: 5,
            type: "kg",
            provaider: "Anden",
            off: "20",
            priceList: 10,
            priceSelling: 40,
        },
        {
            id: 4,
            name: "Papa",
            priceOrigin: 15,
            type: "kg",
            provaider: "Hnos.Casa",
            off: "10",
            priceList: 80,
            priceSelling: 50,
        }
    ]
   
    
    let newListsProducts=listProduct.filter(product=>{
        return product.priceList>10&&product.provaider.includes("Hnos.Casa")
    })
    console.log("ListProducts=>",listProduct)
    console.log("newListProducts=>",newListsProducts)
    
    let newListsProductsValue=listProduct.filter((product,index,array)=>{
        console.log("products equivals=>",product.name,index)
        //comprobacion si array contiene todo el arreglo de product
        console.log("comprobacion array==product",array[index]==product)
        console.log("comprobacion array",array)
    })

}
examplesFilter()
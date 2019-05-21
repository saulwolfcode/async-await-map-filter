function examplesMap() {
    let orders = [{
            orderNumber: 1,
            total: 100,
            customer: {
                name: "Saul Alejos",
                age: 34,
                plan: "basic",
                frecuently: "ramdom",
                start: {
                    init: 2019,
                    end: 2020,
                    register: {
                        ageNew: 2006
                    }
                }
            }
        }, {
            orderNumber: 2,
            total: 100,
            customer: {
                name: "Salim Hasan",
                age: 34,
                plan: "medium",
                frecuently: "medium"
            }
        },
        {
            orderNumber: 3,
            total: 100,
            customer: {
                name: "Hasen Sharan",
                age: 34,
                plan: "full",
                frecuently: "full"
            }
        },
        {
            orderNumber: 4,
            total: 100,
            customer: {
                name: "Samir Hasan",
                age: 34,
                plan: "medium",
                frecuently: "full"
            }
        }
    ]
    let newOrders = orders.map(order => {
        return {
            orderNumber: order.orderNumber,
            total: order.total,
            customerName: order.customer.name,
            customerAge: order.customer.age,
            customerPlan: order.customer.plan,
            customerFrecuently: order.customer.frecuently
        }
    })
    console.log("orders =>", orders)
    console.log("newOrders=>", newOrders)

    orders.map((order, index, array) => {
        console.log("orders index", array[index] == order)
    })
    orders.map((order) => {
        console.log("orders is equias a=> this", this)
    })
}
examplesMap()




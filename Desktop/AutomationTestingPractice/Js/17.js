function orderPizza() {
    return new Promise((resolve, reject) => {

        console.log("Ordering pizza...");

        setTimeout(() => {
            resolve("Pizza is ready 🍕");
        }, 2000);

    });
}

orderPizza().then((message) => {
    console.log(message);
    console.log("Eating pizza");
});
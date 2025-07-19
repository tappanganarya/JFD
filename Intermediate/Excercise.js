class Cookie {
    constructor(id, name, price, ingredients, type) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.ingredients = ingredients || [];
        this.type = type
    }
}

class Chocolate extends Cookie {
    constructor(id, name, price, ingredients, type, isSweet) {
        super(id, name, price, ingredients, type);
        this.isSweet = isSweet;
    }
}

class Sweet extends Cookie {
    constructor(id, name, price, ingredients, type, isSweet) {
        super(id, name, price, ingredients, type);
        this.isSweet = isSweet;
    }
}

class Strawberry extends Cookie {
    constructor(id, name, price, ingredients, type, isSweet) {
        super(id, name, price, ingredients, type);
        this.isSweet = isSweet;
    }
}

class Kitchen {
    constructor(container) {
        this.container = container || [];
    }

    showCookies() {
        if (this.container.length > 0) {
            this.container.forEach(cookies => {
                const { id, name, price, ingredients, type, isSweet } = cookies;
                if (isSweet === true) {
                    console.log(`[V] ${id}. ${name} Rp. ${price} ${type}`)
                    console.log(`Ingredients : ${ingredients}`)
                } else {
                    console.log(`[ ] ${id}. ${name} Rp. ${price} ${type}`)
                    console.log(`Ingredients : ${ingredients}`)
                }
            });
        } else {
            console.log("There is no cookies");

        }
    }

    addCokkie(name, price, ingredients, type, isSweet = false) {
        let id;

        if (this.container.length === 0) {
            id = 1;
        } else {
            let lastIndex = this.container.length - 1
            id = this.container[lastIndex].id + 1
        }

        switch (type) {
            case "Chocolate":
                this.container.push(new Chocolate(id, name, price, ingredients, type, isSweet))
                break;
            case "Sweet":
                this.container.push(new Sweet(id, name, price, ingredients, type, isSweet));
                break;
            case "Strawberry":
                this.container.push(new Strawberry(id, name, price, ingredients, type, isSweet));

        }

    }

    delCokkie(id) {
        this.container = this.container.filter(cookies => cookies.id !== id);
    }

    addSuggar(id, isSweet) {
        this.container = this.container.map((cookies) => {
            if (cookies.id === id) {
                cookies.isSweet = isSweet;
            }
            return cookies;
        })
    }

    showIngredients(id) {
        this.container.forEach((cookies) => {
            if (cookies.id === id) {

                const { name, ingredients } = cookies;
                console.log(`Ingredients ${name} adalah : `)

                cookies.ingredients.forEach((ingredients, index) => {
                    console.log(`${index + 1}. ${ingredients}`)
                })
            }
        })

    }

    addIngredient(id, ingredient) {
        this.container = this.container.map((cookies) => {
            if (cookies.id === id) {
                cookies.ingredients.push(ingredient)
            }
            return cookies;
        })
    }

    categoriesCookiesByIngredient(ingredientName) {
        let sameIngrediets = [];

        this.container.forEach(cookies => {
            if (cookies.ingredients.includes(ingredientName)) {
                sameIngrediets.push(cookies.name);

            }
        });
        console.log(`Cookies with ${ingredientName} Ingredients:`);

        if (sameIngrediets.length > 0) {
            sameIngrediets.forEach((name, index) => {
                console.log(`${index + 1}. ${name}`);
            })
        } else {
            console.log("There's no cookie");

        }

    }

    sortCookies(type) {
        if (this.container.length === 0) {
            console.log("There's no cookies");
        }

        if (type === 'asc') {
            this.container.sort((a, b) => a.price - b.price);
        } else if (type === 'desc') {
            this.container.sort((a, b) => b.price - a.price);
        } else {
            console.log("Should be asc or desc");
            return;
        }

        this.container.forEach((cookies, index) => {
            console.log(`${index + 1}. ${cookies.name} - ${cookies.price}`);
        })

    }

    categoriesCookies() {

        const categories = {};

        this.container.forEach((cookies) => {

            if (!categories[cookies.type]) {
                categories[cookies.type] = []
            }
            categories[cookies.type].push(cookies.name);
        });

        for (const type in categories) {
            console.log(`${type}: `);
            categories[type].forEach((name, index) => {
                console.log(`${index + 1}. ${name}`);
            });
            console.log();
        }



    }

}

let cookies = new Kitchen;

cookies.addCokkie("Coklat Ayah", 1000, ["Tepung", "Masako", "Bawang"], "Chocolate");
cookies.addCokkie("Coklat Ibu", 2000, ["Sayur", "Telur", "Sosis"], "Chocolate");
cookies.addCokkie("Coklat Nenek", 2000, ["Sayur", "Telur", "Sosis"], "Strawberry");
cookies.addCokkie("Coklat Adek", 500, ["Tepung", "Bakwan", "Micin"], "Sweet");
cookies.addCokkie("Coklat Kakak", 500, ["Tepung", "Bakwan", "Micin"], "Sweet");





// cookies.showCookies();

// cookies.delCokkie(1);

// cookies.addSuggar(1, true);

// cookies.addIngredient(1, "Jahe")

// cookies.categoriesCookiesByIngredient("Tepung");

// cookies.sortCookies("desc");




// cookies.showIngredients(1)


// cookies.showCookies();

cookies.categoriesCookies();



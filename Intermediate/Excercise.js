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
                console.log(`${id}. ${name} Rp. ${price} ${type} ${isSweet}`)
                console.log(`Ingredients : ${ingredients}`)
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

}

let cookies = new Kitchen;

cookies.addCokkie("manis", 345, ["tepung", "masako", "bawang"], "Chocolate");


// cookies.showCookies();

// cookies.delCokkie(1);

cookies.addSuggar(1, true);


cookies.showCookies();


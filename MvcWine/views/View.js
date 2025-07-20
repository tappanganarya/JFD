class View {

    static wine(wines) {
        console.log("Welcome to Wine Management!");
        wines.forEach((wine, index) => {
            console.log(`${index + 1}. ${wine.name} ${wine.year}`);
        })
    }

}

module.exports = View;
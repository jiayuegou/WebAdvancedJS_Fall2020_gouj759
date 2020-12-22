$(() => {
    loadData();
    console.log("JS Connected")
});


function loadData() {
    $.getJSON("../data.json", (data) => {


        for (let i in data) {
            console.log(data[i]);
        }

        generateWebsites(data);

    });

}


generateWebsites = (temporary) => {

    let source = $("#websites-template").html();
    let template = Handlebars.compile(source);
    let result = template(temporary);
    let list = $('.websites-list');
    list.append(result);

}
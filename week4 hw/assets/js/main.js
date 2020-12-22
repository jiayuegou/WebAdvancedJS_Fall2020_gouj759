$(() => {

    attachEvent();

});

attachEvent = () => {

    $("#search-button").click(() => {
        loadData($("#breed").val());


        $("#breed").val([]);

    });
    $("#breed").keypress((e) => {
        if (e.keyCode == 13) {
            loadData($("#breed").val());

            $("#breed").val([]);

        }

    });

}


loadData = () => {

    let breed = $("#breed").val();


    if (breed != '') {

        $.ajax({

            url: "https://dog.ceo/api/breed/" + breed + "/images/random",
            type: "GET",
            dataType: "json",
            success: function(data) {

                console.log(data);
                console.log(data.message);

                $("#error").empty();
                $("#breed").empty();

                let message = data.message;

                $(".message").attr("src", message);

            },
            error: function() {
                $("#error").html("Pictures not found by that name!");
                $(".message").attr("src", "");
            }

        });

    } else {
        $(".message").attr("src", "");
        $("#error").html("Breed can't be empty");

    }
}

// https://dog.ceo/dog-api/
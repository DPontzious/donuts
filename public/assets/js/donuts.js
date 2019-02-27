$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");
        // THIS NEEDS TO HAVE A VALUE

        var newEatenState = {
            devoured: newEaten
        };
        $.ajax("/api/donuts/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("changed devoured to", newEaten);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newDonut = {
            name: $("#dnut").val().trim(),
            // devoured: false,
        };

        // Send the POST request.
        $.ajax("/api/donuts", {
            type: "POST",
            data: newDonut
        }).then(
            function () {
                console.log("created new donut");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
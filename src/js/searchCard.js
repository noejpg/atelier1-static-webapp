$(document).ready(function() {
    $('#search').keypress(function(event) {
        if (event.which === 13) {
            event.preventDefault();
            searchCard();
        }
    });

    $('#search_submit').on('click',function(event) {
            event.preventDefault();
            searchCard();
    });

    function searchCard() {
        let id = $("#search").val();
        const GET_CARD = "http://tp.cpe.fr:8083/card/" + id;

        $.ajax({
            url: GET_CARD,
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                callback(response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                err_callback(errorThrown);
            }
        });
    }

    function callback(response) {
        let card = response;
        console.log(card);
        let template = $("#selectedCard").html();

        let newContent = template
            .replace(/{{family_src}}/g, card.smallImgUrl)
            .replace(/{{family_name}}/g, card.family)
            .replace(/{{img_src}}/g, card.imgUrl)
            .replace(/{{name}}/g, card.name)
            .replace(/{{description}}/g, card.description)
            .replace(/{{hp}}/g, card.hp)
            .replace(/{{energy}}/g, card.energy)
            .replace(/{{attack}}/g, card.attack)
            .replace(/{{defense}}/g, card.defence);

        let $clone = $(newContent);
        $("#cardContainer").append($clone);
    }

    function err_callback(error) {
        console.error("Error:", error);
    }
});

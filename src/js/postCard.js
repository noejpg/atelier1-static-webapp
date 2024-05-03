$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        submitCard();
    });

    function submitCard() {
        const postData = {
            name: $('#name').val(),
            description: $('#description').val(),
            imgUrl: $('#image-url').val(),
            smallImgUrl: $('#small-image-url').val(),
            family: $('#family').val(),
            affinity: $('#affinity').val(),
            hp: $('#hp').val(),
            energy: $('#energy').val(),
            attack: $('#attack').val(),
            defence: $('#defence').val()
        };
    
        $.ajax({
            url: 'http://tp.cpe.fr:8083/card',  // Remplacez ceci par l'URL de votre API
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(postData),
            success: function(response) {
                console.log('Card submitted successfully', response);
                alert('Vous avez bien enregistré la carte avec un id ' + response.id);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error submitting card:', errorThrown);
                alert('Error submitting card. Please try again.');
            }
        });
    }
    

    function callback(response) {
        // Code pour gérer la réponse de la recherche de carte
    }

    function err_callback(error) {
        console.error("Error:", error);
    }
});

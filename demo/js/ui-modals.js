swell.require(['jquery-ui','layout'],function () {

    var handleModals = function () {
        $("#draggable").draggable({
            handle: ".modal-header"
        });
    };


    handleModals();

});

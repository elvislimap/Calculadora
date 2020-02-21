$(document).ready(function () {
    var agregado = 0;

    $(".btn-numero").click(function () {
        let valorVisor = $("#visorCalculadora").val();
        valorVisor += $(this).html();

        $("#visorCalculadora").val(valorVisor);
    });

    $(".btn-operacao").click(function () {
        let operacao = $(this).html();
        let valorVisor = parseInt($("#visorCalculadora").val());

        switch (operacao) {
            case "+":
                agregado = agregado == 0 ? valorVisor : agregado + valorVisor;
                $("#visorCalculadora").val("");
                break;
            case "-":
                break;
            case "x":
                break;
            case "/":
                break;

            default:
                $("#visorCalculadora").val(agregado);
                agregado = 0;
                break;
        }
    });
});
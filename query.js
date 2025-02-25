$(window).ready(main)

function main()
{
    emailjs.init({
        publicKey: "BSzx6h5Kthova6acg",
    });
    $('#name').attr('placeholder','your name')
    $('#email').attr('placeholder','example@example.com')
    $('input[type=text]').css('width','30%')
    $('#message').css('width','40%')
    $('#send').click(sendButtonClick)
    $('#send').css('width','30%')
}

function sendButtonClick()
{
    if($('#name').val() != "" && $('#email').val() != "")
    {
        let parms = {
            from_name:  $('#name').val(),
            message:$('#message').val(),
            reply_to: $('#email').val(),
            }
        emailjs.send("service_dwc336a","template_gwvheyk",parms).then((response) => {
                $('#name').val("")
                    $('#message').val("")
                    $('#email').val("")
                    alert("Email sent")
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );    
    }
    else alert("there is some information is missing")
}
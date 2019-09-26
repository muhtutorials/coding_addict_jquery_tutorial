const message = $('.message');
const text = $('#text');
const send = $('#send');
const clear = $('#clear');


send.click(deliverMessage);
function deliverMessage () {
  let texValue = text.val();
  message.html(texValue);
}

clear.click(clearField);
function clearField() {
  message.html('');
  text.val('');
}
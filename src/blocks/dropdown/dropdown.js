import './_type/dropdown_type_guests';

$.fn.dropdown = function(options) {
  const $dropdown = this;
  const input = $dropdown.find('.field');
  let total = 0;
  let values = [];
  const items = $dropdown.find('.dropdown__item');
  items.each(function(index, element) {
    const valueField = $( element ).find('.dropdown__item-value');
    values.push(parseInt(valueField.text()));
  });

  input.val(options.wording(0));

  $dropdown.find('.dropdown__total').on('click', function(event) {
    $dropdown.find('.dropdown__list').toggleClass('dropdown__list_hidden');
  });

  items.on('click', '.button', function(event) {
    const button = $( this );
    const item = $( event.delegateTarget );
    const index = item.index();
    const valueField = item.find('.dropdown__item-value');
    if (button.hasClass('dropdown__button_type_decrement')) {
      values[index] -= 1;
      total -= 1;
      if (values[index] < 1) {
        button.prop('disabled', true);
      }
    }
    else {
      values[index] += 1;
      const decrButton = item.find('.dropdown__button_type_decrement');
      if (decrButton.prop('disabled')) {
        decrButton.prop('disabled', false);
      };
      total += 1;
    }
    valueField.text(values[index]);

    input.val(options.wording(total));
  });
};
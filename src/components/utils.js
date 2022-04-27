export const cleaneInputs = function (inputs) {
  inputs.forEach(item => {
    item.value = '';
  });
}
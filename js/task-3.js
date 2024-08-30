// function getElementWidth(content, padding, border) {
//     const floatContent = parseFloat(content);
//     const floatPadding = parseFloat(padding);
//     const floatBorder = parseFloat(border);

//   return floatContent + floatPadding *2 + floatBorder * 2
// }

function getElementWidth(content, padding, border) {
  content = parseFloat(content);
  padding = parseFloat(padding);
  border = parseFloat(border);

  return content + padding * 2 + border * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

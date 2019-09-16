for (let li of tree.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling); // move the text node into span
}

tree.onclick = (event) => {
  if (event.target.tagName === 'SPAN') {
    let child = event.target.parentNode.querySelector('ul');
    if (child) {
      child.hidden = !child.hidden;
    }
  }
  return; // no children
}
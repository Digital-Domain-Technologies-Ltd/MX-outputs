// mx-dom.js - the shared DOM helper for the provenance UI modules.
//
// One Source: el() lives here once. mx-prov-chain.js (the popper) and
// mx-json-tree.js (the JSON tree) both import it, so neither duplicates the
// builder, and the tree module does not have to import back from the component
// that uses it. Every value is written with textContent, never innerHTML.
//
// @mx:contentType script
// @mx:status active
// @mx:partOf mx-os

export function el(tag, attrs = {}, ...kids) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null) continue;
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else node.setAttribute(k, v);
  }
  for (const kid of kids) {
    if (kid == null) continue;
    node.appendChild(typeof kid === 'string' ? document.createTextNode(kid) : kid);
  }
  return node;
}

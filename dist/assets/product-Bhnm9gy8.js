import { g as n, s } from "./utils-AHP4EVYu.js";
function c(a) {
  if (a.ok) return a.json();
  throw new Error("Bad Response");
}
class e {
  constructor(t) {
    (this.category = t), (this.path = `../json/${this.category}.json`);
  }
  getData() {
    return fetch(this.path)
      .then(c)
      .then((t) => t);
  }
  async findProductById(t) {
    return (await this.getData()).find((r) => r.Id === t);
  }
}
const d = new e("tents");
function i(a) {
  const t = n("so-cart"),
    o = Array.isArray(t) ? t : t ? [t] : [];
  o.push(a), s("so-cart", o);
}
async function u(a) {
  const t = await d.findProductById(a.target.dataset.id);
  i(t);
}
document.getElementById("addToCart").addEventListener("click", u);

(() => {
  "use strict";

  const STORAGE_KEY = "duel-market-cart";

  function getItems() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const items = JSON.parse(stored);
    if (!Array.isArray(items)) {
      throw new TypeError("El contenido guardado del carrito no tiene un formato válido.");
    }
    return items;
  }

  function save(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent("cartchange", { detail: { items } }));
  }

  window.CartDB = Object.freeze({
    getItems,
    add(item) {
      if (!item || !Number.isFinite(Number(item.id)) || !item.name ||
          !Number.isFinite(Number(item.price)) || Number(item.price) < 0) {
        throw new TypeError("No se puede agregar un artículo de carrito inválido.");
      }
      const items = getItems();
      items.push({
        id: Number(item.id),
        name: String(item.name),
        price: Number(item.price),
        seller: String(item.seller || "DuelistShop EC")
      });
      save(items);
      return items;
    },
    remove(index) {
      const items = getItems();
      if (!Number.isInteger(index) || index < 0 || index >= items.length) {
        throw new RangeError("El artículo que se intenta quitar no existe.");
      }
      items.splice(index, 1);
      save(items);
      return items;
    },
    clear() {
      save([]);
    },
    count() {
      return getItems().length;
    },
    total() {
      return getItems().reduce((sum, item) => sum + Number(item.price), 0);
    }
  });
})();

(() => {
  "use strict";

  const products = [
    { id: 1, name: "Dark Magician", code: "LOB-005", price: 24.50, level: "7 ★", type: "Monstruo", subtype: "Spellcaster / Normal", stats: "2500 / 2100", attribute: "OSCURIDAD", description: "El mago definitivo en términos de ataque y defensa.", image: "https://images.ygoprodeck.com/images/cards/46986414.jpg" },
    { id: 2, name: "Blue-Eyes White Dragon", code: "LOB-001", price: 18.00, level: "8 ★", type: "Monstruo", subtype: "Dragon / Normal", stats: "3000 / 2500", attribute: "LUZ", description: "Este legendario dragón es un poderoso motor de destrucción.", image: "https://images.ygoprodeck.com/images/cards/89631139.jpg" },
    { id: 3, name: "Red-Eyes B. Dragon", code: "LOB-070", price: 14.75, level: "7 ★", type: "Monstruo", subtype: "Dragon / Normal", stats: "2400 / 2000", attribute: "OSCURIDAD", description: "Un dragón feroz con un ataque letal.", image: "https://images.ygoprodeck.com/images/cards/74677422.jpg" },
    { id: 4, name: "Ash Blossom & Joyous Spring", code: "MACR-036", price: 8.50, level: "3 ★", type: "Monstruo", subtype: "Zombie / Tuner / Effect", stats: "0 / 1800", attribute: "FUEGO", description: "Descarta esta carta para negar la adición de cartas del Deck a la mano.", image: "https://images.ygoprodeck.com/images/cards/14558127.jpg" },
    { id: 5, name: "Pot of Greed", code: "LOB-119", price: 6.25, level: "Mágica", type: "Mágica", subtype: "Mágica Normal", stats: "N/A", attribute: "MÁGICA", description: "Roba 2 cartas de tu Deck.", image: "https://images.ygoprodeck.com/images/cards/55144522.jpg" },
    { id: 6, name: "Monster Reborn", code: "LOB-118", price: 5.40, level: "Mágica", type: "Mágica", subtype: "Mágica Normal", stats: "N/A", attribute: "MÁGICA", description: "Invoca de Modo Especial un monstruo desde cualquier Cementerio a tu campo.", image: "https://images.ygoprodeck.com/images/cards/83764718.jpg" },
    { id: 7, name: "Mirror Force", code: "MRD-138", price: 7.80, level: "Trampa", type: "Trampa", subtype: "Trampa Normal", stats: "N/A", attribute: "TRAMPA", description: "Cuando un monstruo adversario ataca: destruye todos sus monstruos en Posición de Ataque.", image: "https://images.ygoprodeck.com/images/cards/44095762.jpg" },
    { id: 8, name: "Exodia the Forbidden One", code: "LOB-124", price: 32.00, level: "3 ★", type: "Monstruo", subtype: "Spellcaster / Effect", stats: "1000 / 1000", attribute: "OSCURIDAD", description: "Reúne las 5 partes en mano para declarar victoria instantánea.", image: "https://images.ygoprodeck.com/images/cards/33396948.jpg" },
    { id: 9, name: "Cyber Dragon", code: "CRV-EN015", price: 4.80, level: "5 ★", type: "Monstruo", subtype: "Machine / Effect", stats: "2100 / 1600", attribute: "LUZ", description: "Si tu adversario controla un monstruo y tú no, puedes invocar esta carta de modo especial.", image: "https://images.ygoprodeck.com/images/cards/70095154.jpg" },
    { id: 10, name: "Stardust Dragon", code: "TDGS-EN040", price: 12.25, level: "8 ★", type: "Monstruo", subtype: "Dragon / Synchro / Effect", stats: "2500 / 2000", attribute: "LUZ", description: "Niega efectos que destruyan cartas y puede volver desde el Cementerio.", image: "https://images.ygoprodeck.com/images/cards/44508094.jpg" },
    { id: 11, name: "Kuriboh", code: "LOB-009", price: 2.10, level: "1 ★", type: "Monstruo", subtype: "Fiend / Effect", stats: "300 / 200", attribute: "OSCURIDAD", description: "Descártala durante el turno del adversario para reducir a cero el daño de batalla.", image: "https://images.ygoprodeck.com/images/cards/40640057.jpg" },
    { id: 12, name: "Jinzo", code: "PSV-000", price: 9.60, level: "6 ★", type: "Monstruo", subtype: "Machine / Effect", stats: "2400 / 1500", attribute: "OSCURIDAD", description: "Mientras esté boca arriba, niega los efectos de Trampa en el campo.", image: "https://images.ygoprodeck.com/images/cards/77585513.jpg" },
    { id: 13, name: "Dark Hole", code: "LOB-052", price: 1.75, level: "Mágica", type: "Mágica", subtype: "Mágica Normal", stats: "N/A", attribute: "MÁGICA", description: "Destruye todos los monstruos en el Campo.", image: "https://images.ygoprodeck.com/images/cards/53129443.jpg" },
    { id: 14, name: "Raigeki", code: "LOB-052-R", price: 7.50, level: "Mágica", type: "Mágica", subtype: "Mágica Normal", stats: "N/A", attribute: "MÁGICA", description: "Destruye todos los monstruos que controle tu adversario.", image: "https://images.ygoprodeck.com/images/cards/12580477.jpg" },
    { id: 15, name: "Polymerization", code: "LOB-059", price: 1.20, level: "Mágica", type: "Mágica", subtype: "Mágica Normal", stats: "N/A", attribute: "MÁGICA", description: "Fusiona monstruos de tu mano o Campo para Invocar un Monstruo de Fusión.", image: "https://images.ygoprodeck.com/images/cards/24094653.jpg" },
    { id: 16, name: "Swords of Revealing Light", code: "LOB-101", price: 2.35, level: "Mágica", type: "Mágica", subtype: "Mágica Normal", stats: "N/A", attribute: "MÁGICA", description: "Revela los monstruos boca abajo del adversario y evita sus ataques durante tres turnos.", image: "https://images.ygoprodeck.com/images/cards/72302403.jpg" },
    { id: 17, name: "Torrential Tribute", code: "LON-025", price: 5.70, level: "Trampa", type: "Trampa", subtype: "Trampa Normal", stats: "N/A", attribute: "TRAMPA", description: "Cuando se Invoca un monstruo: destruye todos los monstruos en el Campo.", image: "https://images.ygoprodeck.com/images/cards/53582587.jpg" },
    { id: 18, name: "Call of the Haunted", code: "PSV-012", price: 1.85, level: "Trampa", type: "Trampa", subtype: "Trampa Continua", stats: "N/A", attribute: "TRAMPA", description: "Invoca de modo especial un monstruo de tu Cementerio en Posición de Ataque.", image: "https://images.ygoprodeck.com/images/cards/97077563.jpg" },
    { id: 19, name: "Harpie's Feather Duster", code: "MRL-EN047", price: 11.00, level: "Mágica", type: "Mágica", subtype: "Mágica Normal", stats: "N/A", attribute: "MÁGICA", description: "Destruye todas las cartas Mágicas y de Trampa que controle tu adversario.", image: "https://images.ygoprodeck.com/images/cards/18144506.jpg" },
    { id: 20, name: "Summoned Skull", code: "MRD-003", price: 3.45, level: "6 ★", type: "Monstruo", subtype: "Fiend / Normal", stats: "2500 / 1200", attribute: "OSCURIDAD", description: "Un demonio cuya fuerza supera a la de otros monstruos de nivel similar.", image: "https://images.ygoprodeck.com/images/cards/70781052.jpg" }
  ];
  const favoritesKey = "duel-market-favorites";
  const productsPerPage = 8;
  let catalogPage = 1;
  let voiceEnabled = false;
  const money = value => `$${Number(value).toFixed(2)}`;
  const getFavorites = () => JSON.parse(localStorage.getItem(favoritesKey) || "[]");
  const saveFavorites = ids => localStorage.setItem(favoritesKey, JSON.stringify(ids));
  const byId = id => products.find(product => product.id === Number(id));

  function updateHeader() {
    const count = document.getElementById("cart-count");
    const favoriteCount = document.getElementById("favorite-count");
    if (count) count.textContent = String(CartDB.count());
    if (favoriteCount) favoriteCount.textContent = String(getFavorites().length);
    const themeButton = document.getElementById("theme-btn");
    if (themeButton) {
      const dark = localStorage.getItem("duel-market-theme") === "dark";
      document.documentElement.dataset.theme = dark ? "dark" : "light";
      themeButton.textContent = dark ? "☀ Modo claro" : "☾ Modo oscuro";
      themeButton.setAttribute("aria-pressed", String(dark));
    }
  }

  function renderProducts(container, items) {
    if (!container) return;
    container.replaceChildren();
    if (!items.length) {
      const empty = document.createElement("p");
      empty.className = "notice";
      empty.textContent = container.id === "favorites-list"
        ? "Aún no tienes cartas favoritas. Explora el catálogo para guardar algunas."
        : "No se encontraron cartas.";
      container.append(empty);
      return;
    }
    const favorites = getFavorites();
    items.forEach(product => {
      const article = document.createElement("article");
      article.className = "card-box";
      article.innerHTML = `
        <button class="favorite-toggle button-secondary" type="button" data-action="favorite" data-id="${product.id}" aria-pressed="${favorites.includes(product.id)}">
          ${favorites.includes(product.id) ? "Quitar de favoritos" : "Añadir a favoritos"}: ${product.name}
        </button>
        <a href="detalle.html?id=${product.id}" aria-label="Ver detalle de ${product.name}">
          <div class="card-img-wrap"><img src="${product.image}" alt="Carta ${product.name}" loading="lazy"></div>
          <h2>${product.name}</h2>
        </a>
        <p>${product.code} · ${product.attribute}</p>
        <p>Desde: <span class="price-tag">${money(product.price)}</span></p>
        <a class="button button-primary" href="detalle.html?id=${product.id}">Ver vendedores</a>`;
      container.append(article);
    });
  }

  function initCatalog() {
    const container = document.getElementById("product-list");
    if (!container) return;
    const form = document.getElementById("catalog-filters");
    const pagination = document.getElementById("catalog-pagination");
    const render = () => {
      const query = document.getElementById("search-input").value.trim().toLocaleLowerCase();
      const type = document.getElementById("filter-type").value;
      const attribute = document.getElementById("filter-attr").value;
      const filtered = products.filter(product =>
        product.name.toLocaleLowerCase().includes(query) &&
        (type === "ALL" || product.type === type) &&
        (attribute === "ALL" || product.attribute === attribute)
      );
      const pages = Math.ceil(filtered.length / productsPerPage);
      catalogPage = Math.max(1, Math.min(catalogPage, pages || 1));
      const start = (catalogPage - 1) * productsPerPage;
      renderProducts(container, filtered.slice(start, start + productsPerPage));
      pagination.replaceChildren();
      if (pages > 1) {
        const addPageButton = (text, page, label, current = false, disabled = false) => {
          const button = document.createElement("button");
          button.className = "button-secondary";
          button.type = "button";
          button.textContent = text;
          button.setAttribute("aria-label", label);
          button.disabled = disabled;
          if (current) button.setAttribute("aria-current", "page");
          button.addEventListener("click", () => {
            catalogPage = page;
            render();
            pagination.scrollIntoView({ behavior: "smooth", block: "nearest" });
          });
          pagination.append(button);
        };
        addPageButton("← Anterior", Math.max(1, catalogPage - 1), "Página anterior", false, catalogPage === 1);
        for (let page = 1; page <= pages; page += 1) {
          addPageButton(String(page), page, `Página ${page}`, page === catalogPage);
        }
        addPageButton("Siguiente →", Math.min(pages, catalogPage + 1), "Página siguiente", false, catalogPage === pages);
      }
    };
    form.addEventListener("input", () => {
      catalogPage = 1;
      render();
    });
    form.addEventListener("reset", () => {
      catalogPage = 1;
      window.setTimeout(render);
    });
    render();
  }

  function initDetail() {
    const root = document.getElementById("product-detail");
    if (!root) return;
    const product = byId(new URLSearchParams(location.search).get("id")) || products[0];
    document.title = `${product.name} | DUEL MARKET`;
    root.querySelector("[data-product-name]").textContent = product.name;
    root.querySelector("[data-product-image]").src = product.image;
    root.querySelector("[data-product-image]").alt = `Imagen de ${product.name}`;
    root.querySelector("[data-product-code]").textContent = product.code;
    root.querySelector("[data-product-type]").textContent = product.subtype;
    root.querySelector("[data-product-level]").textContent = product.level;
    root.querySelector("[data-product-stats]").textContent = product.stats;
    root.querySelector("[data-product-attribute]").textContent = product.attribute;
    root.querySelector("[data-product-description]").textContent = product.description;
    root.querySelectorAll("[data-offer-price]").forEach(element => {
      element.textContent = money(product.price * Number(element.dataset.priceFactor));
    });
    root.querySelectorAll("[data-add-product]").forEach(button => {
      const price = Number(button.dataset.priceFactor) * product.price;
      button.textContent = `Añadir por ${money(price)}`;
      button.addEventListener("click", () => {
        CartDB.add({ id: product.id, name: product.name, price, seller: button.dataset.seller });
        updateHeader();
        document.getElementById("detail-status").textContent = `${product.name} se añadió al carrito.`;
      });
    });
  }

  function initCart() {
    const list = document.getElementById("cart-list");
    if (!list) return;
    const total = document.getElementById("cart-total");
    const render = () => {
      const items = CartDB.getItems();
      list.replaceChildren();
      if (!items.length) {
        const message = document.createElement("p");
        message.className = "notice";
        message.textContent = "El carrito está vacío.";
        list.append(message);
      }
      items.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "cart-item";
        const details = document.createElement("span");
        const name = document.createElement("strong");
        name.textContent = item.name;
        details.append(name, document.createTextNode(` · ${item.seller} · ${money(item.price)}`));
        const remove = document.createElement("button");
        remove.className = "button-secondary";
        remove.type = "button";
        remove.dataset.action = "remove-cart";
        remove.dataset.index = String(index);
        remove.setAttribute("aria-label", `Quitar ${item.name} del carrito`);
        remove.textContent = "Quitar";
        row.append(details, remove);
        list.append(row);
      });
      total.textContent = money(CartDB.total());
      updateHeader();
    };
    list.addEventListener("click", event => {
      const button = event.target.closest('[data-action="remove-cart"]');
      if (button) CartDB.remove(Number(button.dataset.index));
    });
    window.addEventListener("cartchange", render);
    render();
  }

  function initCheckout() {
    const form = document.getElementById("checkout-form");
    if (!form) return;
    document.getElementById("checkout-total").textContent = money(CartDB.total());
    const submitButton = form.querySelector('button[type="submit"]');
    const status = document.getElementById("checkout-status");
    const cardDetails = document.getElementById("card-details");
    const transferDetails = document.getElementById("transfer-details");
    const syncPaymentFields = () => {
      const method = form.querySelector('input[name="payment-method"]:checked').value;
      cardDetails.hidden = method !== "card";
      cardDetails.disabled = method !== "card";
      transferDetails.hidden = method !== "transfer";
      transferDetails.disabled = method !== "transfer";
    };
    form.querySelectorAll('input[name="payment-method"]').forEach(input => {
      input.addEventListener("change", syncPaymentFields);
    });
    syncPaymentFields();
    const mapToggle = document.getElementById("map-toggle");
    const mapPanel = document.getElementById("map-panel");
    mapToggle.addEventListener("click", () => {
      mapPanel.hidden = !mapPanel.hidden;
      mapToggle.setAttribute("aria-expanded", String(!mapPanel.hidden));
    });
    mapPanel.addEventListener("click", event => {
      const point = event.target.closest("[data-address]");
      if (!point) return;
      document.getElementById("delivery-address").value = point.dataset.address;
      mapPanel.querySelectorAll("[data-address]").forEach(button => button.setAttribute("aria-pressed", "false"));
      point.setAttribute("aria-pressed", "true");
    });
    document.getElementById("delivery-address").addEventListener("input", () => {
      mapPanel.querySelectorAll("[data-address]").forEach(button => button.setAttribute("aria-pressed", "false"));
    });
    const cartIsEmpty = CartDB.count() === 0;
    submitButton.disabled = cartIsEmpty;
    if (cartIsEmpty) {
      status.textContent = "El carrito está vacío. Agrega al menos una carta antes de confirmar el pedido.";
    }
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (CartDB.count() === 0) {
        status.textContent = "El carrito está vacío. Agrega al menos una carta antes de confirmar el pedido.";
        return;
      }
      if (!form.reportValidity()) return;
      const order = `YGO-${Math.floor(10000 + Math.random() * 90000)}`;
      sessionStorage.setItem("duel-market-order", JSON.stringify({
        id: order,
        name: document.getElementById("delivery-name").value.trim(),
        address: document.getElementById("delivery-address").value.trim(),
        method: form.querySelector('input[name="payment-method"]:checked').value === "card" ? "Tarjeta (simulación)" : "Transferencia (simulación)"
      }));
      CartDB.clear();
      location.href = "confirmacion.html";
    });
  }

  function initConfirmation() {
    const order = document.getElementById("order-details");
    if (!order) return;
    const savedOrder = sessionStorage.getItem("duel-market-order");
    const details = savedOrder ? JSON.parse(savedOrder) : {};
    document.getElementById("order-id").textContent = details.id || "YGO-00000";
    document.getElementById("order-recipient").textContent = details.name || "No indicado";
    document.getElementById("order-address").textContent = details.address || "No indicada";
    document.getElementById("order-method").textContent = details.method || "No indicado";
  }

  function initLogin() {
    const form = document.getElementById("login-form");
    if (!form) return;
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const email = document.getElementById("login-email").value.trim();
      localStorage.setItem("duel-market-user", JSON.stringify({ email }));
      document.getElementById("login-status").textContent = `Sesión de demostración iniciada para ${email}.`;
      form.reset();
    });
  }

  document.addEventListener("click", event => {
    const button = event.target.closest('[data-action="favorite"]');
    if (button) {
      const id = Number(button.dataset.id);
      const favorites = getFavorites();
      saveFavorites(favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id]);
      if (document.getElementById("favorites-list")) initFavorites();
      else {
        const catalogForm = document.getElementById("catalog-filters");
        if (catalogForm) catalogForm.dispatchEvent(new Event("input"));
      }
      updateHeader();
    }
    if (event.target.closest("#theme-btn")) {
      const dark = document.documentElement.dataset.theme !== "dark";
      document.documentElement.dataset.theme = dark ? "dark" : "light";
      localStorage.setItem("duel-market-theme", dark ? "dark" : "light");
      updateHeader();
    }
    if (event.target.closest("#voice-btn")) {
      const button = document.getElementById("voice-btn");
      const status = document.getElementById("voice-status");
      if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
        status.textContent = "La lectura por voz no está disponible en este navegador.";
        return;
      }
      voiceEnabled = !voiceEnabled;
      button.setAttribute("aria-pressed", String(voiceEnabled));
      button.textContent = `Lectura por voz: ${voiceEnabled ? "activada" : "desactivada"}`;
      status.textContent = voiceEnabled ? "Lectura por voz activada." : "Lectura por voz desactivada.";
      if (!voiceEnabled) {
        window.speechSynthesis.cancel();
        window.clearTimeout(voiceTimer);
        lastVoiceTarget = null;
      }
    }
  });

  function initFavorites() {
    const container = document.getElementById("favorites-list");
    if (container) renderProducts(container, products.filter(item => getFavorites().includes(item.id)));
  }

  let voiceTimer;
  let lastVoiceTarget;
  function readContent(event) {
    if (!voiceEnabled || !("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;
    const target = event.target.closest("button, a, input, select, textarea, img, h1, h2, h3, p, label, li, td, th, article");
    if (!target || target === lastVoiceTarget || target.closest("[hidden]")) return;
    const text = target.getAttribute("aria-label") || target.getAttribute("alt") || target.innerText || target.value || "";
    if (!text.trim()) return;
    lastVoiceTarget = target;
    window.clearTimeout(voiceTimer);
    voiceTimer = window.setTimeout(() => {
      if (!voiceEnabled || !target.isConnected) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text.trim().replace(/\s+/g, " "));
      utterance.lang = "es-ES";
      window.speechSynthesis.speak(utterance);
    }, 350);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("pointerover", readContent);
    document.addEventListener("focusin", readContent);
    updateHeader();
    initCatalog();
    initDetail();
    initCart();
    initCheckout();
    initConfirmation();
    initLogin();
    initFavorites();
  });
})();

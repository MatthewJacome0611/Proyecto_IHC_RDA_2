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
  const userKey = "duel-market-user";
  const selectedProductKey = "duel-market-selected-product";
  const pendingOrderKey = "duel-market-order";
  const orderHistoryKey = "historial_compras";
  const legacyOrderHistoryKey = "duel-market-orders";
  const recentlyViewedKey = "vistos_recientemente";
  const productsPerPage = 8;
  let catalogPage = 1;
  let voiceEnabled = false;
  let catalogRender;
  const money = value => `$${Number(value).toFixed(2)}`;
  const getFavorites = () => JSON.parse(localStorage.getItem(favoritesKey) || "[]");
  const saveFavorites = ids => localStorage.setItem(favoritesKey, JSON.stringify(ids));
  const getUser = () => JSON.parse(localStorage.getItem(userKey) || "null");
  const byId = id => products.find(product => product.id === Number(id));
  const getOrderHistory = () => {
    const stored = localStorage.getItem(orderHistoryKey) || localStorage.getItem(legacyOrderHistoryKey);
    if (!stored) return [];
    const history = JSON.parse(stored);
    if (!Array.isArray(history)) throw new TypeError("El historial de compras guardado no tiene un formato válido.");
    if (!localStorage.getItem(orderHistoryKey)) {
      localStorage.setItem(orderHistoryKey, JSON.stringify(history));
    }
    return history;
  };

  function updateHeader() {
    const count = document.getElementById("cart-count");
    if (count) {
      count.textContent = String(CartDB.count());
      const cartButton = document.getElementById("btn-cart");
      if (cartButton) cartButton.setAttribute("aria-label", `Abrir carrito, artículos: ${count.textContent}`);
    }
    const themeButton = document.getElementById("theme-btn");
    if (themeButton) {
      const dark = localStorage.getItem("duel-market-theme") === "dark";
      document.documentElement.dataset.theme = dark ? "dark" : "light";
      themeButton.textContent = dark ? "☀ Modo claro" : "☾ Modo oscuro";
      themeButton.setAttribute("aria-pressed", String(dark));
    }
    const loginButton = document.getElementById("login-btn");
    if (loginButton) {
      const user = getUser();
      loginButton.textContent = user ? "Mi Cuenta" : "Iniciar sesión";
      loginButton.setAttribute("aria-label", user ? `Abrir cuenta de ${user.email}` : "Iniciar sesión");
      loginButton.setAttribute("aria-expanded", String(Boolean(user && !document.getElementById("account-menu")?.hidden)));
    }
  }

  function renderProducts(container, items, allowDetails = false) {
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
    const showFavoriteToggle = Boolean(getUser());
    items.forEach(product => {
      const article = document.createElement("article");
      article.className = "card-box";
      article.innerHTML = `
        ${showFavoriteToggle ? `<button class="favorite-toggle button-secondary" type="button" data-action="favorite" data-id="${product.id}" aria-pressed="${favorites.includes(product.id)}">
          ${favorites.includes(product.id) ? "Quitar de favoritos" : "Añadir a favoritos"}: ${product.name}
        </button>` : ""}
        <div class="card-img-wrap"><img src="${product.image}" alt="Carta ${product.name}" loading="lazy"></div>
        <h2>${product.name}</h2>
        <p>${product.code} · ${product.attribute}</p>
        <p>Desde: <span class="price-tag">${money(product.price)}</span></p>
        ${allowDetails
          ? `<button class="button-primary" type="button" data-action="show-sellers" data-id="${product.id}">Ver vendedores</button>`
          : `<a class="button button-secondary" href="catalogo.html">Buscar en el catálogo</a>`}`;
      container.append(article);
    });
  }

  function verDetalle(id) {
    const product = byId(id);
    if (!product) return;
    addRecentlyViewed(product.id);
    sessionStorage.setItem(selectedProductKey, String(product.id));
    location.href = `detalle.html?id=${encodeURIComponent(product.id)}`;
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
      const sortOrder = document.getElementById("sort-order").value;
      const filtered = products.filter(product =>
        product.name.toLocaleLowerCase().includes(query) &&
        (type === "ALL" || product.type === type) &&
        (attribute === "ALL" || product.attribute === attribute)
      );
      filtered.sort((a, b) => {
        if (sortOrder === "price-desc") return b.price - a.price || a.id - b.id;
        if (sortOrder === "name-asc") return a.name.localeCompare(b.name, "es") || a.id - b.id;
        return a.price - b.price || a.id - b.id;
      });
      const pages = Math.ceil(filtered.length / productsPerPage);
      catalogPage = Math.max(1, Math.min(catalogPage, pages || 1));
      const start = (catalogPage - 1) * productsPerPage;
      renderProducts(container, filtered.slice(start, start + productsPerPage), true);
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
    catalogRender = render;
    document.getElementById("search-input").addEventListener("input", () => {
      catalogPage = 1;
      render();
    });
    form.addEventListener("change", () => {
      catalogPage = 1;
      render();
    });
    form.addEventListener("reset", () => {
      catalogPage = 1;
      window.setTimeout(render);
    });
    render();
  }

  function initFeaturedProducts() {
    const container = document.getElementById("featured-products");
    if (container) renderProducts(container, products.slice(0, 4));
  }

  function initDetail() {
    const root = document.getElementById("product-detail");
    if (!root) return;
    const selectedId = sessionStorage.getItem(selectedProductKey);
    sessionStorage.removeItem(selectedProductKey);
    const requestedId = new URLSearchParams(location.search).get("id");
    const product = selectedId && Number(selectedId) === Number(requestedId) ? byId(selectedId) : null;
    if (!product) {
      document.getElementById("detail-content").hidden = true;
      document.getElementById("detail-no-selection").hidden = false;
      return;
    }
    document.getElementById("detail-content").hidden = false;
    document.getElementById("detail-no-selection").hidden = true;
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
    const sellersTable = root.querySelector("#sellers-table tbody");
    const sellerRows = [...sellersTable.rows].sort((a, b) =>
      Number(a.querySelector("[data-price-factor]").dataset.priceFactor) -
      Number(b.querySelector("[data-price-factor]").dataset.priceFactor)
    );
    sellersTable.replaceChildren(...sellerRows);
    addRecentlyViewed(product.id);
    root.querySelectorAll("[data-add-product]").forEach(button => {
      const price = Number(button.dataset.priceFactor) * product.price;
      button.textContent = `Añadir por ${money(price)}`;
      button.addEventListener("click", () => {
        CartDB.add({ id: product.id, name: product.name, price, seller: button.dataset.seller });
        updateHeader();
        document.getElementById("detail-status").textContent = `${product.name} se añadió al carrito.`;
        showCartAddedDialog(product.name);
      });
    });
  }

  function initCartAddedDialog() {
    if (document.getElementById("cart-added-dialog")) return;
    const dialog = document.createElement("dialog");
    dialog.id = "cart-added-dialog";
    dialog.className = "login-dialog";
    dialog.setAttribute("aria-labelledby", "cart-added-title");
    dialog.innerHTML = `
      <div class="dialog-heading"><h2 id="cart-added-title">Carta añadida al carrito</h2></div>
      <p id="cart-added-message" role="status"></p>
      <div class="actions">
        <a class="button button-secondary" href="catalogo.html">Seguir comprando</a>
        <a class="button button-primary" href="carrito.html">Ir al carrito</a>
      </div>`;
    document.body.append(dialog);
  }

  function showCartAddedDialog(productName) {
    const dialog = document.getElementById("cart-added-dialog");
    document.getElementById("cart-added-message").textContent = `${productName} se añadió a tu carrito. ¿Quieres seguir comprando o ir al carrito?`;
    if (!dialog.open) dialog.showModal();
  }

  function initCart() {
    const list = document.getElementById("cart-list");
    if (!list) return;
    const total = document.getElementById("cart-total");
    const expandedGroups = new Set();
    const render = () => {
      const items = CartDB.getItems();
      list.replaceChildren();
      if (!items.length) {
        const message = document.createElement("p");
        message.className = "notice";
        message.textContent = "El carrito está vacío.";
        list.append(message);
      }
      const groups = new Map();
      items.forEach((item, index) => {
        const key = String(item.id);
        if (!groups.has(key)) groups.set(key, { name: item.name, items: [] });
        groups.get(key).items.push({ ...item, index });
      });
      groups.forEach((group, key) => {
        const section = document.createElement("section");
        section.className = "cart-group";
        if (group.items.length < 2) expandedGroups.delete(key);
        const isExpanded = group.items.length > 1 && expandedGroups.has(key);
        const summary = document.createElement("div");
        summary.className = "cart-item";
        const details = document.createElement("span");
        const name = document.createElement("strong");
        name.textContent = group.name;
        const subtotal = group.items.reduce((sum, item) => sum + Number(item.price), 0);
        details.append(name, document.createTextNode(` · ${group.items.length} ${group.items.length === 1 ? "carta" : "cartas"} · Subtotal: ${money(subtotal)}`));
        summary.append(details);
        const breakdown = document.createElement("div");
        breakdown.id = `cart-group-${key}`;
        breakdown.className = "cart-group-breakdown";
        breakdown.hidden = !isExpanded;
        group.items.forEach(item => {
          const row = document.createElement("div");
          row.className = "cart-item cart-item-detail";
          const itemDetails = document.createElement("span");
          itemDetails.textContent = `${item.seller} · ${money(item.price)}`;
          const remove = document.createElement("button");
          remove.className = "button-secondary";
          remove.type = "button";
          remove.dataset.action = "remove-cart";
          remove.dataset.index = String(item.index);
          remove.setAttribute("aria-label", `Quitar una unidad de ${item.name}, de ${item.seller}, del carrito`);
          remove.textContent = "Quitar esta carta";
          row.append(itemDetails, remove);
          breakdown.append(row);
        });
        if (group.items.length > 1) {
          const toggle = document.createElement("button");
          toggle.className = "button-secondary";
          toggle.type = "button";
          toggle.dataset.action = "toggle-cart-group";
          toggle.dataset.group = key;
          toggle.setAttribute("aria-expanded", String(isExpanded));
          toggle.setAttribute("aria-controls", breakdown.id);
          toggle.textContent = isExpanded ? "Ocultar cartas" : `Desglosar grupo (${group.items.length})`;
          toggle.setAttribute("aria-label", `${isExpanded ? "Ocultar" : "Desglosar"} grupo de ${group.name}, ${group.items.length} cartas`);
          summary.append(toggle);
        } else {
          const remove = document.createElement("button");
          remove.className = "button-secondary";
          remove.type = "button";
          remove.dataset.action = "remove-cart";
          remove.dataset.index = String(group.items[0].index);
          remove.setAttribute("aria-label", `Quitar ${group.name} del carrito`);
          remove.textContent = "Quitar";
          summary.append(remove);
        }
        section.append(summary, breakdown);
        list.append(section);
      });
      total.textContent = money(CartDB.total());
      updateHeader();
    };
    list.addEventListener("click", event => {
      const button = event.target.closest('[data-action="remove-cart"]');
      if (button) CartDB.remove(Number(button.dataset.index));
      const toggle = event.target.closest('[data-action="toggle-cart-group"]');
      if (toggle) {
        const key = toggle.dataset.group;
        if (expandedGroups.has(key)) expandedGroups.delete(key);
        else expandedGroups.add(key);
        render();
      }
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
      const items = CartDB.getItems();
      const orderDetails = {
        id: order,
        code: order,
        name: document.getElementById("delivery-name").value.trim(),
        address: document.getElementById("delivery-address").value.trim(),
        method: form.querySelector('input[name="payment-method"]:checked').value === "card" ? "Tarjeta (simulación)" : "Transferencia (simulación)",
        total: CartDB.total(),
        date: new Date().toLocaleDateString(),
        items
      };
      sessionStorage.setItem(pendingOrderKey, JSON.stringify(orderDetails));
      const history = getOrderHistory();
      history.unshift(orderDetails);
      localStorage.setItem(orderHistoryKey, JSON.stringify(history));
      CartDB.clear();
      location.href = "confirmacion.html";
    });
  }

  function initConfirmation() {
    const order = document.getElementById("order-details");
    if (!order) return;
    const savedOrder = sessionStorage.getItem(pendingOrderKey);
    if (!savedOrder) {
      location.replace("carrito.html");
      return;
    }
    sessionStorage.removeItem(pendingOrderKey);
    const details = JSON.parse(savedOrder);
    document.getElementById("order-id").textContent = details.id || "YGO-00000";
    document.getElementById("order-recipient").textContent = details.name || "No indicado";
    document.getElementById("order-address").textContent = details.address || "No indicada";
    document.getElementById("order-method").textContent = details.method || "No indicado";
  }

  function initAccountDialog() {
    const dialog = document.createElement("dialog");
    dialog.id = "login-dialog";
    dialog.className = "login-dialog";
    dialog.setAttribute("aria-labelledby", "login-title");
    dialog.innerHTML = `
      <div class="dialog-heading">
        <h2 id="login-title">Acceso de demostración</h2>
        <button class="dialog-close button-secondary" type="button" data-action="close-login" aria-label="Cerrar ventana de inicio de sesión">×</button>
      </div>
      <p>Inicia sesión con cualquier correo válido y una contraseña de seis caracteres o más. No se envían datos.</p>
      <form id="login-form">
        <div class="form-group"><label for="login-email">Correo electrónico</label><input id="login-email" name="email" type="email" autocomplete="email" required></div>
        <div class="form-group"><label for="login-password">Contraseña de prueba</label><input id="login-password" name="password" type="password" autocomplete="current-password" minlength="6" required></div>
        <p id="login-status" class="status" role="status" aria-live="polite"></p>
        <div class="actions"><button class="button-secondary" type="button" data-action="close-login">Cancelar</button><button class="button-primary" type="submit">Iniciar sesión</button></div>
      </form>
      `;
    document.body.append(dialog);
    dialog.addEventListener("cancel", event => {
      event.preventDefault();
      dialog.close();
    });
    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
    document.getElementById("login-form").addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const email = document.getElementById("login-email").value.trim();
      localStorage.setItem(userKey, JSON.stringify({ email }));
      updateHeader();
      applyAccountAccess();
      syncAccountMenu();
      refreshProductLists();
      dialog.close();
    });
    initAccountMenu();
  }

  function initAccountMenu() {
    const loginButton = document.getElementById("login-btn");
    if (!loginButton || document.getElementById("account-menu")) return;
    const container = document.createElement("div");
    container.className = "account-control";
    loginButton.parentElement.insertBefore(container, loginButton);
    container.append(loginButton);
    loginButton.setAttribute("aria-controls", "account-menu");

    const menu = document.createElement("nav");
    menu.id = "account-menu";
    menu.className = "account-menu";
    menu.setAttribute("aria-label", "Menú de cuenta");
    menu.hidden = true;
    menu.innerHTML = `
      <p class="account-menu-heading" id="account-menu-user"></p>
      <a href="favoritos.html">Mis Favoritos</a>
      <a href="historial.html">Historial de Compras</a>
      <button class="account-menu-logout" type="button" data-action="logout">Cerrar Sesión</button>`;
    container.append(menu);

    document.addEventListener("pointerdown", event => {
      if (!container.contains(event.target)) closeAccountMenu();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !menu.hidden) {
        closeAccountMenu();
        loginButton.focus();
      }
    });
    syncAccountMenu();
  }

  function syncAccountMenu() {
    const menu = document.getElementById("account-menu");
    if (!menu) return;
    const user = getUser();
    const button = document.getElementById("login-btn");
    document.getElementById("account-menu-user").textContent = user ? user.email : "";
    if (!user) menu.hidden = true;
    button.setAttribute("aria-expanded", String(Boolean(user && !menu.hidden)));
  }

  function toggleAccountMenu() {
    const menu = document.getElementById("account-menu");
    const button = document.getElementById("login-btn");
    if (!menu || !getUser()) return;
    menu.hidden = !menu.hidden;
    button.setAttribute("aria-expanded", String(!menu.hidden));
    if (!menu.hidden) {
      const firstLink = menu.querySelector("a");
      firstLink.focus();
    }
  }

  function closeAccountMenu() {
    const menu = document.getElementById("account-menu");
    const button = document.getElementById("login-btn");
    if (menu) menu.hidden = true;
    if (button) button.setAttribute("aria-expanded", "false");
  }

  function openLoginDialog(message = "") {
    const dialog = document.getElementById("login-dialog");
    if (!dialog || getUser()) return;
    const form = document.getElementById("login-form");
    document.getElementById("login-status").textContent = "";
    form.reset();
    if (message) {
      document.getElementById("login-status").textContent = message;
    }
    if (!dialog.open) dialog.showModal();
  }

  function applyAccountAccess() {
    const favorites = document.getElementById("favorites-list");
    const history = document.getElementById("order-history");
    const user = getUser();
    if (favorites) {
      document.getElementById("favorites-access-status").hidden = Boolean(user);
      favorites.hidden = !user;
      if (user) initFavorites();
    }
    if (history) {
      document.getElementById("history-access-status").hidden = Boolean(user);
      history.hidden = !user;
      if (user) renderOrderHistory();
    }
  }

  function refreshProductLists() {
    initFeaturedProducts();
    if (catalogRender && document.getElementById("product-list")) catalogRender();
  }

  function initLogin() {
    const button = document.getElementById("login-btn");
    if (button) {
      button.addEventListener("click", () => {
        if (getUser()) toggleAccountMenu();
        else openLoginDialog();
      });
    }
  }

  function renderOrderHistory() {
    const container = document.getElementById("order-history");
    if (!container) return;
    const orders = getOrderHistory();
    container.replaceChildren();
    if (!orders.length) {
      const empty = document.createElement("p");
      empty.className = "notice";
      empty.textContent = "Todavía no tienes pedidos registrados.";
      container.append(empty);
      return;
    }
    orders.forEach(order => {
      const article = document.createElement("article");
      article.className = "history-order";
      const title = document.createElement("h2");
      title.textContent = `Pedido ${order.code || order.id}`;
      const summary = document.createElement("p");
      const date = String(order.date || "");
      const formattedDate = date.includes("T")
        ? new Date(`${date.slice(0, 10)}T12:00:00`).toLocaleDateString("es-EC")
        : date;
      summary.textContent = `${formattedDate} · ${money(order.total)}`;
      const products = document.createElement("p");
      products.textContent = (order.items || []).map(item =>
        typeof item === "string" ? item : `${item.name} (${money(item.price)})`
      ).join(", ");
      article.append(title, summary, products);
      container.append(article);
    });
  }

  function addRecentlyViewed(id) {
    const ids = JSON.parse(localStorage.getItem(recentlyViewedKey) || "[]");
    if (!Array.isArray(ids)) throw new TypeError("La lista de cartas vistas recientemente no tiene un formato válido.");
    const updated = [Number(id), ...ids.filter(item => Number(item) !== Number(id))].slice(0, 5);
    localStorage.setItem(recentlyViewedKey, JSON.stringify(updated));
  }

  function initRecentlyViewed() {
    const container = document.getElementById("recently-viewed");
    const list = document.getElementById("recently-viewed-list");
    const count = document.getElementById("recently-viewed-count");
    if (!container || !list || !count) return;
    const ids = JSON.parse(localStorage.getItem(recentlyViewedKey) || "[]");
    if (!Array.isArray(ids)) throw new TypeError("La lista de cartas vistas recientemente no tiene un formato válido.");
    const viewed = ids.map(byId).filter(Boolean).slice(0, 5);
    count.textContent = String(viewed.length);
    list.replaceChildren();
    if (!viewed.length) {
      const empty = document.createElement("li");
      empty.textContent = "Aún no has visto cartas.";
      list.append(empty);
      return;
    }
    viewed.forEach(product => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = `detalle.html?id=${encodeURIComponent(product.id)}`;
      link.setAttribute("aria-label", `Volver al detalle de ${product.name}`);
      link.addEventListener("click", () => sessionStorage.setItem(selectedProductKey, String(product.id)));
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = "";
      image.loading = "lazy";
      const name = document.createElement("span");
      name.textContent = product.name;
      link.append(image, name);
      item.append(link);
      list.append(item);
    });
  }

  function initFavoriteAccess() {
    const hasFavorites = Boolean(document.getElementById("favorites-list"));
    const hasHistory = Boolean(document.getElementById("order-history"));
    if (!hasFavorites && !hasHistory) return;
    applyAccountAccess();
    if (!getUser()) {
      if (hasFavorites) {
        openLoginDialog("Para ver tus favoritos, inicia sesión.");
      } else {
        openLoginDialog("Para consultar tus pedidos, inicia sesión.");
      }
    }
  }

  document.addEventListener("click", event => {
    const sellerButton = event.target.closest('[data-action="show-sellers"]');
    if (sellerButton) {
      verDetalle(sellerButton.dataset.id);
      return;
    }

    const button = event.target.closest('[data-action="favorite"]');
    if (button) {
      if (!getUser()) {
        openLoginDialog("Para añadir cartas a favoritos, inicia sesión.");
        return;
      }
      const id = Number(button.dataset.id);
      const favorites = getFavorites();
      saveFavorites(favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id]);
      if (document.getElementById("favorites-list")) initFavorites();
      if (catalogRender && document.getElementById("product-list")) catalogRender();
      if (document.getElementById("featured-products")) initFeaturedProducts();
    }
    if (event.target.closest('[data-action="close-login"]')) {
      document.getElementById("login-dialog").close();
    }
    if (event.target.closest('[data-action="logout"]')) {
      localStorage.removeItem(userKey);
      updateHeader();
      syncAccountMenu();
      applyAccountAccess();
      refreshProductLists();
      closeAccountMenu();
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
    if (container && getUser()) renderProducts(container, products.filter(item => getFavorites().includes(item.id)));
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
    initAccountDialog();
    initCartAddedDialog();
    initLogin();
    updateHeader();
    initFeaturedProducts();
    initCatalog();
    initDetail();
    initCart();
    initCheckout();
    initConfirmation();
    initFavorites();
    initFavoriteAccess();
    initRecentlyViewed();
  });
})();

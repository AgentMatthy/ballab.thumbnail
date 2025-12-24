(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js
  var EmailJSResponseStatus;
  var init_EmailJSResponseStatus = __esm({
    "node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js"() {
      EmailJSResponseStatus = class {
        constructor(_status = 0, _text = "Network Error") {
          this.status = _status;
          this.text = _text;
        }
      };
    }
  });

  // node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js
  var createWebStorage;
  var init_createWebStorage = __esm({
    "node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js"() {
      createWebStorage = () => {
        if (typeof localStorage === "undefined")
          return;
        return {
          get: (key) => Promise.resolve(localStorage.getItem(key)),
          set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
          remove: (key) => Promise.resolve(localStorage.removeItem(key))
        };
      };
    }
  });

  // node_modules/@emailjs/browser/es/store/store.js
  var store;
  var init_store = __esm({
    "node_modules/@emailjs/browser/es/store/store.js"() {
      init_createWebStorage();
      store = {
        origin: "https://api.emailjs.com",
        blockHeadless: false,
        storageProvider: createWebStorage()
      };
    }
  });

  // node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js
  var buildOptions;
  var init_buildOptions = __esm({
    "node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js"() {
      buildOptions = (options) => {
        if (!options)
          return {};
        if (typeof options === "string") {
          return {
            publicKey: options
          };
        }
        if (options.toString() === "[object Object]") {
          return options;
        }
        return {};
      };
    }
  });

  // node_modules/@emailjs/browser/es/methods/init/init.js
  var init;
  var init_init = __esm({
    "node_modules/@emailjs/browser/es/methods/init/init.js"() {
      init_store();
      init_buildOptions();
      init = (options, origin = "https://api.emailjs.com") => {
        if (!options)
          return;
        const opts = buildOptions(options);
        store.publicKey = opts.publicKey;
        store.blockHeadless = opts.blockHeadless;
        store.storageProvider = opts.storageProvider;
        store.blockList = opts.blockList;
        store.limitRate = opts.limitRate;
        store.origin = opts.origin || origin;
      };
    }
  });

  // node_modules/@emailjs/browser/es/api/sendPost.js
  var sendPost;
  var init_sendPost = __esm({
    "node_modules/@emailjs/browser/es/api/sendPost.js"() {
      init_EmailJSResponseStatus();
      init_store();
      sendPost = async (url, data, headers = {}) => {
        const response = await fetch(store.origin + url, {
          method: "POST",
          headers,
          body: data
        });
        const message = await response.text();
        const responseStatus = new EmailJSResponseStatus(response.status, message);
        if (response.ok) {
          return responseStatus;
        }
        throw responseStatus;
      };
    }
  });

  // node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js
  var validateParams;
  var init_validateParams = __esm({
    "node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js"() {
      validateParams = (publicKey, serviceID, templateID) => {
        if (!publicKey || typeof publicKey !== "string") {
          throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
        }
        if (!serviceID || typeof serviceID !== "string") {
          throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
        }
        if (!templateID || typeof templateID !== "string") {
          throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
        }
      };
    }
  });

  // node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js
  var validateTemplateParams;
  var init_validateTemplateParams = __esm({
    "node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js"() {
      validateTemplateParams = (templateParams) => {
        if (templateParams && templateParams.toString() !== "[object Object]") {
          throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
        }
      };
    }
  });

  // node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js
  var isHeadless;
  var init_isHeadless = __esm({
    "node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js"() {
      isHeadless = (navigator2) => {
        return navigator2.webdriver || !navigator2.languages || navigator2.languages.length === 0;
      };
    }
  });

  // node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js
  var headlessError;
  var init_headlessError = __esm({
    "node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js"() {
      init_EmailJSResponseStatus();
      headlessError = () => {
        return new EmailJSResponseStatus(451, "Unavailable For Headless Browser");
      };
    }
  });

  // node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js
  var validateBlockListParams;
  var init_validateBlockListParams = __esm({
    "node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js"() {
      validateBlockListParams = (list, watchVariable) => {
        if (!Array.isArray(list)) {
          throw "The BlockList list has to be an array";
        }
        if (typeof watchVariable !== "string") {
          throw "The BlockList watchVariable has to be a string";
        }
      };
    }
  });

  // node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js
  var isBlockListDisabled, getValue, isBlockedValueInParams;
  var init_isBlockedValueInParams = __esm({
    "node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js"() {
      init_validateBlockListParams();
      isBlockListDisabled = (options) => {
        return !options.list?.length || !options.watchVariable;
      };
      getValue = (data, name) => {
        return data instanceof FormData ? data.get(name) : data[name];
      };
      isBlockedValueInParams = (options, params) => {
        if (isBlockListDisabled(options))
          return false;
        validateBlockListParams(options.list, options.watchVariable);
        const value = getValue(params, options.watchVariable);
        if (typeof value !== "string")
          return false;
        return options.list.includes(value);
      };
    }
  });

  // node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js
  var blockedEmailError;
  var init_blockedEmailError = __esm({
    "node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js"() {
      init_EmailJSResponseStatus();
      blockedEmailError = () => {
        return new EmailJSResponseStatus(403, "Forbidden");
      };
    }
  });

  // node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js
  var validateLimitRateParams;
  var init_validateLimitRateParams = __esm({
    "node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js"() {
      validateLimitRateParams = (throttle, id) => {
        if (typeof throttle !== "number" || throttle < 0) {
          throw "The LimitRate throttle has to be a positive number";
        }
        if (id && typeof id !== "string") {
          throw "The LimitRate ID has to be a non-empty string";
        }
      };
    }
  });

  // node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js
  var getLeftTime, isLimitRateHit;
  var init_isLimitRateHit = __esm({
    "node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js"() {
      init_validateLimitRateParams();
      getLeftTime = async (id, throttle, storage) => {
        const lastTime = Number(await storage.get(id) || 0);
        return throttle - Date.now() + lastTime;
      };
      isLimitRateHit = async (defaultID, options, storage) => {
        if (!options.throttle || !storage) {
          return false;
        }
        validateLimitRateParams(options.throttle, options.id);
        const id = options.id || defaultID;
        const leftTime = await getLeftTime(id, options.throttle, storage);
        if (leftTime > 0) {
          return true;
        }
        await storage.set(id, Date.now().toString());
        return false;
      };
    }
  });

  // node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js
  var limitRateError;
  var init_limitRateError = __esm({
    "node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js"() {
      init_EmailJSResponseStatus();
      limitRateError = () => {
        return new EmailJSResponseStatus(429, "Too Many Requests");
      };
    }
  });

  // node_modules/@emailjs/browser/es/methods/send/send.js
  var send;
  var init_send = __esm({
    "node_modules/@emailjs/browser/es/methods/send/send.js"() {
      init_store();
      init_sendPost();
      init_buildOptions();
      init_validateParams();
      init_validateTemplateParams();
      init_isHeadless();
      init_headlessError();
      init_isBlockedValueInParams();
      init_blockedEmailError();
      init_isLimitRateHit();
      init_limitRateError();
      send = async (serviceID, templateID, templateParams, options) => {
        const opts = buildOptions(options);
        const publicKey = opts.publicKey || store.publicKey;
        const blockHeadless = opts.blockHeadless || store.blockHeadless;
        const storageProvider = opts.storageProvider || store.storageProvider;
        const blockList = { ...store.blockList, ...opts.blockList };
        const limitRate = { ...store.limitRate, ...opts.limitRate };
        if (blockHeadless && isHeadless(navigator)) {
          return Promise.reject(headlessError());
        }
        validateParams(publicKey, serviceID, templateID);
        validateTemplateParams(templateParams);
        if (templateParams && isBlockedValueInParams(blockList, templateParams)) {
          return Promise.reject(blockedEmailError());
        }
        if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
          return Promise.reject(limitRateError());
        }
        const params = {
          lib_version: "4.4.1",
          user_id: publicKey,
          service_id: serviceID,
          template_id: templateID,
          template_params: templateParams
        };
        return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
          "Content-type": "application/json"
        });
      };
    }
  });

  // node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js
  var validateForm;
  var init_validateForm = __esm({
    "node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js"() {
      validateForm = (form) => {
        if (!form || form.nodeName !== "FORM") {
          throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
        }
      };
    }
  });

  // node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js
  var findHTMLForm, sendForm;
  var init_sendForm = __esm({
    "node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js"() {
      init_store();
      init_sendPost();
      init_buildOptions();
      init_validateForm();
      init_validateParams();
      init_isHeadless();
      init_headlessError();
      init_isBlockedValueInParams();
      init_blockedEmailError();
      init_isLimitRateHit();
      init_limitRateError();
      findHTMLForm = (form) => {
        return typeof form === "string" ? document.querySelector(form) : form;
      };
      sendForm = async (serviceID, templateID, form, options) => {
        const opts = buildOptions(options);
        const publicKey = opts.publicKey || store.publicKey;
        const blockHeadless = opts.blockHeadless || store.blockHeadless;
        const storageProvider = store.storageProvider || opts.storageProvider;
        const blockList = { ...store.blockList, ...opts.blockList };
        const limitRate = { ...store.limitRate, ...opts.limitRate };
        if (blockHeadless && isHeadless(navigator)) {
          return Promise.reject(headlessError());
        }
        const currentForm = findHTMLForm(form);
        validateParams(publicKey, serviceID, templateID);
        validateForm(currentForm);
        const formData = new FormData(currentForm);
        if (isBlockedValueInParams(blockList, formData)) {
          return Promise.reject(blockedEmailError());
        }
        if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
          return Promise.reject(limitRateError());
        }
        formData.append("lib_version", "4.4.1");
        formData.append("service_id", serviceID);
        formData.append("template_id", templateID);
        formData.append("user_id", publicKey);
        return sendPost("/api/v1.0/email/send-form", formData);
      };
    }
  });

  // node_modules/@emailjs/browser/es/index.js
  var es_default;
  var init_es = __esm({
    "node_modules/@emailjs/browser/es/index.js"() {
      init_EmailJSResponseStatus();
      init_init();
      init_send();
      init_sendForm();
      es_default = {
        init,
        send,
        sendForm,
        EmailJSResponseStatus
      };
    }
  });

  // src/main.js
  var require_main = __commonJS({
    "src/main.js"() {
      init_es();
      var wrapper = document.getElementById("tiles");
      var createTile = (index) => {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        return tile;
      };
      var createTiles = (quantity) => {
        Array.from(Array(quantity)).map((tile, index) => {
          wrapper.appendChild(createTile(index));
        });
      };
      var createGrid = () => {
        wrapper.innerHTML = "";
        const size = 50;
        const columns = Math.floor(document.documentElement.clientWidth / size);
        const viewportHeight = window.innerHeight;
        const rows = Math.floor(viewportHeight / size);
        wrapper.style.setProperty("--columns", columns);
        wrapper.style.setProperty("--rows", rows);
        createTiles(columns * rows);
      };
      createGrid();
      window.onresize = () => createGrid();
      var menuToggle = document.querySelector("nav .menu-toggle");
      var navMenu = document.querySelector("nav ul");
      var nav = document.querySelector("nav");
      if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
          nav.classList.toggle("menu-open");
        });
        navMenu.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", () => {
            nav.classList.remove("menu-open");
          });
        });
        document.addEventListener("click", (e) => {
          if (!nav.contains(e.target) && nav.classList.contains("menu-open")) {
            nav.classList.remove("menu-open");
          }
        });
      }
      es_default.init({
        publicKey: "gAU74j2dSw6ljbrVj"
      });
      window.onload = function() {
        document.getElementById("contact-form").addEventListener("submit", function(event) {
          event.preventDefault();
          es_default.sendForm("default_service", "template_0556nso", this).then(() => {
            console.log("SUCCESS!");
          }, (error) => {
            console.log("FAILED...", error);
          });
          this.reset();
        });
      };
    }
  });
  require_main();
})();

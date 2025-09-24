(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/main.js
  var require_main = __commonJS({
    "src/main.js"() {
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
        columns = Math.floor(window.innerWidth / size);
        rows = Math.floor(window.innerHeight / size);
        wrapper.style.setProperty("--columns", columns);
        wrapper.style.setProperty("--rows", rows);
        createTiles(columns * rows);
      };
      createGrid();
      window.onresize = () => createGrid();
    }
  });
  require_main();
})();

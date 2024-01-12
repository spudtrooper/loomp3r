// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4rkIz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
/*
import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
import RegionsPlugin from "https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js";
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _wavesurferJs = require("wavesurfer.js");
var _wavesurferJsDefault = parcelHelpers.interopDefault(_wavesurferJs);
var _regionsEsmJs = require("wavesurfer.js/dist/plugins/regions.esm.js");
var _regionsEsmJsDefault = parcelHelpers.interopDefault(_regionsEsmJs);
// XXX: Hack to allow interaction and listen to region-out
let disableRegionOut = false;
let disableRegionOutPauseMillis = 0;
const setDisableRegionOutTrue = ()=>{
    disableRegionOut = true;
    setTimeout(()=>{
        disableRegionOut = false;
        disableRegionOutPauseMillis = 0;
    }, 100 + disableRegionOutPauseMillis);
};
let paused = false;
const initWavesurfer = async (fileName, blob)=>{
    try {
        await initWavesurferInternal(fileName, blob);
        return true;
    } catch (err) {
        console.log(`Error loading file: ${err}`);
    }
    return false;
};
const initWavesurferInternal = async (fileName, blob)=>{
    let activeRegion = null;
    const ws = (0, _wavesurferJsDefault.default).create({
        container: "#waveform",
        loop: true,
        mediaControls: true
    });
    await ws.load(blob);
    ws.on("interaction", (e)=>{
        activeRegion = null;
        console.log("interaction");
        paused = false;
        setDisableRegionOutTrue();
    });
    const wsRegions = ws.registerPlugin((0, _regionsEsmJsDefault.default).create({
        container: "#waveform",
        loop: true
    }));
    wsRegions.enableDragSelection({
        color: "rgba(255, 0, 0, 0.1)",
        loop: true
    });
    wsRegions.on("region-clicked", (region, e)=>{
        e.stopPropagation();
        const start = region.start / ws.getDuration();
        region.loop = true;
        setDisableRegionOutTrue();
        region.play();
        paused = false;
    });
    wsRegions.on("region-in", async (region)=>{
        activeRegion = region;
        $(".list-group-item").removeClass("active");
        $(`#li-${region.id}`).addClass("active");
    });
    wsRegions.on("region-out", async (region)=>{
        if (disableRegionOut) {
            disableRegionOut = false;
            return;
        }
        if (paused) return;
        paused = true;
        if (Math.abs(region.end - ws.getCurrentTime()) > 0.1) return;
        $(`#li-${region.id}`).removeClass("active");
        const start = region.start / ws.getDuration();
        ws.pause();
        ws.seekTo(start);
        region.loop = true;
        let pause = 0;
        try {
            pause = parseInt($("#pause-secs").val());
        } catch (ignore) {}
        const pauseMillis = pause * 1000;
        disableRegionOutPauseMillis = pauseMillis;
        let timerInterval;
        if (pause) {
            let timeLeftMillis = pauseMillis;
            console.log("pausing for " + pause + " seconds");
            $("#timer").text(timeLeftMillis + "ms");
            $("#timer").css("width", "0%");
            $("#timer-wrapper").show();
            paused = true;
            timerInterval = setInterval(()=>{
                if (!paused) {
                    console.log("interrupted");
                    // Let this be interruptable.
                    // This fucking sucks.
                    if (timerInterval) clearInterval(timerInterval);
                    timerInterval = null;
                    $("#timer-wrapper").hide();
                    return;
                }
                timeLeftMillis -= 100;
                const perc = (pauseMillis - timeLeftMillis) / pauseMillis * 100;
                $("#timer").css("width", perc + "%");
                $("#timer").text(timeLeftMillis + "ms");
                if (timeLeftMillis <= 0) {
                    $("#timer-wrapper").hide();
                    region.play();
                    paused = false;
                    if (timerInterval) clearInterval(timerInterval);
                }
            }, 100);
        } else {
            region.play();
            paused = false;
        }
    });
    const localStorageKey = `regions-${fileName}`;
    const saveRegions = ()=>localStorage.setItem(localStorageKey, JSON.stringify(wsRegions.regions));
    const clearRegions = ()=>{
        localStorage.removeItem(localStorageKey);
        $("#restore-btn").hide();
        $("#clear-btn").hide();
    };
    const clearAllRegions = ()=>{
        Object.keys(localStorage).filter((key)=>key.startsWith("regions-")).forEach((key)=>localStorage.removeItem(key));
        $("#restore-btn").hide();
        $("#clear-btn").hide();
        $("#clear-all-btn").hide();
    };
    const restoreRegions = ()=>JSON.parse(localStorage.getItem(localStorageKey)).forEach((region)=>wsRegions.addRegion(region));
    let regionNum = 1;
    wsRegions.on("region-update-end", (region)=>{
        region.loop = true;
        saveRegions();
    });
    wsRegions.on("region-created", (region)=>{
        region.content = String(regionNum++);
        saveRegions();
        const el = $("<a>").attr("href", "#").addClass("list-group-item").addClass("list-group-item-action").html(`<b>${region.content}</b> - ${region.start.toFixed(2)}s to ${region.end.toFixed(2)}s`).attr("id", `li-${region.id}`);
        $("#regions-list").append(el);
        el.click((e)=>{
            e.preventDefault();
            e.stopPropagation();
            region.play();
            paused = false;
        });
    });
    wsRegions.on("region-created", saveRegions);
    wsRegions.on("region-removed", saveRegions);
    if (localStorage.getItem(localStorageKey)) {
        $("#restore-btn").show();
        $("#restore-btn").click(restoreRegions);
        $("#clear-btn").show();
        $("#clear-btn").click(clearRegions);
    } else {
        $("#restore-btn").hide();
        $("#clear-btn").hide();
    }
    const hasAnySavdRegions = Object.keys(localStorage).some((key)=>key.startsWith("regions-"));
    if (hasAnySavdRegions) {
        $("#clear-all-btn").show();
        $("#clear-all-btn").click(clearAllRegions);
    } else $("#clear-all-btn").hide();
};
const main = async ()=>{
    const params = new URLSearchParams(document.location.search);
    const file = params.get("load");
    if (file) {
        if (await initWavesurfer(file, file)) {
            $(".before-play").hide();
            $(".playing").show();
            return;
        }
        $("#waveform").empty();
        alert(`problem auto loading ${file}`);
        return;
    }
    $(".before-play").show();
    $("#upload").change(()=>{
        const file = document.getElementById("upload").files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = async (e)=>{
            const blob = fileReader.result;
            if (await initWavesurfer(file.name, blob)) {
                $(".before-play").hide();
                $(".playing").show();
                return;
            }
            $("#waveform").empty();
            alert(`problem loading ${file}`);
        };
    });
};
main();

},{"wavesurfer.js":"b0TgV","wavesurfer.js/dist/plugins/regions.esm.js":"1F0no","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b0TgV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _decoderJs = require("./decoder.js");
var _decoderJsDefault = parcelHelpers.interopDefault(_decoderJs);
var _fetcherJs = require("./fetcher.js");
var _fetcherJsDefault = parcelHelpers.interopDefault(_fetcherJs);
var _playerJs = require("./player.js");
var _playerJsDefault = parcelHelpers.interopDefault(_playerJs);
var _rendererJs = require("./renderer.js");
var _rendererJsDefault = parcelHelpers.interopDefault(_rendererJs);
var _timerJs = require("./timer.js");
var _timerJsDefault = parcelHelpers.interopDefault(_timerJs);
var _webaudioJs = require("./webaudio.js");
var _webaudioJsDefault = parcelHelpers.interopDefault(_webaudioJs);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const defaultOptions = {
    waveColor: "#999",
    progressColor: "#555",
    cursorWidth: 1,
    minPxPerSec: 0,
    fillParent: true,
    interact: true,
    dragToSeek: false,
    autoScroll: true,
    autoCenter: true,
    sampleRate: 8000
};
class WaveSurfer extends (0, _playerJsDefault.default) {
    /** Create a new WaveSurfer instance */ static create(options) {
        return new WaveSurfer(options);
    }
    /** Create a new WaveSurfer instance */ constructor(options){
        const media = options.media || (options.backend === "WebAudio" ? new (0, _webaudioJsDefault.default)() : undefined);
        super({
            media,
            mediaControls: options.mediaControls,
            autoplay: options.autoplay,
            playbackRate: options.audioRate
        });
        this.plugins = [];
        this.decodedData = null;
        this.subscriptions = [];
        this.mediaSubscriptions = [];
        this.options = Object.assign({}, defaultOptions, options);
        this.timer = new (0, _timerJsDefault.default)();
        const audioElement = media ? undefined : this.getMediaElement();
        this.renderer = new (0, _rendererJsDefault.default)(this.options, audioElement);
        this.initPlayerEvents();
        this.initRendererEvents();
        this.initTimerEvents();
        this.initPlugins();
        // Init and load async to allow external events to be registered
        Promise.resolve().then(()=>{
            this.emit("init");
            // Load audio if URL or an external media with an src is passed,
            // of render w/o audio if pre-decoded peaks and duration are provided
            const url = this.options.url || this.getSrc() || "";
            if (url || this.options.peaks && this.options.duration) this.load(url, this.options.peaks, this.options.duration);
        });
    }
    initTimerEvents() {
        // The timer fires every 16ms for a smooth progress animation
        this.subscriptions.push(this.timer.on("tick", ()=>{
            const currentTime = this.getCurrentTime();
            this.renderer.renderProgress(currentTime / this.getDuration(), true);
            this.emit("timeupdate", currentTime);
            this.emit("audioprocess", currentTime);
        }));
    }
    initPlayerEvents() {
        if (this.isPlaying()) {
            this.emit("play");
            this.timer.start();
        }
        this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", ()=>{
            const currentTime = this.getCurrentTime();
            this.renderer.renderProgress(currentTime / this.getDuration(), this.isPlaying());
            this.emit("timeupdate", currentTime);
        }), this.onMediaEvent("play", ()=>{
            this.emit("play");
            this.timer.start();
        }), this.onMediaEvent("pause", ()=>{
            this.emit("pause");
            this.timer.stop();
        }), this.onMediaEvent("emptied", ()=>{
            this.timer.stop();
        }), this.onMediaEvent("ended", ()=>{
            this.emit("finish");
        }), this.onMediaEvent("seeking", ()=>{
            this.emit("seeking", this.getCurrentTime());
        }));
    }
    initRendererEvents() {
        this.subscriptions.push(// Seek on click
        this.renderer.on("click", (relativeX, relativeY)=>{
            if (this.options.interact) {
                this.seekTo(relativeX);
                this.emit("interaction", relativeX * this.getDuration());
                this.emit("click", relativeX, relativeY);
            }
        }), // Double click
        this.renderer.on("dblclick", (relativeX, relativeY)=>{
            this.emit("dblclick", relativeX, relativeY);
        }), // Scroll
        this.renderer.on("scroll", (startX, endX)=>{
            const duration = this.getDuration();
            this.emit("scroll", startX * duration, endX * duration);
        }), // Redraw
        this.renderer.on("render", ()=>{
            this.emit("redraw");
        }), // RedrawComplete
        this.renderer.on("rendered", ()=>{
            this.emit("redrawcomplete");
        }));
        // Drag
        {
            let debounce;
            this.subscriptions.push(this.renderer.on("drag", (relativeX)=>{
                if (!this.options.interact) return;
                // Update the visual position
                this.renderer.renderProgress(relativeX);
                // Set the audio position with a debounce
                clearTimeout(debounce);
                debounce = setTimeout(()=>{
                    this.seekTo(relativeX);
                }, this.isPlaying() ? 0 : 200);
                this.emit("interaction", relativeX * this.getDuration());
                this.emit("drag", relativeX);
            }));
        }
    }
    initPlugins() {
        var _a;
        if (!((_a = this.options.plugins) === null || _a === void 0 ? void 0 : _a.length)) return;
        this.options.plugins.forEach((plugin)=>{
            this.registerPlugin(plugin);
        });
    }
    unsubscribePlayerEvents() {
        this.mediaSubscriptions.forEach((unsubscribe)=>unsubscribe());
        this.mediaSubscriptions = [];
    }
    /** Set new wavesurfer options and re-render it */ setOptions(options) {
        this.options = Object.assign({}, this.options, options);
        this.renderer.setOptions(this.options);
        if (options.audioRate) this.setPlaybackRate(options.audioRate);
        if (options.mediaControls != null) this.getMediaElement().controls = options.mediaControls;
    }
    /** Register a wavesurfer.js plugin */ registerPlugin(plugin) {
        plugin._init(this);
        this.plugins.push(plugin);
        // Unregister plugin on destroy
        this.subscriptions.push(plugin.once("destroy", ()=>{
            this.plugins = this.plugins.filter((p)=>p !== plugin);
        }));
        return plugin;
    }
    /** For plugins only: get the waveform wrapper div */ getWrapper() {
        return this.renderer.getWrapper();
    }
    /** Get the current scroll position in pixels */ getScroll() {
        return this.renderer.getScroll();
    }
    /** Get all registered plugins */ getActivePlugins() {
        return this.plugins;
    }
    loadAudio(url, blob, channelData, duration) {
        return __awaiter(this, void 0, void 0, function*() {
            this.emit("load", url);
            if (!this.options.media && this.isPlaying()) this.pause();
            this.decodedData = null;
            // Fetch the entire audio as a blob if pre-decoded data is not provided
            if (!blob && !channelData) {
                const onProgress = (percentage)=>this.emit("loading", percentage);
                blob = yield (0, _fetcherJsDefault.default).fetchBlob(url, onProgress, this.options.fetchParams);
            }
            // Set the mediaelement source
            this.setSrc(url, blob);
            // Wait for the audio duration
            const audioDuration = duration || this.getDuration() || (yield new Promise((resolve)=>{
                this.onceMediaEvent("loadedmetadata", ()=>resolve(this.getDuration()));
            }));
            // Decode the audio data or use user-provided peaks
            if (channelData) this.decodedData = (0, _decoderJsDefault.default).createBuffer(channelData, audioDuration || 0);
            else if (blob) {
                const arrayBuffer = yield blob.arrayBuffer();
                this.decodedData = yield (0, _decoderJsDefault.default).decode(arrayBuffer, this.options.sampleRate);
            }
            if (this.decodedData) {
                this.emit("decode", this.getDuration());
                this.renderer.render(this.decodedData);
            }
            this.emit("ready", this.getDuration());
        });
    }
    /** Load an audio file by URL, with optional pre-decoded audio data */ load(url, channelData, duration) {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.loadAudio(url, undefined, channelData, duration);
        });
    }
    /** Load an audio blob */ loadBlob(blob, channelData, duration) {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.loadAudio("blob", blob, channelData, duration);
        });
    }
    /** Zoom the waveform by a given pixels-per-second factor */ zoom(minPxPerSec) {
        if (!this.decodedData) throw new Error("No audio loaded");
        this.renderer.zoom(minPxPerSec);
        this.emit("zoom", minPxPerSec);
    }
    /** Get the decoded audio data */ getDecodedData() {
        return this.decodedData;
    }
    /** Get decoded peaks */ exportPeaks({ channels = 2, maxLength = 8000, precision = 10000 } = {}) {
        if (!this.decodedData) throw new Error("The audio has not been decoded yet");
        const maxChannels = Math.min(channels, this.decodedData.numberOfChannels);
        const peaks = [];
        for(let i = 0; i < maxChannels; i++){
            const channel = this.decodedData.getChannelData(i);
            const data = [];
            const sampleSize = Math.round(channel.length / maxLength);
            for(let i = 0; i < maxLength; i++){
                const sample = channel.slice(i * sampleSize, (i + 1) * sampleSize);
                let max = 0;
                for(let x = 0; x < sample.length; x++){
                    const n = sample[x];
                    if (Math.abs(n) > Math.abs(max)) max = n;
                }
                data.push(Math.round(max * precision) / precision);
            }
            peaks.push(data);
        }
        return peaks;
    }
    /** Get the duration of the audio in seconds */ getDuration() {
        let duration = super.getDuration() || 0;
        // Fall back to the decoded data duration if the media duration is incorrect
        if ((duration === 0 || duration === Infinity) && this.decodedData) duration = this.decodedData.duration;
        return duration;
    }
    /** Toggle if the waveform should react to clicks */ toggleInteraction(isInteractive) {
        this.options.interact = isInteractive;
    }
    /** Seek to a percentage of audio as [0..1] (0 = beginning, 1 = end) */ seekTo(progress) {
        const time = this.getDuration() * progress;
        this.setTime(time);
    }
    /** Play or pause the audio */ playPause() {
        return __awaiter(this, void 0, void 0, function*() {
            return this.isPlaying() ? this.pause() : this.play();
        });
    }
    /** Stop the audio and go to the beginning */ stop() {
        this.pause();
        this.setTime(0);
    }
    /** Skip N or -N seconds from the current position */ skip(seconds) {
        this.setTime(this.getCurrentTime() + seconds);
    }
    /** Empty the waveform */ empty() {
        this.load("", [
            [
                0
            ]
        ], 0.001);
    }
    /** Set HTML media element */ setMediaElement(element) {
        this.unsubscribePlayerEvents();
        super.setMediaElement(element);
        this.initPlayerEvents();
    }
    exportImage(format = "image/png", quality = 1, type = "dataURL") {
        return __awaiter(this, void 0, void 0, function*() {
            return this.renderer.exportImage(format, quality, type);
        });
    }
    /** Unmount wavesurfer */ destroy() {
        this.emit("destroy");
        this.plugins.forEach((plugin)=>plugin.destroy());
        this.subscriptions.forEach((unsubscribe)=>unsubscribe());
        this.unsubscribePlayerEvents();
        this.timer.destroy();
        this.renderer.destroy();
        super.destroy();
    }
}
exports.default = WaveSurfer;

},{"./decoder.js":"usdwX","./fetcher.js":"1uqf1","./player.js":"kWVqV","./renderer.js":"lQRzS","./timer.js":"chpUx","./webaudio.js":"fzG6I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"usdwX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** Decode an array buffer into an audio buffer */ function decode(audioData, sampleRate) {
    return __awaiter(this, void 0, void 0, function*() {
        const audioCtx = new AudioContext({
            sampleRate
        });
        const decode = audioCtx.decodeAudioData(audioData);
        return decode.finally(()=>audioCtx.close());
    });
}
/** Normalize peaks to -1..1 */ function normalize(channelData) {
    const firstChannel = channelData[0];
    if (firstChannel.some((n)=>n > 1 || n < -1)) {
        const length = firstChannel.length;
        let max = 0;
        for(let i = 0; i < length; i++){
            const absN = Math.abs(firstChannel[i]);
            if (absN > max) max = absN;
        }
        for (const channel of channelData)for(let i = 0; i < length; i++)channel[i] /= max;
    }
    return channelData;
}
/** Create an audio buffer from pre-decoded audio data */ function createBuffer(channelData, duration) {
    // If a single array of numbers is passed, make it an array of arrays
    if (typeof channelData[0] === "number") channelData = [
        channelData
    ];
    // Normalize to -1..1
    normalize(channelData);
    return {
        duration,
        length: channelData[0].length,
        sampleRate: channelData[0].length / duration,
        numberOfChannels: channelData.length,
        getChannelData: (i)=>channelData === null || channelData === void 0 ? void 0 : channelData[i],
        copyFromChannel: AudioBuffer.prototype.copyFromChannel,
        copyToChannel: AudioBuffer.prototype.copyToChannel
    };
}
const Decoder = {
    decode,
    createBuffer
};
exports.default = Decoder;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1uqf1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function watchProgress(response, progressCallback) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!response.body || !response.headers) return;
        const reader = response.body.getReader();
        const contentLength = Number(response.headers.get("Content-Length")) || 0;
        let receivedLength = 0;
        // Process the data
        const processChunk = (value)=>__awaiter(this, void 0, void 0, function*() {
                // Add to the received length
                receivedLength += (value === null || value === void 0 ? void 0 : value.length) || 0;
                const percentage = Math.round(receivedLength / contentLength * 100);
                progressCallback(percentage);
            });
        const read = ()=>__awaiter(this, void 0, void 0, function*() {
                let data;
                try {
                    data = yield reader.read();
                } catch (_a) {
                    // Ignore errors because we can only handle the main response
                    return;
                }
                // Continue reading data until done
                if (!data.done) {
                    processChunk(data.value);
                    yield read();
                }
            });
        read();
    });
}
function fetchBlob(url, progressCallback, requestInit) {
    return __awaiter(this, void 0, void 0, function*() {
        // Fetch the resource
        const response = yield fetch(url, requestInit);
        if (response.status >= 400) throw new Error(`Failed to fetch ${url}: ${response.status} (${response.statusText})`);
        // Read the data to track progress
        watchProgress(response.clone(), progressCallback);
        return response.blob();
    });
}
const Fetcher = {
    fetchBlob
};
exports.default = Fetcher;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kWVqV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventEmitterJs = require("./event-emitter.js");
var _eventEmitterJsDefault = parcelHelpers.interopDefault(_eventEmitterJs);
class Player extends (0, _eventEmitterJsDefault.default) {
    constructor(options){
        super();
        this.isExternalMedia = false;
        if (options.media) {
            this.media = options.media;
            this.isExternalMedia = true;
        } else this.media = document.createElement("audio");
        // Controls
        if (options.mediaControls) this.media.controls = true;
        // Autoplay
        if (options.autoplay) this.media.autoplay = true;
        // Speed
        if (options.playbackRate != null) this.onceMediaEvent("canplay", ()=>{
            if (options.playbackRate != null) this.media.playbackRate = options.playbackRate;
        });
    }
    onMediaEvent(event, callback, options) {
        this.media.addEventListener(event, callback, options);
        return ()=>this.media.removeEventListener(event, callback);
    }
    onceMediaEvent(event, callback) {
        return this.onMediaEvent(event, callback, {
            once: true
        });
    }
    getSrc() {
        return this.media.currentSrc || this.media.src || "";
    }
    revokeSrc() {
        const src = this.getSrc();
        if (src.startsWith("blob:")) URL.revokeObjectURL(src);
    }
    canPlayType(type) {
        return this.media.canPlayType(type) !== "";
    }
    setSrc(url, blob) {
        const src = this.getSrc();
        if (src === url) return;
        this.revokeSrc();
        const newSrc = blob instanceof Blob && this.canPlayType(blob.type) ? URL.createObjectURL(blob) : url;
        this.media.src = newSrc;
    }
    destroy() {
        this.media.pause();
        if (this.isExternalMedia) return;
        this.media.remove();
        this.revokeSrc();
        this.media.src = "";
        // Load resets the media element to its initial state
        this.media.load();
    }
    setMediaElement(element) {
        this.media = element;
    }
    /** Start playing the audio */ play() {
        return this.media.play();
    }
    /** Pause the audio */ pause() {
        this.media.pause();
    }
    /** Check if the audio is playing */ isPlaying() {
        return !this.media.paused && !this.media.ended;
    }
    /** Jumpt to a specific time in the audio (in seconds) */ setTime(time) {
        this.media.currentTime = time;
    }
    /** Get the duration of the audio in seconds */ getDuration() {
        return this.media.duration;
    }
    /** Get the current audio position in seconds */ getCurrentTime() {
        return this.media.currentTime;
    }
    /** Get the audio volume */ getVolume() {
        return this.media.volume;
    }
    /** Set the audio volume */ setVolume(volume) {
        this.media.volume = volume;
    }
    /** Get the audio muted state */ getMuted() {
        return this.media.muted;
    }
    /** Mute or unmute the audio */ setMuted(muted) {
        this.media.muted = muted;
    }
    /** Get the playback speed */ getPlaybackRate() {
        return this.media.playbackRate;
    }
    /** Set the playback speed, pass an optional false to NOT preserve the pitch */ setPlaybackRate(rate, preservePitch) {
        // preservePitch is true by default in most browsers
        if (preservePitch != null) this.media.preservesPitch = preservePitch;
        this.media.playbackRate = rate;
    }
    /** Get the HTML media element */ getMediaElement() {
        return this.media;
    }
    /** Set a sink id to change the audio output device */ setSinkId(sinkId) {
        // See https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/setSinkId
        const media = this.media;
        return media.setSinkId(sinkId);
    }
}
exports.default = Player;

},{"./event-emitter.js":"6A500","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6A500":[function(require,module,exports) {
/** A simple event emitter that can be used to listen to and emit events. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class EventEmitter {
    constructor(){
        this.listeners = {};
    }
    /** Subscribe to an event. Returns an unsubscribe function. */ on(event, listener, options) {
        if (!this.listeners[event]) this.listeners[event] = new Set();
        this.listeners[event].add(listener);
        if (options === null || options === void 0 ? void 0 : options.once) {
            const unsubscribeOnce = ()=>{
                this.un(event, unsubscribeOnce);
                this.un(event, listener);
            };
            this.on(event, unsubscribeOnce);
            return unsubscribeOnce;
        }
        return ()=>this.un(event, listener);
    }
    /** Unsubscribe from an event */ un(event, listener) {
        var _a;
        (_a = this.listeners[event]) === null || _a === void 0 || _a.delete(listener);
    }
    /** Subscribe to an event only once */ once(event, listener) {
        return this.on(event, listener, {
            once: true
        });
    }
    /** Clear all events */ unAll() {
        this.listeners = {};
    }
    /** Emit an event */ emit(eventName, ...args) {
        if (this.listeners[eventName]) this.listeners[eventName].forEach((listener)=>listener(...args));
    }
}
exports.default = EventEmitter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQRzS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _draggableJs = require("./draggable.js");
var _eventEmitterJs = require("./event-emitter.js");
var _eventEmitterJsDefault = parcelHelpers.interopDefault(_eventEmitterJs);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Renderer extends (0, _eventEmitterJsDefault.default) {
    constructor(options, audioElement){
        super();
        this.timeouts = [];
        this.isScrollable = false;
        this.audioData = null;
        this.resizeObserver = null;
        this.lastContainerWidth = 0;
        this.isDragging = false;
        this.options = options;
        const parent = this.parentFromOptionsContainer(options.container);
        this.parent = parent;
        const [div, shadow] = this.initHtml();
        parent.appendChild(div);
        this.container = div;
        this.scrollContainer = shadow.querySelector(".scroll");
        this.wrapper = shadow.querySelector(".wrapper");
        this.canvasWrapper = shadow.querySelector(".canvases");
        this.progressWrapper = shadow.querySelector(".progress");
        this.cursor = shadow.querySelector(".cursor");
        if (audioElement) shadow.appendChild(audioElement);
        this.initEvents();
    }
    parentFromOptionsContainer(container) {
        let parent;
        if (typeof container === "string") parent = document.querySelector(container);
        else if (container instanceof HTMLElement) parent = container;
        if (!parent) throw new Error("Container not found");
        return parent;
    }
    initEvents() {
        const getClickPosition = (e)=>{
            const rect = this.wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientX - rect.left;
            const relativeX = x / rect.width;
            const relativeY = y / rect.height;
            return [
                relativeX,
                relativeY
            ];
        };
        // Add a click listener
        this.wrapper.addEventListener("click", (e)=>{
            const [x, y] = getClickPosition(e);
            this.emit("click", x, y);
        });
        // Add a double click listener
        this.wrapper.addEventListener("dblclick", (e)=>{
            const [x, y] = getClickPosition(e);
            this.emit("dblclick", x, y);
        });
        // Drag
        if (this.options.dragToSeek) this.initDrag();
        // Add a scroll listener
        this.scrollContainer.addEventListener("scroll", ()=>{
            const { scrollLeft, scrollWidth, clientWidth } = this.scrollContainer;
            const startX = scrollLeft / scrollWidth;
            const endX = (scrollLeft + clientWidth) / scrollWidth;
            this.emit("scroll", startX, endX);
        });
        // Re-render the waveform on container resize
        const delay = this.createDelay(100);
        this.resizeObserver = new ResizeObserver(()=>{
            delay(()=>this.onContainerResize());
        });
        this.resizeObserver.observe(this.scrollContainer);
    }
    onContainerResize() {
        const width = this.parent.clientWidth;
        if (width === this.lastContainerWidth && this.options.height !== "auto") return;
        this.lastContainerWidth = width;
        this.reRender();
    }
    initDrag() {
        (0, _draggableJs.makeDraggable)(this.wrapper, // On drag
        (_, __, x)=>{
            this.emit("drag", Math.max(0, Math.min(1, x / this.wrapper.getBoundingClientRect().width)));
        }, // On start drag
        ()=>this.isDragging = true, // On end drag
        ()=>this.isDragging = false);
    }
    getHeight(optionsHeight) {
        const defaultHeight = 128;
        if (optionsHeight == null) return defaultHeight;
        if (!isNaN(Number(optionsHeight))) return Number(optionsHeight);
        if (optionsHeight === "auto") return this.parent.clientHeight || defaultHeight;
        return defaultHeight;
    }
    initHtml() {
        const div = document.createElement("div");
        const shadow = div.attachShadow({
            mode: "open"
        });
        shadow.innerHTML = `
      <style>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `;
        return [
            div,
            shadow
        ];
    }
    /** Wavesurfer itself calls this method. Do not call it manually. */ setOptions(options) {
        if (this.options.container !== options.container) {
            const newParent = this.parentFromOptionsContainer(options.container);
            newParent.appendChild(this.container);
            this.parent = newParent;
        }
        if (options.dragToSeek && !this.options.dragToSeek) this.initDrag();
        this.options = options;
        // Re-render the waveform
        this.reRender();
    }
    getWrapper() {
        return this.wrapper;
    }
    getScroll() {
        return this.scrollContainer.scrollLeft;
    }
    destroy() {
        var _a;
        this.container.remove();
        (_a = this.resizeObserver) === null || _a === void 0 || _a.disconnect();
    }
    createDelay(delayMs = 10) {
        const context = {};
        this.timeouts.push(context);
        return (callback)=>{
            context.timeout && clearTimeout(context.timeout);
            context.timeout = setTimeout(callback, delayMs);
        };
    }
    // Convert array of color values to linear gradient
    convertColorValues(color) {
        if (!Array.isArray(color)) return color || "";
        if (color.length < 2) return color[0] || "";
        const canvasElement = document.createElement("canvas");
        const ctx = canvasElement.getContext("2d");
        const gradientHeight = canvasElement.height * (window.devicePixelRatio || 1);
        const gradient = ctx.createLinearGradient(0, 0, 0, gradientHeight);
        const colorStopPercentage = 1 / (color.length - 1);
        color.forEach((color, index)=>{
            const offset = index * colorStopPercentage;
            gradient.addColorStop(offset, color);
        });
        return gradient;
    }
    renderBarWaveform(channelData, options, ctx, vScale) {
        const topChannel = channelData[0];
        const bottomChannel = channelData[1] || channelData[0];
        const length = topChannel.length;
        const { width, height } = ctx.canvas;
        const halfHeight = height / 2;
        const pixelRatio = window.devicePixelRatio || 1;
        const barWidth = options.barWidth ? options.barWidth * pixelRatio : 1;
        const barGap = options.barGap ? options.barGap * pixelRatio : options.barWidth ? barWidth / 2 : 0;
        const barRadius = options.barRadius || 0;
        const barIndexScale = width / (barWidth + barGap) / length;
        const rectFn = barRadius && "roundRect" in ctx ? "roundRect" : "rect";
        ctx.beginPath();
        let prevX = 0;
        let maxTop = 0;
        let maxBottom = 0;
        for(let i = 0; i <= length; i++){
            const x = Math.round(i * barIndexScale);
            if (x > prevX) {
                const topBarHeight = Math.round(maxTop * halfHeight * vScale);
                const bottomBarHeight = Math.round(maxBottom * halfHeight * vScale);
                const barHeight = topBarHeight + bottomBarHeight || 1;
                // Vertical alignment
                let y = halfHeight - topBarHeight;
                if (options.barAlign === "top") y = 0;
                else if (options.barAlign === "bottom") y = height - barHeight;
                ctx[rectFn](prevX * (barWidth + barGap), y, barWidth, barHeight, barRadius);
                prevX = x;
                maxTop = 0;
                maxBottom = 0;
            }
            const magnitudeTop = Math.abs(topChannel[i] || 0);
            const magnitudeBottom = Math.abs(bottomChannel[i] || 0);
            if (magnitudeTop > maxTop) maxTop = magnitudeTop;
            if (magnitudeBottom > maxBottom) maxBottom = magnitudeBottom;
        }
        ctx.fill();
        ctx.closePath();
    }
    renderLineWaveform(channelData, _options, ctx, vScale) {
        const drawChannel = (index)=>{
            const channel = channelData[index] || channelData[0];
            const length = channel.length;
            const { height } = ctx.canvas;
            const halfHeight = height / 2;
            const hScale = ctx.canvas.width / length;
            ctx.moveTo(0, halfHeight);
            let prevX = 0;
            let max = 0;
            for(let i = 0; i <= length; i++){
                const x = Math.round(i * hScale);
                if (x > prevX) {
                    const h = Math.round(max * halfHeight * vScale) || 1;
                    const y = halfHeight + h * (index === 0 ? -1 : 1);
                    ctx.lineTo(prevX, y);
                    prevX = x;
                    max = 0;
                }
                const value = Math.abs(channel[i] || 0);
                if (value > max) max = value;
            }
            ctx.lineTo(prevX, halfHeight);
        };
        ctx.beginPath();
        drawChannel(0);
        drawChannel(1);
        ctx.fill();
        ctx.closePath();
    }
    renderWaveform(channelData, options, ctx) {
        ctx.fillStyle = this.convertColorValues(options.waveColor);
        // Custom rendering function
        if (options.renderFunction) {
            options.renderFunction(channelData, ctx);
            return;
        }
        // Vertical scaling
        let vScale = options.barHeight || 1;
        if (options.normalize) {
            const max = Array.from(channelData[0]).reduce((max, value)=>Math.max(max, Math.abs(value)), 0);
            vScale = max ? 1 / max : 1;
        }
        // Render waveform as bars
        if (options.barWidth || options.barGap || options.barAlign) {
            this.renderBarWaveform(channelData, options, ctx, vScale);
            return;
        }
        // Render waveform as a polyline
        this.renderLineWaveform(channelData, options, ctx, vScale);
    }
    renderSingleCanvas(channelData, options, width, height, start, end, canvasContainer, progressContainer) {
        const pixelRatio = window.devicePixelRatio || 1;
        const canvas = document.createElement("canvas");
        const length = channelData[0].length;
        canvas.width = Math.round(width * (end - start) / length);
        canvas.height = height * pixelRatio;
        canvas.style.width = `${Math.floor(canvas.width / pixelRatio)}px`;
        canvas.style.height = `${height}px`;
        canvas.style.left = `${Math.floor(start * width / pixelRatio / length)}px`;
        canvasContainer.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        this.renderWaveform(channelData.map((channel)=>channel.slice(start, end)), options, ctx);
        // Draw a progress canvas
        if (canvas.width > 0 && canvas.height > 0) {
            const progressCanvas = canvas.cloneNode();
            const progressCtx = progressCanvas.getContext("2d");
            progressCtx.drawImage(canvas, 0, 0);
            // Set the composition method to draw only where the waveform is drawn
            progressCtx.globalCompositeOperation = "source-in";
            progressCtx.fillStyle = this.convertColorValues(options.progressColor);
            // This rectangle acts as a mask thanks to the composition method
            progressCtx.fillRect(0, 0, canvas.width, canvas.height);
            progressContainer.appendChild(progressCanvas);
        }
    }
    renderChannel(channelData, options, width, done) {
        // A container for canvases
        const canvasContainer = document.createElement("div");
        const height = this.getHeight(options.height);
        canvasContainer.style.height = `${height}px`;
        this.canvasWrapper.style.minHeight = `${height}px`;
        this.canvasWrapper.appendChild(canvasContainer);
        // A container for progress canvases
        const progressContainer = canvasContainer.cloneNode();
        this.progressWrapper.appendChild(progressContainer);
        // Determine the currently visible part of the waveform
        const { scrollLeft, scrollWidth, clientWidth } = this.scrollContainer;
        const len = channelData[0].length;
        const scale = len / scrollWidth;
        let viewportWidth = Math.min(Renderer.MAX_CANVAS_WIDTH, clientWidth);
        // Adjust width to avoid gaps between canvases when using bars
        if (options.barWidth || options.barGap) {
            const barWidth = options.barWidth || 0.5;
            const barGap = options.barGap || barWidth / 2;
            const totalBarWidth = barWidth + barGap;
            if (viewportWidth % totalBarWidth !== 0) viewportWidth = Math.floor(viewportWidth / totalBarWidth) * totalBarWidth;
        }
        const start = Math.floor(Math.abs(scrollLeft) * scale);
        const end = Math.floor(start + viewportWidth * scale);
        const viewportLen = end - start;
        // Draw a portion of the waveform from start peak to end peak
        const draw = (start, end)=>{
            this.renderSingleCanvas(channelData, options, width, height, Math.max(0, start), Math.min(end, len), canvasContainer, progressContainer);
        };
        const status = {
            head: false,
            tail: end >= len
        };
        const complete = (type)=>{
            status[type] = true;
            if (status.head && status.tail) done();
        };
        // Draw the waveform in viewport chunks, each with a delay
        const headDelay = this.createDelay();
        const tailDelay = this.createDelay();
        const renderHead = (fromIndex, toIndex)=>{
            draw(fromIndex, toIndex);
            if (fromIndex > 0) headDelay(()=>{
                renderHead(fromIndex - viewportLen, toIndex - viewportLen);
            });
            else complete("head");
        };
        const renderTail = (fromIndex, toIndex)=>{
            draw(fromIndex, toIndex);
            if (toIndex < len) tailDelay(()=>{
                renderTail(fromIndex + viewportLen, toIndex + viewportLen);
            });
            else complete("tail");
        };
        renderHead(start, end);
        if (end < len) renderTail(end, end + viewportLen);
    }
    render(audioData) {
        // Clear previous timeouts
        this.timeouts.forEach((context)=>context.timeout && clearTimeout(context.timeout));
        this.timeouts = [];
        // Clear the canvases
        this.canvasWrapper.innerHTML = "";
        this.progressWrapper.innerHTML = "";
        // Width
        if (this.options.width != null) this.scrollContainer.style.width = typeof this.options.width === "number" ? `${this.options.width}px` : this.options.width;
        // Determine the width of the waveform
        const pixelRatio = window.devicePixelRatio || 1;
        const parentWidth = this.scrollContainer.clientWidth;
        const scrollWidth = Math.ceil(audioData.duration * (this.options.minPxPerSec || 0));
        // Whether the container should scroll
        this.isScrollable = scrollWidth > parentWidth;
        const useParentWidth = this.options.fillParent && !this.isScrollable;
        // Width of the waveform in pixels
        const width = (useParentWidth ? parentWidth : scrollWidth) * pixelRatio;
        // Set the width of the wrapper
        this.wrapper.style.width = useParentWidth ? "100%" : `${scrollWidth}px`;
        // Set additional styles
        this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden";
        this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar);
        this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`;
        this.cursor.style.width = `${this.options.cursorWidth}px`;
        // Render the waveform
        if (this.options.splitChannels) {
            let counter = 0;
            const done = ()=>{
                counter++;
                if (counter === audioData.numberOfChannels) this.emit("rendered");
            };
            // Render a waveform for each channel
            for(let i = 0; i < audioData.numberOfChannels; i++){
                const options = Object.assign(Object.assign({}, this.options), this.options.splitChannels[i]);
                this.renderChannel([
                    audioData.getChannelData(i)
                ], options, width, done);
            }
        } else {
            // Render a single waveform for the first two channels (left and right)
            const channels = [
                audioData.getChannelData(0)
            ];
            if (audioData.numberOfChannels > 1) channels.push(audioData.getChannelData(1));
            this.renderChannel(channels, this.options, width, ()=>this.emit("rendered"));
        }
        this.audioData = audioData;
        this.emit("render");
    }
    reRender() {
        // Return if the waveform has not been rendered yet
        if (!this.audioData) return;
        // Remember the current cursor position
        const { scrollWidth } = this.scrollContainer;
        const oldCursorPosition = this.progressWrapper.clientWidth;
        // Re-render the waveform
        this.render(this.audioData);
        // Adjust the scroll position so that the cursor stays in the same place
        if (this.isScrollable && scrollWidth !== this.scrollContainer.scrollWidth) {
            const newCursorPosition = this.progressWrapper.clientWidth;
            this.scrollContainer.scrollLeft += newCursorPosition - oldCursorPosition;
        }
    }
    zoom(minPxPerSec) {
        this.options.minPxPerSec = minPxPerSec;
        this.reRender();
    }
    scrollIntoView(progress, isPlaying = false) {
        const { scrollLeft, scrollWidth, clientWidth } = this.scrollContainer;
        const progressWidth = progress * scrollWidth;
        const startEdge = scrollLeft;
        const endEdge = scrollLeft + clientWidth;
        const middle = clientWidth / 2;
        if (this.isDragging) {
            // Scroll when dragging close to the edge of the viewport
            const minGap = 30;
            if (progressWidth + minGap > endEdge) this.scrollContainer.scrollLeft += minGap;
            else if (progressWidth - minGap < startEdge) this.scrollContainer.scrollLeft -= minGap;
        } else {
            if (progressWidth < startEdge || progressWidth > endEdge) this.scrollContainer.scrollLeft = progressWidth - (this.options.autoCenter ? middle : 0);
            // Keep the cursor centered when playing
            const center = progressWidth - scrollLeft - middle;
            if (isPlaying && this.options.autoCenter && center > 0) this.scrollContainer.scrollLeft += Math.min(center, 10);
        }
        // Emit the scroll event
        {
            const newScroll = this.scrollContainer.scrollLeft;
            const startX = newScroll / scrollWidth;
            const endX = (newScroll + clientWidth) / scrollWidth;
            this.emit("scroll", startX, endX);
        }
    }
    renderProgress(progress, isPlaying) {
        if (isNaN(progress)) return;
        const percents = progress * 100;
        this.canvasWrapper.style.clipPath = `polygon(${percents}% 0, 100% 0, 100% 100%, ${percents}% 100%)`;
        this.progressWrapper.style.width = `${percents}%`;
        this.cursor.style.left = `${percents}%`;
        this.cursor.style.marginLeft = Math.round(percents) === 100 ? `-${this.options.cursorWidth}px` : "";
        if (this.isScrollable && this.options.autoScroll) this.scrollIntoView(progress, isPlaying);
    }
    exportImage(format, quality, type) {
        return __awaiter(this, void 0, void 0, function*() {
            const canvases = this.canvasWrapper.querySelectorAll("canvas");
            if (!canvases.length) throw new Error("No waveform data");
            // Data URLs
            if (type === "dataURL") {
                const images = Array.from(canvases).map((canvas)=>canvas.toDataURL(format, quality));
                return Promise.resolve(images);
            }
            // Blobs
            return Promise.all(Array.from(canvases).map((canvas)=>{
                return new Promise((resolve, reject)=>{
                    canvas.toBlob((blob)=>{
                        blob ? resolve(blob) : reject(new Error("Could not export image"));
                    }, format, quality);
                });
            }));
        });
    }
}
Renderer.MAX_CANVAS_WIDTH = 4000;
exports.default = Renderer;

},{"./draggable.js":"iBk26","./event-emitter.js":"6A500","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBk26":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeDraggable", ()=>makeDraggable);
function makeDraggable(element, onDrag, onStart, onEnd, threshold = 3, mouseButton = 0) {
    if (!element) return ()=>void 0;
    let unsubscribeDocument = ()=>void 0;
    const onPointerDown = (event)=>{
        if (event.button !== mouseButton) return;
        event.preventDefault();
        event.stopPropagation();
        let startX = event.clientX;
        let startY = event.clientY;
        let isDragging = false;
        const onPointerMove = (event)=>{
            event.preventDefault();
            event.stopPropagation();
            const x = event.clientX;
            const y = event.clientY;
            const dx = x - startX;
            const dy = y - startY;
            if (isDragging || Math.abs(dx) > threshold || Math.abs(dy) > threshold) {
                const rect = element.getBoundingClientRect();
                const { left, top } = rect;
                if (!isDragging) {
                    onStart === null || onStart === void 0 || onStart(startX - left, startY - top);
                    isDragging = true;
                }
                onDrag(dx, dy, x - left, y - top);
                startX = x;
                startY = y;
            }
        };
        const onPointerUp = ()=>{
            if (isDragging) onEnd === null || onEnd === void 0 || onEnd();
            unsubscribeDocument();
        };
        const onPointerLeave = (e)=>{
            // Listen to events only on the document and not on inner elements
            if (!e.relatedTarget || e.relatedTarget === document.documentElement) onPointerUp();
        };
        const onClick = (event)=>{
            if (isDragging) {
                event.stopPropagation();
                event.preventDefault();
            }
        };
        const onTouchMove = (event)=>{
            if (isDragging) event.preventDefault();
        };
        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp);
        document.addEventListener("pointerout", onPointerLeave);
        document.addEventListener("pointercancel", onPointerLeave);
        document.addEventListener("touchmove", onTouchMove, {
            passive: false
        });
        document.addEventListener("click", onClick, {
            capture: true
        });
        unsubscribeDocument = ()=>{
            document.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("pointerup", onPointerUp);
            document.removeEventListener("pointerout", onPointerLeave);
            document.removeEventListener("pointercancel", onPointerLeave);
            document.removeEventListener("touchmove", onTouchMove);
            setTimeout(()=>{
                document.removeEventListener("click", onClick, {
                    capture: true
                });
            }, 10);
        };
    };
    element.addEventListener("pointerdown", onPointerDown);
    return ()=>{
        unsubscribeDocument();
        element.removeEventListener("pointerdown", onPointerDown);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chpUx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventEmitterJs = require("./event-emitter.js");
var _eventEmitterJsDefault = parcelHelpers.interopDefault(_eventEmitterJs);
class Timer extends (0, _eventEmitterJsDefault.default) {
    constructor(){
        super(...arguments);
        this.unsubscribe = ()=>undefined;
    }
    start() {
        this.unsubscribe = this.on("tick", ()=>{
            requestAnimationFrame(()=>{
                this.emit("tick");
            });
        });
        this.emit("tick");
    }
    stop() {
        this.unsubscribe();
    }
    destroy() {
        this.unsubscribe();
    }
}
exports.default = Timer;

},{"./event-emitter.js":"6A500","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fzG6I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventEmitterJs = require("./event-emitter.js");
var _eventEmitterJsDefault = parcelHelpers.interopDefault(_eventEmitterJs);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * A Web Audio buffer player emulating the behavior of an HTML5 Audio element.
 */ class WebAudioPlayer extends (0, _eventEmitterJsDefault.default) {
    constructor(audioContext = new AudioContext()){
        super();
        this.bufferNode = null;
        this.autoplay = false;
        this.playStartTime = 0;
        this.playedDuration = 0;
        this._muted = false;
        this.buffer = null;
        this.currentSrc = "";
        this.paused = true;
        this.crossOrigin = null;
        /** Subscribe to an event. Returns an unsubscribe function. */ this.addEventListener = this.on;
        /** Unsubscribe from an event */ this.removeEventListener = this.un;
        this.audioContext = audioContext;
        this.gainNode = this.audioContext.createGain();
        this.gainNode.connect(this.audioContext.destination);
    }
    load() {
        return __awaiter(this, void 0, void 0, function*() {
            return;
        });
    }
    get src() {
        return this.currentSrc;
    }
    set src(value) {
        this.currentSrc = value;
        if (!value) {
            this.buffer = null;
            this.emit("emptied");
            return;
        }
        fetch(value).then((response)=>response.arrayBuffer()).then((arrayBuffer)=>{
            if (this.currentSrc !== value) return null;
            return this.audioContext.decodeAudioData(arrayBuffer);
        }).then((audioBuffer)=>{
            if (this.currentSrc !== value) return;
            this.buffer = audioBuffer;
            this.emit("loadedmetadata");
            this.emit("canplay");
            if (this.autoplay) this.play();
        });
    }
    _play() {
        var _a;
        if (!this.paused) return;
        this.paused = false;
        (_a = this.bufferNode) === null || _a === void 0 || _a.disconnect();
        this.bufferNode = this.audioContext.createBufferSource();
        this.bufferNode.buffer = this.buffer;
        this.bufferNode.connect(this.gainNode);
        if (this.playedDuration >= this.duration) this.playedDuration = 0;
        this.bufferNode.start(this.audioContext.currentTime, this.playedDuration);
        this.playStartTime = this.audioContext.currentTime;
        this.bufferNode.onended = ()=>{
            if (this.currentTime >= this.duration) {
                this.pause();
                this.emit("ended");
            }
        };
    }
    _pause() {
        var _a;
        if (this.paused) return;
        this.paused = true;
        (_a = this.bufferNode) === null || _a === void 0 || _a.stop();
        this.playedDuration += this.audioContext.currentTime - this.playStartTime;
    }
    play() {
        return __awaiter(this, void 0, void 0, function*() {
            this._play();
            this.emit("play");
        });
    }
    pause() {
        this._pause();
        this.emit("pause");
    }
    stopAt(timeSeconds) {
        var _a, _b;
        const delay = timeSeconds - this.currentTime;
        (_a = this.bufferNode) === null || _a === void 0 || _a.stop(this.audioContext.currentTime + delay);
        (_b = this.bufferNode) === null || _b === void 0 || _b.addEventListener("ended", ()=>{
            this.bufferNode = null;
            this.pause();
        }, {
            once: true
        });
    }
    setSinkId(deviceId) {
        return __awaiter(this, void 0, void 0, function*() {
            const ac = this.audioContext;
            return ac.setSinkId(deviceId);
        });
    }
    get playbackRate() {
        var _a, _b;
        return (_b = (_a = this.bufferNode) === null || _a === void 0 ? void 0 : _a.playbackRate.value) !== null && _b !== void 0 ? _b : 1;
    }
    set playbackRate(value) {
        if (this.bufferNode) this.bufferNode.playbackRate.value = value;
    }
    get currentTime() {
        return this.paused ? this.playedDuration : this.playedDuration + this.audioContext.currentTime - this.playStartTime;
    }
    set currentTime(value) {
        this.emit("seeking");
        if (this.paused) this.playedDuration = value;
        else {
            this._pause();
            this.playedDuration = value;
            this._play();
        }
        this.emit("timeupdate");
    }
    get duration() {
        var _a;
        return ((_a = this.buffer) === null || _a === void 0 ? void 0 : _a.duration) || 0;
    }
    get volume() {
        return this.gainNode.gain.value;
    }
    set volume(value) {
        this.gainNode.gain.value = value;
        this.emit("volumechange");
    }
    get muted() {
        return this._muted;
    }
    set muted(value) {
        if (this._muted === value) return;
        this._muted = value;
        if (this._muted) this.gainNode.disconnect();
        else this.gainNode.connect(this.audioContext.destination);
    }
    canPlayType(mimeType) {
        return /^(audio|video)\//.test(mimeType);
    }
    /** Get the GainNode used to play the audio. Can be used to attach filters. */ getGainNode() {
        return this.gainNode;
    }
    /** Get decoded audio */ getChannelData() {
        const channels = [];
        if (!this.buffer) return channels;
        const numChannels = this.buffer.numberOfChannels;
        for(let i = 0; i < numChannels; i++)channels.push(this.buffer.getChannelData(i));
        return channels;
    }
}
exports.default = WebAudioPlayer;

},{"./event-emitter.js":"6A500","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1F0no":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>r);
class t {
    constructor(){
        this.listeners = {};
    }
    on(t, e, i) {
        if (this.listeners[t] || (this.listeners[t] = new Set), this.listeners[t].add(e), null == i ? void 0 : i.once) {
            const i = ()=>{
                this.un(t, i), this.un(t, e);
            };
            return this.on(t, i), i;
        }
        return ()=>this.un(t, e);
    }
    un(t, e) {
        var i;
        null === (i = this.listeners[t]) || void 0 === i || i.delete(e);
    }
    once(t, e) {
        return this.on(t, e, {
            once: !0
        });
    }
    unAll() {
        this.listeners = {};
    }
    emit(t, ...e) {
        this.listeners[t] && this.listeners[t].forEach((t)=>t(...e));
    }
}
class e extends t {
    constructor(t){
        super(), this.subscriptions = [], this.options = t;
    }
    onInit() {}
    _init(t) {
        this.wavesurfer = t, this.onInit();
    }
    destroy() {
        this.emit("destroy"), this.subscriptions.forEach((t)=>t());
    }
}
function i(t, e, i, n, s = 3, o = 0) {
    if (!t) return ()=>{};
    let r = ()=>{};
    const a = (a)=>{
        if (a.button !== o) return;
        a.preventDefault(), a.stopPropagation();
        let l = a.clientX, h = a.clientY, d = !1;
        const c = (n)=>{
            n.preventDefault(), n.stopPropagation();
            const o = n.clientX, r = n.clientY, a = o - l, c = r - h;
            if (d || Math.abs(a) > s || Math.abs(c) > s) {
                const n = t.getBoundingClientRect(), { left: s, top: u } = n;
                d || (null == i || i(l - s, h - u), d = !0), e(a, c, o - s, r - u), l = o, h = r;
            }
        }, u = ()=>{
            d && (null == n || n()), r();
        }, g = (t)=>{
            t.relatedTarget && t.relatedTarget !== document.documentElement || u();
        }, v = (t)=>{
            d && (t.stopPropagation(), t.preventDefault());
        }, p = (t)=>{
            d && t.preventDefault();
        };
        document.addEventListener("pointermove", c), document.addEventListener("pointerup", u), document.addEventListener("pointerout", g), document.addEventListener("pointercancel", g), document.addEventListener("touchmove", p, {
            passive: !1
        }), document.addEventListener("click", v, {
            capture: !0
        }), r = ()=>{
            document.removeEventListener("pointermove", c), document.removeEventListener("pointerup", u), document.removeEventListener("pointerout", g), document.removeEventListener("pointercancel", g), document.removeEventListener("touchmove", p), setTimeout(()=>{
                document.removeEventListener("click", v, {
                    capture: !0
                });
            }, 10);
        };
    };
    return t.addEventListener("pointerdown", a), ()=>{
        r(), t.removeEventListener("pointerdown", a);
    };
}
function n(t, e) {
    const i = e.xmlns ? document.createElementNS(e.xmlns, t) : document.createElement(t);
    for (const [t, s] of Object.entries(e))if ("children" === t) for (const [t, s] of Object.entries(e))"string" == typeof s ? i.appendChild(document.createTextNode(s)) : i.appendChild(n(t, s));
    else "style" === t ? Object.assign(i.style, s) : "textContent" === t ? i.textContent = s : i.setAttribute(t, s.toString());
    return i;
}
function s(t, e, i) {
    const s = n(t, e || {});
    return null == i || i.appendChild(s), s;
}
class o extends t {
    constructor(t, e, i = 0){
        var n, s, o, r, a, l, h, d;
        super(), this.totalDuration = e, this.numberOfChannels = i, this.minLength = 0, this.maxLength = 1 / 0, this.contentEditable = !1, this.id = t.id || `region-${Math.random().toString(32).slice(2)}`, this.start = this.clampPosition(t.start), this.end = this.clampPosition(null !== (n = t.end) && void 0 !== n ? n : t.start), this.drag = null === (s = t.drag) || void 0 === s || s, this.resize = null === (o = t.resize) || void 0 === o || o, this.color = null !== (r = t.color) && void 0 !== r ? r : "rgba(0, 0, 0, 0.1)", this.minLength = null !== (a = t.minLength) && void 0 !== a ? a : this.minLength, this.maxLength = null !== (l = t.maxLength) && void 0 !== l ? l : this.maxLength, this.channelIdx = null !== (h = t.channelIdx) && void 0 !== h ? h : -1, this.contentEditable = null !== (d = t.contentEditable) && void 0 !== d ? d : this.contentEditable, this.element = this.initElement(), this.setContent(t.content), this.setPart(), this.renderPosition(), this.initMouseEvents();
    }
    clampPosition(t) {
        return Math.max(0, Math.min(this.totalDuration, t));
    }
    setPart() {
        const t = this.start === this.end;
        this.element.setAttribute("part", `${t ? "marker" : "region"} ${this.id}`);
    }
    addResizeHandles(t) {
        const e = {
            position: "absolute",
            zIndex: "2",
            width: "6px",
            height: "100%",
            top: "0",
            cursor: "ew-resize",
            wordBreak: "keep-all"
        }, n = s("div", {
            part: "region-handle region-handle-left",
            style: Object.assign(Object.assign({}, e), {
                left: "0",
                borderLeft: "2px solid rgba(0, 0, 0, 0.5)",
                borderRadius: "2px 0 0 2px"
            })
        }, t), o = s("div", {
            part: "region-handle region-handle-right",
            style: Object.assign(Object.assign({}, e), {
                right: "0",
                borderRight: "2px solid rgba(0, 0, 0, 0.5)",
                borderRadius: "0 2px 2px 0"
            })
        }, t);
        i(n, (t)=>this.onResize(t, "start"), ()=>null, ()=>this.onEndResizing(), 1), i(o, (t)=>this.onResize(t, "end"), ()=>null, ()=>this.onEndResizing(), 1);
    }
    removeResizeHandles(t) {
        const e = t.querySelector('[part*="region-handle-left"]'), i = t.querySelector('[part*="region-handle-right"]');
        e && t.removeChild(e), i && t.removeChild(i);
    }
    initElement() {
        const t = this.start === this.end;
        let e = 0, i = 100;
        this.channelIdx >= 0 && this.channelIdx < this.numberOfChannels && (i = 100 / this.numberOfChannels, e = i * this.channelIdx);
        const n = s("div", {
            style: {
                position: "absolute",
                top: `${e}%`,
                height: `${i}%`,
                backgroundColor: t ? "none" : this.color,
                borderLeft: t ? "2px solid " + this.color : "none",
                borderRadius: "2px",
                boxSizing: "border-box",
                transition: "background-color 0.2s ease",
                cursor: this.drag ? "grab" : "default",
                pointerEvents: "all"
            }
        });
        return !t && this.resize && this.addResizeHandles(n), n;
    }
    renderPosition() {
        const t = this.start / this.totalDuration, e = (this.totalDuration - this.end) / this.totalDuration;
        this.element.style.left = 100 * t + "%", this.element.style.right = 100 * e + "%";
    }
    toggleCursor(t) {
        this.drag && (this.element.style.cursor = t ? "grabbing" : "grab");
    }
    initMouseEvents() {
        const { element: t } = this;
        t && (t.addEventListener("click", (t)=>this.emit("click", t)), t.addEventListener("mouseenter", (t)=>this.emit("over", t)), t.addEventListener("mouseleave", (t)=>this.emit("leave", t)), t.addEventListener("dblclick", (t)=>this.emit("dblclick", t)), t.addEventListener("pointerdown", ()=>this.toggleCursor(!0)), t.addEventListener("pointerup", ()=>this.toggleCursor(!1)), i(t, (t)=>this.onMove(t), ()=>this.toggleCursor(!0), ()=>{
            this.toggleCursor(!1), this.drag && this.emit("update-end");
        }), this.contentEditable && this.content && (this.content.addEventListener("click", (t)=>this.onContentClick(t)), this.content.addEventListener("blur", ()=>this.onContentBlur())));
    }
    _onUpdate(t, e) {
        if (!this.element.parentElement) return;
        const { width: i } = this.element.parentElement.getBoundingClientRect(), n = t / i * this.totalDuration, s = e && "start" !== e ? this.start : this.start + n, o = e && "end" !== e ? this.end : this.end + n, r = o - s;
        s >= 0 && o <= this.totalDuration && s <= o && r >= this.minLength && r <= this.maxLength && (this.start = s, this.end = o, this.renderPosition(), this.emit("update"));
    }
    onMove(t) {
        this.drag && this._onUpdate(t);
    }
    onResize(t, e) {
        this.resize && this._onUpdate(t, e);
    }
    onEndResizing() {
        this.resize && this.emit("update-end");
    }
    onContentClick(t) {
        t.stopPropagation();
        t.target.focus(), this.emit("click", t);
    }
    onContentBlur() {
        this.emit("update-end");
    }
    _setTotalDuration(t) {
        this.totalDuration = t, this.renderPosition();
    }
    play() {
        this.emit("play");
    }
    setContent(t) {
        var e;
        if (null === (e = this.content) || void 0 === e || e.remove(), t) {
            if ("string" == typeof t) {
                const e = this.start === this.end;
                this.content = s("div", {
                    style: {
                        padding: `0.2em ${e ? .2 : .4}em`,
                        display: "inline-block"
                    },
                    textContent: t
                });
            } else this.content = t;
            this.contentEditable && (this.content.contentEditable = "true"), this.content.setAttribute("part", "region-content"), this.element.appendChild(this.content);
        } else this.content = void 0;
    }
    setOptions(t) {
        var e, i;
        if (t.color && (this.color = t.color, this.element.style.backgroundColor = this.color), void 0 !== t.drag && (this.drag = t.drag, this.element.style.cursor = this.drag ? "grab" : "default"), void 0 !== t.start || void 0 !== t.end) {
            const n = this.start === this.end;
            this.start = this.clampPosition(null !== (e = t.start) && void 0 !== e ? e : this.start), this.end = this.clampPosition(null !== (i = t.end) && void 0 !== i ? i : n ? this.start : this.end), this.renderPosition(), this.setPart();
        }
        if (t.content && this.setContent(t.content), t.id && (this.id = t.id, this.setPart()), void 0 !== t.resize && t.resize !== this.resize) {
            const e = this.start === this.end;
            this.resize = t.resize, this.resize && !e ? this.addResizeHandles(this.element) : this.removeResizeHandles(this.element);
        }
    }
    remove() {
        this.emit("remove"), this.element.remove(), this.element = null;
    }
}
class r extends e {
    constructor(t){
        super(t), this.regions = [], this.regionsContainer = this.initRegionsContainer();
    }
    static create(t) {
        return new r(t);
    }
    onInit() {
        if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
        this.wavesurfer.getWrapper().appendChild(this.regionsContainer);
        let t = [];
        this.subscriptions.push(this.wavesurfer.on("timeupdate", (e)=>{
            const i = this.regions.filter((t)=>t.start <= e && (t.end === t.start ? t.start + .05 : t.end) >= e);
            i.forEach((e)=>{
                t.includes(e) || this.emit("region-in", e);
            }), t.forEach((t)=>{
                i.includes(t) || this.emit("region-out", t);
            }), t = i;
        }));
    }
    initRegionsContainer() {
        return s("div", {
            style: {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: "3",
                pointerEvents: "none"
            }
        });
    }
    getRegions() {
        return this.regions;
    }
    avoidOverlapping(t) {
        if (!t.content) return;
        const e = t.content, i = e.getBoundingClientRect(), n = this.regions.map((e)=>{
            if (e === t || !e.content) return 0;
            const n = e.content.getBoundingClientRect();
            return i.left < n.left + n.width && n.left < i.left + i.width ? n.height : 0;
        }).reduce((t, e)=>t + e, 0);
        e.style.marginTop = `${n}px`;
    }
    adjustScroll(t) {
        var e, i;
        const n = null === (i = null === (e = this.wavesurfer) || void 0 === e ? void 0 : e.getWrapper()) || void 0 === i ? void 0 : i.parentElement;
        if (!n) return;
        const { clientWidth: s, scrollWidth: o } = n;
        if (o <= s) return;
        const r = n.getBoundingClientRect(), a = t.element.getBoundingClientRect(), l = a.left - r.left, h = a.right - r.left;
        l < 0 ? n.scrollLeft += l : h > s && (n.scrollLeft += h - s);
    }
    saveRegion(t) {
        this.regionsContainer.appendChild(t.element), this.avoidOverlapping(t), this.regions.push(t);
        const e = [
            t.on("update", ()=>{
                this.adjustScroll(t);
            }),
            t.on("update-end", ()=>{
                this.avoidOverlapping(t), this.emit("region-updated", t);
            }),
            t.on("play", ()=>{
                var e, i;
                null === (e = this.wavesurfer) || void 0 === e || e.play(), null === (i = this.wavesurfer) || void 0 === i || i.setTime(t.start);
            }),
            t.on("click", (e)=>{
                this.emit("region-clicked", t, e);
            }),
            t.on("dblclick", (e)=>{
                this.emit("region-double-clicked", t, e);
            }),
            t.once("remove", ()=>{
                e.forEach((t)=>t()), this.regions = this.regions.filter((e)=>e !== t), this.emit("region-removed", t);
            })
        ];
        this.subscriptions.push(...e), this.emit("region-created", t);
    }
    addRegion(t) {
        var e, i;
        if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
        const n = this.wavesurfer.getDuration(), s = null === (i = null === (e = this.wavesurfer) || void 0 === e ? void 0 : e.getDecodedData()) || void 0 === i ? void 0 : i.numberOfChannels, r = new o(t, n, s);
        return n ? this.saveRegion(r) : this.subscriptions.push(this.wavesurfer.once("ready", (t)=>{
            r._setTotalDuration(t), this.saveRegion(r);
        })), r;
    }
    enableDragSelection(t, e = 3) {
        var n;
        const s = null === (n = this.wavesurfer) || void 0 === n ? void 0 : n.getWrapper();
        if (!(s && s instanceof HTMLElement)) return ()=>{};
        let r = null, a = 0;
        return i(s, (t, e, i)=>{
            r && r._onUpdate(t, i > a ? "end" : "start");
        }, (e)=>{
            var i, n;
            if (a = e, !this.wavesurfer) return;
            const s = this.wavesurfer.getDuration(), l = null === (n = null === (i = this.wavesurfer) || void 0 === i ? void 0 : i.getDecodedData()) || void 0 === n ? void 0 : n.numberOfChannels, { width: h } = this.wavesurfer.getWrapper().getBoundingClientRect(), d = e / h * s, c = (e + 5) / h * s;
            r = new o(Object.assign(Object.assign({}, t), {
                start: d,
                end: c
            }), s, l), this.regionsContainer.appendChild(r.element);
        }, ()=>{
            r && (this.saveRegion(r), r = null);
        }, e);
    }
    clearRegions() {
        this.regions.forEach((t)=>t.remove());
    }
    destroy() {
        this.clearRegions(), super.destroy(), this.regionsContainer.remove();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4rkIz","8lqZg"], "8lqZg", "parcelRequire421c")

//# sourceMappingURL=index.975ef6c8.js.map

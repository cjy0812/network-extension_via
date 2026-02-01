// ==UserScript==
// @name               network-extension-for-gkd
// @name:zh-CN         网络扩展 - GKD专用
// @namespace          https://github.com/lisonge
// @version            1.0.8
// @author             lisonge
// @description        Inject GM_XHR to GKD Website
// @description:zh-CN  注入GM_XHR到GKD网站
// @icon               https://vitejs.dev/logo.svg
// @homepageURL        https://github.com/gkd-kit/network-extension
// @match              https://i.gkd.li/*
// @connect            *
// @grant              GM_xmlhttpRequest
// @grant              unsafeWindow
// @noframes
// @run-at             document-start
// ==/UserScript==

(function () {
  'use strict';

  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();

  // 直接注入到目标网站，无需用户手动选择
  _unsafeWindow.__NetworkExtension__ = {
    GM_xmlhttpRequest: _GM_xmlhttpRequest
  };

  // 可选：在控制台输出提示信息
  console.log('Network Extension for GKD has been injected successfully!');

})();

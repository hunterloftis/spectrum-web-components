(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{704:function(module,exports,__webpack_require__){!function(){"use strict";function applyFocusVisiblePolyfill(scope){var hadKeyboardEvent=!0,hadFocusVisibleRecently=!1,hadFocusVisibleRecentlyTimeout=null,inputTypesWhitelist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function isValidFocusTarget(el){return!!(el&&el!==document&&"HTML"!==el.nodeName&&"BODY"!==el.nodeName&&"classList"in el&&"contains"in el.classList)}function addFocusVisibleClass(el){el.classList.contains("focus-visible")||(el.classList.add("focus-visible"),el.setAttribute("data-focus-visible-added",""))}function onPointerDown(e){hadKeyboardEvent=!1}function addInitialPointerMoveListeners(){document.addEventListener("mousemove",onInitialPointerMove),document.addEventListener("mousedown",onInitialPointerMove),document.addEventListener("mouseup",onInitialPointerMove),document.addEventListener("pointermove",onInitialPointerMove),document.addEventListener("pointerdown",onInitialPointerMove),document.addEventListener("pointerup",onInitialPointerMove),document.addEventListener("touchmove",onInitialPointerMove),document.addEventListener("touchstart",onInitialPointerMove),document.addEventListener("touchend",onInitialPointerMove)}function onInitialPointerMove(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(hadKeyboardEvent=!1,function removeInitialPointerMoveListeners(){document.removeEventListener("mousemove",onInitialPointerMove),document.removeEventListener("mousedown",onInitialPointerMove),document.removeEventListener("mouseup",onInitialPointerMove),document.removeEventListener("pointermove",onInitialPointerMove),document.removeEventListener("pointerdown",onInitialPointerMove),document.removeEventListener("pointerup",onInitialPointerMove),document.removeEventListener("touchmove",onInitialPointerMove),document.removeEventListener("touchstart",onInitialPointerMove),document.removeEventListener("touchend",onInitialPointerMove)}())}document.addEventListener("keydown",(function onKeyDown(e){e.metaKey||e.altKey||e.ctrlKey||(isValidFocusTarget(scope.activeElement)&&addFocusVisibleClass(scope.activeElement),hadKeyboardEvent=!0)}),!0),document.addEventListener("mousedown",onPointerDown,!0),document.addEventListener("pointerdown",onPointerDown,!0),document.addEventListener("touchstart",onPointerDown,!0),document.addEventListener("visibilitychange",(function onVisibilityChange(e){"hidden"==document.visibilityState&&(hadFocusVisibleRecently&&(hadKeyboardEvent=!0),addInitialPointerMoveListeners())}),!0),addInitialPointerMoveListeners(),scope.addEventListener("focus",(function onFocus(e){isValidFocusTarget(e.target)&&(hadKeyboardEvent||function focusTriggersKeyboardModality(el){var type=el.type,tagName=el.tagName;return!("INPUT"!=tagName||!inputTypesWhitelist[type]||el.readOnly)||"TEXTAREA"==tagName&&!el.readOnly||!!el.isContentEditable}(e.target))&&addFocusVisibleClass(e.target)}),!0),scope.addEventListener("blur",(function onBlur(e){isValidFocusTarget(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(hadFocusVisibleRecently=!0,window.clearTimeout(hadFocusVisibleRecentlyTimeout),hadFocusVisibleRecentlyTimeout=window.setTimeout((function(){hadFocusVisibleRecently=!1,window.clearTimeout(hadFocusVisibleRecentlyTimeout)}),100),function removeFocusVisibleClass(el){el.hasAttribute("data-focus-visible-added")&&(el.classList.remove("focus-visible"),el.removeAttribute("data-focus-visible-added"))}(e.target))}),!0),scope.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&scope.host?scope.host.setAttribute("data-js-focus-visible",""):scope.nodeType===Node.DOCUMENT_NODE&&document.documentElement.classList.add("js-focus-visible")}if("undefined"!=typeof window&&"undefined"!=typeof document){var event;window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;try{event=new CustomEvent("focus-visible-polyfill-ready")}catch(error){(event=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(event)}"undefined"!=typeof document&&applyFocusVisiblePolyfill(document)}()}}]);
//# sourceMappingURL=3.53d44e23394c290657e4.bundle.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{B5Ai:function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"a",function(){return o}),e.d(n,"c",function(){return a});var r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function i(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function o(t,n,e,r){return new(e||(e=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(n){o(n)}}function u(t){try{c(r.throw(t))}catch(n){o(n)}}function c(t){t.done?i(t.value):new e(function(n){n(t.value)}).then(a,u)}c((r=r.apply(t,n||[])).next())})}function a(t,n){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(t,a)}catch(u){o=[6,u],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}},Bs4g:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(t,n){return function(t){return i(t)}(t).includes(n)},i=function(t){t.Ionic=t.Ionic||{};var n=t.Ionic.platforms;return null==n&&(n=t.Ionic.platforms=o(t)).forEach(function(n){return t.document.documentElement.classList.add("plt-"+n)}),n},o=function(t){return Object.keys(v).filter(function(n){return v[n](t)})},a=function(t){return f(t,/iPad/i)},u=function(t){return f(t,/android|sink/i)},c=function(t){return h(t,"(any-pointer:coarse)")},s=function(t){return l(t)||d(t)},l=function(t){return!!(t.cordova||t.phonegap||t.PhoneGap)},d=function(t){var n=t.Capacitor;return!(!n||!n.isNative)},f=function(t,n){return!(!t.navigator||!t.navigator.userAgent)&&n.test(t.navigator.userAgent)},h=function(t,n){return!!t.matchMedia&&t.matchMedia(n).matches},v={ipad:a,iphone:function(t){return f(t,/iPhone/i)},ios:function(t){return f(t,/iPad|iPhone|iPod/i)},android:u,phablet:function(t){var n=t.innerWidth,e=t.innerHeight,r=Math.min(n,e),i=Math.max(n,e);return r>390&&r<520&&i>620&&i<800},tablet:function(t){var n=t.innerWidth,e=t.innerHeight,r=Math.min(n,e),i=Math.max(n,e);return a(t)||function(t){return u(t)&&!f(t,/mobile/i)}(t)||r>460&&r<820&&i>780&&i<1400},cordova:l,capacitor:d,electron:function(t){return f(t,/electron/)},pwa:function(t){return!!t.matchMedia&&(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone)},mobile:c,mobileweb:function(t){return c(t)&&!s(t)},desktop:function(t){return!c(t)},hybrid:s}},DQ87:function(t,n,e){"use strict";e.d(n,"a",function(){return v}),e.d(n,"b",function(){return h}),e.d(n,"c",function(){return c}),e.d(n,"d",function(){return s}),e.d(n,"e",function(){return f}),e.d(n,"f",function(){return o}),e.d(n,"g",function(){return a}),e.d(n,"h",function(){return u});var r=e("B5Ai"),i=0;function o(t,n){var e=t.ownerDocument;(function(t){0===i&&(i=1,t.addEventListener("focusin",function(n){var e=u(t);if(e&&e.backdropDismiss&&!function(t,n){for(;n;){if(n===t)return!0;n=n.parentElement}return!1}(e,n.target)){var r=e.querySelector("input,button");r&&r.focus()}}),t.addEventListener("ionBackButton",function(n){var e=u(t);e&&e.backdropDismiss&&n.detail.register(100,function(){return e.dismiss(void 0,v)})}),t.addEventListener("keyup",function(n){if("Escape"===n.key){var e=u(t);e&&e.backdropDismiss&&e.dismiss(void 0,v)}}))})(e),Object.assign(t,n),t.classList.add("overlay-hidden");var r=i++;return t.overlayIndex=r,t.hasAttribute("id")||(t.id="ion-overlay-"+r),l(e).appendChild(t),t.componentOnReady()}function a(t,n,e,r,i){var o=u(t,r,i);return o?o.dismiss(n,e):Promise.reject("overlay does not exist")}function u(t,n,e){var r=function(t,n){var e=Array.from(l(t).children).filter(function(t){return t.overlayIndex>0});return void 0===n?e:(n=n.toUpperCase(),e.filter(function(t){return t.tagName===n}))}(t,n);return void 0===e?r[r.length-1]:r.find(function(t){return t.id===e})}function c(t,n,e,i,o){return r.a(this,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),a=t.enterAnimation?t.enterAnimation:t.config.get(n,"ios"===t.mode?e:i),[4,d(t,a,t.el,o)]);case 1:return r.sent()&&t.didPresent.emit(),[2]}})})}function s(t,n,e,i,o,a,u){return r.a(this,void 0,void 0,function(){var c,s;return r.c(this,function(r){switch(r.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,r.label=1;case 1:return r.trys.push([1,3,,4]),t.willDismiss.emit({data:n,role:e}),c=t.leaveAnimation?t.leaveAnimation:t.config.get(i,"ios"===t.mode?o:a),[4,d(t,c,t.el,u)];case 2:return r.sent(),t.didDismiss.emit({data:n,role:e}),[3,4];case 3:return s=r.sent(),console.error(s),[3,4];case 4:return t.el.remove(),[2,!0]}})})}function l(t){return t.querySelector("ion-app")||t.body}function d(t,n,i,o){return r.a(this,void 0,void 0,function(){var a,u,c,s;return r.c(this,function(r){switch(r.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):(i.classList.remove("overlay-hidden"),a=i.shadowRoot||t.el,c=t,[4,e.e(2).then(e.bind(null,"ohUv")).then(function(t){return t.create(n,a,o)})]);case 1:return u=c.animation=r.sent(),t.animation=u,t.animated&&t.config.getBoolean("animated",!0)||u.duration(0),t.keyboardClose&&u.beforeAddWrite(function(){var t=i.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}),[4,u.playAsync()];case 2:return r.sent(),s=u.hasCompleted,u.destroy(),t.animation=void 0,[2,s]}})})}function f(t,n){var e,r=new Promise(function(t){return e=t});return function(t,n,e){var r=function(i){t.removeEventListener(n,r),e(i)};t.addEventListener(n,r)}(t,n,function(t){e(t.detail)}),r}function h(t){return"cancel"===t||t===v}var v="backdrop"},JvIM:function(t,n,e){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null}function a(t,n,e,r,o){if(t||i(n)){var a=n.querySelector("input.aux-input");a||((a=n.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),n.appendChild(a)),a.disabled=o,a.name=e,a.value=r||""}}function u(t,n,e){return Math.max(t,Math.min(n,e))}function c(t){return t.timeStamp||Date.now()}function s(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,n){var e="rtl"===t.document.dir;switch(n){case"start":return e;case"end":return!e;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,n){var e=t._original||t;return{_original:t,emit:f(e.emit.bind(e),n)}}function f(t,n){var e;return void 0===n&&(n=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(r))}}e.d(n,"a",function(){return r}),e.d(n,"b",function(){return c}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return o}),e.d(n,"e",function(){return a}),e.d(n,"f",function(){return d}),e.d(n,"g",function(){return l}),e.d(n,"h",function(){return u}),e.d(n,"i",function(){return f}),e.d(n,"j",function(){return s})},R5Yi:function(t,n,e){"use strict";e.r(n),e.d(n,"createGesture",function(){return f}),e.d(n,"GESTURE_CONTROLLER",function(){return c});var r,i=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new a(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,n,e){return this.canStart(t)?(this.requestedStart.set(n,e),!0):(this.requestedStart.delete(n),!1)},t.prototype.capture=function(t,n,e){if(!this.start(t,n,e))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===e){this.capturedId=n,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(o),!0}return r.delete(n),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0===e&&(e=new Set,this.disabledGestures.set(t,e)),e.add(n)},t.prototype.enableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0!==e&&e.delete(n)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(u)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(u)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var n=this.disabledGestures.get(t);return!!(n&&n.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,n,e,r,i){this.id=n,this.name=e,this.disableScroll=i,this.priority=1e6*r+n,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),a=function(){function t(t,n,e,r){this.id=n,this.disable=e,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.disableGesture(n[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.enableGesture(n[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),u="backdrop-no-scroll",c=new i(document);function s(t,n,e,i){var o,a,u=function(t){if(void 0===r)try{var n=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},n)}catch(t){r=!1}return!!r}(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(o="addEventListener",a="removeEventListener"),t[o](n,e,u),function(){t[a](n,e,u)}}var l=2e3;function d(t){return t instanceof Document?t:t.ownerDocument}function f(t){var n=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),e=n.canStart,r=n.onWillStart,i=n.onStart,o=n.onEnd,a=n.notCaptured,u=n.onMove,f=n.threshold,m=n.queue,b={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},y=function(t,n,e,r,i){var o,a,u,c,f,h,v,p=0;function m(r){p=Date.now()+l,n(r)&&(!a&&e&&(a=s(t,"touchmove",e,i)),u||(u=s(t,"touchend",y,i)),c||(c=s(t,"touchcancel",y,i)))}function b(r){p>Date.now()||n(r)&&(!h&&e&&(h=s(d(t),"mousemove",e,i)),v||(v=s(d(t),"mouseup",g,i)))}function y(t){w(),r&&r(t)}function g(t){S(),r&&r(t)}function w(){a&&a(),u&&u(),c&&c(),a=u=c=void 0}function S(){h&&h(),v&&v(),h=v=void 0}function E(){w(),S()}function D(n){n?(o&&o(),f&&f(),o=f=void 0,E()):(o||(o=s(t,"touchstart",m,i)),f||(f=s(t,"mousedown",b,i)))}return{setDisabled:D,stop:E,destroy:function(){D(!0),r=e=n=void 0}}}(n.el,function(t){var n=p(t);return!(E||!D)&&(v(t,b),b.startX=b.currentX,b.startY=b.currentY,b.startTimeStamp=b.timeStamp=n,b.velocityX=b.velocityY=b.deltaX=b.deltaY=0,b.event=t,(!e||!1!==e(b))&&(w.release(),!!w.start()&&(E=!0,0===f?C():(g.start(b.startX,b.startY),!0))))},function(t){S?!L&&D&&(L=!0,h(b,t),m.write(k)):(h(b,t),g.detect(b.currentX,b.currentY)&&(g.isGesture()&&C()||(T(),y.stop(),a&&a(b))))},_,{capture:!1}),g=function(t,n,e){var r=e*(Math.PI/180),i="x"===t,o=Math.cos(r),a=n*n,u=0,c=0,s=!1,l=0;return{start:function(t,n){u=t,c=n,l=0,s=!0},detect:function(t,n){if(!s)return!1;var e=t-u,r=n-c,d=e*e+r*r;if(d<a)return!1;var f=Math.sqrt(d),h=(i?e:r)/f;return l=h>o?1:h<-o?-1:0,s=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(n.direction,n.threshold,n.maxAngle),w=c.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),S=!1,E=!1,D=!0,L=!1;function k(){S&&(L=!1,u&&u(b))}function C(){return!(w&&!w.capture()||(S=!0,D=!1,b.startX=b.currentX,b.startY=b.currentY,b.startTimeStamp=b.timeStamp,r?r(b).then(A):A(),0))}function A(){i&&i(b),D=!0}function T(){S=!1,E=!1,L=!1,D=!0,w.release()}function _(t){var n=S,e=D;T(),e&&(h(b,t),n?o&&o(b):a&&a(b))}return{setDisabled:function(t){t&&S&&_(void 0),y.setDisabled(t)},destroy:function(){w.destroy(),y.destroy()}}}function h(t,n){if(n){var e=t.currentX,r=t.currentY,i=t.timeStamp;v(n,t);var o=t.currentX,a=t.currentY,u=(t.timeStamp=p(n))-i;if(u>0&&u<100){var c=(a-r)/u;t.velocityX=(o-e)/u*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=a-t.startY,t.event=n}}function v(t,n){var e=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];e=o.clientX,r=o.clientY}else void 0!==t.pageX&&(e=t.pageX,r=t.pageY)}n.currentX=e,n.currentY=r}function p(t){return t.timeStamp||Date.now()}},WmWN:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(t){try{if("string"!=typeof t||""===t)return t;var n=document.createDocumentFragment(),e=document.createElement("div");n.appendChild(e),e.innerHTML=t,u.forEach(function(t){for(var e=n.querySelectorAll(t),r=e.length-1;r>=0;r--){var a=e[r];a.parentNode?a.parentNode.removeChild(a):n.removeChild(a);for(var u=o(a),c=0;c<u.length;c++)i(u[c])}});for(var r=o(n),a=0;a<r.length;a++)i(r[a]);var c=document.createElement("div");c.appendChild(n);var s=c.querySelector("div");return null!==s?s.innerHTML:c.innerHTML}catch(t){return console.error(t),""}},i=function(t){if(!t.nodeType||1===t.nodeType){for(var n=t.attributes.length-1;n>=0;n--){var e=t.attributes[n],r=e.name;if(a.includes(r.toLowerCase())){var u=e.value;null!=u&&u.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}else t.removeAttribute(r)}var c=o(t);for(n=0;n<c.length;n++)i(c[n])}},o=function(t){return null!=t.children?t.children:t.childNodes},a=["class","id","href","src","name","slot"],u=["script","style","iframe","meta","link","object","embed"]},awvO:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return a}),e.d(n,"e",function(){return u});var r="ionViewWillEnter",i="ionViewDidEnter",o="ionViewWillLeave",a="ionViewDidLeave",u="ionViewWillUnload"},cDAM:function(t,n,e){"use strict";e.d(n,"a",function(){return g}),e.d(n,"b",function(){return b}),e.d(n,"c",function(){return u}),e.d(n,"d",function(){return w});var r=e("B5Ai"),i=e("awvO"),o=function(){return e.e(75).then(e.bind(null,"rSHd"))},a=function(){return e.e(76).then(e.bind(null,"NJz6"))};function u(t){return new Promise(function(n,e){t.queue.write(function(){(function(t){var n=t.enteringEl,e=t.leavingEl;(function(t,n,e){void 0!==t&&(t.style.zIndex="back"===e?"99":"101"),void 0!==n&&(n.style.zIndex="100")})(n,e,t.direction),t.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),w(n,!1),e&&w(e,!1)})(t),function(t){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(e){switch(e.label){case 0:return[4,s(t)];case 1:return[2,(n=e.sent())?l(n,t):d(t)]}})})}(t).then(function(e){e.animation&&e.animation.destroy(),c(t),n(e)},function(n){c(t),e(n)})})})}function c(t){var n=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function s(t){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(e){switch(e.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,o()]:[2,void 0];case 1:return n=e.sent().iosTransitionAnimation,[3,4];case 2:return[4,a()];case 3:n=e.sent().mdTransitionAnimation,e.label=4;case 4:return[2,n]}})})}function l(t,n){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return[4,f(n,!0)];case 1:return r.sent(),[4,e.e(2).then(e.bind(null,"ohUv")).then(function(e){return e.create(t,n.baseEl,n)})];case 2:return i=r.sent(),p(n.enteringEl,n.leavingEl),[4,v(i,n)];case 3:return r.sent(),n.progressCallback&&n.progressCallback(void 0),i.hasCompleted&&m(n.enteringEl,n.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function d(t){return r.a(this,void 0,void 0,function(){var n,e;return r.c(this,function(r){switch(r.label){case 0:return n=t.enteringEl,e=t.leavingEl,[4,f(t,!1)];case 1:return r.sent(),p(n,e),m(n,e),[2,{hasCompleted:!0}]}})})}function f(t,n){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(r){switch(r.label){case 0:return e=(void 0!==t.deepWait?t.deepWait:n)?[g(t.enteringEl),g(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)],[4,Promise.all(e)];case 1:return r.sent(),[4,h(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})}function h(t,n){return r.a(this,void 0,void 0,function(){return r.c(this,function(e){switch(e.label){case 0:return t?[4,t(n)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}function v(t,n){var e=n.progressCallback,r=new Promise(function(n){return t.onFinish(n)});return e?(t.progressStart(),e(t)):t.play(),r}function p(t,n){b(n,i.a),b(t,i.b)}function m(t,n){b(t,i.c),b(n,i.d)}function b(t,n){if(t){var e=new CustomEvent(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(e)}}function y(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function g(t){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(e){switch(e.label){case 0:return(n=t)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(g))];case 3:e.sent(),e.label=4;case 4:return[2]}})})}function w(t,n){n?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}},d6Vy:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return c}),e.d(n,"c",function(){return o}),e.d(n,"d",function(){return i});var r=e("B5Ai");function i(t,n){return null!==n.closest(t)}function o(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0}function a(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n}var u=/^[a-z][a-z0-9+\-.]*:/;function c(t,n,e,i){return r.a(this,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:return null==n||"#"===n[0]||u.test(n)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(n,i)];case 2:return[2,!1]}})})}},jT1R:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var r=e("B5Ai");function i(t,n,e,i,o){return r.a(this,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(n,e,o,i)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e,i&&i.forEach(function(t){return a.classList.add(t)}),o&&Object.assign(a,o),n.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,a]}})})}function o(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},ySCp:function(t,n,e){"use strict";function r(){var t=window.TapticEngine;t&&t.selection()}function i(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function o(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function a(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"d",function(){return r})}}]);
!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,r,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),s?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,m&&i?y(e):(i=r=void 0,u)}function T(){var e=p(),n=O(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function b(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var o=u.test(e);return o||f.test(e)?l(e.slice(2),o?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var j=document.querySelector(".feedback-form"),O="feedback-form-state";localStorage.getItem(O)||localStorage.setItem(O,JSON.stringify({email:"",message:""})),j.addEventListener("input",n((function(){localStorage.setItem(O,JSON.stringify({email:j.email.value,message:j.message.value}))}),500));var h=JSON.parse(localStorage.getItem(O)),w=h.email,T=h.message;j.email.value=w,j.message.value=T,j.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:j.email.value,message:j.message.value}),localStorage.removeItem(O),j.reset()}))}();
//# sourceMappingURL=03-feedback.48bc702b.js.map
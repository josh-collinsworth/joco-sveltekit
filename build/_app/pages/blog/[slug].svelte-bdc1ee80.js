import{_ as e}from"../../chunks/preload-helper-ec9aa979.js";import{S as t,i as n,s as a,R as s,e as r,c as i,a as o,d as l,b as u,f as c,L as d,M as g,N as p,x as m,u as f,F as h,t as b,k as v,j as _,g as k,n as y,m as w,o as $,v as x,W as F,_ as A,h as E,w as j,A as P,l as S,r as L,I}from"../../chunks/vendor-d39b8e67.js";function O(e){let t,n;const a=e[1].default,h=s(a,e,e[0],null);return{c(){t=r("ul"),h&&h.c(),this.h()},l(e){t=i(e,"UL",{class:!0});var n=o(t);h&&h.l(n),n.forEach(l),this.h()},h(){u(t,"class","tag-list svelte-duinem")},m(e,a){c(e,t,a),h&&h.m(t,null),n=!0},p(e,[t]){h&&h.p&&(!n||1&t)&&d(h,a,e,e[0],n?p(a,e[0],t,null):g(e[0]),null)},i(e){n||(m(h,e),n=!0)},o(e){f(h,e),n=!1},d(e){e&&l(t),h&&h.d(e)}}}function T(e,t,n){let{$$slots:a={},$$scope:s}=t;return e.$$set=e=>{"$$scope"in e&&n(0,s=e.$$scope)},[s,a]}class R extends t{constructor(e){super(),n(this,e,T,O,a,{})}}function D(e){let t,n,a;const b=e[2].default,v=s(b,e,e[1],null);return{c(){t=r("li"),n=r("a"),v&&v.c(),this.h()},l(e){t=i(e,"LI",{});var a=o(t);n=i(a,"A",{href:!0,class:!0});var s=o(n);v&&v.l(s),s.forEach(l),a.forEach(l),this.h()},h(){u(n,"href",e[0]),u(n,"class","tag svelte-sp230d")},m(e,s){c(e,t,s),h(t,n),v&&v.m(n,null),a=!0},p(e,[t]){v&&v.p&&(!a||2&t)&&d(v,b,e,e[1],a?p(b,e[1],t,null):g(e[1]),null),(!a||1&t)&&u(n,"href",e[0])},i(e){a||(m(v,e),a=!0)},o(e){f(v,e),a=!1},d(e){e&&l(t),v&&v.d(e)}}}function V(e,t,n){let{$$slots:a={},$$scope:s}=t,{to:r}=t;return e.$$set=e=>{"to"in e&&n(0,r=e.to),"$$scope"in e&&n(1,s=e.$$scope)},[r,s,a]}class C extends t{constructor(e){super(),n(this,e,V,D,a,{to:0})}}var z={init(){var e=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var s,r;switch(n=n||{},a.util.type(t)){case"Object":if(r=a.util.objId(t),n[r])return n[r];for(var i in s={},n[r]=s,t)t.hasOwnProperty(i)&&(s[i]=e(t[i],n));return s;case"Array":return r=a.util.objId(t),n[r]?n[r]:(s=[],n[r]=s,t.forEach((function(t,a){s[a]=e(t,n)})),s);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var s=e.classList;if(s.contains(t))return!0;if(s.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var s in t)n[s]=t[s];return n},insertBefore:function(e,t,n,s){var r=(s=s||a.languages)[e],i={};for(var o in r)if(r.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(o)||(i[o]=r[o])}var u=s[e];return s[e]=i,a.languages.DFS(a.languages,(function(t,n){n===u&&t!=e&&(this[t]=i)})),i},DFS:function e(t,n,s,r){r=r||{};var i=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],s||o);var l=t[o],u=a.util.type(l);"Object"!==u||r[i(l)]?"Array"!==u||r[i(l)]||(r[i(l)]=!0,e(l,n,o,r)):(r[i(l)]=!0,e(l,n,null,r))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var s={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),a.hooks.run("before-all-elements-highlight",s);for(var r,i=0;r=s.elements[i++];)a.highlightElement(r,!0===t,s.callback)},highlightElement:function(n,s,r){var i=a.util.getLanguage(n),o=a.languages[i];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+i;var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+i);var u={element:n,language:i,grammar:o,code:n.textContent};function c(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),r&&r.call(u.element)}if(a.hooks.run("before-sanity-check",u),!u.code)return a.hooks.run("complete",u),void(r&&r.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(s&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(a.highlight(u.code,u.grammar,u.language));else c(a.util.encode(u.code))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),s.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var u in n)t[u]=n[u];delete t.rest}var c=new i;return o(c,c.head,e),function e(t,n,i,u,c,d){for(var g in i)if(i.hasOwnProperty(g)&&i[g]){var p=i[g];p=Array.isArray(p)?p:[p];for(var m=0;m<p.length;++m){if(d&&d.cause==g+","+m)return;var f=p[m],h=f.inside,b=!!f.lookbehind,v=!!f.greedy,_=f.alias;if(v&&!f.pattern.global){var k=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,k+"g")}for(var y=f.pattern||f,w=u.next,$=c;w!==n.tail&&!(d&&$>=d.reach);$+=w.value.length,w=w.next){var x=w.value;if(n.length>t.length)return;if(!(x instanceof s)){var F,A=1;if(v){if(!(F=r(y,$,t,b)))break;var E=F.index,j=F.index+F[0].length,P=$;for(P+=w.value.length;P<=E;)P+=(w=w.next).value.length;if($=P-=w.value.length,w.value instanceof s)continue;for(var S=w;S!==n.tail&&(P<j||"string"==typeof S.value);S=S.next)A++,P+=S.value.length;A--,x=t.slice($,P),F.index-=$}else if(!(F=r(y,0,x,b)))continue;E=F.index;var L=F[0],I=x.slice(0,E),O=x.slice(E+L.length),T=$+x.length;d&&T>d.reach&&(d.reach=T);var R=w.prev;if(I&&(R=o(n,R,I),$+=I.length),l(n,R,A),w=o(n,R,new s(g,h?a.tokenize(L,h):L,_,L)),O&&o(n,w,O),1<A){var D={cause:g+","+m,reach:T};e(t,n,i,w.prev,$,D),d&&D.reach>d.reach&&(d.reach=D.reach)}}}}}}(e,c,t,c.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(c)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var s,r=0;s=n[r++];)s(t)}},Token:s};function s(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function r(e,t,n,a){e.lastIndex=t;var s=e.exec(n);if(s&&a&&s[1]){var r=s[1].length;s.index+=r,s[0]=s[0].slice(r)}return s}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function o(e,t,n){var a=t.next,s={value:n,prev:t,next:a};return t.next=s,a.prev=s,e.length++,s}function l(e,t,n){for(var a=t.next,s=0;s<n&&a!==e.tail;s++)a=a.next;(t.next=a).prev=t,e.length-=s}if(e.Prism=a,s.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var s="";return t.forEach((function(t){s+=e(t,n)})),s}var r={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(r.classes,i):r.classes.push(i)),a.hooks.run("wrap",r);var o="";for(var l in r.attributes)o+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+o+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener&&(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),s=n.language,r=n.code,i=n.immediateClose;e.postMessage(a.highlight(r,a.languages[s],s)),i&&e.close()}),!1)),a;var u=a.util.currentScript();function c(){a.manual||a.highlightAll()}if(u&&(a.filename=u.src,u.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var d=document.readyState;"loading"===d||"interactive"===d&&u&&u.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});"undefined"!=typeof module&&module.exports&&(module.exports=e),"undefined"!=typeof global&&(global.Prism=e),e.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(t,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+n]={pattern:/[\s\S]+/,inside:e.languages[n]};var r={};r[t]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){return t})),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",r)}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:e.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},n.tag))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}}}),e.languages.markup&&e.languages.markup.tag.addInlined("script","javascript"),e.languages.js=e.languages.javascript,function(e){function t(e){return e=e.replace(/<inner>/g,(function(){return"(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))"})),RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:"+e+")")}var n="(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",a="\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(/__/g,(function(){return n})),s="\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)";e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"font-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+a+s+"(?:"+a+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+a+s+")(?:"+a+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(n),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+a+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+a+"$"),inside:{"table-header":{pattern:RegExp(n),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/``.+?``|`[^`\r\n]+`/,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:t("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:t("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:t("(~~?)(?:(?!~)<inner>)+?\\2"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},url:{pattern:t('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach((function(t){["url","bold","italic","strike"].forEach((function(n){t!==n&&(e.languages.markdown[t].inside.content.inside[n]=e.languages.markdown[n])}))})),e.hooks.add("after-tokenize",(function(e){"markdown"!==e.language&&"md"!==e.language||function e(t){if(t&&"string"!=typeof t)for(var n=0,a=t.length;n<a;n++){var s=t[n];if("code"===s.type){var r=s.content[1],i=s.content[3];if(r&&i&&"code-language"===r.type&&"code-block"===i.type&&"string"==typeof r.content){var o=r.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),l="language-"+(o=(/[a-z][\w-]*/i.exec(o)||[""])[0].toLowerCase());i.alias?"string"==typeof i.alias?i.alias=[i.alias,l]:i.alias.push(l):i.alias=[l]}}else e(s.content)}}(e.tokens)})),e.hooks.add("wrap",(function(t){if("code-block"===t.type){for(var n="",a=0,s=t.classes.length;a<s;a++){var r=t.classes[a],i=/language-(.+)/.exec(r);if(i){n=i[1];break}}var o=e.languages[n];if(o){var l=document.createElement("div");l.innerHTML=t.content;var u=l.textContent;t.content=e.highlight(u,o,n)}else if(n&&"none"!==n&&e.plugins.autoloader){var c="md-"+(new Date).valueOf()+"-"+Math.floor(1e16*Math.random());t.attributes.id=c,e.plugins.autoloader.loadLanguages(n,(function(){var t=document.getElementById(c);t&&(t.innerHTML=e.highlight(t.textContent,e.languages[n],n))}))}}})),e.languages.md=e.languages.markdown}(e)}};function M(e,t,n){const a=e.slice();return a[2]=t[n],a}function N(e){let t,n,a,s,d,g;return d=new R({props:{$$slots:{default:[H]},$$scope:{ctx:e}}}),{c(){t=r("aside"),n=r("h2"),a=b("Posted in:"),s=v(),_(d.$$.fragment),this.h()},l(e){t=i(e,"ASIDE",{});var r=o(t);n=i(r,"H2",{class:!0});var u=o(n);a=k(u,"Posted in:"),u.forEach(l),s=y(r),w(d.$$.fragment,r),r.forEach(l),this.h()},h(){u(n,"class","h4")},m(e,r){c(e,t,r),h(t,n),h(n,a),h(t,s),$(d,t,null),g=!0},p(e,t){const n={};34&t&&(n.$$scope={dirty:t,ctx:e}),d.$set(n)},i(e){g||(m(d.$$.fragment,e),g=!0)},o(e){f(d.$$.fragment,e),g=!1},d(e){e&&l(t),x(d)}}}function B(e){let t,n,a=e[2]+"";return{c(){t=b(a),n=v()},l(e){t=k(e,a),n=y(e)},m(e,a){c(e,t,a),c(e,n,a)},p(e,n){2&n&&a!==(a=e[2]+"")&&E(t,a)},d(e){e&&l(t),e&&l(n)}}}function q(e){let t,n;return t=new C({props:{to:"/blog/category/"+e[2]+"/",$$slots:{default:[B]},$$scope:{ctx:e}}}),{c(){_(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,a){$(t,e,a),n=!0},p(e,n){const a={};2&n&&(a.to="/blog/category/"+e[2]+"/"),34&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){f(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}function H(e){let t,n,a=e[1].categories,s=[];for(let i=0;i<a.length;i+=1)s[i]=q(M(e,a,i));const r=e=>f(s[e],1,1,(()=>{s[e]=null}));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);c(e,t,a),n=!0},p(e,n){if(2&n){let i;for(a=e[1].categories,i=0;i<a.length;i+=1){const r=M(e,a,i);s[i]?(s[i].p(r,n),m(s[i],1)):(s[i]=q(r),s[i].c(),m(s[i],1),s[i].m(t.parentNode,t))}for(L(),i=a.length;i<s.length;i+=1)r(i);j()}},i(e){if(!n){for(let e=0;e<a.length;e+=1)m(s[e]);n=!0}},o(e){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)f(s[t]);n=!1},d(e){I(s,e),e&&l(t)}}}function Z(e){let t,n,a,s,d,g,p,P,S,I,O,T,R,D,V,C,z,M,B,q,H,Z,W=e[1].title+"";document.title=t=e[1].title,S=new e[0]({});let U=e[1].categories&&N(e);return{c(){n=v(),a=r("img"),d=v(),g=r("h1"),p=b(W),P=v(),_(S.$$.fragment),I=v(),O=r("hr"),T=v(),U&&U.c(),R=v(),D=r("ul"),V=r("li"),C=r("a"),z=b("Send me a note about this post"),M=v(),B=r("li"),q=r("a"),H=b("Back to all posts"),this.h()},l(e){F('[data-svelte="svelte-hoigww"]',document.head).forEach(l),n=y(e),a=i(e,"IMG",{src:!0,alt:!0}),d=y(e),g=i(e,"H1",{});var t=o(g);p=k(t,W),t.forEach(l),P=y(e),w(S.$$.fragment,e),I=y(e),O=i(e,"HR",{}),T=y(e),U&&U.l(e),R=y(e),D=i(e,"UL",{});var s=o(D);V=i(s,"LI",{});var r=o(V);C=i(r,"A",{href:!0});var u=o(C);z=k(u,"Send me a note about this post"),u.forEach(l),r.forEach(l),M=y(s),B=i(s,"LI",{});var c=o(B);q=i(c,"A",{href:!0});var m=o(q);H=k(m,"Back to all posts"),m.forEach(l),c.forEach(l),s.forEach(l),this.h()},h(){A(a.src,s="/images/post_images/"+e[1].coverImage)||u(a,"src",s),u(a,"alt",""),u(C,"href","/contact"),u(q,"href","/blog")},m(e,t){c(e,n,t),c(e,a,t),c(e,d,t),c(e,g,t),h(g,p),c(e,P,t),$(S,e,t),c(e,I,t),c(e,O,t),c(e,T,t),U&&U.m(e,t),c(e,R,t),c(e,D,t),h(D,V),h(V,C),h(C,z),h(D,M),h(D,B),h(B,q),h(q,H),Z=!0},p(e,[n]){(!Z||2&n)&&t!==(t=e[1].title)&&(document.title=t),(!Z||2&n&&!A(a.src,s="/images/post_images/"+e[1].coverImage))&&u(a,"src",s),(!Z||2&n)&&W!==(W=e[1].title+"")&&E(p,W),e[1].categories?U?(U.p(e,n),2&n&&m(U,1)):(U=N(e),U.c(),m(U,1),U.m(R.parentNode,R)):U&&(L(),f(U,1,1,(()=>{U=null})),j())},i(e){Z||(m(S.$$.fragment,e),m(U),Z=!0)},o(e){f(S.$$.fragment,e),f(U),Z=!1},d(e){e&&l(n),e&&l(a),e&&l(d),e&&l(g),e&&l(P),x(S,e),e&&l(I),e&&l(O),e&&l(T),U&&U.d(e),e&&l(R),e&&l(D)}}}async function W({page:t}){try{const n=await function(t){switch(t){case"./posts/12-things.md":return e((()=>import("./posts/12-things.md-7c6f8873.js")),["pages/blog/posts/12-things.md-7c6f8873.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Highlight-8ea6a94e.js","chunks/Callout-b2c4b846.js","chunks/SideNote-6b324693.js"]);case"./posts/8-student-portfolio-mistakes.md":return e((()=>import("./posts/8-student-portfolio-mistakes.md-e0d6a5ad.js")),["pages/blog/posts/8-student-portfolio-mistakes.md-e0d6a5ad.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Highlight-8ea6a94e.js","chunks/Callout-b2c4b846.js"]);case"./posts/a-new-headless-site-with-gridsome.md":return e((()=>import("./posts/a-new-headless-site-with-gridsome.md-e6f3f275.js")),["pages/blog/posts/a-new-headless-site-with-gridsome.md-e6f3f275.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Highlight-8ea6a94e.js","chunks/Callout-b2c4b846.js","chunks/SideNote-6b324693.js","chunks/Code-89bf94b1.js","assets/Code-c8c67bbb.css"]);case"./posts/adding-gutenberg-full-and-wide-width-image-support-to-your-wordpress-theme.md":return e((()=>import("./posts/adding-gutenberg-full-and-wide-width-image-support-to-your-wordpress-theme.md-4ee91eb8.js")),["pages/blog/posts/adding-gutenberg-full-and-wide-width-image-support-to-your-wordpress-theme.md-4ee91eb8.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Code-89bf94b1.js","assets/Code-c8c67bbb.css"]);case"./posts/announcing-quina-my-first-app.md":return e((()=>import("./posts/announcing-quina-my-first-app.md-91acd160.js")),["pages/blog/posts/announcing-quina-my-first-app.md-91acd160.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Callout-b2c4b846.js","chunks/SideNote-6b324693.js","chunks/Highlight-8ea6a94e.js"]);case"./posts/confirm-all-ids-are-unique-in-an-array-of-javascript-objects-using-map-and-sets.md":return e((()=>import("./posts/confirm-all-ids-are-unique-in-an-array-of-javascript-objects-using-map-and-sets.md-d8b742a3.js")),["pages/blog/posts/confirm-all-ids-are-unique-in-an-array-of-javascript-objects-using-map-and-sets.md-d8b742a3.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Code-89bf94b1.js","assets/Code-c8c67bbb.css"]);case"./posts/creating-custom-gutenberg-blocks-with-the-block-lab-plugin.md":return e((()=>import("./posts/creating-custom-gutenberg-blocks-with-the-block-lab-plugin.md-52e224c8.js")),["pages/blog/posts/creating-custom-gutenberg-blocks-with-the-block-lab-plugin.md-52e224c8.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Highlight-8ea6a94e.js","chunks/Callout-b2c4b846.js","chunks/SideNote-6b324693.js","chunks/Code-89bf94b1.js","assets/Code-c8c67bbb.css"]);case"./posts/essential-tools-wordpress-development.md":return e((()=>import("./posts/essential-tools-wordpress-development.md-2a1c3da3.js")),["pages/blog/posts/essential-tools-wordpress-development.md-2a1c3da3.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/SideNote-6b324693.js"]);case"./posts/filetypes.md":return e((()=>import("./posts/filetypes.md-c77e40e4.js")),["pages/blog/posts/filetypes.md-c77e40e4.js","chunks/vendor-d39b8e67.js"]);case"./posts/five-ways-to-become-a-better-designer-that-arent-design.md":return e((()=>import("./posts/five-ways-to-become-a-better-designer-that-arent-design.md-dac44367.js")),["pages/blog/posts/five-ways-to-become-a-better-designer-that-arent-design.md-dac44367.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Callout-b2c4b846.js"]);case"./posts/goodbye-instagram.md":return e((()=>import("./posts/goodbye-instagram.md-bb5e91cc.js")),["pages/blog/posts/goodbye-instagram.md-bb5e91cc.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Highlight-8ea6a94e.js","chunks/Callout-b2c4b846.js","chunks/SideNote-6b324693.js"]);case"./posts/goodbye-wordpress.md":return e((()=>import("./posts/goodbye-wordpress.md-79624880.js")),["pages/blog/posts/goodbye-wordpress.md-79624880.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Highlight-8ea6a94e.js","chunks/Callout-b2c4b846.js","chunks/SideNote-6b324693.js","chunks/Code-89bf94b1.js","assets/Code-c8c67bbb.css"]);case"./posts/how-to-connect-local-with-codekit.md":return e((()=>import("./posts/how-to-connect-local-with-codekit.md-aa1b1826.js")),["pages/blog/posts/how-to-connect-local-with-codekit.md-aa1b1826.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/SideNote-6b324693.js"]);case"./posts/lets-learn-css-variables.md":return e((()=>import("./posts/lets-learn-css-variables.md-3e8d7424.js")),["pages/blog/posts/lets-learn-css-variables.md-3e8d7424.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Highlight-8ea6a94e.js","chunks/Code-89bf94b1.js","assets/Code-c8c67bbb.css"]);case"./posts/new-site-new-theme-for-2018.md":return e((()=>import("./posts/new-site-new-theme-for-2018.md-9a0cb01c.js")),["pages/blog/posts/new-site-new-theme-for-2018.md-9a0cb01c.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/SideNote-6b324693.js"]);case"./posts/pantone.md":return e((()=>import("./posts/pantone.md-65dc93a4.js")),["pages/blog/posts/pantone.md-65dc93a4.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Highlight-8ea6a94e.js","chunks/Callout-b2c4b846.js","chunks/SideNote-6b324693.js"]);case"./posts/profit-is-not-a-value.md":return e((()=>import("./posts/profit-is-not-a-value.md-a1dd6f68.js")),["pages/blog/posts/profit-is-not-a-value.md-a1dd6f68.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Callout-b2c4b846.js"]);case"./posts/the-five-things-i-wish-somebody-had-told-me-as-a-design-student.md":return e((()=>import("./posts/the-five-things-i-wish-somebody-had-told-me-as-a-design-student.md-4df8824c.js")),["pages/blog/posts/the-five-things-i-wish-somebody-had-told-me-as-a-design-student.md-4df8824c.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Callout-b2c4b846.js"]);case"./posts/why-designers-shouldnt-remake-other-designers-logos.md":return e((()=>import("./posts/why-designers-shouldnt-remake-other-designers-logos.md-549c4bbc.js")),["pages/blog/posts/why-designers-shouldnt-remake-other-designers-logos.md-549c4bbc.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Highlight-8ea6a94e.js","chunks/Callout-b2c4b846.js","chunks/SideNote-6b324693.js"]);case"./posts/wordpress-child-theme-explanation.md":return e((()=>import("./posts/wordpress-child-theme-explanation.md-ed4f104a.js")),["pages/blog/posts/wordpress-child-theme-explanation.md-ed4f104a.js","assets/SideNote.svelte_svelte&type=style&lang-f2f9cee0.css","chunks/vendor-d39b8e67.js","chunks/Callout-b2c4b846.js","chunks/SideNote-6b324693.js","chunks/Code-89bf94b1.js","assets/Code-c8c67bbb.css"]);default:return new Promise((function(e,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))}))}}(`./posts/${t.params.slug}.md`);return{props:{Post:n.default,meta:n.metadata}}}catch(n){return{status:404,error:n.message}}}function U(e,t,n){let{Post:a,meta:s}=t;return P((()=>{z.init()})),e.$$set=e=>{"Post"in e&&n(0,a=e.Post),"meta"in e&&n(1,s=e.meta)},[a,s]}class G extends t{constructor(e){super(),n(this,e,U,Z,a,{Post:0,meta:1})}}export{G as default,W as load};
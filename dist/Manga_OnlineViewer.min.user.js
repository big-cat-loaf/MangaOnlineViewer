// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: Asura Scans, Batoto, BilibiliComics, Comick, Comix.to, DemonicScans, Dynasty-Scans, Flame Comics, Ikigai Mangas - EltaNews, Ikigai Mangas - Ajaco, Kagane, KuManga, LeerCapitulo, LHTranslation, Local Files, M440, MangaBuddy, MangaDex, MangaFox, MangaHere, Mangago, MangaHub, MangaKakalot, NeloManga, MangaNato, NatoManga, MangaBats, MangaBall, MangaOni, MangaPark, MangaReader, MangaToons, MangaTown, ManhwaWeb, MangaGeko.com, MangaGeko.cc, NineAnime, Olympus, QiManhwa, ReadComicsOnline, ReaperScans, TuMangaOnline, WebNovel, WebToons, WeebCentral, WeebDex, Vortex Scans, ZeroScans, MangaStream WordPress Plugin, Realm Oasis, Voids-Scans, Luminous Scans, Shimada Scans, Night Scans, Manhwa-Freak, OzulScansEn, CypherScans, MangaGalaxy, LuaScans, Drake Scans, Rizzfables, NovatoScans, TresDaos, Lectormiau, NTRGod, Threedaos, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, NovelMic, Reset-Scans, LeviatanScans, Dragon Tea, SetsuScans, ToonGod, Hades Scans
// @version       2026.07.25.build-1335
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/2281/2281832.png
// @run-at        document-end
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @grant         GM_addValueChangeListener
// @noframes      on
// @connect       *
// @require       https://cdn.jsdelivr.net/npm/colorjs.io@0.7.1/dist/color.global.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdn.jsdelivr.net/npm/lodash@4.17.23/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@4.0.2/dist/hotkeys-js.min.js
// @require       https://cdn.jsdelivr.net/npm/bowser@2.14.1/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @include       /https?:\/\/(www.)?(asurascans|asuracomics).(com|net)\/.+/
// @include       /https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/
// @include       /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/
// @include       /https?:\/\/(www\.)?comick.io\/.+/
// @include       /https?:\/\/comix\.to\/(title|comic)\/.+\/.+/
// @include       /https?:\/\/(www\.)?demonicscans\.org\/(title\/.+\/chapter\/.+|chaptered\.php\?manga=\d+&chapter=.+)/
// @include       /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/
// @include       /https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/
// @include       /https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/
// @include       /https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/
// @include       /https?:\/\/(www.)?leercapitulo.co\/leer\/.+/
// @include       /https?:\/\/(www\.)?lhtranslation.net\/read.+/
// @include       /(file:\/\/\/.+(index)?.html)/
// @include       /https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/
// @include       /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?mangadex.org/
// @include       /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include       /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/
// @include       /https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/
// @include       /https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/
// @include       /https?:\/\/mangaball\.net\/chapter-detail\/.+/
// @include       /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/
// @include       /https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/
// @include       /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/
// @include       /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/
// @include       /https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//
// @include       /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/
// @include       /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/
// @include       /https?:\/\/(www\.)?nineanime.com\/chapter\/.+/
// @include       /https?:\/\/(www\.)?olympusxyz.com\/capitulo\/\d+\/.+/
// @include       /https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/
// @include       /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include       /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/
// @include       /https?:\/\/(www\.)?webnovel.com\/comic\/.+/
// @include       /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/
// @include       /https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/
// @include       /https?:\/\/(www\.)?weebdex\.org\/.+/
// @include       /https?:\/\/(www.)?(vortexscans).(org)\/.+/
// @include       /https?:\/\/(www\.)?zscans.com\/comics\/.+/
// @include       /https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/
// @include       /^(?!.*jaiminisbox).*\/read\/.+/
// @include       /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/
// @exclude       /https?:\/\/(www\.)?tsumino.com\/.+/
// @exclude       /https?:\/\/(www\.)?pururin.io\/.+/
// ==/UserScript==
(function(){var mp=Object.create,la=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,vp=Object.getOwnPropertyNames,bp=Object.getPrototypeOf,wp=Object.prototype.hasOwnProperty,Mr=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),an=(e,t)=>{let r={};for(var i in e)la(r,i,{get:e[i],enumerable:!0});return t||la(r,Symbol.toStringTag,{value:"Module"}),r},_p=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=vp(t),s=0,l=a.length,c;s<l;s++)c=a[s],!wp.call(e,c)&&c!==r&&la(e,c,{get:(u=>t[u]).bind(null,c),enumerable:!(i=gp(t,c))||i.enumerable});return e},ca=(e,t,r)=>(r=e!=null?mp(bp(e)):{},_p(t||!e||!e.__esModule?la(r,"default",{value:e,enumerable:!0}):r,e)),yp=Mr(((e,t)=>{(function(r,i){typeof e=="object"&&typeof t=="object"?t.exports=i():typeof define=="function"&&define.amd?define([],i):typeof e=="object"?e.bowser=i():r.bowser=i()})(e,(function(){return(function(r){var i={};function a(s){if(i[s])return i[s].exports;var l=i[s]={i:s,l:!1,exports:{}};return r[s].call(l.exports,l,l.exports,a),l.l=!0,l.exports}return a.m=r,a.c=i,a.d=function(s,l,c){a.o(s,l)||Object.defineProperty(s,l,{enumerable:!0,get:c})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,l){if(1&l&&(s=a(s)),8&l||4&l&&typeof s=="object"&&s&&s.__esModule)return s;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:s}),2&l&&typeof s!="string")for(var u in s)a.d(c,u,function(f){return s[f]}.bind(null,u));return c},a.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(l,"a",l),l},a.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)},a.p="",a(a.s=90)})({17:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=a(18);i.default=(function(){function l(){}return l.getFirstMatch=function(c,u){var f=u.match(c);return f&&f.length>0&&f[1]||""},l.getSecondMatch=function(c,u){var f=u.match(c);return f&&f.length>1&&f[2]||""},l.matchAndReturnConst=function(c,u,f){if(c.test(u))return f},l.getWindowsVersionName=function(c){switch(c){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},l.getMacOSVersionName=function(c){var u=c.split(".").splice(0,2).map((function(w){return parseInt(w,10)||0}));u.push(0);var f=u[0],p=u[1];if(f===10)switch(p){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(f){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},l.getAndroidVersionName=function(c){var u=c.split(".").splice(0,2).map((function(f){return parseInt(f,10)||0}));if(u.push(0),!(u[0]===1&&u[1]<5))return u[0]===1&&u[1]<6?"Cupcake":u[0]===1&&u[1]>=6?"Donut":u[0]===2&&u[1]<2?"Eclair":u[0]===2&&u[1]===2?"Froyo":u[0]===2&&u[1]>2?"Gingerbread":u[0]===3?"Honeycomb":u[0]===4&&u[1]<1?"Ice Cream Sandwich":u[0]===4&&u[1]<4?"Jelly Bean":u[0]===4&&u[1]>=4?"KitKat":u[0]===5?"Lollipop":u[0]===6?"Marshmallow":u[0]===7?"Nougat":u[0]===8?"Oreo":u[0]===9?"Pie":void 0},l.getVersionPrecision=function(c){return c.split(".").length},l.compareVersions=function(c,u,f){f===void 0&&(f=!1);var p=l.getVersionPrecision(c),w=l.getVersionPrecision(u),b=Math.max(p,w),g=0,v=l.map([c,u],(function(_){var y=b-l.getVersionPrecision(_),S=_+new Array(y+1).join(".0");return l.map(S.split("."),(function(M){return new Array(20-M.length).join("0")+M})).reverse()}));for(f&&(g=b-Math.min(p,w)),b-=1;b>=g;){if(v[0][b]>v[1][b])return 1;if(v[0][b]===v[1][b]){if(b===g)return 0;b-=1}else if(v[0][b]<v[1][b])return-1}},l.map=function(c,u){var f,p=[];if(Array.prototype.map)return Array.prototype.map.call(c,u);for(f=0;f<c.length;f+=1)p.push(u(c[f]));return p},l.find=function(c,u){var f,p;if(Array.prototype.find)return Array.prototype.find.call(c,u);for(f=0,p=c.length;f<p;f+=1){var w=c[f];if(u(w,f))return w}},l.assign=function(c){for(var u,f,p=c,w=arguments.length,b=new Array(w>1?w-1:0),g=1;g<w;g++)b[g-1]=arguments[g];if(Object.assign)return Object.assign.apply(Object,[c].concat(b));var v=function(){var _=b[u];typeof _=="object"&&_!==null&&Object.keys(_).forEach((function(y){p[y]=_[y]}))};for(u=0,f=b.length;u<f;u+=1)v();return c},l.getBrowserAlias=function(c){return s.BROWSER_ALIASES_MAP[c]},l.getBrowserTypeByAlias=function(c){return s.BROWSER_MAP[c]||""},l})(),r.exports=i.default},18:function(r,i,a){"use strict";i.__esModule=!0,i.ENGINE_MAP=i.OS_MAP=i.PLATFORMS_MAP=i.BROWSER_MAP=i.BROWSER_ALIASES_MAP=void 0,i.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},i.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},i.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},i.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},i.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(91))&&s.__esModule?s:{default:s},c=a(18);function u(f,p){for(var w=0;w<p.length;w++){var b=p[w];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(f,b.key,b)}}i.default=(function(){function f(){}var p,w,b;return f.getParser=function(g,v,_){if(v===void 0&&(v=!1),_===void 0&&(_=null),typeof g!="string")throw new Error("UserAgent should be a string");return new l.default(g,v,_)},f.parse=function(g,v){return v===void 0&&(v=null),new l.default(g,v).getResult()},p=f,b=[{key:"BROWSER_MAP",get:function(){return c.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return c.ENGINE_MAP}},{key:"OS_MAP",get:function(){return c.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return c.PLATFORMS_MAP}}],(w=null)&&u(p.prototype,w),b&&u(p,b),f})(),r.exports=i.default},91:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=p(a(92)),l=p(a(93)),c=p(a(94)),u=p(a(95)),f=p(a(17));function p(w){return w&&w.__esModule?w:{default:w}}i.default=(function(){function w(g,v,_){if(v===void 0&&(v=!1),_===void 0&&(_=null),g==null||g==="")throw new Error("UserAgent parameter can't be empty");this._ua=g;var y=!1;typeof v=="boolean"?(y=v,this._hints=_):this._hints=v!=null&&typeof v=="object"?v:null,this.parsedResult={},y!==!0&&this.parse()}var b=w.prototype;return b.getHints=function(){return this._hints},b.hasBrand=function(g){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var v=g.toLowerCase();return this._hints.brands.some((function(_){return _.brand&&_.brand.toLowerCase()===v}))},b.getBrandVersion=function(g){if(this._hints&&Array.isArray(this._hints.brands)){var v=g.toLowerCase(),_=this._hints.brands.find((function(y){return y.brand&&y.brand.toLowerCase()===v}));return _?_.version:void 0}},b.getUA=function(){return this._ua},b.test=function(g){return g.test(this._ua)},b.parseBrowser=function(){var g=this;this.parsedResult.browser={};var v=f.default.find(s.default,(function(_){if(typeof _.test=="function")return _.test(g);if(Array.isArray(_.test))return _.test.some((function(y){return g.test(y)}));throw new Error("Browser's test function is not valid")}));return v&&(this.parsedResult.browser=v.describe(this.getUA(),this)),this.parsedResult.browser},b.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},b.getBrowserName=function(g){return g?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},b.getBrowserVersion=function(){return this.getBrowser().version},b.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},b.parseOS=function(){var g=this;this.parsedResult.os={};var v=f.default.find(l.default,(function(_){if(typeof _.test=="function")return _.test(g);if(Array.isArray(_.test))return _.test.some((function(y){return g.test(y)}));throw new Error("Browser's test function is not valid")}));return v&&(this.parsedResult.os=v.describe(this.getUA())),this.parsedResult.os},b.getOSName=function(g){var v=this.getOS().name;return g?String(v).toLowerCase()||"":v||""},b.getOSVersion=function(){return this.getOS().version},b.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},b.getPlatformType=function(g){g===void 0&&(g=!1);var v=this.getPlatform().type;return g?String(v).toLowerCase()||"":v||""},b.parsePlatform=function(){var g=this;this.parsedResult.platform={};var v=f.default.find(c.default,(function(_){if(typeof _.test=="function")return _.test(g);if(Array.isArray(_.test))return _.test.some((function(y){return g.test(y)}));throw new Error("Browser's test function is not valid")}));return v&&(this.parsedResult.platform=v.describe(this.getUA())),this.parsedResult.platform},b.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},b.getEngineName=function(g){return g?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},b.parseEngine=function(){var g=this;this.parsedResult.engine={};var v=f.default.find(u.default,(function(_){if(typeof _.test=="function")return _.test(g);if(Array.isArray(_.test))return _.test.some((function(y){return g.test(y)}));throw new Error("Browser's test function is not valid")}));return v&&(this.parsedResult.engine=v.describe(this.getUA())),this.parsedResult.engine},b.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},b.getResult=function(){return f.default.assign({},this.parsedResult)},b.satisfies=function(g){var v=this,_={},y=0,S={},M=0;if(Object.keys(g).forEach((function(me){var ke=g[me];typeof ke=="string"?(S[me]=ke,M+=1):typeof ke=="object"&&(_[me]=ke,y+=1)})),y>0){var O=Object.keys(_),T=f.default.find(O,(function(me){return v.isOS(me)}));if(T){var D=this.satisfies(_[T]);if(D!==void 0)return D}var K=f.default.find(O,(function(me){return v.isPlatform(me)}));if(K){var V=this.satisfies(_[K]);if(V!==void 0)return V}}if(M>0){var ne=Object.keys(S),W=f.default.find(ne,(function(me){return v.isBrowser(me,!0)}));if(W!==void 0)return this.compareVersion(S[W])}},b.isBrowser=function(g,v){v===void 0&&(v=!1);var _=this.getBrowserName().toLowerCase(),y=g.toLowerCase(),S=f.default.getBrowserTypeByAlias(y);return v&&S&&(y=S.toLowerCase()),y===_},b.compareVersion=function(g){var v=[0],_=g,y=!1,S=this.getBrowserVersion();if(typeof S=="string")return g[0]===">"||g[0]==="<"?(_=g.substr(1),g[1]==="="?(y=!0,_=g.substr(2)):v=[],g[0]===">"?v.push(1):v.push(-1)):g[0]==="="?_=g.substr(1):g[0]==="~"&&(y=!0,_=g.substr(1)),v.indexOf(f.default.compareVersions(S,_,y))>-1},b.isOS=function(g){return this.getOSName(!0)===String(g).toLowerCase()},b.isPlatform=function(g){return this.getPlatformType(!0)===String(g).toLowerCase()},b.isEngine=function(g){return this.getEngineName(!0)===String(g).toLowerCase()},b.is=function(g,v){return v===void 0&&(v=!1),this.isBrowser(g,v)||this.isOS(g)||this.isPlatform(g)},b.some=function(g){var v=this;return g===void 0&&(g=[]),g.some((function(_){return v.is(_)}))},w})(),r.exports=i.default},92:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},c=/version\/(\d+(\.?_?\d+)+)/i;i.default=[{test:[/gptbot/i],describe:function(u){var f={name:"GPTBot"},p=l.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/chatgpt-user/i],describe:function(u){var f={name:"ChatGPT-User"},p=l.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/oai-searchbot/i],describe:function(u){var f={name:"OAI-SearchBot"},p=l.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(u){var f={name:"ClaudeBot"},p=l.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(u){var f={name:"Omgilibot"},p=l.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/diffbot/i],describe:function(u){var f={name:"Diffbot"},p=l.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/perplexitybot/i],describe:function(u){var f={name:"PerplexityBot"},p=l.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/perplexity-user/i],describe:function(u){var f={name:"Perplexity-User"},p=l.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/youbot/i],describe:function(u){var f={name:"YouBot"},p=l.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/meta-webindexer/i],describe:function(u){var f={name:"Meta-WebIndexer"},p=l.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/meta-externalads/i],describe:function(u){var f={name:"Meta-ExternalAds"},p=l.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/meta-externalagent/i],describe:function(u){var f={name:"Meta-ExternalAgent"},p=l.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/meta-externalfetcher/i],describe:function(u){var f={name:"Meta-ExternalFetcher"},p=l.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/googlebot/i],describe:function(u){var f={name:"Googlebot"},p=l.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/linespider/i],describe:function(u){var f={name:"Linespider"},p=l.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/amazonbot/i],describe:function(u){var f={name:"AmazonBot"},p=l.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/bingbot/i],describe:function(u){var f={name:"BingCrawler"},p=l.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/baiduspider/i],describe:function(u){var f={name:"BaiduSpider"},p=l.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/duckduckbot/i],describe:function(u){var f={name:"DuckDuckBot"},p=l.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/ia_archiver/i],describe:function(u){var f={name:"InternetArchiveCrawler"},p=l.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(u){var f={name:"SlackBot"},p=l.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(u){var f={name:"Opera"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/opr\/|opios/i],describe:function(u){var f={name:"Opera"},p=l.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/SamsungBrowser/i],describe:function(u){var f={name:"Samsung Internet for Android"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/Whale/i],describe:function(u){var f={name:"NAVER Whale Browser"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/PaleMoon/i],describe:function(u){var f={name:"Pale Moon"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/MZBrowser/i],describe:function(u){var f={name:"MZ Browser"},p=l.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/focus/i],describe:function(u){var f={name:"Focus"},p=l.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/swing/i],describe:function(u){var f={name:"Swing"},p=l.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/coast/i],describe:function(u){var f={name:"Opera Coast"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(u){var f={name:"Opera Touch"},p=l.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/yabrowser/i],describe:function(u){var f={name:"Yandex Browser"},p=l.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/ucbrowser/i],describe:function(u){var f={name:"UC Browser"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/Maxthon|mxios/i],describe:function(u){var f={name:"Maxthon"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/epiphany/i],describe:function(u){var f={name:"Epiphany"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/puffin/i],describe:function(u){var f={name:"Puffin"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/sleipnir/i],describe:function(u){var f={name:"Sleipnir"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/k-meleon/i],describe:function(u){var f={name:"K-Meleon"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/micromessenger/i],describe:function(u){var f={name:"WeChat"},p=l.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/qqbrowser/i],describe:function(u){var f={name:/qqbrowserlite/i.test(u)?"QQ Browser Lite":"QQ Browser"},p=l.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/msie|trident/i],describe:function(u){var f={name:"Internet Explorer"},p=l.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/\sedg\//i],describe:function(u){var f={name:"Microsoft Edge"},p=l.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/edg([ea]|ios)/i],describe:function(u){var f={name:"Microsoft Edge"},p=l.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/vivaldi/i],describe:function(u){var f={name:"Vivaldi"},p=l.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/seamonkey/i],describe:function(u){var f={name:"SeaMonkey"},p=l.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/sailfish/i],describe:function(u){var f={name:"Sailfish"},p=l.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,u);return p&&(f.version=p),f}},{test:[/silk/i],describe:function(u){var f={name:"Amazon Silk"},p=l.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/phantom/i],describe:function(u){var f={name:"PhantomJS"},p=l.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/slimerjs/i],describe:function(u){var f={name:"SlimerJS"},p=l.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(u){var f={name:"BlackBerry"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/(web|hpw)[o0]s/i],describe:function(u){var f={name:"WebOS Browser"},p=l.default.getFirstMatch(c,u)||l.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/bada/i],describe:function(u){var f={name:"Bada"},p=l.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/tizen/i],describe:function(u){var f={name:"Tizen"},p=l.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/qupzilla/i],describe:function(u){var f={name:"QupZilla"},p=l.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/librewolf/i],describe:function(u){var f={name:"LibreWolf"},p=l.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/firefox|iceweasel|fxios/i],describe:function(u){var f={name:"Firefox"},p=l.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/electron/i],describe:function(u){var f={name:"Electron"},p=l.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(u){var f={name:"Sogou Browser"},p=l.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,u),w=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,u),b=l.default.getFirstMatch(/se ([\d.]+)x/i,u),g=p||w||b;return g&&(f.version=g),f}},{test:[/MiuiBrowser/i],describe:function(u){var f={name:"Miui"},p=l.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){return!!u.hasBrand("DuckDuckGo")||u.test(/\sDdg\/[\d.]+$/i)},describe:function(u,f){var p={name:"DuckDuckGo"};if(f){var w=f.getBrandVersion("DuckDuckGo");if(w)return p.version=w,p}var b=l.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,u);return b&&(p.version=b),p}},{test:function(u){return u.hasBrand("Brave")},describe:function(u,f){var p={name:"Brave"};if(f){var w=f.getBrandVersion("Brave");if(w)return p.version=w,p}return p}},{test:[/chromium/i],describe:function(u){var f={name:"Chromium"},p=l.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/chrome|crios|crmo/i],describe:function(u){var f={name:"Chrome"},p=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/GSA/i],describe:function(u){var f={name:"Google Search"},p=l.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){var f=!u.test(/like android/i),p=u.test(/android/i);return f&&p},describe:function(u){var f={name:"Android Browser"},p=l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/playstation 4/i],describe:function(u){var f={name:"PlayStation 4"},p=l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/safari|applewebkit/i],describe:function(u){var f={name:"Safari"},p=l.default.getFirstMatch(c,u);return p&&(f.version=p),f}},{test:[/.*/i],describe:function(u){var f=u.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:l.default.getFirstMatch(f,u),version:l.default.getSecondMatch(f,u)}}}],r.exports=i.default},93:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},c=a(18);i.default=[{test:[/Roku\/DVP/],describe:function(u){var f=l.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,u);return{name:c.OS_MAP.Roku,version:f}}},{test:[/windows phone/i],describe:function(u){var f=l.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,u);return{name:c.OS_MAP.WindowsPhone,version:f}}},{test:[/windows /i],describe:function(u){var f=l.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,u),p=l.default.getWindowsVersionName(f);return{name:c.OS_MAP.Windows,version:f,versionName:p}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(u){var f={name:c.OS_MAP.iOS},p=l.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,u);return p&&(f.version=p),f}},{test:[/macintosh/i],describe:function(u){var f=l.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,u).replace(/[_\s]/g,"."),p=l.default.getMacOSVersionName(f),w={name:c.OS_MAP.MacOS,version:f};return p&&(w.versionName=p),w}},{test:[/(ipod|iphone|ipad)/i],describe:function(u){var f=l.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,u).replace(/[_\s]/g,".");return{name:c.OS_MAP.iOS,version:f}}},{test:[/OpenHarmony/i],describe:function(u){var f=l.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,u);return{name:c.OS_MAP.HarmonyOS,version:f}}},{test:function(u){var f=!u.test(/like android/i),p=u.test(/android/i);return f&&p},describe:function(u){var f=l.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,u),p=l.default.getAndroidVersionName(f),w={name:c.OS_MAP.Android,version:f};return p&&(w.versionName=p),w}},{test:[/(web|hpw)[o0]s/i],describe:function(u){var f=l.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,u),p={name:c.OS_MAP.WebOS};return f&&f.length&&(p.version=f),p}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(u){var f=l.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,u)||l.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,u)||l.default.getFirstMatch(/\bbb(\d+)/i,u);return{name:c.OS_MAP.BlackBerry,version:f}}},{test:[/bada/i],describe:function(u){var f=l.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,u);return{name:c.OS_MAP.Bada,version:f}}},{test:[/tizen/i],describe:function(u){var f=l.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,u);return{name:c.OS_MAP.Tizen,version:f}}},{test:[/linux/i],describe:function(){return{name:c.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:c.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(u){var f=l.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,u);return{name:c.OS_MAP.PlayStation4,version:f}}}],r.exports=i.default},94:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},c=a(18);i.default=[{test:[/googlebot/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:c.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(u){var f=l.default.getFirstMatch(/(can-l01)/i,u)&&"Nova",p={type:c.PLATFORMS_MAP.mobile,vendor:"Huawei"};return f&&(p.model=f),p}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:c.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:c.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:c.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:c.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:c.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:c.PLATFORMS_MAP.tablet}}},{test:function(u){var f=u.test(/ipod|iphone/i),p=u.test(/like (ipod|iphone)/i);return f&&!p},describe:function(u){var f=l.default.getFirstMatch(/(ipod|iphone)/i,u);return{type:c.PLATFORMS_MAP.mobile,vendor:"Apple",model:f}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:c.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(u){var f=l.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,u),p={type:c.PLATFORMS_MAP.mobile,vendor:"Nokia"};return f&&(p.model=f),p}},{test:[/[^-]mobi/i],describe:function(){return{type:c.PLATFORMS_MAP.mobile}}},{test:function(u){return u.getBrowserName(!0)==="blackberry"},describe:function(){return{type:c.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(u){return u.getBrowserName(!0)==="bada"},describe:function(){return{type:c.PLATFORMS_MAP.mobile}}},{test:function(u){return u.getBrowserName()==="windows phone"},describe:function(){return{type:c.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(u){var f=Number(String(u.getOSVersion()).split(".")[0]);return u.getOSName(!0)==="android"&&f>=3},describe:function(){return{type:c.PLATFORMS_MAP.tablet}}},{test:function(u){return u.getOSName(!0)==="android"},describe:function(){return{type:c.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:c.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:c.PLATFORMS_MAP.tv}}},{test:function(u){return u.getOSName(!0)==="macos"},describe:function(){return{type:c.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(u){return u.getOSName(!0)==="windows"},describe:function(){return{type:c.PLATFORMS_MAP.desktop}}},{test:function(u){return u.getOSName(!0)==="linux"},describe:function(){return{type:c.PLATFORMS_MAP.desktop}}},{test:function(u){return u.getOSName(!0)==="playstation 4"},describe:function(){return{type:c.PLATFORMS_MAP.tv}}},{test:function(u){return u.getOSName(!0)==="roku"},describe:function(){return{type:c.PLATFORMS_MAP.tv}}}],r.exports=i.default},95:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},c=a(18);i.default=[{test:function(u){return u.getBrowserName(!0)==="microsoft edge"},describe:function(u){if(/\sedg\//i.test(u))return{name:c.ENGINE_MAP.Blink};var f=l.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,u);return{name:c.ENGINE_MAP.EdgeHTML,version:f}}},{test:[/trident/i],describe:function(u){var f={name:c.ENGINE_MAP.Trident},p=l.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){return u.test(/presto/i)},describe:function(u){var f={name:c.ENGINE_MAP.Presto},p=l.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){var f=u.test(/gecko/i),p=u.test(/like gecko/i);return f&&!p},describe:function(u){var f={name:c.ENGINE_MAP.Gecko},p=l.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:c.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(u){var f={name:c.ENGINE_MAP.WebKit},p=l.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}}],r.exports=i.default}})}))})),Xu=ca(yp(),1);function kp(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function ye(...e){return console.log("MangaOnlineViewer-main-min: ",...e),e}function jt(...e){return["dev","development"].includes("main-min")&&console.info("MangaOnlineViewer: ",...e),e}function Ju(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):jt("Fake Removing: ",e)}var tl=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function Ep(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(jt("Fake Getting: ",e," = ",t),t)}function Qu(e,t){const r=Ep(e,t);if(typeof r=="string"&&r.trim()!=="")try{return JSON.parse(r)}catch(i){return ye("Failed to parse JSON from storage",e,i),t}return r}function Sp(e){return Qu("settings",e)}function Ap(e){return Qu(window.location.hostname,e)}function ed(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),ye("Setting: ",e," = ",t),t.toString()):(jt("Fake Setting: ",e," = ",t),String(t))}function Mp(e){return ed("settings",e)}function td(e){return ed(window.location.hostname,e)}function xp(){const e=Xu.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function Ip(){return tl.scriptHandler??"Greasemonkey"}var di=()=>{const e=Xu.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},Cp=()=>di()==="mobile"||di()==="tablet",rl=()=>window.location.protocol==="file:"||window.location.pathname.endsWith("Manga_Local_Viewer.html"),rd=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(r,i,a,s)=>{s&&e(a)})}catch(r){ye("Failed to add settings listener",r)}},Op=Mr(((e,t)=>{(function(){var r,i="4.18.1",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",u="Invalid `imports` option passed into `_.template`",f="__lodash_hash_undefined__",p=500,w="__lodash_placeholder__",b=1,g=2,v=4,_=1,y=2,S=1,M=2,O=4,T=8,D=16,K=32,V=64,ne=128,W=256,me=512,ke=30,P="...",J=800,A=16,ee=1,Ce=2,ue=3,Re=1/0,se=9007199254740991,Ie=17976931348623157e292,U=NaN,G=4294967295,Me=G-1,ge=G>>>1,pe=[["ary",ne],["bind",S],["bindKey",M],["curry",T],["curryRight",D],["flip",me],["partial",K],["partialRight",V],["rearg",W]],Je="[object Arguments]",wt="[object Array]",Ze="[object AsyncFunction]",Ue="[object Boolean]",mt="[object Date]",_t="[object DOMException]",Xt="[object Error]",Vt="[object Function]",k="[object GeneratorFunction]",Q="[object Map]",Z="[object Number]",L="[object Null]",C="[object Object]",B="[object Promise]",ae="[object Proxy]",le="[object RegExp]",F="[object Set]",de="[object String]",ve="[object Symbol]",he="[object Undefined]",Ae="[object WeakMap]",it="[object WeakSet]",Ve="[object ArrayBuffer]",Pt="[object DataView]",mn="[object Float32Array]",or="[object Float64Array]",gn="[object Int8Array]",ht="[object Int16Array]",Hn="[object Int32Array]",ho="[object Uint8Array]",_r="[object Uint8ClampedArray]",Xo="[object Uint16Array]",qi="[object Uint32Array]",Dc=/\b__p \+= '';/g,zc=/\b(__p \+=) '' \+/g,fs=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Fn=/&(?:amp|lt|gt|quot|#39);/g,fo=/[&<>"']/g,C8=RegExp(Fn.source),O8=RegExp(fo.source),T8=/<%-([\s\S]+?)%>/g,L8=/<%([\s\S]+?)%>/g,$1=/<%=([\s\S]+?)%>/g,R8=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P8=/^\w*$/,$8=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nc=/[\\^$.*+?()[\]{}|]/g,D8=RegExp(Nc.source),Bc=/^\s+/,z8=/\s/,N8=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,B8=/\{\n\/\* \[wrapped with (.+)\] \*/,H8=/,? & /,F8=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,D1=/[()=,{}\[\]\/\s]/,G8=/\\(\\)?/g,W8=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,z1=/\w*$/,U8=/^[-+]0x[0-9a-f]+$/i,V8=/^0b[01]+$/i,q8=/^\[object .+?Constructor\]$/,Z8=/^0o[0-7]+$/i,j8=/^(?:0|[1-9]\d*)$/,K8=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ps=/($^)/,Y8=/['\n\r\u2028\u2029\\]/g,ms="\\ud800-\\udfff",N1="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",B1="\\u2700-\\u27bf",H1="a-z\\xdf-\\xf6\\xf8-\\xff",X8="\\xac\\xb1\\xd7\\xf7",J8="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Q8="\\u2000-\\u206f",e_=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",F1="A-Z\\xc0-\\xd6\\xd8-\\xde",G1="\\ufe0e\\ufe0f",W1=X8+J8+Q8+e_,Hc="['’]",t_="["+ms+"]",U1="["+W1+"]",gs="["+N1+"]",V1="\\d+",r_="["+B1+"]",q1="["+H1+"]",Z1="[^"+ms+W1+V1+B1+H1+F1+"]",Fc="\\ud83c[\\udffb-\\udfff]",n_="(?:"+gs+"|"+Fc+")",j1="[^"+ms+"]",Gc="(?:\\ud83c[\\udde6-\\uddff]){2}",Wc="[\\ud800-\\udbff][\\udc00-\\udfff]",Jo="["+F1+"]",K1="\\u200d",Y1="(?:"+q1+"|"+Z1+")",o_="(?:"+Jo+"|"+Z1+")",X1="(?:"+Hc+"(?:d|ll|m|re|s|t|ve))?",J1="(?:"+Hc+"(?:D|LL|M|RE|S|T|VE))?",Q1=n_+"?",ef="["+G1+"]?",i_="(?:"+K1+"(?:"+[j1,Gc,Wc].join("|")+")"+ef+Q1+")*",a_="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",s_="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tf=ef+Q1+i_,l_="(?:"+[r_,Gc,Wc].join("|")+")"+tf,c_="(?:"+[j1+gs+"?",gs,Gc,Wc,t_].join("|")+")",u_=RegExp(Hc,"g"),d_=RegExp(gs,"g"),Uc=RegExp(Fc+"(?="+Fc+")|"+c_+tf,"g"),h_=RegExp([Jo+"?"+q1+"+"+X1+"(?="+[U1,Jo,"$"].join("|")+")",o_+"+"+J1+"(?="+[U1,Jo+Y1,"$"].join("|")+")",Jo+"?"+Y1+"+"+X1,Jo+"+"+J1,s_,a_,V1,l_].join("|"),"g"),f_=RegExp("["+K1+ms+N1+G1+"]"),p_=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,m_=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],g_=-1,ft={};ft[mn]=ft[or]=ft[gn]=ft[ht]=ft[Hn]=ft[ho]=ft[_r]=ft[Xo]=ft[qi]=!0,ft[Je]=ft[wt]=ft[Ve]=ft[Ue]=ft[Pt]=ft[mt]=ft[Xt]=ft[Vt]=ft[Q]=ft[Z]=ft[C]=ft[le]=ft[F]=ft[de]=ft[Ae]=!1;var ut={};ut[Je]=ut[wt]=ut[Ve]=ut[Pt]=ut[Ue]=ut[mt]=ut[mn]=ut[or]=ut[gn]=ut[ht]=ut[Hn]=ut[Q]=ut[Z]=ut[C]=ut[le]=ut[F]=ut[de]=ut[ve]=ut[ho]=ut[_r]=ut[Xo]=ut[qi]=!0,ut[Xt]=ut[Vt]=ut[Ae]=!1;var v_={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},b_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},w_={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},__={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},y_=parseFloat,k_=parseInt,rf=typeof global=="object"&&global&&global.Object===Object&&global,E_=typeof self=="object"&&self&&self.Object===Object&&self,Nt=rf||E_||Function("return this")(),Vc=typeof e=="object"&&e&&!e.nodeType&&e,po=Vc&&typeof t=="object"&&t&&!t.nodeType&&t,nf=po&&po.exports===Vc,qc=nf&&rf.process,Rr=(function(){try{var N=po&&po.require&&po.require("util").types;return N||qc&&qc.binding&&qc.binding("util")}catch{}})(),of=Rr&&Rr.isArrayBuffer,af=Rr&&Rr.isDate,sf=Rr&&Rr.isMap,lf=Rr&&Rr.isRegExp,cf=Rr&&Rr.isSet,uf=Rr&&Rr.isTypedArray;function yr(N,te,q){switch(q.length){case 0:return N.call(te);case 1:return N.call(te,q[0]);case 2:return N.call(te,q[0],q[1]);case 3:return N.call(te,q[0],q[1],q[2])}return N.apply(te,q)}function S_(N,te,q,_e){for(var ze=-1,tt=N==null?0:N.length;++ze<tt;){var $t=N[ze];te(_e,$t,q($t),N)}return _e}function kr(N,te){for(var q=-1,_e=N==null?0:N.length;++q<_e&&te(N[q],q,N)!==!1;);return N}function A_(N,te){for(var q=N==null?0:N.length;q--&&te(N[q],q,N)!==!1;);return N}function df(N,te){for(var q=-1,_e=N==null?0:N.length;++q<_e;)if(!te(N[q],q,N))return!1;return!0}function Gn(N,te){for(var q=-1,_e=N==null?0:N.length,ze=0,tt=[];++q<_e;){var $t=N[q];te($t,q,N)&&(tt[ze++]=$t)}return tt}function vs(N,te){return!!(N!=null&&N.length)&&Qo(N,te,0)>-1}function Zc(N,te,q){for(var _e=-1,ze=N==null?0:N.length;++_e<ze;)if(q(te,N[_e]))return!0;return!1}function gt(N,te){for(var q=-1,_e=N==null?0:N.length,ze=Array(_e);++q<_e;)ze[q]=te(N[q],q,N);return ze}function Wn(N,te){for(var q=-1,_e=te.length,ze=N.length;++q<_e;)N[ze+q]=te[q];return N}function jc(N,te,q,_e){var ze=-1,tt=N==null?0:N.length;for(_e&&tt&&(q=N[++ze]);++ze<tt;)q=te(q,N[ze],ze,N);return q}function M_(N,te,q,_e){var ze=N==null?0:N.length;for(_e&&ze&&(q=N[--ze]);ze--;)q=te(q,N[ze],ze,N);return q}function Kc(N,te){for(var q=-1,_e=N==null?0:N.length;++q<_e;)if(te(N[q],q,N))return!0;return!1}var x_=Yc("length");function I_(N){return N.split("")}function C_(N){return N.match(F8)||[]}function hf(N,te,q){var _e;return q(N,function(ze,tt,$t){if(te(ze,tt,$t))return _e=tt,!1}),_e}function bs(N,te,q,_e){for(var ze=N.length,tt=q+(_e?1:-1);_e?tt--:++tt<ze;)if(te(N[tt],tt,N))return tt;return-1}function Qo(N,te,q){return te===te?F_(N,te,q):bs(N,ff,q)}function O_(N,te,q,_e){for(var ze=q-1,tt=N.length;++ze<tt;)if(_e(N[ze],te))return ze;return-1}function ff(N){return N!==N}function pf(N,te){var q=N==null?0:N.length;return q?Jc(N,te)/q:U}function Yc(N){return function(te){return te==null?r:te[N]}}function Xc(N){return function(te){return N==null?r:N[te]}}function mf(N,te,q,_e,ze){return ze(N,function(tt,$t,at){q=_e?(_e=!1,tt):te(q,tt,$t,at)}),q}function T_(N,te){var q=N.length;for(N.sort(te);q--;)N[q]=N[q].value;return N}function Jc(N,te){for(var q,_e=-1,ze=N.length;++_e<ze;){var tt=te(N[_e]);tt!==r&&(q=q===r?tt:q+tt)}return q}function Qc(N,te){for(var q=-1,_e=Array(N);++q<N;)_e[q]=te(q);return _e}function L_(N,te){return gt(te,function(q){return[q,N[q]]})}function gf(N){return N&&N.slice(0,_f(N)+1).replace(Bc,"")}function Er(N){return function(te){return N(te)}}function eu(N,te){return gt(te,function(q){return N[q]})}function Zi(N,te){return N.has(te)}function vf(N,te){for(var q=-1,_e=N.length;++q<_e&&Qo(te,N[q],0)>-1;);return q}function bf(N,te){for(var q=N.length;q--&&Qo(te,N[q],0)>-1;);return q}function R_(N,te){for(var q=N.length,_e=0;q--;)N[q]===te&&++_e;return _e}var P_=Xc(v_),$_=Xc(b_);function D_(N){return"\\"+__[N]}function z_(N,te){return N==null?r:N[te]}function ei(N){return f_.test(N)}function N_(N){return p_.test(N)}function B_(N){for(var te,q=[];!(te=N.next()).done;)q.push(te.value);return q}function tu(N){var te=-1,q=Array(N.size);return N.forEach(function(_e,ze){q[++te]=[ze,_e]}),q}function wf(N,te){return function(q){return N(te(q))}}function Un(N,te){for(var q=-1,_e=N.length,ze=0,tt=[];++q<_e;){var $t=N[q];($t===te||$t===w)&&(N[q]=w,tt[ze++]=q)}return tt}function ws(N){var te=-1,q=Array(N.size);return N.forEach(function(_e){q[++te]=_e}),q}function H_(N){var te=-1,q=Array(N.size);return N.forEach(function(_e){q[++te]=[_e,_e]}),q}function F_(N,te,q){for(var _e=q-1,ze=N.length;++_e<ze;)if(N[_e]===te)return _e;return-1}function G_(N,te,q){for(var _e=q+1;_e--;)if(N[_e]===te)return _e;return _e}function ti(N){return ei(N)?U_(N):x_(N)}function Vr(N){return ei(N)?V_(N):I_(N)}function _f(N){for(var te=N.length;te--&&z8.test(N.charAt(te)););return te}var W_=Xc(w_);function U_(N){for(var te=Uc.lastIndex=0;Uc.test(N);)++te;return te}function V_(N){return N.match(Uc)||[]}function q_(N){return N.match(h_)||[]}var Vn=(function N(te){te=te==null?Nt:Vn.defaults(Nt.Object(),te,Vn.pick(Nt,m_));var q=te.Array,_e=te.Date,ze=te.Error,tt=te.Function,$t=te.Math,at=te.Object,ru=te.RegExp,Z_=te.String,Pr=te.TypeError,_s=q.prototype,j_=tt.prototype,ri=at.prototype,ys=te["__core-js_shared__"],ks=j_.toString,nt=ri.hasOwnProperty,K_=0,yf=(function(){var n=/[^.]+$/.exec(ys&&ys.keys&&ys.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Es=ri.toString,Y_=ks.call(at),X_=Nt._,J_=ru("^"+ks.call(nt).replace(Nc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ss=nf?te.Buffer:r,qn=te.Symbol,As=te.Uint8Array,kf=Ss?Ss.allocUnsafe:r,Ms=wf(at.getPrototypeOf,at),Ef=at.create,Sf=ri.propertyIsEnumerable,xs=_s.splice,Af=qn?qn.isConcatSpreadable:r,ji=qn?qn.iterator:r,mo=qn?qn.toStringTag:r,Is=(function(){try{var n=_o(at,"defineProperty");return n({},"",{}),n}catch{}})(),Q_=te.clearTimeout!==Nt.clearTimeout&&te.clearTimeout,ey=_e&&_e.now!==Nt.Date.now&&_e.now,ty=te.setTimeout!==Nt.setTimeout&&te.setTimeout,Cs=$t.ceil,Os=$t.floor,nu=at.getOwnPropertySymbols,ry=Ss?Ss.isBuffer:r,Mf=te.isFinite,ny=_s.join,oy=wf(at.keys,at),Dt=$t.max,qt=$t.min,iy=_e.now,ay=te.parseInt,xf=$t.random,sy=_s.reverse,ou=_o(te,"DataView"),Ki=_o(te,"Map"),iu=_o(te,"Promise"),ni=_o(te,"Set"),Yi=_o(te,"WeakMap"),Xi=_o(at,"create"),Ts=Yi&&new Yi,oi={},ly=yo(ou),cy=yo(Ki),uy=yo(iu),dy=yo(ni),hy=yo(Yi),Ls=qn?qn.prototype:r,Ji=Ls?Ls.valueOf:r,If=Ls?Ls.toString:r;function x(n){if(kt(n)&&!Ge(n)&&!(n instanceof Ke)){if(n instanceof $r)return n;if(nt.call(n,"__wrapped__"))return C2(n)}return new $r(n)}var ii=(function(){function n(){}return function(o){if(!yt(o))return{};if(Ef)return Ef(o);n.prototype=o;var h=new n;return n.prototype=r,h}})();function Rs(){}function $r(n,o){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=r}x.templateSettings={escape:T8,evaluate:L8,interpolate:$1,variable:"",imports:{_:x}},x.prototype=Rs.prototype,x.prototype.constructor=x,$r.prototype=ii(Rs.prototype),$r.prototype.constructor=$r;function Ke(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=G,this.__views__=[]}function fy(){var n=new Ke(this.__wrapped__);return n.__actions__=ir(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=ir(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=ir(this.__views__),n}function py(){if(this.__filtered__){var n=new Ke(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function my(){var n=this.__wrapped__.value(),o=this.__dir__,h=Ge(n),m=o<0,E=h?n.length:0,I=xk(0,E,this.__views__),R=I.start,$=I.end,H=$-R,oe=m?$:R-1,re=this.__iteratees__,ce=re.length,be=0,Ee=qt(H,this.__takeCount__);if(!h||!m&&E==H&&Ee==H)return Jf(n,this.__actions__);var Oe=[];e:for(;H--&&be<Ee;){oe+=o;for(var Be=-1,Te=n[oe];++Be<ce;){var st=re[Be],Ye=st.iteratee,er=st.type,on=Ye(Te);if(er==Ce)Te=on;else if(!on){if(er==ee)continue e;break e}}Oe[be++]=Te}return Oe}Ke.prototype=ii(Rs.prototype),Ke.prototype.constructor=Ke;function go(n){var o=-1,h=n==null?0:n.length;for(this.clear();++o<h;){var m=n[o];this.set(m[0],m[1])}}function gy(){this.__data__=Xi?Xi(null):{},this.size=0}function vy(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}function by(n){var o=this.__data__;if(Xi){var h=o[n];return h===f?r:h}return nt.call(o,n)?o[n]:r}function wy(n){var o=this.__data__;return Xi?o[n]!==r:nt.call(o,n)}function _y(n,o){var h=this.__data__;return this.size+=this.has(n)?0:1,h[n]=Xi&&o===r?f:o,this}go.prototype.clear=gy,go.prototype.delete=vy,go.prototype.get=by,go.prototype.has=wy,go.prototype.set=_y;function vn(n){var o=-1,h=n==null?0:n.length;for(this.clear();++o<h;){var m=n[o];this.set(m[0],m[1])}}function yy(){this.__data__=[],this.size=0}function ky(n){var o=this.__data__,h=Ps(o,n);return h<0?!1:(h==o.length-1?o.pop():xs.call(o,h,1),--this.size,!0)}function Ey(n){var o=this.__data__,h=Ps(o,n);return h<0?r:o[h][1]}function Sy(n){return Ps(this.__data__,n)>-1}function Ay(n,o){var h=this.__data__,m=Ps(h,n);return m<0?(++this.size,h.push([n,o])):h[m][1]=o,this}vn.prototype.clear=yy,vn.prototype.delete=ky,vn.prototype.get=Ey,vn.prototype.has=Sy,vn.prototype.set=Ay;function bn(n){var o=-1,h=n==null?0:n.length;for(this.clear();++o<h;){var m=n[o];this.set(m[0],m[1])}}function My(){this.size=0,this.__data__={hash:new go,map:new(Ki||vn),string:new go}}function xy(n){var o=qs(this,n).delete(n);return this.size-=o?1:0,o}function Iy(n){return qs(this,n).get(n)}function Cy(n){return qs(this,n).has(n)}function Oy(n,o){var h=qs(this,n),m=h.size;return h.set(n,o),this.size+=h.size==m?0:1,this}bn.prototype.clear=My,bn.prototype.delete=xy,bn.prototype.get=Iy,bn.prototype.has=Cy,bn.prototype.set=Oy;function vo(n){var o=-1,h=n==null?0:n.length;for(this.__data__=new bn;++o<h;)this.add(n[o])}function Ty(n){return this.__data__.set(n,f),this}function Ly(n){return this.__data__.has(n)}vo.prototype.add=vo.prototype.push=Ty,vo.prototype.has=Ly;function qr(n){var o=this.__data__=new vn(n);this.size=o.size}function Ry(){this.__data__=new vn,this.size=0}function Py(n){var o=this.__data__,h=o.delete(n);return this.size=o.size,h}function $y(n){return this.__data__.get(n)}function Dy(n){return this.__data__.has(n)}function zy(n,o){var h=this.__data__;if(h instanceof vn){var m=h.__data__;if(!Ki||m.length<a-1)return m.push([n,o]),this.size=++h.size,this;h=this.__data__=new bn(m)}return h.set(n,o),this.size=h.size,this}qr.prototype.clear=Ry,qr.prototype.delete=Py,qr.prototype.get=$y,qr.prototype.has=Dy,qr.prototype.set=zy;function Cf(n,o){var h=Ge(n),m=!h&&ko(n),E=!h&&!m&&Xn(n),I=!h&&!m&&!E&&ci(n),R=h||m||E||I,$=R?Qc(n.length,Z_):[],H=$.length;for(var oe in n)(o||nt.call(n,oe))&&!(R&&(oe=="length"||E&&(oe=="offset"||oe=="parent")||I&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||yn(oe,H)))&&$.push(oe);return $}function Of(n){var o=n.length;return o?n[gu(0,o-1)]:r}function Ny(n,o){return Zs(ir(n),bo(o,0,n.length))}function By(n){return Zs(ir(n))}function au(n,o,h){(h!==r&&!jr(n[o],h)||h===r&&!(o in n))&&tn(n,o,h)}function Qi(n,o,h){var m=n[o];(!(nt.call(n,o)&&jr(m,h))||h===r&&!(o in n))&&tn(n,o,h)}function Ps(n,o){for(var h=n.length;h--;)if(jr(n[h][0],o))return h;return-1}function Hy(n,o,h,m){return Zn(n,function(E,I,R){o(m,E,h(E),R)}),m}function Tf(n,o){return n&&nn(o,Bt(o),n)}function Fy(n,o){return n&&nn(o,sr(o),n)}function tn(n,o,h){o=="__proto__"&&Is?Is(n,o,{configurable:!0,enumerable:!0,value:h,writable:!0}):n[o]=h}function su(n,o){for(var h=-1,m=o.length,E=q(m),I=n==null;++h<m;)E[h]=I?r:Gu(n,o[h]);return E}function bo(n,o,h){return n===n&&(h!==r&&(n=n<=h?n:h),o!==r&&(n=n>=o?n:o)),n}function Dr(n,o,h,m,E,I){var R,$=o&b,H=o&g,oe=o&v;if(h&&(R=E?h(n,m,E,I):h(n)),R!==r)return R;if(!yt(n))return n;var re=Ge(n);if(re){if(R=Ck(n),!$)return ir(n,R)}else{var ce=Zt(n),be=ce==Vt||ce==k;if(Xn(n))return t2(n,$);if(ce==C||ce==Je||be&&!E){if(R=H||be?{}:_2(n),!$)return H?bk(n,Fy(R,n)):vk(n,Tf(R,n))}else{if(!ut[ce])return E?n:{};R=Ok(n,ce,$)}}I||(I=new qr);var Ee=I.get(n);if(Ee)return Ee;I.set(n,R),K2(n)?n.forEach(function(Be){R.add(Dr(Be,o,h,Be,n,I))}):Z2(n)&&n.forEach(function(Be,Te){R.set(Te,Dr(Be,o,h,Te,n,I))});var Oe=re?r:(oe?H?xu:Mu:H?sr:Bt)(n);return kr(Oe||n,function(Be,Te){Oe&&(Te=Be,Be=n[Te]),Qi(R,Te,Dr(Be,o,h,Te,n,I))}),R}function Gy(n){var o=Bt(n);return function(h){return Lf(h,n,o)}}function Lf(n,o,h){var m=h.length;if(n==null)return!m;for(n=at(n);m--;){var E=h[m],I=o[E],R=n[E];if(R===r&&!(E in n)||!I(R))return!1}return!0}function Rf(n,o,h){if(typeof n!="function")throw new Pr(l);return aa(function(){n.apply(r,h)},o)}function ea(n,o,h,m){var E=-1,I=vs,R=!0,$=n.length,H=[],oe=o.length;if(!$)return H;h&&(o=gt(o,Er(h))),m?(I=Zc,R=!1):o.length>=a&&(I=Zi,R=!1,o=new vo(o));e:for(;++E<$;){var re=n[E],ce=h==null?re:h(re);if(re=m||re!==0?re:0,R&&ce===ce){for(var be=oe;be--;)if(o[be]===ce)continue e;H.push(re)}else I(o,ce,m)||H.push(re)}return H}var Zn=a2(rn),Pf=a2(cu,!0);function Wy(n,o){var h=!0;return Zn(n,function(m,E,I){return h=!!o(m,E,I),h}),h}function $s(n,o,h){for(var m=-1,E=n.length;++m<E;){var I=n[m],R=o(I);if(R!=null&&($===r?R===R&&!Ar(R):h(R,$)))var $=R,H=I}return H}function Uy(n,o,h,m){var E=n.length;for(h=We(h),h<0&&(h=-h>E?0:E+h),m=m===r||m>E?E:We(m),m<0&&(m+=E),m=h>m?0:X2(m);h<m;)n[h++]=o;return n}function $f(n,o){var h=[];return Zn(n,function(m,E,I){o(m,E,I)&&h.push(m)}),h}function Wt(n,o,h,m,E){var I=-1,R=n.length;for(h||(h=Lk),E||(E=[]);++I<R;){var $=n[I];o>0&&h($)?o>1?Wt($,o-1,h,m,E):Wn(E,$):m||(E[E.length]=$)}return E}var lu=s2(),Df=s2(!0);function rn(n,o){return n&&lu(n,o,Bt)}function cu(n,o){return n&&Df(n,o,Bt)}function Ds(n,o){return Gn(o,function(h){return kn(n[h])})}function wo(n,o){o=Kn(o,n);for(var h=0,m=o.length;n!=null&&h<m;)n=n[Zr(o[h++])];return h&&h==m?n:r}function zf(n,o,h){var m=o(n);return Ge(n)?m:Wn(m,h(n))}function Jt(n){return n==null?n===r?he:L:mo&&mo in at(n)?Mk(n):Bk(n)}function uu(n,o){return n>o}function Vy(n,o){return n!=null&&nt.call(n,o)}function qy(n,o){return n!=null&&o in at(n)}function Zy(n,o,h){return n>=qt(o,h)&&n<Dt(o,h)}function du(n,o,h){for(var m=h?Zc:vs,E=n[0].length,I=n.length,R=I,$=q(I),H=1/0,oe=[];R--;){var re=n[R];R&&o&&(re=gt(re,Er(o))),H=qt(re.length,H),$[R]=!h&&(o||E>=120&&re.length>=120)?new vo(R&&re):r}re=n[0];var ce=-1,be=$[0];e:for(;++ce<E&&oe.length<H;){var Ee=re[ce],Oe=o?o(Ee):Ee;if(Ee=h||Ee!==0?Ee:0,!(be?Zi(be,Oe):m(oe,Oe,h))){for(R=I;--R;){var Be=$[R];if(!(Be?Zi(Be,Oe):m(n[R],Oe,h)))continue e}be&&be.push(Oe),oe.push(Ee)}}return oe}function jy(n,o,h,m){return rn(n,function(E,I,R){o(m,h(E),I,R)}),m}function ta(n,o,h){o=Kn(o,n),n=S2(n,o);var m=n==null?n:n[Zr(Nr(o))];return m==null?r:yr(m,n,h)}function Nf(n){return kt(n)&&Jt(n)==Je}function Ky(n){return kt(n)&&Jt(n)==Ve}function Yy(n){return kt(n)&&Jt(n)==mt}function ra(n,o,h,m,E){return n===o?!0:n==null||o==null||!kt(n)&&!kt(o)?n!==n&&o!==o:Xy(n,o,h,m,ra,E)}function Xy(n,o,h,m,E,I){var R=Ge(n),$=Ge(o),H=R?wt:Zt(n),oe=$?wt:Zt(o);H=H==Je?C:H,oe=oe==Je?C:oe;var re=H==C,ce=oe==C,be=H==oe;if(be&&Xn(n)){if(!Xn(o))return!1;R=!0,re=!1}if(be&&!re)return I||(I=new qr),R||ci(n)?v2(n,o,h,m,E,I):Sk(n,o,H,h,m,E,I);if(!(h&_)){var Ee=re&&nt.call(n,"__wrapped__"),Oe=ce&&nt.call(o,"__wrapped__");if(Ee||Oe){var Be=Ee?n.value():n,Te=Oe?o.value():o;return I||(I=new qr),E(Be,Te,h,m,I)}}return be?(I||(I=new qr),Ak(n,o,h,m,E,I)):!1}function Jy(n){return kt(n)&&Zt(n)==Q}function hu(n,o,h,m){var E=h.length,I=E,R=!m;if(n==null)return!I;for(n=at(n);E--;){var $=h[E];if(R&&$[2]?$[1]!==n[$[0]]:!($[0]in n))return!1}for(;++E<I;){$=h[E];var H=$[0],oe=n[H],re=$[1];if(R&&$[2]){if(oe===r&&!(H in n))return!1}else{var ce=new qr;if(m)var be=m(oe,re,H,n,o,ce);if(!(be===r?ra(re,oe,3,m,ce):be))return!1}}return!0}function Bf(n){return!yt(n)||Pk(n)?!1:(kn(n)?J_:q8).test(yo(n))}function Qy(n){return kt(n)&&Jt(n)==le}function ek(n){return kt(n)&&Zt(n)==F}function tk(n){return kt(n)&&Qs(n.length)&&!!ft[Jt(n)]}function Hf(n){return typeof n=="function"?n:n==null?lr:typeof n=="object"?Ge(n)?Wf(n[0],n[1]):Gf(n):cp(n)}function fu(n){if(!ia(n))return oy(n);var o=[];for(var h in at(n))nt.call(n,h)&&h!="constructor"&&o.push(h);return o}function rk(n){if(!yt(n))return Nk(n);var o=ia(n),h=[];for(var m in n)m=="constructor"&&(o||!nt.call(n,m))||h.push(m);return h}function pu(n,o){return n<o}function Ff(n,o){var h=-1,m=ar(n)?q(n.length):[];return Zn(n,function(E,I,R){m[++h]=o(E,I,R)}),m}function Gf(n){var o=Cu(n);return o.length==1&&o[0][2]?k2(o[0][0],o[0][1]):function(h){return h===n||hu(h,n,o)}}function Wf(n,o){return Tu(n)&&y2(o)?k2(Zr(n),o):function(h){var m=Gu(h,n);return m===r&&m===o?Wu(h,n):ra(o,m,3)}}function zs(n,o,h,m,E){n!==o&&lu(o,function(I,R){if(E||(E=new qr),yt(I))nk(n,o,R,h,zs,m,E);else{var $=m?m(Ru(n,R),I,R+"",n,o,E):r;$===r&&($=I),au(n,R,$)}},sr)}function nk(n,o,h,m,E,I,R){var $=Ru(n,h),H=Ru(o,h),oe=R.get(H);if(oe){au(n,h,oe);return}var re=I?I($,H,h+"",n,o,R):r,ce=re===r;if(ce){var be=Ge(H),Ee=!be&&Xn(H),Oe=!be&&!Ee&&ci(H);re=H,be||Ee||Oe?Ge($)?re=$:At($)?re=ir($):Ee?(ce=!1,re=t2(H,!0)):Oe?(ce=!1,re=r2(H,!0)):re=[]:sa(H)||ko(H)?(re=$,ko($)?re=J2($):(!yt($)||kn($))&&(re=_2(H))):ce=!1}ce&&(R.set(H,re),E(re,H,m,I,R),R.delete(H)),au(n,h,re)}function Uf(n,o){var h=n.length;if(h)return o+=o<0?h:0,yn(o,h)?n[o]:r}function Vf(n,o,h){o.length?o=gt(o,function(E){return Ge(E)?function(I){return wo(I,E.length===1?E[0]:E)}:E}):o=[lr];var m=-1;return o=gt(o,Er(Le())),T_(Ff(n,function(E,I,R){return{criteria:gt(o,function($){return $(E)}),index:++m,value:E}}),function(E,I){return gk(E,I,h)})}function ok(n,o){return qf(n,o,function(h,m){return Wu(n,m)})}function qf(n,o,h){for(var m=-1,E=o.length,I={};++m<E;){var R=o[m],$=wo(n,R);h($,R)&&na(I,Kn(R,n),$)}return I}function ik(n){return function(o){return wo(o,n)}}function mu(n,o,h,m){var E=m?O_:Qo,I=-1,R=o.length,$=n;for(n===o&&(o=ir(o)),h&&($=gt(n,Er(h)));++I<R;)for(var H=0,oe=o[I],re=h?h(oe):oe;(H=E($,re,H,m))>-1;)$!==n&&xs.call($,H,1),xs.call(n,H,1);return n}function Zf(n,o){for(var h=n?o.length:0,m=h-1;h--;){var E=o[h];if(h==m||E!==I){var I=E;yn(E)?xs.call(n,E,1):wu(n,E)}}return n}function gu(n,o){return n+Os(xf()*(o-n+1))}function ak(n,o,h,m){for(var E=-1,I=Dt(Cs((o-n)/(h||1)),0),R=q(I);I--;)R[m?I:++E]=n,n+=h;return R}function vu(n,o){var h="";if(!n||o<1||o>se)return h;do o%2&&(h+=n),o=Os(o/2),o&&(n+=n);while(o);return h}function je(n,o){return Pu(E2(n,o,lr),n+"")}function sk(n){return Of(ui(n))}function lk(n,o){var h=ui(n);return Zs(h,bo(o,0,h.length))}function na(n,o,h,m){if(!yt(n))return n;o=Kn(o,n);for(var E=-1,I=o.length,R=I-1,$=n;$!=null&&++E<I;){var H=Zr(o[E]),oe=h;if(H==="__proto__"||H==="constructor"||H==="prototype")return n;if(E!=R){var re=$[H];oe=m?m(re,H,$):r,oe===r&&(oe=yt(re)?re:yn(o[E+1])?[]:{})}Qi($,H,oe),$=$[H]}return n}var jf=Ts?function(n,o){return Ts.set(n,o),n}:lr,ck=Is?function(n,o){return Is(n,"toString",{configurable:!0,enumerable:!1,value:Vu(o),writable:!0})}:lr;function uk(n){return Zs(ui(n))}function zr(n,o,h){var m=-1,E=n.length;o<0&&(o=-o>E?0:E+o),h=h>E?E:h,h<0&&(h+=E),E=o>h?0:h-o>>>0,o>>>=0;for(var I=q(E);++m<E;)I[m]=n[m+o];return I}function dk(n,o){var h;return Zn(n,function(m,E,I){return h=o(m,E,I),!h}),!!h}function Ns(n,o,h){var m=0,E=n==null?m:n.length;if(typeof o=="number"&&o===o&&E<=ge){for(;m<E;){var I=m+E>>>1,R=n[I];R!==null&&!Ar(R)&&(h?R<=o:R<o)?m=I+1:E=I}return E}return bu(n,o,lr,h)}function bu(n,o,h,m){var E=0,I=n==null?0:n.length;if(I===0)return 0;o=h(o);for(var R=o!==o,$=o===null,H=Ar(o),oe=o===r;E<I;){var re=Os((E+I)/2),ce=h(n[re]),be=ce!==r,Ee=ce===null,Oe=ce===ce,Be=Ar(ce);if(R)var Te=m||Oe;else oe?Te=Oe&&(m||be):$?Te=Oe&&be&&(m||!Ee):H?Te=Oe&&be&&!Ee&&(m||!Be):Ee||Be?Te=!1:Te=m?ce<=o:ce<o;Te?E=re+1:I=re}return qt(I,Me)}function Kf(n,o){for(var h=-1,m=n.length,E=0,I=[];++h<m;){var R=n[h],$=o?o(R):R;if(!h||!jr($,H)){var H=$;I[E++]=R===0?0:R}}return I}function Yf(n){return typeof n=="number"?n:Ar(n)?U:+n}function Sr(n){if(typeof n=="string")return n;if(Ge(n))return gt(n,Sr)+"";if(Ar(n))return If?If.call(n):"";var o=n+"";return o=="0"&&1/n==-1/0?"-0":o}function jn(n,o,h){var m=-1,E=vs,I=n.length,R=!0,$=[],H=$;if(h)R=!1,E=Zc;else if(I>=a){var oe=o?null:kk(n);if(oe)return ws(oe);R=!1,E=Zi,H=new vo}else H=o?[]:$;e:for(;++m<I;){var re=n[m],ce=o?o(re):re;if(re=h||re!==0?re:0,R&&ce===ce){for(var be=H.length;be--;)if(H[be]===ce)continue e;o&&H.push(ce),$.push(re)}else E(H,ce,h)||(H!==$&&H.push(ce),$.push(re))}return $}function wu(n,o){o=Kn(o,n);var h=-1,m=o.length;if(!m)return!0;for(;++h<m;){var E=Zr(o[h]);if(E==="__proto__"&&!nt.call(n,"__proto__")||(E==="constructor"||E==="prototype")&&h<m-1)return!1}var I=S2(n,o);return I==null||delete I[Zr(Nr(o))]}function Xf(n,o,h,m){return na(n,o,h(wo(n,o)),m)}function Bs(n,o,h,m){for(var E=n.length,I=m?E:-1;(m?I--:++I<E)&&o(n[I],I,n););return h?zr(n,m?0:I,m?I+1:E):zr(n,m?I+1:0,m?E:I)}function Jf(n,o){var h=n;return h instanceof Ke&&(h=h.value()),jc(o,function(m,E){return E.func.apply(E.thisArg,Wn([m],E.args))},h)}function _u(n,o,h){var m=n.length;if(m<2)return m?jn(n[0]):[];for(var E=-1,I=q(m);++E<m;)for(var R=n[E],$=-1;++$<m;)$!=E&&(I[E]=ea(I[E]||R,n[$],o,h));return jn(Wt(I,1),o,h)}function Qf(n,o,h){for(var m=-1,E=n.length,I=o.length,R={};++m<E;){var $=m<I?o[m]:r;h(R,n[m],$)}return R}function yu(n){return At(n)?n:[]}function ku(n){return typeof n=="function"?n:lr}function Kn(n,o){return Ge(n)?n:Tu(n,o)?[n]:I2(ot(n))}var hk=je;function Yn(n,o,h){var m=n.length;return h=h===r?m:h,!o&&h>=m?n:zr(n,o,h)}var e2=Q_||function(n){return Nt.clearTimeout(n)};function t2(n,o){if(o)return n.slice();var h=n.length,m=kf?kf(h):new n.constructor(h);return n.copy(m),m}function Eu(n){var o=new n.constructor(n.byteLength);return new As(o).set(new As(n)),o}function fk(n,o){var h=o?Eu(n.buffer):n.buffer;return new n.constructor(h,n.byteOffset,n.byteLength)}function pk(n){var o=new n.constructor(n.source,z1.exec(n));return o.lastIndex=n.lastIndex,o}function mk(n){return Ji?at(Ji.call(n)):{}}function r2(n,o){var h=o?Eu(n.buffer):n.buffer;return new n.constructor(h,n.byteOffset,n.length)}function n2(n,o){if(n!==o){var h=n!==r,m=n===null,E=n===n,I=Ar(n),R=o!==r,$=o===null,H=o===o,oe=Ar(o);if(!$&&!oe&&!I&&n>o||I&&R&&H&&!$&&!oe||m&&R&&H||!h&&H||!E)return 1;if(!m&&!I&&!oe&&n<o||oe&&h&&E&&!m&&!I||$&&h&&E||!R&&E||!H)return-1}return 0}function gk(n,o,h){for(var m=-1,E=n.criteria,I=o.criteria,R=E.length,$=h.length;++m<R;){var H=n2(E[m],I[m]);if(H)return m>=$?H:H*(h[m]=="desc"?-1:1)}return n.index-o.index}function o2(n,o,h,m){for(var E=-1,I=n.length,R=h.length,$=-1,H=o.length,oe=Dt(I-R,0),re=q(H+oe),ce=!m;++$<H;)re[$]=o[$];for(;++E<R;)(ce||E<I)&&(re[h[E]]=n[E]);for(;oe--;)re[$++]=n[E++];return re}function i2(n,o,h,m){for(var E=-1,I=n.length,R=-1,$=h.length,H=-1,oe=o.length,re=Dt(I-$,0),ce=q(re+oe),be=!m;++E<re;)ce[E]=n[E];for(var Ee=E;++H<oe;)ce[Ee+H]=o[H];for(;++R<$;)(be||E<I)&&(ce[Ee+h[R]]=n[E++]);return ce}function ir(n,o){var h=-1,m=n.length;for(o||(o=q(m));++h<m;)o[h]=n[h];return o}function nn(n,o,h,m){var E=!h;h||(h={});for(var I=-1,R=o.length;++I<R;){var $=o[I],H=m?m(h[$],n[$],$,h,n):r;H===r&&(H=n[$]),E?tn(h,$,H):Qi(h,$,H)}return h}function vk(n,o){return nn(n,Ou(n),o)}function bk(n,o){return nn(n,b2(n),o)}function Hs(n,o){return function(h,m){var E=Ge(h)?S_:Hy,I=o?o():{};return E(h,n,Le(m,2),I)}}function ai(n){return je(function(o,h){var m=-1,E=h.length,I=E>1?h[E-1]:r,R=E>2?h[2]:r;for(I=n.length>3&&typeof I=="function"?(E--,I):r,R&&Qt(h[0],h[1],R)&&(I=E<3?r:I,E=1),o=at(o);++m<E;){var $=h[m];$&&n(o,$,m,I)}return o})}function a2(n,o){return function(h,m){if(h==null)return h;if(!ar(h))return n(h,m);for(var E=h.length,I=o?E:-1,R=at(h);(o?I--:++I<E)&&m(R[I],I,R)!==!1;);return h}}function s2(n){return function(o,h,m){for(var E=-1,I=at(o),R=m(o),$=R.length;$--;){var H=R[n?$:++E];if(h(I[H],H,I)===!1)break}return o}}function wk(n,o,h){var m=o&S,E=oa(n);function I(){return(this&&this!==Nt&&this instanceof I?E:n).apply(m?h:this,arguments)}return I}function l2(n){return function(o){o=ot(o);var h=ei(o)?Vr(o):r,m=h?h[0]:o.charAt(0),E=h?Yn(h,1).join(""):o.slice(1);return m[n]()+E}}function si(n){return function(o){return jc(sp(ap(o).replace(u_,"")),n,"")}}function oa(n){return function(){var o=arguments;switch(o.length){case 0:return new n;case 1:return new n(o[0]);case 2:return new n(o[0],o[1]);case 3:return new n(o[0],o[1],o[2]);case 4:return new n(o[0],o[1],o[2],o[3]);case 5:return new n(o[0],o[1],o[2],o[3],o[4]);case 6:return new n(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new n(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var h=ii(n.prototype),m=n.apply(h,o);return yt(m)?m:h}}function _k(n,o,h){var m=oa(n);function E(){for(var I=arguments.length,R=q(I),$=I,H=li(E);$--;)R[$]=arguments[$];var oe=I<3&&R[0]!==H&&R[I-1]!==H?[]:Un(R,H);return I-=oe.length,I<h?f2(n,o,Fs,E.placeholder,r,R,oe,r,r,h-I):yr(this&&this!==Nt&&this instanceof E?m:n,this,R)}return E}function c2(n){return function(o,h,m){var E=at(o);if(!ar(o)){var I=Le(h,3);o=Bt(o),h=function($){return I(E[$],$,E)}}var R=n(o,h,m);return R>-1?E[I?o[R]:R]:r}}function u2(n){return _n(function(o){var h=o.length,m=h,E=$r.prototype.thru;for(n&&o.reverse();m--;){var I=o[m];if(typeof I!="function")throw new Pr(l);if(E&&!R&&Vs(I)=="wrapper")var R=new $r([],!0)}for(m=R?m:h;++m<h;){I=o[m];var $=Vs(I),H=$=="wrapper"?Iu(I):r;H&&Lu(H[0])&&H[1]==(ne|T|K|W)&&!H[4].length&&H[9]==1?R=R[Vs(H[0])].apply(R,H[3]):R=I.length==1&&Lu(I)?R[$]():R.thru(I)}return function(){var oe=arguments,re=oe[0];if(R&&oe.length==1&&Ge(re))return R.plant(re).value();for(var ce=0,be=h?o[ce].apply(this,oe):re;++ce<h;)be=o[ce].call(this,be);return be}})}function Fs(n,o,h,m,E,I,R,$,H,oe){var re=o&ne,ce=o&S,be=o&M,Ee=o&(T|D),Oe=o&me,Be=be?r:oa(n);function Te(){for(var st=arguments.length,Ye=q(st),er=st;er--;)Ye[er]=arguments[er];if(Ee)var on=li(Te),Jn=R_(Ye,on);if(m&&(Ye=o2(Ye,m,E,Ee)),I&&(Ye=i2(Ye,I,R,Ee)),st-=Jn,Ee&&st<oe){var Mt=Un(Ye,on);return f2(n,o,Fs,Te.placeholder,h,Ye,Mt,$,H,oe-st)}var Kr=ce?h:this,Sn=be?Kr[n]:n;return st=Ye.length,$?Ye=Hk(Ye,$):Oe&&st>1&&Ye.reverse(),re&&H<st&&(Ye.length=H),this&&this!==Nt&&this instanceof Te&&(Sn=Be||oa(Sn)),Sn.apply(Kr,Ye)}return Te}function d2(n,o){return function(h,m){return jy(h,n,o(m),{})}}function Gs(n,o){return function(h,m){var E;if(h===r&&m===r)return o;if(h!==r&&(E=h),m!==r){if(E===r)return m;typeof h=="string"||typeof m=="string"?(h=Sr(h),m=Sr(m)):(h=Yf(h),m=Yf(m)),E=n(h,m)}return E}}function Su(n){return _n(function(o){return o=gt(o,Er(Le())),je(function(h){var m=this;return n(o,function(E){return yr(E,m,h)})})})}function Ws(n,o){o=o===r?" ":Sr(o);var h=o.length;if(h<2)return h?vu(o,n):o;var m=vu(o,Cs(n/ti(o)));return ei(o)?Yn(Vr(m),0,n).join(""):m.slice(0,n)}function yk(n,o,h,m){var E=o&S,I=oa(n);function R(){for(var $=-1,H=arguments.length,oe=-1,re=m.length,ce=q(re+H),be=this&&this!==Nt&&this instanceof R?I:n;++oe<re;)ce[oe]=m[oe];for(;H--;)ce[oe++]=arguments[++$];return yr(be,E?h:this,ce)}return R}function h2(n){return function(o,h,m){return m&&typeof m!="number"&&Qt(o,h,m)&&(h=m=r),o=En(o),h===r?(h=o,o=0):h=En(h),m=m===r?o<h?1:-1:En(m),ak(o,h,m,n)}}function Us(n){return function(o,h){return typeof o=="string"&&typeof h=="string"||(o=Br(o),h=Br(h)),n(o,h)}}function f2(n,o,h,m,E,I,R,$,H,oe){var re=o&T,ce=re?R:r,be=re?r:R,Ee=re?I:r,Oe=re?r:I;o|=re?K:V,o&=~(re?V:K),o&O||(o&=~(S|M));var Be=[n,o,E,Ee,ce,Oe,be,$,H,oe],Te=h.apply(r,Be);return Lu(n)&&A2(Te,Be),Te.placeholder=m,M2(Te,n,o)}function Au(n){var o=$t[n];return function(h,m){if(h=Br(h),m=m==null?0:qt(We(m),292),m&&Mf(h)){var E=(ot(h)+"e").split("e");return E=(ot(o(E[0]+"e"+(+E[1]+m)))+"e").split("e"),+(E[0]+"e"+(+E[1]-m))}return o(h)}}var kk=ni&&1/ws(new ni([,-0]))[1]==Re?function(n){return new ni(n)}:ju;function p2(n){return function(o){var h=Zt(o);return h==Q?tu(o):h==F?H_(o):L_(o,n(o))}}function wn(n,o,h,m,E,I,R,$){var H=o&M;if(!H&&typeof n!="function")throw new Pr(l);var oe=m?m.length:0;if(oe||(o&=~(K|V),m=E=r),R=R===r?R:Dt(We(R),0),$=$===r?$:We($),oe-=E?E.length:0,o&V){var re=m,ce=E;m=E=r}var be=H?r:Iu(n),Ee=[n,o,h,m,E,re,ce,I,R,$];if(be&&zk(Ee,be),n=Ee[0],o=Ee[1],h=Ee[2],m=Ee[3],E=Ee[4],$=Ee[9]=Ee[9]===r?H?0:n.length:Dt(Ee[9]-oe,0),!$&&o&(T|D)&&(o&=~(T|D)),!o||o==S)var Oe=wk(n,o,h);else o==T||o==D?Oe=_k(n,o,$):(o==K||o==(S|K))&&!E.length?Oe=yk(n,o,h,m):Oe=Fs.apply(r,Ee);return M2((be?jf:A2)(Oe,Ee),n,o)}function m2(n,o,h,m){return n===r||jr(n,ri[h])&&!nt.call(m,h)?o:n}function g2(n,o,h,m,E,I){return yt(n)&&yt(o)&&(I.set(o,n),zs(n,o,r,g2,I),I.delete(o)),n}function Ek(n){return sa(n)?r:n}function v2(n,o,h,m,E,I){var R=h&_,$=n.length,H=o.length;if($!=H&&!(R&&H>$))return!1;var oe=I.get(n),re=I.get(o);if(oe&&re)return oe==o&&re==n;var ce=-1,be=!0,Ee=h&y?new vo:r;for(I.set(n,o),I.set(o,n);++ce<$;){var Oe=n[ce],Be=o[ce];if(m)var Te=R?m(Be,Oe,ce,o,n,I):m(Oe,Be,ce,n,o,I);if(Te!==r){if(Te)continue;be=!1;break}if(Ee){if(!Kc(o,function(st,Ye){if(!Zi(Ee,Ye)&&(Oe===st||E(Oe,st,h,m,I)))return Ee.push(Ye)})){be=!1;break}}else if(!(Oe===Be||E(Oe,Be,h,m,I))){be=!1;break}}return I.delete(n),I.delete(o),be}function Sk(n,o,h,m,E,I,R){switch(h){case Pt:if(n.byteLength!=o.byteLength||n.byteOffset!=o.byteOffset)return!1;n=n.buffer,o=o.buffer;case Ve:return!(n.byteLength!=o.byteLength||!I(new As(n),new As(o)));case Ue:case mt:case Z:return jr(+n,+o);case Xt:return n.name==o.name&&n.message==o.message;case le:case de:return n==o+"";case Q:var $=tu;case F:var H=m&_;if($||($=ws),n.size!=o.size&&!H)return!1;var oe=R.get(n);if(oe)return oe==o;m|=y,R.set(n,o);var re=v2($(n),$(o),m,E,I,R);return R.delete(n),re;case ve:if(Ji)return Ji.call(n)==Ji.call(o)}return!1}function Ak(n,o,h,m,E,I){var R=h&_,$=Mu(n),H=$.length;if(H!=Mu(o).length&&!R)return!1;for(var oe=H;oe--;){var re=$[oe];if(!(R?re in o:nt.call(o,re)))return!1}var ce=I.get(n),be=I.get(o);if(ce&&be)return ce==o&&be==n;var Ee=!0;I.set(n,o),I.set(o,n);for(var Oe=R;++oe<H;){re=$[oe];var Be=n[re],Te=o[re];if(m)var st=R?m(Te,Be,re,o,n,I):m(Be,Te,re,n,o,I);if(!(st===r?Be===Te||E(Be,Te,h,m,I):st)){Ee=!1;break}Oe||(Oe=re=="constructor")}if(Ee&&!Oe){var Ye=n.constructor,er=o.constructor;Ye!=er&&"constructor"in n&&"constructor"in o&&!(typeof Ye=="function"&&Ye instanceof Ye&&typeof er=="function"&&er instanceof er)&&(Ee=!1)}return I.delete(n),I.delete(o),Ee}function _n(n){return Pu(E2(n,r,L2),n+"")}function Mu(n){return zf(n,Bt,Ou)}function xu(n){return zf(n,sr,b2)}var Iu=Ts?function(n){return Ts.get(n)}:ju;function Vs(n){for(var o=n.name+"",h=oi[o],m=nt.call(oi,o)?h.length:0;m--;){var E=h[m],I=E.func;if(I==null||I==n)return E.name}return o}function li(n){return(nt.call(x,"placeholder")?x:n).placeholder}function Le(){var n=x.iteratee||qu;return n=n===qu?Hf:n,arguments.length?n(arguments[0],arguments[1]):n}function qs(n,o){var h=n.__data__;return Rk(o)?h[typeof o=="string"?"string":"hash"]:h.map}function Cu(n){for(var o=Bt(n),h=o.length;h--;){var m=o[h],E=n[m];o[h]=[m,E,y2(E)]}return o}function _o(n,o){var h=z_(n,o);return Bf(h)?h:r}function Mk(n){var o=nt.call(n,mo),h=n[mo];try{n[mo]=r;var m=!0}catch{}var E=Es.call(n);return m&&(o?n[mo]=h:delete n[mo]),E}var Ou=nu?function(n){return n==null?[]:(n=at(n),Gn(nu(n),function(o){return Sf.call(n,o)}))}:Ku,b2=nu?function(n){for(var o=[];n;)Wn(o,Ou(n)),n=Ms(n);return o}:Ku,Zt=Jt;(ou&&Zt(new ou(new ArrayBuffer(1)))!=Pt||Ki&&Zt(new Ki)!=Q||iu&&Zt(iu.resolve())!=B||ni&&Zt(new ni)!=F||Yi&&Zt(new Yi)!=Ae)&&(Zt=function(n){var o=Jt(n),h=o==C?n.constructor:r,m=h?yo(h):"";if(m)switch(m){case ly:return Pt;case cy:return Q;case uy:return B;case dy:return F;case hy:return Ae}return o});function xk(n,o,h){for(var m=-1,E=h.length;++m<E;){var I=h[m],R=I.size;switch(I.type){case"drop":n+=R;break;case"dropRight":o-=R;break;case"take":o=qt(o,n+R);break;case"takeRight":n=Dt(n,o-R);break}}return{start:n,end:o}}function Ik(n){var o=n.match(B8);return o?o[1].split(H8):[]}function w2(n,o,h){o=Kn(o,n);for(var m=-1,E=o.length,I=!1;++m<E;){var R=Zr(o[m]);if(!(I=n!=null&&h(n,R)))break;n=n[R]}return I||++m!=E?I:(E=n==null?0:n.length,!!E&&Qs(E)&&yn(R,E)&&(Ge(n)||ko(n)))}function Ck(n){var o=n.length,h=new n.constructor(o);return o&&typeof n[0]=="string"&&nt.call(n,"index")&&(h.index=n.index,h.input=n.input),h}function _2(n){return typeof n.constructor=="function"&&!ia(n)?ii(Ms(n)):{}}function Ok(n,o,h){var m=n.constructor;switch(o){case Ve:return Eu(n);case Ue:case mt:return new m(+n);case Pt:return fk(n,h);case mn:case or:case gn:case ht:case Hn:case ho:case _r:case Xo:case qi:return r2(n,h);case Q:return new m;case Z:case de:return new m(n);case le:return pk(n);case F:return new m;case ve:return mk(n)}}function Tk(n,o){var h=o.length;if(!h)return n;var m=h-1;return o[m]=(h>1?"& ":"")+o[m],o=o.join(h>2?", ":" "),n.replace(N8,`{
/* [wrapped with `+o+`] */
`)}function Lk(n){return Ge(n)||ko(n)||!!(Af&&n&&n[Af])}function yn(n,o){var h=typeof n;return o=o??se,!!o&&(h=="number"||h!="symbol"&&j8.test(n))&&n>-1&&n%1==0&&n<o}function Qt(n,o,h){if(!yt(h))return!1;var m=typeof o;return(m=="number"?ar(h)&&yn(o,h.length):m=="string"&&o in h)?jr(h[o],n):!1}function Tu(n,o){if(Ge(n))return!1;var h=typeof n;return h=="number"||h=="symbol"||h=="boolean"||n==null||Ar(n)?!0:P8.test(n)||!R8.test(n)||o!=null&&n in at(o)}function Rk(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}function Lu(n){var o=Vs(n),h=x[o];if(typeof h!="function"||!(o in Ke.prototype))return!1;if(n===h)return!0;var m=Iu(h);return!!m&&n===m[0]}function Pk(n){return!!yf&&yf in n}var $k=ys?kn:Yu;function ia(n){var o=n&&n.constructor;return n===(typeof o=="function"&&o.prototype||ri)}function y2(n){return n===n&&!yt(n)}function k2(n,o){return function(h){return h==null?!1:h[n]===o&&(o!==r||n in at(h))}}function Dk(n){var o=Xs(n,function(m){return h.size===p&&h.clear(),m}),h=o.cache;return o}function zk(n,o){var h=n[1],m=o[1],E=h|m,I=E<(S|M|ne),R=m==ne&&h==T||m==ne&&h==W&&n[7].length<=o[8]||m==(ne|W)&&o[7].length<=o[8]&&h==T;if(!(I||R))return n;m&S&&(n[2]=o[2],E|=h&S?0:O);var $=o[3];if($){var H=n[3];n[3]=H?o2(H,$,o[4]):$,n[4]=H?Un(n[3],w):o[4]}return $=o[5],$&&(H=n[5],n[5]=H?i2(H,$,o[6]):$,n[6]=H?Un(n[5],w):o[6]),$=o[7],$&&(n[7]=$),m&ne&&(n[8]=n[8]==null?o[8]:qt(n[8],o[8])),n[9]==null&&(n[9]=o[9]),n[0]=o[0],n[1]=E,n}function Nk(n){var o=[];if(n!=null)for(var h in at(n))o.push(h);return o}function Bk(n){return Es.call(n)}function E2(n,o,h){return o=Dt(o===r?n.length-1:o,0),function(){for(var m=arguments,E=-1,I=Dt(m.length-o,0),R=q(I);++E<I;)R[E]=m[o+E];E=-1;for(var $=q(o+1);++E<o;)$[E]=m[E];return $[o]=h(R),yr(n,this,$)}}function S2(n,o){return o.length<2?n:wo(n,zr(o,0,-1))}function Hk(n,o){for(var h=n.length,m=qt(o.length,h),E=ir(n);m--;){var I=o[m];n[m]=yn(I,h)?E[I]:r}return n}function Ru(n,o){if(!(o==="constructor"&&typeof n[o]=="function")&&o!="__proto__")return n[o]}var A2=x2(jf),aa=ty||function(n,o){return Nt.setTimeout(n,o)},Pu=x2(ck);function M2(n,o,h){var m=o+"";return Pu(n,Tk(m,Fk(Ik(m),h)))}function x2(n){var o=0,h=0;return function(){var m=iy(),E=A-(m-h);if(h=m,E>0){if(++o>=J)return arguments[0]}else o=0;return n.apply(r,arguments)}}function Zs(n,o){var h=-1,m=n.length,E=m-1;for(o=o===r?m:o;++h<o;){var I=gu(h,E),R=n[I];n[I]=n[h],n[h]=R}return n.length=o,n}var I2=Dk(function(n){var o=[];return n.charCodeAt(0)===46&&o.push(""),n.replace($8,function(h,m,E,I){o.push(E?I.replace(G8,"$1"):m||h)}),o});function Zr(n){if(typeof n=="string"||Ar(n))return n;var o=n+"";return o=="0"&&1/n==-1/0?"-0":o}function yo(n){if(n!=null){try{return ks.call(n)}catch{}try{return n+""}catch{}}return""}function Fk(n,o){return kr(pe,function(h){var m="_."+h[0];o&h[1]&&!vs(n,m)&&n.push(m)}),n.sort()}function C2(n){if(n instanceof Ke)return n.clone();var o=new $r(n.__wrapped__,n.__chain__);return o.__actions__=ir(n.__actions__),o.__index__=n.__index__,o.__values__=n.__values__,o}function Gk(n,o,h){(h?Qt(n,o,h):o===r)?o=1:o=Dt(We(o),0);var m=n==null?0:n.length;if(!m||o<1)return[];for(var E=0,I=0,R=q(Cs(m/o));E<m;)R[I++]=zr(n,E,E+=o);return R}function Wk(n){for(var o=-1,h=n==null?0:n.length,m=0,E=[];++o<h;){var I=n[o];I&&(E[m++]=I)}return E}function Uk(){var n=arguments.length;if(!n)return[];for(var o=q(n-1),h=arguments[0],m=n;m--;)o[m-1]=arguments[m];return Wn(Ge(h)?ir(h):[h],Wt(o,1))}var Vk=je(function(n,o){return At(n)?ea(n,Wt(o,1,At,!0)):[]}),qk=je(function(n,o){var h=Nr(o);return At(h)&&(h=r),At(n)?ea(n,Wt(o,1,At,!0),Le(h,2)):[]}),Zk=je(function(n,o){var h=Nr(o);return At(h)&&(h=r),At(n)?ea(n,Wt(o,1,At,!0),r,h):[]});function jk(n,o,h){var m=n==null?0:n.length;return m?(o=h||o===r?1:We(o),zr(n,o<0?0:o,m)):[]}function Kk(n,o,h){var m=n==null?0:n.length;return m?(o=h||o===r?1:We(o),o=m-o,zr(n,0,o<0?0:o)):[]}function Yk(n,o){return n&&n.length?Bs(n,Le(o,3),!0,!0):[]}function Xk(n,o){return n&&n.length?Bs(n,Le(o,3),!0):[]}function Jk(n,o,h,m){var E=n==null?0:n.length;return E?(h&&typeof h!="number"&&Qt(n,o,h)&&(h=0,m=E),Uy(n,o,h,m)):[]}function O2(n,o,h){var m=n==null?0:n.length;if(!m)return-1;var E=h==null?0:We(h);return E<0&&(E=Dt(m+E,0)),bs(n,Le(o,3),E)}function T2(n,o,h){var m=n==null?0:n.length;if(!m)return-1;var E=m-1;return h!==r&&(E=We(h),E=h<0?Dt(m+E,0):qt(E,m-1)),bs(n,Le(o,3),E,!0)}function L2(n){return n!=null&&n.length?Wt(n,1):[]}function Qk(n){return n!=null&&n.length?Wt(n,Re):[]}function eE(n,o){return n!=null&&n.length?(o=o===r?1:We(o),Wt(n,o)):[]}function tE(n){for(var o=-1,h=n==null?0:n.length,m={};++o<h;){var E=n[o];tn(m,E[0],E[1])}return m}function R2(n){return n&&n.length?n[0]:r}function rE(n,o,h){var m=n==null?0:n.length;if(!m)return-1;var E=h==null?0:We(h);return E<0&&(E=Dt(m+E,0)),Qo(n,o,E)}function nE(n){return n!=null&&n.length?zr(n,0,-1):[]}var oE=je(function(n){var o=gt(n,yu);return o.length&&o[0]===n[0]?du(o):[]}),iE=je(function(n){var o=Nr(n),h=gt(n,yu);return o===Nr(h)?o=r:h.pop(),h.length&&h[0]===n[0]?du(h,Le(o,2)):[]}),aE=je(function(n){var o=Nr(n),h=gt(n,yu);return o=typeof o=="function"?o:r,o&&h.pop(),h.length&&h[0]===n[0]?du(h,r,o):[]});function sE(n,o){return n==null?"":ny.call(n,o)}function Nr(n){var o=n==null?0:n.length;return o?n[o-1]:r}function lE(n,o,h){var m=n==null?0:n.length;if(!m)return-1;var E=m;return h!==r&&(E=We(h),E=E<0?Dt(m+E,0):qt(E,m-1)),o===o?G_(n,o,E):bs(n,ff,E,!0)}function cE(n,o){return n&&n.length?Uf(n,We(o)):r}var uE=je(P2);function P2(n,o){return n&&n.length&&o&&o.length?mu(n,o):n}function dE(n,o,h){return n&&n.length&&o&&o.length?mu(n,o,Le(h,2)):n}function hE(n,o,h){return n&&n.length&&o&&o.length?mu(n,o,r,h):n}var fE=_n(function(n,o){var h=n==null?0:n.length,m=su(n,o);return Zf(n,gt(o,function(E){return yn(E,h)?+E:E}).sort(n2)),m});function pE(n,o){var h=[];if(!(n&&n.length))return h;var m=-1,E=[],I=n.length;for(o=Le(o,3);++m<I;){var R=n[m];o(R,m,n)&&(h.push(R),E.push(m))}return Zf(n,E),h}function $u(n){return n==null?n:sy.call(n)}function mE(n,o,h){var m=n==null?0:n.length;return m?(h&&typeof h!="number"&&Qt(n,o,h)?(o=0,h=m):(o=o==null?0:We(o),h=h===r?m:We(h)),zr(n,o,h)):[]}function gE(n,o){return Ns(n,o)}function vE(n,o,h){return bu(n,o,Le(h,2))}function bE(n,o){var h=n==null?0:n.length;if(h){var m=Ns(n,o);if(m<h&&jr(n[m],o))return m}return-1}function wE(n,o){return Ns(n,o,!0)}function _E(n,o,h){return bu(n,o,Le(h,2),!0)}function yE(n,o){if(n!=null&&n.length){var h=Ns(n,o,!0)-1;if(jr(n[h],o))return h}return-1}function kE(n){return n&&n.length?Kf(n):[]}function EE(n,o){return n&&n.length?Kf(n,Le(o,2)):[]}function SE(n){var o=n==null?0:n.length;return o?zr(n,1,o):[]}function AE(n,o,h){return n&&n.length?(o=h||o===r?1:We(o),zr(n,0,o<0?0:o)):[]}function ME(n,o,h){var m=n==null?0:n.length;return m?(o=h||o===r?1:We(o),o=m-o,zr(n,o<0?0:o,m)):[]}function xE(n,o){return n&&n.length?Bs(n,Le(o,3),!1,!0):[]}function IE(n,o){return n&&n.length?Bs(n,Le(o,3)):[]}var CE=je(function(n){return jn(Wt(n,1,At,!0))}),OE=je(function(n){var o=Nr(n);return At(o)&&(o=r),jn(Wt(n,1,At,!0),Le(o,2))}),TE=je(function(n){var o=Nr(n);return o=typeof o=="function"?o:r,jn(Wt(n,1,At,!0),r,o)});function LE(n){return n&&n.length?jn(n):[]}function RE(n,o){return n&&n.length?jn(n,Le(o,2)):[]}function PE(n,o){return o=typeof o=="function"?o:r,n&&n.length?jn(n,r,o):[]}function Du(n){if(!(n&&n.length))return[];var o=0;return n=Gn(n,function(h){if(At(h))return o=Dt(h.length,o),!0}),Qc(o,function(h){return gt(n,Yc(h))})}function $2(n,o){if(!(n&&n.length))return[];var h=Du(n);return o==null?h:gt(h,function(m){return yr(o,r,m)})}var $E=je(function(n,o){return At(n)?ea(n,o):[]}),DE=je(function(n){return _u(Gn(n,At))}),zE=je(function(n){var o=Nr(n);return At(o)&&(o=r),_u(Gn(n,At),Le(o,2))}),NE=je(function(n){var o=Nr(n);return o=typeof o=="function"?o:r,_u(Gn(n,At),r,o)}),BE=je(Du);function HE(n,o){return Qf(n||[],o||[],Qi)}function FE(n,o){return Qf(n||[],o||[],na)}var GE=je(function(n){var o=n.length,h=o>1?n[o-1]:r;return h=typeof h=="function"?(n.pop(),h):r,$2(n,h)});function D2(n){var o=x(n);return o.__chain__=!0,o}function WE(n,o){return o(n),n}function js(n,o){return o(n)}var UE=_n(function(n){var o=n.length,h=o?n[0]:0,m=this.__wrapped__,E=function(I){return su(I,n)};return o>1||this.__actions__.length||!(m instanceof Ke)||!yn(h)?this.thru(E):(m=m.slice(h,+h+(o?1:0)),m.__actions__.push({func:js,args:[E],thisArg:r}),new $r(m,this.__chain__).thru(function(I){return o&&!I.length&&I.push(r),I}))});function VE(){return D2(this)}function qE(){return new $r(this.value(),this.__chain__)}function ZE(){this.__values__===r&&(this.__values__=Y2(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?r:this.__values__[this.__index__++]}}function jE(){return this}function KE(n){for(var o,h=this;h instanceof Rs;){var m=C2(h);m.__index__=0,m.__values__=r,o?E.__wrapped__=m:o=m;var E=m;h=h.__wrapped__}return E.__wrapped__=n,o}function YE(){var n=this.__wrapped__;if(n instanceof Ke){var o=n;return this.__actions__.length&&(o=new Ke(this)),o=o.reverse(),o.__actions__.push({func:js,args:[$u],thisArg:r}),new $r(o,this.__chain__)}return this.thru($u)}function XE(){return Jf(this.__wrapped__,this.__actions__)}var JE=Hs(function(n,o,h){nt.call(n,h)?++n[h]:tn(n,h,1)});function QE(n,o,h){var m=Ge(n)?df:Wy;return h&&Qt(n,o,h)&&(o=r),m(n,Le(o,3))}function eS(n,o){return(Ge(n)?Gn:$f)(n,Le(o,3))}var tS=c2(O2),rS=c2(T2);function nS(n,o){return Wt(Ks(n,o),1)}function oS(n,o){return Wt(Ks(n,o),Re)}function iS(n,o,h){return h=h===r?1:We(h),Wt(Ks(n,o),h)}function z2(n,o){return(Ge(n)?kr:Zn)(n,Le(o,3))}function N2(n,o){return(Ge(n)?A_:Pf)(n,Le(o,3))}var aS=Hs(function(n,o,h){nt.call(n,h)?n[h].push(o):tn(n,h,[o])});function sS(n,o,h,m){n=ar(n)?n:ui(n),h=h&&!m?We(h):0;var E=n.length;return h<0&&(h=Dt(E+h,0)),el(n)?h<=E&&n.indexOf(o,h)>-1:!!E&&Qo(n,o,h)>-1}var lS=je(function(n,o,h){var m=-1,E=typeof o=="function",I=ar(n)?q(n.length):[];return Zn(n,function(R){I[++m]=E?yr(o,R,h):ta(R,o,h)}),I}),cS=Hs(function(n,o,h){tn(n,h,o)});function Ks(n,o){return(Ge(n)?gt:Ff)(n,Le(o,3))}function uS(n,o,h,m){return n==null?[]:(Ge(o)||(o=o==null?[]:[o]),h=m?r:h,Ge(h)||(h=h==null?[]:[h]),Vf(n,o,h))}var dS=Hs(function(n,o,h){n[h?0:1].push(o)},function(){return[[],[]]});function hS(n,o,h){var m=Ge(n)?jc:mf,E=arguments.length<3;return m(n,Le(o,4),h,E,Zn)}function fS(n,o,h){var m=Ge(n)?M_:mf,E=arguments.length<3;return m(n,Le(o,4),h,E,Pf)}function pS(n,o){return(Ge(n)?Gn:$f)(n,Js(Le(o,3)))}function mS(n){return(Ge(n)?Of:sk)(n)}function gS(n,o,h){return(h?Qt(n,o,h):o===r)?o=1:o=We(o),(Ge(n)?Ny:lk)(n,o)}function vS(n){return(Ge(n)?By:uk)(n)}function bS(n){if(n==null)return 0;if(ar(n))return el(n)?ti(n):n.length;var o=Zt(n);return o==Q||o==F?n.size:fu(n).length}function wS(n,o,h){var m=Ge(n)?Kc:dk;return h&&Qt(n,o,h)&&(o=r),m(n,Le(o,3))}var _S=je(function(n,o){if(n==null)return[];var h=o.length;return h>1&&Qt(n,o[0],o[1])?o=[]:h>2&&Qt(o[0],o[1],o[2])&&(o=[o[0]]),Vf(n,Wt(o,1),[])}),Ys=ey||function(){return Nt.Date.now()};function yS(n,o){if(typeof o!="function")throw new Pr(l);return n=We(n),function(){if(--n<1)return o.apply(this,arguments)}}function B2(n,o,h){return o=h?r:o,o=n&&o==null?n.length:o,wn(n,ne,r,r,r,r,o)}function H2(n,o){var h;if(typeof o!="function")throw new Pr(l);return n=We(n),function(){return--n>0&&(h=o.apply(this,arguments)),n<=1&&(o=r),h}}var zu=je(function(n,o,h){var m=S;if(h.length){var E=Un(h,li(zu));m|=K}return wn(n,m,o,h,E)}),F2=je(function(n,o,h){var m=S|M;if(h.length){var E=Un(h,li(F2));m|=K}return wn(o,m,n,h,E)});function G2(n,o,h){o=h?r:o;var m=wn(n,T,r,r,r,r,r,o);return m.placeholder=G2.placeholder,m}function W2(n,o,h){o=h?r:o;var m=wn(n,D,r,r,r,r,r,o);return m.placeholder=W2.placeholder,m}function U2(n,o,h){var m,E,I,R,$,H,oe=0,re=!1,ce=!1,be=!0;if(typeof n!="function")throw new Pr(l);o=Br(o)||0,yt(h)&&(re=!!h.leading,ce="maxWait"in h,I=ce?Dt(Br(h.maxWait)||0,o):I,be="trailing"in h?!!h.trailing:be);function Ee(Mt){var Kr=m,Sn=E;return m=E=r,oe=Mt,R=n.apply(Sn,Kr),R}function Oe(Mt){return oe=Mt,$=aa(st,o),re?Ee(Mt):R}function Be(Mt){var Kr=Mt-H,Sn=Mt-oe,up=o-Kr;return ce?qt(up,I-Sn):up}function Te(Mt){var Kr=Mt-H,Sn=Mt-oe;return H===r||Kr>=o||Kr<0||ce&&Sn>=I}function st(){var Mt=Ys();if(Te(Mt))return Ye(Mt);$=aa(st,Be(Mt))}function Ye(Mt){return $=r,be&&m?Ee(Mt):(m=E=r,R)}function er(){$!==r&&e2($),oe=0,m=H=E=$=r}function on(){return $===r?R:Ye(Ys())}function Jn(){var Mt=Ys(),Kr=Te(Mt);if(m=arguments,E=this,H=Mt,Kr){if($===r)return Oe(H);if(ce)return e2($),$=aa(st,o),Ee(H)}return $===r&&($=aa(st,o)),R}return Jn.cancel=er,Jn.flush=on,Jn}var kS=je(function(n,o){return Rf(n,1,o)}),ES=je(function(n,o,h){return Rf(n,Br(o)||0,h)});function SS(n){return wn(n,me)}function Xs(n,o){if(typeof n!="function"||o!=null&&typeof o!="function")throw new Pr(l);var h=function(){var m=arguments,E=o?o.apply(this,m):m[0],I=h.cache;if(I.has(E))return I.get(E);var R=n.apply(this,m);return h.cache=I.set(E,R)||I,R};return h.cache=new(Xs.Cache||bn),h}Xs.Cache=bn;function Js(n){if(typeof n!="function")throw new Pr(l);return function(){var o=arguments;switch(o.length){case 0:return!n.call(this);case 1:return!n.call(this,o[0]);case 2:return!n.call(this,o[0],o[1]);case 3:return!n.call(this,o[0],o[1],o[2])}return!n.apply(this,o)}}function AS(n){return H2(2,n)}var MS=hk(function(n,o){o=o.length==1&&Ge(o[0])?gt(o[0],Er(Le())):gt(Wt(o,1),Er(Le()));var h=o.length;return je(function(m){for(var E=-1,I=qt(m.length,h);++E<I;)m[E]=o[E].call(this,m[E]);return yr(n,this,m)})}),Nu=je(function(n,o){return wn(n,K,r,o,Un(o,li(Nu)))}),V2=je(function(n,o){return wn(n,V,r,o,Un(o,li(V2)))}),xS=_n(function(n,o){return wn(n,W,r,r,r,o)});function IS(n,o){if(typeof n!="function")throw new Pr(l);return o=o===r?o:We(o),je(n,o)}function CS(n,o){if(typeof n!="function")throw new Pr(l);return o=o==null?0:Dt(We(o),0),je(function(h){var m=h[o],E=Yn(h,0,o);return m&&Wn(E,m),yr(n,this,E)})}function OS(n,o,h){var m=!0,E=!0;if(typeof n!="function")throw new Pr(l);return yt(h)&&(m="leading"in h?!!h.leading:m,E="trailing"in h?!!h.trailing:E),U2(n,o,{leading:m,maxWait:o,trailing:E})}function TS(n){return B2(n,1)}function LS(n,o){return Nu(ku(o),n)}function RS(){if(!arguments.length)return[];var n=arguments[0];return Ge(n)?n:[n]}function PS(n){return Dr(n,v)}function $S(n,o){return o=typeof o=="function"?o:r,Dr(n,v,o)}function DS(n){return Dr(n,5)}function zS(n,o){return o=typeof o=="function"?o:r,Dr(n,5,o)}function NS(n,o){return o==null||Lf(n,o,Bt(o))}function jr(n,o){return n===o||n!==n&&o!==o}var BS=Us(uu),HS=Us(function(n,o){return n>=o}),ko=Nf((function(){return arguments})())?Nf:function(n){return kt(n)&&nt.call(n,"callee")&&!Sf.call(n,"callee")},Ge=q.isArray,FS=of?Er(of):Ky;function ar(n){return n!=null&&Qs(n.length)&&!kn(n)}function At(n){return kt(n)&&ar(n)}function GS(n){return n===!0||n===!1||kt(n)&&Jt(n)==Ue}var Xn=ry||Yu,WS=af?Er(af):Yy;function US(n){return kt(n)&&n.nodeType===1&&!sa(n)}function VS(n){if(n==null)return!0;if(ar(n)&&(Ge(n)||typeof n=="string"||typeof n.splice=="function"||Xn(n)||ci(n)||ko(n)))return!n.length;var o=Zt(n);if(o==Q||o==F)return!n.size;if(ia(n))return!fu(n).length;for(var h in n)if(nt.call(n,h))return!1;return!0}function qS(n,o){return ra(n,o)}function ZS(n,o,h){h=typeof h=="function"?h:r;var m=h?h(n,o):r;return m===r?ra(n,o,r,h):!!m}function Bu(n){if(!kt(n))return!1;var o=Jt(n);return o==Xt||o==_t||typeof n.message=="string"&&typeof n.name=="string"&&!sa(n)}function jS(n){return typeof n=="number"&&Mf(n)}function kn(n){if(!yt(n))return!1;var o=Jt(n);return o==Vt||o==k||o==Ze||o==ae}function q2(n){return typeof n=="number"&&n==We(n)}function Qs(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=se}function yt(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}function kt(n){return n!=null&&typeof n=="object"}var Z2=sf?Er(sf):Jy;function KS(n,o){return n===o||hu(n,o,Cu(o))}function YS(n,o,h){return h=typeof h=="function"?h:r,hu(n,o,Cu(o),h)}function XS(n){return j2(n)&&n!=+n}function JS(n){if($k(n))throw new ze(s);return Bf(n)}function QS(n){return n===null}function eA(n){return n==null}function j2(n){return typeof n=="number"||kt(n)&&Jt(n)==Z}function sa(n){if(!kt(n)||Jt(n)!=C)return!1;var o=Ms(n);if(o===null)return!0;var h=nt.call(o,"constructor")&&o.constructor;return typeof h=="function"&&h instanceof h&&ks.call(h)==Y_}var Hu=lf?Er(lf):Qy;function tA(n){return q2(n)&&n>=-9007199254740991&&n<=se}var K2=cf?Er(cf):ek;function el(n){return typeof n=="string"||!Ge(n)&&kt(n)&&Jt(n)==de}function Ar(n){return typeof n=="symbol"||kt(n)&&Jt(n)==ve}var ci=uf?Er(uf):tk;function rA(n){return n===r}function nA(n){return kt(n)&&Zt(n)==Ae}function oA(n){return kt(n)&&Jt(n)==it}var iA=Us(pu),aA=Us(function(n,o){return n<=o});function Y2(n){if(!n)return[];if(ar(n))return el(n)?Vr(n):ir(n);if(ji&&n[ji])return B_(n[ji]());var o=Zt(n);return(o==Q?tu:o==F?ws:ui)(n)}function En(n){return n?(n=Br(n),n===Re||n===-1/0?(n<0?-1:1)*Ie:n===n?n:0):n===0?n:0}function We(n){var o=En(n),h=o%1;return o===o?h?o-h:o:0}function X2(n){return n?bo(We(n),0,G):0}function Br(n){if(typeof n=="number")return n;if(Ar(n))return U;if(yt(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=yt(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=gf(n);var h=V8.test(n);return h||Z8.test(n)?k_(n.slice(2),h?2:8):U8.test(n)?U:+n}function J2(n){return nn(n,sr(n))}function sA(n){return n?bo(We(n),-9007199254740991,se):n===0?n:0}function ot(n){return n==null?"":Sr(n)}var lA=ai(function(n,o){if(ia(o)||ar(o)){nn(o,Bt(o),n);return}for(var h in o)nt.call(o,h)&&Qi(n,h,o[h])}),Q2=ai(function(n,o){nn(o,sr(o),n)}),ep=ai(function(n,o,h,m){nn(o,sr(o),n,m)}),Fu=ai(function(n,o,h,m){nn(o,Bt(o),n,m)}),cA=_n(su);function uA(n,o){var h=ii(n);return o==null?h:Tf(h,o)}var dA=je(function(n,o){n=at(n);var h=-1,m=o.length,E=m>2?o[2]:r;for(E&&Qt(o[0],o[1],E)&&(m=1);++h<m;)for(var I=o[h],R=sr(I),$=-1,H=R.length;++$<H;){var oe=R[$],re=n[oe];(re===r||jr(re,ri[oe])&&!nt.call(n,oe))&&(n[oe]=I[oe])}return n}),hA=je(function(n){return n.push(r,g2),yr(tp,r,n)});function fA(n,o){return hf(n,Le(o,3),rn)}function pA(n,o){return hf(n,Le(o,3),cu)}function mA(n,o){return n==null?n:lu(n,Le(o,3),sr)}function gA(n,o){return n==null?n:Df(n,Le(o,3),sr)}function vA(n,o){return n&&rn(n,Le(o,3))}function bA(n,o){return n&&cu(n,Le(o,3))}function wA(n){return n==null?[]:Ds(n,Bt(n))}function _A(n){return n==null?[]:Ds(n,sr(n))}function Gu(n,o,h){var m=n==null?r:wo(n,o);return m===r?h:m}function yA(n,o){return n!=null&&w2(n,o,Vy)}function Wu(n,o){return n!=null&&w2(n,o,qy)}var kA=d2(function(n,o,h){o!=null&&typeof o.toString!="function"&&(o=Es.call(o)),n[o]=h},Vu(lr)),EA=d2(function(n,o,h){o!=null&&typeof o.toString!="function"&&(o=Es.call(o)),nt.call(n,o)?n[o].push(h):n[o]=[h]},Le),SA=je(ta);function Bt(n){return ar(n)?Cf(n):fu(n)}function sr(n){return ar(n)?Cf(n,!0):rk(n)}function AA(n,o){var h={};return o=Le(o,3),rn(n,function(m,E,I){tn(h,o(m,E,I),m)}),h}function MA(n,o){var h={};return o=Le(o,3),rn(n,function(m,E,I){tn(h,E,o(m,E,I))}),h}var xA=ai(function(n,o,h){zs(n,o,h)}),tp=ai(function(n,o,h,m){zs(n,o,h,m)}),IA=_n(function(n,o){var h={};if(n==null)return h;var m=!1;o=gt(o,function(I){return I=Kn(I,n),m||(m=I.length>1),I}),nn(n,xu(n),h),m&&(h=Dr(h,7,Ek));for(var E=o.length;E--;)wu(h,o[E]);return h});function CA(n,o){return rp(n,Js(Le(o)))}var OA=_n(function(n,o){return n==null?{}:ok(n,o)});function rp(n,o){if(n==null)return{};var h=gt(xu(n),function(m){return[m]});return o=Le(o),qf(n,h,function(m,E){return o(m,E[0])})}function TA(n,o,h){o=Kn(o,n);var m=-1,E=o.length;for(E||(E=1,n=r);++m<E;){var I=n==null?r:n[Zr(o[m])];I===r&&(m=E,I=h),n=kn(I)?I.call(n):I}return n}function LA(n,o,h){return n==null?n:na(n,o,h)}function RA(n,o,h,m){return m=typeof m=="function"?m:r,n==null?n:na(n,o,h,m)}var np=p2(Bt),op=p2(sr);function PA(n,o,h){var m=Ge(n),E=m||Xn(n)||ci(n);if(o=Le(o,4),h==null){var I=n&&n.constructor;E?h=m?new I:[]:yt(n)?h=kn(I)?ii(Ms(n)):{}:h={}}return(E?kr:rn)(n,function(R,$,H){return o(h,R,$,H)}),h}function $A(n,o){return n==null?!0:wu(n,o)}function DA(n,o,h){return n==null?n:Xf(n,o,ku(h))}function zA(n,o,h,m){return m=typeof m=="function"?m:r,n==null?n:Xf(n,o,ku(h),m)}function ui(n){return n==null?[]:eu(n,Bt(n))}function NA(n){return n==null?[]:eu(n,sr(n))}function BA(n,o,h){return h===r&&(h=o,o=r),h!==r&&(h=Br(h),h=h===h?h:0),o!==r&&(o=Br(o),o=o===o?o:0),bo(Br(n),o,h)}function HA(n,o,h){return o=En(o),h===r?(h=o,o=0):h=En(h),n=Br(n),Zy(n,o,h)}function FA(n,o,h){if(h&&typeof h!="boolean"&&Qt(n,o,h)&&(o=h=r),h===r&&(typeof o=="boolean"?(h=o,o=r):typeof n=="boolean"&&(h=n,n=r)),n===r&&o===r?(n=0,o=1):(n=En(n),o===r?(o=n,n=0):o=En(o)),n>o){var m=n;n=o,o=m}if(h||n%1||o%1){var E=xf();return qt(n+E*(o-n+y_("1e-"+((E+"").length-1))),o)}return gu(n,o)}var GA=si(function(n,o,h){return o=o.toLowerCase(),n+(h?ip(o):o)});function ip(n){return Uu(ot(n).toLowerCase())}function ap(n){return n=ot(n),n&&n.replace(K8,P_).replace(d_,"")}function WA(n,o,h){n=ot(n),o=Sr(o);var m=n.length;h=h===r?m:bo(We(h),0,m);var E=h;return h-=o.length,h>=0&&n.slice(h,E)==o}function UA(n){return n=ot(n),n&&O8.test(n)?n.replace(fo,$_):n}function VA(n){return n=ot(n),n&&D8.test(n)?n.replace(Nc,"\\$&"):n}var qA=si(function(n,o,h){return n+(h?"-":"")+o.toLowerCase()}),ZA=si(function(n,o,h){return n+(h?" ":"")+o.toLowerCase()}),jA=l2("toLowerCase");function KA(n,o,h){n=ot(n),o=We(o);var m=o?ti(n):0;if(!o||m>=o)return n;var E=(o-m)/2;return Ws(Os(E),h)+n+Ws(Cs(E),h)}function YA(n,o,h){n=ot(n),o=We(o);var m=o?ti(n):0;return o&&m<o?n+Ws(o-m,h):n}function XA(n,o,h){n=ot(n),o=We(o);var m=o?ti(n):0;return o&&m<o?Ws(o-m,h)+n:n}function JA(n,o,h){return h||o==null?o=0:o&&(o=+o),ay(ot(n).replace(Bc,""),o||0)}function QA(n,o,h){return(h?Qt(n,o,h):o===r)?o=1:o=We(o),vu(ot(n),o)}function eM(){var n=arguments,o=ot(n[0]);return n.length<3?o:o.replace(n[1],n[2])}var tM=si(function(n,o,h){return n+(h?"_":"")+o.toLowerCase()});function rM(n,o,h){return h&&typeof h!="number"&&Qt(n,o,h)&&(o=h=r),h=h===r?G:h>>>0,h?(n=ot(n),n&&(typeof o=="string"||o!=null&&!Hu(o))&&(o=Sr(o),!o&&ei(n))?Yn(Vr(n),0,h):n.split(o,h)):[]}var nM=si(function(n,o,h){return n+(h?" ":"")+Uu(o)});function oM(n,o,h){return n=ot(n),h=h==null?0:bo(We(h),0,n.length),o=Sr(o),n.slice(h,h+o.length)==o}function iM(n,o,h){var m=x.templateSettings;h&&Qt(n,o,h)&&(o=r),n=ot(n),o=Fu({},o,m,m2);var E=Fu({},o.imports,m.imports,m2),I=Bt(E),R=eu(E,I);kr(I,function(Te){if(D1.test(Te))throw new ze(u)});var $,H,oe=0,re=o.interpolate||ps,ce="__p += '",be=ru((o.escape||ps).source+"|"+re.source+"|"+(re===$1?W8:ps).source+"|"+(o.evaluate||ps).source+"|$","g"),Ee="//# sourceURL="+(nt.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++g_+"]")+`
`;n.replace(be,function(Te,st,Ye,er,on,Jn){return Ye||(Ye=er),ce+=n.slice(oe,Jn).replace(Y8,D_),st&&($=!0,ce+=`' +
__e(`+st+`) +
'`),on&&(H=!0,ce+=`';
`+on+`;
__p += '`),Ye&&(ce+=`' +
((__t = (`+Ye+`)) == null ? '' : __t) +
'`),oe=Jn+Te.length,Te}),ce+=`';
`;var Oe=nt.call(o,"variable")&&o.variable;if(!Oe)ce=`with (obj) {
`+ce+`
}
`;else if(D1.test(Oe))throw new ze(c);ce=(H?ce.replace(Dc,""):ce).replace(zc,"$1").replace(fs,"$1;"),ce="function("+(Oe||"obj")+`) {
`+(Oe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+($?", __e = _.escape":"")+(H?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ce+`return __p
}`;var Be=lp(function(){return tt(I,Ee+"return "+ce).apply(r,R)});if(Be.source=ce,Bu(Be))throw Be;return Be}function aM(n){return ot(n).toLowerCase()}function sM(n){return ot(n).toUpperCase()}function lM(n,o,h){if(n=ot(n),n&&(h||o===r))return gf(n);if(!n||!(o=Sr(o)))return n;var m=Vr(n),E=Vr(o);return Yn(m,vf(m,E),bf(m,E)+1).join("")}function cM(n,o,h){if(n=ot(n),n&&(h||o===r))return n.slice(0,_f(n)+1);if(!n||!(o=Sr(o)))return n;var m=Vr(n);return Yn(m,0,bf(m,Vr(o))+1).join("")}function uM(n,o,h){if(n=ot(n),n&&(h||o===r))return n.replace(Bc,"");if(!n||!(o=Sr(o)))return n;var m=Vr(n);return Yn(m,vf(m,Vr(o))).join("")}function dM(n,o){var h=ke,m=P;if(yt(o)){var E="separator"in o?o.separator:E;h="length"in o?We(o.length):h,m="omission"in o?Sr(o.omission):m}n=ot(n);var I=n.length;if(ei(n)){var R=Vr(n);I=R.length}if(h>=I)return n;var $=h-ti(m);if($<1)return m;var H=R?Yn(R,0,$).join(""):n.slice(0,$);if(E===r)return H+m;if(R&&($+=H.length-$),Hu(E)){if(n.slice($).search(E)){var oe,re=H;for(E.global||(E=ru(E.source,ot(z1.exec(E))+"g")),E.lastIndex=0;oe=E.exec(re);)var ce=oe.index;H=H.slice(0,ce===r?$:ce)}}else if(n.indexOf(Sr(E),$)!=$){var be=H.lastIndexOf(E);be>-1&&(H=H.slice(0,be))}return H+m}function hM(n){return n=ot(n),n&&C8.test(n)?n.replace(Fn,W_):n}var fM=si(function(n,o,h){return n+(h?" ":"")+o.toUpperCase()}),Uu=l2("toUpperCase");function sp(n,o,h){return n=ot(n),o=h?r:o,o===r?N_(n)?q_(n):C_(n):n.match(o)||[]}var lp=je(function(n,o){try{return yr(n,r,o)}catch(h){return Bu(h)?h:new ze(h)}}),pM=_n(function(n,o){return kr(o,function(h){h=Zr(h),tn(n,h,zu(n[h],n))}),n});function mM(n){var o=n==null?0:n.length,h=Le();return n=o?gt(n,function(m){if(typeof m[1]!="function")throw new Pr(l);return[h(m[0]),m[1]]}):[],je(function(m){for(var E=-1;++E<o;){var I=n[E];if(yr(I[0],this,m))return yr(I[1],this,m)}})}function gM(n){return Gy(Dr(n,b))}function Vu(n){return function(){return n}}function vM(n,o){return n==null||n!==n?o:n}var bM=u2(),wM=u2(!0);function lr(n){return n}function qu(n){return Hf(typeof n=="function"?n:Dr(n,b))}function _M(n){return Gf(Dr(n,b))}function yM(n,o){return Wf(n,Dr(o,b))}var kM=je(function(n,o){return function(h){return ta(h,n,o)}}),EM=je(function(n,o){return function(h){return ta(n,h,o)}});function Zu(n,o,h){var m=Bt(o),E=Ds(o,m);h==null&&!(yt(o)&&(E.length||!m.length))&&(h=o,o=n,n=this,E=Ds(o,Bt(o)));var I=!(yt(h)&&"chain"in h)||!!h.chain,R=kn(n);return kr(E,function($){var H=o[$];n[$]=H,R&&(n.prototype[$]=function(){var oe=this.__chain__;if(I||oe){var re=n(this.__wrapped__);return(re.__actions__=ir(this.__actions__)).push({func:H,args:arguments,thisArg:n}),re.__chain__=oe,re}return H.apply(n,Wn([this.value()],arguments))})}),n}function SM(){return Nt._===this&&(Nt._=X_),this}function ju(){}function AM(n){return n=We(n),je(function(o){return Uf(o,n)})}var MM=Su(gt),xM=Su(df),IM=Su(Kc);function cp(n){return Tu(n)?Yc(Zr(n)):ik(n)}function CM(n){return function(o){return n==null?r:wo(n,o)}}var OM=h2(),TM=h2(!0);function Ku(){return[]}function Yu(){return!1}function LM(){return{}}function RM(){return""}function PM(){return!0}function $M(n,o){if(n=We(n),n<1||n>se)return[];var h=G,m=qt(n,G);o=Le(o),n-=G;for(var E=Qc(m,o);++h<n;)o(h);return E}function DM(n){return Ge(n)?gt(n,Zr):Ar(n)?[n]:ir(I2(ot(n)))}function zM(n){var o=++K_;return ot(n)+o}var NM=Gs(function(n,o){return n+o},0),BM=Au("ceil"),HM=Gs(function(n,o){return n/o},1),FM=Au("floor");function GM(n){return n&&n.length?$s(n,lr,uu):r}function WM(n,o){return n&&n.length?$s(n,Le(o,2),uu):r}function UM(n){return pf(n,lr)}function VM(n,o){return pf(n,Le(o,2))}function qM(n){return n&&n.length?$s(n,lr,pu):r}function ZM(n,o){return n&&n.length?$s(n,Le(o,2),pu):r}var jM=Gs(function(n,o){return n*o},1),KM=Au("round"),YM=Gs(function(n,o){return n-o},0);function XM(n){return n&&n.length?Jc(n,lr):0}function JM(n,o){return n&&n.length?Jc(n,Le(o,2)):0}return x.after=yS,x.ary=B2,x.assign=lA,x.assignIn=Q2,x.assignInWith=ep,x.assignWith=Fu,x.at=cA,x.before=H2,x.bind=zu,x.bindAll=pM,x.bindKey=F2,x.castArray=RS,x.chain=D2,x.chunk=Gk,x.compact=Wk,x.concat=Uk,x.cond=mM,x.conforms=gM,x.constant=Vu,x.countBy=JE,x.create=uA,x.curry=G2,x.curryRight=W2,x.debounce=U2,x.defaults=dA,x.defaultsDeep=hA,x.defer=kS,x.delay=ES,x.difference=Vk,x.differenceBy=qk,x.differenceWith=Zk,x.drop=jk,x.dropRight=Kk,x.dropRightWhile=Yk,x.dropWhile=Xk,x.fill=Jk,x.filter=eS,x.flatMap=nS,x.flatMapDeep=oS,x.flatMapDepth=iS,x.flatten=L2,x.flattenDeep=Qk,x.flattenDepth=eE,x.flip=SS,x.flow=bM,x.flowRight=wM,x.fromPairs=tE,x.functions=wA,x.functionsIn=_A,x.groupBy=aS,x.initial=nE,x.intersection=oE,x.intersectionBy=iE,x.intersectionWith=aE,x.invert=kA,x.invertBy=EA,x.invokeMap=lS,x.iteratee=qu,x.keyBy=cS,x.keys=Bt,x.keysIn=sr,x.map=Ks,x.mapKeys=AA,x.mapValues=MA,x.matches=_M,x.matchesProperty=yM,x.memoize=Xs,x.merge=xA,x.mergeWith=tp,x.method=kM,x.methodOf=EM,x.mixin=Zu,x.negate=Js,x.nthArg=AM,x.omit=IA,x.omitBy=CA,x.once=AS,x.orderBy=uS,x.over=MM,x.overArgs=MS,x.overEvery=xM,x.overSome=IM,x.partial=Nu,x.partialRight=V2,x.partition=dS,x.pick=OA,x.pickBy=rp,x.property=cp,x.propertyOf=CM,x.pull=uE,x.pullAll=P2,x.pullAllBy=dE,x.pullAllWith=hE,x.pullAt=fE,x.range=OM,x.rangeRight=TM,x.rearg=xS,x.reject=pS,x.remove=pE,x.rest=IS,x.reverse=$u,x.sampleSize=gS,x.set=LA,x.setWith=RA,x.shuffle=vS,x.slice=mE,x.sortBy=_S,x.sortedUniq=kE,x.sortedUniqBy=EE,x.split=rM,x.spread=CS,x.tail=SE,x.take=AE,x.takeRight=ME,x.takeRightWhile=xE,x.takeWhile=IE,x.tap=WE,x.throttle=OS,x.thru=js,x.toArray=Y2,x.toPairs=np,x.toPairsIn=op,x.toPath=DM,x.toPlainObject=J2,x.transform=PA,x.unary=TS,x.union=CE,x.unionBy=OE,x.unionWith=TE,x.uniq=LE,x.uniqBy=RE,x.uniqWith=PE,x.unset=$A,x.unzip=Du,x.unzipWith=$2,x.update=DA,x.updateWith=zA,x.values=ui,x.valuesIn=NA,x.without=$E,x.words=sp,x.wrap=LS,x.xor=DE,x.xorBy=zE,x.xorWith=NE,x.zip=BE,x.zipObject=HE,x.zipObjectDeep=FE,x.zipWith=GE,x.entries=np,x.entriesIn=op,x.extend=Q2,x.extendWith=ep,Zu(x,x),x.add=NM,x.attempt=lp,x.camelCase=GA,x.capitalize=ip,x.ceil=BM,x.clamp=BA,x.clone=PS,x.cloneDeep=DS,x.cloneDeepWith=zS,x.cloneWith=$S,x.conformsTo=NS,x.deburr=ap,x.defaultTo=vM,x.divide=HM,x.endsWith=WA,x.eq=jr,x.escape=UA,x.escapeRegExp=VA,x.every=QE,x.find=tS,x.findIndex=O2,x.findKey=fA,x.findLast=rS,x.findLastIndex=T2,x.findLastKey=pA,x.floor=FM,x.forEach=z2,x.forEachRight=N2,x.forIn=mA,x.forInRight=gA,x.forOwn=vA,x.forOwnRight=bA,x.get=Gu,x.gt=BS,x.gte=HS,x.has=yA,x.hasIn=Wu,x.head=R2,x.identity=lr,x.includes=sS,x.indexOf=rE,x.inRange=HA,x.invoke=SA,x.isArguments=ko,x.isArray=Ge,x.isArrayBuffer=FS,x.isArrayLike=ar,x.isArrayLikeObject=At,x.isBoolean=GS,x.isBuffer=Xn,x.isDate=WS,x.isElement=US,x.isEmpty=VS,x.isEqual=qS,x.isEqualWith=ZS,x.isError=Bu,x.isFinite=jS,x.isFunction=kn,x.isInteger=q2,x.isLength=Qs,x.isMap=Z2,x.isMatch=KS,x.isMatchWith=YS,x.isNaN=XS,x.isNative=JS,x.isNil=eA,x.isNull=QS,x.isNumber=j2,x.isObject=yt,x.isObjectLike=kt,x.isPlainObject=sa,x.isRegExp=Hu,x.isSafeInteger=tA,x.isSet=K2,x.isString=el,x.isSymbol=Ar,x.isTypedArray=ci,x.isUndefined=rA,x.isWeakMap=nA,x.isWeakSet=oA,x.join=sE,x.kebabCase=qA,x.last=Nr,x.lastIndexOf=lE,x.lowerCase=ZA,x.lowerFirst=jA,x.lt=iA,x.lte=aA,x.max=GM,x.maxBy=WM,x.mean=UM,x.meanBy=VM,x.min=qM,x.minBy=ZM,x.stubArray=Ku,x.stubFalse=Yu,x.stubObject=LM,x.stubString=RM,x.stubTrue=PM,x.multiply=jM,x.nth=cE,x.noConflict=SM,x.noop=ju,x.now=Ys,x.pad=KA,x.padEnd=YA,x.padStart=XA,x.parseInt=JA,x.random=FA,x.reduce=hS,x.reduceRight=fS,x.repeat=QA,x.replace=eM,x.result=TA,x.round=KM,x.runInContext=N,x.sample=mS,x.size=bS,x.snakeCase=tM,x.some=wS,x.sortedIndex=gE,x.sortedIndexBy=vE,x.sortedIndexOf=bE,x.sortedLastIndex=wE,x.sortedLastIndexBy=_E,x.sortedLastIndexOf=yE,x.startCase=nM,x.startsWith=oM,x.subtract=YM,x.sum=XM,x.sumBy=JM,x.template=iM,x.times=$M,x.toFinite=En,x.toInteger=We,x.toLength=X2,x.toLower=aM,x.toNumber=Br,x.toSafeInteger=sA,x.toString=ot,x.toUpper=sM,x.trim=lM,x.trimEnd=cM,x.trimStart=uM,x.truncate=dM,x.unescape=hM,x.uniqueId=zM,x.upperCase=fM,x.upperFirst=Uu,x.each=z2,x.eachRight=N2,x.first=R2,Zu(x,(function(){var n={};return rn(x,function(o,h){nt.call(x.prototype,h)||(n[h]=o)}),n})(),{chain:!1}),x.VERSION=i,kr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){x[n].placeholder=x}),kr(["drop","take"],function(n,o){Ke.prototype[n]=function(h){h=h===r?1:Dt(We(h),0);var m=this.__filtered__&&!o?new Ke(this):this.clone();return m.__filtered__?m.__takeCount__=qt(h,m.__takeCount__):m.__views__.push({size:qt(h,G),type:n+(m.__dir__<0?"Right":"")}),m},Ke.prototype[n+"Right"]=function(h){return this.reverse()[n](h).reverse()}}),kr(["filter","map","takeWhile"],function(n,o){var h=o+1,m=h==ee||h==ue;Ke.prototype[n]=function(E){var I=this.clone();return I.__iteratees__.push({iteratee:Le(E,3),type:h}),I.__filtered__=I.__filtered__||m,I}}),kr(["head","last"],function(n,o){var h="take"+(o?"Right":"");Ke.prototype[n]=function(){return this[h](1).value()[0]}}),kr(["initial","tail"],function(n,o){var h="drop"+(o?"":"Right");Ke.prototype[n]=function(){return this.__filtered__?new Ke(this):this[h](1)}}),Ke.prototype.compact=function(){return this.filter(lr)},Ke.prototype.find=function(n){return this.filter(n).head()},Ke.prototype.findLast=function(n){return this.reverse().find(n)},Ke.prototype.invokeMap=je(function(n,o){return typeof n=="function"?new Ke(this):this.map(function(h){return ta(h,n,o)})}),Ke.prototype.reject=function(n){return this.filter(Js(Le(n)))},Ke.prototype.slice=function(n,o){n=We(n);var h=this;return h.__filtered__&&(n>0||o<0)?new Ke(h):(n<0?h=h.takeRight(-n):n&&(h=h.drop(n)),o!==r&&(o=We(o),h=o<0?h.dropRight(-o):h.take(o-n)),h)},Ke.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ke.prototype.toArray=function(){return this.take(G)},rn(Ke.prototype,function(n,o){var h=/^(?:filter|find|map|reject)|While$/.test(o),m=/^(?:head|last)$/.test(o),E=x[m?"take"+(o=="last"?"Right":""):o],I=m||/^find/.test(o);E&&(x.prototype[o]=function(){var R=this.__wrapped__,$=m?[1]:arguments,H=R instanceof Ke,oe=$[0],re=H||Ge(R),ce=function(st){var Ye=E.apply(x,Wn([st],$));return m&&be?Ye[0]:Ye};re&&h&&typeof oe=="function"&&oe.length!=1&&(H=re=!1);var be=this.__chain__,Ee=!!this.__actions__.length,Oe=I&&!be,Be=H&&!Ee;if(!I&&re){R=Be?R:new Ke(this);var Te=n.apply(R,$);return Te.__actions__.push({func:js,args:[ce],thisArg:r}),new $r(Te,be)}return Oe&&Be?n.apply(this,$):(Te=this.thru(ce),Oe?m?Te.value()[0]:Te.value():Te)})}),kr(["pop","push","shift","sort","splice","unshift"],function(n){var o=_s[n],h=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",m=/^(?:pop|shift)$/.test(n);x.prototype[n]=function(){var E=arguments;if(m&&!this.__chain__){var I=this.value();return o.apply(Ge(I)?I:[],E)}return this[h](function(R){return o.apply(Ge(R)?R:[],E)})}}),rn(Ke.prototype,function(n,o){var h=x[o];if(h){var m=h.name+"";nt.call(oi,m)||(oi[m]=[]),oi[m].push({name:o,func:h})}}),oi[Fs(r,M).name]=[{name:"wrapper",func:r}],Ke.prototype.clone=fy,Ke.prototype.reverse=py,Ke.prototype.value=my,x.prototype.at=UE,x.prototype.chain=VE,x.prototype.commit=qE,x.prototype.next=ZE,x.prototype.plant=KE,x.prototype.reverse=YE,x.prototype.toJSON=x.prototype.valueOf=x.prototype.value=XE,x.prototype.first=x.prototype.head,ji&&(x.prototype[ji]=jE),x})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Nt._=Vn,define(function(){return Vn})):po?((po.exports=Vn)._=Vn,Vc._=Vn):Nt._=Vn}).call(e)})),xe=ca(Op(),1);function nl(e){return xe.default.isEmpty(e)||xe.default.isNil(e)}function xr(e){return nl(e)||e===!1||e===0}function Tp(e,t=document.body){return new Promise(r=>{const i=document.querySelector(e);if(i){r(i);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(r(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function ol(e,t=250){return new Promise(r=>{const i=setInterval(()=>{e()&&(clearInterval(i),r(!0))},t)})}function Lp(e,t,r=document.body){return new Promise(i=>{const a=r.querySelector(e);if(a?.getAttribute(t)){i(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const l=r.querySelector(e);l?.getAttribute(t)&&(i(l.getAttribute(t)??""),s.disconnect())});s.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function Rp(e,t=document.body){return new Promise(r=>{if(!xr(unsafeWindow[e])){r(unsafeWindow[e]);return}const i=new MutationObserver(()=>{xr(unsafeWindow[e])||(r(unsafeWindow[e]),i.disconnect())});i.observe(t,{childList:!0,subtree:!0,attributes:!0})})}async function Pp(e,t=5e3){const r=new Promise((i,a)=>{setTimeout(()=>a(new Error(`Timeout after ${t} ms`)),t)});return Promise.race([e,r])}async function hi(e,t,r,i){e!==void 0&&(ye(r),ye(i,await t(e)))}async function $p(e){await hi(e.waitAttr,t=>Lp(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await hi(e.waitEle,Tp,`Waiting for Element ${e.waitEle}`,"Found Element"),await hi(e.waitVar,Rp,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await hi(e.waitFunc,ol,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await hi(e.waitTime,t=>new Promise(r=>setTimeout(r,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var Fr=[],An=0,ua=null,da=4,ha=globalThis.nanostoresGlobal||={epoch:0},Dp=()=>{for(An=0;An<Fr.length;An+=da)Fr[An](Fr[An+1].value,Fr[An+2],Fr[An+3]);Fr.length=0},nd=e=>{let t=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},init:e,lc:0,listen(i){return r.lc=t.push(i),()=>{for(let s=An+da;s<Fr.length;)Fr[s]===i?Fr.splice(s,da):s+=da;let a=t.indexOf(i);~a&&(t.splice(a,1),--r.lc||r.off())}},notify(i,a){ha.epoch++;let s=!Fr.length&&!ua;for(let l of t)ua?.has(l)||(ua?.add(l),Fr.push(l,r,i,ua?void 0:a));s&&Dp()},off(){},set(i){let a=r.value;a!==i&&(r.value=i,r.notify(a))},subscribe(i){let a=r.listen(i);return i(r.value),a},value:e};return r},zp=5,fa=6,pa=10,Np=(e,t,r,i)=>(e.events=e.events||{},e.events[r+pa]||(e.events[r+pa]=i(a=>{e.events[r].reduceRight((s,l)=>(l(s),s),{shared:{},...a})})),e.events[r]=e.events[r]||[],e.events[r].push(t),()=>{let a=e.events[r],s=a.indexOf(t);a.splice(s,1),a.length||(delete e.events[r],e.events[r+pa](),delete e.events[r+pa])}),Bp=1e3,Hp=(e,t)=>Np(e,i=>{let a=t(i);a&&e.events[fa].push(a)},zp,i=>{let a=e.listen;e.listen=(...l)=>(!e.lc&&!e.active&&(e.active=!0,i()),a(...l));let s=e.off;return e.events[fa]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let l of e.events[fa])l();e.events[fa]=[]}},Bp)},()=>{e.listen=a,e.off=s}}),Fp=(e,t,r)=>{Array.isArray(e)||(e=[e]);let i,a,s=()=>{if(a===ha.epoch)return;a=ha.epoch;let p=e.map(w=>w.get());if(!i||p.some((w,b)=>w!==i[b])){i=p;let w=t(...p);w&&w.then&&w.t?w.then(b=>{i===p&&l.set(b)}):(l.set(w),a=ha.epoch)}},l=nd(void 0),c=l.get;l.get=()=>(s(),c());let u,f=r?()=>{clearTimeout(u),u=setTimeout(s)}:s;return Hp(l,()=>{let p=e.map(w=>w.listen(f));return s(),()=>{for(let w of p)w()}}),l},Gp=(e,t)=>Fp(e,t),od=(e={})=>{let t=nd(e);return t.setKey=function(r,i){let a=t.value;typeof i>"u"&&r in t.value?(t.value={...t.value},delete t.value[r],t.notify(a,r)):t.value[r]!==i&&(t.value={...t.value,[r]:i},t.notify(a,r))},t},il=globalThis,id=e=>e,ma=il.trustedTypes,ad=ma?ma.createPolicy("lit-html",{createHTML:e=>e}):void 0,al="$lit$",sn=`lit$${Math.random().toFixed(9).slice(2)}$`,sl="?"+sn,Wp=`<${sl}>`,Qn=document,fi=()=>Qn.createComment(""),pi=e=>e===null||typeof e!="object"&&typeof e!="function",ll=Array.isArray,sd=e=>ll(e)||typeof e?.[Symbol.iterator]=="function",cl=`[ 	
\f\r]`,mi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ld=/-->/g,cd=/>/g,eo=RegExp(`>|${cl}(?:([^\\s"'>=/]+)(${cl}*=${cl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ud=/'/g,dd=/"/g,hd=/^(?:script|style|textarea|title)$/i,ul=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ie=ul(1),QM=ul(2),ex=ul(3),ln=Symbol.for("lit-noChange"),He=Symbol.for("lit-nothing"),fd=new WeakMap,to=Qn.createTreeWalker(Qn,129);function pd(e,t){if(!ll(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ad!==void 0?ad.createHTML(t):t}var md=(e,t)=>{const r=e.length-1,i=[];let a,s=t===2?"<svg>":t===3?"<math>":"",l=mi;for(let c=0;c<r;c++){const u=e[c];let f,p,w=-1,b=0;for(;b<u.length&&(l.lastIndex=b,p=l.exec(u),p!==null);)b=l.lastIndex,l===mi?p[1]==="!--"?l=ld:p[1]!==void 0?l=cd:p[2]!==void 0?(hd.test(p[2])&&(a=RegExp("</"+p[2],"g")),l=eo):p[3]!==void 0&&(l=eo):l===eo?p[0]===">"?(l=a??mi,w=-1):p[1]===void 0?w=-2:(w=l.lastIndex-p[2].length,f=p[1],l=p[3]===void 0?eo:p[3]==='"'?dd:ud):l===dd||l===ud?l=eo:l===ld||l===cd?l=mi:(l=eo,a=void 0);const g=l===eo&&e[c+1].startsWith("/>")?" ":"";s+=l===mi?u+Wp:w>=0?(i.push(f),u.slice(0,w)+al+u.slice(w)+sn+g):u+sn+(w===-2?c:g)}return[pd(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},dl=class dp{constructor({strings:t,_$litType$:r},i){let a;this.parts=[];let s=0,l=0;const c=t.length-1,u=this.parts,[f,p]=md(t,r);if(this.el=dp.createElement(f,i),to.currentNode=this.el.content,r===2||r===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(a=to.nextNode())!==null&&u.length<c;){if(a.nodeType===1){if(a.hasAttributes())for(const w of a.getAttributeNames())if(w.endsWith(al)){const b=p[l++],g=a.getAttribute(w).split(sn),v=/([.?@])?(.*)/.exec(b);u.push({type:1,index:s,name:v[2],strings:g,ctor:v[1]==="."?vd:v[1]==="?"?bd:v[1]==="@"?wd:gi}),a.removeAttribute(w)}else w.startsWith(sn)&&(u.push({type:6,index:s}),a.removeAttribute(w));if(hd.test(a.tagName)){const w=a.textContent.split(sn),b=w.length-1;if(b>0){a.textContent=ma?ma.emptyScript:"";for(let g=0;g<b;g++)a.append(w[g],fi()),to.nextNode(),u.push({type:2,index:++s});a.append(w[b],fi())}}}else if(a.nodeType===8)if(a.data===sl)u.push({type:2,index:s});else{let w=-1;for(;(w=a.data.indexOf(sn,w+1))!==-1;)u.push({type:7,index:s}),w+=sn.length-1}s++}}static createElement(t,r){const i=Qn.createElement("template");return i.innerHTML=t,i}};function ro(e,t,r=e,i){if(t===ln)return t;let a=i!==void 0?r._$Co?.[i]:r._$Cl;const s=pi(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=a:r._$Cl=a),a!==void 0&&(t=ro(e,a._$AS(e,t.values),a,i)),t}var gd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??Qn).importNode(t,!0);to.currentNode=i;let a=to.nextNode(),s=0,l=0,c=r[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new ga(a,a.nextSibling,this,e):c.type===1?u=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(u=new _d(a,this,e)),this._$AV.push(u),c=r[++l]}s!==c?.index&&(a=to.nextNode(),s++)}return to.currentNode=Qn,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},ga=class hp{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,a){this.type=2,this._$AH=He,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ro(this,t,r),pi(t)?t===He||t==null||t===""?(this._$AH!==He&&this._$AR(),this._$AH=He):t!==this._$AH&&t!==ln&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):sd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==He&&pi(this._$AH)?this._$AA.nextSibling.data=t:this.T(Qn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=dl.createElement(pd(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(r);else{const s=new gd(a,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(t){let r=fd.get(t.strings);return r===void 0&&fd.set(t.strings,r=new dl(t)),r}k(t){ll(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,a=0;for(const s of t)a===r.length?r.push(i=new hp(this.O(fi()),this.O(fi()),this,this.options)):i=r[a],i._$AI(s),a++;a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=id(t).nextSibling;id(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},gi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,a){this.type=1,this._$AH=He,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=He}_$AI(e,t=this,r,i){const a=this.strings;let s=!1;if(a===void 0)e=ro(this,e,t,0),s=!pi(e)||e!==this._$AH&&e!==ln,s&&(this._$AH=e);else{const l=e;let c,u;for(e=a[0],c=0;c<a.length-1;c++)u=ro(this,l[r+c],t,c),u===ln&&(u=this._$AH[c]),s||=!pi(u)||u!==this._$AH[c],u===He?e=He:e!==He&&(e+=(u??"")+a[c+1]),this._$AH[c]=u}s&&!i&&this.j(e)}j(e){e===He?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},vd=class extends gi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===He?void 0:e}},bd=class extends gi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==He)}},wd=class extends gi{constructor(e,t,r,i,a){super(e,t,r,i,a),this.type=5}_$AI(e,t=this){if((e=ro(this,e,t,0)??He)===ln)return;const r=this._$AH,i=e===He&&r!==He||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==He&&(r===He||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},_d=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ro(this,e)}},Up={M:al,P:sn,A:sl,C:1,L:md,R:gd,D:sd,V:ro,I:ga,H:gi,N:bd,U:wd,B:vd,F:_d},Vp=il.litHtmlPolyfillSupport;Vp?.(dl,ga),(il.litHtmlVersions??=[]).push("3.3.3");var qp=(e,t,r)=>{const i=r?.renderBefore??t;let a=i._$litPart$;if(a===void 0){const s=r?.renderBefore??null;i._$litPart$=a=new ga(t.insertBefore(fi(),s),s,void 0,r??{})}return a._$AI(e),a},{I:Zp}=Up,yd=e=>e,tx=e=>e===null||typeof e!="object"&&typeof e!="function",rx={HTML:1,SVG:2,MATHML:3},nx=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,ox=e=>e?._$litType$?.h!=null,ix=e=>e?._$litDirective$!==void 0,ax=e=>e?._$litDirective$,jp=e=>e.strings===void 0,kd=()=>document.createComment(""),sx=(e,t,r)=>{const i=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=i.insertBefore(kd(),a),l=i.insertBefore(kd(),a);r=new Zp(s,l,e,e.options)}else{const s=r._$AB.nextSibling,l=r._$AM,c=l!==e;if(c){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==l._$AU&&r._$AP(u)}if(s!==a||c){let u=r._$AA;for(;u!==s;){const f=yd(u).nextSibling;yd(i).insertBefore(u,a),u=f}}}return r},lx=(e,t,r=e)=>(e._$AI(t,r),e),Kp={},cx=(e,t=Kp)=>e._$AH=t,ux=e=>e._$AH,dx=e=>{e._$AR(),e._$AA.remove()},hx=e=>{e._$AR()},va={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vi=e=>(...t)=>({_$litDirective$:e,values:t}),ba=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},bi=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const i of r)i._$AO?.(t,!1),bi(i,t);return!0},wa=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},Ed=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Jp(t)}};function Yp(e){this._$AN!==void 0?(wa(this),this._$AM=e,Ed(this)):this._$AM=e}function Xp(e,t=!1,r=0){const i=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(i))for(let s=r;s<i.length;s++)bi(i[s],!1),wa(i[s]);else i!=null&&(bi(i,!1),wa(i));else bi(this,e)}var Jp=e=>{e.type==va.CHILD&&(e._$AP??=Xp,e._$AQ??=Yp)},Qp=class extends ba{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Ed(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(bi(this,e),wa(this))}setValue(e){if(jp(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},hl=()=>new em,em=class{},fl=new WeakMap,pl=vi(class extends Qp{render(e){return He}update(e,[t]){const r=t!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),He}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=fl.get(t);r===void 0&&(r=new WeakMap,fl.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?fl.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),tm={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",CANCEL:"Abbrechen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü",DOUBLE_PAGE:"Doppelseite umschalten",CHOOSE_FILE:"Datei auswählen",NO_FILES_SELECTED:"Keine Dateien ausgewählt"},rm={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",CANCEL:"Cancel",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page",CHOOSE_FILE:"Choose File",NO_FILES_SELECTED:"No files selected"},nm={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",VIEW_MODE_GALLERY:"Galería",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazarse hacia abajo",CLOSE:"Cerrar",CANCEL:"Cancelar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom",DOUBLE_PAGE:"Alternar Página Doble",CHOOSE_FILE:"Elegir archivo",NO_FILES_SELECTED:"No se han seleccionado archivos"},om={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche à droite",VIEW_MODE_RIGHT:"Horizontal - De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche à droite",VIEW_MODE_MANGA:"Manga - De droite à gauche",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page",CHOOSE_FILE:"Choisir un fichier",NO_FILES_SELECTED:"Aucun fichier sélectionné"},im={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mangá - Direita para Esquerda",VIEW_MODE_GALLERY:"Galeria",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",CANCEL:"Cancelar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar Página Dupla",CHOOSE_FILE:"Escolher arquivo",NO_FILES_SELECTED:"Nenhum arquivo selecionado"},am={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"横向 - 从左到右",VIEW_MODE_RIGHT:"横向 - 从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",VIEW_MODE_BOOK:"书籍 - 从左到右",VIEW_MODE_MANGA:"漫画 - 从右到左",VIEW_MODE_GALLERY:"图库",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",CANCEL:"取消",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单",DOUBLE_PAGE:"切换双页",CHOOSE_FILE:"选择文件",NO_FILES_SELECTED:"未选择任何文件"},Eo=[rm,nm,im,am,tm,om];function Sd(e){return"listImages"in e&&!xr(e.listImages)}function Ad(e){return"listPages"in e&&!xr(e.listPages)}function sm(e){return"bruteForce"in e&&!xr(e.bruteForce)}var $e=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),Ne=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function lm(e,t){return t in e}var _a=globalThis,ml=_a.ShadowRoot&&(_a.ShadyCSS===void 0||_a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gl=Symbol(),Md=new WeakMap,xd=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==gl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ml&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Md.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Md.set(t,e))}return e}toString(){return this.cssText}},Se=e=>new xd(typeof e=="string"?e:e+"",void 0,gl),Et=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,a,s)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[s+1],e[0]);return new xd(r,e,gl)},cm=(e,t)=>{if(ml)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),a=_a.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=r.cssText,e.appendChild(i)}},Id=ml?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Se(r)})(e):e,{is:um,defineProperty:dm,getOwnPropertyDescriptor:hm,getOwnPropertyNames:fm,getOwnPropertySymbols:pm,getPrototypeOf:mm}=Object,ya=globalThis,Cd=ya.trustedTypes,gm=Cd?Cd.emptyScript:"",vm=ya.reactiveElementPolyfillSupport,wi=(e,t)=>e,ka={toAttribute(e,t){switch(t){case Boolean:e=e?gm:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},vl=(e,t)=>!um(e,t),Od={attribute:!0,type:String,converter:ka,reflect:!1,useDefault:!1,hasChanged:vl};Symbol.metadata??=Symbol("metadata"),ya.litPropertyMetadata??=new WeakMap;var So=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Od){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&dm(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:a}=hm(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){const l=i?.call(this);a?.call(this,s),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Od}static _$Ei(){if(this.hasOwnProperty(wi("elementProperties")))return;const e=mm(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(wi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(wi("properties"))){const t=this.properties,r=[...fm(t),...pm(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Id(i))}else e!==void 0&&t.push(Id(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return cm(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:ka).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ka;this._$Em=i;const l=s.fromAttribute(t,a.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,r,i=!1,a){if(e!==void 0){const s=this.constructor;if(i===!1&&(a=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??vl)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:a},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,a]of r){const{wrapped:s}=a,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};So.elementStyles=[],So.shadowRootOptions={mode:"open"},So[wi("elementProperties")]=new Map,So[wi("finalized")]=new Map,vm?.({ReactiveElement:So}),(ya.reactiveElementVersions??=[]).push("2.1.2");var bl=globalThis,rt=class extends So{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qp(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ln}};rt._$litElement$=!0,rt.finalized=!0,bl.litElementHydrateSupport?.({LitElement:rt});var bm=bl.litElementPolyfillSupport;bm?.({LitElement:rt}),(bl.litElementVersions??=[]).push("4.2.2");var lt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},wm={attribute:!0,type:String,converter:ka,reflect:!1,hasChanged:vl},_m=(e=wm,t,r)=>{const{kind:i,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),i==="accessor"){const{name:l}=r;return{set(c){const u=t.get.call(this);t.set.call(this,c),this.requestUpdate(l,u,e,!0,c)},init(c){return c!==void 0&&this.C(l,void 0,e,c),c}}}if(i==="setter"){const{name:l}=r;return function(c){const u=this[l];t.call(this,c),this.requestUpdate(l,u,e,!0,c)}}throw Error("Unsupported decorator location: "+i)};function j(e){return(t,r)=>typeof r=="object"?_m(e,t,r):((i,a,s)=>{const l=a.hasOwnProperty(s);return a.constructor.createProperty(s,i),l?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,r)}function Ht(e){return j({...e,state:!0,attribute:!1})}var Td=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function Mn(e,t){return(r,i,a)=>{const s=l=>l.renderRoot?.querySelector(e)??null;if(t){const{get:l,set:c}=typeof i=="object"?r:a??(()=>{const u=Symbol();return{get(){return this[u]},set(f){this[u]=f}}})();return Td(r,i,{get(){let u=l.call(this);return u===void 0&&(u=s(this),(u!==null||this.hasUpdated)&&c.call(this,u)),u}})}return Td(r,i,{get(){return s(this)}})}}var St=vi(class extends ba{constructor(e){if(super(e),e.type!==va.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||this.nt?.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return ln}}),Ea=class extends ba{constructor(e){if(super(e),this.it=He,e.type!==va.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===He||e==null)return this._t=void 0,this.it=e;if(e===ln)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ea.directiveName="unsafeHTML",Ea.resultType=1;var Ld=vi(Ea),wl=class extends Ea{};wl.directiveName="unsafeSVG",wl.resultType=2;var Rd=vi(wl);function Pd(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${xe.default.upperFirst(xe.default.camelCase(t))}`}var ym=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4),.icon-tabler-spacing-horizontal>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-arrow-left>:nth-child(7),.icon-tabler-book-arrow-left>:nth-child(8),.icon-tabler-book-arrow-right>:nth-child(7),.icon-tabler-book-arrow-right>:nth-child(8),.icon-tabler-books-return>:nth-child(8),.icon-tabler-books-return>:nth-child(9){color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4),.icon-tabler-book-off>:nth-child(7){color:red}",km='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',Em='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',Sm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Am='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',Mm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',xm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',Im='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',Cm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',Om='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',Tm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',Lm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',Rm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',Pm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',$m='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Dm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',zm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',Nm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',Bm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',Hm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',Fm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',Gm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',Wm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',Um='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',Vm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',qm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',Zm='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',jm=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"/></g><g><path style="fill: #3ad1e0" d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"/><path style="fill: #22c7db" d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"/><path style="fill: #fb33a8" d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"/><path style="fill: #ee2d9a" d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"/><path style="fill: #fcb44d" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"/><path style="fill: #fb9927" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"/><g><path style="fill: #ae6ad8" d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"/><path style="fill: #975bbb" d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"/><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"/><g><circle style="fill: #f2eff2" cx="317.179" cy="125.438" r="25.456"/><circle style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " cx="317.179" cy="125.438" r="25.456"/></g></g><path style="fill: #23f1a8" d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"/><path style="fill: #27e19d" d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"/><path style="fill: #23f1a8" d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"/><path style="fill: #27e19d" d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"/></g><g><path style="fill: #fdef63" d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/><path style="fill: #f3d730" d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/></g><g><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="230.156" y1="339.714" x2="230.156" y2="311.299"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="230.156" y1="364.644" x2="230.156" y2="366.646"/></g><g><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="240.429" y1="83.83" x2="258.124" y2="83.83"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,Km=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path3446"/></g><g id="g3448" transform="translate(309.1625,123.7057)"><path d="M 0,0 V -10.216" style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path3450"/></g><g id="g3452" transform="translate(241.984,113.7942)"><path d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385" style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,Ym=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5063"/></g><g id="g5065" transform="translate(307.605,127.5815)"><path d="M 0,0 V -9.916" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5067"/></g><g id="g5069" transform="translate(242.3946,117.9604)"><path d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5071"/></g><g id="g5073" transform="translate(153.1665,442.2645)"><path d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5075"/></g><g id="g5077" transform="translate(86,427.4996)"><path d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5079"/></g><g id="g5081" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5083"/></g><g id="g5085" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5087"/></g><g id="g5089" transform="translate(426,346.167)"><path d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5091"/></g><g id="g5093" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5095"/></g><g id="g5097" transform="translate(154.0172,159.8334)"><path d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5099"/></g><g id="g5101" transform="translate(86,307.9314)"><path d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5103"/></g><g id="g5105" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5107"/></g></g></g></g></svg>`,Xm='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',Jm=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"/></g><path style="fill: #3ad1e0" d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"/><path style="fill: #20bfd5" d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"/><path style="fill: #26d192" d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"/><line style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " x1="280.6" y1="141.49" x2="280.6" y2="47.5"/><path style="fill: #23f1a8" d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><g><path style="fill: #ae6ad8" d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"/><path style="fill: #975bbb" d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"/></g><path style="fill: #27e19d" d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"/><path style="fill: #ae6ad8" d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"/><path style="fill: #975bbb" d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"/><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"/><g><path style="fill: #3ad1e0" d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"/><path style="fill: #20bfd5" d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"/></g><g><path style="fill: #fb54b6" d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"/></g><path style="fill: #fb9927" d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"/><path style="fill: #f98824" d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"/><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"/><g><path style="fill: #fb33a8" d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"/></g><g><g><path style="fill: #fdef63" d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"/><g><line id="XMLID_00000127012381744132405410000009872483291948348836_" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " x1="279.433" y1="224.908" x2="279.433" y2="224.805"/><line id="XMLID_00000080918978500845250090000017315552773041050031_" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " x1="256.002" y1="224.908" x2="256.002" y2="224.805"/><line id="XMLID_00000140711681861242238370000008769002181148908969_" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " x1="232.572" y1="224.908" x2="232.572" y2="224.805"/></g><path style="fill: #f3d730" d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"/></g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"/></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"/></g><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"/><g><g><g><circle style="fill: #d8b2ec" cx="189.8" cy="381.497" r="24.709"/><circle style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " cx="189.8" cy="381.497" r="24.709"/></g></g></g><g><line id="XMLID_00000028301319025648580530000009457246182494066313_" style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="314.674" y1="108.185" x2="354.689" y2="108.075"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,Qm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',eg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',tg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',rg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',ng='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',og='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',ig='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',ag='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',sg='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',lg=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="176" y1="281.01" x2="336" y2="281.01"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="176" y1="321.01" x2="336" y2="321.01"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="256" y1="115.517" x2="256" y2="229.706"/><g><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="193.551" y1="362.07" x2="193.551" y2="374.07"/><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="318.449" y1="362.07" x2="318.449" y2="374.07"/><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,cg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',ug=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" style="enable-background: new 0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"/><g><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="133.2" y1="310.695" x2="133.2" y2="322.695"/><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="258.098" y1="310.695" x2="258.098" y2="322.695"/><g><path style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-miterlimit: 10;\r
            " d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/><path style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-miterlimit: 10;\r
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,dg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',hg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',fg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',pg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',mg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',gg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>',vg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',bg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',wg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',_g='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',yg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',kg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',Eg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',Sg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',Ag='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',Mg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',xg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',Ig='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',Cg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',Og='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Tg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',Lg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',Rg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',Pg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',$g='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',Dg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" style="enable-background: new 0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="264.641" y1="367.54" x2="327.14" y2="324.275"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="335.24" y1="420" x2="317.58" y2="458.04"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="365.42" y1="354.99" x2="349.98" y2="388.25"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"/><g><g><g><path style="\r
                fill: none;\r
                stroke: #000000;\r
                stroke-width: 15;\r
                stroke-linecap: round;\r
                stroke-miterlimit: 10;\r
              " d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/><path style="\r
                fill: none;\r
                stroke: #000000;\r
                stroke-width: 15;\r
                stroke-linecap: round;\r
                stroke-miterlimit: 10;\r
              " d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/></g></g><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"/><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,zg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',Ng='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',Bg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Hg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',Fg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',Gg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',Wg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',Ug='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',Vg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',qg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',Zg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',jg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',Kg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',Yg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',Xg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',Jg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Qg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',e5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',t5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',r5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',n5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',o5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',i5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',a5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',s5=an({IconAdjustmentsHorizontal:()=>km,IconAlertCircle:()=>Em,IconApiBook:()=>Sm,IconArrowAutofitDown:()=>Am,IconArrowAutofitHeight:()=>Mm,IconArrowAutofitLeft:()=>xm,IconArrowAutofitRight:()=>Im,IconArrowAutofitWidth:()=>Cm,IconArrowBigLeft:()=>Om,IconArrowBigRight:()=>Tm,IconArrowsHorizontal:()=>Lm,IconArrowsLeftRight:()=>Rm,IconArrowsMove:()=>Pm,IconArrowsMoveVertical:()=>$m,IconArrowsVertical:()=>Dm,IconBook:()=>zm,IconBookArrowLeft:()=>Nm,IconBookArrowRight:()=>Bm,IconBookOff:()=>Hm,IconBookUpload:()=>Fm,IconBookmark:()=>Gm,IconBookmarkOff:()=>Wm,IconBookmarks:()=>Um,IconBooksReturn:()=>Vm,IconBoxAlignTop:()=>qm,IconCategory:()=>Qm,IconCheck:()=>eg,IconChevronLeft:()=>tg,IconChevronRight:()=>rg,IconCircleCheck:()=>ng,IconCircleX:()=>og,IconComic1:()=>jm,IconComic1Flat:()=>Zm,IconComic2:()=>Ym,IconComic2Flat:()=>Km,IconComic3:()=>Jm,IconComic3Flat:()=>Xm,IconDeviceFloppy:()=>ig,IconDotsVertical:()=>ag,IconEReader1:()=>lg,IconEReader1Flat:()=>sg,IconEReader2:()=>ug,IconEReader2Flat:()=>cg,IconExternalLink:()=>dg,IconEye:()=>hg,IconEyeOff:()=>fg,IconFileDownload:()=>pg,IconFilePercent:()=>mg,IconFolderOpen:()=>gg,IconHandClick:()=>vg,IconHelp:()=>bg,IconInfoCircle:()=>wg,IconKeyboard:()=>_g,IconLayoutBottombar:()=>yg,IconLayoutBottombarInactive:()=>kg,IconLayoutDashboard:()=>Eg,IconLayoutSidebar:()=>Sg,IconLayoutSidebarInactive:()=>Ag,IconLayoutSidebarRight:()=>Mg,IconLayoutSidebarRightInactive:()=>xg,IconListNumbers:()=>Ig,IconLoader2:()=>Cg,IconLocationCog:()=>Og,IconMenu2:()=>Tg,IconMenuDeep:()=>Lg,IconMessage:()=>Rg,IconMoon:()=>Pg,IconPage:()=>Dg,IconPageFlat:()=>$g,IconPalette:()=>zg,IconPencil:()=>Ng,IconPencilCog:()=>Bg,IconPhoto:()=>Hg,IconPhotoOff:()=>Fg,IconPin:()=>Gg,IconPlayerPause:()=>Wg,IconPlayerPlay:()=>Ug,IconRefresh:()=>Vg,IconSettings:()=>qg,IconSettingsOff:()=>Zg,IconSpacingHorizontal:()=>jg,IconSpacingVertical:()=>Kg,IconSun:()=>Yg,IconTrash:()=>Xg,IconWorldCog:()=>Jg,IconX:()=>Qg,IconZoom:()=>e5,IconZoomCancel:()=>t5,IconZoomIn:()=>r5,IconZoomInArea:()=>n5,IconZoomOut:()=>o5,IconZoomOutArea:()=>i5,IconZoomPan:()=>a5}),_l=an({IconAdjustmentsHorizontal:()=>p5,IconAlertCircle:()=>G5,IconApiBook:()=>m5,IconArrowAutofitDown:()=>b5,IconArrowAutofitHeight:()=>w5,IconArrowAutofitLeft:()=>_5,IconArrowAutofitRight:()=>y5,IconArrowAutofitWidth:()=>k5,IconArrowBigLeft:()=>E5,IconArrowBigRight:()=>S5,IconArrowsHorizontal:()=>g5,IconArrowsLeftRight:()=>v5,IconArrowsMove:()=>A5,IconArrowsMoveVertical:()=>M5,IconArrowsVertical:()=>x5,IconBook:()=>I5,IconBookArrowLeft:()=>O5,IconBookArrowRight:()=>T5,IconBookOff:()=>C5,IconBookUpload:()=>R5,IconBookmark:()=>P5,IconBookmarkOff:()=>$5,IconBookmarks:()=>D5,IconBooksReturn:()=>L5,IconBoxAlignTop:()=>z5,IconCategory:()=>N5,IconCheck:()=>B5,IconChevronLeft:()=>H5,IconChevronRight:()=>F5,IconCircleCheck:()=>W5,IconCircleX:()=>U5,IconComic1:()=>Z5,IconComic1Flat:()=>j5,IconComic2:()=>K5,IconComic2Flat:()=>Y5,IconComic3:()=>X5,IconComic3Flat:()=>J5,IconDeviceFloppy:()=>Q5,IconDotsVertical:()=>ev,IconEReader1:()=>tv,IconEReader1Flat:()=>rv,IconEReader2:()=>nv,IconEReader2Flat:()=>ov,IconExternalLink:()=>iv,IconEye:()=>av,IconEyeOff:()=>sv,IconFileDownload:()=>lv,IconFilePercent:()=>cv,IconFolderOpen:()=>uv,IconHandClick:()=>dv,IconHelp:()=>V5,IconInfoCircle:()=>q5,IconKeyboard:()=>hv,IconLayoutBottombar:()=>pv,IconLayoutBottombarInactive:()=>mv,IconLayoutDashboard:()=>fv,IconLayoutSidebar:()=>gv,IconLayoutSidebarInactive:()=>vv,IconLayoutSidebarRight:()=>bv,IconLayoutSidebarRightInactive:()=>wv,IconListNumbers:()=>_v,IconLoader2:()=>yv,IconLocationCog:()=>kv,IconMenu2:()=>Ev,IconMenuDeep:()=>Sv,IconMessage:()=>Av,IconMoon:()=>Mv,IconPage:()=>xv,IconPageFlat:()=>Iv,IconPalette:()=>Cv,IconPencil:()=>Ov,IconPencilCog:()=>Tv,IconPhoto:()=>yl,IconPhotoOff:()=>kl,IconPin:()=>Lv,IconPlayerPause:()=>Rv,IconPlayerPlay:()=>Pv,IconRefresh:()=>$v,IconSettings:()=>Dv,IconSettingsOff:()=>zv,IconSpacingHorizontal:()=>Nv,IconSpacingVertical:()=>Bv,IconSun:()=>Hv,IconTrash:()=>Fv,IconWorldCog:()=>Gv,IconX:()=>Wv,IconZoom:()=>Uv,IconZoomCancel:()=>Vv,IconZoomIn:()=>qv,IconZoomInArea:()=>Zv,IconZoomOut:()=>jv,IconZoomOutArea:()=>Kv,IconZoomPan:()=>Yv});function l5(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const r=t[1].trim(),i=t[2],a=/color:\s*([^;]+)/.exec(i);if(a){const s=a[1].trim();return{selectors:r.split(",").map(l=>l.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var c5=l5(ym),Sa=new Map;for(const e of c5)for(const t of e.selectors){const r=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!r)continue;const[,i,a]=r;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),Sa.has(i)||Sa.set(i,[]),Sa.get(i)?.push({subSelector:s,color:e.color})}var u5=new DOMParser,d5=new XMLSerializer;function h5(e,t){const r=Sa.get(t);if(!r?.length)return e;const i=u5.parseFromString(e,"image/svg+xml").documentElement;if(i.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of r)try{i.querySelectorAll(a).forEach(l=>{l.setAttribute("stroke",s)})}catch(l){console.error(`Invalid selector "${a}" for ${t}`,l)}return d5.serializeToString(i)}var f5=xe.default.mapValues(s5,(e,t)=>h5(e,`icon-tabler-${xe.default.kebabCase(t.replace(/^Icon/,""))}`)),{IconAdjustmentsHorizontal:p5,IconApiBook:m5,IconArrowsHorizontal:g5,IconArrowsLeftRight:v5,IconArrowAutofitDown:b5,IconArrowAutofitHeight:w5,IconArrowAutofitLeft:_5,IconArrowAutofitRight:y5,IconArrowAutofitWidth:k5,IconArrowBigLeft:E5,IconArrowBigRight:S5,IconArrowsMove:A5,IconArrowsMoveVertical:M5,IconArrowsVertical:x5,IconBook:I5,IconBookOff:C5,IconBookArrowLeft:O5,IconBookArrowRight:T5,IconBooksReturn:L5,IconBookUpload:R5,IconBookmark:P5,IconBookmarkOff:$5,IconBookmarks:D5,IconBoxAlignTop:z5,IconCategory:N5,IconCheck:B5,IconChevronLeft:H5,IconChevronRight:F5,IconAlertCircle:G5,IconCircleCheck:W5,IconCircleX:U5,IconHelp:V5,IconInfoCircle:q5,IconComic1:Z5,IconComic1Flat:j5,IconComic2:K5,IconComic2Flat:Y5,IconComic3:X5,IconComic3Flat:J5,IconDeviceFloppy:Q5,IconDotsVertical:ev,IconEReader1:tv,IconEReader1Flat:rv,IconEReader2:nv,IconEReader2Flat:ov,IconExternalLink:iv,IconEye:av,IconEyeOff:sv,IconFileDownload:lv,IconFilePercent:cv,IconFolderOpen:uv,IconHandClick:dv,IconKeyboard:hv,IconLayoutDashboard:fv,IconLayoutBottombar:pv,IconLayoutBottombarInactive:mv,IconLayoutSidebar:gv,IconLayoutSidebarInactive:vv,IconLayoutSidebarRight:bv,IconLayoutSidebarRightInactive:wv,IconListNumbers:_v,IconLoader2:yv,IconLocationCog:kv,IconMenu2:Ev,IconMenuDeep:Sv,IconMessage:Av,IconMoon:Mv,IconPage:xv,IconPageFlat:Iv,IconPalette:Cv,IconPencil:Ov,IconPencilCog:Tv,IconPhoto:yl,IconPhotoOff:kl,IconPin:Lv,IconPlayerPause:Rv,IconPlayerPlay:Pv,IconRefresh:$v,IconSettings:Dv,IconSettingsOff:zv,IconSpacingHorizontal:Nv,IconSpacingVertical:Bv,IconSun:Hv,IconTrash:Fv,IconWorldCog:Gv,IconX:Wv,IconZoom:Uv,IconZoomCancel:Vv,IconZoomIn:qv,IconZoomInArea:Zv,IconZoomOut:jv,IconZoomOutArea:Kv,IconZoomPan:Yv}=f5;function z(e,t,r,i){var a=arguments.length,s=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(s=(a<3?l(s):a>3?l(t,r,s):l(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}var no=class extends rt{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=Et`
    :host {
      --mov-icon-size: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      line-height: 1;
    }
    :host([hidden]) {
      display: none;
    }
    svg {
      width: var(--mov-icon-size, 1rem);
      height: var(--mov-icon-size, 1rem);
      display: block;
      color: inherit; /* This will inherit from the host element */
    }
  `}updated(t){super.updated(t),t.has("name")&&(_l[Pd(this.name)]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0}))))}render(){const t=_l[Pd(this.name)];if(!t)return He;const r=this.size?`--mov-icon-size: ${this.size};`:"";return ie`<span
      role=${this.label?"img":He}
      aria-label=${this.label||He}
      aria-hidden=${this.label?He:"true"}
      style=${r}
      >${Rd(t)}</span
    >`}};z([j({type:String})],no.prototype,"name",void 0),z([j({type:String,reflect:!0})],no.prototype,"variant",void 0),z([j({type:String,reflect:!0})],no.prototype,"family",void 0),z([j({type:String})],no.prototype,"label",void 0),z([j({type:String})],no.prototype,"size",void 0),no=z([lt("mov-icon")],no);var Xv=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),Ao=Xv;function Jv(e,t){const r=document.createElement("style");return r.id=e,r.appendChild(document.createTextNode(t)),r}function $d(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(Jv(e,t))}function Qv(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function e4(e,t){Qv(e),$d(e,t)}function t4(e,t){return Ao`
    <style id="${e}">
      ${t}
    </style>
  `}var Aa=".mov-toast-stack{z-index:2000;pointer-events:none;flex-direction:column;gap:.5rem;width:350px;max-width:100vw;max-height:100vh;padding:1rem;display:flex;position:fixed;overflow:hidden}.mov-toast-stack-top-start{top:0;left:0}.mov-toast-stack-top-center{align-items:center;top:0;left:50%;transform:translate(-50%)}.mov-toast-stack-top-end{top:0;right:0}.mov-toast-stack-bottom-start{flex-direction:column-reverse;bottom:0;left:0}.mov-toast-stack-bottom-center{flex-direction:column-reverse;align-items:center;bottom:0;left:50%;transform:translate(-50%)}.mov-toast-stack-bottom-end{flex-direction:column-reverse;bottom:0;right:0}:host{width:100%;display:block}.mov-toast{pointer-events:auto;background-color:var(--theme-background-color);color:var(--theme-text-color);border:1px solid var(--theme-border-color);opacity:0;visibility:hidden;border-radius:.5rem;flex-direction:column;width:100%;transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),visibility .3s cubic-bezier(.4,0,.2,1);display:flex;overflow:hidden;box-shadow:0 4px 12px #00000026}:host([placement$=-end]) .mov-toast{transform:translate(110%)}:host([placement$=-start]) .mov-toast{transform:translate(-110%)}:host([placement=top-center]) .mov-toast{transform:translateY(-110%)}:host([placement=bottom-center]) .mov-toast{transform:translateY(110%)}:host([open]) .mov-toast{opacity:1;visibility:visible;transform:translate(0)}.mov-toast-body{align-items:flex-start;gap:.75rem;padding:.75rem 1rem;display:flex}.mov-toast-icon{flex-shrink:0;justify-content:center;align-items:center;margin-top:.125rem;font-size:20px;display:flex}.mov-toast-icon mov-icon{--mov-icon-size:1.25rem}.mov-toast-content{flex-direction:column;flex-grow:1;gap:.125rem;display:flex}.mov-toast-title{font-size:14px;font-weight:600;line-height:1.25}.mov-toast-description{opacity:.8;font-size:13px;line-height:1.4}.mov-toast-close{cursor:pointer;color:inherit;opacity:.5;background:0 0;border:none;flex-shrink:0;justify-content:center;align-items:center;margin-right:-.25rem;padding:.25rem;transition:opacity .2s;display:flex}.mov-toast-close:hover{opacity:1}.mov-toast-variant-primary .mov-toast-icon{color:var(--mov-color-fill-loud)}.mov-toast-variant-success .mov-toast-icon{color:#28a745}.mov-toast-variant-warning .mov-toast-icon{color:#ffc107}.mov-toast-variant-danger .mov-toast-icon{color:#dc3545}.mov-toast-variant-neutral .mov-toast-icon{color:var(--theme-text-color)}.mov-toast-variant-primary{border-left:4px solid var(--mov-color-fill-loud)}.mov-toast-variant-success{border-left:4px solid #28a745}.mov-toast-variant-warning{border-left:4px solid #ffc107}.mov-toast-variant-danger{border-left:4px solid #dc3545}.mov-toast-variant-neutral{border-left:4px solid var(--theme-border-color)}",Yr=class extends rt{constructor(...t){super(...t),this.open=!1,this.variant="primary",this.duration=3e3,this.closable=!1,this.title="",this.description="",this.placement="bottom-end"}static{this.styles=[Se(Aa)]}async show(){if(!this.open)return await this.updateComplete,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),this.open=!0,this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration)),new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0})),t()},300)})}async hide(){if(this.open)return window.clearTimeout(this.autoHideTimeout),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.open=!1,new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0})),this.remove(),t()},300)})}handleCloseClick(){this.hide()}getDefaultIcon(){if(this.icon)return this.icon;switch(this.variant){case"success":return"IconCircleCheck";case"warning":return"IconAlertCircle";case"danger":return"IconCircleX";default:return"IconInfoCircle"}}render(){return ie`
      <div
        part="base"
        class=${St({"mov-toast":!0,[`mov-toast-variant-${this.variant}`]:!0})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
      >
        <div class="mov-toast-body" part="body">
          <div class="mov-toast-icon" part="icon">
            <slot name="icon">
              <mov-icon name=${this.getDefaultIcon()}></mov-icon>
            </slot>
          </div>

          <div class="mov-toast-content" part="content">
            ${this.title?ie`<div class="mov-toast-title" part="title">${this.title}</div>`:""}
            <div class="mov-toast-description" part="description">
              <slot>${this.description}</slot>
            </div>
          </div>

          <slot name="action"></slot>

          ${this.closable?ie`
                <button
                  type="button"
                  class="mov-toast-close"
                  part="close-button"
                  @click=${this.handleCloseClick}
                  aria-label="Close"
                >
                  <mov-icon name="IconX"></mov-icon>
                </button>
              `:""}
        </div>
      </div>
    `}};z([j({type:Boolean,reflect:!0})],Yr.prototype,"open",void 0),z([j({reflect:!0})],Yr.prototype,"variant",void 0),z([j({type:Number})],Yr.prototype,"duration",void 0),z([j({type:Boolean})],Yr.prototype,"closable",void 0),z([j()],Yr.prototype,"title",void 0),z([j()],Yr.prototype,"description",void 0),z([j()],Yr.prototype,"icon",void 0),z([j({reflect:!0})],Yr.prototype,"placement",void 0),Yr=z([lt("mov-toast")],Yr);var ur=e=>{const t=e.placement||"bottom-end",r=`mov-toast-stack-${t}`;let i=document.querySelector(`.mov-toast-stack.${r}`);const a=Aa.indexOf(":host");$d("mov-toast-stack-styles",a>-1?Aa.substring(0,a).trim():Aa),i||(i=document.createElement("div"),i.className=`mov-toast-stack ${r}`,document.body.appendChild(i));const s=document.createElement("mov-toast");let l=e.variant||"primary";return l==="info"&&(l="primary"),l==="error"&&(l="danger"),s.variant=l,s.title=e.title||"",s.description=e.description||e.message||"",s.duration=e.duration??3e3,s.closable=e.closable??!0,s.placement=t,e.icon&&(s.icon=e.icon),i.appendChild(s),requestAnimationFrame(()=>{s.show()}),s};ur.info=e=>ur({...e,variant:"primary"}),ur.success=e=>ur({...e,variant:"success"}),ur.warning=e=>ur({...e,variant:"warning"}),ur.error=e=>ur({...e,variant:"danger"});var _i=(e,t)=>{const r=(i,a)=>xe.default.transform(i,(s,l,c)=>{xe.default.isEqual(l,a[c])||(xe.default.isObject(l)&&xe.default.isObject(a[c])&&!xe.default.isArray(l)?s[c]=r(l,a[c]):s[c]=l)});return r(e,t)},r4={bookmarks:[],colorScheme:"dark",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","],TOGGLE_CONTROLS:["L"]}},n4={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},o4={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"};function Gr(e=!0){const t={...r4,theme:e?"#29487D":"#004526"};let r=Cp()?xe.default.defaultsDeep(n4,t):t;return rl()&&(r=xe.default.defaultsDeep(o4,r)),r}function i4(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const r=s=>`${s.url}-${s.date}`,i=[...e].sort((s,l)=>r(s).localeCompare(r(l))),a=[...t].sort((s,l)=>r(s).localeCompare(r(l)));return xe.default.isEqual(i,a)}}function a4(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const r=e,i=t,a=xe.default.keys(r).sort((l,c)=>l.localeCompare(c)),s=xe.default.keys(i).sort((l,c)=>l.localeCompare(c));if(!xe.default.isEqual(a,s))return!1;for(const l of a){const c=r[l]?[...r[l]].sort((f,p)=>f.localeCompare(p)):[],u=i[l]?[...i[l]].sort((f,p)=>f.localeCompare(p)):[];if(!xe.default.isEqual(c,u))return!1}return!0}}function Dd(e,t,r){if(r==="bookmarks")return i4(e,t);if(r==="keybinds")return a4(e,t)}function Ma(e,t,r){if(e===t)return!1;if(r){const i={[r]:e},a={[r]:t};return!xe.default.isEqualWith(i,a,Dd)}return!xe.default.isEqualWith(e,t,Dd)}var tr=xe.default.defaultsDeep(Sp(Gr()),Gr()),rr=xe.default.defaultsDeep(Ap(Gr(!1)),Gr(!1)),oo=()=>rr?.enabled===!0,El=e=>oo()&&!["locale","bookmarks","keybinds"].includes(e),Tt=od(oo()?{...rr,locale:tr.locale,keybinds:tr.keybinds,bookmarks:tr.bookmarks}:tr),Mo=Gp(Tt,e=>Eo.find(t=>t.ID===e.locale)??Eo[1]),nr=od({autoScroll:!1,chapter:hl(),currentPage:0,device:di(),manga:void 0,panel:"none",scrollToPage:void 0});function io(e){if(e){const t=El(e)?rr[e]:tr[e],r=Tt.get()?.[e];Ma(r,t,e)&&(Tt.setKey(e,t),ye("Refreshed Settings",e,t));return}for(const t in Tt.get()){const r=Tt.get()[t],i=El(t)?rr[t]:tr[t];Ma(r,i)&&Tt.setKey(t,i)}ye("Refreshed All Settings")}function s4(e){const t=xe.default.defaultsDeep(e,Gr()),r=tr?_i(t,tr):t;if(!xr(r)){ye("Imported Global Settings",r),tr=t;for(const i in r)io(i)}}rd(xe.default.debounce(s4,300),"settings");function l4(e){const t=xe.default.defaultsDeep(e,Gr(!1)),r=rr?_i(t,rr):t;if(!xr(r)){ye("Imported Local Settings",r),rr=t;for(const i in r)io(i)}}rd(xe.default.debounce(l4,300),location.hostname);function X(e){return Tt.get()?.[e]}function xo(e,t){const r=Tt.get()?.[e];Ma(r,t,e)&&Tt.setKey(e,t)}function xt(e,t){Ma(X(e),t,e)&&(Tt.setKey(e,t),El(e)?(rr[e]=t,td(_i(rr,Gr(!1)))):(tr[e]=t,Mp(_i(tr,Gr()))))}function Io(e,t){xo(e,t(X(e)))}function fe(e){return nr.get()[e]}function De(e,t){const r=nr.get()[e];xe.default.isEqual(r,t)||nr.setKey(e,t)}function zd(e,t){const r=nr.get()[e],i=t(r);xe.default.isEqual(r,i)||nr.setKey(e,i)}function dr(e,t){zd("images",r=>({...r,[e]:{...r?.[e],...t(r?.[e]??{})}}))}function Y(e){const t=Eo.find(r=>r.ID===X("locale"))??Eo[1];return lm(t,e)?t?.[e]??Eo[1]?.[e]:`##MISSING_STRING_${e}##`}function Nd(e=!1){return rr.enabled=e,td(_i(rr,Gr(!1))),ye("Local Settings ",e?"Enabled":"Disabled"),ur.info({title:"Changed Settings to",description:oo()?"Local":"Global",duration:2e3}),oo()}function c4(){oo()?(Ju(location.hostname),rr=Gr(!1),Nd(!1)):(Ju("settings"),tr=Gr(),io()),ye("Settings Reset")}function Co(e=location.href){return X("bookmarks").find(t=>t.url===e)?.page}function u4(e=null){jt("Current Settings (Local:",oo(),") ",e?Tt.get()[e]:Tt.get(),`
Global Settings`,e?tr[e]:tr,`
Local Settings`,e?rr[e]:rr,`
AppState`,nr.get())}kp("MOVSettings",u4);var d4=(e,t,r)=>{if(r&&!["bookmarks","zoomValue"].includes(r)){const i=t[r],a=e[r];ur.info({title:`${r} Changed`,description:`from ${JSON.stringify(i)} to ${JSON.stringify(a)}`,duration:2e3})}};Tt.listen(xe.default.debounce(d4,300));var hr=e=>e??He,h4=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(16px * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m,.375rem);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",pt=class extends rt{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[Se(h4)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,r={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},i=ie`
      <slot
        name="start"
        @slotchange=${this.handleLabelSlotChange}
        part="start"
        class="start"
      ></slot>
      <slot
        @slotchange=${this.handleLabelSlotChange}
        part="label"
        class="label"
      ></slot>
      <slot
        name="end"
        @slotchange=${this.handleLabelSlotChange}
        part="end"
        class="end"
      ></slot>
      ${this.withCaret?ie`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?ie`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return t?ie`
        <a
          part="base"
          class=${St(r)}
          href=${hr(this.href)}
          target=${hr(this.target)}
          title=${hr(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${hr(this.download)}
          @click=${this.handleClick}
        >
          ${i}
        </a>
      `:ie`
        <button
          part="base"
          class=${St(r)}
          ?disabled=${this.disabled||this.loading}
          type=${hr(this.type)}
          title=${hr(this.title)}
          name=${hr(this.name)}
          value=${hr(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${i}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],r=t.filter(l=>l.nodeType===Node.ELEMENT_NODE),i=t.filter(l=>l.nodeType===Node.TEXT_NODE&&l.textContent?.trim()!==""),a=l=>["wa-icon","mov-icon","svg"].includes(l.localName),s=r.some(a);this.isIconButton=i.length===0&&s}};z([Mn(".button")],pt.prototype,"button",void 0),z([Mn("slot:not([name])")],pt.prototype,"labelSlot",void 0),z([Ht()],pt.prototype,"isIconButton",void 0),z([Ht()],pt.prototype,"hasLabel",void 0),z([Ht()],pt.prototype,"hasStart",void 0),z([Ht()],pt.prototype,"hasEnd",void 0),z([j()],pt.prototype,"title",void 0),z([j({reflect:!0})],pt.prototype,"appearance",void 0),z([j({reflect:!0})],pt.prototype,"variant",void 0),z([j({reflect:!0})],pt.prototype,"size",void 0),z([j({attribute:"with-caret",type:Boolean,reflect:!0})],pt.prototype,"withCaret",void 0),z([j({type:Boolean,reflect:!0})],pt.prototype,"disabled",void 0),z([j({type:Boolean,reflect:!0})],pt.prototype,"loading",void 0),z([j({type:Boolean,reflect:!0})],pt.prototype,"pill",void 0),z([j()],pt.prototype,"type",void 0),z([j({reflect:!0})],pt.prototype,"name",void 0),z([j({reflect:!0})],pt.prototype,"value",void 0),z([j({reflect:!0})],pt.prototype,"href",void 0),z([j()],pt.prototype,"target",void 0),z([j({reflect:!0})],pt.prototype,"rel",void 0),z([j()],pt.prototype,"download",void 0),z([j({reflect:!0})],pt.prototype,"form",void 0),pt=z([lt("mov-button")],pt);var Ir=class extends rt{constructor(...t){super(...t),this.mode="burger",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=Et`
    :host {
      display: inline-flex;
      vertical-align: middle;
      --burger-size: 1.25rem;
      --burger-line-height: 2px;
      --burger-line-color: currentColor;
      --burger-transition-duration: 0.3s;
    }

    /* Base button styling */
    mov-button {
      position: relative;
    }

    /* Single icon modes - simple rotation in place */
    .single-icon-mode mov-icon {
      transition: transform 0.3s ease;
      display: block;
    }

    .chevron-icon {
      transform: rotate(0deg);
    }

    :host([active]) .chevron-icon {
      transform: rotate(90deg);
    }

    .expand-icon {
      transform: rotate(0deg);
    }

    :host([active]) .expand-icon {
      transform: rotate(180deg);
    }

    /* Two icon modes - positioned for smooth swap */
    .two-icon-mode {
      position: relative;
    }

    .two-icon-mode mov-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition:
        opacity 0.25s ease,
        transform 0.3s ease;
    }

    /* Default state: inactive visible, active hidden */
    .inactive-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .active-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    /* Active state: inactive hidden, active visible */
    :host([active]) .inactive-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    :host([active]) .active-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    /* Play-pause uses single icon swap without positioning issues */
    .play-pause-icon {
      transition: opacity 0.2s ease;
      display: block;
    }

    /* Burger Mode Styling */
    .burger-mode {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: var(--burger-size);
      height: var(--burger-size);
      position: relative;
    }

    .burger-line {
      width: 100%;
      height: var(--burger-line-height);
      background-color: var(--burger-line-color);
      border-radius: var(--burger-line-height);
      transition: transform var(--burger-transition-duration) ease,
                  opacity var(--burger-transition-duration) ease;
      position: absolute;
    }

    .burger-line:nth-child(1) { transform: translateY(-6px); }
    .burger-line:nth-child(2) { transform: translateY(0); }
    .burger-line:nth-child(3) { transform: translateY(6px); }

    :host([active]) .burger-line:nth-child(1) {
      transform: translateY(0) rotate(45deg);
    }

    :host([active]) .burger-line:nth-child(2) {
      opacity: 0;
      transform: translateX(4px);
    }

    :host([active]) .burger-line:nth-child(3) {
      transform: translateY(0) rotate(-45deg);
    }

    /* Size adjustments for burger */
    :host([size="small"]) { --burger-size: 1rem; }
    :host([size="large"]) { --burger-size: 1.5rem; }

    /* Simple click feedback without disrupting layout */
    mov-button:active {
      transform: scale(0.96);
    }

    /* Loading state */
    :host([loading]) mov-icon {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Hover effects */
    mov-button:hover:not(:disabled) {
      filter: brightness(1.05);
    }

    /* Focus visible enhancement */
    mov-button:focus-visible {
      outline: 2px solid var(--mov-color-fill-loud, currentColor);
      outline-offset: 2px;
    }

    /* Ensure proper centering for all modes */
    mov-button.single-icon-mode {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Fix icon sizing consistency */
    mov-icon {
      flex-shrink: 0;
    }
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const t=this.active?this.activeLabel??this.label:this.label,r={"two-icon-mode":["custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode),"burger-mode-active":this.mode==="burger"};return ie`
      <mov-button
        @click=${this._onClick}
        .appearance=${hr(this.appearance)}
        .size=${hr(this.size)}
        ?disabled=${hr(this.disabled)}
        ?loading=${hr(this.loading)}
        .title=${hr(this.title)}
        class=${St(r)}
        title=${t}
        aria-label=${t}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"burger":return"Toggle menu";case"chevron":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";case"expand":return"Toggle expand";case"custom":return"Toggle";default:return"Toggle"}}_getIcons(){switch(this.mode){case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){if(this.mode==="burger")return ie`
        <div class="burger-mode">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>
      `;const t=this._getIcons();return t.inactive?this.mode==="chevron"?ie`<mov-icon
        class="chevron-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="expand"?ie`<mov-icon
        class="expand-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="play-pause"?ie`<mov-icon
        class="play-pause-icon"
        name=${this.active?t.active:t.inactive}
      ></mov-icon>`:ie`
      <mov-icon
        class="inactive-icon"
        name=${t.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${t.active}
      ></mov-icon>
    `:He}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};z([j({type:String})],Ir.prototype,"mode",void 0),z([j({type:Boolean,reflect:!0})],Ir.prototype,"active",void 0),z([j({type:String})],Ir.prototype,"label",void 0),z([j({type:String})],Ir.prototype,"activeLabel",void 0),z([j({type:String})],Ir.prototype,"icon",void 0),z([j({type:String})],Ir.prototype,"activeIcon",void 0),z([j({type:String,reflect:!0})],Ir.prototype,"appearance",void 0),z([j({type:String,reflect:!0})],Ir.prototype,"size",void 0),z([j({type:Boolean})],Ir.prototype,"disabled",void 0),z([j({type:Boolean,reflect:!0})],Ir.prototype,"loading",void 0),Ir=z([lt("toggle-button")],Ir);var f4="important",p4=" !important",Xr=vi(class extends ba{constructor(e){if(super(e),e.type!==va.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]??(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in t){const a=t[i];if(a!=null){this.ft.add(i);const s=typeof a=="string"&&a.endsWith(p4);i.includes("-")||s?r.setProperty(i,s?a.slice(0,-11):a,s?f4:""):r[i]=a}}return ln}});function yi(e,t){let r=e.length,i,a,s=!1,l=!1;Array.isArray(e[0])?i=e:(i=[e],r=i.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(p=>[p]):[[]],l=!0);let c=a[0].length,u=a[0].map((p,w)=>a.map(b=>b[w])),f=i.map(p=>u.map(w=>{let b=0;if(!Array.isArray(p)){for(let g of w)b+=p*g;return b}for(let g=0;g<p.length;g++)b+=p[g]*(w[g]||0);return b}));return r===1&&s&&(f=f[0]),c===1&&l?r===1&&s?f[0]:f.map(p=>p[0]):f}function Sl(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Xe(e,t,r=[0,0,0]){const i=Sl(e,t[0]),a=Sl(e,t[1]),s=Sl(e,t[2]);return r[0]=i,r[1]=a,r[2]=s,r}var m4=an({bisectLeft:()=>Hd,clamp:()=>Wr,copySign:()=>xa,diag:()=>Cl,interpolate:()=>ki,interpolateInv:()=>Bd,inv:()=>_4,isInstance:()=>ao,isNone:()=>Fe,isString:()=>Oo,lu:()=>Ol,mapRange:()=>xl,multiplyMatrices:()=>yi,multiply_v3_m3x3:()=>Xe,serializeNumber:()=>Al,skipNone:()=>It,solve:()=>y4,spow:()=>ct,toPrecision:()=>Ml,type:()=>xn,zdiv:()=>Il});function Oo(e){return xn(e)==="string"}function xn(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Al(e,{precision:t=16,unit:r}){return Fe(e)?"none":(e=+Ml(e,t),e+(r??""))}function Fe(e){return e===null}function It(e){return Fe(e)?0:e}function Ml(e,t){if(e===0)return 0;let r=~~e,i=0;r&&t&&(i=~~Math.log10(Math.abs(r))+1);const a=10**(t-i);return Math.floor(e*a+.5)/a}function ki(e,t,r){return Fe(e)||isNaN(e)?t:Fe(t)||isNaN(t)?e:e+(t-e)*r}function Bd(e,t,r){return(r-e)/(t-e)}function xl(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:ki(t[0],t[1],Bd(e[0],e[1],r))}function Wr(e,t,r){return Math.max(Math.min(r,t),e)}function xa(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function ct(e,t){return xa(Math.abs(e)**t,e)}function Il(e,t){return t===0?0:e/t}function Hd(e,t,r=0,i=e.length){for(;r<i;){const a=r+i>>1;e[a]<t?r=a+1:i=a}return r}function ao(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const i=Object.getPrototypeOf(e),a=i?.constructor?.name;if(a===r)return!0;if(!a||a==="Object")return!1;e=i}return!1}function Cl(e){const t=e.length,r=[];for(let i=0;i<t;i++){r[i]=[];for(let a=0;a<t;a++)r[i][a]=i===a?e[i]:0}return r}function Ol(e,{pIndices:t=!1}={}){let r,i,a,s;const l=e.length;t?(r=Array.from({length:l},(c,u)=>u),a=Cl(new Array(l).fill(1))):(i=Cl(new Array(l).fill(1)),a=structuredClone(i)),s=structuredClone(e);for(let c=0;c<l-1;c++){let u=c,f=Math.abs(s[c][c]);for(let p=c+1;p<l;p++){const w=Math.abs(s[p][c]);w>f&&(u=p,f=w)}if(u!=c){if([s[c],s[u]]=[s[u],s[c]],t?[r[c],r[u]]=[r[u],r[c]]:[i[c],i[u]]=[i[u],i[c]],c)for(let p=0;p<c;p++)[a[c][p],a[u][p]]=[a[u][p],a[c][p]]}else if(!f)continue;for(let p=c+1;p<l;p++){const w=s[p][c]/s[c][c];for(let b=c;b<l;b++)s[p][b]+=-s[c][b]*w,a[p][b]+=a[c][b]*w}}return t?[r,a,s]:[i,a,s]}function g4(e,t,r){for(let i=0;i<r;i++){const a=t[i];for(let s=0;s<i;s++)for(let l=0;l<r;l++)a[l]-=e[i][s]*t[s][l];for(let s=0;s<r;s++)a[s]/=e[i][i]}return t}function v4(e,t,r){for(let a=r-1;a>-1;a--){const s=t[a];for(let l=a+1;l<r;l++)for(var i=0;i<r;i++)s[i]-=e[a][l]*t[l][i];for(let l=0;l<r;l++)t[a][l]/=e[a][a]}return t}function b4(e,t,r){for(let i=0;i<r;i++){let a=t[i];for(let s=0;s<i;s++)a-=e[i][s]*t[s];t[i]=a/e[i][i]}return t}function w4(e,t,r){for(let i=r-1;i>-1;i--){let a=t[i];for(let s=i+1;s<r;s++)a-=e[i][s]*t[s];t[i]=a/e[i][i]}return t}function _4(e){const[t,r,i]=Ol(e),a=r.length;if(r.map((s,l)=>s[l]*i[l][l]).reduce((s,l)=>s*l,1)===0)throw new Error("Matrix is singular");return v4(i,g4(r,t,a),a)}function y4(e,t){const[r,i,a]=Ol(e,{pIndices:!0}),s=i.length;if(i.map((l,c)=>l[c]*a[c][c]).reduce((l,c)=>l*c,1)===0)throw new Error("Matrix is singular");return w4(a,b4(i,r.map(l=>t[l]),s),s)}var k4=class{add(e,t,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(i){this[i]=this[i]||[],t&&this[i][r?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(r){r.call(t&&t.context?t.context:t,t)})}},In=new k4,fr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},Fd=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let r=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!r)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=r.groups.type;let{min:i,max:a}=r.groups;(i||a)&&(this.range=[+i,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,r=this.coordRange;return this.type==="<percentage>"&&(r??=this.percentageRange()),xl(t,r,e)}serialize(e,t){let r=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,i=this.unit;return e=xl(this.coordRange,r,e),Al(e,{unit:i,precision:t})}toString(){let e=this.type;if(this.range){let[t="",r=""]=this.range;e+=`[${t},${r}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return ao(e,this)?e:new this(e,t)}},Tl=Symbol("instance"),Gd=class fp{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Tl]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(i=>{let a=["<number>","<percentage>"];return i.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((i,a)=>{let s=this.spaceCoords[a];return typeof i=="string"&&(i=i.trim().split(/\s*\|\s*/)),i.map(l=>Fd.get(l,s))}))}serializeCoords(t,r,i){return i=t.map((a,s)=>Fd.get(i?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>i[s].serialize(a,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([i,a],s)=>{let l=t[s];if(Fe(l)||isNaN(l))return l;let c=r[s],u=this.coords[s].find(f=>f.type==c);if(!u){let f=a.name||i;throw new TypeError(`${c??l?.raw??l} not allowed for ${f} in ${this.name}()`)}return l=u.resolve(l),u.range&&(r[s]=u.toString()),l})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||ao(t,this)?t:t[Tl]?t[Tl]:new fp(t,...r)}},Kt={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function Ll(e){return Array.isArray(e)?e:Kt[e]}function Ia(e,t,r,i={}){if(e=Ll(e),t=Ll(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let a={W1:e,W2:t,XYZ:r,options:i};if(In.run("chromatic-adaptation-start",a),a.M||(a.W1===Kt.D65&&a.W2===Kt.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Kt.D50&&a.W2===Kt.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),In.run("chromatic-adaptation-end",a),a.M)return Xe(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Wd(e,t){let r={str:String(e)?.trim(),options:t};if(In.run("parse-start",r),r.color)return r.color;r.parsed=S4(r.str);let i,a=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let s=r.parsed.name,l,c,u=r.parsed.args,f=u.map((b,g)=>r.parsed.argMeta[g]?.type);if(s==="color"){let b=u.shift();f.shift();let g=b.startsWith("--")?b.substring(2):`--${b}`,v=[b,g];if(l=we.findFormat({name:s,id:v,type:"function"}),!l){let _,y=b in we.registry?b:g;if(y in we.registry){let S=we.registry[y].formats?.color?.id;S&&(_=`Did you mean ${e.replace("color("+b,"color("+S)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(_??"Missing a plugin?"))}c=l.space,l.id.startsWith("--")&&!b.startsWith("--")&&fr.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${l.id}) instead of color(${b}).`),b.startsWith("--")&&!l.id.startsWith("--")&&fr.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${l.id}) instead of prefixed color(${b}).`)}else l=we.findFormat({name:s,type:"function"}),c=l.space;a&&Object.assign(a,{format:l,formatId:l.name,types:f,commas:r.parsed.commas});let p=1;r.parsed.lastAlpha&&(p=r.parsed.args.pop(),a&&(a.alphaType=f.pop()));let w=l.coords.length;if(u.length!==w)throw new TypeError(`Expected ${w} coordinates for ${c.id} in ${r.str}), got ${u.length}`);u=l.coerceCoords(u,f),i={spaceId:c.id,coords:u,alpha:p}}else e:for(let s of we.all)for(let l in s.formats){let c=s.formats[l];if(c.type!=="custom"||c.test&&!c.test(r.str))continue;let u=s.getFormat(c),f=u.parse(r.str);if(f){a&&Object.assign(a,{format:u,formatId:l}),i=f;break e}}if(!i)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return i.alpha=Fe(i.alpha)?i.alpha:i.alpha===void 0?1:Wr(0,i.alpha,1),i}var Ud={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Ca={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Ud).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function E4(e){let t={},r=e.match(Ca.unitValue)?.[0],i=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(i.slice(0,-r.length)),i=t.unitless*Ud[r]):Ca.number.test(i)?(i=Number(i),t.type="<number>"):i==="none"?i=null:i==="NaN"||i==="calc(NaN)"?(i=NaN,t.type="<number>"):t.type="<ident>",{value:i,meta:t}}function S4(e){if(!e)return;e=e.trim();let t=e.match(Ca.function);if(t){let r=[],i=[],a=!1,s=t[1].toLowerCase(),l=t[2].replace(Ca.singleArgument,(c,u)=>{let{value:f,meta:p}=E4(u);return(c.startsWith("/")||s!=="color"&&r.length===3)&&(a=!0),r.push(f),i.push(p),""});return{name:s,args:r,argMeta:i,lastAlpha:a,commas:l.includes(","),rawName:t[1],rawArgs:t[2]}}}function Pe(e,t){if(Array.isArray(e))return e.map(i=>Pe(i,t));if(!e)throw new TypeError("Empty color reference");Oo(e)&&(e=Wd(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=we.get(r)),e.alpha===void 0&&(e.alpha=1),e}var A4=75e-6,we=class Hr{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Hr.get(t.base):null,this.aliases=t.aliases,this.displaySpaces=t.displaySpaces?.map(a=>Hr.get(a)),this.bases=[];for(let a=this.base;a;a=a.base)this.bases.push(a);t.rgbGamut&&(this.rgbGamut=t.rgbGamut),t.linearGamut&&(this.linearGamut=t.linearGamut),this.base&&(t.fromBase&&(this.fromBase=t.fromBase),t.toBase&&(this.toBase=t.toBase));let r=t.coords??this.base.coords;for(let a in r)"name"in r[a]||(r[a].name=a);this.coords=r;let i=t.white??this.base.white??"D65";this.white=Ll(i),this.formats=t.formats??{};for(let a in this.formats){let s=this.formats[a];s.type||="function",s.name||=a}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Hr.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(a,s)=>!0),this.M=t.M??{},this.referred=t.referred,Object.defineProperty(this,"path",{value:M4(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),In.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=A4}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let i=Object.values(this.coords);return t.every((a,s)=>{let l=i[s];if(l.type!=="angle"&&l.range){if(Fe(a))return!0;let[c,u]=l.range;return(c===void 0||a>=c-r)&&(u===void 0||a<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get hueId(){for(let t in this.coords)if(this.coords[t].type==="angle")return t;return null}get hueIndex(){return Object.keys(this.coords).findIndex(t=>this.coords[t].type==="angle")}get isPolar(){return this.hueId!==null}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=Gd.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const c=Pe(t);[t,r]=[c.space,c.coords]}if(t=Hr.get(t),this.equals(t))return r;r=r.map(c=>Fe(c)?0:c);let i=this.path,a=t.path,s,l;for(let c=0;c<i.length&&i[c].equals(a[c]);c++)s=i[c],l=c;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let c=i.length-1;c>l;c--)r=i[c].toBase(r);for(let c=l+1;c<a.length;c++)r=a[c].fromBase(r);return r}from(t,r){if(arguments.length===1){const i=Pe(t);[t,r]=[i.space,i.coords]}return t=Hr.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let i=this.coords[r],a=i.range||i.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Hr.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let i of r.aliases)this.register(i,r);return r}static get(t,...r){if(!t||ao(t,this))return t;if(xn(t)==="string"){let i=Hr.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return Hr.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Hr.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let i of r)for(let[a,s]of Object.entries(i.formats)){s.name??=a,s.type??="function";let l=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let c=s.ids||[s.id],u=Array.isArray(t.id)?t.id:[t.id];l&&=u.some(f=>c.includes(f))}if(l){let c=Gd.get(s,i);return c!==s&&(i.formats[s.name]=c),c}}return null}static resolveCoord(t,r){let i=xn(t),a,s;if(i==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=Hr.get(a),a||(a=r),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(i=xn(s),i==="number"||i==="string"&&s>=0){let u=Object.entries(a.coords)[s];if(u)return{space:a,id:u[0],index:s,...u[1]}}a=Hr.get(a);let l=s.toLowerCase(),c=0;for(let u in a.coords){let f=a.coords[u];if(u.toLowerCase()===l||f.name?.toLowerCase()===l)return{space:a,id:u,index:c,...f};c++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function M4(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Lt=new we({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Ct=class extends we{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Lt);let t=e.toXYZ_M??e.M?.toXYZ,r=e.fromXYZ_M??e.M?.fromXYZ;e.referred??="display",super(e),t&&r&&(this.M.toXYZ=t,this.M.fromXYZ=r)}toBase(e){let t=Xe(e,this.M.toXYZ);return this.white!==this.base.white&&(t=Ia(this.white,this.base.white,t)),t}fromBase(e){return e=Ia(this.base.white,this.white,e),Xe(e,this.M.fromXYZ)}},Rl=new we({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Lt,fromBase:e=>Ia(Lt.white,"D50",e),toBase:e=>Ia("D50",Lt.white,e)}),x4=216/24389,Vd=24/116,Oa=24389/27,Pl=Kt.D50,pr=new we({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Pl,base:Rl,fromBase(e){let t=e.map((r,i)=>r/Pl[i]).map(r=>r>x4?Math.cbrt(r):(Oa*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,r,i]=e,a=[];return a[1]=(t+16)/116,a[0]=r/500+a[1],a[2]=a[1]-i/200,[a[0]>Vd?Math.pow(a[0],3):(116*a[0]-16)/Oa,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Oa,a[2]>Vd?Math.pow(a[2],3):(116*a[2]-16)/Oa].map((s,l)=>s*Pl[l])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Cr(e){return typeof e!="number"?e:(e%360+360)%360}function qd(e,t){let[r,i]=t,a=Fe(r),s=Fe(i);if(a&&s)return[r,i];if(a?r=i:s&&(i=r),e==="raw")return t;r=Cr(r),i=Cr(i);let l=i-r;return e==="increasing"?l<0&&(i+=360):e==="decreasing"?l>0&&(r+=360):e==="longer"?-180<l&&l<180&&(l>0?r+=360:i+=360):e==="shorter"&&(l>180?r+=360:l<-180&&(i+=360)),[r,i]}var zt=new we({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:pr,fromBase(e){if(this.ε===void 0){let l=Object.values(this.base.coords)[1].refRange,c=l[1]-l[0];this.ε=c/1e5}let[t,r,i]=e,a=Math.abs(r)<this.ε&&Math.abs(i)<this.ε,s=a?null:Cr(Math.atan2(i,r)*180/Math.PI);return[t,a?0:Math.sqrt(r**2+i**2),s]},toBase(e){let[t,r,i]=e,a=null,s=null;return Fe(i)||(r=r<0?0:r,a=r*Math.cos(i*Math.PI/180),s=r*Math.sin(i*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),Zd=25**7,Ta=Math.PI,jd=180/Ta,To=Ta/180;function Kd(e){const t=e*e;return t*t*t*e}function Yd(e,t,{kL:r=1,kC:i=1,kH:a=1}={}){[e,t]=Pe([e,t]);let[s,l,c]=pr.from(e),u=zt.from(pr,[s,l,c])[1],[f,p,w]=pr.from(t),b=zt.from(pr,[f,p,w])[1];u<0&&(u=0),b<0&&(b=0);let g=Kd((u+b)/2),v=.5*(1-Math.sqrt(g/(g+Zd))),_=(1+v)*l,y=(1+v)*p,S=Math.sqrt(_**2+c**2),M=Math.sqrt(y**2+w**2),O=_===0&&c===0?0:Math.atan2(c,_),T=y===0&&w===0?0:Math.atan2(w,y);O<0&&(O+=2*Ta),T<0&&(T+=2*Ta),O*=jd,T*=jd;let D=f-s,K=M-S,V=T-O,ne=O+T,W=Math.abs(V),me;S*M===0?me=0:W<=180?me=V:V>180?me=V-360:V<-180?me=V+360:fr.warn("the unthinkable has happened");let ke=2*Math.sqrt(M*S)*Math.sin(me*To/2),P=(s+f)/2,J=(S+M)/2,A=Kd(J),ee;S*M===0?ee=ne:W<=180?ee=ne/2:ne<360?ee=(ne+360)/2:ee=(ne-360)/2;let Ce=(P-50)**2,ue=1+.015*Ce/Math.sqrt(20+Ce),Re=1+.045*J,se=1;se-=.17*Math.cos((ee-30)*To),se+=.24*Math.cos(2*ee*To),se+=.32*Math.cos((3*ee+6)*To),se-=.2*Math.cos((4*ee-63)*To);let Ie=1+.015*J*se,U=30*Math.exp(-1*((ee-275)/25)**2),G=2*Math.sqrt(A/(A+Zd)),Me=-1*Math.sin(2*U*To)*G,ge=(D/(r*ue))**2;return ge+=(K/(i*Re))**2,ge+=(ke/(a*Ie))**2,ge+=Me*(K/(i*Re))*(ke/(a*Ie)),Math.sqrt(ge)}var Ei={XYZtoLMS:[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],LMStoXYZ:[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],LMStoLab:[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],LabtoLMS:[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]]},Or=new we({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Lt,M:Ei,fromBase(e){let t=Xe(e,Ei.XYZtoLMS);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),Xe(t,Ei.LMStoLab,t)},toBase(e){let t=Xe(e,Ei.LabtoLMS);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,Xe(t,Ei.LMStoXYZ,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function $l(e,t){[e,t]=Pe([e,t]);let[r,i,a]=Or.from(e),[s,l,c]=Or.from(t),u=r-s,f=i-l,p=a-c;return Math.sqrt(u**2+f**2+p**2)}var I4=75e-6;function Lo(e,t,{epsilon:r=I4}={}){e=Pe(e),t||(t=e.space),t=we.get(t);let i=e.coords;return t!==e.space&&(i=t.from(e)),t.inGamut(i,{epsilon:r})}function qe(e,t,{inGamut:r}={}){e=Pe(e),t=we.get(t);let i=t.from(e),a={space:t,coords:i,alpha:e.alpha};return r&&(a=un(a,r===!0?void 0:r)),a}qe.returns="color";function Si(e,t){e=Pe(e);let r=we.get(t,t?.space),i=t?.precision,a;return!r||e.space.equals(r)?a=e.coords.slice():a=r.from(e),i===void 0?a:a.map(s=>Ml(s,i))}function mr(e,t){if(e=Pe(e),t==="alpha")return e.alpha??1;let{space:r,index:i}=we.resolveCoord(t,e.space);return Si(e,r)[i]}var Cn=new we({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Or,fromBase:zt.fromBase,toBase:zt.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function Dl(e,t,r,i){return e=Pe(e),Array.isArray(t)&&([t,r,i]=[e.space,t,r]),t=we.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),i!==void 0&&(e.alpha=i),e}Dl.returns="color";function cn(e,t,r){if(e=Pe(e),arguments.length===2&&xn(arguments[1])==="object"){let i=arguments[1];for(let a in i)cn(e,a,i[a])}else if(typeof r=="function"&&(r=r(mr(e,t))),t==="alpha")e.alpha=r;else{let{space:i,index:a}=we.resolveCoord(t,e.space),s=Si(e,i);s[a]=r,Dl(e,i,s)}return e}cn.returns="color";function Ro(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Xd(e,t,r="lab"){r=we.get(r);let i=r.from(e),a=r.from(t);return Math.sqrt(i.reduce((s,l,c)=>{let u=a[c];return Fe(l)||Fe(u)?s:s+(u-l)**2},0))}function C4(e,t){return Xd(e,t,"lab")}var Jd=Math.PI/180;function O4(e,t,{l:r=2,c:i=1}={}){[e,t]=Pe([e,t]);let[a,s,l]=pr.from(e),[,c,u]=zt.from(pr,[a,s,l]),[f,p,w]=pr.from(t),b=zt.from(pr,[f,p,w])[1];c<0&&(c=0),b<0&&(b=0);let g=a-f,v=c-b,_=s-p,y=l-w,S=_**2+y**2-v**2,M=.511;a>=16&&(M=.040975*a/(1+.01765*a));let O=.0638*c/(1+.0131*c)+.638,T;Fe(u)&&(u=0),u>=164&&u<=345?T=.56+Math.abs(.2*Math.cos((u+168)*Jd)):T=.36+Math.abs(.4*Math.cos((u+35)*Jd));let D=Math.pow(c,4),K=Math.sqrt(D/(D+1900)),V=O*(K*T+1-K),ne=(g/(r*M))**2;return ne+=(v/(i*O))**2,ne+=S/V**2,Math.sqrt(ne)}var Qd=203,zl=new we({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Lt,fromBase(e){return e.map(t=>t*Qd)},toBase(e){return e.map(t=>t/Qd)}}),La=1.15,Ra=.66,e0=2610/2**14,T4=2**14/2610,t0=3424/2**12,r0=2413/2**7,n0=2392/2**7,L4=1.7*2523/2**5,o0=2**5/(1.7*2523),i0=-.56,Nl=16295499532821565e-27,Ai={XYZtoCone:[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ConetoXYZ:[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ConetoIab:[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],IabtoCone:[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]]},a0=new we({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:zl,M:Ai,fromBase(e){let[t,r,i]=e,[a,s,l]=Xe(Xe([La*t-(La-1)*i,Ra*r-(Ra-1)*t,i],Ai.XYZtoCone).map(function(c){return ct((t0+r0*ct(c/1e4,e0))/(1+n0*ct(c/1e4,e0)),L4)}),Ai.ConetoIab);return[.43999999999999995*a/(1+i0*a)-Nl,s,l]},toBase(e){let[t,r,i]=e,[a,s,l]=Xe(Xe([(t+Nl)/(.43999999999999995-i0*(t+Nl)),r,i],Ai.IabtoCone).map(function(u){return 1e4*ct((t0-ct(u,o0))/(n0*ct(u,o0)-r0),T4)}),Ai.ConetoXYZ),c=(a+(La-1)*l)/La;return[c,(s+(Ra-1)*c)/Ra,l]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),Bl=new we({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:a0,fromBase:zt.fromBase,toBase:zt.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function R4(e,t){[e,t]=Pe([e,t]);let[r,i,a]=Bl.from(e),[s,l,c]=Bl.from(t),u=r-s,f=i-l;Fe(a)&&Fe(c)?(a=0,c=0):Fe(a)?a=c:Fe(c)&&(c=a);let p=a-c,w=2*Math.sqrt(i*l)*Math.sin(p/2*(Math.PI/180));return Math.sqrt(u**2+f**2+w**2)}var s0=3424/4096,l0=2413/128,c0=2392/128,u0=2610/16384,P4=2523/32,$4=16384/2610,d0=32/2523,Mi={XYZtoLMS:[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],LMStoIPT:[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],IPTtoLMS:[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],LMStoXYZ:[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]]},Hl=new we({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:zl,M:Mi,fromBase(e){return D4(Xe(e,Mi.XYZtoLMS))},toBase(e){return Xe(z4(e),Mi.LMStoXYZ)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function D4(e){return Xe(e.map(function(t){return((s0+l0*(t/1e4)**u0)/(1+c0*(t/1e4)**u0))**P4}),Mi.LMStoIPT)}function z4(e){return Xe(e,Mi.IPTtoLMS).map(function(t){return 1e4*(Math.max(t**d0-s0,0)/(l0-c0*t**d0))**$4})}function N4(e,t){[e,t]=Pe([e,t]);let[r,i,a]=Hl.from(e),[s,l,c]=Hl.from(t);return 720*Math.sqrt((r-s)**2+.25*(i-l)**2+(a-c)**2)}function B4(e,t){[e,t]=Pe([e,t]);let r=2,[i,a,s]=Or.from(e),[l,c,u]=Or.from(t),f=i-l,p=r*(a-c),w=r*(s-u);return Math.sqrt(f**2+p**2+w**2)}var H4=Kt.D65,h0=.42,f0=1/h0,Fl=2*Math.PI,xi={cat16:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],cat16Inv:[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],m1:[[460,451,288],[460,-891,-261],[460,-220,-6300]]},F4={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},so={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},G4=180/Math.PI,p0=Math.PI/180;function m0(e,t){return e.map(r=>{const i=ct(t*Math.abs(r)*.01,h0);return 400*xa(i,r)/(i+27.13)})}function W4(e,t){const r=100/t*27.13**f0;return e.map(i=>{const a=Math.abs(i);return xa(r*ct(a/(400-a),f0),i)})}function U4(e){let t=Cr(e);t<=so.h[0]&&(t+=360);const r=Hd(so.h,t)-1,[i,a]=so.h.slice(r,r+2),[s,l]=so.e.slice(r,r+2),c=so.H[r],u=(t-i)/s;return c+100*u/(u+(a-t)/l)}function V4(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[i,a]=so.h.slice(r,r+2),[s,l]=so.e.slice(r,r+2);return Cr((t*(l*i-s*a)-100*i*l)/(t*(l-s)-100*l))}function g0(e,t,r,i,a){const s={};s.discounting=a,s.refWhite=e,s.surround=i;const l=e.map(v=>v*100);s.la=t,s.yb=r;const c=l[1],u=Xe(l,xi.cat16);let f=F4[s.surround];const p=f[0];s.c=f[1],s.nc=f[2];const w=(1/(5*s.la+1))**4;s.fl=w*s.la+.1*(1-w)*(1-w)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/c,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const b=a?1:Math.max(Math.min(p*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(v=>ki(1,c/v,b)),s.dRgbInv=s.dRgb.map(v=>1/v);const g=m0(u.map((v,_)=>v*s.dRgb[_]),s.fl);return s.aW=s.nbb*(2*g[0]+g[1]+.05*g[2]),s}var v0=g0(H4,64/Math.PI*.2,20,"average",!1);function b0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Cr(e.h)*p0:r=V4(e.H)*p0;const i=Math.cos(r),a=Math.sin(r);let s=0;e.J!==void 0?s=ct(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let l=0;e.C!==void 0?l=e.C/s:e.M!==void 0?l=e.M/t.flRoot/s:e.s!==void 0&&(l=4e-4*e.s**2*(t.aW+4)/t.c);const c=ct(l*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),f=t.aW*ct(s,2/t.c/t.z),p=5e4/13*t.nc*t.ncb*u,w=f/t.nbb,b=23*(w+.305)*Il(c,23*p+c*(11*i+108*a));return Xe(W4(Xe([w,b*i,b*a],xi.m1).map(g=>g*1/1403),t.fl).map((g,v)=>g*t.dRgbInv[v]),xi.cat16Inv).map(g=>g/100)}function w0(e,t){const r=m0(Xe(e.map(_=>_*100),xi.cat16).map((_,y)=>_*t.dRgb[y]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,a=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(a,i)%Fl+Fl)%Fl,l=.25*(Math.cos(s+2)+3.8),c=ct(5e4/13*t.nc*t.ncb*Il(l*Math.sqrt(i**2+a**2),r[0]+r[1]+1.05*r[2]+.305),.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),u=ct(t.nbb*(2*r[0]+r[1]+.05*r[2])/t.aW,.5*t.c*t.z),f=100*ct(u,2),p=4/t.c*u*(t.aW+4)*t.flRoot,w=c*u,b=w*t.flRoot,g=Cr(s*G4),v=U4(g);return{J:f,C:w,h:g,s:50*ct(t.c*c/(t.aW+4),1/2),Q:p,M:b,H:v}}var q4=new we({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Lt,M:xi,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=w0(e,v0),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return b0({J:e[0],M:e[1],h:e[2]},v0)}}),Z4=Kt.D65,j4=216/24389,_0=24389/27;function K4(e){return 116*(e>j4?Math.cbrt(e):(_0*e+16)/116)-16}function Gl(e){return e>8?Math.pow((e+16)/116,3):e/_0}function Y4(e,t){let[r,i,a]=e,s=[],l=0;if(a===0)return[0,0,0];let c=Gl(a);a>0?l=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:l=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const u=2e-12,f=15;let p=0,w=1/0,b=[0,0,0];for(;p<=f;){s=b0({J:l,C:i,h:r},t);const g=Math.abs(s[1]-c);if(g<w){if(g<=u)return s;b=s,w=g}l=l-(s[1]-c)*l/(2*s[1]),p+=1}return b}function X4(e,t){const r=K4(e[1]);if(r===0)return[0,0,0];const i=w0(e,Pa);return[Cr(i.h),i.C,r]}var Pa=g0(Z4,200/Math.PI*Gl(50),Gl(50)*100,"average",!1),Ii=new we({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Lt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=X4(e,Pa);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return Y4(e,Pa)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});180/Math.PI;var J4=Math.PI/180,y0=[1,.007,.0228];function k0(e){e[1]<0&&(e=Ii.fromBase(Ii.toBase(e)));const t=Math.log(Math.max(1+y0[2]*e[1]*Pa.flRoot,1))/y0[2],r=e[0]*J4,i=t*Math.cos(r),a=t*Math.sin(r);return[e[2],i,a]}function Q4(e,t){[e,t]=Pe([e,t]);let[r,i,a]=k0(Ii.from(e)),[s,l,c]=k0(Ii.from(t));return Math.sqrt((r-s)**2+(i-l)**2+(a-c)**2)}var{cos:Qe,sin:et,sqrt:Po,atan2:Ut,exp:$o,abs:Wl,pow:$a,PI:e3}=Math,t3=[[1.000042977349746,20718877053183e-18,-4361018085669474e-20],[26946201090235744e-21,.9999906145080147,-14898828405401079e-21],[-7941753620756204e-21,12875204405137254e-21,.9997859822609763]],r3=[[.9999570254019492,-2071874272730964e-20,4361733292468361e-20],[-2694517763358666e-20,1.000009385946497,1490098223546482e-20],[7943459292954202e-21,-1287824596735154e-20,1.000214063706999]],n3=[[.7212986433113499,.45344826541531813,-.19288975751942616],[-.788211869495579,1.795241376757236,.0876172451181785],[-.0917700599912156,.45765588659459255,1.2922045513917677]],o3=[[1.065107295808859,-.3150044075301121,.1803492381741039],[.4721107713837796,.4271995765962455,.04150680489380985],[-.09156391926309541,-.1736709363194979,.7719790382558294]],Ul=[.47229813098762524,.5149184096354483,.5113233386366979],Vl=[2.1173067060606283,1.9420552485353544,1.9557096741686448],i3=[[-.26355622180094096,.4168322883703174,.4926763141656403],[1.8897570508777322,-3.1212232034205774,1.0421666921060384],[.3585108617962056,1.7694028193790368,-1.4120626067695372]],a3=[[.9183897822815021,.5232051237088666,.7065804598090856],[1.0899090574433026,.07005324849041904,.4319776874787044],[1.598895729264209,.22061850068770233,.012506037355220951]],lo={CAT_TO_HELM:t3,CAT_FROM_HELM:r3,M1:n3,M1_INV:o3,M2:i3,M2_INV:a3},s3=-.02833024015436984,E0=-.21131429516166544,S0=.2189784817615645,A0=-.06871898981942523,M0=.005506053349515315,x0=-.0641329861299175,I0=-.053592461436994296,C0=-.00954137464208059,O0=.2676231133101982,T0=.8934892185255707,L0=.7173169828841472,R0=.6915224124600773,P0=.48647127559605596,$0=.9853124591201782,ql=.5385456675962418,Zl=.12508858146241716,jl=.6768950256217603,D0=-.4963251525324449,z0=-.09564696283240552,N0=-.029053748937210654,B0=1.3346761652952872,H0=-.1698908144723919,l3=-.195370576218515,c3=.5330819227283227,u3=.08863325582067766,d3=.9365540137751136,h3=.13789738139719568,f3=.061650260197979936,p3=.0641970862504494,m3=-.027401052793571013,g3=-.09900209889026965,v3=.059635520647228726,b3=-.013586499967803128,w3=.2253393118474472,_3=-1.5239477450767043,y3=-1.751157310240011,k3=-.43576378069144767,E3=1.060094063845983,S3=.47931193034584496,A3=-.2622579649434462,M3=.13610794232685908,x3=.1168702235362288,I3=-.01617739641422492,C3=.038145638815030566,F0=-28.2*e3/180,Da=Qe(F0),za=et(F0);function G0(e){return s3*Qe(e)+E0*et(e)+S0*Qe(2*e)+A0*et(2*e)+M0*Qe(3*e)+x0*et(3*e)+I0*Qe(4*e)+C0*et(4*e)}function O3(e){return .02833024015436984*et(e)+E0*Qe(e)+-2*S0*et(2*e)+2*A0*Qe(2*e)+-3*M0*et(3*e)+3*x0*Qe(3*e)+-4*I0*et(4*e)+4*C0*Qe(4*e)}function W0(e){let t=l3*Qe(e)+c3*et(e)+u3*Qe(2*e)+d3*et(2*e)+h3*Qe(3*e)+f3*et(3*e)+p3*Qe(4*e)+m3*et(4*e);return $o(t)}function U0(e){let t=e-.5;return $o(Wr(-30,_3*t+y3*t*t,30))}function V0(e,t){let r=k3*Qe(e)+E3*et(e)+S3*Qe(2*e)+A3*et(2*e);return $o(Wr(-30,(t-.5)*r,30))}function q0(e){let t=M3*Qe(e)+x3*et(e)+I3*Qe(2*e)+C3*et(2*e);return $o(t)}function Z0(e){return 1+g3*Qe(e)+v3*et(e)+b3*Qe(2*e)+w3*et(2*e)}function T3(e,t){let r=e*(1-e),i=e+ql*r+Zl*r*(.5-e)+jl*r*r;return i+=r*(D0*Qe(t)+z0*et(t)),i}function L3(e,t){let r=D0*Qe(t)+z0*et(t),i=e;for(let a=0;a<15;a++){let s=i*(1-i),l=1-2*i,c=i+(ql+r)*s+Zl*s*(.5-i)+jl*s*s-e,u=1+(ql+r)*l+Zl*(l*(.5-i)-s)+jl*2*s*l;Wl(u)<1e-10&&(u=1),i-=c/u}return i}function R3(e,t){let r=N0+B0*Qe(t)+H0*et(t),i=e<1?1-e:0,a=r*e*i*i;return e*$o(Wr(-30,a,30))}function P3(e,t){let r=N0+B0*Qe(t)+H0*et(t),i=e;for(let a=0;a<12;a++){let s=i<1?1-i:0,l=r*i*s*s,c=$o(Wr(-30,l,30)),u=i*c-e,f=r*s*(1-3*i),p=c*(1+i*f);Wl(p)<1e-10&&(p=1),i-=u/p}return i}var $3=function(e){let[t,r,i]=Xe(Xe(e,lo.CAT_TO_HELM),lo.M1),[a,s,l]=Xe([ct(t,Ul[0]),ct(r,Ul[1]),ct(i,Ul[2])],lo.M2),c=Ut(l,s),u=Po(s*s+l*l),f=G0(c),p=c+f;s=u*Qe(p),l=u*et(p);let w=Po(s*s+l*l),b=O0*$a(w,Wr(.01,T0,10)),g=Ut(l,s),v=1+L0*Qe(g)+R0*et(g)+P0*Qe(2*g)+$0*et(2*g);a+=b*v,c=Ut(l,s),a=T3(a,c),c=Ut(l,s),a=R3(a,c),c=Ut(l,s);let _=W0(c);s*=_,l*=_,c=Ut(l,s),u=Po(s*s+l*l);let y=Z0(c),S=u>0?$a(u,y):0;s=S*Qe(c),l=S*et(c);let M=U0(a);s*=M,l*=M,c=Ut(l,s);let O=V0(c,a);s*=O,l*=O,c=Ut(l,s),a*=q0(c);let T=s*Da-l*za,D=s*za+l*Da;return[a,T,D]},D3=function(e){let[t,r,i]=e,a=r*Da+i*za,s=-r*za+i*Da;r=a,i=s;let l=Ut(i,r);t/=q0(l),l=Ut(i,r);let c=V0(l,t);r/=c,i/=c;let u=U0(t);r/=u,i/=u,l=Ut(i,r);let f=Po(r*r+i*i),p=Z0(l),w=f>0?$a(f,1/p):0;r=w*Qe(l),i=w*et(l),l=Ut(i,r);let b=W0(l);r/=b,i/=b,l=Ut(i,r),t=P3(t,l),l=Ut(i,r),t=L3(t,l);let g=Po(r*r+i*i),v=O0*$a(g,Wr(.01,T0,10)),_=Ut(i,r),y=1+L0*Qe(_)+R0*et(_)+P0*Qe(2*_)+$0*et(2*_);t-=v*y;let S=Ut(i,r);f=Po(r*r+i*i);let M=S;for(let K=0;K<8;K++){let V=M+G0(M)-S,ne=1+O3(M);Wl(ne)<1e-10&&(ne=1),M-=V/ne}r=f*Qe(M),i=f*et(M);let[O,T,D]=Xe([t,r,i],lo.M2_INV);return Xe(Xe([ct(O,Vl[0]),ct(T,Vl[1]),ct(D,Vl[2])],lo.M1_INV),lo.CAT_FROM_HELM)},Kl=new we({id:"helmlab-metric",name:"Helmlab MetricSpace",cssId:"--helmlab-metric",coords:{l:{refRange:[0,1.6],name:"Lightness"},a:{refRange:[-1.5,1.5]},b:{refRange:[-1.5,1.5]}},white:"D65",base:Lt,M:lo,fromBase(e){return $3(e)},toBase(e){return D3(e)}}),z3=-.9155125151657894,N3=2.9268353744941558,B3=3.966003089807536,H3=1.9737081170404969,F3=52.473130649294724,G3=.47897301074925214;function W3(e,t){[e,t]=Pe([e,t]);let[r,i,a]=Kl.from(e),[s,l,c]=Kl.from(t),u=r-s,f=i-l,p=a-c,w=(r+s)*.5,b=1+z3*(w-.5)**2,g=(Math.sqrt(i**2+a**2)+Math.sqrt(l**2+c**2))*.5,v=1+N3*g,_=(u**2/b**2+B3*(f**2+p**2)/v**2)**(H3/2);return(_/(1+F3*_))**G3}var Do={deltaE76:C4,deltaECMC:O4,deltaE2000:Yd,deltaEJz:R4,deltaEITP:N4,deltaEOK:$l,deltaEOK2:B4,deltaEHCT:Q4,deltaEHelmlab:W3};function U3(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var j0={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function un(e,{method:t=fr.gamut_mapping,space:r=void 0,deltaEMethod:i="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Pe(e),Oo(arguments[1])?r=arguments[1]:r||(r=e.space),r=we.get(r),Lo(e,r,{epsilon:0}))return e;let l;if(t==="css")l=V3(e,{space:r});else if(t==="raytrace")l=Z3(e,{space:r});else{if(t!=="clip"){Object.prototype.hasOwnProperty.call(j0,t)&&({method:t,jnd:a,deltaEMethod:i,blackWhiteClamp:s}=j0[t]);let c=Yd;if(i!==""){for(let f in Do)if("deltae"+i.toLowerCase()===f.toLowerCase()){c=Do[f];break}}a===0&&(a=1e-16);let u=un(qe(e,r),{method:"clip",space:r});if(c(e,u)>a){if(s&&Object.keys(s).length===3){let S=we.resolveCoord(s.channel),M=mr(qe(e,S.space),S.id);if(Fe(M)&&(M=0),M>=s.max)return qe({space:"xyz-d65",coords:Kt.D65},e.space);if(M<=s.min)return qe({space:"xyz-d65",coords:[0,0,0]},e.space)}let f=we.resolveCoord(t),p=f.space,w=f.id,b=qe(e,p);b.coords.forEach((S,M)=>{Fe(S)&&(b.coords[M]=0)});let g=(f.range||f.refRange)[0],v=U3(a),_=g,y=mr(b,w);for(;y-_>v;){let S=Ro(b);S=un(S,{space:r,method:"clip"}),c(b,S)-a<v?_=mr(b,w):y=mr(b,w),cn(b,w,(_+y)/2)}l=qe(b,r)}else l=u}else l=qe(e,r);if(t==="clip"||!Lo(l,r,{epsilon:0})){let c=Object.values(r.coords).map(u=>u.range||[]);l.coords=l.coords.map((u,f)=>{let[p,w]=c[f];return p!==void 0&&(u=Math.max(p,u)),w!==void 0&&(u=Math.min(u,w)),u})}}return r!==e.space&&(l=qe(l,e.space)),e.coords=l.coords,e}un.returns="color";var Na={WHITE:{space:Or,coords:[1,0,0],alpha:1},BLACK:{space:Or,coords:[0,0,0],alpha:1}};function V3(e,{space:t}={}){if(e=Pe(e),t||(t=e.space),t=we.get(t),t.isUnbounded)return qe(e,t);const a=qe(e,Cn);let s=a.coords[0];if(s>=1){const g=qe(Na.WHITE,t);return g.alpha=e.alpha,qe(g,t)}if(s<=0){const g=qe(Na.BLACK,t);return g.alpha=e.alpha,qe(g,t)}if(Lo(a,t,{epsilon:0}))return qe(a,t);function l(g){const v=qe(g,t),_=Object.values(t.coords);return v.coords=v.coords.map((y,S)=>{if("range"in _[S]){const[M,O]=_[S].range;return Wr(M,y,O)}return y}),v}let c=0,u=a.coords[1],f=!0,p=Ro(a),w=l(p),b=$l(w,p);if(b<.02)return w;for(;u-c>1e-4;){const g=(c+u)/2;if(p.coords[1]=g,f&&Lo(p,t,{epsilon:0}))c=g;else if(w=l(p),b=$l(w,p),b<.02){if(.02-b<1e-4)break;f=!1,c=g}else u=g}return w}function q3(e,t,r=[0,0,0],i=[1,1,1]){let a=1/0,s=-1/0,l=[];for(let c=0;c<3;c++){const u=e[c],f=t[c]-u,p=r[c],w=i[c];if(l.push(f),Math.abs(f)>1e-12){const b=1/f,g=(p-u)*b,v=(w-u)*b;s=Math.max(Math.min(g,v),s),a=Math.min(Math.max(g,v),a)}else if(u<p||u>w)return[]}return s>a||a<0?[]:(s<0&&(s=a),isFinite(s)?[e[0]+l[0]*s,e[1]+l[1]*s,e[2]+l[2]*s]:[])}function Z3(e,{space:t}={}){if(e=Pe(e),t||(t=e.space),t=we.get(t),t.isUnbounded)return qe(e,t);let r=qe(e,Cn),[i,a,s]=r.coords;if(i>=1){const _=qe(Na.WHITE,t);return _.alpha=e.alpha,qe(_,t)}else if(i<=0){const _=qe(Na.BLACK,t);return _.alpha=e.alpha,qe(_,t)}const l=t,c=t.rgbGamut;if(c!==void 0&&(t=c),!ao(t,Ct))throw Error("An RGB gamut is required");let[u,f]=Object.values(t.coords)[0].range,p=[f,f,f];const w=t.linearGamut;w!==void 0&&(f=qe({space:t,coords:p,alpha:e.alpha},w).coords[0],p=[f,f,f],t=w,u=Object.values(t.coords)[0].range[0]);let b=[u,u,u],g=qe(r,t);if(!g.coords.every(_=>u<=_&&_<=f)){let _=qe({space:Cn,coords:[i,0,s]},t).coords;const y=u+1e-12,S=f-1e-12;let M=g.coords;for(let O=0;O<4;O++){if(O){const D=qe(g,Cn);D.coords[0]=i,D.coords[2]=s,g=qe(D,t)}const T=q3(_,g.coords,b,p);if(T.length===0){g.coords=[...M];break}O&&g.coords.every(D=>y<D&&D<S)&&(_=[...g.coords]),M=T,g.coords=[...T]}}g=qe(g,l);const v=Object.values(l.coords);return g.coords=g.coords.map((_,y)=>{if("range"in v[y]){const[S,M]=v[y].range;return Wr(S,_,M)}return _}),g}var zo=class extends we{constructor(e){let t=we.get(e.base),r=e.chroma??"c",i=Object.keys(t.coords),a=i.indexOf(r);if(a===-1)throw new TypeError(`GamutRelativeColorSpace needs a "${r}" coordinate, got ${t.id}`);let s=Object.fromEntries(Object.entries(t.coords).map(([c,u])=>[c,{...u}]));s[r].range=[0,1],delete s[r].refRange,e.coords??=s,e.formats??={color:{coords:i.map(c=>{if(t.coords[c].type==="angle")return"<number> | <angle>";let[u,f]=t.coords[c].range??t.coords[c].refRange??[];return c===r||u===0&&f===1?"<percentage> | <number>":"<number> | <percentage>"})}},super(e),this.chromaIndex=a,this.method=`${t.id}.${r}`;let l=[[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0]];this.oogChroma=1.01*Math.max(...l.map(c=>t.from(this.gamutSpace,c)[this.chromaIndex]||0))}maxChroma(e){let t=[...e];return t[this.chromaIndex]=this.oogChroma,un({space:this.base,coords:t},{space:this.gamutSpace,method:this.method,deltaEMethod:"OK",jnd:0}).coords[this.chromaIndex]}toBase(e){return e=[...e],e.some((t,r)=>r!==this.chromaIndex&&Fe(t))?e[this.chromaIndex]!==0&&(e[this.chromaIndex]=null):Fe(e[this.chromaIndex])||(e[this.chromaIndex]*=this.maxChroma(e)),e}fromBase(e){if(e=[...e],e.some((t,r)=>r!==this.chromaIndex&&Fe(t)))e[this.chromaIndex]!==0&&(e[this.chromaIndex]=null);else if(!Fe(e[this.chromaIndex])){let t=this.maxChroma(e);e[this.chromaIndex]=t?e[this.chromaIndex]/t:0}return e}};function K0(e,t={}){if(Array.isArray(e))return e.map(u=>K0(u,t));let{cssProperty:r="background-color",element:i,...a}=t,s=null;try{return Pe(e,a)}catch(u){s=u}let{CSS:l,getComputedStyle:c}=globalThis;if(Oo(e)&&i&&l&&c&&l.supports(r,e)){let u=i.style[r];e!==u&&(i.style[r]=e);let f=c(i).getPropertyValue(r);if(e!==u&&(i.style[r]=u),f!==e)try{return Pe(f,a)}catch(p){s=p}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function No(e,t={}){let{precision:r=fr.precision,format:i,inGamut:a=!0,coords:s,alpha:l,commas:c}=t,u,f=Pe(e),p=i,w=f.parseMeta;w&&!i&&(w.format.canSerialize()&&(i=w.format,p=w.formatId),s??=w.types,l??=w.alphaType,c??=w.commas),p&&(i=f.space.getFormat(i)??we.findFormat(p)),i||(i=f.space.getFormat("default")??we.DEFAULT_FORMAT,p=i.name),i&&i.space&&i.space!==f.space&&(f=qe(f,i.space));let b=f.coords.slice();if(a||=i.toGamut,a&&!Lo(f)&&(b=un(Ro(f),a===!0?void 0:a).coords),i.type==="custom")if(i.serialize)u=i.serialize(b,f.alpha,t);else throw new TypeError(`format ${p} can only be used to parse colors, not for serialization`);else{let g=i.name||"color",v=i.serializeCoords(b,r,s);if(g==="color"){let O=i.id||i.ids?.[0]||f.space.cssId||f.space.id;v.unshift(O)}let _=f.alpha;l!==void 0&&typeof l!="object"&&(l=typeof l=="string"?{type:l}:{include:l});let y=l?.type??"<number>",S=l?.include===!0||i.alpha===!0||l?.include!==!1&&i.alpha!==!1&&_<1,M="";if(c??=i.commas,S){if(r!==null){let O;y==="<percentage>"&&(O="%",_*=100),_=Al(_,{precision:r,unit:O})}M=`${c?",":" /"} ${_}`}u=`${g}(${v.join(c?", ":" ")}${M})`}return u}var Y0={toXYZ:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]},Ci=new Ct({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",M:Y0}),Bo=new Ct({id:"rec2020",name:"REC.2020",base:Ci,linearGamut:Ci,toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,1/2.4)})}}),j3={toXYZ:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]},Yl=new Ct({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",M:j3}),Xl={toXYZ:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]]},Jl=new Ct({id:"srgb-linear",name:"Linear sRGB",white:"D65",M:Xl}),X0={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},J0=Array(3).fill("<percentage> | <number>[0, 255]"),Q0=Array(3).fill("<number>[0, 255]"),gr=new Ct({id:"srgb",name:"sRGB",base:Jl,linearGamut:Jl,fromBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i>.0031308?r*(1.055*i**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i<=.04045?t/12.92:r*((i+.055)/1.055)**2.4}),formats:{rgb:{coords:J0},rgb_number:{name:"rgb",commas:!0,coords:Q0,alpha:!1},color:{},rgba:{coords:J0,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Q0},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:i}={})=>{(i!==!1&&t<1||i===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=r&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=X0.black,t.alpha=0):t.coords=X0[e],t.coords)return t}}}}),Ho=new Ct({id:"p3",cssId:"display-p3",name:"P3",base:Yl,linearGamut:Yl,fromBase:gr.fromBase,toBase:gr.toBase});fr.display_space=gr;var K3;if(typeof CSS<"u"&&CSS.supports)for(let e of[pr,Bo,Ho]){let t=No({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports("color",t)){fr.display_space=e;break}}function Y3(e,{space:t,supports:r=globalThis.CSS?.supports,...i}={}){e=Pe(e);let a=No(e,i);if(!r||r("color",a)||!fr.display_space)a=new String(a),a.color=e;else{let s=e;if((e.coords.some(Fe)||Fe(e.alpha))&&!(K3??=r("color","hsl(none 50% 50%)"))&&(s=Ro(e),s.coords=s.coords.map(It),s.alpha=It(s.alpha),a=No(s,i),r("color",a)))return a=new String(a),a.color=s,a;if(t===void 0){t=s.space;let l=t.displaySpaces??t.bases;!t.displaySpaces&&!t.id.startsWith("xyz-")&&(l=l.filter(c=>!c.id.startsWith("xyz-")));for(let c of l){let u=qe(s,c),f=No(u,i);if(r("color",f))return a=new String(f),a.color=u,a}t=fr.display_space}s=qe(s,t),a=new String(No(s,i)),a.color=s}return a}function X3(e,t,{space:r,hue:i="shorter"}={}){e=Pe(e),r||=e.space,r=we.get(r);let a=Object.values(r.coords);[e,t]=[e,t].map(f=>qe(f,r));let[s,l]=[e,t].map(f=>f.coords),c=s.map((f,p)=>{let w=a[p],b=l[p];return w.type==="angle"&&([f,b]=qd(i,[f,b])),eh(f,b)}),u=eh(e.alpha,t.alpha);return{space:r,coords:c,alpha:u}}function eh(e,t){return Fe(e)||Fe(t)?e===t?null:0:e-t}function J3(e,t){return e=Pe(e),t=Pe(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,i)=>r===t.coords[i])}var Q3=an({getLuminance:()=>On,register:()=>eb,setLuminance:()=>th});function On(e){return mr(e,[Lt,"y"])}function th(e,t){cn(e,[Lt,"y"],t)}function eb(e){Object.defineProperty(e.prototype,"luminance",{get(){return On(this)},set(t){th(this,t)}})}function tb(e,t){e=Pe(e),t=Pe(t);let r=Math.max(On(e),0),i=Math.max(On(t),0);return i>r&&([r,i]=[i,r]),(r+.05)/(i+.05)}var rb=.56,nb=.57,ob=.62,ib=.65,rh=.022,ab=1.414,sb=.1,lb=5e-4,cb=1.14,nh=.027,ub=1.14;function oh(e){return e>=rh?e:e+(rh-e)**ab}function Fo(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function db(e,t){t=Pe(t),e=Pe(e);let r,i,a,s,l,c;t=qe(t,"srgb"),[s,l,c]=t.coords.map(g=>Fe(g)?0:g);let u=Fo(s)*.2126729+Fo(l)*.7151522+Fo(c)*.072175;e=qe(e,"srgb"),[s,l,c]=e.coords.map(g=>Fe(g)?0:g);let f=Fo(s)*.2126729+Fo(l)*.7151522+Fo(c)*.072175,p=oh(u),w=oh(f),b=w>p;return Math.abs(w-p)<lb?i=0:b?(r=w**rb-p**nb,i=r*cb):(r=w**ib-p**ob,i=r*ub),Math.abs(i)<sb?a=0:i>0?a=i-nh:a=i+nh,a*100}function hb(e,t){e=Pe(e),t=Pe(t);let r=Math.max(On(e),0),i=Math.max(On(t),0);i>r&&([r,i]=[i,r]);let a=r+i;return a===0?0:(r-i)/a}var fb=5e4;function pb(e,t){e=Pe(e),t=Pe(t);let r=Math.max(On(e),0),i=Math.max(On(t),0);return i>r&&([r,i]=[i,r]),i===0?fb:(r-i)/i}function mb(e,t){e=Pe(e),t=Pe(t);let r=mr(e,[pr,"l"]),i=mr(t,[pr,"l"]);return Math.abs(r-i)}var gb=216/24389,ih=24/116,Ba=24389/27,Ql=Kt.D65,ec=new we({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ql,base:Lt,fromBase(e){let t=e.map((r,i)=>r/Ql[i]).map(r=>r>gb?Math.cbrt(r):(Ba*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ih?Math.pow(t[0],3):(116*t[0]-16)/Ba,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ba,t[2]>ih?Math.pow(t[2],3):(116*t[2]-16)/Ba].map((r,i)=>r*Ql[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),tc=Math.pow(5,.5)*.5+.5;function vb(e,t){e=Pe(e),t=Pe(t);let r=mr(e,[ec,"l"]),i=mr(t,[ec,"l"]),a=Math.abs(Math.pow(r,tc)-Math.pow(i,tc)),s=Math.pow(a,1/tc)*Math.SQRT2-40;return s<7.5?0:s}var Ha=an({contrastAPCA:()=>db,contrastDeltaPhi:()=>vb,contrastLstar:()=>mb,contrastMichelson:()=>hb,contrastWCAG21:()=>tb,contrastWeber:()=>pb});function bb(e,t,r){Oo(r)&&(r={algorithm:r});let{algorithm:i,...a}=r||{};if(!i){let s=Object.keys(Ha).map(l=>l.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Pe(e),t=Pe(t);for(let s in Ha)if("contrast"+i.toLowerCase()===s.toLowerCase())return Ha[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${i}`)}var wb=an({register:()=>_b,uv:()=>Fa,xy:()=>ah});function Fa(e){let[t,r,i]=Si(e,Lt),a=t+15*r+3*i;return[4*t/a,9*r/a]}function ah(e){let[t,r,i]=Si(e,Lt),a=t+r+i;return[t/a,r/a]}function _b(e){Object.defineProperty(e.prototype,"uv",{get(){return Fa(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return ah(this)}})}function Oi(e,t,r={}){Oo(r)&&(r={method:r});let{method:i=fr.deltaE,...a}=r;for(let s in Do)if("deltae"+i.toLowerCase()===s.toLowerCase())return Do[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${i}`)}var yb=an({darken:()=>lh,lighten:()=>sh});function sh(e,t=.25){return cn(e,[we.get("oklch","lch"),"l"],r=>r*(1+t))}function lh(e,t=.25){return cn(e,[we.get("oklch","lch"),"l"],r=>r*(1-t))}sh.returns="color",lh.returns="color";var kb=an({isRange:()=>nc,mix:()=>ch,range:()=>Ti,register:()=>Eb,steps:()=>uh});function ch(e,t,r,i={}){return[e,t]=[Pe(e),Pe(t)],xn(r)==="object"&&([r,i]=[.5,r]),Ti(e,t,i)(r??.5)}function uh(e,t,r={}){let i;nc(e)&&([i,r]=[e,t],[e,t]=i.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:l=2,maxSteps:c=1e3,...u}=r;i||([e,t]=[Pe(e),Pe(t)],i=Ti(e,t,u));let f=Oi(e,t,s),p=a>0?Math.max(l,Math.ceil(f/a)+1):l,w=[];if(c!==void 0&&(p=Math.min(p,c)),p===1)w=[{p:.5,color:i(.5)}];else{let b=1/(p-1);w=Array.from({length:p},(g,v)=>{let _=v*b;return{p:_,color:i(_)}})}if(a>0){let b=w.reduce((g,v,_)=>{if(_===0)return 0;let y=Oi(v.color,w[_-1].color,s);return Math.max(g,y)},0);for(;b>a;){b=0;for(let g=1;g<w.length&&w.length<c;g++){let v=w[g-1],_=w[g],y=(_.p+v.p)/2,S=i(y);b=Math.max(b,Oi(S,v.color,s),Oi(S,_.color,s)),w.splice(g,0,{p:y,color:i(y)}),g++}}}return w=w.map(b=>b.color),w}function Ti(e,t,r={}){if(nc(e)){let[p,w]=[e,t];return Ti(...p.rangeArgs.colors,{...p.rangeArgs.options,...w})}let{space:i,outputSpace:a,progression:s,premultiplied:l}=r;e=Pe(e),t=Pe(t),e=Ro(e),t=Ro(t);let c={colors:[e,t],options:r};i?i=we.get(i):i=we.registry[fr.interpolationSpace]||e.space,a=a?we.get(a):i,e=qe(e,i),t=qe(t,i),e=un(e),t=un(t);let u=i.hueId,f=i.hueIndex;if(u){let p=r.hue=r.hue||"shorter",w=[i,u],[b,g]=[mr(e,w),mr(t,w)];Fe(b)&&!Fe(g)?b=g:Fe(g)&&!Fe(b)&&(g=b),[b,g]=qd(p,[b,g]),cn(e,w,b),cn(t,w,g)}return Fe(e.alpha)&&!Fe(t.alpha)?e.alpha=t.alpha:Fe(t.alpha)&&!Fe(e.alpha)&&(t.alpha=e.alpha),l&&(e.coords=rc(e.coords,e.alpha,f),t.coords=rc(t.coords,t.alpha,f)),Object.assign(p=>{p=s?s(p):p;let w=e.coords.map((v,_)=>{let y=t.coords[_];return ki(v,y,p)}),b=ki(e.alpha,t.alpha,p),g={space:i,coords:w,alpha:b};return l&&(g.coords=rc(g.coords,b,f,!0)),a!==i&&(g=qe(g,a)),g},{rangeArgs:c})}function rc(e,t,r,i=!1){return Fe(t)||i&&t===0?e:e.map((a,s)=>s===r||Fe(a)?a:i?a/t:a*t)}function nc(e){return xn(e)==="function"&&!!e.rangeArgs}fr.interpolationSpace="lab";function Eb(e){e.defineFunction("mix",ch,{returns:"color"}),e.defineFunction("range",Ti,{returns:"function<color>"}),e.defineFunction("steps",uh,{returns:"array<color>"})}var Ur=new we({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:gr,rgbGamut:gr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[l,c,u]=[null,0,(r+t)/2],f=t-r;if(f!==0){switch(c=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case i:l=(a-s)/f+(a<s?6:0);break;case a:l=(s-i)/f+2;break;case s:l=(i-a)/f+4}l=l*60}return c<0&&(l+=180,c=Math.abs(c)),l>=360&&(l-=360),[l,c*100,u*100]},toBase:e=>{let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let l=(s+t/30)%12,c=r*Math.min(i,1-i);return i-c*Math.max(-1,Math.min(l-3,9-l,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Sb=new we({id:"hsl-p3",cssId:"--hsl-p3",name:"HSL P3",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ho,rgbGamut:Ho,fromBase:Ur.fromBase,toBase:Ur.toBase}),Ab=new we({id:"hsl-rec2020",cssId:"--hsl-rec2020",name:"HSL Rec.2020",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Bo,rgbGamut:Bo,fromBase:Ur.fromBase,toBase:Ur.toBase}),dh=new we({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:gr,rgbGamut:gr,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[l,c,u]=[null,0,t],f=t-r;if(f!==0){switch(t){case i:l=(a-s)/f+(a<s?6:0);break;case a:l=(s-i)/f+2;break;case s:l=(i-a)/f+4}l=l*60}return u&&(c=f/u),l>=360&&(l-=360),[l,c*100,u*100]},toBase(e){let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let l=(s+t/60)%6;return i-i*r*Math.max(0,Math.min(l,4-l,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Mb=new we({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:dh,rgbGamut:gr,fromBase(e){let[t,r,i]=e;return[t,i*(100-r)/100,100-i]},toBase(e){let[t,r,i]=e;r/=100,i/=100;let a=r+i;if(a>=1)return[t,0,r/a*100];let s=1-i;return[t,(s===0?0:1-r/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),xb={toXYZ:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]},oc=new Ct({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",M:xb}),Ib=new Ct({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:oc,linearGamut:oc,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),Cb={toXYZ:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]},ic=new Ct({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Rl,M:Cb}),Ob=1/512,Tb=16/512,Lb=new Ct({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:ic,linearGamut:ic,toBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i<Tb?t/16:r*i**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i>=Ob?r*i**(1/1.8):16*t})}}),Ga=1.09929682680944,hh=.018053968510807,Rb=new Ct({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Ci,linearGamut:Ci,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i<hh*4.5?t/4.5:r*Math.pow((i+Ga-1)/Ga,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i>=hh?r*(Ga*Math.pow(i,.45)-(Ga-1)):4.5*t})}}),Pb=new zo({id:"oklch-p3",cssId:"--oklch-p3",name:"OKLCh P3",base:Cn,gamutSpace:Ho}),$b=new zo({id:"oklch-srgb",cssId:"--oklch-srgb",name:"OKLCh sRGB",base:Cn,gamutSpace:gr}),Db=new zo({id:"oklch-rec2020",cssId:"--oklch-rec2020",name:"OKLCh Rec.2020",base:Cn,gamutSpace:Bo}),zb=new zo({id:"lch-p3",cssId:"--lch-p3",name:"LCH P3",base:zt,gamutSpace:Ho}),Nb=new zo({id:"lch-srgb",cssId:"--lch-srgb",name:"LCH sRGB",base:zt,gamutSpace:gr}),Bb=new zo({id:"lch-rec2020",cssId:"--lch-rec2020",name:"LCH Rec.2020",base:zt,gamutSpace:Bo}),Go=2*Math.PI,Jr={...Or.M,toLMS:[[.4122214694707629,.5363325372617349,.0514459932675022],[.2119034958178251,.6806995506452344,.1073969535369405],[.0883024591900564,.2817188391361215,.6299787016738222]],toSRGBLinear:[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]]},Wa=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],ac=Number.MAX_VALUE,Ua=.206,fh=.03,Li=1.206/1.03;function Ft(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let i=0;return e.forEach((a,s)=>{i+=a*t[s]}),i}function Ri(e){return .5*(Li*e-Ua+Math.sqrt((Li*e-Ua)*(Li*e-Ua)+4*fh*Li*e))}function Wo(e){return(e**2+Ua*e)/(Li*(e+fh))}function sc(e){let[t,r]=e;return[r/t,r/(1-t)]}function Hb(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function lc(e,t){let r=Xe(e,Jr.LabtoLMS);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,Xe(r,t,r)}function Va(e,t,r,i){let a=Gb(e,t,r,i),s=lc([1,a*e,a*t],r),l=ct(1/Math.max(...s),1/3);return[l,l*a]}function Fb(e,t,r,i,a,s,l,c){let u;if(c===void 0&&(c=Va(e,t,s,l)),(r-a)*c[1]-(c[0]-a)*i<=0)u=c[1]*a/(i*c[0]+c[1]*(a-r));else{u=c[1]*(a-1)/(i*(c[0]-1)+c[1]*(a-r));let f=r-a,p=i,w=Ft(Jr.LabtoLMS[0].slice(1),[e,t]),b=Ft(Jr.LabtoLMS[1].slice(1),[e,t]),g=Ft(Jr.LabtoLMS[2].slice(1),[e,t]),v=f+p*w,_=f+p*b,y=f+p*g,S=a*(1-u)+u*r,M=u*i,O=S+M*w,T=S+M*b,D=S+M*g,K=O**3,V=T**3,ne=D**3,W=3*v*O**2,me=3*_*T**2,ke=3*y*D**2,P=6*v**2*O,J=6*_**2*T,A=6*y**2*D,ee=Ft(s[0],[K,V,ne])-1,Ce=Ft(s[0],[W,me,ke]),ue=Ft(s[0],[P,J,A]),Re=Ce/(Ce*Ce-.5*ee*ue),se=-ee*Re,Ie=Ft(s[1],[K,V,ne])-1,U=Ft(s[1],[W,me,ke]),G=Ft(s[1],[P,J,A]),Me=U/(U*U-.5*Ie*G),ge=-Ie*Me,pe=Ft(s[2],[K,V,ne])-1,Je=Ft(s[2],[W,me,ke]),wt=Ft(s[2],[P,J,A]),Ze=Je/(Je*Je-.5*pe*wt),Ue=-pe*Ze;se=Re>=0?se:ac,ge=Me>=0?ge:ac,Ue=Ze>=0?Ue:ac,u+=Math.min(se,Math.min(ge,Ue))}return u}function ph(e,t,r){let[i,a,s]=e,l=Va(a,s,t,r),c=Fb(a,s,i,1,i,t,r,l),u=sc(l),f=c/Math.min(i*u[0],(1-i)*u[1]),p=Hb(a,s),w=i*p[0],b=(1-i)*p[1],g=.9*f*Math.sqrt(Math.sqrt(1/(1/w**4+1/b**4)));return w=i*.4,b=(1-i)*.8,[Math.sqrt(1/(1/w**2+1/b**2)),g,c]}function Gb(e,t,r,i){let a,s,l,c,u,f,p,w;Ft(i[0][0],[e,t])>1?([a,s,l,c,u]=i[0][1],[f,p,w]=r[0]):Ft(i[1][0],[e,t])>1?([a,s,l,c,u]=i[1][1],[f,p,w]=r[1]):([a,s,l,c,u]=i[2][1],[f,p,w]=r[2]);let b=a+s*e+l*t+c*e**2+u*e*t,g=Ft(Jr.LabtoLMS[0].slice(1),[e,t]),v=Ft(Jr.LabtoLMS[1].slice(1),[e,t]),_=Ft(Jr.LabtoLMS[2].slice(1),[e,t]),y=1+b*g,S=1+b*v,M=1+b*_,O=y**3,T=S**3,D=M**3,K=3*g*y**2,V=3*v*S**2,ne=3*_*M**2,W=6*g**2*y,me=6*v**2*S,ke=6*_**2*M,P=f*O+p*T+w*D,J=f*K+p*V+w*ne,A=f*W+p*me+w*ke;return b=b-P*J/(J**2-.5*P*A),b}function Wb(e,t,r){let[i,a,s]=e,l=Wo(s),c=null,u=null;if(i=Cr(i)/360,l!==0&&l!==1&&a!==0){let f=Math.cos(Go*i),p=Math.sin(Go*i),[w,b,g]=ph([l,f,p],t,r),v=.8,_=1.25,y,S,M,O;a<v?(y=_*a,S=0,M=v*w,O=1-M/b):(y=5*(a-.8),S=b,M=.2*b**2*1.25**2/w,O=1-M/(g-b));let T=S+y*M/(1-O*y);c=T*f,u=T*p}return[l,c,u]}function Ub(e,t,r){let i=1e-7,a=1e-4,s=e[0],l=0,c=Ri(s),u=Math.sqrt(e[1]**2+e[2]**2),f=.5+Math.atan2(-e[2],-e[1])/Go;if(c!==0&&c!==1&&u!==0){let[w,b,g]=ph([s,e[1]/u,e[2]/u],t,r),v=.8,_=1.25,y,S,M,O;u<b?(S=v*w,M=1-S/b,O=u/(S+M*u),l=O*v):(y=b,S=.2*b**2*_**2/w,M=1-S/(g-b),O=(u-y)/(S+M*(u-y)),l=v+.2*O)}const p=Math.abs(l)<a;return p||c===0||Math.abs(1-c)<i?(f=null,p||(l=0)):f=Cr(f*360),[f,l,c]}var qa=new we({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Or,gamutSpace:"self",M:Jr,fromBase(e){return Ub(e,Jr.toSRGBLinear,Wa)},toBase(e){return Wb(e,Jr.toSRGBLinear,Wa)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});qa.rgbGamut=new Ct({id:"okhsl-prism",cssId:"--okhsl-prism",name:"Okhsl Prism",base:qa,fromBase(e){return Ur.toBase([e[0],e[1]*100,e[2]*100])},toBase(e){const t=Ur.fromBase(e);return t[1]/=100,t[2]/=100,t}});var mh=new we({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Or,fromBase(e){return[Ri(e[0]),e[1],e[2]]},toBase(e){return[Wo(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Vb=new we({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:mh,fromBase:zt.fromBase,toBase:zt.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}}),cc={toSRGBLinear:qa.M.toSRGBLinear};function qb(e,t,r){let[i,a,s]=e;i=Cr(i)/360;let l=Wo(s),c=null,u=null;if(l!==0&&a!==0){let f=Math.cos(Go*i),p=Math.sin(Go*i),[w,b]=sc(Va(f,p,t,r)),g=.5,v=1-g/w,_=1-a*g/(g+b-b*v*a),y=a*b*g/(g+b-b*v*a);l=s*_;let S=s*y,M=Wo(_),O=y*M/_,T=Wo(l);S=S*T/l,l=T;let[D,K,V]=lc([M,f*O,p*O],t),ne=ct(1/Math.max(Math.max(D,K),Math.max(V,0)),1/3);l=l*ne,S=S*ne,c=S*f,u=S*p}return[l,c,u]}function Zb(e,t,r){let i=1e-4,a=e[0],s=0,l=Ri(a),c=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/Go;if(a!==0&&a!==1&&c!==0){let f=e[1]/c,p=e[2]/c,[w,b]=sc(Va(f,p,t,r)),g=.5,v=1-g/w,_=b/(c+a*b),y=_*a,S=_*c,M=Wo(y),O=S*M/y,[T,D,K]=lc([M,f*O,p*O],t),V=ct(1/Math.max(Math.max(T,D),Math.max(K,0)),1/3);a=a/V,c=c/V,c=c*Ri(a)/a,a=Ri(a),l=a/y,s=(g+b)*S/(b*g+b*v*S)}return Math.abs(s)<i||l===0?u=null:u=Cr(u*360),[u,s,l]}var uc=new we({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Or,gamutSpace:"self",M:cc,fromBase(e){return Zb(e,cc.toSRGBLinear,Wa)},toBase(e){return qb(e,cc.toSRGBLinear,Wa)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});uc.rgbGamut=new Ct({id:"okhsv-prism",cssId:"--okhsv-prism",name:"Okhsv Prism",base:uc,fromBase(e){return Ur.toBase([e[0],e[1]*100,e[2]*100])},toBase(e){const t=Ur.fromBase(e);return t[1]/=100,t[2]/=100,t}});var gh=Kt.D65,jb=216/24389,vh=24389/27,[bh,wh]=Fa({space:Lt,coords:gh}),_h=new we({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:gh,base:Lt,fromBase(e){let t=[It(e[0]),It(e[1]),It(e[2])],r=t[1],[i,a]=Fa({space:Lt,coords:t});if(!Number.isFinite(i)||!Number.isFinite(a))return[0,0,0];let s=r<=jb?vh*r:116*Math.cbrt(r)-16;return[s,13*s*(i-bh),13*s*(a-wh)]},toBase(e){let[t,r,i]=e;if(t===0||Fe(t))return[0,0,0];r=It(r),i=It(i);let a=r/(13*t)+bh,s=i/(13*t)+wh,l=t<=8?t/vh:Math.pow((t+16)/116,3);return[l*(9*a/(4*s)),l,l*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),dc=new we({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:_h,fromBase:zt.fromBase,toBase:zt.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),Kb=216/24389,Yb=24389/27,dn=Xl.fromXYZ,yh=dn[0][0],kh=dn[0][1],hc=dn[0][2],Eh=dn[1][0],Sh=dn[1][1],fc=dn[1][2],Ah=dn[2][0],Mh=dn[2][1],pc=dn[2][2];function Uo(e,t,r){const i=t/(Math.sin(r)-e*Math.cos(r));return i<0?1/0:i}function Za(e){const t=Math.pow(e+16,3)/1560896,r=t>Kb?t:e/Yb,i=r*(284517*yh-94839*hc),a=r*(838422*hc+769860*kh+731718*yh),s=r*(632260*hc-126452*kh),l=r*(284517*Eh-94839*fc),c=r*(838422*fc+769860*Sh+731718*Eh),u=r*(632260*fc-126452*Sh),f=r*(284517*Ah-94839*pc),p=r*(838422*pc+769860*Mh+731718*Ah),w=r*(632260*pc-126452*Mh);return{r0s:i/s,r0i:a*e/s,r1s:i/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:l/u,g0i:c*e/u,g1s:l/(u+126452),g1i:(c-769860)*e/(u+126452),b0s:f/w,b0i:p*e/w,b1s:f/(w+126452),b1i:(p-769860)*e/(w+126452)}}function xh(e,t){const r=t/360*Math.PI*2,i=Uo(e.r0s,e.r0i,r),a=Uo(e.r1s,e.r1i,r),s=Uo(e.g0s,e.g0i,r),l=Uo(e.g1s,e.g1i,r),c=Uo(e.b0s,e.b0i,r),u=Uo(e.b1s,e.b1i,r);return Math.min(i,a,s,l,c,u)}var Xb=new we({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dc,gamutSpace:gr,rgbGamut:gr,fromBase(e){let[t,r,i]=[It(e[0]),It(e[1]),It(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/xh(Za(t),i)*100,[i,a,t]},toBase(e){let[t,r,i]=[It(e[0]),It(e[1]),It(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=xh(Za(i),t)/100*r,[i,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),hn=Xl.fromXYZ;hn[0][0],hn[0][1],hn[0][2],hn[1][0],hn[1][1],hn[1][2],hn[2][0],hn[2][1],hn[2][2];function Vo(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Ih(e){let t=Vo(e.r0s,e.r0i),r=Vo(e.r1s,e.r1i),i=Vo(e.g0s,e.g0i),a=Vo(e.g1s,e.g1i),s=Vo(e.b0s,e.b0i),l=Vo(e.b1s,e.b1i);return Math.min(t,r,i,a,s,l)}var mc=new we({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dc,gamutSpace:"self",fromBase(e){let[t,r,i]=[It(e[0]),It(e[1]),It(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/Ih(Za(t))*100,[i,a,t]},toBase(e){let[t,r,i]=[It(e[0]),It(e[1]),It(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=Ih(Za(i))/100*r,[i,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});mc.rgbGamut=new Ct({id:"hpluv-prism",cssId:"--hpluv-prism",name:"HPLuv Prism",base:mc,fromBase(e){return Ur.toBase(e)},toBase(e){return Ur.fromBase(e)}});var ja=.021,Ka=Math.sqrt(ja/3),Jb=Ka*Ka*Ka,Ch=.978,Oh=.058,Th=264.5*Math.PI/180,gc=.7,Lh=.37,Qb=1,Pi={M1:[[.8154832155941288,.36033406153856506,-.12434135574228214],[.03301008352745078,.9292865057066169,.03612192716575443],[.04818827356456861,.2642841575338424,.6334971784195534]],M1_INV:[[1.2325947975032656,-.5557590239287523,.2736201534771583],[-.040801327874216024,1.112228863738653,-.07142753586443781],[-.07673825928337766,-.42172784577108585,1.5875238558143416]],M2:[[.21193779684470104,.7992121834263127,-.00410075161564345],[2.4672018828033475,-2.9877348024830788,.520532919679731],[-.11390787868068575,1.3932982808117473,-1.279390402131062]],M2_INV:[[.9930001151336143,.32599327253052285,.1294508563171392],[.9930001151336139,-.08708353111074627,-.03861361743004929],[.9930001151336136,-.12386097008215022,-.8351991365871061]]},Tn=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],fn=[0,.009494013522189627,.02564569838030986,.055259661658689105,.10574901531227408,.16055853320726027,.21405964892993756,.26786230508811226,.3220435246104499,.3739052098520243,.43020997780918835,.4835465162128873,.5399824670411353,.5956710081330342,.6542161666450478,.7115380216519989,.7702762412711669,.8293313467712837,.889406386197059,.9462829573474728,1],vc=Tn.length;function bc(e){let t=e/(2*Jb),r=2*Ka*Math.sinh(Math.asinh(t)/3),i=r*r*r+ja*r-e,a=3*r*r+ja,s=6*r,l=2*a*a-i*s;return Math.abs(l)>1e-30&&(r-=2*i*a/l),r}function wc(e){return e*e*e+ja*e}function Rh(e){let t=Math.max(0,Math.min(1,(e-Lh)/(Qb-Lh)));return Math.sin(Math.PI*t)**2}function e6(e,t,r){let i=Math.sqrt(t*t+r*r);if(i<1e-12)return[t,r];let a=Rh(e);if(a<1e-12)return[t,r];let s=Math.atan2(r,t),l=s-Th;l=l-Math.round(l/(2*Math.PI))*2*Math.PI;let c=Math.exp(-.5*(l/gc)**2),u=s+Oh*a*c;return[i*Math.cos(u),i*Math.sin(u)]}function t6(e,t,r){let i=Math.sqrt(t*t+r*r);if(i<1e-12)return[t,r];let a=Rh(e);if(a<1e-12)return[t,r];let s=Math.atan2(r,t),l=gc*gc,c=Oh*a,u=s;for(let f=0;f<8;f++){let p=u-Th;p=p-Math.round(p/(2*Math.PI))*2*Math.PI;let w=Math.exp(-.5*p*p/l),b=u+c*w-s,g=1+c*w*(-p/l),v=c*w*(-1/l+p*p/(l*l)),_=2*g*g-b*v;Math.abs(_)>1e-30&&(u-=2*b*g/_)}return[i*Math.cos(u),i*Math.sin(u)]}function r6(e){if(e<=0||e>=1)return e;let t=0,r=vc-1;for(;r-t>1;){let a=t+r>>1;Tn[a]<=e?t=a:r=a}let i=(e-Tn[t])/(Tn[r]-Tn[t]);return fn[t]+i*(fn[r]-fn[t])}function n6(e){if(e<=fn[0]||e>=fn[vc-1])return e;let t=0,r=vc-1;for(;r-t>1;){let a=t+r>>1;fn[a]<=e?t=a:r=a}let i=(e-fn[t])/(fn[r]-fn[t]);return Tn[t]+i*(Tn[r]-Tn[t])}var Ph=new we({id:"helmgen",name:"HelmGen",cssId:"--helmgen",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.6,.6]},b:{refRange:[-.6,.6]}},white:"D65",base:Lt,M:Pi,fromBase(e){let t=Xe(e,Pi.M1),r=bc(Math.max(t[0],0)),i=bc(Math.max(t[1],0)),a=bc(Math.max(t[2],0));{let u=(r+i+a)/3,f=(Math.max(r,i,a)-Math.min(r,i,a))/Math.max(Math.abs(u),1e-30),p=Math.exp(-((f/1e-5)**2));r+=p*(u-r),i+=p*(u-i),a+=p*(u-a)}let[s,l,c]=Xe([r,i,a],Pi.M2);{let u=Math.sqrt(l*l+c*c);if(u>1e-12){let f=Math.pow(u,Ch)/u;l*=f,c*=f}}return s=r6(s),[l,c]=e6(s,l,c),[s,l,c]},toBase(e){let[t,r,i]=e;[r,i]=t6(t,r,i),t=n6(t);{let c=Math.sqrt(r*r+i*i);if(c>1e-12){let u=Math.pow(c,1/Ch)/c;r*=u,i*=u}}let[a,s,l]=Xe([t,r,i],Pi.M2_INV);{let c=(a+s+l)/3,u=(Math.max(a,s,l)-Math.min(a,s,l))/Math.max(Math.abs(c),1e-30),f=Math.exp(-((u/1e-5)**2));a+=f*(c-a),s+=f*(c-s),l+=f*(c-l)}return Xe([wc(a),wc(s),wc(l)],Pi.M1_INV)}}),o6=new we({id:"helmgenlch",name:"HelmGenLCh",cssId:"--helmgenlch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.65],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Ph,fromBase:zt.fromBase,toBase:zt.toBase}),$i=new Ct({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",M:Y0}),$h=203,Dh=2610/2**14,i6=2**14/2610,a6=2523/2**5,zh=2**5/2523,Nh=3424/2**12,Bh=2413/2**7,Hh=2392/2**7,s6=new Ct({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:$i,linearGamut:$i,toBase(e){return e.map(function(t){return(Math.max(t**zh-Nh,0)/(Bh-Hh*t**zh))**i6*1e4/$h})},fromBase(e){return e.map(function(t){let r=Math.max(t*$h/1e4,0);return((Nh+Bh*r**Dh)/(1+Hh*r**Dh))**a6})}}),Fh=.17883277,Gh=.28466892,Wh=.55991073,_c=3.7743,l6=new Ct({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:$i,linearGamut:$i,toBase(e){return e.map(function(t){return t<=.5?t**2/3*_c:(Math.exp((t-Wh)/Fh)+Gh)/12*_c})},fromBase(e){return e.map(function(t){return t/=_c,t<=1/12?ct(3*t,.5):Fh*Math.log(12*t-Gh)+Wh})}}),Uh={};In.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Vh(e.W1,e.W2,e.options.method))}),In.add("chromatic-adaptation-end",e=>{e.M||(e.M=Vh(e.W1,e.W2,e.options.method))});function Ya({id:e,toCone_M:t,fromCone_M:r}){Uh[e]=arguments[0]}function Vh(e,t,r="Bradford"){let i=Uh[r],[a,s,l]=yi(i.toCone_M,e),[c,u,f]=yi(i.toCone_M,t),p=yi([[c/a,0,0],[0,u/s,0],[0,0,f/l]],i.toCone_M);return yi(i.fromCone_M,p)}Ya({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),Ya({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),Ya({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),Ya({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Kt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Kt.ACES=[.32168/.33767,1,.34065/.33767];var c6={toXYZ:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]},yc=new Ct({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Kt.ACES,M:c6}),Xa=2**-16,kc=-.35828683,Ja=(Math.log2(65504)+9.72)/17.52,u6=new Ct({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[kc,Ja],name:"Red"},g:{range:[kc,Ja],name:"Green"},b:{range:[kc,Ja],name:"Blue"}},referred:"scene",base:yc,linearGamut:yc,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Xa)*2:r<Ja?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Xa)+9.72)/17.52:t<Xa?(Math.log2(Xa+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),qh=an({A98RGB:()=>Ib,A98RGB_Linear:()=>oc,ACEScc:()=>u6,ACEScg:()=>yc,CAM16_JMh:()=>q4,HCT:()=>Ii,HPLuv:()=>mc,HSL:()=>Ur,HSL_P3:()=>Sb,HSL_REC2020:()=>Ab,HSLuv:()=>Xb,HSV:()=>dh,HWB:()=>Mb,HelmGen:()=>Ph,HelmGenLCh:()=>o6,Helmlab:()=>Kl,ICTCP:()=>Hl,JzCzHz:()=>Bl,Jzazbz:()=>a0,LCH:()=>zt,LCH_P3:()=>zb,LCH_REC_2020:()=>Bb,LCH_sRGB:()=>Nb,LCHuv:()=>dc,Lab:()=>pr,Lab_D65:()=>ec,Luv:()=>_h,OKLCH:()=>Cn,OKLCH_P3:()=>Pb,OKLCH_REC_2020:()=>Db,OKLCH_sRGB:()=>$b,OKLab:()=>Or,OKLrCH:()=>Vb,OKLrab:()=>mh,Okhsl:()=>qa,Okhsv:()=>uc,P3:()=>Ho,P3_Linear:()=>Yl,ProPhoto:()=>Lb,ProPhoto_Linear:()=>ic,REC_2020:()=>Bo,REC_2020_Linear:()=>Ci,REC_2020_Scene_Referred:()=>Rb,REC_2100_HLG:()=>l6,REC_2100_Linear:()=>$i,REC_2100_PQ:()=>s6,XYZ_ABS_D65:()=>zl,XYZ_D50:()=>Rl,XYZ_D65:()=>Lt,sRGB:()=>gr,sRGB_Linear:()=>Jl}),vr=class cr{constructor(...t){let r;if(t.length===1){let l={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=Pe(t[0],{parseMeta:l}),l.format&&(this.parseMeta=l)}let i,a,s;r?(i=r.space||r.spaceId,a=r.coords,s=r.alpha):[i,a,s]=t,Object.defineProperty(this,"space",{value:we.get(i),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=Fe(s)?s:s===void 0?1:Wr(0,s,1);for(let l in this.space.coords)Object.defineProperty(this,l,{get:()=>this.get(l),set:c=>this.set(l,c)})}get spaceId(){return this.space.id}clone(){return new cr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Y3(this,...t);return r.color=new cr(r.color),r}static get(t,...r){return ao(t,this)?t:new cr(t,...r)}static try(t,r){if(ao(t,this))return t;let i=K0(t,r);return i?new cr(i):null}static defineFunction(t,r,i=r){let{instance:a=!0,returns:s}=i,l=function(...c){let u=r(...c);if(s==="color")u=cr.get(u);else if(s==="function<color>"){let f=u;u=function(...p){let w=f(...p);return cr.get(w)},Object.assign(u,f)}else s==="array<color>"&&(u=u.map(f=>cr.get(f)));return u};t in cr||(cr[t]=l),a&&(cr.prototype[t]=function(...c){return l(this,...c)})}static defineFunctions(t){for(let r in t)cr.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(cr);else for(let r in t)cr.defineFunction(r,t[r])}};vr.defineFunctions({get:mr,getAll:Si,set:cn,setAll:Dl,to:qe,equals:J3,inGamut:Lo,toGamut:un,distance:Xd,deltas:X3,toString:No}),Object.assign(vr,{util:m4,hooks:In,WHITES:Kt,Space:we,spaces:we.registry,parse:Wd,defaults:fr});for(let e of Object.keys(qh))we.register(qh[e]);for(let e in we.registry)Ec(e,we.registry[e]);In.add("colorspace-init-end",e=>{Ec(e.id,e),e.aliases?.forEach(t=>{Ec(t,e)})});function Ec(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(vr.prototype,r,{get(){let i=this.getAll(e);if(typeof Proxy>"u")return i;let a=new Proxy(i,{has:(s,l)=>{try{return we.resolveCoord([t,l]),!0}catch{}return Reflect.has(s,l)},get:(s,l,c)=>{if(l&&typeof l!="symbol"&&!(l in s)&&l in a){let{index:u}=we.resolveCoord([t,l]);if(u>=0)return s[u]}return Reflect.get(s,l,c)},set:(s,l,c,u)=>{if(l&&typeof l!="symbol"&&!(l in s)||Number(l)>=0){let{index:f}=we.resolveCoord([t,l]);if(f>=0)return s[f]=c,this.setAll(e,s),!0}return Reflect.set(s,l,c,u)}});return a},set(i){this.setAll(e,i)},configurable:!0,enumerable:!0})}vr.extend(Do),vr.extend({deltaE:Oi}),Object.assign(vr,{deltaEMethods:Do}),vr.extend(yb),vr.extend({contrast:bb}),vr.extend(wb),vr.extend(Q3),vr.extend(kb),vr.extend(Ha);var Tr=vr,Sc={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},Ot={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function d6(e){try{Tr.get(e)}catch{return!0}return Tr.contrast(e,"white","Lstar")>Tr.contrast(e,"black","Lstar")}function qo(e){return d6(e)?"#FFFFFF":"#000000"}var h6=xe.default.fromPairs(xe.default.entries(_l).map(([e,t])=>[e,Rd(t)])),{IconAdjustmentsHorizontal:fx,IconApiBook:px,IconArrowsHorizontal:mx,IconArrowsLeftRight:gx,IconArrowAutofitDown:vx,IconArrowAutofitHeight:f6,IconArrowAutofitLeft:bx,IconArrowAutofitRight:wx,IconArrowAutofitWidth:p6,IconArrowBigLeft:_x,IconArrowBigRight:yx,IconArrowsMove:kx,IconArrowsMoveVertical:Ex,IconArrowsVertical:Sx,IconBook:Ax,IconBookOff:Mx,IconBookArrowLeft:xx,IconBookArrowRight:Ix,IconBooksReturn:Cx,IconBookUpload:Ox,IconBookmark:m6,IconBookmarkOff:g6,IconBookmarks:Tx,IconBoxAlignTop:Lx,IconCategory:v6,IconCheck:Qa,IconChevronLeft:Rx,IconChevronRight:Px,IconAlertCircle:$x,IconCircleCheck:Dx,IconCircleX:zx,IconHelp:Nx,IconInfoCircle:Bx,IconComic1:Hx,IconComic1Flat:Fx,IconComic2:Gx,IconComic2Flat:Wx,IconComic3:Ux,IconComic3Flat:Vx,IconDeviceFloppy:qx,IconDotsVertical:Zx,IconEReader1:jx,IconEReader1Flat:Kx,IconEReader2:Yx,IconEReader2Flat:Xx,IconExternalLink:Jx,IconEye:b6,IconEyeOff:w6,IconFileDownload:Qx,IconFilePercent:eI,IconFolderOpen:tI,IconHandClick:rI,IconKeyboard:nI,IconLayoutDashboard:oI,IconLayoutBottombar:iI,IconLayoutBottombarInactive:aI,IconLayoutSidebar:sI,IconLayoutSidebarInactive:lI,IconLayoutSidebarRight:cI,IconLayoutSidebarRightInactive:uI,IconListNumbers:dI,IconLoader2:hI,IconLocationCog:fI,IconMenu2:pI,IconMenuDeep:mI,IconMessage:gI,IconMoon:vI,IconPage:bI,IconPageFlat:wI,IconPalette:_I,IconPencil:yI,IconPencilCog:kI,IconPhoto:EI,IconPhotoOff:SI,IconPin:AI,IconPlayerPause:MI,IconPlayerPlay:xI,IconRefresh:_6,IconSettings:II,IconSettingsOff:CI,IconSpacingHorizontal:y6,IconSpacingVertical:OI,IconSun:TI,IconTrash:LI,IconWorldCog:RI,IconX:Ac,IconZoom:PI,IconZoomCancel:k6,IconZoomIn:E6,IconZoomInArea:$I,IconZoomOut:S6,IconZoomOutArea:DI,IconZoomPan:zI}=h6,Ln=class extends rt{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=Et`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    .swatch {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.15s ease;
      box-sizing: border-box;
      border: 1px solid var(--theme-border-color, rgba(0, 0, 0, 0.1));
      color: var(--contrast-color);
    }

    :host(:hover) .swatch {
      transform: scale(1.1);
    }

    ::slotted(*) {
      width: 60%;
      height: 60%;
    }

    .check-icon {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: var(--contrast-color);
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .check-icon svg {
      width: 60%;
      height: 60%;
    }

    :host([checked]) .check-icon {
      opacity: 1;
    }
  `}willUpdate(t){t.has("color")&&(this.contrastColor=qo(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},r={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return ie`
      <div style=${Xr(t)}>
        <div
          class="swatch"
          style=${Xr(r)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${Qa} </span>
        </div>
      </div>
    `}};z([j({type:String})],Ln.prototype,"color",void 0),z([j({type:String})],Ln.prototype,"selected",void 0),z([j({type:Number})],Ln.prototype,"size",void 0),z([j({type:String})],Ln.prototype,"radius",void 0),z([j({state:!0})],Ln.prototype,"contrastColor",void 0),z([j({type:Boolean,reflect:!0})],Ln.prototype,"checked",void 0),Ln=z([lt("color-swatch")],Ln);function A6(e){const[t,r,i]=e.to("oklch").coords.map(u=>u??0),a=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],s=a.map(u=>new Tr("oklch",[u,r,i]).toString({format:"hex"}));let l=-1,c=1/0;for(let u=0;u<a.length;u++){const f=Math.abs(a[u]-t);f<c&&(c=f,l=u)}return l!==-1&&(s[l]=e.toString({format:"hex"})),s.map(u=>u.toUpperCase())}function M6(e){const t=e.to("hsl"),r=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],i=[];for(const a of r){const s=t.clone();s.coords[2]=a*100;const l=s.coords[1]??0;a>.8?s.coords[1]=l*.4:a>.6?s.coords[1]=l*.8:a<.3&&(s.coords[1]=Math.min(100,l*1.1)),i.push(s.toString({format:"hex"}).toUpperCase())}return i}function x6(e){const t=[],r=[95,90,80,70,60,50,40,30,20,10,5],i=e.to("hsl");for(const a of r){const s=i.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function I6(e){const t=new Array(11).fill(""),r=e.to("hsl"),i={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,l=(i.lightest.lightness-50)/a,c=(50-i.darkest.lightness)/s,u=i.lightest.rotate/a,f=i.darkest.rotate/s,p=i.lightest.saturate/a,w=i.darkest.saturate/s;for(let b=1;b<=a;b++){const g=a-b,v=r.clone();v.coords[2]=(v.coords[2]??0)+l*(b-.5),v.coords[0]=(v.coords[0]??0)+u*b,v.coords[1]=(v.coords[1]??0)+p*b,t[g]=v.toString({format:"hex"})}t[5]=r.clone().toString({format:"hex"});for(let b=1;b<=s;b++){const g=a+b,v=r.clone();v.coords[2]=(v.coords[2]??0)-c*(b-.5),v.coords[0]=(v.coords[0]??0)+f*b,v.coords[1]=(v.coords[1]??0)+w*b,t[g]=v.toString({format:"hex"})}return t}function C6(e){const[t,r,i]=e.to("hsl").coords.map(s=>s??0),a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const l=(5-s)/6,c=i+(100-i)*l;a[s]=new Tr("hsl",[t,r-r*l,c]).toString({format:"hex"})}for(let s=0;s<5;s++){const l=(s+1)/6,c=i-i*l,u=r+(100-r)*l;a[s+6]=new Tr("hsl",[t,u,c]).toString({format:"hex"})}return a}function Zh(e,t="steps"){let r;try{r=Tr.get(e)}catch{r=Tr.get(Sc.navy)}switch(t){case"saturation":return M6(r);case"lightness":return x6(r);case"mantine":return C6(r);case"chakra":return I6(r);default:return A6(r)}}var Rn=class extends rt{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=Et`
    :host {
      display: flex;
      gap: var(--palette-gap, 4px);
      align-items: center;
      justify-content: center;
    }

    .swatch {
      width: var(--swatch-size, 22px);
      height: var(--swatch-size, 22px);
      border-radius: var(--swatch-radius, 4px);
      border: 1px solid var(--theme-border-color, #ccc);
      transition: transform 0.15s ease;
      cursor: pointer;
      background-clip: content-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .swatch-inner {
      width: 100%;
      height: 100%;
      border-radius: var(--swatch-radius, 4px);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      color: var(--text-color);
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .checkmark svg {
      width: 60%;
      height: 60%;
    }
    .swatch[checked] .checkmark {
      opacity: 1;
    }
    .swatch:hover {
      transform: scale(1.1);
    }
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=Zh(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return ie`
      ${this.gradient.map(t=>ie`
          <div
            class="swatch"
            ?checked=${this.selected&&t.toLowerCase()===this.selected.toLowerCase()}
            title=${t}
            @click=${()=>this.handleSwatchClick(t)}
          >
            <div
              class="swatch-inner"
              style="--color: ${t}; --text-color: ${qo(t)}"
            >
              <span class="checkmark">${Qa}</span>
            </div>
          </div>
        `)}
    `}};z([j({type:String})],Rn.prototype,"baseColor",void 0),z([j({type:String})],Rn.prototype,"mode",void 0),z([j({type:String,reflect:!0})],Rn.prototype,"orientation",void 0),z([j({type:String})],Rn.prototype,"selected",void 0),z([j({type:String,reflect:!0})],Rn.prototype,"value",void 0),z([Ht()],Rn.prototype,"gradient",void 0),Rn=z([lt("color-palette")],Rn);var es=class extends rt{constructor(...t){super(...t),this.value=""}static{this.styles=Et`
    :host {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
    }
    .SwatchGroup {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      column-gap: 8px;
    }
    .ColorName {
      font-size: 12px;
      color: var(--theme-text-color);
      text-transform: capitalize;
      min-width: 64px;
    }
    .Swatches {
      display: grid;
      grid-template-columns: repeat(9, 16px);
      gap: 8px;
      align-items: center;
    }
    .ThemeRadio {
      color: var(--mov-color-on-loud);
      height: 20px;
      width: 20px;
      border-radius: 3px;
      margin: 0;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    }
    .ThemeRadio:hover,
    .ThemeRadio:focus-visible {
      outline: 2px solid var(--theme-border-color);
      outline-offset: 1px;
    }
    .ThemeRadio.selected {
      box-shadow:
        0 0 0 2px var(--theme-body-background),
        0 0 0 3px var(--theme-text-color);
    }
    .ThemeRadio svg {
      width: 10px;
      height: 10px;
    }
    .ThemeRadio.selected .icon-tabler-check {
      display: inline;
    }
    .ThemeRadio:not(.selected) .icon-tabler-check {
      display: none;
    }
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=xe.default.keys(Ot).filter(i=>!["dark","gray","zinc","neutral","stone"].includes(i)),r=[200,300,400,500,600,700,800,900,950];return t.map(i=>ie` <div class="SwatchGroup">
        <span class="ColorName">${i}</span>
        <div class="Swatches">${r.map(a=>{const s=Ot[i][a],l=qo(s);return ie`
          <span
            title="${s}"
            class="${St({ThemeRadio:!0,selected:this.selected?.toLowerCase()===s.toLowerCase()})}"
            style="background-color: ${s}; color: ${l}"
            @click=${this.handleColorClick}
          >
            ${Qa}
          </span>
        `})}</div>
      </div>`)}};z([j({type:String,reflect:!0})],es.prototype,"value",void 0),z([j({type:String})],es.prototype,"selected",void 0),es=z([lt("color-panel")],es);var Gt=class extends rt{constructor(...t){super(...t),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=Et`
    :host {
      display: inline-block;
      position: relative;
    }

    .picker-container {
      width: 250px;
      box-sizing: border-box;
    }

    .picker-container.popup {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 10;
      border: 1px solid var(--theme-border-color);
      border-radius: 8px;
      background: var(--theme-background-color);
      padding: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .picker-container.popup.right {
      left: auto;
      right: 0;
    }

    .saturation-panel {
      position: relative;
      width: 100%;
      height: 180px;
      border-radius: 8px;
      cursor: crosshair;
      -webkit-tap-highlight-color: transparent;
    }

    .saturation-overlay-1,
    .saturation-overlay-2 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
    }

    .saturation-overlay-1 {
      background: linear-gradient(to right, #fff, transparent);
    }

    .saturation-overlay-2 {
      background: linear-gradient(to top, #000, transparent);
    }

    .saturation-thumb {
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -8px);
      pointer-events: none;
    }

    .sliders {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 12px;
    }

    .hue-slider {
      position: relative;
      width: 100%;
      height: 10px;
      border-radius: 5px;
      background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
      cursor: pointer;
    }

    .hue-thumb {
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -50%);
      pointer-events: none;
    }

    .swatches {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 8px;
      margin-top: 12px;
    }

    .swatch {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 4px;
      border: 1px solid #dee2e6;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform 0.1s;
    }

    .swatch:hover {
      transform: scale(1.1);
    }

    .popup-trigger {
      width: 96px;
      height: 32px;
      border-radius: 4px;
      border: 1px solid var(--theme-background-color);
      padding: 4px;
      box-sizing: border-box;
      cursor: pointer;
      background-color: var(--theme-hightlight-color);
    }

    .preview {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if(this.mode==="popup")if(this.opened)this.hide();else{const t=this.getBoundingClientRect(),r=250;let i;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?i=s.getBoundingClientRect():i={left:0,right:window.innerWidth}}else i={left:0,right:window.innerWidth};t.left+r>i.right?t.right-r>i.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left",this.show()}}isSameColor(t,r){return!t||!r?!1:Tr.deltaE(t,r,{method:"2000"})<1}renderCheckIcon(t){return ie`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Xr({stroke:qo(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},r={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},i={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new Tr("hsv",[r.h,r.s,r.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return ie`
      <div
        class="saturation-panel"
        style=${Xr(t)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Xr(i)}
        ></div>
      </div>

      <div class="sliders">
        <div
          class="hue-slider"
          @mousedown=${this.handleHueDragStart.bind(this)}
          @touchstart=${this.handleHueDragStart.bind(this)}
        >
          <div
            class="hue-thumb"
            style=${Xr(a)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||xe.default.entries(Ot).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>ie`
            <button
              class="swatch"
              title=${s}
              style=${Xr({backgroundColor:s})}
              @click=${()=>this.selectSwatch(s)}
            >
              ${this.isSameColor(this.value,s)?this.renderCheckIcon(s):""}
            </button>
          `)}
      </div>
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},r=this.renderPickerBody();return this.mode==="popup"?ie`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Xr({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?ie`<div class=${St(t)}>${r}</div>`:""}
      `:ie`<div class=${St(t)}>${r}</div>`}parseColor(t){try{return Tr.get(t)}catch(r){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,r),null}}colorToHsv(t){let[r,i,a]=t.to("srgb").to("hsv").coords.map(s=>s??0);return Number.isNaN(r)&&(r=this.hsv.h||0,i=0),i=Math.max(0,Math.min(100,i))/100,a=Math.max(0,Math.min(100,a))/100,{h:r,s:i,v:a}}updateStateFromValue(t){const r=this.parseColor(t);if(!r)return;this.sourceSpace=r.space.id;const i=this.colorToHsv(r);(i.h!==this.hsv.h||i.s!==this.hsv.s||i.v!==this.hsv.v)&&(this.hsv=i,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},r=new Tr("hsv",[t.h,t.s,t.v]);let i;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?i=r.to("srgb").toString({format:"hex"}):i=r.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),i=r.to("srgb").toString({format:"hex"})}this.value!==i&&(this.value=i,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:r,clientY:i}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(r-a.left,a.width)),l=Math.max(0,Math.min(i-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-l/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:r}=this.getEventPosition(t),i=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(r-i.left,i.width));this.hsv.h=a/i.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};z([j({type:String})],Gt.prototype,"value",void 0),z([j({type:String,attribute:"default-value"})],Gt.prototype,"defaultValue",void 0),z([j({type:String})],Gt.prototype,"label",void 0),z([j({type:String})],Gt.prototype,"hint",void 0),z([j({type:String})],Gt.prototype,"name",void 0),z([j({type:Boolean,reflect:!0})],Gt.prototype,"disabled",void 0),z([j({type:String,reflect:!0})],Gt.prototype,"size",void 0),z([j({type:Array})],Gt.prototype,"swatches",void 0),z([j({type:String})],Gt.prototype,"mode",void 0),z([Ht()],Gt.prototype,"opened",void 0),z([Ht()],Gt.prototype,"popupDirection",void 0),z([Ht()],Gt.prototype,"sourceSpace",void 0),z([Ht()],Gt.prototype,"hsv",void 0),z([Ht()],Gt.prototype,"saturationThumbPosition",void 0),z([Ht()],Gt.prototype,"hueThumbPosition",void 0),Gt=z([lt("mov-color-picker")],Gt);var O6=(e,t,r)=>{for(const i of t)if(i[0]===e)return(0,i[1])();return r?.()},Pn=class extends rt{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=Et`
    :host {
      width: 100%;
      display: block;
    }
    .segmented-control {
      position: relative;
      display: flex;
      gap: 0.25rem;
      border-radius: 0.5rem;
      background-color: var(--theme-border-color);
      padding: 0.25rem;
      flex-wrap: wrap;
    }
    .thumb {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0.5rem;
      background-color: var(--mov-color-fill-loud);
      transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1;
    }
    .option {
      flex: 1;
      text-align: center;
      z-index: 2; /* Ensure button is above thumb */
      position: relative; /* Needed to correctly position the button */
    }

    .button {
      /* The button now acts as the interactive label */
      width: 100%;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      /* Default colors when not selected */
      color: var(--theme-text-color);
      background-color: transparent;
      transition: color 0.15s ease-in-out;
      flex-direction: row;
      gap: 0.25rem;
      padding: 0.5rem 0.75rem; /* Default padding (medium) */
      font-size: 16px; /* Default font-size (medium) */
      box-sizing: border-box; /* Include padding/border in element's total width/height */
    }

    /* Selected State Styles - Driven by the 'selected' class */
    .button.selected {
      color: var(--mov-color-on-loud);
      font-weight: 600;
    }

    /* Size Variations */
    .button.small {
      padding: 0.25rem 0.5rem;
      font-size: 14px;
    }
    .button.large {
      padding: 0.75rem 1rem;
      font-size: 18px;
    }

    /* Label Position Variations */
    .button.bottom {
      flex-direction: column;
    }
    .button.bottom.small {
      padding: 0.25rem;
    }
    .button.bottom.medium {
      padding: 0.5rem;
    }
    .button.bottom.large {
      padding: 0.75rem;
    }
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,r){this.value=r,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:r,offsetHeight:i}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),l=a.left-(s?.left??0),c=a.top-(s?.top??0);this.thumb.style.transform=`translate(${l}px, ${c}px)`,this.thumb.style.width=`${r}px`,this.thumb.style.height=`${i}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return ie`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>ie`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:He}"
            >
              <button
                class="${St({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${r=>this.handleClick(r,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?ie`<mov-icon
                      name="${t.icon}"
                      .size=${O6(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:He}
                ${this.labelPosition!=="tooltip"?ie`<span>${t.label}</span>`:He}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};z([j({type:String,reflect:!0})],Pn.prototype,"value",void 0),z([j({type:String})],Pn.prototype,"labelPosition",void 0),z([j({type:String})],Pn.prototype,"size",void 0),z([Ht()],Pn.prototype,"_options",void 0),z([Mn(".thumb")],Pn.prototype,"thumb",void 0),z([Mn("slot")],Pn.prototype,"_slotEl",void 0),Pn=z([lt("segmented-control")],Pn);var Di=class extends rt{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};z([j({type:String,reflect:!0})],Di.prototype,"value",void 0),z([j({type:String,reflect:!0})],Di.prototype,"label",void 0),z([j({type:String,reflect:!0})],Di.prototype,"icon",void 0),Di=z([lt("segmented-control-option")],Di);var br=class extends rt{constructor(...t){super(...t),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=Et`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    :host([size='small']) {
      --switch-width: 2.5rem;
      --switch-height: 1.25rem;
      --knob-size: 16px;
    }

    :host([size='large']) {
      --switch-width: 4rem;
      --switch-height: 2rem;
      --knob-size: 1.75rem;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    input {
      display: none;
    }

    .switch {
      display: inline-block;
      position: relative;
      width: var(--switch-width);
      height: var(--switch-height);
      border-radius: var(--switch-height);
      background-color: #d7062a;
      border: 1px solid #d7062a;
      transition:
        background-color 0.3s,
        border-color 0.3s;
      cursor: pointer;
    }

    input:checked + .switch {
      background-color: #50ac5d;
      border-color: #50ac5d;
    }

    .switch.textual {
      background-color: var(--mov-color-on-loud);
      border-color: var(--mov-color-on-loud);
    }

    input:checked + .switch.textual {
      background-color: var(--mov-color-fill-loud);
      border-color: var(--mov-color-fill-loud);
    }

    input:disabled + .switch {
      background-color: #eee;
      border-color: #ccc;
      cursor: not-allowed;
    }

    .knob {
      position: absolute;
      top: 1px;
      left: 1px;
      width: var(--knob-size);
      height: var(--knob-size);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
      transition: left 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      font-family: Arial;
      color: #333;
    }

    input:checked + .switch .knob {
      left: calc(100% - var(--knob-size) - 1px);
    }

    .switch:focus {
      outline: 2px solid #0a6ed1;
      outline-offset: 2px;
    }

    .icon {
      width: 16px;
      height: 16px;
      fill: none;
    }

    .text {
      font-size: 12px;
      font-weight: bold;
      color: #333;
    }

    .hint {
      font-size: 13px;
      opacity: 0.7;
      margin-top: 0.25rem;
    }
  `}handleChange(t){this.disabled||(this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){const t=this.design.toLowerCase();let r;return t==="graphical"?r=ie`${this.checked?Qa:Ac}`:r=ie`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,ie`
      <div class="base">
        <label class="label">
          <slot></slot>
          <input
            type="checkbox"
            .name="${this.name}"
            .value="${this.value}"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.handleChange}
          />
          <div
            class="${St({switch:!0,[t]:!0})}"
          >
            <div class="knob">${r}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}};z([j({type:String})],br.prototype,"name",void 0),z([j({type:String})],br.prototype,"value",void 0),z([j({type:Boolean,reflect:!0})],br.prototype,"checked",void 0),z([j({type:Boolean,reflect:!0,attribute:"default-checked"})],br.prototype,"defaultChecked",void 0),z([j({type:Boolean,reflect:!0})],br.prototype,"disabled",void 0),z([j({type:Boolean,reflect:!0})],br.prototype,"required",void 0),z([j({type:String,reflect:!0})],br.prototype,"size",void 0),z([j({type:String})],br.prototype,"hint",void 0),z([j({type:String,reflect:!0})],br.prototype,"design",void 0),z([j({type:String})],br.prototype,"textOn",void 0),z([j({type:String})],br.prototype,"textOff",void 0),br=z([lt("mov-switch")],br);var T6=":host{--mov-slider-track-height:6px;--mov-slider-thumb-size:18px;--mov-slider-tooltip-offset:24px;user-select:none;touch-action:none;width:100%;display:block}:host([vertical]){display:inline-block}.mov-slider__container{align-items:center;min-height:24px;display:flex;position:relative}:host([vertical]) .mov-slider__container{flex-direction:column;min-width:24px;min-height:auto}.mov-slider__track{height:var(--mov-slider-track-height);background:var(--theme-border-color,#ccc);cursor:pointer;border-radius:9999px;flex:1;position:relative}:host([vertical]) .mov-slider__track{width:var(--mov-slider-track-height);height:100%;min-height:8rem}.mov-slider__progress{background:var(--mov-color-fill-loud);pointer-events:none;border-radius:9999px;height:100%;transition:background-color .15s;position:absolute}.mov-slider__progress--min-gap{background:#f59e0b;animation:2s ease-in-out infinite pulse-gap}@keyframes pulse-gap{0%,to{opacity:1}50%{opacity:.7}}:host([vertical]) .mov-slider__progress{width:100%;height:auto}.mov-slider__thumb{width:var(--mov-slider-thumb-size);height:var(--mov-slider-thumb-size);border:3px solid var(--mov-color-fill-loud);cursor:grab;touch-action:none;box-sizing:border-box;background:#fff;border-radius:9999px;transition:transform .15s,border-color .15s,box-shadow .15s;position:absolute;top:50%;transform:translate(-50%,-50%);box-shadow:0 1px 3px #0003}.mov-slider__thumb:active{cursor:grabbing;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb{inset-inline-start:50%;top:auto;transform:translate(-50%,50%)}:host([vertical]) .mov-slider__thumb:active{transform:translate(-50%,50%)scale(1.1)}.mov-slider__thumb:hover{border-color:var(--mov-color-fill-loud);box-shadow:0 4px 6px -1px #0000001a}.mov-slider__thumb--focused{outline:3px solid var(--mov-color-fill-loud);outline-offset:2px}.mov-slider__thumb--active{z-index:1;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb--active{transform:translate(-50%,50%)scale(1.1)}:host([readonly]) .mov-slider__thumb{cursor:default;border-color:var(--theme-border-color)}:host([readonly]) .mov-slider__thumb:active{transform:translate(-50%,-50%)}.mov-slider__input{opacity:0;pointer-events:none;position:absolute}.mov-slider__tooltip{bottom:var(--mov-slider-tooltip-offset);background:var(--theme-hightlight-color,#333);color:#fff;white-space:nowrap;pointer-events:none;opacity:0;z-index:2;border-radius:4px;padding:2px 8px;font-size:14px;transition:opacity .15s;position:absolute;inset-inline-start:50%;transform:translate(-50%)}.mov-slider__thumb:hover .mov-slider__tooltip,.mov-slider__thumb--focused .mov-slider__tooltip,.mov-slider__thumb--active .mov-slider__tooltip{opacity:1}:host([vertical]) .mov-slider__tooltip{bottom:auto;inset-inline-start:var(--mov-slider-tooltip-offset);top:50%;transform:translateY(-50%)}.mov-slider__ticks{top:50%;pointer-events:none;height:8px;position:absolute;inset-inline:0}:host([vertical]) .mov-slider__ticks{top:0;bottom:0;width:8px;height:auto;inset-inline-start:50%}.mov-slider__tick{background:var(--theme-border-color);width:1px;height:8px;position:absolute;transform:translate(-50%)}:host([vertical]) .mov-slider__tick{width:8px;height:1px;transform:translateY(-50%)}.mov-slider__tick-label{color:var(--theme-text-color);opacity:.7;white-space:nowrap;font-size:12px;position:absolute;top:12px;transform:translate(-50%)}:host([vertical]) .mov-slider__tick-label{top:auto;inset-inline-start:12px;transform:translateY(-50%)}:host([size=small]){--mov-slider-track-height:4px;--mov-slider-thumb-size:14px}:host([size=large]){--mov-slider-track-height:10px;--mov-slider-thumb-size:22px}:host([disabled]){opacity:.6;pointer-events:none}:host([disabled]) .mov-slider__thumb{cursor:not-allowed;border-color:var(--theme-border-color);background:#f3f4f6}:host([invalid]) .mov-slider__progress{background:#ef4444}.mov-form-control__label{color:var(--theme-text-color);margin-bottom:.5rem;display:block}.mov-form-control__helper,.mov-form-control__error{margin-top:.5rem;font-size:14px}.mov-form-control__helper{color:var(--theme-text-color);opacity:.8}.mov-form-control__error{color:#ef4444}.mov-slider__live-region{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}:host([show-ticks]){margin-left:5px;margin-right:5px;padding-bottom:15px}:host([filled]) .mov-slider__thumb{background:var(--mov-color-fill-loud);border-color:var(--mov-color-fill-loud)}",vt=class extends rt{static{this.styles=[Se(T6)]}constructor(){super(),this.label="",this.helpText="",this.errorMessage="",this.min=0,this.max=100,this.step=1,this.value=0,this.dual=!1,this.vertical=!1,this.filled=!1,this.size="medium",this.disabled=!1,this.readonly=!1,this.invalid=!1,this.showTooltip=!1,this.showTicks=!1,this.tickStep=0,this.tickCount=0,this.focusedThumb=null,this.draggingThumb=null,this.activeDrag=null,this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this)}get values(){return Array.isArray(this.value)?this.value:[this.min,this.value]}getPercentage(t){return(t-this.min)/(this.max-this.min)*100}getValueFromPercentage(t){const r=this.min+t/100*(this.max-this.min);return this.step?Math.round(r/this.step)*this.step:r}getValueFromPointer(t,r,i){let a;return this.vertical?a=(i.bottom-r)/i.height*100:a=(t-i.left)/i.width*100,a=Math.max(0,Math.min(100,a)),this.getValueFromPercentage(a)}clampValue(t){let r=Math.max(this.min,Math.min(this.max,t));return this.step&&(r=Math.round(r/this.step)*this.step),Number(r.toFixed(10))}handleThumbPointerDown(t,r){this.disabled||this.readonly||!this.track||(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),this.activeDrag={thumb:r,trackRect:this.track.getBoundingClientRect()},this.draggingThumb=r,document.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerUp),document.addEventListener("pointercancel",this._handlePointerUp))}_handlePointerMove(t){if(!this.activeDrag||this.disabled||this.readonly)return;const{thumb:r,trackRect:i}=this.activeDrag,a=this.getValueFromPointer(t.clientX,t.clientY,i);if(this.dual){const s=this.values;if(r==="min"){const l=Math.min(a,s[1]-(this.step||1));this.updateValue([l,s[1]],"input")}else{const l=Math.max(a,s[0]+(this.step||1));this.updateValue([s[0],l],"input")}}else this.updateValue(a,"input")}_handlePointerUp(t){this.activeDrag&&(this.shadowRoot?.querySelector(".mov-slider__thumb--active")?.releasePointerCapture(t.pointerId),this.updateValue(this.value,"change"),this.activeDrag=null,this.draggingThumb=null,document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp))}updateValue(t,r="change"){this.readonly||this.disabled||(this.dual&&Array.isArray(t)?(t=[this.clampValue(t[0]),this.clampValue(t[1])],t[0]>t[1]&&(t=[t[1],t[0]])):!this.dual&&typeof t=="number"&&(t=this.clampValue(t)),this.value=t,this.dispatchEvent(new CustomEvent(r,{bubbles:!0,composed:!0,detail:{value:t}})))}handleTrackClick(t){if(this.disabled||this.readonly||!this.track)return;const r=this.track.getBoundingClientRect(),i=this.getValueFromPointer(t.clientX,t.clientY,r);if(this.dual){const a=this.values;Math.abs(i-a[0])<Math.abs(i-a[1])?this.updateValue([i,a[1]]):this.updateValue([a[0],i])}else this.updateValue(i)}renderTicks(){if(!this.showTicks)return null;const t=new Set;t.add(this.min),t.add(this.max);let r=this.tickStep;if(this.tickCount>1&&(r=Math.round((this.max-this.min)/(this.tickCount-1))),r>0){const i=Math.floor((this.max-this.min)/r);if(i<=100)for(let a=1;a<=i;a++){const s=this.min+a*r;s<this.max&&t.add(Number(s.toFixed(10)))}}return ie`<div class="mov-slider__ticks">${Array.from(t).sort((i,a)=>i-a).map(i=>{const a=this.getPercentage(i);return ie`
        <div class="mov-slider__tick" style="${this.vertical?`bottom: ${a}%`:`inset-inline-start: ${a}%`}">
          <div class="mov-slider__tick-label">${i}</div>
        </div>
      `})}</div>`}renderThumb(t,r){const i=this.getPercentage(t),a=this.focusedThumb===r,s=this.draggingThumb===r,l=this.vertical?`bottom: ${i}%`:`inset-inline-start: ${i}%`;return ie`
      <div
        class="mov-slider__thumb ${a?"mov-slider__thumb--focused":""} ${s?"mov-slider__thumb--active":""}"
        style="${l}"
        @pointerdown=${c=>this.handleThumbPointerDown(c,r)}
      >
        ${this.showTooltip?ie`<div class="mov-slider__tooltip">${t}</div>`:""}
      </div>
    `}renderProgress(){const t=this.values;if(this.dual){const i=this.getPercentage(t[0]),a=this.getPercentage(t[1]);return ie`<div
        class="mov-slider__progress"
        style="${this.vertical?`bottom: ${i}%; height: ${a-i}%`:`left: ${i}%; width: ${a-i}%`}"
      ></div>`}const r=this.getPercentage(t[1]);return ie`<div
      class="mov-slider__progress"
      style="${this.vertical?`bottom: 0; height: ${r}%`:`left: 0; width: ${r}%`}"
    ></div>`}render(){const t=this.values;return ie`
      <div
        class="mov-slider"
        part="base"
      >
        ${this.label?ie`<label class="mov-form-control__label">${this.label}</label>`:""}
        <div
          class="mov-slider__container"
          @click=${this.handleTrackClick}
        >
          <div class="mov-slider__track">
            ${this.renderProgress()} ${this.renderTicks()}
            ${this.dual?ie`${this.renderThumb(t[0],"min")}${this.renderThumb(t[1],"max")}`:this.renderThumb(t[1],"single")}
          </div>
        </div>
        ${this.helpText&&!this.invalid?ie`<div class="mov-form-control__helper">${this.helpText}</div>`:""}
        ${this.invalid&&this.errorMessage?ie`<div class="mov-form-control__error">${this.errorMessage}</div>`:""}
      </div>
    `}};z([j({type:String})],vt.prototype,"label",void 0),z([j({attribute:"help-text"})],vt.prototype,"helpText",void 0),z([j({attribute:"error-message"})],vt.prototype,"errorMessage",void 0),z([j({type:Number})],vt.prototype,"min",void 0),z([j({type:Number})],vt.prototype,"max",void 0),z([j({type:Number})],vt.prototype,"step",void 0),z([j({type:Object})],vt.prototype,"value",void 0),z([j({type:Boolean,reflect:!0})],vt.prototype,"dual",void 0),z([j({type:Boolean,reflect:!0})],vt.prototype,"vertical",void 0),z([j({type:Boolean,reflect:!0})],vt.prototype,"filled",void 0),z([j({reflect:!0})],vt.prototype,"size",void 0),z([j({type:Boolean,reflect:!0})],vt.prototype,"disabled",void 0),z([j({type:Boolean,reflect:!0})],vt.prototype,"readonly",void 0),z([j({type:Boolean,reflect:!0})],vt.prototype,"invalid",void 0),z([j({type:Boolean,attribute:"show-tooltip"})],vt.prototype,"showTooltip",void 0),z([j({type:Boolean,attribute:"show-ticks"})],vt.prototype,"showTicks",void 0),z([j({type:Number,attribute:"tick-step"})],vt.prototype,"tickStep",void 0),z([j({type:Number,attribute:"tick-count"})],vt.prototype,"tickCount",void 0),z([Ht()],vt.prototype,"focusedThumb",void 0),z([Ht()],vt.prototype,"draggingThumb",void 0),z([Mn(".mov-slider__track")],vt.prototype,"track",void 0),vt=z([lt("mov-slider")],vt);var L6=Mr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),R6=Mr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=l;var t=L6();function r(c){return t.relativeFirstCharacters.indexOf(c[0])>-1}function i(c){return c.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(u,f){return String.fromCharCode(f)})}function a(c){return URL.canParse(c)}function s(c){try{return decodeURIComponent(c)}catch{return c}}function l(c){if(!c)return t.BLANK_URL;var u,f=s(c.trim());do f=i(f).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),f=s(f),u=f.match(t.ctrlCharactersRegex)||f.match(t.htmlEntitiesRegex)||f.match(t.htmlCtrlEntityRegex)||f.match(t.whitespaceEscapeCharsRegex);while(u&&u.length>0);var p=f;if(!p)return t.BLANK_URL;if(r(p))return p;var w=p.trimStart(),b=w.match(t.urlSchemeRegex);if(!b)return p;var g=b[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(g))return t.BLANK_URL;var v=w.replace(/\\/g,"/");if(g==="mailto:"||g.includes("://"))return v;if(g==="http:"||g==="https:"){if(!a(v))return t.BLANK_URL;var _=new URL(v);return _.protocol=_.protocol.toLowerCase(),_.hostname=_.hostname.toLowerCase(),_.toString()}return v}})),P6=Mr(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define([],i):typeof e<"u"?i():(i(),r.FileSaver={})})(e,function(){"use strict";function r(f,p){return typeof p>"u"?p={autoBom:!1}:typeof p!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}function i(f,p,w){var b=new XMLHttpRequest;b.open("GET",f),b.responseType="blob",b.onload=function(){u(b.response,p,w)},b.onerror=function(){console.error("could not download file")},b.send()}function a(f){var p=new XMLHttpRequest;p.open("HEAD",f,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function s(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(p)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,c=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(f,p,w){var b=l.URL||l.webkitURL,g=document.createElement("a");p=p||f.name||"download",g.download=p,g.rel="noopener",typeof f=="string"?(g.href=f,g.origin===location.origin?s(g):a(g.href)?i(f,p,w):s(g,g.target="_blank")):(g.href=b.createObjectURL(f),setTimeout(function(){b.revokeObjectURL(g.href)},4e4),setTimeout(function(){s(g)},0))}:"msSaveOrOpenBlob"in navigator?function(f,p,w){if(p=p||f.name||"download",typeof f!="string")navigator.msSaveOrOpenBlob(r(f,w),p);else if(a(f))i(f,p,w);else{var b=document.createElement("a");b.href=f,b.target="_blank",setTimeout(function(){s(b)})}}:function(f,p,w,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof f=="string")return i(f,p,w);var g=f.type==="application/octet-stream",v=/constructor/i.test(l.HTMLElement)||l.safari,_=/CriOS\/[\d]+/.test(navigator.userAgent);if((_||g&&v||c)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var O=y.result;O=_?O:O.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=O:location=O,b=null},y.readAsDataURL(f)}else{var S=l.URL||l.webkitURL,M=S.createObjectURL(f);b?b.location=M:location.href=M,b=null,setTimeout(function(){S.revokeObjectURL(M)},4e4)}});l.saveAs=u.saveAs=u,typeof t<"u"&&(t.exports=u)})})),$6=Mr(((e,t)=>{(function(r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define([],r):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=r()})(function(){return(function r(i,a,s){function l(f,p){if(!a[f]){if(!i[f]){var w=typeof require=="function"&&require;if(!p&&w)return w(f,!0);if(c)return c(f,!0);var b=new Error("Cannot find module '"+f+"'");throw b.code="MODULE_NOT_FOUND",b}var g=a[f]={exports:{}};i[f][0].call(g.exports,function(v){var _=i[f][1][v];return l(_||v)},g,g.exports,r,i,a,s)}return a[f].exports}for(var c=typeof require=="function"&&require,u=0;u<s.length;u++)l(s[u]);return l})({1:[function(r,i,a){"use strict";var s=r("./utils"),l=r("./support"),c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(u){for(var f,p,w,b,g,v,_,y=[],S=0,M=u.length,O=M,T=s.getTypeOf(u)!=="string";S<u.length;)O=M-S,w=T?(f=u[S++],p=S<M?u[S++]:0,S<M?u[S++]:0):(f=u.charCodeAt(S++),p=S<M?u.charCodeAt(S++):0,S<M?u.charCodeAt(S++):0),b=f>>2,g=(3&f)<<4|p>>4,v=1<O?(15&p)<<2|w>>6:64,_=2<O?63&w:64,y.push(c.charAt(b)+c.charAt(g)+c.charAt(v)+c.charAt(_));return y.join("")},a.decode=function(u){var f,p,w,b,g,v,_=0,y=0,S="data:";if(u.substr(0,S.length)===S)throw new Error("Invalid base64 input, it looks like a data url.");var M,O=3*(u=u.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(u.charAt(u.length-1)===c.charAt(64)&&O--,u.charAt(u.length-2)===c.charAt(64)&&O--,O%1!=0)throw new Error("Invalid base64 input, bad content length.");for(M=l.uint8array?new Uint8Array(0|O):new Array(0|O);_<u.length;)f=c.indexOf(u.charAt(_++))<<2|(b=c.indexOf(u.charAt(_++)))>>4,p=(15&b)<<4|(g=c.indexOf(u.charAt(_++)))>>2,w=(3&g)<<6|(v=c.indexOf(u.charAt(_++))),M[y++]=f,g!==64&&(M[y++]=p),v!==64&&(M[y++]=w);return M}},{"./support":30,"./utils":32}],2:[function(r,i,a){"use strict";var s=r("./external"),l=r("./stream/DataWorker"),c=r("./stream/Crc32Probe"),u=r("./stream/DataLengthProbe");function f(p,w,b,g,v){this.compressedSize=p,this.uncompressedSize=w,this.crc32=b,this.compression=g,this.compressedContent=v}f.prototype={getContentWorker:function(){var p=new l(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),w=this;return p.on("end",function(){if(this.streamInfo.data_length!==w.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new l(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(p,w,b){return p.pipe(new c).pipe(new u("uncompressedSize")).pipe(w.compressWorker(b)).pipe(new u("compressedSize")).withStreamInfo("compression",w)},i.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,i,a){"use strict";var s=r("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(l){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,i,a){"use strict";var s=r("./utils"),l=(function(){for(var c,u=[],f=0;f<256;f++){c=f;for(var p=0;p<8;p++)c=1&c?3988292384^c>>>1:c>>>1;u[f]=c}return u})();i.exports=function(c,u){return c!==void 0&&c.length?s.getTypeOf(c)!=="string"?(function(f,p,w,b){var g=l,v=b+w;f^=-1;for(var _=b;_<v;_++)f=f>>>8^g[255&(f^p[_])];return-1^f})(0|u,c,c.length,0):(function(f,p,w,b){var g=l,v=b+w;f^=-1;for(var _=b;_<v;_++)f=f>>>8^g[255&(f^p.charCodeAt(_))];return-1^f})(0|u,c,c.length,0):0}},{"./utils":32}],5:[function(r,i,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(r,i,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:r("lie"),i.exports={Promise:s}},{lie:37}],7:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=r("pako"),c=r("./utils"),u=r("./stream/GenericWorker"),f=s?"uint8array":"array";function p(w,b){u.call(this,"FlateWorker/"+w),this._pako=null,this._pakoAction=w,this._pakoOptions=b,this.meta={}}a.magic="\b\0",c.inherits(p,u),p.prototype.processChunk=function(w){this.meta=w.meta,this._pako===null&&this._createPako(),this._pako.push(c.transformTo(f,w.data),!1)},p.prototype.flush=function(){u.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var w=this;this._pako.onData=function(b){w.push({data:b,meta:w.meta})}},a.compressWorker=function(w){return new p("Deflate",w)},a.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,i,a){"use strict";function s(g,v){var _,y="";for(_=0;_<v;_++)y+=String.fromCharCode(255&g),g>>>=8;return y}function l(g,v,_,y,S,M){var O,T,D=g.file,K=g.compression,V=M!==f.utf8encode,ne=c.transformTo("string",M(D.name)),W=c.transformTo("string",f.utf8encode(D.name)),me=D.comment,ke=c.transformTo("string",M(me)),P=c.transformTo("string",f.utf8encode(me)),J=W.length!==D.name.length,A=P.length!==me.length,ee="",Ce="",ue="",Re=D.dir,se=D.date,Ie={crc32:0,compressedSize:0,uncompressedSize:0};v&&!_||(Ie.crc32=g.crc32,Ie.compressedSize=g.compressedSize,Ie.uncompressedSize=g.uncompressedSize);var U=0;v&&(U|=8),V||!J&&!A||(U|=2048);var G=0,Me=0;Re&&(G|=16),S==="UNIX"?(Me=798,G|=(function(pe,Je){var wt=pe;return pe||(wt=Je?16893:33204),(65535&wt)<<16})(D.unixPermissions,Re)):(Me=20,G|=(function(pe){return 63&(pe||0)})(D.dosPermissions)),O=se.getUTCHours(),O<<=6,O|=se.getUTCMinutes(),O<<=5,O|=se.getUTCSeconds()/2,T=se.getUTCFullYear()-1980,T<<=4,T|=se.getUTCMonth()+1,T<<=5,T|=se.getUTCDate(),J&&(Ce=s(1,1)+s(p(ne),4)+W,ee+="up"+s(Ce.length,2)+Ce),A&&(ue=s(1,1)+s(p(ke),4)+P,ee+="uc"+s(ue.length,2)+ue);var ge="";return ge+=`
\0`,ge+=s(U,2),ge+=K.magic,ge+=s(O,2),ge+=s(T,2),ge+=s(Ie.crc32,4),ge+=s(Ie.compressedSize,4),ge+=s(Ie.uncompressedSize,4),ge+=s(ne.length,2),ge+=s(ee.length,2),{fileRecord:w.LOCAL_FILE_HEADER+ge+ne+ee,dirRecord:w.CENTRAL_FILE_HEADER+s(Me,2)+ge+s(ke.length,2)+"\0\0\0\0"+s(G,4)+s(y,4)+ne+ee+ke}}var c=r("../utils"),u=r("../stream/GenericWorker"),f=r("../utf8"),p=r("../crc32"),w=r("../signature");function b(g,v,_,y){u.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=_,this.encodeFileName=y,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}c.inherits(b,u),b.prototype.push=function(g){var v=g.meta.percent||0,_=this.entriesCount,y=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,u.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:_?(v+100*(_-y-1))/_:100}}))},b.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var v=this.streamFiles&&!g.file.dir;if(v){var _=l(g,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(g){this.accumulate=!1;var v=this.streamFiles&&!g.file.dir,_=l(g,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),v)this.push({data:(function(y){return w.DATA_DESCRIPTOR+s(y.crc32,4)+s(y.compressedSize,4)+s(y.uncompressedSize,4)})(g),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var g=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var _=this.bytesWritten-g,y=(function(S,M,O,T,D){var K=c.transformTo("string",D(T));return w.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(S,2)+s(S,2)+s(M,4)+s(O,4)+s(K.length,2)+K})(this.dirRecords.length,_,g,this.zipComment,this.encodeFileName);this.push({data:y,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(g){this._sources.push(g);var v=this;return g.on("data",function(_){v.processChunk(_)}),g.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),g.on("error",function(_){v.error(_)}),this},b.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(g){var v=this._sources;if(!u.prototype.error.call(this,g))return!1;for(var _=0;_<v.length;_++)try{v[_].error(g)}catch{}return!0},b.prototype.lock=function(){u.prototype.lock.call(this);for(var g=this._sources,v=0;v<g.length;v++)g[v].lock()},i.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,i,a){"use strict";var s=r("../compressions"),l=r("./ZipFileWorker");a.generateWorker=function(c,u,f){var p=new l(u.streamFiles,f,u.platform,u.encodeFileName),w=0;try{c.forEach(function(b,g){w++;var v=(function(M,O){var T=M||O,D=s[T];if(!D)throw new Error(T+" is not a valid compression method !");return D})(g.options.compression,u.compression),_=g.options.compressionOptions||u.compressionOptions||{},y=g.dir,S=g.date;g._compressWorker(v,_).withStreamInfo("file",{name:b,dir:y,date:S,comment:g.comment||"",unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions}).pipe(p)}),p.entriesCount=w}catch(b){p.error(b)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,i,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new s;for(var c in this)typeof this[c]!="function"&&(l[c]=this[c]);return l}}(s.prototype=r("./object")).loadAsync=r("./load"),s.support=r("./support"),s.defaults=r("./defaults"),s.version="3.9.1",s.loadAsync=function(l,c){return new s().loadAsync(l,c)},s.external=r("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,i,a){"use strict";var s=r("./utils"),l=r("./external"),c=r("./utf8"),u=r("./zipEntries"),f=r("./stream/Crc32Probe"),p=r("./nodejsUtils");function w(b){return new l.Promise(function(g,v){var _=b.decompressed.getContentWorker().pipe(new f);_.on("error",function(y){v(y)}).on("end",function(){_.streamInfo.crc32!==b.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):g()}).resume()})}i.exports=function(b,g){var v=this;return g=s.extend(g||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:c.utf8decode}),p.isNode&&p.isStream(b)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",b,!0,g.optimizedBinaryString,g.base64).then(function(_){var y=new u(g);return y.load(_),y}).then(function(_){var y=[l.Promise.resolve(_)],S=_.files;if(g.checkCRC32)for(var M=0;M<S.length;M++)y.push(w(S[M]));return l.Promise.all(y)}).then(function(_){for(var y=_.shift(),S=y.files,M=0;M<S.length;M++){var O=S[M],T=O.fileNameStr,D=s.resolve(O.fileNameStr);v.file(D,O.decompressed,{binary:!0,optimizedBinaryString:!0,date:O.date,dir:O.dir,comment:O.fileCommentStr.length?O.fileCommentStr:null,unixPermissions:O.unixPermissions,dosPermissions:O.dosPermissions,createFolders:g.createFolders}),O.dir||(v.file(D).unsafeOriginalName=T)}return y.zipComment.length&&(v.comment=y.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,i,a){"use strict";var s=r("../utils"),l=r("../stream/GenericWorker");function c(u,f){l.call(this,"Nodejs stream input adapter for "+u),this._upstreamEnded=!1,this._bindStream(f)}s.inherits(c,l),c.prototype._bindStream=function(u){var f=this;(this._stream=u).pause(),u.on("data",function(p){f.push({data:p,meta:{percent:0}})}).on("error",function(p){f.isPaused?this.generatedError=p:f.error(p)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},c.prototype.pause=function(){return!!l.prototype.pause.call(this)&&(this._stream.pause(),!0)},c.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=c},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,i,a){"use strict";var s=r("readable-stream").Readable;function l(c,u,f){s.call(this,u),this._helper=c;var p=this;c.on("data",function(w,b){p.push(w)||p._helper.pause(),f&&f(b)}).on("error",function(w){p.emit("error",w)}).on("end",function(){p.push(null)})}r("../utils").inherits(l,s),l.prototype._read=function(){this._helper.resume()},i.exports=l},{"../utils":32,"readable-stream":16}],14:[function(r,i,a){"use strict";i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,l);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,l)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var l=new Buffer(s);return l.fill(0),l},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(r,i,a){"use strict";function s(T,D,K){var V,ne=c.getTypeOf(D),W=c.extend(K||{},p);W.date=W.date||new Date,W.compression!==null&&(W.compression=W.compression.toUpperCase()),typeof W.unixPermissions=="string"&&(W.unixPermissions=parseInt(W.unixPermissions,8)),W.unixPermissions&&16384&W.unixPermissions&&(W.dir=!0),W.dosPermissions&&16&W.dosPermissions&&(W.dir=!0),W.dir&&(T=S(T)),W.createFolders&&(V=y(T))&&M.call(this,V,!0);var me=ne==="string"&&W.binary===!1&&W.base64===!1;K&&K.binary!==void 0||(W.binary=!me),(D instanceof w&&D.uncompressedSize===0||W.dir||!D||D.length===0)&&(W.base64=!1,W.binary=!0,D="",W.compression="STORE",ne="string");var ke=null;ke=D instanceof w||D instanceof u?D:v.isNode&&v.isStream(D)?new _(T,D):c.prepareContent(T,D,W.binary,W.optimizedBinaryString,W.base64);var P=new b(T,ke,W);this.files[T]=P}var l=r("./utf8"),c=r("./utils"),u=r("./stream/GenericWorker"),f=r("./stream/StreamHelper"),p=r("./defaults"),w=r("./compressedObject"),b=r("./zipObject"),g=r("./generate"),v=r("./nodejsUtils"),_=r("./nodejs/NodejsStreamInputAdapter"),y=function(T){T.slice(-1)==="/"&&(T=T.substring(0,T.length-1));var D=T.lastIndexOf("/");return 0<D?T.substring(0,D):""},S=function(T){return T.slice(-1)!=="/"&&(T+="/"),T},M=function(T,D){return D=D!==void 0?D:p.createFolders,T=S(T),this.files[T]||s.call(this,T,null,{dir:!0,createFolders:D}),this.files[T]};function O(T){return Object.prototype.toString.call(T)==="[object RegExp]"}i.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(T){var D,K,V;for(D in this.files)V=this.files[D],(K=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&T(K,V)},filter:function(T){var D=[];return this.forEach(function(K,V){T(K,V)&&D.push(V)}),D},file:function(T,D,K){if(arguments.length!==1)return T=this.root+T,s.call(this,T,D,K),this;if(O(T)){var V=T;return this.filter(function(W,me){return!me.dir&&V.test(W)})}var ne=this.files[this.root+T];return ne&&!ne.dir?ne:null},folder:function(T){if(!T)return this;if(O(T))return this.filter(function(ne,W){return W.dir&&T.test(ne)});var D=this.root+T,K=M.call(this,D),V=this.clone();return V.root=K.name,V},remove:function(T){T=this.root+T;var D=this.files[T];if(D||(T.slice(-1)!=="/"&&(T+="/"),D=this.files[T]),D&&!D.dir)delete this.files[T];else for(var K=this.filter(function(ne,W){return W.name.slice(0,T.length)===T}),V=0;V<K.length;V++)delete this.files[K[V].name];return this},generate:function(T){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(T){var D,K={};try{if((K=c.extend(T||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:l.utf8encode})).type=K.type.toLowerCase(),K.compression=K.compression.toUpperCase(),K.type==="binarystring"&&(K.type="string"),!K.type)throw new Error("No output type specified.");c.checkSupport(K.type),K.platform!=="darwin"&&K.platform!=="freebsd"&&K.platform!=="linux"&&K.platform!=="sunos"||(K.platform="UNIX"),K.platform==="win32"&&(K.platform="DOS");var V=K.comment||this.comment||"";D=g.generateWorker(this,K,V)}catch(ne){(D=new u("error")).error(ne)}return new f(D,K.type||"string",K.mimeType)},generateAsync:function(T,D){return this.generateInternalStream(T).accumulate(D)},generateNodeStream:function(T,D){return(T=T||{}).type||(T.type="nodebuffer"),this.generateInternalStream(T).toNodejsStream(D)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,i,a){i.exports=r("stream")},{stream:void 0}],17:[function(r,i,a){"use strict";var s=r("./DataReader");function l(c){s.call(this,c);for(var u=0;u<this.data.length;u++)c[u]=255&c[u]}r("../utils").inherits(l,s),l.prototype.byteAt=function(c){return this.data[this.zero+c]},l.prototype.lastIndexOfSignature=function(c){for(var u=c.charCodeAt(0),f=c.charCodeAt(1),p=c.charCodeAt(2),w=c.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===u&&this.data[b+1]===f&&this.data[b+2]===p&&this.data[b+3]===w)return b-this.zero;return-1},l.prototype.readAndCheckSignature=function(c){var u=c.charCodeAt(0),f=c.charCodeAt(1),p=c.charCodeAt(2),w=c.charCodeAt(3),b=this.readData(4);return u===b[0]&&f===b[1]&&p===b[2]&&w===b[3]},l.prototype.readData=function(c){if(this.checkOffset(c),c===0)return[];var u=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,u},i.exports=l},{"../utils":32,"./DataReader":18}],18:[function(r,i,a){"use strict";var s=r("../utils");function l(c){this.data=c,this.length=c.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(c){this.checkIndex(this.index+c)},checkIndex:function(c){if(this.length<this.zero+c||c<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+c+"). Corrupted zip ?")},setIndex:function(c){this.checkIndex(c),this.index=c},skip:function(c){this.setIndex(this.index+c)},byteAt:function(c){},readInt:function(c){var u,f=0;for(this.checkOffset(c),u=this.index+c-1;u>=this.index;u--)f=(f<<8)+this.byteAt(u);return this.index+=c,f},readString:function(c){return s.transformTo("string",this.readData(c))},readData:function(c){},lastIndexOfSignature:function(c){},readAndCheckSignature:function(c){},readDate:function(){var c=this.readInt(4);return new Date(Date.UTC(1980+(c>>25&127),(c>>21&15)-1,c>>16&31,c>>11&31,c>>5&63,(31&c)<<1))}},i.exports=l},{"../utils":32}],19:[function(r,i,a){"use strict";var s=r("./Uint8ArrayReader");function l(c){s.call(this,c)}r("../utils").inherits(l,s),l.prototype.readData=function(c){this.checkOffset(c);var u=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,u},i.exports=l},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,i,a){"use strict";var s=r("./DataReader");function l(c){s.call(this,c)}r("../utils").inherits(l,s),l.prototype.byteAt=function(c){return this.data.charCodeAt(this.zero+c)},l.prototype.lastIndexOfSignature=function(c){return this.data.lastIndexOf(c)-this.zero},l.prototype.readAndCheckSignature=function(c){return c===this.readData(4)},l.prototype.readData=function(c){this.checkOffset(c);var u=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,u},i.exports=l},{"../utils":32,"./DataReader":18}],21:[function(r,i,a){"use strict";var s=r("./ArrayReader");function l(c){s.call(this,c)}r("../utils").inherits(l,s),l.prototype.readData=function(c){if(this.checkOffset(c),c===0)return new Uint8Array(0);var u=this.data.subarray(this.zero+this.index,this.zero+this.index+c);return this.index+=c,u},i.exports=l},{"../utils":32,"./ArrayReader":17}],22:[function(r,i,a){"use strict";var s=r("../utils"),l=r("../support"),c=r("./ArrayReader"),u=r("./StringReader"),f=r("./NodeBufferReader"),p=r("./Uint8ArrayReader");i.exports=function(w){var b=s.getTypeOf(w);return s.checkSupport(b),b!=="string"||l.uint8array?b==="nodebuffer"?new f(w):l.uint8array?new p(s.transformTo("uint8array",w)):new c(s.transformTo("array",w)):new u(w)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,i,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,i,a){"use strict";var s=r("./GenericWorker"),l=r("../utils");function c(u){s.call(this,"ConvertWorker to "+u),this.destType=u}l.inherits(c,s),c.prototype.processChunk=function(u){this.push({data:l.transformTo(this.destType,u.data),meta:u.meta})},i.exports=c},{"../utils":32,"./GenericWorker":28}],25:[function(r,i,a){"use strict";var s=r("./GenericWorker"),l=r("../crc32");function c(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(c,s),c.prototype.processChunk=function(u){this.streamInfo.crc32=l(u.data,this.streamInfo.crc32||0),this.push(u)},i.exports=c},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./GenericWorker");function c(u){l.call(this,"DataLengthProbe for "+u),this.propName=u,this.withStreamInfo(u,0)}s.inherits(c,l),c.prototype.processChunk=function(u){if(u){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+u.data.length}l.prototype.processChunk.call(this,u)},i.exports=c},{"../utils":32,"./GenericWorker":28}],27:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./GenericWorker");function c(u){l.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,u.then(function(p){f.dataIsReady=!0,f.data=p,f.max=p&&p.length||0,f.type=s.getTypeOf(p),f.isPaused||f._tickAndRepeat()},function(p){f.error(p)})}s.inherits(c,l),c.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},c.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},c.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},c.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var u=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":u=this.data.substring(this.index,f);break;case"uint8array":u=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":u=this.data.slice(this.index,f)}return this.index=f,this.push({data:u,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=c},{"../utils":32,"./GenericWorker":28}],28:[function(r,i,a){"use strict";function s(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return!this.isFinished&&(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,c){return this._listeners[l].push(c),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,c){if(this._listeners[l])for(var u=0;u<this._listeners[l].length;u++)this._listeners[l][u].call(this,c)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var c=this;return l.on("data",function(u){c.processChunk(u)}),l.on("end",function(){c.end()}),l.on("error",function(u){c.error(u)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var l=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,c){return this.extraStreamInfo[l]=c,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},i.exports=s},{}],29:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./ConvertWorker"),c=r("./GenericWorker"),u=r("../base64"),f=r("../support"),p=r("../external"),w=null;if(f.nodestream)try{w=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(v,_){return new p.Promise(function(y,S){var M=[],O=v._internalType,T=v._outputType,D=v._mimeType;v.on("data",function(K,V){M.push(K),_&&_(V)}).on("error",function(K){M=[],S(K)}).on("end",function(){try{y((function(K,V,ne){switch(K){case"blob":return s.newBlob(s.transformTo("arraybuffer",V),ne);case"base64":return u.encode(V);default:return s.transformTo(K,V)}})(T,(function(K,V){var ne,W=0,me=null,ke=0;for(ne=0;ne<V.length;ne++)ke+=V[ne].length;switch(K){case"string":return V.join("");case"array":return Array.prototype.concat.apply([],V);case"uint8array":for(me=new Uint8Array(ke),ne=0;ne<V.length;ne++)me.set(V[ne],W),W+=V[ne].length;return me;case"nodebuffer":return Buffer.concat(V);default:throw new Error("concat : unsupported type '"+K+"'")}})(O,M),D))}catch(K){S(K)}M=[]}).resume()})}function g(v,_,y){var S=_;switch(_){case"blob":case"arraybuffer":S="uint8array";break;case"base64":S="string"}try{this._internalType=S,this._outputType=_,this._mimeType=y,s.checkSupport(S),this._worker=v.pipe(new l(S)),v.lock()}catch(M){this._worker=new c("error"),this._worker.error(M)}}g.prototype={accumulate:function(v){return b(this,v)},on:function(v,_){var y=this;return v==="data"?this._worker.on(v,function(S){_.call(y,S.data,S.meta)}):this._worker.on(v,function(){s.delay(_,arguments,y)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new w(this,{objectMode:this._outputType!=="nodebuffer"},v)}},i.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,i,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var l=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);l.append(s),a.blob=l.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!r("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(r,i,a){"use strict";for(var s=r("./utils"),l=r("./support"),c=r("./nodejsUtils"),u=r("./stream/GenericWorker"),f=new Array(256),p=0;p<256;p++)f[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;f[254]=f[254]=1;function w(){u.call(this,"utf-8 decode"),this.leftOver=null}function b(){u.call(this,"utf-8 encode")}a.utf8encode=function(g){return l.nodebuffer?c.newBufferFrom(g,"utf-8"):(function(v){var _,y,S,M,O,T=v.length,D=0;for(M=0;M<T;M++)(64512&(y=v.charCodeAt(M)))==55296&&M+1<T&&(64512&(S=v.charCodeAt(M+1)))==56320&&(y=65536+(y-55296<<10)+(S-56320),M++),D+=y<128?1:y<2048?2:y<65536?3:4;for(_=l.uint8array?new Uint8Array(D):new Array(D),M=O=0;O<D;M++)(64512&(y=v.charCodeAt(M)))==55296&&M+1<T&&(64512&(S=v.charCodeAt(M+1)))==56320&&(y=65536+(y-55296<<10)+(S-56320),M++),y<128?_[O++]=y:(y<2048?_[O++]=192|y>>>6:(y<65536?_[O++]=224|y>>>12:(_[O++]=240|y>>>18,_[O++]=128|y>>>12&63),_[O++]=128|y>>>6&63),_[O++]=128|63&y);return _})(g)},a.utf8decode=function(g){return l.nodebuffer?s.transformTo("nodebuffer",g).toString("utf-8"):(function(v){var _,y,S,M,O=v.length,T=new Array(2*O);for(_=y=0;_<O;)if((S=v[_++])<128)T[y++]=S;else if(4<(M=f[S]))T[y++]=65533,_+=M-1;else{for(S&=M===2?31:M===3?15:7;1<M&&_<O;)S=S<<6|63&v[_++],M--;1<M?T[y++]=65533:S<65536?T[y++]=S:(S-=65536,T[y++]=55296|S>>10&1023,T[y++]=56320|1023&S)}return T.length!==y&&(T.subarray?T=T.subarray(0,y):T.length=y),s.applyFromCharCode(T)})(g=s.transformTo(l.uint8array?"uint8array":"array",g))},s.inherits(w,u),w.prototype.processChunk=function(g){var v=s.transformTo(l.uint8array?"uint8array":"array",g.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var _=v;(v=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),v.set(_,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var y=(function(M,O){var T;for((O=O||M.length)>M.length&&(O=M.length),T=O-1;0<=T&&(192&M[T])==128;)T--;return T<0||T===0?O:T+f[M[T]]>O?T:O})(v),S=v;y!==v.length&&(l.uint8array?(S=v.subarray(0,y),this.leftOver=v.subarray(y,v.length)):(S=v.slice(0,y),this.leftOver=v.slice(y,v.length))),this.push({data:a.utf8decode(S),meta:g.meta})},w.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=w,s.inherits(b,u),b.prototype.processChunk=function(g){this.push({data:a.utf8encode(g.data),meta:g.meta})},a.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,i,a){"use strict";var s=r("./support"),l=r("./base64"),c=r("./nodejsUtils"),u=r("set-immediate-shim"),f=r("./external");function p(y){return y}function w(y,S){for(var M=0;M<y.length;++M)S[M]=255&y.charCodeAt(M);return S}a.newBlob=function(y,S){a.checkSupport("blob");try{return new Blob([y],{type:S})}catch{try{var M=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return M.append(y),M.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var b={stringifyByChunk:function(y,S,M){var O=[],T=0,D=y.length;if(D<=M)return String.fromCharCode.apply(null,y);for(;T<D;)S==="array"||S==="nodebuffer"?O.push(String.fromCharCode.apply(null,y.slice(T,Math.min(T+M,D)))):O.push(String.fromCharCode.apply(null,y.subarray(T,Math.min(T+M,D)))),T+=M;return O.join("")},stringifyByChar:function(y){for(var S="",M=0;M<y.length;M++)S+=String.fromCharCode(y[M]);return S},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,c.allocBuffer(1)).length===1}catch{return!1}})()}};function g(y){var S=65536,M=a.getTypeOf(y),O=!0;if(M==="uint8array"?O=b.applyCanBeUsed.uint8array:M==="nodebuffer"&&(O=b.applyCanBeUsed.nodebuffer),O)for(;1<S;)try{return b.stringifyByChunk(y,M,S)}catch{S=Math.floor(S/2)}return b.stringifyByChar(y)}function v(y,S){for(var M=0;M<y.length;M++)S[M]=y[M];return S}a.applyFromCharCode=g;var _={};_.string={string:p,array:function(y){return w(y,new Array(y.length))},arraybuffer:function(y){return _.string.uint8array(y).buffer},uint8array:function(y){return w(y,new Uint8Array(y.length))},nodebuffer:function(y){return w(y,c.allocBuffer(y.length))}},_.array={string:g,array:p,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return c.newBufferFrom(y)}},_.arraybuffer={string:function(y){return g(new Uint8Array(y))},array:function(y){return v(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:p,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return c.newBufferFrom(new Uint8Array(y))}},_.uint8array={string:g,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:p,nodebuffer:function(y){return c.newBufferFrom(y)}},_.nodebuffer={string:g,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return _.nodebuffer.uint8array(y).buffer},uint8array:function(y){return v(y,new Uint8Array(y.length))},nodebuffer:p},a.transformTo=function(y,S){return S=S||"",y?(a.checkSupport(y),_[a.getTypeOf(S)][y](S)):S},a.resolve=function(y){for(var S=y.split("/"),M=[],O=0;O<S.length;O++){var T=S[O];T==="."||T===""&&O!==0&&O!==S.length-1||(T===".."?M.pop():M.push(T))}return M.join("/")},a.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":s.nodebuffer&&c.isBuffer(y)?"nodebuffer":s.uint8array&&y instanceof Uint8Array?"uint8array":s.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(y){if(!s[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(y){var S,M,O="";for(M=0;M<(y||"").length;M++)O+="\\x"+((S=y.charCodeAt(M))<16?"0":"")+S.toString(16).toUpperCase();return O},a.delay=function(y,S,M){u(function(){y.apply(M||null,S||[])})},a.inherits=function(y,S){function M(){}M.prototype=S.prototype,y.prototype=new M},a.extend=function(){var y,S,M={};for(y=0;y<arguments.length;y++)for(S in arguments[y])arguments[y].hasOwnProperty(S)&&M[S]===void 0&&(M[S]=arguments[y][S]);return M},a.prepareContent=function(y,S,M,O,T){return f.Promise.resolve(S).then(function(D){return s.blob&&(D instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(D))!==-1)&&typeof FileReader<"u"?new f.Promise(function(K,V){var ne=new FileReader;ne.onload=function(W){K(W.target.result)},ne.onerror=function(W){V(W.target.error)},ne.readAsArrayBuffer(D)}):D}).then(function(D){var K=a.getTypeOf(D);return K?(K==="arraybuffer"?D=a.transformTo("uint8array",D):K==="string"&&(T?D=l.decode(D):M&&O!==!0&&(D=(function(V){return w(V,s.uint8array?new Uint8Array(V.length):new Array(V.length))})(D))),D):f.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),l=r("./utils"),c=r("./signature"),u=r("./zipEntry"),f=(r("./utf8"),r("./support"));function p(w){this.files=[],this.loadOptions=w}p.prototype={checkSignature:function(w){if(!this.reader.readAndCheckSignature(w)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(b)+", expected "+l.pretty(w)+")")}},isSignature:function(w,b){var g=this.reader.index;this.reader.setIndex(w);var v=this.reader.readString(4)===b;return this.reader.setIndex(g),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var w=this.reader.readData(this.zipCommentLength),b=f.uint8array?"uint8array":"array",g=l.transformTo(b,w);this.zipComment=this.loadOptions.decodeFileName(g)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var w,b,g,v=this.zip64EndOfCentralSize-44;0<v;)w=this.reader.readInt(2),b=this.reader.readInt(4),g=this.reader.readData(b),this.zip64ExtensibleData[w]={id:w,length:b,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var w,b;for(w=0;w<this.files.length;w++)b=this.files[w],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(c.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var w;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(c.CENTRAL_FILE_HEADER);)(w=new u({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(w);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var w=this.reader.lastIndexOfSignature(c.CENTRAL_DIRECTORY_END);if(w<0)throw this.isSignature(0,c.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(w);var b=w;if(this.checkSignature(c.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,(w=this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(w),this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,c.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var g=this.centralDirOffset+this.centralDirSize;this.zip64&&(g+=20,g+=12+this.zip64EndOfCentralSize);var v=b-g;if(0<v)this.isSignature(b,c.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(w){this.reader=s(w)},load:function(w){this.prepareReader(w),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),l=r("./utils"),c=r("./compressedObject"),u=r("./crc32"),f=r("./utf8"),p=r("./compressions"),w=r("./support");function b(g,v){this.options=g,this.loadOptions=v}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(g){var v,_;if(g.skip(22),this.fileNameLength=g.readInt(2),_=g.readInt(2),this.fileName=g.readData(this.fileNameLength),g.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=(function(y){for(var S in p)if(p.hasOwnProperty(S)&&p[S].magic===y)return p[S];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new c(this.compressedSize,this.uncompressedSize,this.crc32,v,g.readData(this.compressedSize))},readCentralPart:function(g){this.versionMadeBy=g.readInt(2),g.skip(2),this.bitFlag=g.readInt(2),this.compressionMethod=g.readString(2),this.date=g.readDate(),this.crc32=g.readInt(4),this.compressedSize=g.readInt(4),this.uncompressedSize=g.readInt(4);var v=g.readInt(2);if(this.extraFieldsLength=g.readInt(2),this.fileCommentLength=g.readInt(2),this.diskNumberStart=g.readInt(2),this.internalFileAttributes=g.readInt(2),this.externalFileAttributes=g.readInt(4),this.localHeaderOffset=g.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");g.skip(v),this.readExtraFields(g),this.parseZIP64ExtraField(g),this.fileComment=g.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var g=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),g==0&&(this.dosPermissions=63&this.externalFileAttributes),g==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(g){if(this.extraFields[1]){var v=s(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(g){var v,_,y,S=g.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});g.index+4<S;)v=g.readInt(2),_=g.readInt(2),y=g.readData(_),this.extraFields[v]={id:v,length:_,value:y};g.setIndex(S)},handleUTF8:function(){var g=w.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var _=l.transformTo(g,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var S=l.transformTo(g,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(S)}}},findExtraFieldUnicodePath:function(){var g=this.extraFields[28789];if(g){var v=s(g.value);return v.readInt(1)!==1||u(this.fileName)!==v.readInt(4)?null:f.utf8decode(v.readData(g.length-5))}return null},findExtraFieldUnicodeComment:function(){var g=this.extraFields[25461];if(g){var v=s(g.value);return v.readInt(1)!==1||u(this.fileComment)!==v.readInt(4)?null:f.utf8decode(v.readData(g.length-5))}return null}},i.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,i,a){"use strict";function s(v,_,y){this.name=v,this.dir=y.dir,this.date=y.date,this.comment=y.comment,this.unixPermissions=y.unixPermissions,this.dosPermissions=y.dosPermissions,this._data=_,this._dataBinary=y.binary,this.options={compression:y.compression,compressionOptions:y.compressionOptions}}var l=r("./stream/StreamHelper"),c=r("./stream/DataWorker"),u=r("./utf8"),f=r("./compressedObject"),p=r("./stream/GenericWorker");s.prototype={internalStream:function(v){var _=null,y="string";try{if(!v)throw new Error("No output type specified.");var S=(y=v.toLowerCase())==="string"||y==="text";y!=="binarystring"&&y!=="text"||(y="string"),_=this._decompressWorker();var M=!this._dataBinary;M&&!S&&(_=_.pipe(new u.Utf8EncodeWorker)),!M&&S&&(_=_.pipe(new u.Utf8DecodeWorker))}catch(O){(_=new p("error")).error(O)}return new l(_,y,"")},async:function(v,_){return this.internalStream(v).accumulate(_)},nodeStream:function(v,_){return this.internalStream(v||"nodebuffer").toNodejsStream(_)},_compressWorker:function(v,_){if(this._data instanceof f&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var y=this._decompressWorker();return this._dataBinary||(y=y.pipe(new u.Utf8EncodeWorker)),f.createWorkerFrom(y,v,_)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof p?this._data:new c(this._data)}};for(var w=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},g=0;g<w.length;g++)s.prototype[w[g]]=b;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,i,a){(function(s){"use strict";var l,c,u=s.MutationObserver||s.WebKitMutationObserver;if(u){var f=0,p=new u(v),w=s.document.createTextNode("");p.observe(w,{characterData:!0}),l=function(){w.data=f=++f%2}}else if(s.setImmediate||s.MessageChannel===void 0)l="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var _=s.document.createElement("script");_.onreadystatechange=function(){v(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},s.document.documentElement.appendChild(_)}:function(){setTimeout(v,0)};else{var b=new s.MessageChannel;b.port1.onmessage=v,l=function(){b.port2.postMessage(0)}}var g=[];function v(){var _,y;c=!0;for(var S=g.length;S;){for(y=g,g=[],_=-1;++_<S;)y[_]();S=g.length}c=!1}i.exports=function(_){g.push(_)!==1||c||l()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,i,a){"use strict";var s=r("immediate");function l(){}var c={},u=["REJECTED"],f=["FULFILLED"],p=["PENDING"];function w(S){if(typeof S!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,S!==l&&_(this,S)}function b(S,M,O){this.promise=S,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof O=="function"&&(this.onRejected=O,this.callRejected=this.otherCallRejected)}function g(S,M,O){s(function(){var T;try{T=M(O)}catch(D){return c.reject(S,D)}T===S?c.reject(S,new TypeError("Cannot resolve promise with itself")):c.resolve(S,T)})}function v(S){var M=S&&S.then;if(S&&(typeof S=="object"||typeof S=="function")&&typeof M=="function")return function(){M.apply(S,arguments)}}function _(S,M){var O=!1;function T(V){O||(O=!0,c.reject(S,V))}function D(V){O||(O=!0,c.resolve(S,V))}var K=y(function(){M(D,T)});K.status==="error"&&T(K.value)}function y(S,M){var O={};try{O.value=S(M),O.status="success"}catch(T){O.status="error",O.value=T}return O}(i.exports=w).prototype.finally=function(S){if(typeof S!="function")return this;var M=this.constructor;return this.then(function(O){return M.resolve(S()).then(function(){return O})},function(O){return M.resolve(S()).then(function(){throw O})})},w.prototype.catch=function(S){return this.then(null,S)},w.prototype.then=function(S,M){if(typeof S!="function"&&this.state===f||typeof M!="function"&&this.state===u)return this;var O=new this.constructor(l);return this.state!==p?g(O,this.state===f?S:M,this.outcome):this.queue.push(new b(O,S,M)),O},b.prototype.callFulfilled=function(S){c.resolve(this.promise,S)},b.prototype.otherCallFulfilled=function(S){g(this.promise,this.onFulfilled,S)},b.prototype.callRejected=function(S){c.reject(this.promise,S)},b.prototype.otherCallRejected=function(S){g(this.promise,this.onRejected,S)},c.resolve=function(S,M){var O=y(v,M);if(O.status==="error")return c.reject(S,O.value);var T=O.value;if(T)_(S,T);else{S.state=f,S.outcome=M;for(var D=-1,K=S.queue.length;++D<K;)S.queue[D].callFulfilled(M)}return S},c.reject=function(S,M){S.state=u,S.outcome=M;for(var O=-1,T=S.queue.length;++O<T;)S.queue[O].callRejected(M);return S},w.resolve=function(S){return S instanceof this?S:c.resolve(new this(l),S)},w.reject=function(S){var M=new this(l);return c.reject(M,S)},w.all=function(S){var M=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var O=S.length,T=!1;if(!O)return this.resolve([]);for(var D=new Array(O),K=0,V=-1,ne=new this(l);++V<O;)W(S[V],V);return ne;function W(me,ke){M.resolve(me).then(function(P){D[ke]=P,++K!==O||T||(T=!0,c.resolve(ne,D))},function(P){T||(T=!0,c.reject(ne,P))})}},w.race=function(S){var M=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var O=S.length,T=!1;if(!O)return this.resolve([]);for(var D=-1,K=new this(l);++D<O;)V=S[D],M.resolve(V).then(function(ne){T||(T=!0,c.resolve(K,ne))},function(ne){T||(T=!0,c.reject(K,ne))});var V;return K}},{immediate:36}],38:[function(r,i,a){"use strict";var s={};(0,r("./lib/utils/common").assign)(s,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,i,a){"use strict";var s=r("./zlib/deflate"),l=r("./utils/common"),c=r("./utils/strings"),u=r("./zlib/messages"),f=r("./zlib/zstream"),p=Object.prototype.toString,w=0,b=-1,g=0,v=8;function _(S){if(!(this instanceof _))return new _(S);this.options=l.assign({level:b,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},S||{});var M=this.options;M.raw&&0<M.windowBits?M.windowBits=-M.windowBits:M.gzip&&0<M.windowBits&&M.windowBits<16&&(M.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var O=s.deflateInit2(this.strm,M.level,M.method,M.windowBits,M.memLevel,M.strategy);if(O!==w)throw new Error(u[O]);if(M.header&&s.deflateSetHeader(this.strm,M.header),M.dictionary){var T;if(T=typeof M.dictionary=="string"?c.string2buf(M.dictionary):p.call(M.dictionary)==="[object ArrayBuffer]"?new Uint8Array(M.dictionary):M.dictionary,(O=s.deflateSetDictionary(this.strm,T))!==w)throw new Error(u[O]);this._dict_set=!0}}function y(S,M){var O=new _(M);if(O.push(S,!0),O.err)throw O.msg||u[O.err];return O.result}_.prototype.push=function(S,M){var O,T,D=this.strm,K=this.options.chunkSize;if(this.ended)return!1;T=M===~~M?M:M===!0?4:0,typeof S=="string"?D.input=c.string2buf(S):p.call(S)==="[object ArrayBuffer]"?D.input=new Uint8Array(S):D.input=S,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new l.Buf8(K),D.next_out=0,D.avail_out=K),(O=s.deflate(D,T))!==1&&O!==w)return this.onEnd(O),!(this.ended=!0);D.avail_out!==0&&(D.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(c.buf2binstring(l.shrinkBuf(D.output,D.next_out))):this.onData(l.shrinkBuf(D.output,D.next_out)))}while((0<D.avail_in||D.avail_out===0)&&O!==1);return T===4?(O=s.deflateEnd(this.strm),this.onEnd(O),this.ended=!0,O===w):T!==2||(this.onEnd(w),!(D.avail_out=0))},_.prototype.onData=function(S){this.chunks.push(S)},_.prototype.onEnd=function(S){S===w&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},a.Deflate=_,a.deflate=y,a.deflateRaw=function(S,M){return(M=M||{}).raw=!0,y(S,M)},a.gzip=function(S,M){return(M=M||{}).gzip=!0,y(S,M)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,i,a){"use strict";var s=r("./zlib/inflate"),l=r("./utils/common"),c=r("./utils/strings"),u=r("./zlib/constants"),f=r("./zlib/messages"),p=r("./zlib/zstream"),w=r("./zlib/gzheader"),b=Object.prototype.toString;function g(_){if(!(this instanceof g))return new g(_);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},_||{});var y=this.options;y.raw&&0<=y.windowBits&&y.windowBits<16&&(y.windowBits=-y.windowBits,y.windowBits===0&&(y.windowBits=-15)),!(0<=y.windowBits&&y.windowBits<16)||_&&_.windowBits||(y.windowBits+=32),15<y.windowBits&&y.windowBits<48&&(15&y.windowBits)==0&&(y.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var S=s.inflateInit2(this.strm,y.windowBits);if(S!==u.Z_OK)throw new Error(f[S]);this.header=new w,s.inflateGetHeader(this.strm,this.header)}function v(_,y){var S=new g(y);if(S.push(_,!0),S.err)throw S.msg||f[S.err];return S.result}g.prototype.push=function(_,y){var S,M,O,T,D,K,V=this.strm,ne=this.options.chunkSize,W=this.options.dictionary,me=!1;if(this.ended)return!1;M=y===~~y?y:y===!0?u.Z_FINISH:u.Z_NO_FLUSH,typeof _=="string"?V.input=c.binstring2buf(_):b.call(_)==="[object ArrayBuffer]"?V.input=new Uint8Array(_):V.input=_,V.next_in=0,V.avail_in=V.input.length;do{if(V.avail_out===0&&(V.output=new l.Buf8(ne),V.next_out=0,V.avail_out=ne),(S=s.inflate(V,u.Z_NO_FLUSH))===u.Z_NEED_DICT&&W&&(K=typeof W=="string"?c.string2buf(W):b.call(W)==="[object ArrayBuffer]"?new Uint8Array(W):W,S=s.inflateSetDictionary(this.strm,K)),S===u.Z_BUF_ERROR&&me===!0&&(S=u.Z_OK,me=!1),S!==u.Z_STREAM_END&&S!==u.Z_OK)return this.onEnd(S),!(this.ended=!0);V.next_out&&(V.avail_out!==0&&S!==u.Z_STREAM_END&&(V.avail_in!==0||M!==u.Z_FINISH&&M!==u.Z_SYNC_FLUSH)||(this.options.to==="string"?(O=c.utf8border(V.output,V.next_out),T=V.next_out-O,D=c.buf2string(V.output,O),V.next_out=T,V.avail_out=ne-T,T&&l.arraySet(V.output,V.output,O,T,0),this.onData(D)):this.onData(l.shrinkBuf(V.output,V.next_out)))),V.avail_in===0&&V.avail_out===0&&(me=!0)}while((0<V.avail_in||V.avail_out===0)&&S!==u.Z_STREAM_END);return S===u.Z_STREAM_END&&(M=u.Z_FINISH),M===u.Z_FINISH?(S=s.inflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===u.Z_OK):M!==u.Z_SYNC_FLUSH||(this.onEnd(u.Z_OK),!(V.avail_out=0))},g.prototype.onData=function(_){this.chunks.push(_)},g.prototype.onEnd=function(_){_===u.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},a.Inflate=g,a.inflate=v,a.inflateRaw=function(_,y){return(y=y||{}).raw=!0,v(_,y)},a.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(u){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var p=f.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var w in p)p.hasOwnProperty(w)&&(u[w]=p[w])}}return u},a.shrinkBuf=function(u,f){return u.length===f?u:u.subarray?u.subarray(0,f):(u.length=f,u)};var l={arraySet:function(u,f,p,w,b){if(f.subarray&&u.subarray)u.set(f.subarray(p,p+w),b);else for(var g=0;g<w;g++)u[b+g]=f[p+g]},flattenChunks:function(u){var f,p,w,b,g,v;for(f=w=0,p=u.length;f<p;f++)w+=u[f].length;for(v=new Uint8Array(w),f=b=0,p=u.length;f<p;f++)g=u[f],v.set(g,b),b+=g.length;return v}},c={arraySet:function(u,f,p,w,b){for(var g=0;g<w;g++)u[b+g]=f[p+g]},flattenChunks:function(u){return[].concat.apply([],u)}};a.setTyped=function(u){u?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,l)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,c))},a.setTyped(s)},{}],42:[function(r,i,a){"use strict";var s=r("./common"),l=!0,c=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{c=!1}for(var u=new s.Buf8(256),f=0;f<256;f++)u[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function p(w,b){if(b<65537&&(w.subarray&&c||!w.subarray&&l))return String.fromCharCode.apply(null,s.shrinkBuf(w,b));for(var g="",v=0;v<b;v++)g+=String.fromCharCode(w[v]);return g}u[254]=u[254]=1,a.string2buf=function(w){var b,g,v,_,y,S=w.length,M=0;for(_=0;_<S;_++)(64512&(g=w.charCodeAt(_)))==55296&&_+1<S&&(64512&(v=w.charCodeAt(_+1)))==56320&&(g=65536+(g-55296<<10)+(v-56320),_++),M+=g<128?1:g<2048?2:g<65536?3:4;for(b=new s.Buf8(M),_=y=0;y<M;_++)(64512&(g=w.charCodeAt(_)))==55296&&_+1<S&&(64512&(v=w.charCodeAt(_+1)))==56320&&(g=65536+(g-55296<<10)+(v-56320),_++),g<128?b[y++]=g:(g<2048?b[y++]=192|g>>>6:(g<65536?b[y++]=224|g>>>12:(b[y++]=240|g>>>18,b[y++]=128|g>>>12&63),b[y++]=128|g>>>6&63),b[y++]=128|63&g);return b},a.buf2binstring=function(w){return p(w,w.length)},a.binstring2buf=function(w){for(var b=new s.Buf8(w.length),g=0,v=b.length;g<v;g++)b[g]=w.charCodeAt(g);return b},a.buf2string=function(w,b){var g,v,_,y,S=b||w.length,M=new Array(2*S);for(g=v=0;g<S;)if((_=w[g++])<128)M[v++]=_;else if(4<(y=u[_]))M[v++]=65533,g+=y-1;else{for(_&=y===2?31:y===3?15:7;1<y&&g<S;)_=_<<6|63&w[g++],y--;1<y?M[v++]=65533:_<65536?M[v++]=_:(_-=65536,M[v++]=55296|_>>10&1023,M[v++]=56320|1023&_)}return p(M,v)},a.utf8border=function(w,b){var g;for((b=b||w.length)>w.length&&(b=w.length),g=b-1;0<=g&&(192&w[g])==128;)g--;return g<0||g===0?b:g+u[w[g]]>b?g:b}},{"./common":41}],43:[function(r,i,a){"use strict";i.exports=function(s,l,c,u){for(var f=65535&s|0,p=s>>>16&65535|0,w=0;c!==0;){for(c-=w=2e3<c?2e3:c;p=p+(f=f+l[u++]|0)|0,--w;);f%=65521,p%=65521}return f|p<<16|0}},{}],44:[function(r,i,a){"use strict";i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,i,a){"use strict";var s=(function(){for(var l,c=[],u=0;u<256;u++){l=u;for(var f=0;f<8;f++)l=1&l?3988292384^l>>>1:l>>>1;c[u]=l}return c})();i.exports=function(l,c,u,f){var p=s,w=f+u;l^=-1;for(var b=f;b<w;b++)l=l>>>8^p[255&(l^c[b])];return-1^l}},{}],46:[function(r,i,a){"use strict";var s,l=r("../utils/common"),c=r("./trees"),u=r("./adler32"),f=r("./crc32"),p=r("./messages"),w=0,b=4,g=0,v=-2,_=-1,y=4,S=2,M=8,O=9,T=286,D=30,K=19,V=2*T+1,ne=15,W=3,me=258,ke=me+W+1,P=42,J=113,A=1,ee=2,Ce=3,ue=4;function Re(k,Q){return k.msg=p[Q],Q}function se(k){return(k<<1)-(4<k?9:0)}function Ie(k){for(var Q=k.length;0<=--Q;)k[Q]=0}function U(k){var Q=k.state,Z=Q.pending;Z>k.avail_out&&(Z=k.avail_out),Z!==0&&(l.arraySet(k.output,Q.pending_buf,Q.pending_out,Z,k.next_out),k.next_out+=Z,Q.pending_out+=Z,k.total_out+=Z,k.avail_out-=Z,Q.pending-=Z,Q.pending===0&&(Q.pending_out=0))}function G(k,Q){c._tr_flush_block(k,0<=k.block_start?k.block_start:-1,k.strstart-k.block_start,Q),k.block_start=k.strstart,U(k.strm)}function Me(k,Q){k.pending_buf[k.pending++]=Q}function ge(k,Q){k.pending_buf[k.pending++]=Q>>>8&255,k.pending_buf[k.pending++]=255&Q}function pe(k,Q){var Z,L,C=k.max_chain_length,B=k.strstart,ae=k.prev_length,le=k.nice_match,F=k.strstart>k.w_size-ke?k.strstart-(k.w_size-ke):0,de=k.window,ve=k.w_mask,he=k.prev,Ae=k.strstart+me,it=de[B+ae-1],Ve=de[B+ae];k.prev_length>=k.good_match&&(C>>=2),le>k.lookahead&&(le=k.lookahead);do if(de[(Z=Q)+ae]===Ve&&de[Z+ae-1]===it&&de[Z]===de[B]&&de[++Z]===de[B+1]){B+=2,Z++;do;while(de[++B]===de[++Z]&&de[++B]===de[++Z]&&de[++B]===de[++Z]&&de[++B]===de[++Z]&&de[++B]===de[++Z]&&de[++B]===de[++Z]&&de[++B]===de[++Z]&&de[++B]===de[++Z]&&B<Ae);if(L=me-(Ae-B),B=Ae-me,ae<L){if(k.match_start=Q,le<=(ae=L))break;it=de[B+ae-1],Ve=de[B+ae]}}while((Q=he[Q&ve])>F&&--C!=0);return ae<=k.lookahead?ae:k.lookahead}function Je(k){var Q,Z,L,C,B,ae,le,F,de,ve,he=k.w_size;do{if(C=k.window_size-k.lookahead-k.strstart,k.strstart>=he+(he-ke)){for(l.arraySet(k.window,k.window,he,he,0),k.match_start-=he,k.strstart-=he,k.block_start-=he,Q=Z=k.hash_size;L=k.head[--Q],k.head[Q]=he<=L?L-he:0,--Z;);for(Q=Z=he;L=k.prev[--Q],k.prev[Q]=he<=L?L-he:0,--Z;);C+=he}if(k.strm.avail_in===0)break;if(ae=k.strm,le=k.window,F=k.strstart+k.lookahead,de=C,ve=void 0,ve=ae.avail_in,de<ve&&(ve=de),Z=ve===0?0:(ae.avail_in-=ve,l.arraySet(le,ae.input,ae.next_in,ve,F),ae.state.wrap===1?ae.adler=u(ae.adler,le,ve,F):ae.state.wrap===2&&(ae.adler=f(ae.adler,le,ve,F)),ae.next_in+=ve,ae.total_in+=ve,ve),k.lookahead+=Z,k.lookahead+k.insert>=W)for(B=k.strstart-k.insert,k.ins_h=k.window[B],k.ins_h=(k.ins_h<<k.hash_shift^k.window[B+1])&k.hash_mask;k.insert&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[B+W-1])&k.hash_mask,k.prev[B&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=B,B++,k.insert--,!(k.lookahead+k.insert<W)););}while(k.lookahead<ke&&k.strm.avail_in!==0)}function wt(k,Q){for(var Z,L;;){if(k.lookahead<ke){if(Je(k),k.lookahead<ke&&Q===w)return A;if(k.lookahead===0)break}if(Z=0,k.lookahead>=W&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+W-1])&k.hash_mask,Z=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart),Z!==0&&k.strstart-Z<=k.w_size-ke&&(k.match_length=pe(k,Z)),k.match_length>=W)if(L=c._tr_tally(k,k.strstart-k.match_start,k.match_length-W),k.lookahead-=k.match_length,k.match_length<=k.max_lazy_match&&k.lookahead>=W){for(k.match_length--;k.strstart++,k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+W-1])&k.hash_mask,Z=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart,--k.match_length!=0;);k.strstart++}else k.strstart+=k.match_length,k.match_length=0,k.ins_h=k.window[k.strstart],k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+1])&k.hash_mask;else L=c._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++;if(L&&(G(k,!1),k.strm.avail_out===0))return A}return k.insert=k.strstart<W-1?k.strstart:W-1,Q===b?(G(k,!0),k.strm.avail_out===0?Ce:ue):k.last_lit&&(G(k,!1),k.strm.avail_out===0)?A:ee}function Ze(k,Q){for(var Z,L,C;;){if(k.lookahead<ke){if(Je(k),k.lookahead<ke&&Q===w)return A;if(k.lookahead===0)break}if(Z=0,k.lookahead>=W&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+W-1])&k.hash_mask,Z=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart),k.prev_length=k.match_length,k.prev_match=k.match_start,k.match_length=W-1,Z!==0&&k.prev_length<k.max_lazy_match&&k.strstart-Z<=k.w_size-ke&&(k.match_length=pe(k,Z),k.match_length<=5&&(k.strategy===1||k.match_length===W&&4096<k.strstart-k.match_start)&&(k.match_length=W-1)),k.prev_length>=W&&k.match_length<=k.prev_length){for(C=k.strstart+k.lookahead-W,L=c._tr_tally(k,k.strstart-1-k.prev_match,k.prev_length-W),k.lookahead-=k.prev_length-1,k.prev_length-=2;++k.strstart<=C&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+W-1])&k.hash_mask,Z=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart),--k.prev_length!=0;);if(k.match_available=0,k.match_length=W-1,k.strstart++,L&&(G(k,!1),k.strm.avail_out===0))return A}else if(k.match_available){if((L=c._tr_tally(k,0,k.window[k.strstart-1]))&&G(k,!1),k.strstart++,k.lookahead--,k.strm.avail_out===0)return A}else k.match_available=1,k.strstart++,k.lookahead--}return k.match_available&&(L=c._tr_tally(k,0,k.window[k.strstart-1]),k.match_available=0),k.insert=k.strstart<W-1?k.strstart:W-1,Q===b?(G(k,!0),k.strm.avail_out===0?Ce:ue):k.last_lit&&(G(k,!1),k.strm.avail_out===0)?A:ee}function Ue(k,Q,Z,L,C){this.good_length=k,this.max_lazy=Q,this.nice_length=Z,this.max_chain=L,this.func=C}function mt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new l.Buf16(2*V),this.dyn_dtree=new l.Buf16(2*(2*D+1)),this.bl_tree=new l.Buf16(2*(2*K+1)),Ie(this.dyn_ltree),Ie(this.dyn_dtree),Ie(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new l.Buf16(ne+1),this.heap=new l.Buf16(2*T+1),Ie(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new l.Buf16(2*T+1),Ie(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _t(k){var Q;return k&&k.state?(k.total_in=k.total_out=0,k.data_type=S,(Q=k.state).pending=0,Q.pending_out=0,Q.wrap<0&&(Q.wrap=-Q.wrap),Q.status=Q.wrap?P:J,k.adler=Q.wrap===2?0:1,Q.last_flush=w,c._tr_init(Q),g):Re(k,v)}function Xt(k){var Q=_t(k);return Q===g&&(function(Z){Z.window_size=2*Z.w_size,Ie(Z.head),Z.max_lazy_match=s[Z.level].max_lazy,Z.good_match=s[Z.level].good_length,Z.nice_match=s[Z.level].nice_length,Z.max_chain_length=s[Z.level].max_chain,Z.strstart=0,Z.block_start=0,Z.lookahead=0,Z.insert=0,Z.match_length=Z.prev_length=W-1,Z.match_available=0,Z.ins_h=0})(k.state),Q}function Vt(k,Q,Z,L,C,B){if(!k)return v;var ae=1;if(Q===_&&(Q=6),L<0?(ae=0,L=-L):15<L&&(ae=2,L-=16),C<1||O<C||Z!==M||L<8||15<L||Q<0||9<Q||B<0||y<B)return Re(k,v);L===8&&(L=9);var le=new mt;return(k.state=le).strm=k,le.wrap=ae,le.gzhead=null,le.w_bits=L,le.w_size=1<<le.w_bits,le.w_mask=le.w_size-1,le.hash_bits=C+7,le.hash_size=1<<le.hash_bits,le.hash_mask=le.hash_size-1,le.hash_shift=~~((le.hash_bits+W-1)/W),le.window=new l.Buf8(2*le.w_size),le.head=new l.Buf16(le.hash_size),le.prev=new l.Buf16(le.w_size),le.lit_bufsize=1<<C+6,le.pending_buf_size=4*le.lit_bufsize,le.pending_buf=new l.Buf8(le.pending_buf_size),le.d_buf=1*le.lit_bufsize,le.l_buf=3*le.lit_bufsize,le.level=Q,le.strategy=B,le.method=Z,Xt(k)}s=[new Ue(0,0,0,0,function(k,Q){var Z=65535;for(Z>k.pending_buf_size-5&&(Z=k.pending_buf_size-5);;){if(k.lookahead<=1){if(Je(k),k.lookahead===0&&Q===w)return A;if(k.lookahead===0)break}k.strstart+=k.lookahead,k.lookahead=0;var L=k.block_start+Z;if((k.strstart===0||k.strstart>=L)&&(k.lookahead=k.strstart-L,k.strstart=L,G(k,!1),k.strm.avail_out===0)||k.strstart-k.block_start>=k.w_size-ke&&(G(k,!1),k.strm.avail_out===0))return A}return k.insert=0,Q===b?(G(k,!0),k.strm.avail_out===0?Ce:ue):(k.strstart>k.block_start&&(G(k,!1),k.strm.avail_out),A)}),new Ue(4,4,8,4,wt),new Ue(4,5,16,8,wt),new Ue(4,6,32,32,wt),new Ue(4,4,16,16,Ze),new Ue(8,16,32,32,Ze),new Ue(8,16,128,128,Ze),new Ue(8,32,128,256,Ze),new Ue(32,128,258,1024,Ze),new Ue(32,258,258,4096,Ze)],a.deflateInit=function(k,Q){return Vt(k,Q,M,15,8,0)},a.deflateInit2=Vt,a.deflateReset=Xt,a.deflateResetKeep=_t,a.deflateSetHeader=function(k,Q){return k&&k.state?k.state.wrap!==2?v:(k.state.gzhead=Q,g):v},a.deflate=function(k,Q){var Z,L,C,B;if(!k||!k.state||5<Q||Q<0)return k?Re(k,v):v;if(L=k.state,!k.output||!k.input&&k.avail_in!==0||L.status===666&&Q!==b)return Re(k,k.avail_out===0?-5:v);if(L.strm=k,Z=L.last_flush,L.last_flush=Q,L.status===P)if(L.wrap===2)k.adler=0,Me(L,31),Me(L,139),Me(L,8),L.gzhead?(Me(L,(L.gzhead.text?1:0)+(L.gzhead.hcrc?2:0)+(L.gzhead.extra?4:0)+(L.gzhead.name?8:0)+(L.gzhead.comment?16:0)),Me(L,255&L.gzhead.time),Me(L,L.gzhead.time>>8&255),Me(L,L.gzhead.time>>16&255),Me(L,L.gzhead.time>>24&255),Me(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),Me(L,255&L.gzhead.os),L.gzhead.extra&&L.gzhead.extra.length&&(Me(L,255&L.gzhead.extra.length),Me(L,L.gzhead.extra.length>>8&255)),L.gzhead.hcrc&&(k.adler=f(k.adler,L.pending_buf,L.pending,0)),L.gzindex=0,L.status=69):(Me(L,0),Me(L,0),Me(L,0),Me(L,0),Me(L,0),Me(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),Me(L,3),L.status=J);else{var ae=M+(L.w_bits-8<<4)<<8;ae|=(2<=L.strategy||L.level<2?0:L.level<6?1:L.level===6?2:3)<<6,L.strstart!==0&&(ae|=32),ae+=31-ae%31,L.status=J,ge(L,ae),L.strstart!==0&&(ge(L,k.adler>>>16),ge(L,65535&k.adler)),k.adler=1}if(L.status===69)if(L.gzhead.extra){for(C=L.pending;L.gzindex<(65535&L.gzhead.extra.length)&&(L.pending!==L.pending_buf_size||(L.gzhead.hcrc&&L.pending>C&&(k.adler=f(k.adler,L.pending_buf,L.pending-C,C)),U(k),C=L.pending,L.pending!==L.pending_buf_size));)Me(L,255&L.gzhead.extra[L.gzindex]),L.gzindex++;L.gzhead.hcrc&&L.pending>C&&(k.adler=f(k.adler,L.pending_buf,L.pending-C,C)),L.gzindex===L.gzhead.extra.length&&(L.gzindex=0,L.status=73)}else L.status=73;if(L.status===73)if(L.gzhead.name){C=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>C&&(k.adler=f(k.adler,L.pending_buf,L.pending-C,C)),U(k),C=L.pending,L.pending===L.pending_buf_size)){B=1;break}B=L.gzindex<L.gzhead.name.length?255&L.gzhead.name.charCodeAt(L.gzindex++):0,Me(L,B)}while(B!==0);L.gzhead.hcrc&&L.pending>C&&(k.adler=f(k.adler,L.pending_buf,L.pending-C,C)),B===0&&(L.gzindex=0,L.status=91)}else L.status=91;if(L.status===91)if(L.gzhead.comment){C=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>C&&(k.adler=f(k.adler,L.pending_buf,L.pending-C,C)),U(k),C=L.pending,L.pending===L.pending_buf_size)){B=1;break}B=L.gzindex<L.gzhead.comment.length?255&L.gzhead.comment.charCodeAt(L.gzindex++):0,Me(L,B)}while(B!==0);L.gzhead.hcrc&&L.pending>C&&(k.adler=f(k.adler,L.pending_buf,L.pending-C,C)),B===0&&(L.status=103)}else L.status=103;if(L.status===103&&(L.gzhead.hcrc?(L.pending+2>L.pending_buf_size&&U(k),L.pending+2<=L.pending_buf_size&&(Me(L,255&k.adler),Me(L,k.adler>>8&255),k.adler=0,L.status=J)):L.status=J),L.pending!==0){if(U(k),k.avail_out===0)return L.last_flush=-1,g}else if(k.avail_in===0&&se(Q)<=se(Z)&&Q!==b)return Re(k,-5);if(L.status===666&&k.avail_in!==0)return Re(k,-5);if(k.avail_in!==0||L.lookahead!==0||Q!==w&&L.status!==666){var le=L.strategy===2?(function(F,de){for(var ve;;){if(F.lookahead===0&&(Je(F),F.lookahead===0)){if(de===w)return A;break}if(F.match_length=0,ve=c._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,ve&&(G(F,!1),F.strm.avail_out===0))return A}return F.insert=0,de===b?(G(F,!0),F.strm.avail_out===0?Ce:ue):F.last_lit&&(G(F,!1),F.strm.avail_out===0)?A:ee})(L,Q):L.strategy===3?(function(F,de){for(var ve,he,Ae,it,Ve=F.window;;){if(F.lookahead<=me){if(Je(F),F.lookahead<=me&&de===w)return A;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=W&&0<F.strstart&&(he=Ve[Ae=F.strstart-1])===Ve[++Ae]&&he===Ve[++Ae]&&he===Ve[++Ae]){it=F.strstart+me;do;while(he===Ve[++Ae]&&he===Ve[++Ae]&&he===Ve[++Ae]&&he===Ve[++Ae]&&he===Ve[++Ae]&&he===Ve[++Ae]&&he===Ve[++Ae]&&he===Ve[++Ae]&&Ae<it);F.match_length=me-(it-Ae),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=W?(ve=c._tr_tally(F,1,F.match_length-W),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(ve=c._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),ve&&(G(F,!1),F.strm.avail_out===0))return A}return F.insert=0,de===b?(G(F,!0),F.strm.avail_out===0?Ce:ue):F.last_lit&&(G(F,!1),F.strm.avail_out===0)?A:ee})(L,Q):s[L.level].func(L,Q);if(le!==Ce&&le!==ue||(L.status=666),le===A||le===Ce)return k.avail_out===0&&(L.last_flush=-1),g;if(le===ee&&(Q===1?c._tr_align(L):Q!==5&&(c._tr_stored_block(L,0,0,!1),Q===3&&(Ie(L.head),L.lookahead===0&&(L.strstart=0,L.block_start=0,L.insert=0))),U(k),k.avail_out===0))return L.last_flush=-1,g}return Q!==b?g:L.wrap<=0?1:(L.wrap===2?(Me(L,255&k.adler),Me(L,k.adler>>8&255),Me(L,k.adler>>16&255),Me(L,k.adler>>24&255),Me(L,255&k.total_in),Me(L,k.total_in>>8&255),Me(L,k.total_in>>16&255),Me(L,k.total_in>>24&255)):(ge(L,k.adler>>>16),ge(L,65535&k.adler)),U(k),0<L.wrap&&(L.wrap=-L.wrap),L.pending!==0?g:1)},a.deflateEnd=function(k){var Q;return k&&k.state?(Q=k.state.status)!==P&&Q!==69&&Q!==73&&Q!==91&&Q!==103&&Q!==J&&Q!==666?Re(k,v):(k.state=null,Q===J?Re(k,-3):g):v},a.deflateSetDictionary=function(k,Q){var Z,L,C,B,ae,le,F,de,ve=Q.length;if(!k||!k.state||(B=(Z=k.state).wrap)===2||B===1&&Z.status!==P||Z.lookahead)return v;for(B===1&&(k.adler=u(k.adler,Q,ve,0)),Z.wrap=0,ve>=Z.w_size&&(B===0&&(Ie(Z.head),Z.strstart=0,Z.block_start=0,Z.insert=0),de=new l.Buf8(Z.w_size),l.arraySet(de,Q,ve-Z.w_size,Z.w_size,0),Q=de,ve=Z.w_size),ae=k.avail_in,le=k.next_in,F=k.input,k.avail_in=ve,k.next_in=0,k.input=Q,Je(Z);Z.lookahead>=W;){for(L=Z.strstart,C=Z.lookahead-(W-1);Z.ins_h=(Z.ins_h<<Z.hash_shift^Z.window[L+W-1])&Z.hash_mask,Z.prev[L&Z.w_mask]=Z.head[Z.ins_h],Z.head[Z.ins_h]=L,L++,--C;);Z.strstart=L,Z.lookahead=W-1,Je(Z)}return Z.strstart+=Z.lookahead,Z.block_start=Z.strstart,Z.insert=Z.lookahead,Z.lookahead=0,Z.match_length=Z.prev_length=W-1,Z.match_available=0,k.next_in=le,k.input=F,k.avail_in=ae,Z.wrap=B,g},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,i,a){"use strict";i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,i,a){"use strict";i.exports=function(s,l){var c=s.state,u=s.next_in,f,p,w,b,g,v,_,y,S,M,O,T,D,K,V,ne,W,me,ke,P,J,A=s.input,ee;f=u+(s.avail_in-5),p=s.next_out,ee=s.output,w=p-(l-s.avail_out),b=p+(s.avail_out-257),g=c.dmax,v=c.wsize,_=c.whave,y=c.wnext,S=c.window,M=c.hold,O=c.bits,T=c.lencode,D=c.distcode,K=(1<<c.lenbits)-1,V=(1<<c.distbits)-1;e:do{O<15&&(M+=A[u++]<<O,O+=8,M+=A[u++]<<O,O+=8),ne=T[M&K];t:for(;;){if(M>>>=W=ne>>>24,O-=W,(W=ne>>>16&255)===0)ee[p++]=65535&ne;else{if(!(16&W)){if((64&W)==0){ne=T[(65535&ne)+(M&(1<<W)-1)];continue t}if(32&W){c.mode=12;break e}s.msg="invalid literal/length code",c.mode=30;break e}me=65535&ne,(W&=15)&&(O<W&&(M+=A[u++]<<O,O+=8),me+=M&(1<<W)-1,M>>>=W,O-=W),O<15&&(M+=A[u++]<<O,O+=8,M+=A[u++]<<O,O+=8),ne=D[M&V];r:for(;;){if(M>>>=W=ne>>>24,O-=W,!(16&(W=ne>>>16&255))){if((64&W)==0){ne=D[(65535&ne)+(M&(1<<W)-1)];continue r}s.msg="invalid distance code",c.mode=30;break e}if(ke=65535&ne,O<(W&=15)&&(M+=A[u++]<<O,(O+=8)<W&&(M+=A[u++]<<O,O+=8)),g<(ke+=M&(1<<W)-1)){s.msg="invalid distance too far back",c.mode=30;break e}if(M>>>=W,O-=W,(W=p-w)<ke){if(_<(W=ke-W)&&c.sane){s.msg="invalid distance too far back",c.mode=30;break e}if(J=S,(P=0)===y){if(P+=v-W,W<me){for(me-=W;ee[p++]=S[P++],--W;);P=p-ke,J=ee}}else if(y<W){if(P+=v+y-W,(W-=y)<me){for(me-=W;ee[p++]=S[P++],--W;);if(P=0,y<me){for(me-=W=y;ee[p++]=S[P++],--W;);P=p-ke,J=ee}}}else if(P+=y-W,W<me){for(me-=W;ee[p++]=S[P++],--W;);P=p-ke,J=ee}for(;2<me;)ee[p++]=J[P++],ee[p++]=J[P++],ee[p++]=J[P++],me-=3;me&&(ee[p++]=J[P++],1<me&&(ee[p++]=J[P++]))}else{for(P=p-ke;ee[p++]=ee[P++],ee[p++]=ee[P++],ee[p++]=ee[P++],2<(me-=3););me&&(ee[p++]=ee[P++],1<me&&(ee[p++]=ee[P++]))}break}}break}}while(u<f&&p<b);u-=me=O>>3,M&=(1<<(O-=me<<3))-1,s.next_in=u,s.next_out=p,s.avail_in=u<f?f-u+5:5-(u-f),s.avail_out=p<b?b-p+257:257-(p-b),c.hold=M,c.bits=O}},{}],49:[function(r,i,a){"use strict";var s=r("../utils/common"),l=r("./adler32"),c=r("./crc32"),u=r("./inffast"),f=r("./inftrees"),p=1,w=2,b=0,g=-2,v=1,_=852,y=592;function S(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function M(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function O(P){var J;return P&&P.state?(J=P.state,P.total_in=P.total_out=J.total=0,P.msg="",J.wrap&&(P.adler=1&J.wrap),J.mode=v,J.last=0,J.havedict=0,J.dmax=32768,J.head=null,J.hold=0,J.bits=0,J.lencode=J.lendyn=new s.Buf32(_),J.distcode=J.distdyn=new s.Buf32(y),J.sane=1,J.back=-1,b):g}function T(P){var J;return P&&P.state?((J=P.state).wsize=0,J.whave=0,J.wnext=0,O(P)):g}function D(P,J){var A,ee;return P&&P.state?(ee=P.state,J<0?(A=0,J=-J):(A=1+(J>>4),J<48&&(J&=15)),J&&(J<8||15<J)?g:(ee.window!==null&&ee.wbits!==J&&(ee.window=null),ee.wrap=A,ee.wbits=J,T(P))):g}function K(P,J){var A,ee;return P?(ee=new M,(P.state=ee).window=null,(A=D(P,J))!==b&&(P.state=null),A):g}var V,ne,W=!0;function me(P){if(W){var J;for(V=new s.Buf32(512),ne=new s.Buf32(32),J=0;J<144;)P.lens[J++]=8;for(;J<256;)P.lens[J++]=9;for(;J<280;)P.lens[J++]=7;for(;J<288;)P.lens[J++]=8;for(f(p,P.lens,0,288,V,0,P.work,{bits:9}),J=0;J<32;)P.lens[J++]=5;f(w,P.lens,0,32,ne,0,P.work,{bits:5}),W=!1}P.lencode=V,P.lenbits=9,P.distcode=ne,P.distbits=5}function ke(P,J,A,ee){var Ce,ue=P.state;return ue.window===null&&(ue.wsize=1<<ue.wbits,ue.wnext=0,ue.whave=0,ue.window=new s.Buf8(ue.wsize)),ee>=ue.wsize?(s.arraySet(ue.window,J,A-ue.wsize,ue.wsize,0),ue.wnext=0,ue.whave=ue.wsize):(ee<(Ce=ue.wsize-ue.wnext)&&(Ce=ee),s.arraySet(ue.window,J,A-ee,Ce,ue.wnext),(ee-=Ce)?(s.arraySet(ue.window,J,A-ee,ee,0),ue.wnext=ee,ue.whave=ue.wsize):(ue.wnext+=Ce,ue.wnext===ue.wsize&&(ue.wnext=0),ue.whave<ue.wsize&&(ue.whave+=Ce))),0}a.inflateReset=T,a.inflateReset2=D,a.inflateResetKeep=O,a.inflateInit=function(P){return K(P,15)},a.inflateInit2=K,a.inflate=function(P,J){var A,ee,Ce,ue,Re,se,Ie,U,G,Me,ge,pe,Je,wt,Ze,Ue,mt,_t,Xt,Vt,k,Q,Z,L,C=0,B=new s.Buf8(4),ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return g;(A=P.state).mode===12&&(A.mode=13),Re=P.next_out,Ce=P.output,Ie=P.avail_out,ue=P.next_in,ee=P.input,se=P.avail_in,U=A.hold,G=A.bits,Me=se,ge=Ie,Q=b;e:for(;;)switch(A.mode){case v:if(A.wrap===0){A.mode=13;break}for(;G<16;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}if(2&A.wrap&&U===35615){B[A.check=0]=255&U,B[1]=U>>>8&255,A.check=c(A.check,B,2,0),G=U=0,A.mode=2;break}if(A.flags=0,A.head&&(A.head.done=!1),!(1&A.wrap)||(((255&U)<<8)+(U>>8))%31){P.msg="incorrect header check",A.mode=30;break}if((15&U)!=8){P.msg="unknown compression method",A.mode=30;break}if(G-=4,k=8+(15&(U>>>=4)),A.wbits===0)A.wbits=k;else if(k>A.wbits){P.msg="invalid window size",A.mode=30;break}A.dmax=1<<k,P.adler=A.check=1,A.mode=512&U?10:12,G=U=0;break;case 2:for(;G<16;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}if(A.flags=U,(255&A.flags)!=8){P.msg="unknown compression method",A.mode=30;break}if(57344&A.flags){P.msg="unknown header flags set",A.mode=30;break}A.head&&(A.head.text=U>>8&1),512&A.flags&&(B[0]=255&U,B[1]=U>>>8&255,A.check=c(A.check,B,2,0)),G=U=0,A.mode=3;case 3:for(;G<32;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}A.head&&(A.head.time=U),512&A.flags&&(B[0]=255&U,B[1]=U>>>8&255,B[2]=U>>>16&255,B[3]=U>>>24&255,A.check=c(A.check,B,4,0)),G=U=0,A.mode=4;case 4:for(;G<16;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}A.head&&(A.head.xflags=255&U,A.head.os=U>>8),512&A.flags&&(B[0]=255&U,B[1]=U>>>8&255,A.check=c(A.check,B,2,0)),G=U=0,A.mode=5;case 5:if(1024&A.flags){for(;G<16;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}A.length=U,A.head&&(A.head.extra_len=U),512&A.flags&&(B[0]=255&U,B[1]=U>>>8&255,A.check=c(A.check,B,2,0)),G=U=0}else A.head&&(A.head.extra=null);A.mode=6;case 6:if(1024&A.flags&&(se<(pe=A.length)&&(pe=se),pe&&(A.head&&(k=A.head.extra_len-A.length,A.head.extra||(A.head.extra=new Array(A.head.extra_len)),s.arraySet(A.head.extra,ee,ue,pe,k)),512&A.flags&&(A.check=c(A.check,ee,pe,ue)),se-=pe,ue+=pe,A.length-=pe),A.length))break e;A.length=0,A.mode=7;case 7:if(2048&A.flags){if(se===0)break e;for(pe=0;k=ee[ue+pe++],A.head&&k&&A.length<65536&&(A.head.name+=String.fromCharCode(k)),k&&pe<se;);if(512&A.flags&&(A.check=c(A.check,ee,pe,ue)),se-=pe,ue+=pe,k)break e}else A.head&&(A.head.name=null);A.length=0,A.mode=8;case 8:if(4096&A.flags){if(se===0)break e;for(pe=0;k=ee[ue+pe++],A.head&&k&&A.length<65536&&(A.head.comment+=String.fromCharCode(k)),k&&pe<se;);if(512&A.flags&&(A.check=c(A.check,ee,pe,ue)),se-=pe,ue+=pe,k)break e}else A.head&&(A.head.comment=null);A.mode=9;case 9:if(512&A.flags){for(;G<16;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}if(U!==(65535&A.check)){P.msg="header crc mismatch",A.mode=30;break}G=U=0}A.head&&(A.head.hcrc=A.flags>>9&1,A.head.done=!0),P.adler=A.check=0,A.mode=12;break;case 10:for(;G<32;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}P.adler=A.check=S(U),G=U=0,A.mode=11;case 11:if(A.havedict===0)return P.next_out=Re,P.avail_out=Ie,P.next_in=ue,P.avail_in=se,A.hold=U,A.bits=G,2;P.adler=A.check=1,A.mode=12;case 12:if(J===5||J===6)break e;case 13:if(A.last){U>>>=7&G,G-=7&G,A.mode=27;break}for(;G<3;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}switch(A.last=1&U,G-=1,3&(U>>>=1)){case 0:A.mode=14;break;case 1:if(me(A),A.mode=20,J!==6)break;U>>>=2,G-=2;break e;case 2:A.mode=17;break;case 3:P.msg="invalid block type",A.mode=30}U>>>=2,G-=2;break;case 14:for(U>>>=7&G,G-=7&G;G<32;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}if((65535&U)!=(U>>>16^65535)){P.msg="invalid stored block lengths",A.mode=30;break}if(A.length=65535&U,G=U=0,A.mode=15,J===6)break e;case 15:A.mode=16;case 16:if(pe=A.length){if(se<pe&&(pe=se),Ie<pe&&(pe=Ie),pe===0)break e;s.arraySet(Ce,ee,ue,pe,Re),se-=pe,ue+=pe,Ie-=pe,Re+=pe,A.length-=pe;break}A.mode=12;break;case 17:for(;G<14;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}if(A.nlen=257+(31&U),U>>>=5,G-=5,A.ndist=1+(31&U),U>>>=5,G-=5,A.ncode=4+(15&U),U>>>=4,G-=4,286<A.nlen||30<A.ndist){P.msg="too many length or distance symbols",A.mode=30;break}A.have=0,A.mode=18;case 18:for(;A.have<A.ncode;){for(;G<3;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}A.lens[ae[A.have++]]=7&U,U>>>=3,G-=3}for(;A.have<19;)A.lens[ae[A.have++]]=0;if(A.lencode=A.lendyn,A.lenbits=7,Z={bits:A.lenbits},Q=f(0,A.lens,0,19,A.lencode,0,A.work,Z),A.lenbits=Z.bits,Q){P.msg="invalid code lengths set",A.mode=30;break}A.have=0,A.mode=19;case 19:for(;A.have<A.nlen+A.ndist;){for(;Ue=(C=A.lencode[U&(1<<A.lenbits)-1])>>>16&255,mt=65535&C,!((Ze=C>>>24)<=G);){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}if(mt<16)U>>>=Ze,G-=Ze,A.lens[A.have++]=mt;else{if(mt===16){for(L=Ze+2;G<L;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}if(U>>>=Ze,G-=Ze,A.have===0){P.msg="invalid bit length repeat",A.mode=30;break}k=A.lens[A.have-1],pe=3+(3&U),U>>>=2,G-=2}else if(mt===17){for(L=Ze+3;G<L;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}G-=Ze,k=0,pe=3+(7&(U>>>=Ze)),U>>>=3,G-=3}else{for(L=Ze+7;G<L;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}G-=Ze,k=0,pe=11+(127&(U>>>=Ze)),U>>>=7,G-=7}if(A.have+pe>A.nlen+A.ndist){P.msg="invalid bit length repeat",A.mode=30;break}for(;pe--;)A.lens[A.have++]=k}}if(A.mode===30)break;if(A.lens[256]===0){P.msg="invalid code -- missing end-of-block",A.mode=30;break}if(A.lenbits=9,Z={bits:A.lenbits},Q=f(p,A.lens,0,A.nlen,A.lencode,0,A.work,Z),A.lenbits=Z.bits,Q){P.msg="invalid literal/lengths set",A.mode=30;break}if(A.distbits=6,A.distcode=A.distdyn,Z={bits:A.distbits},Q=f(w,A.lens,A.nlen,A.ndist,A.distcode,0,A.work,Z),A.distbits=Z.bits,Q){P.msg="invalid distances set",A.mode=30;break}if(A.mode=20,J===6)break e;case 20:A.mode=21;case 21:if(6<=se&&258<=Ie){P.next_out=Re,P.avail_out=Ie,P.next_in=ue,P.avail_in=se,A.hold=U,A.bits=G,u(P,ge),Re=P.next_out,Ce=P.output,Ie=P.avail_out,ue=P.next_in,ee=P.input,se=P.avail_in,U=A.hold,G=A.bits,A.mode===12&&(A.back=-1);break}for(A.back=0;Ue=(C=A.lencode[U&(1<<A.lenbits)-1])>>>16&255,mt=65535&C,!((Ze=C>>>24)<=G);){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}if(Ue&&(240&Ue)==0){for(_t=Ze,Xt=Ue,Vt=mt;Ue=(C=A.lencode[Vt+((U&(1<<_t+Xt)-1)>>_t)])>>>16&255,mt=65535&C,!(_t+(Ze=C>>>24)<=G);){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}U>>>=_t,G-=_t,A.back+=_t}if(U>>>=Ze,G-=Ze,A.back+=Ze,A.length=mt,Ue===0){A.mode=26;break}if(32&Ue){A.back=-1,A.mode=12;break}if(64&Ue){P.msg="invalid literal/length code",A.mode=30;break}A.extra=15&Ue,A.mode=22;case 22:if(A.extra){for(L=A.extra;G<L;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}A.length+=U&(1<<A.extra)-1,U>>>=A.extra,G-=A.extra,A.back+=A.extra}A.was=A.length,A.mode=23;case 23:for(;Ue=(C=A.distcode[U&(1<<A.distbits)-1])>>>16&255,mt=65535&C,!((Ze=C>>>24)<=G);){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}if((240&Ue)==0){for(_t=Ze,Xt=Ue,Vt=mt;Ue=(C=A.distcode[Vt+((U&(1<<_t+Xt)-1)>>_t)])>>>16&255,mt=65535&C,!(_t+(Ze=C>>>24)<=G);){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}U>>>=_t,G-=_t,A.back+=_t}if(U>>>=Ze,G-=Ze,A.back+=Ze,64&Ue){P.msg="invalid distance code",A.mode=30;break}A.offset=mt,A.extra=15&Ue,A.mode=24;case 24:if(A.extra){for(L=A.extra;G<L;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}A.offset+=U&(1<<A.extra)-1,U>>>=A.extra,G-=A.extra,A.back+=A.extra}if(A.offset>A.dmax){P.msg="invalid distance too far back",A.mode=30;break}A.mode=25;case 25:if(Ie===0)break e;if(pe=ge-Ie,A.offset>pe){if((pe=A.offset-pe)>A.whave&&A.sane){P.msg="invalid distance too far back",A.mode=30;break}Je=pe>A.wnext?(pe-=A.wnext,A.wsize-pe):A.wnext-pe,pe>A.length&&(pe=A.length),wt=A.window}else wt=Ce,Je=Re-A.offset,pe=A.length;for(Ie<pe&&(pe=Ie),Ie-=pe,A.length-=pe;Ce[Re++]=wt[Je++],--pe;);A.length===0&&(A.mode=21);break;case 26:if(Ie===0)break e;Ce[Re++]=A.length,Ie--,A.mode=21;break;case 27:if(A.wrap){for(;G<32;){if(se===0)break e;se--,U|=ee[ue++]<<G,G+=8}if(ge-=Ie,P.total_out+=ge,A.total+=ge,ge&&(P.adler=A.check=A.flags?c(A.check,Ce,ge,Re-ge):l(A.check,Ce,ge,Re-ge)),ge=Ie,(A.flags?U:S(U))!==A.check){P.msg="incorrect data check",A.mode=30;break}G=U=0}A.mode=28;case 28:if(A.wrap&&A.flags){for(;G<32;){if(se===0)break e;se--,U+=ee[ue++]<<G,G+=8}if(U!==(4294967295&A.total)){P.msg="incorrect length check",A.mode=30;break}G=U=0}A.mode=29;case 29:Q=1;break e;case 30:Q=-3;break e;case 31:return-4;default:return g}return P.next_out=Re,P.avail_out=Ie,P.next_in=ue,P.avail_in=se,A.hold=U,A.bits=G,(A.wsize||ge!==P.avail_out&&A.mode<30&&(A.mode<27||J!==4))&&ke(P,P.output,P.next_out,ge-P.avail_out)?(A.mode=31,-4):(Me-=P.avail_in,ge-=P.avail_out,P.total_in+=Me,P.total_out+=ge,A.total+=ge,A.wrap&&ge&&(P.adler=A.check=A.flags?c(A.check,Ce,ge,P.next_out-ge):l(A.check,Ce,ge,P.next_out-ge)),P.data_type=A.bits+(A.last?64:0)+(A.mode===12?128:0)+(A.mode===20||A.mode===15?256:0),(Me==0&&ge===0||J===4)&&Q===b&&(Q=-5),Q)},a.inflateEnd=function(P){if(!P||!P.state)return g;var J=P.state;return J.window&&(J.window=null),P.state=null,b},a.inflateGetHeader=function(P,J){var A;return P&&P.state?(2&(A=P.state).wrap)==0?g:((A.head=J).done=!1,b):g},a.inflateSetDictionary=function(P,J){var A,ee=J.length;return P&&P.state?(A=P.state).wrap!==0&&A.mode!==11?g:A.mode===11&&l(1,J,ee,0)!==A.check?-3:ke(P,J,ee,ee)?(A.mode=31,-4):(A.havedict=1,b):g},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,i,a){"use strict";var s=r("../utils/common"),l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],c=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],u=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(p,w,b,g,v,_,y,S){var M,O,T,D,K,V,ne,W,me,ke=S.bits,P=0,J=0,A=0,ee=0,Ce=0,ue=0,Re=0,se=0,Ie=0,U=0,G=null,Me=0,ge=new s.Buf16(16),pe=new s.Buf16(16),Je=null,wt=0;for(P=0;P<=15;P++)ge[P]=0;for(J=0;J<g;J++)ge[w[b+J]]++;for(Ce=ke,ee=15;1<=ee&&ge[ee]===0;ee--);if(ee<Ce&&(Ce=ee),ee===0)return v[_++]=20971520,v[_++]=20971520,S.bits=1,0;for(A=1;A<ee&&ge[A]===0;A++);for(Ce<A&&(Ce=A),P=se=1;P<=15;P++)if(se<<=1,(se-=ge[P])<0)return-1;if(0<se&&(p===0||ee!==1))return-1;for(pe[1]=0,P=1;P<15;P++)pe[P+1]=pe[P]+ge[P];for(J=0;J<g;J++)w[b+J]!==0&&(y[pe[w[b+J]]++]=J);if(V=p===0?(G=Je=y,19):p===1?(G=l,Me-=257,Je=c,wt-=257,256):(G=u,Je=f,-1),P=A,K=_,Re=J=U=0,T=-1,D=(Ie=1<<(ue=Ce))-1,p===1&&852<Ie||p===2&&592<Ie)return 1;for(;;){for(ne=P-Re,me=y[J]<V?(W=0,y[J]):y[J]>V?(W=Je[wt+y[J]],G[Me+y[J]]):(W=96,0),M=1<<P-Re,A=O=1<<ue;v[K+(U>>Re)+(O-=M)]=ne<<24|W<<16|me|0,O!==0;);for(M=1<<P-1;U&M;)M>>=1;if(M!==0?(U&=M-1,U+=M):U=0,J++,--ge[P]==0){if(P===ee)break;P=w[b+y[J]]}if(Ce<P&&(U&D)!==T){for(Re===0&&(Re=Ce),K+=A,se=1<<(ue=P-Re);ue+Re<ee&&!((se-=ge[ue+Re])<=0);)ue++,se<<=1;if(Ie+=1<<ue,p===1&&852<Ie||p===2&&592<Ie)return 1;v[T=U&D]=Ce<<24|ue<<16|K-_|0}}return U!==0&&(v[K+U]=P-Re<<24|4194304),S.bits=Ce,0}},{"../utils/common":41}],51:[function(r,i,a){"use strict";i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,i,a){"use strict";var s=r("../utils/common"),l=0,c=1;function u(C){for(var B=C.length;0<=--B;)C[B]=0}var f=0,p=29,w=256,b=w+1+p,g=30,v=19,_=2*b+1,y=15,S=16,M=7,O=256,T=16,D=17,K=18,V=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ne=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],W=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],me=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ke=new Array(2*(b+2));u(ke);var P=new Array(2*g);u(P);var J=new Array(512);u(J);var A=new Array(256);u(A);var ee=new Array(p);u(ee);var Ce,ue,Re,se=new Array(g);function Ie(C,B,ae,le,F){this.static_tree=C,this.extra_bits=B,this.extra_base=ae,this.elems=le,this.max_length=F,this.has_stree=C&&C.length}function U(C,B){this.dyn_tree=C,this.max_code=0,this.stat_desc=B}function G(C){return C<256?J[C]:J[256+(C>>>7)]}function Me(C,B){C.pending_buf[C.pending++]=255&B,C.pending_buf[C.pending++]=B>>>8&255}function ge(C,B,ae){C.bi_valid>S-ae?(C.bi_buf|=B<<C.bi_valid&65535,Me(C,C.bi_buf),C.bi_buf=B>>S-C.bi_valid,C.bi_valid+=ae-S):(C.bi_buf|=B<<C.bi_valid&65535,C.bi_valid+=ae)}function pe(C,B,ae){ge(C,ae[2*B],ae[2*B+1])}function Je(C,B){for(var ae=0;ae|=1&C,C>>>=1,ae<<=1,0<--B;);return ae>>>1}function wt(C,B,ae){var le,F,de=new Array(y+1),ve=0;for(le=1;le<=y;le++)de[le]=ve=ve+ae[le-1]<<1;for(F=0;F<=B;F++){var he=C[2*F+1];he!==0&&(C[2*F]=Je(de[he]++,he))}}function Ze(C){var B;for(B=0;B<b;B++)C.dyn_ltree[2*B]=0;for(B=0;B<g;B++)C.dyn_dtree[2*B]=0;for(B=0;B<v;B++)C.bl_tree[2*B]=0;C.dyn_ltree[2*O]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function Ue(C){8<C.bi_valid?Me(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function mt(C,B,ae,le){var F=2*B,de=2*ae;return C[F]<C[de]||C[F]===C[de]&&le[B]<=le[ae]}function _t(C,B,ae){for(var le=C.heap[ae],F=ae<<1;F<=C.heap_len&&(F<C.heap_len&&mt(B,C.heap[F+1],C.heap[F],C.depth)&&F++,!mt(B,le,C.heap[F],C.depth));)C.heap[ae]=C.heap[F],ae=F,F<<=1;C.heap[ae]=le}function Xt(C,B,ae){var le,F,de,ve,he=0;if(C.last_lit!==0)for(;le=C.pending_buf[C.d_buf+2*he]<<8|C.pending_buf[C.d_buf+2*he+1],F=C.pending_buf[C.l_buf+he],he++,le===0?pe(C,F,B):(pe(C,(de=A[F])+w+1,B),(ve=V[de])!==0&&ge(C,F-=ee[de],ve),pe(C,de=G(--le),ae),(ve=ne[de])!==0&&ge(C,le-=se[de],ve)),he<C.last_lit;);pe(C,O,B)}function Vt(C,B){var ae,le,F,de=B.dyn_tree,ve=B.stat_desc.static_tree,he=B.stat_desc.has_stree,Ae=B.stat_desc.elems,it=-1;for(C.heap_len=0,C.heap_max=_,ae=0;ae<Ae;ae++)de[2*ae]!==0?(C.heap[++C.heap_len]=it=ae,C.depth[ae]=0):de[2*ae+1]=0;for(;C.heap_len<2;)de[2*(F=C.heap[++C.heap_len]=it<2?++it:0)]=1,C.depth[F]=0,C.opt_len--,he&&(C.static_len-=ve[2*F+1]);for(B.max_code=it,ae=C.heap_len>>1;1<=ae;ae--)_t(C,de,ae);for(F=Ae;ae=C.heap[1],C.heap[1]=C.heap[C.heap_len--],_t(C,de,1),le=C.heap[1],C.heap[--C.heap_max]=ae,C.heap[--C.heap_max]=le,de[2*F]=de[2*ae]+de[2*le],C.depth[F]=(C.depth[ae]>=C.depth[le]?C.depth[ae]:C.depth[le])+1,de[2*ae+1]=de[2*le+1]=F,C.heap[1]=F++,_t(C,de,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],(function(Ve,Pt){var mn,or,gn,ht,Hn,ho,_r=Pt.dyn_tree,Xo=Pt.max_code,qi=Pt.stat_desc.static_tree,Dc=Pt.stat_desc.has_stree,zc=Pt.stat_desc.extra_bits,fs=Pt.stat_desc.extra_base,Fn=Pt.stat_desc.max_length,fo=0;for(ht=0;ht<=y;ht++)Ve.bl_count[ht]=0;for(_r[2*Ve.heap[Ve.heap_max]+1]=0,mn=Ve.heap_max+1;mn<_;mn++)Fn<(ht=_r[2*_r[2*(or=Ve.heap[mn])+1]+1]+1)&&(ht=Fn,fo++),_r[2*or+1]=ht,Xo<or||(Ve.bl_count[ht]++,Hn=0,fs<=or&&(Hn=zc[or-fs]),ho=_r[2*or],Ve.opt_len+=ho*(ht+Hn),Dc&&(Ve.static_len+=ho*(qi[2*or+1]+Hn)));if(fo!==0){do{for(ht=Fn-1;Ve.bl_count[ht]===0;)ht--;Ve.bl_count[ht]--,Ve.bl_count[ht+1]+=2,Ve.bl_count[Fn]--,fo-=2}while(0<fo);for(ht=Fn;ht!==0;ht--)for(or=Ve.bl_count[ht];or!==0;)Xo<(gn=Ve.heap[--mn])||(_r[2*gn+1]!==ht&&(Ve.opt_len+=(ht-_r[2*gn+1])*_r[2*gn],_r[2*gn+1]=ht),or--)}})(C,B),wt(de,it,C.bl_count)}function k(C,B,ae){var le,F,de=-1,ve=B[1],he=0,Ae=7,it=4;for(ve===0&&(Ae=138,it=3),B[2*(ae+1)+1]=65535,le=0;le<=ae;le++)F=ve,ve=B[2*(le+1)+1],++he<Ae&&F===ve||(he<it?C.bl_tree[2*F]+=he:F!==0?(F!==de&&C.bl_tree[2*F]++,C.bl_tree[2*T]++):he<=10?C.bl_tree[2*D]++:C.bl_tree[2*K]++,de=F,it=(he=0)===ve?(Ae=138,3):F===ve?(Ae=6,3):(Ae=7,4))}function Q(C,B,ae){var le,F,de=-1,ve=B[1],he=0,Ae=7,it=4;for(ve===0&&(Ae=138,it=3),le=0;le<=ae;le++)if(F=ve,ve=B[2*(le+1)+1],!(++he<Ae&&F===ve)){if(he<it)for(;pe(C,F,C.bl_tree),--he!=0;);else F!==0?(F!==de&&(pe(C,F,C.bl_tree),he--),pe(C,T,C.bl_tree),ge(C,he-3,2)):he<=10?(pe(C,D,C.bl_tree),ge(C,he-3,3)):(pe(C,K,C.bl_tree),ge(C,he-11,7));de=F,it=(he=0)===ve?(Ae=138,3):F===ve?(Ae=6,3):(Ae=7,4)}}u(se);var Z=!1;function L(C,B,ae,le){ge(C,(f<<1)+(le?1:0),3),(function(F,de,ve,he){Ue(F),he&&(Me(F,ve),Me(F,~ve)),s.arraySet(F.pending_buf,F.window,de,ve,F.pending),F.pending+=ve})(C,B,ae,!0)}a._tr_init=function(C){Z||((function(){var B,ae,le,F,de,ve=new Array(y+1);for(F=le=0;F<p-1;F++)for(ee[F]=le,B=0;B<1<<V[F];B++)A[le++]=F;for(A[le-1]=F,F=de=0;F<16;F++)for(se[F]=de,B=0;B<1<<ne[F];B++)J[de++]=F;for(de>>=7;F<g;F++)for(se[F]=de<<7,B=0;B<1<<ne[F]-7;B++)J[256+de++]=F;for(ae=0;ae<=y;ae++)ve[ae]=0;for(B=0;B<=143;)ke[2*B+1]=8,B++,ve[8]++;for(;B<=255;)ke[2*B+1]=9,B++,ve[9]++;for(;B<=279;)ke[2*B+1]=7,B++,ve[7]++;for(;B<=287;)ke[2*B+1]=8,B++,ve[8]++;for(wt(ke,b+1,ve),B=0;B<g;B++)P[2*B+1]=5,P[2*B]=Je(B,5);Ce=new Ie(ke,V,w+1,b,y),ue=new Ie(P,ne,0,g,y),Re=new Ie(new Array(0),W,0,v,M)})(),Z=!0),C.l_desc=new U(C.dyn_ltree,Ce),C.d_desc=new U(C.dyn_dtree,ue),C.bl_desc=new U(C.bl_tree,Re),C.bi_buf=0,C.bi_valid=0,Ze(C)},a._tr_stored_block=L,a._tr_flush_block=function(C,B,ae,le){var F,de,ve=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=(function(he){var Ae,it=4093624447;for(Ae=0;Ae<=31;Ae++,it>>>=1)if(1&it&&he.dyn_ltree[2*Ae]!==0)return l;if(he.dyn_ltree[18]!==0||he.dyn_ltree[20]!==0||he.dyn_ltree[26]!==0)return c;for(Ae=32;Ae<w;Ae++)if(he.dyn_ltree[2*Ae]!==0)return c;return l})(C)),Vt(C,C.l_desc),Vt(C,C.d_desc),ve=(function(he){var Ae;for(k(he,he.dyn_ltree,he.l_desc.max_code),k(he,he.dyn_dtree,he.d_desc.max_code),Vt(he,he.bl_desc),Ae=v-1;3<=Ae&&he.bl_tree[2*me[Ae]+1]===0;Ae--);return he.opt_len+=3*(Ae+1)+5+5+4,Ae})(C),F=C.opt_len+3+7>>>3,(de=C.static_len+3+7>>>3)<=F&&(F=de)):F=de=ae+5,ae+4<=F&&B!==-1?L(C,B,ae,le):C.strategy===4||de===F?(ge(C,2+(le?1:0),3),Xt(C,ke,P)):(ge(C,4+(le?1:0),3),(function(he,Ae,it,Ve){var Pt;for(ge(he,Ae-257,5),ge(he,it-1,5),ge(he,Ve-4,4),Pt=0;Pt<Ve;Pt++)ge(he,he.bl_tree[2*me[Pt]+1],3);Q(he,he.dyn_ltree,Ae-1),Q(he,he.dyn_dtree,it-1)})(C,C.l_desc.max_code+1,C.d_desc.max_code+1,ve+1),Xt(C,C.dyn_ltree,C.dyn_dtree)),Ze(C),le&&Ue(C)},a._tr_tally=function(C,B,ae){return C.pending_buf[C.d_buf+2*C.last_lit]=B>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&B,C.pending_buf[C.l_buf+C.last_lit]=255&ae,C.last_lit++,B===0?C.dyn_ltree[2*ae]++:(C.matches++,B--,C.dyn_ltree[2*(A[ae]+w+1)]++,C.dyn_dtree[2*G(B)]++),C.last_lit===C.lit_bufsize-1},a._tr_align=function(C){ge(C,2,3),pe(C,O,ke),(function(B){B.bi_valid===16?(Me(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(C)}},{"../utils/common":41}],53:[function(r,i,a){"use strict";i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,i,a){"use strict";i.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),jh=R6(),D6=P6(),z6=ca($6(),1);function N6(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function B6(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return ye(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){ye(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:r=>{r.status===200?(ye(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(r.response)):(ye(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r.statusText),t(null))},onerror:r=>{ye(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r),t(null)}})}):null}async function H6(e){const t=e.ref?.value;if(!t)return null;try{const r=document.createElement("canvas"),i=r.getContext("2d");if(i)return r.width=t.naturalWidth,r.height=t.naturalHeight,i.drawImage(t,0,0),await new Promise(a=>{r.toBlob(s=>{s&&ye(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(r){ye(`Failed to get blob for page ${e.src} from canvas`,r)}return null}async function F6(e){if(e.blob)return ye(`Got blob for page ${e.src} from cache`),e.blob;const t=await B6(e)||await H6(e);return t||ye(`Failed to get blob for page ${e.src}`),t}async function G6(){De("download","working");const e=new z6.default,t=fe("images")??{},r=fe("manga"),i=r?.pages??0,a=Math.floor(Math.log10(i||1))+1,s=xe.default.sortBy(xe.default.entries(t),([f])=>Number(f)),l=[],c=f=>{De("dialog",{open:!0,title:Y("BUTTON_DOWNLOAD"),content:ie`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${Y("DOWNLOAD_PROGRESS").replace("##num##",f.toString()).replace("##total##",i.toString())}</p>
          <progress value='${f}' max='${i}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:ie`
        <mov-button @click=${()=>De("download","cancelled")}>
          ${Y("CANCEL")}
        </mov-button>
      `})};c(0);let u=0;for(const[f,p]of s){if(fe("download")==="cancelled"){ye("Download cancelled"),De("dialog",null),De("download",void 0);return}try{const w=await F6(p);if(w){const b=N6(w.type),g=`Page-${Number(f).toString().padStart(a,"0")}.${b}`;ye(`${g} Added to Zip from Blob`),e.file(g,w,{createFolders:!0,compression:"DEFLATE"})}else l.push(p.src??f)}catch(w){ye(`Error processing page ${f}`,w),l.push(p.src??f)}finally{u+=1,c(u)}}De("dialog",{open:!0,title:Y("BUTTON_DOWNLOAD"),content:ie`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${Y("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:ie``}),l.length>0&&(ye("Some images failed to download:",l),e.file("failed_pages.txt",l.join(`
`))),ye("Generating Zip"),e.generateAsync({type:"blob"}).then(f=>{ye("Download Ready"),(0,D6.saveAs)(f,`${r?.title??document.title}.zip`,{autoBom:!1}),l.length>0?De("dialog",{open:!0,title:Y("DOWNLOAD_INCOMPLETE"),icon:"warning",content:ie`<p>${Y("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:ie`<mov-button @click=${()=>De("dialog",null)}>
            ${Y("CLOSE")}
          </mov-button>`}):De("dialog",null)}).catch(f=>{ye("Error generating zip",f),De("dialog",{open:!0,title:Y("WARNING"),icon:"error",content:ie`<p>Error generating zip: ${f.message}</p>`,footer:ie`<mov-button @click=${()=>De("dialog",null)}>
          ${Y("CLOSE")}
        </mov-button>`})}).finally(()=>{De("download",void 0)})}function Kh(){fe("download")!=="working"&&(ye("Downloading Chapter"),G6().catch(e=>ye("Error downloading chapter",e)))}function W6(){Io("hidePageControls",e=>!e)}function zi(e){const t=e.currentTarget||e.target,r=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(r&&r!=="#"?window.location.href=(0,jh.sanitizeUrl)(r):t.id==="series"&&(rl()?window.location.href=window.location.pathname:window.history.back()))}function U6(e){if(e)if(X("viewMode").startsWith("Fluid")){const t=fe("chapter").value;if(t){const r=e.getBoundingClientRect(),i=t.getBoundingClientRect();t.scrollBy({left:r.left-i.left,top:r.top-i.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}nr.listen((e,t,r)=>{r==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):U6(fe("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>De("scrollToPage",void 0),10))});function V6(e){const t=e.detail.value;De("scrollToPage",typeof t=="string"?parseInt(t,10):t)}function q6(e){De("scrollToPage",e)}var Mc=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function xc(e,t,r,i){e.addEventListener?e.addEventListener(t,r,i):e.attachEvent&&e.attachEvent(`on${t}`,r)}function Ni(e,t,r,i){e&&(e.removeEventListener?e.removeEventListener(t,r,i):e.detachEvent&&e.detachEvent(`on${t}`,r))}function Yh(e,t){const r=t.slice(0,t.length-1),i=[];for(let a=0;a<r.length;a++)i.push(e[r[a].toLowerCase()]);return i}function Xh(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let r=t.lastIndexOf("");for(;r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function Z6(e,t){const r=e.length>=t.length?e:t,i=e.length>=t.length?t:e;let a=!0;for(let s=0;s<r.length;s++)i.indexOf(r[s])===-1&&(a=!1);return a}function Jh(e){let t=e.keyCode||e.which||e.charCode;return e.key&&/^[a-z]$/i.test(e.key)?e.key.toUpperCase().charCodeAt(0):(e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t)}var Bi={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Mc?173:189,"=":Mc?61:187,";":Mc?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},Lr={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},Hi={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Rt={16:!1,18:!1,17:!1,91:!1},bt={};for(let e=1;e<20;e++)Bi[`f${e}`]=111+e;var dt=[],Fi=null,Zo=null,Qh="all",pn=new Map,jo=e=>Bi[e.toLowerCase()]||Lr[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),j6=e=>Object.keys(Bi).find(t=>Bi[t]===e),K6=e=>Object.keys(Lr).find(t=>Lr[t]===e),e1=e=>{Qh=e||"all"},Gi=()=>Qh||"all",Y6=()=>dt.slice(0),X6=()=>dt.map(e=>j6(e)||K6(e)||String.fromCharCode(e)),J6=()=>{const e=[];return Object.keys(bt).forEach(t=>{bt[t].forEach(({key:r,scope:i,mods:a,shortcut:s})=>{e.push({scope:i,shortcut:s,mods:a,keys:r.split("+").map(l=>jo(l))})})}),e},t1=e=>{const t=e.target||e.srcElement,{tagName:r}=t;let i=!0;const a=r==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(i=!1),i},Q6=e=>(typeof e=="string"&&(e=jo(e)),dt.indexOf(e)!==-1),e9=(e,t)=>{let r,i;e||(e=Gi());for(const a in bt)if(Object.prototype.hasOwnProperty.call(bt,a))for(r=bt[a],i=0;i<r.length;)r[i].scope===e?r.splice(i,1).forEach(({element:s})=>Ic(s)):i++;Gi()===e&&e1(t||"all")};function t9(e){let t=Jh(e);e.key&&e.key.toLowerCase()==="capslock"&&(t=jo(e.key));const r=dt.indexOf(t);if(r>=0&&dt.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&dt.splice(0,dt.length),(t===93||t===224)&&(t=91),t in Rt){Rt[t]=!1;for(const i in Lr)Lr[i]===t&&(Qr[i]=!1)}}var r1=(e,...t)=>{if(typeof e>"u")Object.keys(bt).forEach(r=>{Array.isArray(bt[r])&&bt[r].forEach(i=>ts(i)),delete bt[r]}),Ic(null);else if(Array.isArray(e))e.forEach(r=>{r.key&&ts(r)});else if(typeof e=="object")e.key&&ts(e);else if(typeof e=="string"){let[r,i]=t;typeof r=="function"&&(i=r,r=""),ts({key:e,scope:r,method:i,splitKey:"+"})}},ts=({key:e,scope:t,method:r,splitKey:i="+"})=>{Xh(e).forEach(a=>{const s=a.split(i),l=s.length,c=s[l-1],u=c==="*"?"*":jo(c);if(!bt[u])return;t||(t=Gi());const f=l>1?Yh(Lr,s):[],p=[];bt[u]=bt[u].filter(w=>{const b=(r?w.method===r:!0)&&w.scope===t&&Z6(w.mods,f);return b&&p.push(w.element),!b}),p.forEach(w=>Ic(w))})};function n1(e,t,r,i){if(t.element!==i)return;let a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(const s in Rt)Object.prototype.hasOwnProperty.call(Rt,s)&&(!Rt[s]&&t.mods.indexOf(+s)>-1||Rt[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!Rt[16]&&!Rt[18]&&!Rt[17]&&!Rt[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(dt),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function o1(e,t){const r=bt["*"];let i=Jh(e);if(e.key&&e.key.toLowerCase()==="capslock"||!(Qr.filter||t1).call(this,e))return;if((i===93||i===224)&&(i=91),dt.indexOf(i)===-1&&i!==229&&dt.push(i),["metaKey","ctrlKey","altKey","shiftKey"].forEach(c=>{const u=Hi[c];e[c]&&dt.indexOf(u)===-1?dt.push(u):!e[c]&&dt.indexOf(u)>-1?dt.splice(dt.indexOf(u),1):c==="metaKey"&&e[c]&&(dt=dt.filter(f=>f in Hi||f===i))}),i in Rt){Rt[i]=!0;for(const c in Lr)if(Object.prototype.hasOwnProperty.call(Lr,c)){const u=Hi[Lr[c]];Qr[c]=e[u]}if(!r)return}for(const c in Rt)Object.prototype.hasOwnProperty.call(Rt,c)&&(Rt[c]=e[Hi[c]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(dt.indexOf(17)===-1&&dt.push(17),dt.indexOf(18)===-1&&dt.push(18),Rt[17]=!0,Rt[18]=!0);const a=Gi();if(r)for(let c=0;c<r.length;c++)r[c].scope===a&&(e.type==="keydown"&&r[c].keydown||e.type==="keyup"&&r[c].keyup)&&n1(e,r[c],a,t);if(!(i in bt))return;const s=bt[i],l=s.length;for(let c=0;c<l;c++)if((e.type==="keydown"&&s[c].keydown||e.type==="keyup"&&s[c].keyup)&&s[c].key){const u=s[c],{splitKey:f}=u,p=u.key.split(f),w=[];for(let b=0;b<p.length;b++)w.push(jo(p[b]));w.sort().join("")===dt.sort().join("")&&n1(e,u,a,t)}}var Qr=function e(t,r,i){dt=[];const a=Xh(t);let s=[],l="all",c=document,u=0,f=!1,p=!0,w="+",b=!1,g=!1;if(i===void 0&&typeof r=="function"&&(i=r),Object.prototype.toString.call(r)==="[object Object]"){const v=r;v.scope&&(l=v.scope),v.element&&(c=v.element),v.keyup&&(f=v.keyup),v.keydown!==void 0&&(p=v.keydown),v.capture!==void 0&&(b=v.capture),typeof v.splitKey=="string"&&(w=v.splitKey),v.single===!0&&(g=!0)}for(typeof r=="string"&&(l=r),g&&r1(t,l);u<a.length;u++){const v=a[u].split(w);s=[],v.length>1&&(s=Yh(Lr,v));let _=v[v.length-1];_=_==="*"?"*":jo(_),_ in bt||(bt[_]=[]),bt[_].push({keyup:f,keydown:p,scope:l,mods:s,shortcut:a[u],method:i,key:a[u],splitKey:w,element:c})}if(typeof c<"u"&&typeof window<"u"){if(!pn.has(c)){const v=(y=window.event)=>o1(y,c),_=(y=window.event)=>{o1(y,c),t9(y)};pn.set(c,{keydownListener:v,keyupListenr:_,capture:b}),xc(c,"keydown",v,b),xc(c,"keyup",_,b)}if(!Fi){const v=()=>{dt=[]};Fi={listener:v,capture:b},xc(window,"focus",v,b)}if(!Zo&&typeof document<"u"){const v=()=>{dt=[];for(const S in Rt)Rt[S]=!1;for(const S in Lr)e[S]=!1},_=v,y=v;document.addEventListener("fullscreenchange",_),document.addEventListener("webkitfullscreenchange",y),Zo={fullscreen:_,webkit:y}}}};function r9(e,t="all"){Object.keys(bt).forEach(r=>{bt[r].filter(i=>i.scope===t&&i.shortcut===e).forEach(i=>{i&&i.method&&i.method({},i)})})}function Ic(e){const t=Object.values(bt).flat();if(t.findIndex(({element:r})=>r===e)<0&&e){const{keydownListener:r,keyupListenr:i,capture:a}=pn.get(e)||{};r&&i&&(Ni(e,"keyup",i,a),Ni(e,"keydown",r,a),pn.delete(e))}if(t.length<=0||pn.size<=0){if(Array.from(pn.keys()).forEach(r=>{const{keydownListener:i,keyupListenr:a,capture:s}=pn.get(r)||{};i&&a&&(Ni(r,"keyup",a,s),Ni(r,"keydown",i,s),pn.delete(r))}),pn.clear(),Object.keys(bt).forEach(r=>delete bt[r]),Fi){const{listener:r,capture:i}=Fi;Ni(window,"focus",r,i),Fi=null}Zo&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",Zo.fullscreen),document.removeEventListener("webkitfullscreenchange",Zo.webkit),Zo=null)}}var Cc={getPressedKeyString:X6,setScope:e1,getScope:Gi,deleteScope:e9,getPressedKeyCodes:Y6,getAllKeyCodes:J6,isPressed:Q6,filter:t1,trigger:r9,unbind:r1,keyMap:Bi,modifier:Lr,modifierMap:Hi};for(const e in Cc){const t=e;Object.prototype.hasOwnProperty.call(Cc,t)&&(Qr[t]=Cc[t])}if(typeof window<"u"){const e=window.hotkeys;Qr.noConflict=t=>(t&&window.hotkeys===Qr&&(window.hotkeys=e),Qr),window.hotkeys=Qr}function i1(){const e=fe("chapter").value;if(X("viewMode").startsWith("Fluid")){const t=X("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:X("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(De("autoScroll",!1),ye("Finished auto scroll"))}else window.scrollBy({top:X("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(De("autoScroll",!1),ye("Finished auto scroll"));fe("autoScroll")&&requestAnimationFrame(i1)}function rs(){fe("autoScroll")?(De("autoScroll",!1),ye("Stopped auto scroll")):(De("autoScroll",!0),requestAnimationFrame(i1),ye("Start auto scroll"))}var ns=!1,n9=xe.default.debounce(()=>{rs(),ns=!1},500);function o9(){!ns&&fe("autoScroll")&&(rs(),ns=!0),ns&&!fe("autoScroll")&&n9()}function i9(){window.addEventListener("wheel",xe.default.throttle(o9,500))}var en=class extends rt{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Et`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
    }

    :host([open]:not([mode='inline'])) dialog,
    .closing {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 24px;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    .icon-container {
      display: flex;
      justify-content: center;
      padding-block-end: 1rem;
      text-align: center;
    }
    :host([icon='success']) .icon-container mov-icon {
      color: var(--theme-color-success, #28a745);
    }
    :host([icon='error']) .icon-container mov-icon {
      color: var(--theme-color-danger, #dc3545);
    }
    :host([icon='warning']) .icon-container mov-icon {
      color: var(--theme-color-warning, #ffc107);
    }
    :host([icon='info']) .icon-container mov-icon {
      color: var(--theme-color-info, #17a2b8);
    }
    :host([icon='question']) .icon-container mov-icon {
      color: var(--theme-color-secondary, #6c757d);
    }

    /* --- MODE: INLINE --- */
    :host([mode='inline']) {
      display: block;
      width: 500px;
      max-width: 100%;
    }
    :host([mode='inline']) dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      box-shadow: none;
      display: flex;
      flex-direction: column;
      visibility: visible;
      position: relative;
      width: 500px;
      max-width: 100%;
      border: 1px solid var(--theme-border-color, #e0e0e0);
      border-radius: 12px;
    }
    :host([mode='inline']) .backdrop {
      display: none;
    }
    :host([mode='inline']) .close-button {
      display: none; /* No close button in inline mode */
    }

    /* --- MODE: DIALOG --- */
    :host([mode='dialog']) {
      --panel-transition: transform 0.15s ease-out, opacity 0.15s ease-out;
    }
    :host([mode='dialog']) dialog {
      opacity: 0;
      transition: var(--panel-transition);
    }
    :host([mode='dialog'][open]) dialog {
      opacity: 1;
    }
    :host([mode='dialog']:not([fullscreen])) dialog {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      border-radius: 12px;
      width: var(--dialog-width, 700px);
    }
    :host([mode='dialog']:not([fullscreen])[open]) dialog {
      transform: translate(-50%, -50%) scale(1);
    }
    :host([fullscreen]) {
      --panel-overlay-transition: none;
    }
    :host([fullscreen]) dialog {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transform: translateY(2rem);
      border-radius: 0;
    }
    :host([fullscreen][open]) dialog {
      transform: translateY(0);
    }
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.mode!=="inline"&&this.lightDismiss&&this.close()}handleClick(t){this.mode!=="inline"&&this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){this.mode!=="inline"&&t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return ie`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":ie`
          <div
            class="header-bar"
            part="header-bar"
          >
            <div class="action-item">
              <slot name="header-actions"></slot>
            </div>
            <div class="header-content" part="title">
              <slot name="label">${this.label}</slot>
            </div>
            <div
              class="close-button-container"
              part="close-button-container"
            >
              <button
                class="close-button"
                part="close-button"
                @click=${this.close}
                aria-label="Close"
              >
                ${Ac}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?ie`
                <div class="icon-container">
                  <mov-icon
                    .name=${a9(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}};z([j({type:Boolean,reflect:!0})],en.prototype,"open",void 0),z([j({type:String,reflect:!0})],en.prototype,"mode",void 0),z([j({type:Boolean,reflect:!0})],en.prototype,"fullscreen",void 0),z([j({type:String,reflect:!0})],en.prototype,"label",void 0),z([j({type:Boolean,reflect:!0,attribute:"without-header"})],en.prototype,"withoutHeader",void 0),z([j({type:Boolean,reflect:!0,attribute:"light-dismiss"})],en.prototype,"lightDismiss",void 0),z([j({type:String,reflect:!0})],en.prototype,"icon",void 0),z([Mn("dialog")],en.prototype,"dialog",void 0),en=z([lt("mov-dialog")],en);function Oc(e){const t=()=>De("dialog",null);e.timer&&setTimeout(t,e.timer),De("dialog",{open:!0,icon:e.icon,title:e.title,content:ie`<div style="padding: 1rem;">${Ld(e.html)}</div>`,footer:ie`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function a9(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function s9(e){const t=e.currentTarget.value;Nd(t==="true")}function l9(e){const t=e.currentTarget.value;xt("locale",t)}function c9(e){const t=e.currentTarget.value;xt("loadMode",t)}function u9(e){const t=e.detail.checked;xt("fitWidthIfOversize",t)}function d9(e){const t=e.currentTarget.value;xt("navbar",t)}function h9(e){const t=e.currentTarget.value;xt("pagination",t)}function f9(e){const t=e.detail.checked;xt("downloadZip",t),t&&Oc({title:Y("ATTENTION"),html:Y("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function p9(e){const t=e.detail.checked;xt("lazyLoadImages",t),t&&Oc({title:Y("WARNING"),html:Y("LAZY_LOAD"),icon:"warning"})}function m9(e){const t=e.detail.value;xt("lazyStart",typeof t=="string"?parseInt(t,10):t)}function g9(e){const t=e.currentTarget.value;xt("loadSpeed",t),["Extreme","All"].includes(t)&&Oc({title:Y("SPEED_WARNING"),html:Y("SPEED_WARNING_MESSAGE"),icon:"warning"})}function v9(e){const t=e.detail.value;xt("zoomStep",typeof t=="string"?parseInt(t,10):t)}function b9(e){const t=e.detail.value,r=typeof t=="string"?parseInt(t,10):t;e4("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${r}vw;}`),xt("minZoom",r)}function w9(e){const t=e.detail.checked;xt("hidePageControls",t)}function _9(e){const t=e.currentTarget.value;xt("header",t)}function y9(e){const t=e.detail.value;xt("scrollHeight",typeof t=="string"?parseInt(t,10):t)}function a1(e){Io("scrollHeight",t=>{const r=t+e*25;if(r<=0)return 0;const i=Math.ceil(window.innerHeight/200)*100;return r>=i?i:r})}function k9(){const e=X("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function E9(){return X("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function s1(e,t=X("zoomMode"),r=X("zoomValue")){const i=k9(),a=E9();if(t==="width")e.width=i,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(r/100):void 0,e.height=void 0}return e}function $n(e=X("zoomMode"),t=X("zoomValue")){ye("Zoom",e,t),xo("zoomMode",e),xo("zoomValue",t),e==="height"?De("scrollToPage",fe("currentPage")):io("header");const r=fe("images"),i=fe("manga"),a={};for(let s=i?.begin??1;s<=(i?.pages??1);s++)a[s]=s1({...r?.[s]},e,t);De("images",a)}function Ko(e,t=X("zoomValue")){return()=>{$n(e,t)}}function os(e=1){return()=>{const t=X("zoomValue")+e*X("zoomStep");t>0&&t<500&&$n("percent",t)}}function S9(e){const t=e.currentTarget.value;xt("zoomMode",t)}function A9(e){const t=e.detail.value,r=typeof t=="string"?parseInt(t,10):t;xt("zoomValue",r),$n("percent",r)}function M9(e){const t=e.detail.value;$n("percent",typeof t=="string"?parseInt(t,10):t)}function wr(e){return()=>{xo("viewMode",e),["FluidLTR","FluidRTL","Book","Manga"].includes(e)?(xo("zoomMode","height"),xo("header","click"),$n("height")):(io("zoomMode"),io("zoomValue"),io("header")),$n()}}function x9(e){const t=e.currentTarget.value;xt("viewMode",t),wr(t)()}function I9(e){const t=X("viewMode")==="FluidRTL"?-1:1;fe("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function C9(e){const t=fe("currentPage")+e;t<0?De("scrollToPage",0):t>(fe("manga")?.pages??1)||De("scrollToPage",t)}function O9(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function T9(e){const t=fe("currentPage"),r=fe("manga");if(!r)return;const i=fe("images")??{},a=r.begin??1,s=r.pages??1,l=u=>{if(u<a||u>s)return!1;if(i[u]?.doublePage)return!0;let f=0;for(let p=u-1;p>=a&&!i[p]?.doublePage;p--)f++;return f%2===0};let c;if(e===1)for(c=t+1;c<=s&&!l(c);)c++;else if(l(t))for(c=t-1;c>a&&!l(c);)c--;else for(c=t;c>a&&!l(c);)c--;c<a?De("scrollToPage",0):c>s?De("scrollToPage",s):De("scrollToPage",c)}function l1(e){const t=X("viewMode"),r=X("zoomMode");ye("Scrolling view",t,"zoom",r,"sign",e),t.match(/^(Book|Manga)$/)&&r==="height"?T9(e):t.startsWith("Fluid")?I9(e):r==="height"?C9(e):O9(e)}function Wi(e){const t=fe("manga")?.[e];t&&t!=="#"?window.location.href=(0,jh.sanitizeUrl)(t):e==="series"&&(rl()?window.location.href=window.location.pathname:window.history.back())}var L9={SCROLL_UP(){l1(-1)},SCROLL_DOWN(){l1(1)},NEXT_CHAPTER(){Wi("next")},PREVIOUS_CHAPTER(){Wi("prev")},RETURN_CHAPTER_LIST(){Wi("series")},ENLARGE(){os(1)()},REDUCE(){os(-1)()},RESTORE(){Ko("percent",100)()},FIT_WIDTH(){Ko("width")()},FIT_HEIGHT(){Ko("height")()},SETTINGS(){zd("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){wr("WebComic")()},VIEW_MODE_VERTICAL(){wr("Vertical")()},VIEW_MODE_LEFT(){wr("FluidRTL")()},VIEW_MODE_RIGHT(){wr("FluidLTR")()},VIEW_MODE_GALLERY(){wr("Gallery")()},SCROLL_START(){rs()},INCREASE_SPEED(){a1(1)},DECREASE_SPEED(){a1(-1)},TOGGLE_CONTROLS(){Io("hidePageControls",e=>!e)}};function c1(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,Qr.unbind(),xe.default.keys(X("keybinds")).forEach(e=>{Qr(X("keybinds")[e]?.join(",")??"",xe.default.throttle(t=>{fe("panel")!=="keybindingsEditor"&&(t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),L9[e]())},100))})}var Dn=class extends rt{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=Et`
    :host {
      display: contents; /* Use contents to not interfere with layout */
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
    }

    .slider-pagination {
      display: flex;
      position: fixed;
      bottom: 30px;
      left: 0;
      right: 0;
      background-color: transparent;
      justify-content: center;
      align-items: center;
      gap: 3px;
      width: 100%;
      max-width: 100%;
      z-index: 100;
    }

    .pagination-button {
      background: var(--mov-color-fill-loud);
      border: 1px solid var(--mov-color-fill-loud);
      color: var(--mov-color-on-loud);
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
    }

    .pagination-button:hover:not(:disabled) {
      opacity: 0.8;
      transform: translateY(-1px);
    }

    .pagination-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-button mov-icon {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    .slider-container {
      position: relative;
      max-width: 1000px;
      width: inherit;
      margin: 0 5px;
      --mov-slider-track-height: 4px;
      --mov-slider-thumb-size: 16px;
    }

    .tooltip {
      position: absolute;
      bottom: 45px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--theme-body-background);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 1001;
    }

    .pagination-button:hover .tooltip {
      opacity: 1;
    }

    .side-arrow {
      position: fixed;
      top: var(--header-height, 50px);
      bottom: 0;
      width: 10vw;
      height: calc(100vh - var(--header-height, 50px));
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 99;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      -webkit-tap-highlight-color: transparent;
    }

    .side-arrow:hover {
      background-color: var(--mov-color-primary-alpha-10);
      opacity: 1;
    }

    .side-arrow.left {
      left: 0;
    }

    .side-arrow.right {
      right: 0;
    }

    .side-arrow:active {
      background-color: var(--mov-color-primary-alpha-20);
    }

    .side-arrow mov-icon {
      width: 48px;
      height: 48px;
      fill: var(--mov-color-on-primary);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    }

    .side-arrow:disabled {
      display: none;
    }
  `}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return ie`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${zi}
          value="${this.prev}"
          ?disabled=${xr(this.prev)||this.prev==="#"}
        >
          <mov-icon name="arrow-big-left"></mov-icon>
          <div class="tooltip">Previous Chapter</div>
        </button>

        <button
          class="pagination-button"
          @click=${this.goToPreviousPage}
          ?disabled=${this.isFirstPage}
        >
          <mov-icon name="chevron-left"></mov-icon>
          <div class="tooltip">Previous Page</div>
        </button>

        <div class="slider-container">
          <mov-slider
            class="pagination-slider"
            min="${this.startPage}"
            max="${this.totalPages}"
            .value="${this.currentPage}"
            show-tooltip
            @input="${V6}"
          ></mov-slider>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${zi}
          value="${this.next}"
          ?disabled=${xr(this.next)||this.next==="#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return ie`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(xr(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(xr(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return He;const t=this.mode==="slider"||this.mode==="both",r=this.mode==="side-arrows"||this.mode==="both";return ie`
      ${t?this.renderSlider():He} ${r?this.renderSideArrows():He}
    `}handleLeftArrowClick(){this.isFirstPage?Wi("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?Wi("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){De("scrollToPage",t)}};z([j({type:String})],Dn.prototype,"mode",void 0),z([j({type:Number})],Dn.prototype,"currentPage",void 0),z([j({type:Number})],Dn.prototype,"totalPages",void 0),z([j({type:Number})],Dn.prototype,"startPage",void 0),z([j({type:String})],Dn.prototype,"next",void 0),z([j({type:String})],Dn.prototype,"prev",void 0),Dn=z([lt("manga-pagination")],Dn);var zn=class extends rt{constructor(...t){super(...t),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Et`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
      --panel-transition: transform 0.25s ease-out;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
      width: 350px;
      top: 0;
      bottom: 0;
      height: 100%;
      transition: var(--panel-transition);
    }

    :host([open]) dialog,
    .closing {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 24px;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    :host([placement='start']) dialog {
      left: 0;
      transform: translateX(-100%);
    }
    :host([placement='end']) dialog {
      right: 0;
      transform: translateX(100%);
    }
    :host([placement='top']) dialog {
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      transform: translateY(-100%);
    }
    :host([placement='bottom']) dialog {
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
      top: auto;
      transform: translateY(100%);
    }
    :host([open]) dialog {
      transform: none;
    }
    :host([placement='end']) .action-item {
      order: 3;
    }
    :host([placement='end']) .header-content {
      order: 2;
    }
    :host([placement='end']) .close-button-container {
      order: 1;
      justify-content: flex-start;
    }
    .footer-slot {
      display: block;
      padding: 1rem;
      border-top: 1px solid var(--theme-border-color, #e0e0e0);
    }
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.lightDismiss&&this.close()}handleClick(t){this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},250)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return ie`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":ie`
          <div
            class="header-bar"
            part="header-bar"
          >
            <div class="action-item">
              <slot name="header-actions"></slot>
            </div>
            <div class="header-content" part="title">
              <slot name="label">${this.label}</slot>
            </div>
            <div
              class="close-button-container"
              part="close-button-container"
            >
              <button
                class="close-button"
                part="close-button"
                @click=${this.close}
                aria-label="Close"
              >
                ${Ac}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}};z([j({type:Boolean,reflect:!0})],zn.prototype,"open",void 0),z([j({type:String,reflect:!0})],zn.prototype,"placement",void 0),z([j({type:String,reflect:!0})],zn.prototype,"label",void 0),z([j({type:Boolean,reflect:!0,attribute:"without-header"})],zn.prototype,"withoutHeader",void 0),z([j({type:Boolean,reflect:!0,attribute:"light-dismiss"})],zn.prototype,"lightDismiss",void 0),z([Mn("dialog")],zn.prototype,"dialog",void 0),zn=z([lt("mov-drawer")],zn);var co=class extends rt{static{this.styles=Et`
    :host {
      position: relative;
      display: inline-block;
    }
    :host([checkable]) {
      --mov-dropdown-item-checkmark-display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: var(--theme-background-color, #f9f9f9);
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 100;
      list-style: none;
      padding: 0;
      margin: 4px 0 0;
      border: 1px solid var(--theme-border-color, #ccc);
      border-radius: 5px;
    }
    :host([placement^='top']) .dropdown-content {
      top: auto;
      bottom: 100%;
      margin: 0 0 4px;
    }
    :host([placement$='end']) .dropdown-content {
      left: auto;
      right: 0;
    }
    :host([open]) .dropdown-content {
      display: block;
    }
  `}constructor(){super(),this.open=!1,this.checkable=!1,this.distance=0,this.skidding=0,this.placement="bottom-start",this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(t){this.open&&!t.composedPath().includes(this)&&this.hide()}show(){this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}toggle(){this.open?this.hide():this.show()}render(){return ie`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
        part="trigger"
      >
        <slot name="trigger"></slot>
      </div>
      <div
        class="dropdown-content"
        part="menu"
      >
        <slot></slot>
      </div>
    `}};z([j({type:Boolean,reflect:!0})],co.prototype,"open",void 0),z([j({type:Boolean,reflect:!0})],co.prototype,"checkable",void 0),z([j({type:Number})],co.prototype,"distance",void 0),z([j({type:Number})],co.prototype,"skidding",void 0),z([j({type:String})],co.prototype,"placement",void 0),co=z([lt("mov-dropdown")],co);var Nn=class extends rt{constructor(...t){super(...t),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=Et`
    :host {
      display: block;
      min-width: max-content;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      cursor: pointer;
      color: var(--theme-body-text-color);
      background-color: var(--theme-background-color);
      gap: 10px;
    }
    .item:hover {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([selected]) .item,
    :host([checked]) .item {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([disabled]) .item {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([variant='danger']) .item {
      color: var(--theme-color-danger, #dc3545);
    }
    .item-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .check-icon {
      display: var(--mov-dropdown-item-checkmark-display, none);
      visibility: hidden;
      width: 1.2em;
      height: 1.2em;
    }
    :host([selected]) .check-icon,
    :host([checked]) .check-icon {
      visibility: visible;
    }
    ::slotted([slot='details']) {
      font-size: 0.9em;
      opacity: 0.7;
    }
  `}handleSelect(){this.disabled||this.dispatchEvent(new CustomEvent("wa-select",{detail:{item:this},bubbles:!0,composed:!0}))}render(){return ie`
      <div
        class="item"
        @click=${this.handleSelect}
        part="base"
      >
        <div
          class="item-content"
          part="label"
        >
          <mov-icon
            class="check-icon"
            name="IconCheck"
            part="checkmark"
          ></mov-icon>
          <slot
            name="icon"
            part="icon"
          ></slot>
          <slot></slot>
        </div>
        <slot
          name="details"
          part="details"
        ></slot>
      </div>
    `}};z([j({type:Boolean,reflect:!0})],Nn.prototype,"selected",void 0),z([j({type:Boolean,reflect:!0})],Nn.prototype,"checked",void 0),z([j({type:Boolean,reflect:!0})],Nn.prototype,"disabled",void 0),z([j({type:String})],Nn.prototype,"value",void 0),z([j({type:String,reflect:!0})],Nn.prototype,"variant",void 0),z([j({type:String,reflect:!0})],Nn.prototype,"type",void 0),Nn=z([lt("mov-dropdown-item")],Nn);var Tc=class extends rt{constructor(...t){super(...t),this.orientation="horizontal"}static{this.styles=Et`
    :host {
      display: block;
    }
    :host([orientation='horizontal']) .divider {
      border-top: 1px solid var(--theme-border-color, #ccc);
      margin: 4px 0;
    }
    :host([orientation='vertical']) .divider {
      border-left: 1px solid var(--theme-border-color, #ccc);
      height: 100%;
      margin: 0 4px;
      display: inline-block;
    }
  `}render(){return ie`<div
      class="divider"
      role="separator"
    ></div>`}};z([j({type:String,reflect:!0})],Tc.prototype,"orientation",void 0),Tc=z([lt("mov-divider")],Tc);var u1="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;box-shadow:inset 0 -1px #959da5}",R9=Mr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atom=i,r.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var r;(r=this.unsubscribe)===null||r===void 0||r.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),Lc=Mr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atoms=i,r.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(r=>r.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var r;(r=this.unsubscribes)===null||r===void 0||r.forEach(i=>i())}get values(){return this.atoms.map(r=>r.get())}};e.MultiStoreController=t})),P9=Mr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=Lc();function r(...i){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,i)}}}e.useStores=r})),$9=Mr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=Lc(),r=(i,a)=>class extends i{constructor(...l){super(...l),new t.MultiStoreController(this,a)}};e.withStores=r})),D9=Mr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=R9();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var r=Lc();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return r.MultiStoreController}});var i=P9();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return i.useStores}});var a=$9();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),Yo=D9(),d1=class extends rt{static{this.styles=Et`
    :host {
      display: inline-flex;
      vertical-align: middle;
      z-index: 100;
    }

    :host(:has(mov-dropdown[open])) {
      z-index: 110;
    }

    .button-group {
      display: flex;
      flex-wrap: wrap;
    }

    ::slotted(mov-button),
    ::slotted(mov-dropdown) {
      margin-inline-start: -1px;
      --mov-border-radius-m: 0;
    }

    ::slotted(mov-button:first-child),
    ::slotted(mov-dropdown:first-child) {
      margin-inline-start: 0;
      --mov-border-radius-m: 0.375rem 0 0 0.375rem;
    }

    ::slotted(mov-button:last-child),
    ::slotted(mov-dropdown:last-child) {
      --mov-border-radius-m: 0 0.375rem 0.375rem 0;
    }

    ::slotted(mov-button:first-child:last-child),
    ::slotted(mov-dropdown:first-child:last-child) {
      --mov-border-radius-m: 0.375rem;
    }

    /* Handling adjacent button groups visual merge */
    :host(.button-group-merged-start) {
      margin-inline-start: -1px;
    }
    :host(.button-group-merged-start) ::slotted(mov-button:first-child),
    :host(.button-group-merged-start) ::slotted(mov-dropdown:first-child) {
      --mov-border-radius-m: 0 0 0 0;
    }

    :host(.button-group-merged-end) ::slotted(mov-button:last-child),
    :host(.button-group-merged-end) ::slotted(mov-dropdown:last-child) {
      --mov-border-radius-m: 0 0 0 0;
    }

    ::slotted(mov-dropdown) {
      display: flex;
    }
  `}render(){return ie`
      <div
        class="button-group"
        role="group"
      >
        <slot></slot>
      </div>
    `}};d1=z([lt("mov-button-group")],d1);var is=49,z9=100,N9=class pp{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=xe.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const i=X("header"),{scrollY:a}=window;let s="none";X("zoomMode")!=="height"&&a+window.innerHeight+z9>document.body.scrollHeight?s="end":a>this.prevOffset&&a>is?s="hide":i==="scroll"&&a<this.prevOffset&&a>is?s="show":i!=="click"&&a<=is&&(s="top");let l=!1;if(this.headroom!==s&&(this.headroom=s,l=!0),i==="scroll"){const c=s!=="hide";this.headerVisible!==c&&(this.headerVisible=c,l=!0)}l&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=xe.default.throttle(i=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(X("header"))){const a=pp.isMouseInsideRegion(i,window.innerWidth,is*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{X("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const r=X("header");X("zoomMode")==="height"&&["click","hover"].includes(r)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const r of t)if(r.open)return!0;return!1}static isMouseInsideRegion(t,r,i){return t.clientX>=0&&t.clientX<=r&&t.clientY>=0&&t.clientY<=i}},B9=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this);const t=document.createElement("canvas");this.canvasContext=t.getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,r=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=r){this.value=t,this.host.requestUpdate();return}const i="...",a=r-this.canvasContext.measureText(i).width;let s="",l="";for(let c=1;c<t.length;c++){const u=t.substring(0,c),f=t.substring(t.length-c);if(this.canvasContext.measureText(u).width+this.canvasContext.measureText(f).width>a)break;s=u,l=f}this.value=`${s}${i}${l}`,this.host.requestUpdate()}};function h1(e=window.location.href){xr(Co(e))||(ye(`Bookmark Removed ${e}`),Io("bookmarks",t=>[...t.filter(r=>r.url!==e)]))}function H9(e){const t=e.currentTarget.value;ye(`Bookmark Removed ${t}`),ur.error({title:Y("BOOKMARK_REMOVED"),duration:1e4}),h1(t)}function F9(){De("panel","bookmarks")}function f1(){const e=fe("currentPage"),t={name:fe("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};Co(t.url)?(Io("bookmarks",r=>[...r.filter(i=>i.url!==t.url)]),ur.error({title:Y("BOOKMARK_REMOVED"),duration:1e4})):(Io("bookmarks",r=>[...r,t]),ur.success({title:Y("BOOKMARK_SAVED"),description:Y("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Rc(){De("panel","none")}function G9(){De("panel","settings")}function W9(){De("panel","keybindings")}function U9(e){const t={};xe.default.keys(e).forEach(r=>{const i=e[r].value;if(i){const a=i.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[r]=a.length>0?a:void 0}}),xt("keybinds",t),De("panel","keybindings"),c1()}function V9(){De("panel","keybindingsEditor")}var q9="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;gap:10px;padding:0 20px;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:60px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;opacity:.8;top:25px;left:5px}#Toolbar{order:1}#GlobalFunctions{order:4}#ViewerTitle{order:2;justify-content:center;display:flex}#ZoomControl{flex-direction:column;order:3;align-items:center;gap:3px;min-width:100px;padding:10px 5px;display:flex}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:19px;font-weight:400;overflow:hidden}",p1="#Header.mobile,#Header.tablet{flex-flow:wrap;justify-content:center;gap:0;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #Toolbar,.tablet #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)),.mobile #BookMode,.mobile #MangaMode,.tablet #BookMode,.tablet #MangaMode{display:none}",as=class extends rt{static{this.styles=[Se(q9),Se(p1),Se(u1),Et``]}constructor(){super(),this.headroomController=new N9(this),this.titleController=new B9(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return ie``;const{headroom:t,headerVisible:r}=this.headroomController,i=X("keybinds"),a=s=>{if(fe("device")!=="desktop")return He;const l=i[s];return!l||l.length===0?He:l.map(c=>ie`<kbd slot="details">${c}</kbd>`)};return ie`
      <toggle-button
        id="menu"
        mode="burger"
        class="${St({[X("header")]:!0,hide:["top","end"].includes(t)})}"
        ?active=${r}
        @toggle=${this.headroomController.toggleHeaderVisibility}
      >
      </toggle-button>
      <header
        id="Header"
        class="${St({[X("header")]:!0,[`headroom-${t}`]:!0,visible:r&&["hide","none"].includes(t),[fe("device")]:!0})}"
      >
        <mov-button-group
          id="Toolbar"
          class="${St({"button-group-merged-end":["mobile","tablet"].includes(fe("device"))})}"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${Y("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${G9}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${Y("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${W9}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${Y("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${F9}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${Y("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${St({running:fe("autoScroll")})}"
              @click=${rs}
            >
              <mov-icon
                slot="icon"
                name="${fe("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${Y("SCROLL_START")} ${a("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${W6}"
              ?selected=${X("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${Y("TOGGLE_CONTROLS")} ${a("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${Y("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${wr("WebComic")}"
              ?selected=${X("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${Y("VIEW_MODE_WEBCOMIC")} ${a("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${wr("Vertical")}"
              ?selected=${X("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${Y("VIEW_MODE_VERTICAL")} ${a("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${wr("FluidLTR")}"
              ?selected=${X("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${Y("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${wr("FluidRTL")}"
              ?selected=${X("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${Y("VIEW_MODE_RIGHT")} ${a("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${wr("Book")}"
              ?selected=${X("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${Y("VIEW_MODE_BOOK")} ${a("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${wr("Manga")}"
              ?selected=${X("viewMode")==="Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${Y("VIEW_MODE_MANGA")} ${a("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${wr("Gallery")}"
              ?selected=${X("viewMode")==="Gallery"}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${Y("VIEW_MODE_GALLERY")} ${a("VIEW_MODE_GALLERY")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${Y("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${os()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${Y("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${Ko("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${Y("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${os(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${Y("REDUCE")} ${a("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${Ko("width")}"
              ?selected=${X("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${Y("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${Ko("height")}"
              ?selected=${X("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${Y("FIT_HEIGHT")} ${a("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </mov-button-group>
        <mov-button-group
          id="GlobalFunctions"
          class="${St({"button-group-merged-start":["mobile","tablet"].includes(fe("device"))})}"
        >
          <mov-button
            id="series"
            href="${this.manga.series??He}"
            @click=${zi}
            title="${Y("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${Y("DOWNLOAD_ZIP")}"
            @click=${Kh}
            ?disabled=${fe("download")!=="available"}
            ?loading=${fe("download")==="working"}
          >
            <mov-icon
              name="${fe("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??He}"
            title="${Y("PREVIOUS_CHAPTER")}"
            @click=${zi}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??He}"
            title="${Y("NEXT_CHAPTER")}"
            @click=${zi}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </mov-button-group>
        <div id="ViewerTitle">
          <h1
            id="MangaTitle"
            title="${this.manga.title}"
          >
            ${this.titleController.value??this.manga.title}
          </h1>
        </div>
        <div id="ZoomControl">
          <output id="ZoomVal">
            Zoom:
            ${X("zoomMode")==="percent"?`${X("zoomValue")}%`:X("zoomMode")}
          </output>
          <mov-slider
            id="Zoom"
            name="Zoom"
            .value="${X("zoomValue")}"
            min="${X("minZoom")}"
            max="200"
            show-tooltip
            @input=${M9}
          ></mov-slider>
        </div>
      </header>
    `}};z([Mn("#MangaTitle")],as.prototype,"mangaTitleElement",void 0),z([j({type:Object})],as.prototype,"manga",void 0),as=z([lt("reader-header"),(0,Yo.useStores)(Tt,Mo,nr)],as);var Z9="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:14px;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:14px}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",m1=class extends rt{static{this.styles=[Se(Z9)]}listBookmarks(){return nl(X("bookmarks"))?[Y("LIST_EMPTY")]:X("bookmarks").map((t,r)=>ie`
        <div
          id="Bookmark${r+1}"
          class="bookmark-item"
        >
          <div class="bookmark-info">
            <div class="bookmark-name">${t.name}</div>
            <a
              class="bookmark-url"
              href="${t.url}"
              target="_blank"
              >${t.url}</a
            >
          </div>
          <div class="bookmark-details">
            <div class="bookmark-date">${new Date(t.date).toISOString().slice(0,10)}</div>
            <div class="bookmark-page">Page: ${t.page}</div>
          </div>
          <div class="bookmark-actions">
            <a
              href="${t.url}"
              target="_blank"
            >
              <mov-button
                title="Open Bookmark"
                size="small"
              >
                <mov-icon
                  name="IconExternalLink"
                  size="16px"
                ></mov-icon>
              </mov-button>
            </a>
            <mov-button
              title="Delete Bookmark"
              size="small"
              value="${t.url}"
              @click=${H9}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return ie`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${fe("panel")==="bookmarks"}
        light-dismiss
        @close=${Rc}
      >
        <mov-button
          class="Bookmark"
          title="${Y("BOOKMARK")}"
          @click=${f1}
          slot="header-actions"
        >
          <mov-icon
            name="${Co()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${Y("BOOKMARKS")}</h2>
        <h2 slot="label">${Y("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};m1=z([lt("bookmark-panel"),(0,Yo.useStores)(Tt,Mo,nr)],m1);function*j9(e,t){const r=typeof t=="function";if(e!==void 0){let i=-1;for(const a of e)i>-1&&(yield r?t(i):t),i++,yield a}}var K9="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",g1=class extends rt{constructor(...t){super(...t),this.keybindsRefs=xe.default.keys(X("keybinds")).reduce((r,i)=>(r[i]=hl(),r),{})}static{this.styles=[Se(K9),Se(u1)]}keybindList(){const t=X("keybinds");return xe.default.keys(t).map(r=>{const i=t[r]?.length?j9(t[r]?.map(a=>ie`<kbd class="dark">${a}</kbd>`)," / "):"";return ie`<span>${Y(r)}:</span> <span>${i}</span>`})}keybindEditor(){const t=X("keybinds");return xe.default.keys(t).map(r=>ie`<label for="${r}">${Y(r)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${r}"
            name="${r}"
            value="${t[r]?.join(" , ")??He}"
            ${pl(this.keybindsRefs[r])}
          />`)}render(){return ie`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${fe("panel").startsWith("keybindings")}
        placement="end"
        @close=${Rc}
      >
        <h2 slot="label">${Y("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${fe("panel")==="keybindingsEditor"?ie` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${Y("SAVE_KEYBINDS")}"
                @click=${()=>U9(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${Y("BUTTON_SAVE")}
              </mov-button>`:ie` <mov-button
                id="EditKeybindings"
                type="button"
                title="${Y("EDIT_KEYBINDS")}"
                @click=${V9}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${Y("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${fe("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${Ld(Y("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};g1=z([lt("keybindings-panel"),(0,Yo.useStores)(Tt,Mo,nr)],g1);function*Y9(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}function ss(e,t=1){return Array(e).fill(0).map((r,i)=>i+1).filter(r=>r>=t)}function Ui(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var ls=e=>e%100===0?15:e%50===0?10:e%25===0?5:2.5;function X9(e,t,r,i){let a="";for(let s=0;s<=e;s+=5){const l=Ao` <line
      x1="${s}"
      y1="0"
      x2="${s}"
      y2="${ls(s)}"
    />`;if(a+=l,s!==0&&s%50===0){const c=Ao` <text
        x="${s}"
        y="25"
        text-anchor="middle"
        font-size="${ls(s)}px"
      >
        ${s}
      </text>`;a+=c}}for(let s=0;s<=t;s+=5){const l=Ao` <line
      x1="0"
      y1="${s}"
      x2="${ls(s)}"
      y2="${s}"
    />`;if(a+=l,s!==0&&s%50===0){const c=Ao` <text
        x="25"
        y="${s}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${ls(s)}px"
      >
        ${s}
      </text>`;a+=c}}return Ao` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 ${e} ${t}"
  >
    <rect
      width="${e}"
      height="${t}"
      fill="${r}"
    />
    <text
      fill="${i}"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="30"
      dy="10.5"
      font-weight="bold"
      x="50%"
      y="50%"
      text-anchor="middle"
    >
      ${e}x${t}
    </text>
    <g
      stroke-width="1"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="10px"
      font-weight="100"
      fill="${i}"
      stroke="${i}"
    >
      ${a}
    </g>
  </svg>`}function Yt(e,t,r="#0F1C3F",i="#ECEAD9"){return Ui(X9(e,t,r,i))}var v1=xe.default.values(Ot).map(e=>e[900]),b1=[400,600,900,1200,1400,1600,1970],w1=[600,800,1e3,1200,1400,2e3,2600];function J9(){const e=Math.floor(Math.random()*b1.length),t=Math.floor(Math.random()*w1.length),r=Math.floor(Math.random()*v1.length);return Yt(b1[e],w1[t],v1[r])}function _1(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function Q9(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var e7=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",Vi=class extends rt{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[Se(e7),Et`
      #Navigation {
        transition: opacity 0.2s ease-in-out;
      }
      #Navigation.hiding {
        opacity: 0;
        /* Disable transition during position change to avoid animating the hide */
        transition: none;
      }

      .Thumbnail .ThumbnailImg[src=''],
      .Thumbnail .ThumbnailImg:not([src]) {
        background-image: url('${Se(Ui(yl))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Se(Ui(kl))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return He;const t=fe("manga"),r={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},i=fe("images")||{},a=xe.default.keys(i).filter(s=>{const l=parseInt(s,10);return l>=(t?.begin??1)&&l<=(t?.pages??1)&&i[l]?.status==="loaded"}).length;return ie`
      <nav
        id="Navigation"
        class="${St(r)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${v6}
          <i>${a}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${Y("PAGES_LOADED")}
          <span>: ${fe("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?_1:null}
        >
          ${Y9(ss(t?.pages??1,t?.begin??1),s=>ie` <figure
                id="Thumbnail${s}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${s}"
                @click=${()=>q6(s)}
              >
                <img
                  id="ThumbnailImg${s}"
                  alt=""
                  class="ThumbnailImg"
                  src=${fe("images")?.[s]?.src??He}
                />
                <figcaption class="ThumbnailIndex">${s}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};z([j({type:String})],Vi.prototype,"mode",void 0),z([j({type:Boolean})],Vi.prototype,"forceExpanded",void 0),z([Ht()],Vi.prototype,"isHiding",void 0),Vi=z([lt("navbar-thumbnails"),(0,Yo.useStores)(Tt,Mo,nr)],Vi);function t7(){const e=oo()?"true":"false";return ie` <div class="ControlLabel">
    ${Y("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${s9}
    >
      <segmented-control-option
        value="false"
        label=${Y("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function r7(){return Eo.map(e=>ie`
      <option
        value="${e.ID}"
        ?selected=${X("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function n7(){return ie` <div class="ControlLabel locale">
    ${Y("LANGUAGE")}
    <select
      id="locale"
      @change="${l9}"
    >
      ${r7()}
    </select>
  </div>`}var o7=()=>ie`${t7()} ${n7()}`;function i7(){return ie`
    <div class="ControlLabel loadMode">
      ${Y("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${c9}"
      >
        <option
          value="wait"
          ?selected=${X("loadMode")==="wait"}
        >
          ${Y("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${X("loadMode")==="always"}
        >
          ${Y("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${X("loadMode")==="never"}
        >
          ${Y("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function a7(){return ie`
    <div class="ControlLabel PagesPerSecond">
      ${Y("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${g9}"
      >
        <option
          value="Safe"
          ?selected=${X("loadSpeed")==="Safe"}
        >
          ${Y("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${X("loadSpeed")==="Standard"}
        >
          ${Y("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${X("loadSpeed")==="Faster"}
        >
          ${Y("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${X("loadSpeed")==="Extreme"}
        >
          ${Y("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${X("loadSpeed")==="All"}
        >
          ${Y("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}var s7=()=>ie`${i7()} ${a7()}`;function l7(){return ie`
    <div class="ControlLabel fitIfOversize">
      ${Y("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${X("fitWidthIfOversize")}
        @change=${u9}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${Y("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${X("downloadZip")}
        @change=${f9}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${Y("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${X("hidePageControls")}
        @change=${w9}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${Y("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${X("lazyLoadImages")}
        @change=${p9}
      ></mov-switch>
    </div>
  `}function c7(){return ie`
    <div
      class="${St({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:X("lazyLoadImages")})}"
    >
      <span>
        ${Y("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          class="RangeValue"
          for="lazyStart"
        >
          ${X("lazyStart")}
        </output>
      </span>
      <mov-slider
        name="lazyStart"
        id="lazyStart"
        .value="${X("lazyStart")}"
        min="5"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="3"
        @input="${m9}"
      ></mov-slider>
    </div>
  `}function u7(){return ie`
    <div class="ControlLabel headerType">
      ${Y("HEADER_TYPE")}
      <segmented-control
        .value=${X("header")}
        @change=${_9}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${Y("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${Y("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${Y("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${Y("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${Y("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function d7(){return ie`
    <div class="ControlLabel pagination">
      ${Y("PAGINATION_TYPE")}
      <segmented-control
        .value=${X("pagination")}
        @change=${h9}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${Y("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${Y("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${Y("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${Y("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function h7(){return ie`
    <div class="ControlLabel navbarType">
      ${Y("NAVBAR_TYPE")}
      <segmented-control
        .value=${X("navbar")}
        @change=${d9}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${Y("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${Y("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${Y("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${Y("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function f7(){return ie`
    <div class="ControlLabel autoScroll">
      <span>
        ${Y("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          class="RangeValue"
          for="scrollHeight"
        >
          ${X("scrollHeight")}px
        </output>
      </span>
      <mov-slider
        name="scrollHeight"
        id="scrollHeight"
        .value="${X("scrollHeight")}"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${y9}"
      ></mov-slider>
    </div>
  `}var p7=()=>ie`${l7()} ${d7()} ${c7()} ${u7()} ${h7()} ${f7()}`;function m7(){const e=X("colorScheme")==="dark";xt("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(X("colorScheme"))}function cs(e){xt("theme",e instanceof CustomEvent?e.detail.value:e.currentTarget.value)}function g7(){return ie`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${Y("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${m7}
        ?active=${X("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${Y("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${X("theme")}"
        title="${X("theme")}"
        @input=${cs}
        .swatches=${xe.default.values(Sc)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${X("theme")}"
      mode="steps"
      .selected=${X("theme")}
      @change="${cs}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${xe.default.values(Sc).map(e=>ie`<color-swatch
            .color="${e}"
            .selected=${X("theme")}
            @change=${cs}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${Y("THEME_HUE")} & ${Y("THEME_SHADE")}</summary>
      <color-panel
        .selected=${X("theme")}
        @change=${cs}
      ></color-panel>
    </details>
  `}function v7(){return ie` <div class="ControlLabel DefaultZoomMode">
    ${Y("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${X("zoomMode")}
      @change=${S9}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${Y("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${Y("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${Y("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function b7(){return ie`
    <div
      class="${St({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:X("zoomMode")==="percent"})}"
    >
      <span>
        ${Y("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${X("zoomValue")}%
        </output>
      </span>
      <mov-slider
        name="zoomValue"
        id="zoomValue"
        .value="${X("zoomValue")}"
        min="5"
        max="200"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${A9}"
      ></mov-slider>
    </div>
  `}function w7(){return ie`
    <div class="ControlLabel minZoom">
      <span>
        ${Y("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${X("minZoom")}%
        </output>
      </span>
      <mov-slider
        name="minZoom"
        id="minZoom"
        .value="${X("minZoom")}"
        min="25"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="4"
        @input="${b9}"
      ></mov-slider>
    </div>
  `}function _7(){return ie`
    <div class="ControlLabel zoomStep">
      <span>
        ${Y("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${X("zoomStep")}%
        </output>
      </span>
      <mov-slider
        name="zoomStep"
        id="zoomStep"
        .value="${X("zoomStep")}"
        min="10"
        max="50"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${v9}"
      ></mov-slider>
    </div>
  `}function y7(){return ie`
    <div class="ControlLabel viewMode">
      ${Y("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${X("viewMode")}
        @change=${x9}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${Y("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${Y("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${Y("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${Y("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
        <segmented-control-option
            value="Book"
            label=${Y("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${Y("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
        <segmented-control-option
            value="Gallery"
            label=${Y("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var k7=()=>ie`${v7()} ${b7()} ${w7()} ${_7()} ${y7()}`,E7="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",y1=class extends rt{static{this.styles=[Et`
      #SettingsPanel.mobile #SettingsPanelZoom,
      #SettingsPanel.mobile .fitIfOversize,
      #SettingsPanel.mobile .showThumbnails,
      #SettingsPanel.mobile .lazyLoadImages,
      #SettingsPanel.mobile .downloadZip,
      #SettingsPanel.mobile .minZoom,
      #SettingsPanel.mobile .zoomStep,
      #SettingsPanel.mobile .headerType,
      #SettingsPanel.mobile .navbarType,
      #SettingsPanel.mobile .autoScroll {
        display: none;
      }
    `,Se(E7)]}render(){return ie`
      <mov-drawer
        id="SettingsPanel"
        ?open=${fe("panel")==="settings"}
        @close=${Rc}
        placement="start"
        class="${fe("device")}"
      >
        <h2 slot="label">${Y("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${c4}"
          title="${Y("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${Y("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${Y("GENERAL")}</legend>
            ${o7()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${Y("THEME")}</legend>
            ${g7()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${Y("LOADING")}</legend>
            ${s7()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${Y("ZOOM")}</legend>
            ${k7()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${Y("OTHERS")}</legend>
            ${p7()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};y1=z([lt("settings-panel"),(0,Yo.useStores)(Tt,Mo,nr)],y1);function S7(e){return new Promise(function(t,r){var i=new FileReader,a=typeof i.readAsBinaryString=="function";i.onloadend=function(){var s=i.result||"";if(a)return t(s);t(x7(s))},i.onerror=r,a?i.readAsBinaryString(e):i.readAsArrayBuffer(e)})}function A7(e){return S7(e).then(btoa)}function M7(e){return A7(e).then(function(t){return"data:"+e.type+";base64,"+t})}function x7(e){for(var t="",r=new Uint8Array(e),i=r.byteLength,a=-1;++a<i;)t+=String.fromCharCode(r[a]);return t}async function I7(e,t){ye("Fetching page: ",e);try{const r=await(await fetch(e)).text();return new DOMParser().parseFromString(r,t)}catch(r){throw ye("Failed to fetch page: ",r),r}}async function C7(e){return I7(e,"text/html")}async function O7(e,t,r){try{return(await C7(e)).querySelector(t)?.getAttribute(r)}catch(i){return ye("Failed to get element attribute: ",i),null}}var T7=class{constructor(e,t){this.queue=[],this.activeCount=0,this.lastRunTime=0;const r={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[e];this.maxConcurrency=r.concurrency,this.minDelay=t??r.delay}add(e){this.queue.push(e),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||this.queue.length===0)return;const e=Date.now()-this.lastRunTime;if(e<this.minDelay){setTimeout(()=>this.runNext(),this.minDelay-e);return}const t=this.queue.shift();if(t){this.activeCount+=1,this.lastRunTime=Date.now();try{await t()}finally{this.activeCount-=1,this.runNext()}}}},Pc;function L7(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function us(e,t,r){const i=fe("images")?.[t];i?.status&&i.status!=="pending"||(dr(t,()=>({status:"loading"})),Pc.add(async()=>{let a=L7(r),s;try{const l=await fetch(a,e.fetchOptions);if(l.ok){const c=l.headers.get("content-type");c?.startsWith("image/")?(s=await l.blob(),a=await M7(s)):ye("Fetched content is not an image",c)}else ye("Fetch failed with status",l.status)}catch(l){ye("Failed to fetch image",l)}dr(t,()=>({src:a,blob:s,status:"loaded"})),jt("Loaded Image:",t,"Source:",a)}),e.pages===t&&h1())}async function k1(e,t,r){const i=fe("images")?.[t];i?.status&&i.status!=="pending"||(dr(t,()=>({status:"loading"})),Pc.add(async()=>{try{const a=await O7(r,e.img,e.lazyAttr??"src");a?(dr(t,()=>({status:"pending"})),await us(e,t,a)):dr(t,()=>({status:"error"}))}catch(a){ye("Failed to get page attribute",a),dr(t,()=>({status:"error"}))}}))}function E1(e,t){ss(t.pages,e).filter((r,i)=>!(t.lazy??X("lazyLoadImages"))||i<=X("lazyStart")).forEach(r=>{k1(t,r,t.listPages[r-1])})}function S1(e,t){ss(t.pages,e).filter((r,i)=>!(t.lazy??X("lazyLoadImages"))||i<=X("lazyStart")).forEach(r=>{us(t,r,t.listImages[r-1])})}async function R7(){await ol(()=>fe("manga")!==void 0);const e=fe("manga"),t=e.begin??1;Pc=new T7(X("loadSpeed"),e.timer),jt("Loading Images"),jt(`Speed: ${X("loadSpeed")}`),jt(`Lazy: ${e.lazy??X("lazyLoadImages")}, Starting from: ${X("lazyStart")}`),$n(),Sd(e)?(jt("Method: Images:",e.listImages),S1(t,e)):Ad(e)?(jt("Method: Pages:",e.listPages),E1(t,e)):sm(e)?(jt("Method: Brute Force"),e.bruteForce({begin:t,addImg:us,loadImages(r){S1(t,{...e,listImages:r})},loadPages(r,i,a){E1(t,{...e,listPages:r,img:i,lazyAttr:a})},wait:0})):ye("No Loading Method Found"),nr.listen((r,i,a)=>{if(a==="currentPage"&&r.currentPage>i.currentPage)for(let s=r.currentPage;s<Math.min(r.currentPage+5,e.pages+1);s++)r.images?.[s]?.src!==void 0||r.images?.[s]?.status==="loading"||(Sd(e)?us(e,s,e.listImages[s-1]):Ad(e)&&k1(e,s,e.listPages[s-1]))})}function P7(){const e=fe("images");if(!e)return null;const t=X("viewMode"),r=t==="FluidLTR"||t==="FluidRTL",i=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let l=null;for(const c in e){const u=e[c].ref?.value;if(!u)continue;const f=u?.getBoundingClientRect();let p;r?i?p=f.right:p=f.left:p=f.top,(r?p<=s:p<=a)&&(!l||p>l.edge)&&(l={index:parseInt(c,10),edge:p})}return l?l.index:fe("manga")?.begin??1}function A1(){const e=P7();e!=null&&fe("currentPage")!==e&&De("currentPage",e)}function $7(){const e=xe.default.throttle(()=>{requestAnimationFrame(A1)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),fe("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(A1)}function M1(){if(!fe("chapter").value){setTimeout(M1,50);return}$7()}var x1=xe.default.debounce(()=>{De("device",di()),$n()},200);async function D7(){await ol(()=>fe("manga")!==void 0),c1(),window.addEventListener("resize",x1),window.addEventListener("orientationchange",x1),i9(),M1()}var z7=Mr(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define(i):typeof e=="object"?t.exports=i():r.NProgress=i()})(e,function(){var r={};r.version="0.2.0";var i=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(v){var _,y;for(_ in v)y=v[_],y!==void 0&&v.hasOwnProperty(_)&&(i[_]=y);return this},r.status=null,r.set=function(v){var _=r.isStarted();v=a(v,i.minimum,1),r.status=v===1?null:v;var y=r.render(!_),S=y.querySelector(i.barSelector),M=i.speed,O=i.easing;return y.offsetWidth,c(function(T){i.positionUsing===""&&(i.positionUsing=r.getPositioningCSS()),u(S,l(v,M,O)),v===1?(u(y,{transition:"none",opacity:1}),y.offsetWidth,setTimeout(function(){u(y,{transition:"all "+M+"ms linear",opacity:0}),setTimeout(function(){r.remove(),T()},M)},M)):setTimeout(T,M)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var v=function(){setTimeout(function(){r.status&&(r.trickle(),v())},i.trickleSpeed)};return i.trickle&&v(),this},r.done=function(v){return!v&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(v){var _=r.status;return _?(typeof v!="number"&&(v=(1-_)*a(Math.random()*_,.1,.95)),_=a(_+v,0,.994),r.set(_)):r.start()},r.trickle=function(){return r.inc(Math.random()*i.trickleRate)},(function(){var v=0,_=0;r.promise=function(y){return!y||y.state()==="resolved"?this:(_===0&&r.start(),v++,_++,y.always(function(){_--,_===0?(v=0,r.done()):r.set((v-_)/v)}),this)}})(),r.render=function(v){if(r.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var _=document.createElement("div");_.id="nprogress",_.innerHTML=i.template;var y=_.querySelector(i.barSelector),S=v?"-100":s(r.status||0),M=document.querySelector(i.parent),O;return u(y,{transition:"all 0 linear",transform:"translate3d("+S+"%,0,0)"}),i.showSpinner||(O=_.querySelector(i.spinnerSelector),O&&g(O)),M!=document.body&&p(M,"nprogress-custom-parent"),M.appendChild(_),_},r.remove=function(){w(document.documentElement,"nprogress-busy"),w(document.querySelector(i.parent),"nprogress-custom-parent");var v=document.getElementById("nprogress");v&&g(v)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var v=document.body.style,_="WebkitTransform"in v?"Webkit":"MozTransform"in v?"Moz":"msTransform"in v?"ms":"OTransform"in v?"O":"";return _+"Perspective"in v?"translate3d":_+"Transform"in v?"translate":"margin"};function a(v,_,y){return v<_?_:v>y?y:v}function s(v){return(-1+v)*100}function l(v,_,y){var S;return i.positionUsing==="translate3d"?S={transform:"translate3d("+s(v)+"%,0,0)"}:i.positionUsing==="translate"?S={transform:"translate("+s(v)+"%,0)"}:S={"margin-left":s(v)+"%"},S.transition="all "+_+"ms "+y,S}var c=(function(){var v=[];function _(){var y=v.shift();y&&y(_)}return function(y){v.push(y),v.length==1&&_()}})(),u=(function(){var v=["Webkit","O","Moz","ms"],_={};function y(T){return T.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(D,K){return K.toUpperCase()})}function S(T){var D=document.body.style;if(T in D)return T;for(var K=v.length,V=T.charAt(0).toUpperCase()+T.slice(1),ne;K--;)if(ne=v[K]+V,ne in D)return ne;return T}function M(T){return T=y(T),_[T]||(_[T]=S(T))}function O(T,D,K){D=M(D),T.style[D]=K}return function(T,D){var K=arguments,V,ne;if(K.length==2)for(V in D)ne=D[V],ne!==void 0&&D.hasOwnProperty(V)&&O(T,V,ne);else O(T,K[1],K[2])}})();function f(v,_){return(typeof v=="string"?v:b(v)).indexOf(" "+_+" ")>=0}function p(v,_){var y=b(v),S=y+_;f(y,_)||(v.className=S.substring(1))}function w(v,_){var y=b(v),S;f(v,_)&&(S=y.replace(" "+_+" "," "),v.className=S.substring(1,S.length-1))}function b(v){return(" "+(v.className||"")+" ").replace(/\s+/gi," ")}function g(v){v&&v.parentNode&&v.parentNode.removeChild(v)}return r})})),N7=ca(z7(),1),B7=/^blob:(.+?)\/(.+)$/;function H7(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function F7(e){return B7.test(e)}function G7(e,t){const r=e.replace(/[?&]forceReload=\d+$/,"");return`${r+(r.includes("?")?"&":"?")}forceReload=${t}`}function I1(e,t){const r=fe("images")?.[e];if(!r?.src)return;const i=(r.reload??0)+1;if(i>X("maxReload")){ye(`Stopped reloading Page ${e} after ${i} attempts`);return}if(ye(`Reloading Page ${e} (Attempt ${i})`,t),t?.removeAttribute("src"),H7(r.src)||F7(r.src))dr(e,()=>({reload:i})),t?.setAttribute("src",r.src);else{const a=G7(r.src,i);dr(e,()=>({reload:i,src:a})),t?.setAttribute("src",a)}}function W7(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images")?.[r]?.ref?.value;i&&I1(r,i)}function U7(e){const t=e.currentTarget;dr(parseInt(t.value,10),r=>({hide:!r.hide}))}function V7(e){const t=e.currentTarget;dr(parseInt(t.id.replace("PageImg",""),10),c=>({...s1({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded",doublePage:t.naturalWidth>t.naturalHeight}));const r=fe("manga"),i=fe("images")||{},a=xe.default.keys(i).filter(c=>{const u=parseInt(c,10);return u>=(r?.begin??1)&&u<=(r?.pages??1)&&i[u]?.status==="loaded"}).length,s=(r?.pages??1)-((r?.begin??1)-1),l=Math.floor(a/s*100);document.title=`(${l}%) ${fe("manga")?.title}`,N7.default.configure({showSpinner:!1}).set(a/s),ye(`Progress: ${l}%`),a===s&&(ye("Images Loading Complete"),De("download","available"),X("downloadZip")&&Kh())}function q7(e){const t=e.currentTarget;if(nl(t.getAttribute("src")))return;const r=parseInt(t.id.replace("PageImg",""),10);dr(r,()=>({status:"error"})),I1(r,t)}function Z7(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a?.naturalWidth&&De("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1+X("zoomStep")/100),height:void 0}})}function j7(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a?.naturalWidth&&De("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1-X("zoomStep")/100),height:void 0}})}function K7(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a&&De("images",{...i,[r]:{...a,width:void 0,height:void 0}})}function Y7(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a&&De("images",{...i,[r]:{...a,width:window.innerWidth+(X("navbar")==="left"||X("navbar")==="right"?-34:0),height:void 0}})}function X7(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a&&De("images",{...i,[r]:{...a,width:void 0,height:window.innerHeight+(X("navbar")==="bottom"?-34:0)}})}function J7(e){const t=fe("images")?.[e],r=X("viewMode").match(/^(Book|Manga)$/),i=X("viewMode")==="Gallery",a=X("viewMode").startsWith("Fluid"),s=X("navbar")==="bottom";return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":a?`${window.innerHeight+(s?-34:0)}px`:void 0,"min-width":!r&&!i?`${X("minZoom")}vw`:void 0}}var Q7=(e,t)=>ss(e,t).map(r=>{fe("images")?.[r]?.ref||dr(r,u=>({ref:hl()}));let i=0;for(let u=r-1;u>=t&&!fe("images")?.[u].doublePage;u--)fe("images")?.[u].doublePage||i++;const a=fe("images")?.[r].doublePage??!1,s=X("viewMode")==="Book",l=!a&&(s?i%2===0:i%2===1),c=!a&&(s?i%2===1:i%2===0);return ie`
      <div
        id="Page${r}"
        class="${St({MangaPage:!0,hide:!!fe("images")?.[r].hide,DoublePage:a,LeftPage:l&&!a,RightPage:c&&!a})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${Y("BOOKMARK")}"
            @click=${f1}
            value="${r}"
          >
            ${Co()?g6:m6}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${Y("ZOOM_IN")}"
            @click=${Z7}
            value="${r}"
          >
            ${E6}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${Y("ZOOM_RESET")}"
            @click=${K7}
            value="${r}"
          >
            ${k6}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${Y("ZOOM_OUT")}"
            @click=${j7}
            value="${r}"
          >
            ${S6}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${Y("ZOOM_HEIGHT")}"
            @click=${X7}
            value="${r}"
          >
            ${f6}
          </button>
          ${X("viewMode").match(/^(Book|Manga)$/)?ie`
            <button
              class="DoublePage PageButton"
              title="${Y("DOUBLE_PAGE")}"
              @click=${()=>{dr(r,u=>({doublePage:!u.doublePage}))}}
              value="${r}"
            >
              ${y6}
            </button>`:ie`
              <button
                class="ZoomWidth PageButton"
                title="${Y("ZOOM_WIDTH")}"
                @click=${Y7}
                value="${r}"
              >
                ${p6}
              </button>`}
          <button
            class="Hide PageButton"
            title="${Y("HIDE")}"
            @click=${U7}
            value="${r}"
          >
            ${fe("images")?.[r].hide?b6:w6}
          </button>
          <button
            class="Reload PageButton"
            title="${Y("RELOAD")}"
            @click=${W7}
            value="${r}"
          >
            ${_6}
          </button>
          <span class="PageIndex">${r}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${r}"
            alt="Page ${r}"
            class="${St({PageImg:!0,imgBroken:fe("images")?.[r]?.status==="error"})}"
            src=${fe("images")?.[r]?.src??He}
            style="${Xr(J7(r))}"
            @load=${V7}
            @error=${q7}
            ${pl(fe("images")?.[r].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${r===e?Y("END"):`${r} / ${e}`} ]
      </div>
    `}),ew=e=>ie`
  <main
    id="Chapter"
    ${pl(fe("chapter"))}
    class="${St({fitWidthIfOversize:X("fitWidthIfOversize"),[X("viewMode")]:!0,separator:X("viewMode")==="Vertical"})}"
    @wheel=${t=>{X("viewMode")==="FluidLTR"?_1(t):X("viewMode")==="FluidRTL"&&Q9(t)}}
  >
    ${Q7(e.pages,e.begin??0)}
  </main>
`,tw=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{all:initial;box-sizing:border-box;display:block}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;--mov-font-size-m:16px;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",rw="@keyframes spin{to{transform:rotate(360deg)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{animation:1s linear infinite spin}.animate-spin-reverse{animation:1s linear infinite spin-reverse}",nw="#Chapter:where(.Book,.Manga){grid-template-columns:1fr 1fr;grid-auto-flow:row;gap:0;width:100%;min-width:auto;display:grid}#Chapter:where(.Book,.Manga) .MangaPage{width:100%;min-height:22px;display:block;position:relative;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage .PageFunctions{border-radius:0 0 0 4px;flex-direction:row;top:0;left:auto;right:0}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageFunctions{border-radius:0 0 4px;flex-direction:row-reverse;left:0;right:auto}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage{grid-column:span 2}#Chapter:where(.Book,.Manga) .MangaPage .PageContent{flex-shrink:0;justify-content:center;align-items:center;display:flex;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageContent{justify-content:flex-end;padding-right:0}#Chapter:where(.Book,.Manga) .MangaPage.RightPage .PageContent{justify-content:flex-start;padding-left:0}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage .PageContent{justify-content:center}#Chapter.Manga{direction:rtl}#Chapter.Manga .MangaPage{direction:ltr}",ow="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",iw="#Chapter.Gallery{flex-wrap:wrap;justify-content:center;gap:10px;padding:10px;display:flex}.Gallery .MangaPage{width:auto;min-width:unset;flex:0 auto}.Gallery .MangaPage .PageContent .PageImg{min-width:unset}.Gallery .PageFunctions,.Gallery .separator{display:none}",aw='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:16px;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:16px;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',sw="#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",lw=":root{--theme-primary-color:#007bff;--theme-primary-text-color:#fff;--theme-secondary-color:#6c757d;--theme-secondary-text-color:#fff;--theme-body-background:#212529;--theme-body-text-color:#f8f9fa;--theme-text-color:#f8f9fa;--theme-background-color:#212529;--theme-hightlight-color:#343a40;--theme-border-color:#495057;--mov-color-fill-quiet:#ced4da;--mov-color-fill-normal:#adb5bd;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#adb5bd;--mov-color-border-normal:#6c757d;--mov-color-border-loud:#495057;--mov-color-on-quiet:#343a40;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#00000014;--mov-color-mix-active:#00000029}.light{--theme-body-background:#f8f9fa;--theme-body-text-color:#212529;--theme-text-color:#212529;--theme-background-color:#f8f9fa;--theme-hightlight-color:#e9ecef;--theme-border-color:#dee2e6;--mov-color-fill-quiet:#f8f9fa;--mov-color-fill-normal:#e9ecef;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#e9ecef;--mov-color-border-normal:#dee2e6;--mov-color-border-loud:#adb5bd;--mov-color-on-quiet:#6c757d;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#0000001a;--mov-color-mix-active:#0003}",cw=Et`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${Se(Ui(yl))}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${Se(Ui(kl))}');
  }

  ${Se(lw)}
  ${Se(sw)}
  ${Se(tw)}
  ${Se(aw)}
  ${Se(ow)}
  ${Se(nw)}
  ${Se(iw)}
  ${Se(p1)}
  ${Se(rw)}
`,uw=(e="#MangaOnlineViewer",t=X("theme"))=>{const r=Zh(t),i=qo(t),a=X("colorScheme")==="dark"?r[8]:r[2],s=qo(a);return Et`
    :where(:root),
    ${Se(e)}, .dark,
    ${Se(e)}.dark {
      --theme-primary-color: ${Se(t)};;
      --theme-primary-text-color: ${Se(i)};;
      --theme-secondary-color: ${Se(a)};;
      --theme-secondary-text-color: ${Se(s)};;

      color-scheme: dark;
      --theme-body-background: ${Se(Ot.dark[600])};;
      --theme-body-text-color: ${Se(Ot.dark[50])};;
      --theme-text-color: ${Se(Ot.dark[50])};;
      --theme-background-color: ${Se(Ot.dark[600])};;
      --theme-hightlight-color: ${Se(Ot.dark[500])};;
      --theme-border-color: ${Se(Ot.dark[400])};;

      --mov-color-fill-quiet: ${Se(r[9])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${Se(r[8])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${Se(r[8])};;
      --mov-color-border-normal: ${Se(r[7])};;
      --mov-color-border-loud: ${Se(r[6])};;
      --mov-color-on-quiet: ${Se(r[4])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${Se(r[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${Se(e)};.light {
      color-scheme: light;
      --theme-body-background: ${Se(Ot.gray[50])};;
      --theme-body-text-color: ${Se(Ot.gray[900])};;
      --theme-text-color: ${Se(Ot.gray[900])};;
      --theme-background-color: ${Se(Ot.gray[50])};;
      --theme-hightlight-color: ${Se(Ot.gray[500])};;
      --theme-border-color: ${Se(Ot.gray[100])};;

      --mov-color-fill-quiet: ${Se(r[0])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${Se(r[1])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${Se(r[1])};;
      --mov-color-border-normal: ${Se(r[2])};;
      --mov-color-border-loud: ${Se(r[4])};;
      --mov-color-on-quiet: ${Se(r[6])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${Se(r[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `},dw="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:32px;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}#pagesSliderVal{text-align:center;margin-top:15px;font-weight:700;display:block}",Bn=class extends rt{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[Se(dw)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,r){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:r}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return ie`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${Y("STARTING")}</span>
        <div style="padding: 1rem;">${Y("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${Ot.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${Ot.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return ie`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${Y("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){this.beginPage??=this.begin,this.endPage??=this.mangaPages;const t=r=>{this.beginPage=r.detail.value[0],this.endPage=r.detail.value[1]};return ie`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${Y("STARTING")}</span>
        <div style="padding: 1rem;">
          ${Y("CHOOSE_BEGINNING")}
          <div
            id="pageInputGroup"
            style="padding: 1rem 0;"
          >
            <mov-slider
              id="pagesSlider"
              dual
              show-tooltip
              show-ticks
              tick-count="10"
              step="1"
              .value=${[this.beginPage,this.endPage]}
              min="0"
              max="${this.mangaPages}"
              @input=${t}
            ></mov-slider>
            <output
              id="pagesSliderVal"
              class="RangeValue"
              for="pagesSlider"
            >
              [${String(this.beginPage).padStart(3,"0")} ,
              ${String(this.endPage).padStart(3,"0")}]
            </output>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${Ot.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(this.beginPage??0,this.endPage??this.mangaPages)}
            style="--mov-color-fill-loud: ${Ot.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};z([j({type:Number,reflect:!0})],Bn.prototype,"mangaPages",void 0),z([j({type:Number,reflect:!0})],Bn.prototype,"begin",void 0),z([j({type:Number})],Bn.prototype,"timeoutMs",void 0),z([j({type:String,reflect:!0})],Bn.prototype,"status",void 0),z([Ht()],Bn.prototype,"beginPage",void 0),z([Ht()],Bn.prototype,"endPage",void 0),Bn=z([lt("script-startup")],Bn);function hw(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var fw=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},pw=(...e)=>{e?.forEach(fw),e?.forEach(hw)};function mw(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var C1,ds=class extends rt{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[Et``,Se(cw)]}async start(t,r){this.manga&&(document.documentElement.hasAttribute("mov")||(pw(document.documentElement,document.head,document.body),document.documentElement.setAttribute("mov","")),window.scrollTo(0,0),De("manga",{...this.manga,begin:t??this.manga.begin,pages:r??this.manga.pages}))}firstUpdated(){this.loadMode==="always"&&this.start(),D7(),R7()}render(){const t=fe("manga"),r=fe("dialog");return ie`
      <style>
        ${uw()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${St({[X("colorScheme")]:!0,hideControls:X("hidePageControls"),bookmarked:!!Co(),[fe("device")]:!0})}"
        style="${Xr({[`padding-${X("navbar")}`]:"34px"})}"
        .locale="${X("locale")}"
      >
        ${t?ie` <reader-header .manga=${t}></reader-header>
              ${ew(t)}
              <navbar-thumbnails .mode=${X("navbar")}></navbar-thumbnails>
              <manga-pagination
                .mode="${X("pagination")}"
                .startPage=${t.begin}
                .totalPages=${t.pages}
                .currentPage=${fe("currentPage")}
                .next=${t.next}
                .prev=${t.prev}
              ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>`:ie(C1||(C1=mw([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              status="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,this.loadMode==="never"?"late-start-button":"initial-prompt",i=>{this.start(i.detail?.begin,i.detail?.end)})}
        ${r?ie`
              <mov-dialog
                open
                .icon=${r.icon}
                @close=${()=>De("dialog",null)}
              >
                <span slot="label">${r.title}</span>
                ${r.content} ${r.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};z([j({type:String,reflect:!0})],ds.prototype,"loadMode",void 0),z([j({type:Object})],ds.prototype,"manga",void 0),ds=z([lt("manga-online-viewer"),(0,Yo.useStores)(Tt,Mo,nr)],ds);var gw=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner{border-style:none;padding:0}[type=reset]::-moz-focus-inner{border-style:none;padding:0}[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted buttontext}[type=button]:-moz-focusring{outline:1px dotted buttontext}[type=reset]:-moz-focusring{outline:1px dotted buttontext}[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button{height:auto}[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,vw="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",bw="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",ww=[gw,vw,bw].join(`
`);async function _w([e,t]){ye(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=Co()??t.begin??1,t.before!==void 0&&(jt("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=t4("externals",ww),Pp(unsafeWindow.customElements.whenDefined("manga-online-viewer"),1e4).then(()=>{const r=document.createElement("manga-online-viewer");r.loadMode=e?.start??X("loadMode"),r.manga=t,document.body.appendChild(r),ye("Viewer Ready",r)}).catch(r=>ye("Define WebComponent failed",r))}async function yw(e){ye(`Starting ${tl.script.name} ${tl.script.version} on ${di()} ${xp()} with ${Ip()}`),ye(e.length,"Known Manga Sites:",e);const t=e.filter(i=>i.url.test(window.location.href));ye(t.length,"Found sites:",t);const r=t.map(async i=>{ye(`Testing site: ${i.name}`),await $p(i),jt(i.name,"Passed");const a=await i.run();if(jt("Processed site:",i,a),a.pages>0)return[i,a];throw new Error(`${i.name} found ${a.pages} pages`)});try{const i=await Promise.any(r);jt("Going with",i[0].name),_w(i)}catch(i){if(i instanceof AggregateError){ye("All sites failed to run:");for(const a of i.errors)ye(a.message)}else ye("An unexpected error occurred:",i)}}var kw={eq:(e,t)=>e.textContent?.trim()===t,starts:(e,t)=>!!e.textContent?.trim()?.startsWith(t),ends:(e,t)=>!!e.textContent?.trim()?.endsWith(t)};function O1(e,t,r){const i=kw[r];if(!i)throw new Error(`Invalid matcherKey: ${r}`);return[...document.querySelectorAll(e)].filter(a=>xe.default.castArray(t).some(s=>i(a,s)))}function Ew(e,t,r){return O1(e,t,r)?.[0]}function $c(e,t,r,i="a"){return Ew(e,t,r)?.closest(i)??null}var T1=(e,t)=>O1(e,t,"eq"),uo=(e,t,r="a")=>$c(e,t,"eq",r),Sw=(e,t,r="a")=>$c(e,t,"starts",r),Aw=(e,t,r="a")=>$c(e,t,"ends",r),Mw={name:"Asura Scans",url:/https?:\/\/(www.)?(asurascans|asuracomics).(com|net)\/.+/,homepage:"https://asurascans.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:'astro-island[component-url*="ChapterReader"]',run(){const e=document.querySelector('astro-island[component-url*="ChapterReader"]'),t=JSON.parse(e?.getAttribute("props")||"{}"),r=t.seriesSlug?.[1],i=(t.pages?.[1]||[]).map(a=>a[1]?.url?.[1]).filter(Boolean);return{title:`${t.seriesName?.[1]} - Chapter ${t.chapterName?.[1]}`,series:`/comics/${r}`,pages:i.length,prev:uo("span","Prev","a")?.getAttribute("href")||document.querySelector('link[rel="prev"]')?.getAttribute("href")||void 0,next:uo("span","Next","a")?.getAttribute("href")||document.querySelector('link[rel="next"]')?.getAttribute("href")||void 0,listImages:i}}},xw={name:"Batoto",url:/https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/,homepage:"https://rentry.co/batoto",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:'div[name="image-item"] img, .page-img',run(){if(window.location.pathname.startsWith("/title")){window.location.search!=="?load=2"&&(window.location.search="?load=2");const t=[...document.querySelectorAll('div[name="image-item"] img')];return{title:document.querySelector("h6")?.textContent?.trim(),series:document.querySelector("h3 a")?.getAttribute("href"),pages:t.length,prev:Aw("span","Prev Chapter","a")?.getAttribute("href"),next:Sw("span","Next Chapter","a")?.getAttribute("href"),listImages:t.map(r=>r.getAttribute("src")??"")}}const e=[...document.querySelectorAll(".page-img")];return{title:document.querySelector(".nav-title a")?.textContent?.trim(),series:document.querySelector(".nav-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".nav-prev a")?.getAttribute("href"),next:document.querySelector(".nav-next a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},Iw={name:"BilibiliComics",url:/https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,homepage:"https://www.bilibilicomics.net/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"#__NUXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NUXT_DATA__")?.innerHTML??"").filter(t=>typeof t=="string"&&/.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(t));return{title:document.querySelector(".chapterTitle")?.textContent?.trim(),series:document.querySelector(".book-name")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll(".pre-next-btns").item(0)?.getAttribute("href"),next:document.querySelectorAll(".pre-next-btns").item(2)?.getAttribute("href"),listImages:e.map(t=>`https://static.comicfans.io/${t}`)}}},Cw={name:"Comick",url:/https?:\/\/(www\.)?comick.io\/.+/,homepage:"https://comick.io/",language:[$e.ENGLISH],category:Ne.MANGA,waitFunc(){return/\/([^/]+)-chapter.+$/.test(window.location.pathname)},waitEle:"#__NEXT_DATA__",waitTime:3e3,run(){const e=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??"")?.props?.pageProps,t=e?.chapter?.md_images?.map(r=>`https://meo.comick.pictures/${r?.b2key}`);return{title:e?.seoTitle??`${e.chapter?.md_comics?.title} ${e?.chapter?.chap}`,series:`/comic/${e?.chapter?.md_comics?.slug}`,pages:t?.length,prev:e?.prev?.href,next:e?.next?.href,listImages:t}}};async function Ow(e){try{const t=await(await fetch(e)).blob();return new Promise((r,i)=>{const a=new FileReader;a.onloadend=()=>r(a.result),a.onerror=i,a.readAsDataURL(t)})}catch(t){return console.error(`Failed to convert blob URL ${e} to data URL:`,t),e}}async function Tw(e,t,r){const i=document.createElement("div");i.style.cssText="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(33, 37, 41, 0.95); z-index: 999999; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-family: sans-serif; font-size: 20px;",i.innerHTML=`
    <div style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">MangaOnlineViewer</div>
    <div id="mov-loading-text">Preparing pages...</div>
    <div style="margin-top: 20px; width: 200px; height: 6px; background: #495057; border-radius: 3px; overflow: hidden;">
      <div id="mov-loading-bar" style="width: 0; height: 100%; background: #37b24d; transition: width 0.1s;"></div>
    </div>
  `,document.body.appendChild(i);const a=(c,u)=>{const f=u>0?Math.round(c/u*100):0,p=document.getElementById("mov-loading-text"),w=document.getElementById("mov-loading-bar");p&&(p.textContent=`Scrolling and waiting for pages to load: ${c} / ${u||"?"}`),w&&(w.style.width=u>0?`${f}%`:"50%")};a(0,e);const s=window.scrollY,l=[];try{for(let c=0;c<e;c++){let u=null,f=0;for(;f<5e3;){const b=[...document.querySelectorAll("img")].filter(t);if(b[c]){u=b[c];break}await new Promise(g=>setTimeout(g,100)),f+=100}if(!u){ye(`Failed to find image element for page ${c+1}`);continue}u.scrollIntoView({behavior:"auto",block:"center"});let p=0,w="";for(;p<5e3;){const b=u.src||u.getAttribute("src")||"";if(b&&r(b)&&(u.naturalWidth>250||u.complete)){const g=u.naturalWidth||u.width||0;if(g===0||g>=250){w=b;break}}await new Promise(g=>setTimeout(g,100)),p+=100}w?l.push(w):(ye(`Timeout waiting for image ${c+1} to load`),l.push(u.src||u.getAttribute("src")||"")),a(l.length,e)}}finally{window.scrollTo(0,s),i.remove()}if(l.length===0)throw new Error("No images collected from the page");return await Promise.all(l.map(async c=>c.startsWith("blob:")?await Ow(c):c))}var hs=null;if(typeof window<"u"&&window.location.hostname.includes("comix.to")){const e=JSON.parse;JSON.parse=(t,r)=>{const i=e(t,r);try{i?.result?.pages&&(hs=i.result.pages,ye("Intercepted chapter pages data from JSON.parse",hs))}catch{}return i}}function Lw(){const e=document.querySelector("#app-root");if(!e)return null;const t=Object.keys(e).find(i=>i.startsWith("__reactContainer")||i.startsWith("__reactFiber"));if(!t)return null;const r=[e[t]];for(;r.length>0;){const i=r.pop();if(i){if(i.stateNode?.props){const a=i.stateNode.props.client;if(a&&typeof a.getQueryCache=="function"){const s=a.getQueryCache().getAll();for(const l of s){const c=l.state.data;if(c?.result?.pages)return c.result.pages}}}if(i.memoizedProps){const a=i.memoizedProps.client||i.memoizedProps.value;if(a&&typeof a.getQueryCache=="function"){const s=a.getQueryCache().getAll();for(const l of s){const c=l.state.data;if(c?.result?.pages)return c.result.pages}}}i.child&&r.push(i.child),i.sibling&&r.push(i.sibling)}}return null}function Rw(){const e=document.querySelector("#app-root");if(!e)return null;const t=Object.keys(e).find(i=>i.startsWith("__reactContainer")||i.startsWith("__reactFiber"));if(!t)return null;const r=[e[t]];for(;r.length>0;){const i=r.pop();if(!i)continue;const a=s=>{if(s&&typeof s.getQueryCache=="function"){const l=s.getQueryCache().getAll();for(const c of l){const u=c.state.data;if(u){if(Array.isArray(u)&&u.length>0&&(u[0].chapterNumber!==void 0||u[0].number!==void 0))return u;if(u.result&&Array.isArray(u.result.items)&&u.result.items.length>0){const f=u.result.items[0];if(f.chapterNumber!==void 0||f.number!==void 0||f.mangaId!==void 0)return u.result.items}}}}return null};if(i.stateNode?.props){const s=a(i.stateNode.props.client);if(s)return s}if(i.memoizedProps){const s=a(i.memoizedProps.client||i.memoizedProps.value);if(s)return s}i.child&&r.push(i.child),i.sibling&&r.push(i.sibling)}return null}function Pw(){const e=document.querySelector('select[aria-label*="page" i], select[class*="page" i], select[id*="page" i]');return e?e.querySelectorAll("option").length:0}function $w(){const e=[...document.querySelectorAll("span, div, button, option")];for(const t of e){const r=t.textContent||"",i=/^\s*1\s*(?:\/|of)\s*(\d+)\s*$/i.exec(r.trim());if(i){const a=parseInt(i[1],10);if(a>0&&a<500)return a}}return 0}function Dw(){const e=[...document.querySelectorAll("a")];let t=null,r=null;for(const i of e){const a=i.getAttribute("href");if(!a?.includes("/title/")||!/\/\d+-chapter-/.test(a))continue;const s=(i.textContent||"").toLowerCase().trim(),l=(i.getAttribute("aria-label")||"").toLowerCase();(s.includes("next")||l.includes("next")||i.querySelector('[class*="next"]')||i.querySelector('[class*="right"]'))&&(t=a),(s.includes("prev")||s.includes("previous")||l.includes("prev")||l.includes("previous")||i.querySelector('[class*="prev"]')||i.querySelector('[class*="left"]'))&&(r=a)}return{prev:r,next:t}}function zw(){const e=[...document.querySelectorAll("a")],t=[];for(const u of e){const f=u.getAttribute("href");if(!f?.includes("/title/")||!/\/\d+-chapter-/.test(f))continue;const p=/-chapter-(\d+(\.\d+)?)/.exec(f);p&&t.push({href:f,num:parseFloat(p[1])})}if(t.length===0)return{prev:null,next:null};const r=new Set,i=t.filter(u=>{const f=u.href.split("#")[0].split("?")[0];return r.has(f)?!1:(r.add(f),!0)});i.sort((u,f)=>u.num-f.num);const a=window.location.pathname.split("#")[0].split("?")[0],s=i.findIndex(u=>u.href.includes(a)||a.includes(u.href));let l=null,c=null;return s!==-1&&(s>0&&(l=i[s-1].href),s<i.length-1&&(c=i[s+1].href)),{prev:l,next:c}}function Nw(){const{prev:e,next:t}=Dw();return e||t?{prev:e,next:t}:zw()}function L1(e){if(!e.closest("#app-root")&&!e.closest(".rpage-body"))return!1;const t=e.src||e.getAttribute("src")||"";if(!t||t.includes("avatar")||t.includes("logo")||t.includes("icon")||t.includes("placeholder")||t.startsWith("data:image/svg+xml"))return!1;const r=e.naturalWidth||e.width||0;return!(r>0&&r<250)}function Bw(e){return!e||e.includes("placeholder")||e.startsWith("data:image/svg+xml")||e.includes("loading")?!1:e.startsWith("data:")||e.startsWith("blob:")||e.includes("comix.to")||e.includes("static.comix.to")||e.includes("wowpic")}var Hw={name:"Comix.to",homepage:"https://comix.to/",url:/https?:\/\/comix\.to\/(title|comic)\/.+\/.+/,language:$e.ENGLISH,category:Ne.MANGA,async run(){let e=0,t=null,r=null;for(;e<5e3&&(t||(t=Lw()),r||(r=Rw()),!(t&&r));)await new Promise(_=>setTimeout(_,100)),e+=100;!t&&hs&&(t=hs);let i=t?.items?.length||0;i===0&&(i=Pw()),i===0&&(i=$w()),i===0&&(i=[...document.querySelectorAll("#app-root img, .rpage-body img")].filter(L1).length||40),ye(`Identified expected page count: ${i}`);const a=await Tw(i,L1,Bw),s=document.getElementById("initial-data"),l=s?JSON.parse(s.textContent||"{}"):{};let c="",u="";if(l.queries)for(const _ of Object.keys(l.queries)){const y=l.queries[_];if(y?.title&&y.url){c=y.title,u=y.url;break}}c||(c=document.querySelector("title")?.textContent?.trim()||""),u||(u=document.querySelector('a[href^="/title/"]:not([href*="-chapter-"])')?.getAttribute("href")||"");let f=null,p=null;const w=/\/title\/([^/]+)/.exec(window.location.pathname),b=w?w[1]:"",g=/\/(\d+)-chapter-/.exec(window.location.pathname),v=g?parseInt(g[1],10):0;if(r&&v&&b){const _=M=>parseFloat(M.number??M.chapterNumber??"0"),y=[...r].sort((M,O)=>_(M)-_(O)),S=y.findIndex(M=>parseInt(M.id,10)===v);if(S!==-1){if(S>0){const M=y[S-1],O=M.number??M.chapterNumber;f=`/title/${b}/${M.id}-chapter-${O}`}if(S<y.length-1){const M=y[S+1],O=M.number??M.chapterNumber;p=`/title/${b}/${M.id}-chapter-${O}`}}}if(!f&&!p){const _=Nw();f=_.prev,p=_.next}return{title:c,series:u,pages:a.length,prev:f,next:p,listImages:a}}},Fw={name:"DemonicScans",url:/https?:\/\/(www\.)?demonicscans\.org\/(title\/.+\/chapter\/.+|chaptered\.php\?manga=\d+&chapter=.+)/,homepage:"https://demonicscans.org/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:'img.imgholder[src*="cdn.demoniclibs.com"]',async run(){const e=[...document.querySelectorAll('img.imgholder[src*="cdn.demoniclibs.com"]')].map(t=>t.getAttribute("data-src")||t.getAttribute("src")||"");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h1 a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prevchap")?.getAttribute("href"),next:document.querySelector(".nextchap")?.getAttribute("href"),listImages:e}}},Gw={name:"Dynasty-Scans",url:/https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,homepage:"https://dynasty-scans.com/",language:[$e.ENGLISH],category:Ne.MANGA,run(){return{title:document.querySelector("#chapter-title")?.textContent?.trim(),series:document.querySelector("#chapter-title a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:document.querySelector("#prev_link")?.getAttribute("href"),next:document.querySelector("#next_link")?.getAttribute("href"),listImages:unsafeWindow.pages.map(e=>e.image)}}},Ww={name:"Flame Comics",url:/https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,homepage:"https://flamecomics.xyz/",language:[$e.ENGLISH],category:Ne.MANGA,run(){const e="https://cdn.flamecomics.xyz/uploads/images/series",t=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??""),r=t?.props?.pageProps?.chapter,i=xe.default.keys(r?.images).map(a=>`${e}/${r?.series_id}/${r?.token}/${r?.images?.[a]?.name}?${r?.unix_timestamp}`);return{title:`${r?.title} ${r?.chapter}`,series:`../${r?.series_id}`,pages:i.length,prev:t?.props?.pageProps?.previous,next:t?.props?.pageProps?.next,listImages:i}}},Uw={name:["FoOlSlide","Kireicake"],url:/^(?!.*jaiminisbox).*\/read\/.+/,homepage:["https://github.com/saintly2k/FoOlSlideX","https://reader.kireicake.com"],language:[$e.ENGLISH],obs:"Any Site that uses FoOLSlide",category:Ne.MANGA,waitEle:"img.open",run(){const e=[...document.querySelectorAll(".topbar_left .dropdown_parent:last-of-type li")],t=e.findIndex(l=>{const c=l.querySelector("a")?.getAttribute("href");return c?window.location.href.startsWith(c):!1}),r=[...document.querySelectorAll(".topbar_right .dropdown li")],i=[...document.querySelectorAll(".inner img:not(.open)")],a=i.length>1?i.length:r.length,s={title:e.at(t)?.querySelector("a")?.textContent?.trim()??document.querySelector("title")?.textContent?.trim(),series:document.querySelector("div.tbtitle div.text a")?.getAttribute("href"),pages:a,prev:e.at(t+1)?.querySelector("a")?.getAttribute("href"),next:e.at(t-1)?.querySelector("a")?.getAttribute("href")};return i.length>1?{...s,listImages:i.map(l=>l.getAttribute("src")??"")}:{...s,listPages:Array(a).fill(0).map((l,c)=>`${window.location.href.replace(/\/\d+$/,"")}/${c+1}`),img:"img.open"}}},Vw={name:["Ikigai Mangas - EltaNews","Ikigai Mangas - Ajaco"],url:/https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/,homepage:["https://visorikigai.eltanews.com/","https://visorikigai.ajaco.net/"],language:[$e.SPANISH],category:Ne.MANGA,run(){const e=document.querySelector('script[type="qwik/json"]')?.textContent?.match(/http[^'"]+webp/gi)??[];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:e?.length,prev:uo("span","Siguiente")?.getAttribute("href"),next:uo("span","Anterior")?.getAttribute("href"),listImages:e}}},qw=e=>new Promise(t=>setTimeout(t,e));async function Zw(e){const t=document.querySelector(".reader-content"),r=new Set,i=2e3,a=200;if(!t)return console.error("Error: '.reader-content' container not found."),[];let s=0;for(;r.size<e&&s<a;){t.scrollTop+=i,s++,await qw(300);const l=document.querySelectorAll(".reader-page img");for(const c of l){const u=c.getAttribute("src");u&&u.length>0&&r.add(u)}if(console.log(`Attempt ${s}: Collected ${r.size} of ${e} sources.`),t.scrollHeight-t.clientHeight<=t.scrollTop&&r.size<e){console.warn(`Reached end of scrollable content. Stopping with ${r.size} sources.`);break}}return Array.from(r)}var jw={name:"Kagane",homepage:"https://kagane.org/",url:/https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/,language:$e.ENGLISH,category:Ne.MANGA,waitEle:".reader-page img",async run(){const e=window.location.href,t=e.match(/series\/([^/]+)/)?.[1],r=e.match(/reader\/([^/]+)/)?.[1],i=localStorage.getItem("rsch_did"),a={};i&&(a["X-Rsch-Did"]=i);const s=await fetch(`https://api.kagane.org/api/v1/series/${t}`,{headers:a}).then(w=>w.json()),l=(await fetch(`https://api.kagane.org/api/v1/books/${t}`,{headers:a}).then(w=>w.json())).data.content,c=l.find(w=>w.id===r),u=l.findIndex(w=>w.id===r),f=l[u+1],p=l[u-1];return{title:`${s.data.name} - ${c?.metadata?.title}`,series:`/series/${t}`,pages:c?.media?.pagesCount??0,prev:f?`/series/${t}/books/${f.id}`:void 0,next:p?`/series/${t}/books/${p.id}`:void 0,listImages:await Zw(c?.media?.pagesCount??0)}}},Kw={name:"KuManga",url:/https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,homepage:"https://www.kumanga.com/",language:[$e.SPANISH],category:Ne.MANGA,run(){const e=document.querySelectorAll("select").item(1).querySelector("option[selected]");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h2 a")?.getAttribute("href"),pages:unsafeWindow.pUrl.length,prev:`/manga/leer/${e?.previousElementSibling?.getAttribute("value")}`,next:`/manga/leer/${e?.nextElementSibling?.getAttribute("value")}`,listImages:unsafeWindow.pUrl.map(t=>t.imgURL)}}},Yw={name:"LeerCapitulo",url:/https?:\/\/(www.)?leercapitulo.co\/leer\/.+/,homepage:"https://www.leercapitulo.co/",language:[$e.SPANISH],category:Ne.MANGA,waitEle:"#page_select",run(){const e=[...document.querySelectorAll("#page_select option")].map(t=>t.getAttribute("value")??"");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(".chapter-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".pre")?.getAttribute("href"),next:document.querySelector(".next")?.getAttribute("href"),listImages:e}}},Xw={name:"LHTranslation",url:/https?:\/\/(www\.)?lhtranslation.net\/read.+/,homepage:"https://lhtranslation.net/",language:[$e.ENGLISH],category:Ne.MANGA,run(){const e=document.querySelector(".form-control option:checked"),t=[...document.querySelectorAll("img.chapter-img")];return{title:document.querySelector(".chapter-img.tieude font")?.textContent?.trim(),series:document.querySelector(".navbar-brand.manga-name")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(r=>r.getAttribute("src")??"")}}},Jw={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[$e.RAW],category:Ne.MANGA,run(e){const t=e??parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10);return{title:"Placeholder Manga Loaded",series:"?reload",pages:document.title==="MangaOnlineViewer Script"?t:0,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[Yt(1970,1400,"#2D1657"),Yt(985,1400,"#152C55"),Yt(985,1400,"#7A1420"),Yt(1970,1400,"#806D15"),Yt(985,1400,"#0F5B30"),Yt(1970,1400,"#1a3e3c"),Yt(985,1400,"#480f5b"),Yt(985,1400,"#a9bf7a"),Yt(985,1400,"#147a56"),Yt(1970,1400,"#190343"),Yt(985,1400,"#d5b91e"),Yt(985,1400,"#836ecd"),Yt(985,1400,"#bf19b2"),Yt(985,1400,"#152055"),...Array(t).fill(0).map(J9)]}}},Qw={name:"M440",url:/https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/,homepage:"https://m440.in/",language:[$e.SPANISH],category:Ne.MANGA,run(){const e=[...document.querySelectorAll("#all img")],t=document.querySelector("#chapter-list li.active");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("#navbar-collapse-1 ul:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.firstElementChild?.getAttribute("href"),next:t?.previousElementSibling?.firstElementChild?.getAttribute("href"),listImages:e.map(r=>r.getAttribute("data-src")??"")}}},R1=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function P1(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(r=>/.*(src|url).*/i.test(r.name)&&!/^.*(blank|lazy|loading).*$/.test(r.value));return t.length===0?"":t.find(r=>R1.test(r.value))?.value??e?.getAttribute("src")??""})}var e8={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[$e.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:Ne.MANGA,waitFunc:()=>{const e=P1();return e.length>0&&e.every(t=>t&&R1.test(t))},run(){const e=P1();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},t8={name:"MangaBall",homepage:"https://mangaball.net/",url:/https?:\/\/mangaball\.net\/chapter-detail\/.+/,language:$e.ENGLISH,category:Ne.MANGA,run:async()=>{const e=[...document.querySelectorAll("script")].find(f=>f.textContent?.includes("chapterImages"))?.textContent;if(!e)return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:0,listImages:[]};const t=e.match(/titleId\s*=\s*[`'"](.+?)[`'"]/)?.[1],r=e.match(/chapterNumber\s*=\s*[`'"](.+?)[`'"]/)?.[1],i=e.match(/chapterVolume\s*=\s*[`'"](.+?)[`'"]/)?.[1],a=e.match(/chapterLanguage\s*=\s*[`'"](.+?)[`'"]/)?.[1],s=JSON.parse(e.match(/chapterImages\s*=\s*JSON\.parse\(\s*[`'"](.+?)[`'"]\s*\)/)?.[1]??e.match(/chapterImages\s*=.*(\[.*?\])/)?.[1]??"[]"),l=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")||"",c=((await(await fetch("/api/v1/chapter/chapter-listing-by-title-id/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRF-TOKEN":l},body:`title_id=${t}&lang=${a}`})).json()).ALL_CHAPTERS||[]).sort((f,p)=>p.number_float-f.number_float),u=f=>{const p=parseFloat(r||"0"),w=c.findIndex(_=>_.number_float===p);if(w===-1)return;const b=f==="next"?-1:1,g=w+b,v=String(i);for(let _=g;_>=0&&_<c.length;_+=b){const y=c[_].translations.find(S=>S.language===a&&String(S.volume)===v);if(y)return y.url}};return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(`a[href*="${t}"]`)?.getAttribute("href")??document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:s.length,prev:u("prev"),next:u("next"),listImages:s}}},r8={name:"MangaBuddy",url:/https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,homepage:"https://mangabuddy.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitVar:"chapImages",run(){const e=unsafeWindow.chapImages.split(",").map(t=>new URL(t).pathname.replace("/res/","https://sb.mbcdn.xyz/"));return{title:document.querySelector(".chapter-info")?.textContent?.trim(),series:document.querySelector("#breadcrumbs-container div:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("a.prev")?.getAttribute("href"),next:document.querySelector("a.next")?.getAttribute("href"),listImages:e}}},n8={name:"MangaDex",url:/https?:\/\/(www\.)?mangadex.org/,homepage:"https://mangadex.org/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"#chapter-selector a",async run(){const e=`https://api.mangadex.org/at-home/server/${/\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1)}`,t=await fetch(e).then(async a=>a.json()),r=t.chapter.data,i=document.querySelectorAll("#chapter-selector a");return{title:document.querySelector("title")?.text.replace(" - MangaDex",""),series:document.querySelector("a.text-primary[href^='/title/']")?.getAttribute("href"),pages:r.length,prev:i?.item(0)?.getAttribute("href"),next:i?.item(1)?.getAttribute("href"),listImages:r.map(a=>`${t.baseUrl}/data/${t.chapter.hash}/${a}`)}}},o8={name:["MangaFox","MangaHere"],url:/https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,homepage:["https://fanfox.net/","https://www.mangahere.cc/"],language:[$e.ENGLISH],category:Ne.MANGA,waitVar:"chapterid",async run(){const e=document.querySelector("#dm5_key")?.getAttribute("value"),t={method:"GET",headers:{"Content-Type":"text/plain"}},r=Array(unsafeWindow.imagecount).fill(0).map(async(a,s)=>{const l=`chapterfun.ashx?cid=${unsafeWindow.chapterid??unsafeWindow.chapter_id}&page=${s}&key=${e}`,c=await fetch(l,t).then(async u=>u.text());return(0,eval)(c),d}),i=await Promise.all(r);return{title:document.querySelector(".reader-header-title div")?.textContent?.trim(),series:document.querySelector(".reader-header-title a")?.getAttribute("href"),pages:unsafeWindow.imagecount,prev:unsafeWindow.prechapterurl,next:unsafeWindow.nextchapterurl,listImages:i.map((a,s)=>a[s===0?0:1])}}},i8={name:"Mangago",url:/https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,homepage:"https://www.mangago.me/",language:[$e.ENGLISH],category:Ne.MANGA,waitVar:"imgsrcs",run(){const e=CryptoJS.enc.Hex.parse("e11adc3949ba59abbe56e057f20f883e"),t={iv:CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef"),padding:CryptoJS.pad.ZeroPadding},r=CryptoJS.AES.decrypt(unsafeWindow.imgsrcs,e,t).toString(CryptoJS.enc.Utf8).split(",");return{title:`${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,series:unsafeWindow.mid,pages:unsafeWindow.total_pages,prev:document.querySelector(".recom p:nth-child(5) a")?.getAttribute("href"),next:unsafeWindow.next_c_url,listImages:r,before(){r.some(i=>i==="")&&document.querySelector("#nform")?.submit()}}}},a8={name:"MangaHub",url:/https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/,homepage:"https://mangahub.io/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"#select-chapter",async run(){function e(s){const l=new RegExp(`${s}=([^;]+)`).exec(document.cookie);return l!=null?decodeURIComponent(l[1]):null}const t={query:`{chapter(x:m01,slug:"${unsafeWindow.CURRENT_MANGA_SLUG??window.location.pathname.split("/")[2]}",number:${window.location.pathname.split("/")[3].replace("chapter-","")}){pages}}`},r={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json","x-mhub-access":e("mhub_access")??""}},i=await fetch("https://api.mghcdn.com/graphql",r).then(async s=>s.json()),a=JSON.parse(i?.data.chapter.pages.toString());return{title:document.querySelector("#mangareader h3")?.textContent?.trim(),series:document.querySelector("#mangareader a")?.getAttribute("href"),pages:a.i.length,prev:document.querySelector(".previous a")?.getAttribute("href"),next:document.querySelector(".next a")?.getAttribute("href"),listImages:a.i.map(s=>`https://imgx.mghcdn.com/${a.p+s}`)}}},s8={name:["MangaKakalot","NeloManga ","MangaNato","NatoManga","MangaBats"],url:/https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/,homepage:["https://mangakakalot.gg/","https://www.nelomanga.com/","https://www.manganato.gg/","https://www.natomanga.com/","https://www.mangabats.com/"],language:[$e.ENGLISH],category:Ne.MANGA,waitEle:".navi-change-chapter-btn-prev, .next, .navi-change-chapter-btn-next, .back",run(){const e=[...document.querySelectorAll("#vungdoc img, .container-chapter-reader img")];return{title:document.querySelector(".info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1")?.textContent?.trim(),series:document.querySelectorAll("span a[title]").item(1).getAttribute("href"),pages:e.length,prev:document.querySelector(".navi-change-chapter-btn-prev, .next")?.getAttribute("href"),next:document.querySelector(".navi-change-chapter-btn-next, .back")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},l8={name:"MangaOni",url:/https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,homepage:"https://manga-oni.com/",language:[$e.SPANISH],category:Ne.MANGA,run(){document.querySelector("#c_list")?.dispatchEvent(new Event("mouseover"));const e=document.querySelector("#c_list option:checked"),t=[...document.querySelectorAll("#slider img")];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:t?.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(r=>r.getAttribute("data-src")??r.getAttribute("src")??"")}}},c8={name:"MangaPark",url:/https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/,homepage:"https://mangapark.net/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"main div div a.btn-primary",run(){const e=[...document.querySelectorAll("main div div > img.w-full")];return{title:[...document.querySelectorAll(".comic-detail h3 a, .comic-detail h6 span")].map(t=>t.textContent?.trim()).join(" "),series:document.querySelector(".comic-detail a")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll("main div div a.btn-primary")?.item(0)?.getAttribute("href"),next:document.querySelectorAll("main div div a.btn-primary")?.item(1)?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},u8={name:"MangaReader",url:/https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,homepage:"https://mangareader.to",language:[$e.ENGLISH],category:Ne.MANGA,obs:"Some galleries will not be usable",waitEle:".ds-image, .iv-card",async run(){const e=document.querySelector(".chapter-item.active"),t=[...document.querySelectorAll(".ds-image[data-url], .iv-card[data-url]")].map(async r=>{const i=r.getAttribute("data-url")??"";return i&&r.classList.contains("shuffled")?(await imgReverser(i)).toDataURL():i});return{title:document.querySelector(".hr-manga h2")?.textContent?.trim(),series:document.querySelector(".hr-manga")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.querySelector("a")?.getAttribute("href"),next:e?.previousElementSibling?.querySelector("a")?.getAttribute("href"),listImages:await Promise.all(t)}}},d8={name:["MangaStream WordPress Plugin","Realm Oasis","Voids-Scans","Luminous Scans","Shimada Scans","Night Scans","Manhwa-Freak","OzulScansEn","CypherScans","MangaGalaxy","LuaScans","Drake Scans","Rizzfables","NovatoScans","TresDaos","Lectormiau","NTRGod","Threedaos"],url:/https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/,homepage:["https://themesia.com/mangastream-wordpress-theme/","https://realmoasis.com/","https://void-scans.com/","https://luminous-scans.com/","https://shimadascans.com/","https://night-scans.com/","https://freakcomic.com/","https://ozulscansen.com/","https://cypherscans.xyz/","https://mangagalaxy.me/","https://luascans.com/","https://drake-scans.com/","https://rizzfables.com/","https://www.novatoscans.top/","https://tresdaos.com","https://zonamiau.com/","https://ntrgod.com/","https://threedaos.zdrz.xyz/"],language:[$e.ENGLISH,$e.SPANISH],category:Ne.MANGA,waitEle:':where(#readerarea, .check-box, #viewer-img) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"]),:where(.nextprev, .inner_nPL)',run(){const e=[...document.querySelectorAll(this.waitEle??"")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(":where(.allc, .tac) a")?.getAttribute("href")??document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute("href"),pages:e.length,prev:T1(":where(.nextprev, .inner_nPL) a",["Prev","Anterior"])?.[0]?.getAttribute("href"),next:T1(":where(.nextprev, .inner_nPL) a",["Next","Siguiente"])?.[0]?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},h8={name:"MangaToons",url:/https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,homepage:"https://mangatoon.mobi/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:".pictures img:not(.cover)",run(){const e=[...document.querySelectorAll(".pictures img:not(.cover)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".top-left a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".page-icons-prev")?.getAttribute("href"),next:document.querySelector(".page-icons-next")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??"")}}},f8={name:"MangaTown",url:/https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//,homepage:"https://www.mangatown.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"div.page_select select option, .read_img .image",run(){const e=document.querySelector("div.page_select select")?.querySelectorAll("option"),t=[...document.querySelectorAll(".read_img .image")].map(i=>i.getAttribute("src")??""),r=[...e??[]].map(i=>i.value).filter(i=>!i.endsWith("featured.html")).map(i=>new URL(i,window.location.href).href);return{title:document.querySelector("div.title h1")?.textContent?.trim(),series:document.querySelector("div.title a")?.getAttribute("href"),pages:unsafeWindow.total_pages||r.length,prev:document.querySelector(".chapter_select option:checked")?.previousElementSibling?.getAttribute("value"),next:document.querySelector(".chapter_select option:checked")?.nextElementSibling?.getAttribute("value"),...t.length>1?{listImages:t}:{listPages:r,img:"#image"}}}},p8={name:"ManhwaWeb",url:/https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,homepage:"https://manhwaweb.com/",language:[$e.SPANISH],category:Ne.MANGA,async run(){const e=window.location.pathname.replace("/leer",""),t=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/see${e}`).then(async i=>i.json()),r=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${e}`).then(async i=>i.json());return{title:`${t.name} ${t.chapter.chapter}`,series:[...document.querySelectorAll("div")].filter(i=>i.textContent==="Episodios")?.[0]?.parentElement?.getAttribute("href"),pages:t.chapter.img.length,prev:r.chapterAnterior.replace(t._id,t.real_id),next:r.chapterSiguiente.replace(t._id,t.real_id),listImages:t.chapter.img}}},m8={name:["MangaGeko.com","MangaGeko.cc"],url:/https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,homepage:["https://www.mgeko.com/","https://www.mgeko.cc/"],language:[$e.ENGLISH],category:Ne.MANGA,run(){const e=[...document.querySelectorAll('img[id^="image-"]')];return{title:document.querySelector(".titles")?.textContent?.trim(),series:document.querySelector(".titles a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".chnav.prev:not(.isDisabled)")?.getAttribute("href"),next:document.querySelector(".chnav.next:not(.isDisabled)")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},g8={name:"NineAnime",url:/https?:\/\/(www\.)?nineanime.com\/chapter\/.+/,homepage:"https://www.nineanime.com/",language:[$e.ENGLISH],category:Ne.MANGA,run(){const e=[...document.querySelectorAll(".sl-page option")],t=document.querySelector(".mangaread-pagenav select option[selected]");return{title:`${document.querySelector(".title h1")?.textContent?.trim()}/${document.querySelector(".title h2")?.textContent?.trim()}`,series:document.querySelector(".title a:has(h2)")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.getAttribute("value"),next:t?.previousElementSibling?.getAttribute("value"),listPages:e.map(r=>r.getAttribute("value")??""),img:".manga_pic"}}},v8={name:"Olympus",url:/https?:\/\/(www\.)?olympusxyz.com\/capitulo\/\d+\/.+/,homepage:"https://olympusxyz.com/",language:[$e.SPANISH],category:Ne.MANGA,run(){const e=[...document.querySelectorAll("section img.w-full.h-full")];return{title:document.querySelector("title")?.textContent?.replace(/\|.+/,"").trim(),series:document.querySelector("h1")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector('a[name="capitulo anterior"]')?.getAttribute("href"),next:document.querySelector('a[name="capitulo siguiente"]')?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},b8={name:"QiManhwa",url:/https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/,homepage:"https://qimanhwa.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:'img[alt*="Chapter"]',run(){const e=[...document.querySelectorAll('img[alt*="Chapter"]')];return{title:document.querySelector("h1")?.textContent?.trim(),series:uo("button","Home","a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".lucide-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".lucide-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},w8={name:"ReadComicsOnline",url:/https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/,homepage:"https://readcomicsonline.ru/",language:[$e.ENGLISH],category:Ne.COMIC,run(){const e=[...document.querySelectorAll("#all img")];return{title:unsafeWindow.title.replace(/ - Page \d+/,""),series:document.querySelector("div.pager-cnt a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:unsafeWindow.prev_chapter,next:unsafeWindow.next_chapter,listImages:e.map(t=>t.getAttribute("data-src")??"")}}},_8={name:"ReaperScans",url:/https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,homepage:"https://reaperscans.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"#content .container img:not(.rounded)",run(){const e=[...document.querySelectorAll("#content .container img:not(.rounded)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("button .fa-house")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".fa-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>(t.getAttribute("data-src")||t.getAttribute("src"))??"")}}},y8={name:"TuMangaOnline",url:/https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/,homepage:"https://zonatmo.org/",language:[$e.SPANISH],category:Ne.MANGA,run(){const e=[...document.querySelectorAll(".img-container img, .viewer-container img, .content-image, .viewer-image, .img-fluid, .reader-img-wrap img, .viewer-img, #viewer-container img, .viewer-page")],t=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option, #viewer-pages-select option, select#chapter-pages option, select#pages option")],r=e.length>1?e.length:t.length;return{title:document.querySelector("title")?.textContent?.trim(),series:(document.querySelector('a[title="Volver"]')??document.querySelector(".breadcrumb-item:nth-child(2) a")??document.querySelector(".book-name a")??document.querySelector(".breadcrumb-item a"))?.getAttribute("href"),pages:r||1,prev:(document.querySelector(".chapter-prev a")??document.querySelector(".prev_page")??document.querySelector("a.prev-chapter")??document.querySelector(".chapter-prev-btn"))?.getAttribute("href"),next:(document.querySelector(".chapter-next a")??document.querySelector(".next_page")??document.querySelector("a.next-chapter")??document.querySelector(".chapter-next-btn"))?.getAttribute("href"),...e.length<=1&&t.length>1?{listPages:Array(t.length).fill(0).map((i,a)=>`${window.location.href.replace(/\/\d+$/,"")}/${a+1}`)}:{listImages:e.map(i=>i.getAttribute("data-src")??i.getAttribute("data-original")??i.getAttribute("src")??"")},img:"#viewer-container img, .viewer-page, .img-container img, .content-image, .viewer-image, .reader-img-wrap img, .viewer-img",before(){if(window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade")),window.location.pathname.includes("view_uploads")){const i=document.querySelector("a.btn.btn-primary, .btn-primary a, a.btn-block");i&&i.click()}}}}},k8={name:"Vortex Scans",url:/https?:\/\/(www.)?(vortexscans).(org)\/.+/,homepage:"https://vortexscans.org/",language:[$e.ENGLISH],category:Ne.MANGA,waitVar:"__next_f",waitFunc(){return unsafeWindow.__next_f.find(e=>/images/.test(e?.[1]))?.length>0},run(){const e=unsafeWindow.__next_f.find(r=>/images/.test(r?.[1]))?.[1],t=e.slice(e.indexOf("images")).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g)??[];return{title:document.querySelector("time")?.closest("div")?.querySelector("div")?.textContent?.trim(),series:document.querySelector("time")?.closest("a")?.getAttribute("href"),pages:t?.length,prev:uo("button","Prev","a")?.getAttribute("href"),next:uo("button","Next","a")?.getAttribute("href"),listImages:t}}},E8={name:"WebNovel",url:/https?:\/\/(www\.)?webnovel.com\/comic\/.+/,homepage:"https://www.webnovel.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitVar:"g_data",run(){const e=unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.trim(),series:"./",pages:e.length,prev:`${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,next:`${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,listImages:e}}},S8={name:"WebToons",url:/https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,homepage:"https://www.webtoons.com/",language:[$e.ENGLISH],category:Ne.MANGA,run(){const e=[...document.querySelectorAll("#_imageList img")];return{title:document.querySelector(".subj_info")?.textContent?.trim(),series:document.querySelector(".subj_info a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("._prevEpisode")?.getAttribute("href"),next:document.querySelector("._nextEpisode")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-url")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},A8={name:"WeebCentral",url:/https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,homepage:"https://weebcentral.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:'section[hx-get*="/images"]',async run(){if(document.documentElement.hasAttribute("mov"))return{pages:0,listImages:[]};const e=document.querySelector('section[hx-get*="/images"]')?.getAttribute("hx-get");if(!e)throw new Error("Images HTMX endpoint not found");const t=`${e.replace(/&amp;/g,"&")}&reading_style=long_strip`,r=await fetch(t,{headers:{"HX-Request":"true"}}).then(p=>p.text()),i=new DOMParser,a=[...i.parseFromString(r,"text/html").querySelectorAll("img")].map(p=>p.getAttribute("src")||p.getAttribute("data-src")||"").filter(p=>p&&!p.includes("broken_image")).map(p=>p.startsWith("http")?p:new URL(p,window.location.origin).href),s=[...new Set(a)].sort((p,w)=>{const b=p.match(/-(\d+)\.[^.]+$/),g=w.match(/-(\d+)\.[^.]+$/);return(b?parseInt(b[1],10):0)-(g?parseInt(g[1],10):0)}),l=document.querySelector('button[hx-get*="chapter-select"]')?.getAttribute("hx-get"),c=await fetch(l??"",{headers:{"HX-Request":"true"}}).then(p=>p.text()),u=i.parseFromString(c,"text/html").querySelector("#selected_chapter"),f=p=>p?p.startsWith("http")?p:new URL(p,window.location.origin).href:null;return{title:document.title.split(" - ")[0].trim(),series:f(document.querySelector("main section a.btn-ghost")?.getAttribute("href")),pages:s.length,prev:f(u?.nextElementSibling?.getAttribute("href")),next:f(u?.previousElementSibling?.getAttribute("href")),listImages:s,fetchOptions:{headers:{"HX-Request":"true",Referer:window.location.href}}}}},M8={name:"WeebDex",url:/https?:\/\/(www\.)?weebdex\.org\/.+/,homepage:"https://weebdex.org/",language:$e.ENGLISH,category:Ne.MANGA,waitEle:'a[href^="/title/"]',async run(){const e=/\/chapter\/([^/]+)/.exec(window.location.pathname)?.at(1),t=`https://api.weebdex.org/chapter/${e}`,r=await fetch(t).then(async c=>c.json()),i=document.querySelector('a[href^="/title/"]'),a=`https://api.weebdex.org/manga/${r.relationships.manga.id}/aggregate?lang=${r.language}`,s=(await fetch(a).then(async c=>c.json())).chapters||[],l=s.findIndex(c=>c.chapter===r.chapter);return{title:document.querySelector("title")?.textContent?.trim().replace(/Page \d+:/,""),series:i?.getAttribute("href"),pages:r.data.length,prev:s[l+1]?`/chapter/${xe.default.keys(s[l+1].entries)[0]}`:void 0,next:s[l-1]?`/chapter/${xe.default.keys(s[l-1].entries)[0]}`:void 0,listImages:r.data.map(c=>`${r.node}/data/${e}/${c.name}`)}}},x8={name:"ZeroScans",url:/https?:\/\/(www\.)?zscans.com\/comics\/.+/,homepage:"https://zscans.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitVar:"__ZEROSCANS__",run(){const e=unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality,t=document.querySelectorAll(".v-btn--router");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".v-breadcrumbs li:nth-child(2) + a")?.getAttribute("href"),pages:e.length,prev:t[0]?.getAttribute("href"),next:t[1]?.getAttribute("href"),listImages:e}}},I8=[Mw,xw,Iw,Cw,Hw,Fw,Gw,Ww,Vw,jw,Kw,Yw,Xw,Jw,Qw,r8,n8,o8,i8,a8,s8,t8,l8,c8,u8,h8,f8,p8,m8,g8,v8,b8,w8,_8,y8,E8,S8,A8,M8,k8,x8,d8,Uw,e8];yw(I8).catch(ye)})();

// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: Batoto, BilibiliComics, ComiCastle, Dynasty-Scans, Asura Scans, Flame Scans, Realm Scans, Voids-Scans, Luminous Scans, Shimada Scans, Night Scans, Manhwa-Freak, OzulScansEn, AzureManga, INKR, InManga, KLManga, Leitor, LHTranslation, LynxScans, MangaBuddy, MangaDex, MangaFox, MangaHere, MangaFreak, Mangago, mangahosted, MangaHub, MangasIn, MangaKakalot, MangaNelo, MangaNato, MangaPark, Mangareader, MangaSee, Manga4life, MangaTigre, MangaToons, MangaTown, ManhuaScan, MReader, MangaGeko, NaniScans, NineManga, OlympusScans, PandaManga, RawDevart, ReadComicsOnline, ReadManga Today, Funmanga, MangaDoom, MangaInn, ReaperScans, SenManga(Raw), KLManga, TenManga, TuMangaOnline, TuManhwas, UnionMangas, WebNovel, WebToons, Manga33, YugenMangas, ZeroScans, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, NovelMic, Reset-Scans, LeviatanScans, Dragon Tea, SetsuScans
// @version       2023.09.20
// @license       MIT
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @noframes      on
// @connect       *
// @require       https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.8/sweetalert2.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.10.3/dist/hotkeys.min.js
// @require       https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js
// @include       /https?:\/\/(www.)?bato.to\/chapter.*/
// @include       /https?:\/\/(www.)?(bilibilicomics).com\/.+\/.+/
// @include       /https?:\/\/(www.)?comicastle.org\/read\/.+\/\d+.*/
// @include       /https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(asura.nacm|asurascans|asuracomics|asura|flamescans|realmscans|void-scans|luminousscans|shimascans|nightscans|manhwafreak|manhwa-freak|ozulscansen|azuremanga).(com|org|gg|xyz|to|net)\/.+/
// @include       /https?:\/\/(comics.)?inkr.com\/title\/.+\/chapter\/.+/
// @include       /https?:\/\/(www.)?inmanga.com\/ver\/manga\/.+\/.+/
// @include       /https?:\/\/(www.)?klmanga.com\/.+chapter.+/
// @include       /https?:\/\/(www.)?leitor.net\/manga\/.+\/.+\/.+/
// @include       /https?:\/\/(www.)?lhtranslation.net\/read.+/
// @include       /https?:\/\/(www.)?lynxscans.com\/comics?\/.+/
// @include       /https?:\/\/(www.)?mangabuddy.com\/.+\/chapter.+/
// @include       /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/
// @include       /https?:\/\/(www.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include       /https?:\/\/.{3,4}?(mangafreak).net\/Read.+/
// @include       /https?:\/\/(www.)?mangago.me\/.*\/.*\/.*/
// @include       /https?:\/\/(www.)?mangahosted.com\/manga\/.+\/.+/
// @include       /https?:\/\/(www.)?(mangahub).io\/chapter\/.+\/.+/
// @include       /https?:\/\/(www.)?mangas.in\/manga\/.+\/.+\/\d+/
// @include       /https?:\/\/(www.)?((manganelo|mangakakalot).com\/chapter\/.+\/.+|(manganato|readmanganato|chapmanganato).com\/manga-\w\w\d+\/chapter-\d+)/
// @include       /https?:\/\/(www.)?mangapark.(com|me|org|net)\/title\/.+\/.+/
// @include       /https?:\/\/(www.)?mangareader.to\/read\/.+\/.+\/.+/
// @include       /https?:\/\/(www.)?(mangasee123|manga4life).com\/read-online\/.+/
// @include       /https?:\/\/(www.)?mangatigre.net\/.+\/.+\/.+/
// @include       /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/
// @include       /https?:\/\/(www.|m.)?mangatown.com\/manga\/.+\/.+/
// @include       /https?:\/\/(www.)?manhuascan.io\/.+chapter.+/
// @include       /https?:\/\/(www.)?(mreader|mangageko).com?\/reader\/.*/
// @include       /https?:\/\/(www.)?(naniscans).com\/chapters\/.+\/read/
// @include       /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/
// @include       /https?:\/\/(www.)?olympusscans.com\/capitulo\/.+\/.+/
// @include       /https?:\/\/(www.)?pandamanga.xyz\/.+\/.+\/.+/
// @include       /https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//
// @include       /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include       /https?:\/\/(www.)?(funmanga|mngdoom|readmng|mangainn).(com|net)\/.+\/\d+/
// @include       /https?:\/\/(www.)?reaperscans.com\/comics\/.+\/chapters\/.+/
// @include       /https?:\/\/raw.senmanga.com\/.+\/.+\/?/
// @include       /https?:\/\/(www.)?tapas.io\/episode\/.+/
// @include       /https?:\/\/(www.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/
// @include       /https?:\/\/(www.)?(almtechnews|animalcanine|animalslegacy|animation2you|animationforyou|anisurion|anitirion|anitoc|cook2love|cooker2love|cookermania|cookernice|cookerready|dariusmotor|enginepassion|fanaticmanga|followmanga|gamesnk|gamesxo|infogames2you|infopetworld|lectortmo|mangalong|mistermanga|motorbakery|motornk|motorpi|mygamesinfo|mynewsrecipes|myotakuinfo|otakunice|otakuworldgames|otakworld|paleomotor|panicmanga|recetchef|recipesaniki|recipescoaching|recipesdo|recipesist|recipesnk|sucrecipes|tmofans|vgmotor|vsrecipes|worldmangas|wtechnews).com\/(viewer|news)\/.+\/(paginated|cascade)/
// @include       /https?:\/\/(www.)?tumanhwas.com\/view\/.+/
// @include       /https?:\/\/(www.)?unionleitor.top\/leitor\/.+\/.+/
// @include       /https?:\/\/(www.)?webnovel.com\/comic\/.+/
// @include       /https?:\/\/(www.)?webtoons.com\/.+viewer.+/
// @include       /https?:\/\/(www.)?(manga33).com\/manga\/.+/
// @include       /https?:\/\/(www.)?(yugenmangas).(com|net|lat)\/series\/.+/
// @include       /https?:\/\/(www.)?zeroscans.com\/comics\/.+/
// @include       /^(?!.*jaiminisbox).*\/read\/.+/
// @include       /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel)\/.+\/.+/
// @exclude       /https?:\/\/(www.)?tsumino.com\/.+/
// @exclude       /https?:\/\/(www.)?pururin.io\/.+/
// ==/UserScript==
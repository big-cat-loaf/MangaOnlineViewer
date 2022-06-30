export default `
html {
  font-size: 100%;
}

body {
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  background-color: #FFF;
  padding: 0;
}

a {
  color: #08C;
  text-decoration: none;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0 none;
}

#nprogress .bar {
  background: #29d;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}

#MangaOnlineViewer {
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
  min-height: 1080px;
}

#MangaOnlineViewer #Chapter {
  text-align: center;
  display: block;
}

#MangaOnlineViewer #Chapter.WebComic .PageFunctions {
  position: relative;
  margin-bottom: -23px;
}

#MangaOnlineViewer #Chapter.WebComic .PageContent {
  margin-bottom: 0;
  line-height: 0;
}

#MangaOnlineViewer #Chapter.FluidLTR .MangaPage {
  width: auto;
}

#MangaOnlineViewer #Chapter.FluidRTL .MangaPage {
  width: auto;
}

#MangaOnlineViewer #Chapter.FluidLTR {
  direction: ltr;
}

#MangaOnlineViewer #Chapter.FluidRTL {
  direction: rtl;
}

#MangaOnlineViewer #ViewerControls {
  padding: 8px;
  position: fixed;
  top: 0;
  left: 405px;
  width: auto;
  display: none;
}

#MangaOnlineViewer #ViewerShortcuts {
  padding: 8px;
  position: fixed;
  top: 65px;
  left: 0;
}

#MangaOnlineViewer #ViewerControls .controlLabel {
  display: list-item;
  list-style: none;
}

#MangaOnlineViewer select {
  height: 20px;
  padding: 0;
  margin-bottom: 5px;
}

#MangaOnlineViewer .controlButton {
  cursor: pointer;
  border: 0 none;
}

#MangaOnlineViewer #ImageOptions {
  left: 0;
  position: absolute;
  top: 0;
  width: 405px;
}

#MangaOnlineViewer #ImageOptions .panel {
  padding: 5px;
  position: inherit;
}

#MangaOnlineViewer #ImageOptions:hover {
  position: fixed;
}

#MangaOnlineViewer #ImageOptions.settingsOpen {
  position: fixed;
}

#MangaOnlineViewer #ImageOptions #menu {
  position: fixed;
  height: 64px;
  width: 200px;
  top: 0;
}

#MangaOnlineViewer #ImageOptions #Zoom {
  position: absolute;
  left: 18px;
  bottom: -65px;
}

#MangaOnlineViewer .MangaPage {
  width: 100%;
  display: inline-block;
  text-align: center;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

#MangaOnlineViewer .PageContent {
  margin: 0 0 15px;
  text-align: center;
  display: inline-block;
}

#MangaOnlineViewer .PageContent img[src=""],
#MangaOnlineViewer .PageContent img:not([src]) {
  width: 500px;
  height: 750px;
  display: inline-block;
}

#MangaOnlineViewer #gotoPage {
  width: 35px;
}

#MangaOnlineViewer #ThemeSelector {
  width: 110px;
}

#MangaOnlineViewer header, #MangaOnlineViewer footer {
 display: flex;
 justify-content: center;
 align-content: center;
 position: relative;
}

#MangaOnlineViewer .ChapterControl {
  right: 300px;
  position: absolute;
  top: 20px;
}

#MangaOnlineViewer .ChapterControl a {
  display: inline-block;
  width: 80px;
  height: 25px;
  text-align: center;
  margin-left: 3px;
  margin-bottom: -1px;
}

#MangaOnlineViewer .ChapterControl a[href='#'],
#MangaOnlineViewer .ChapterControl a[href=''] {
  visibility: hidden
}

#MangaOnlineViewer .ViewerTitle {
  text-align: center;
  min-height: 60px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 10px;
}

#MangaOnlineViewer #Counters {
  position: absolute;
  right: 10px;
  top: 22px;
}

#MangaOnlineViewer .PageFunctions {
  font-family: monospace;
  font-size: 10pt;
  padding-right: 120px;
  text-align: right
}

#MangaOnlineViewer .PageFunctions > span {
  min-width: 20px;
  text-align: center;
  display: inline-block;
  padding: 2px 10px
}

#MangaOnlineViewer .PageFunctions > a {
  height: 16px;
  width: 16px;
  padding: 10px;
}

#MangaOnlineViewer .PageFunctions a {
  opacity: 0.2;
}

#MangaOnlineViewer .PageFunctions:hover a {
  opacity: 1;
}

#MangaOnlineViewer.hideControls .PageFunctions {
  display: none;
  visibility: hidden;
}

#MangaOnlineViewer #NavigationCounters {
  margin-top: 5px;
  width: 100%;
}

#MangaOnlineViewer #Navigation {
  bottom: -180px;
  height: 190px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 20px;
  position: fixed;
  white-space: nowrap;
  width: 100%;
  text-align: center;
}

#MangaOnlineViewer #Navigation #Thumbnails {
  overflow-x: auto;
  overflow-y: hidden;
}

#MangaOnlineViewer #Navigation:hover {
  bottom: 0;
}

#MangaOnlineViewer #Navigation.disabled {
  display: none;
}

#MangaOnlineViewer #Navigation.visible {
  bottom: 0;
}

#MangaOnlineViewer #Navigation .Thumbnail {
  display: inline-block;
  height: 150px;
  margin: 0 5px;
  position: relative;
}

#MangaOnlineViewer #Navigation .Thumbnail span {
  display: block;
  opacity: 0.8;
  position: relative;
  top: -30px;
  width: 100%;
}

#MangaOnlineViewer #Navigation .Thumbnail img {
  align-content: center;
  cursor: pointer;
  display: inline-block;
  margin-bottom: -10px;
  margin-top: 10px;
  max-height: 150px;
  min-height: 150px;
  min-width: 80px;
  max-width: 160px;
}

#MangaOnlineViewer #Navigation .nav {
  transform: rotate(-90deg);
}

#MangaOnlineViewer #ImageOptions .menuOuterArrow {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid blue;
  display: inline-block;
  position: absolute;
  bottom: 0;
}

#MangaOnlineViewer #ImageOptions .menuInnerArrow {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid white;
  left: -10px;
  position: absolute;
  top: -5px;
  display: inline-block;
}

#MangaOnlineViewer.mobile * {
  float: none !important;
}

#MangaOnlineViewer.mobile #Navigation {
  display: none;
}

#MangaOnlineViewer.mobile .PageFunctions {
  padding: 0;
}

#MangaOnlineViewer.mobile .PageFunctions a:not(.Bookmark) {
  display: none;
}

#MangaOnlineViewer.mobile .PageFunctions a.Bookmark {
  opacity: 1;
}

#MangaOnlineViewer.mobile .PageFunctions span {
  right: 0;
  position: inherit;
  text-align: center;
}

#MangaOnlineViewer.mobile .PageContent {
  margin: 0;
  width: 100%;
}

#MangaOnlineViewer.mobile .PageContent img {
  width: 100% !important;
}

#MangaOnlineViewer.mobile .fitWidthIfOversize .PageContent img {
  max-width: 100%;
}

#MangaOnlineViewer.mobile #ImageOptions img:not(#settings) {
  display: none;
}

#MangaOnlineViewer.mobile #ViewerShortcuts {
  display: none !important;
}

#MangaOnlineViewer.mobile #ViewerControls {
  padding: 8px;
  position: fixed;
  top: 0;
  left: 45px;
  width: auto;
}

#MangaOnlineViewer.mobile #ViewerControls span.DefaultZoom,
#MangaOnlineViewer.mobile #ViewerControls span.viewMode,
#MangaOnlineViewer.mobile #ViewerControls span.fitIfOversize,
#MangaOnlineViewer.mobile #ViewerControls span.showThumbnails,
#MangaOnlineViewer.mobile #ViewerControls span.lazyLoadImages,
#MangaOnlineViewer.mobile #ViewerControls span.downloadZip {
  display: none;
}

#MangaOnlineViewer.mobile #ViewerControls {
  padding: 8px;
  position: fixed;
  top: 0;
  left: 45px;
  width: auto;
}

#MangaOnlineViewer.mobile #ImageOptions #menu {
  display: none;
}

#MangaOnlineViewer.mobile #ImageOptions #Zoom {
  display: none;
}

#MangaOnlineViewer.mobile .ViewerTitle {
  height: auto;
}

#MangaOnlineViewer.mobile .ChapterControl {
  margin: 10px;
  display: block;
  text-align: center;
}

#MangaOnlineViewer.mobile .ChapterControl .download {
  display: none;
}

#MangaOnlineViewer.mobile #Counters {
  position: inherit;
  text-align: center;
  margin: 10px;
}

#MangaOnlineViewer.mobile #Chapter {
  margin: 5px auto 0;
}

#MangaOnlineViewer .fitWidthIfOversize .PageContent img {
  max-width: 100%;
}

#MangaOnlineViewer .minicolors-theme-default .minicolors-swatch {
  top: 2px;
  left: 2px;
}
`;

export const sweetalertStyle = `
.swal2-popup.swal2-toast {
    box-sizing: border-box;
    grid-column: 1/4 !important;
    grid-row: 1/4 !important;
    grid-template-columns: 1fr 99fr 1fr;
    padding: 1em;
    overflow-y: hidden;
    background: #fff;
    box-shadow: 0 0 1px hsla(0deg, 0%, 0%, 0.075), 0 1px 2px hsla(0deg, 0%, 0%, 0.075),
        1px 2px 4px hsla(0deg, 0%, 0%, 0.075), 1px 3px 8px hsla(0deg, 0%, 0%, 0.075),
        2px 4px 16px hsla(0deg, 0%, 0%, 0.075);
    pointer-events: all;
}
.swal2-popup.swal2-toast > * {
    grid-column: 2;
}
.swal2-popup.swal2-toast #swal2-title {
    margin: 0.5em 1em;
    padding: 0;
    font-size: 1em;
    text-align: initial;
}
.swal2-popup.swal2-toast .swal2-loading {
    justify-content: center;
}
.swal2-popup.swal2-toast .swal2-input {
    height: 2em;
    margin: 0.5em;
    font-size: 1em;
}
.swal2-popup.swal2-toast .swal2-validation-message {
    font-size: 1em;
}
.swal2-popup.swal2-toast .swal2-footer {
    margin: 0.5em 0 0;
    padding: 0.5em 0 0;
    font-size: 0.8em;
}
.swal2-popup.swal2-toast .swal2-close {
    grid-column: 3/3;
    grid-row: 1/99;
    align-self: center;
    width: 0.8em;
    height: 0.8em;
    margin: 0;
    font-size: 2em;
}
.swal2-popup.swal2-toast .swal2-html-container {
    margin: 0.5em 1em;
    padding: 0;
    font-size: 1em;
    text-align: initial;
}
.swal2-popup.swal2-toast .swal2-html-container:empty {
    padding: 0;
}
.swal2-popup.swal2-toast .swal2-loader {
    grid-column: 1;
    grid-row: 1/99;
    align-self: center;
    width: 2em;
    height: 2em;
    margin: 0.25em;
}
.swal2-popup.swal2-toast .swal2-icon {
    grid-column: 1;
    grid-row: 1/99;
    align-self: center;
    width: 2em;
    min-width: 2em;
    height: 2em;
    margin: 0 0.5em 0 0;
}
.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {
    display: flex;
    align-items: center;
    font-size: 1.8em;
    font-weight: 700;
}
.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {
    width: 2em;
    height: 2em;
}
.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {
    top: 0.875em;
    width: 1.375em;
}
.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {
    left: 0.3125em;
}
.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {
    right: 0.3125em;
}
.swal2-popup.swal2-toast .swal2-actions {
    justify-content: flex-start;
    height: auto;
    margin: 0;
    margin-top: 0.5em;
    padding: 0 0.5em;
}
.swal2-popup.swal2-toast .swal2-styled {
    margin: 0.25em 0.5em;
    padding: 0.4em 0.6em;
    font-size: 1em;
}
.swal2-popup.swal2-toast .swal2-success {
    border-color: #a5dc86;
}
.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {
    position: absolute;
    width: 1.6em;
    height: 3em;
    transform: rotate(45deg);
    border-radius: 50%;
}
.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {
    top: -0.8em;
    left: -0.5em;
    transform: rotate(-45deg);
    transform-origin: 2em 2em;
    border-radius: 4em 0 0 4em;
}
.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {
    top: -0.25em;
    left: 0.9375em;
    transform-origin: 0 1.5em;
    border-radius: 0 4em 4em 0;
}
.swal2-popup.swal2-toast .swal2-success .swal2-success-ring {
    width: 2em;
    height: 2em;
}
.swal2-popup.swal2-toast .swal2-success .swal2-success-fix {
    top: 0;
    left: 0.4375em;
    width: 0.4375em;
    height: 2.6875em;
}
.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {
    height: 0.3125em;
}
.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {
    top: 1.125em;
    left: 0.1875em;
    width: 0.75em;
}
.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {
    top: 0.9375em;
    right: 0.1875em;
    width: 1.375em;
}
.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip {
    -webkit-animation: swal2-toast-animate-success-line-tip 0.75s;
    animation: swal2-toast-animate-success-line-tip 0.75s;
}
.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long {
    -webkit-animation: swal2-toast-animate-success-line-long 0.75s;
    animation: swal2-toast-animate-success-line-long 0.75s;
}
.swal2-popup.swal2-toast.swal2-show {
    -webkit-animation: swal2-toast-show 0.5s;
    animation: swal2-toast-show 0.5s;
}
.swal2-popup.swal2-toast.swal2-hide {
    -webkit-animation: swal2-toast-hide 0.1s forwards;
    animation: swal2-toast-hide 0.1s forwards;
}
.swal2-container {
    display: grid;
    position: fixed;
    z-index: 1060;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    grid-template-areas: 'top-start top top-end' 'center-start center center-end' 'bottom-start bottom-center bottom-end';
    grid-template-rows: minmax(-webkit-min-content, auto) minmax(-webkit-min-content, auto) minmax(
            -webkit-min-content,
            auto
        );
    grid-template-rows: minmax(min-content, auto) minmax(min-content, auto) minmax(
            min-content,
            auto
        );
    height: 100%;
    padding: 0.625em;
    overflow-x: hidden;
    transition: background-color 0.1s;
    -webkit-overflow-scrolling: touch;
}
.swal2-container.swal2-backdrop-show,
.swal2-container.swal2-noanimation {
    background: rgba(0, 0, 0, 0.4);
}
.swal2-container.swal2-backdrop-hide {
    background: 0 0 !important;
}
.swal2-container.swal2-bottom-start,
.swal2-container.swal2-center-start,
.swal2-container.swal2-top-start {
    grid-template-columns: minmax(0, 1fr) auto auto;
}
.swal2-container.swal2-bottom,
.swal2-container.swal2-center,
.swal2-container.swal2-top {
    grid-template-columns: auto minmax(0, 1fr) auto;
}
.swal2-container.swal2-bottom-end,
.swal2-container.swal2-center-end,
.swal2-container.swal2-top-end {
    grid-template-columns: auto auto minmax(0, 1fr);
}
.swal2-container.swal2-top-start > .swal2-popup {
    align-self: start;
}
.swal2-container.swal2-top > .swal2-popup {
    grid-column: 2;
    align-self: start;
    justify-self: center;
}
.swal2-container.swal2-top-end > .swal2-popup,
.swal2-container.swal2-top-right > .swal2-popup {
    grid-column: 3;
    align-self: start;
    justify-self: end;
}
.swal2-container.swal2-center-left > .swal2-popup,
.swal2-container.swal2-center-start > .swal2-popup {
    grid-row: 2;
    align-self: center;
}
.swal2-container.swal2-center > .swal2-popup {
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    justify-self: center;
}
.swal2-container.swal2-center-end > .swal2-popup,
.swal2-container.swal2-center-right > .swal2-popup {
    grid-column: 3;
    grid-row: 2;
    align-self: center;
    justify-self: end;
}
.swal2-container.swal2-bottom-left > .swal2-popup,
.swal2-container.swal2-bottom-start > .swal2-popup {
    grid-column: 1;
    grid-row: 3;
    align-self: end;
}
.swal2-container.swal2-bottom > .swal2-popup {
    grid-column: 2;
    grid-row: 3;
    justify-self: center;
    align-self: end;
}
.swal2-container.swal2-bottom-end > .swal2-popup,
.swal2-container.swal2-bottom-right > .swal2-popup {
    grid-column: 3;
    grid-row: 3;
    align-self: end;
    justify-self: end;
}
.swal2-container.swal2-grow-fullscreen > .swal2-popup,
.swal2-container.swal2-grow-row > .swal2-popup {
    grid-column: 1/4;
    width: 100%;
}
.swal2-container.swal2-grow-column > .swal2-popup,
.swal2-container.swal2-grow-fullscreen > .swal2-popup {
    grid-row: 1/4;
    align-self: stretch;
}
.swal2-container.swal2-no-transition {
    transition: none !important;
}
.swal2-popup {
    display: none;
    position: relative;
    box-sizing: border-box;
    grid-template-columns: minmax(0, 100%);
    width: 32em;
    max-width: 100%;
    padding: 0 0 1.25em;
    border: none;
    border-radius: 5px;
    background: #fff;
    color: #545454;
    font-family: inherit;
    font-size: 1rem;
}
.swal2-popup:focus {
    outline: 0;
}
.swal2-popup.swal2-loading {
    overflow-y: hidden;
}
#swal2-title {
    position: relative;
    max-width: 100%;
    margin: 0;
    padding: 0.8em 1em 0;
    color: inherit;
    font-size: 1.875em;
    font-weight: 600;
    text-align: center;
    text-transform: none;
    word-wrap: break-word;
}
.swal2-actions {
    display: flex;
    z-index: 1;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: auto;
    margin: 1.25em auto 0;
    padding: 0;
}
.swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {
    opacity: 0.4;
}
.swal2-actions:not(.swal2-loading) .swal2-styled:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
}
.swal2-actions:not(.swal2-loading) .swal2-styled:active {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}
.swal2-loader {
    display: none;
    align-items: center;
    justify-content: center;
    width: 2.2em;
    height: 2.2em;
    margin: 0 1.875em;
    -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;
    animation: swal2-rotate-loading 1.5s linear 0s infinite normal;
    border-width: 0.25em;
    border-style: solid;
    border-radius: 100%;
    border-color: #2778c4 transparent #2778c4 transparent;
}
.swal2-styled {
    margin: 0.3125em;
    padding: 0.625em 1.1em;
    transition: box-shadow 0.1s;
    box-shadow: 0 0 0 3px transparent;
    font-weight: 500;
}
.swal2-styled:not([disabled]) {
    cursor: pointer;
}
.swal2-styled.swal2-confirm {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: #7066e0;
    color: #fff;
    font-size: 1em;
}
.swal2-styled.swal2-confirm:focus {
    box-shadow: 0 0 0 3px rgba(112, 102, 224, 0.5);
}
.swal2-styled.swal2-deny {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: #dc3741;
    color: #fff;
    font-size: 1em;
}
.swal2-styled.swal2-deny:focus {
    box-shadow: 0 0 0 3px rgba(220, 55, 65, 0.5);
}
.swal2-styled.swal2-cancel {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: #6e7881;
    color: #fff;
    font-size: 1em;
}
.swal2-styled.swal2-cancel:focus {
    box-shadow: 0 0 0 3px rgba(110, 120, 129, 0.5);
}
.swal2-styled.swal2-default-outline:focus {
    box-shadow: 0 0 0 3px rgba(100, 150, 200, 0.5);
}
.swal2-styled:focus {
    outline: 0;
}
.swal2-styled::-moz-focus-inner {
    border: 0;
}
.swal2-footer {
    justify-content: center;
    margin: 1em 0 0;
    padding: 1em 1em 0;
    border-top: 1px solid #eee;
    color: inherit;
    font-size: 1em;
}
.swal2-timer-progress-bar-container {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    grid-column: auto !important;
    overflow: hidden;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
.swal2-timer-progress-bar {
    width: 100%;
    height: 0.25em;
    background: rgba(0, 0, 0, 0.2);
}
.swal2-image {
    max-width: 100%;
    margin: 2em auto 1em;
}
.swal2-close {
    z-index: 2;
    align-items: center;
    justify-content: center;
    width: 1.2em;
    height: 1.2em;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: -1.2em;
    padding: 0;
    overflow: hidden;
    transition: color 0.1s, box-shadow 0.1s;
    border: none;
    border-radius: 5px;
    background: 0 0;
    color: #ccc;
    font-family: serif;
    font-family: monospace;
    font-size: 2.5em;
    cursor: pointer;
    justify-self: end;
}
.swal2-close:hover {
    transform: none;
    background: 0 0;
    color: #f27474;
}
.swal2-close:focus {
    outline: 0;
    box-shadow: inset 0 0 0 3px rgba(100, 150, 200, 0.5);
}
.swal2-close::-moz-focus-inner {
    border: 0;
}
.swal2-html-container {
    z-index: 1;
    justify-content: center;
    margin: 1em 1.6em 0.3em;
    padding: 0;
    overflow: auto;
    color: inherit;
    font-size: 1.125em;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    word-wrap: break-word;
    word-break: break-word;
}
.swal2-checkbox,
.swal2-file,
.swal2-input,
.swal2-radio,
.swal2-select,
.swal2-textarea {
    margin: 1em 2em 3px;
}
.swal2-file,
.swal2-input,
.swal2-textarea {
    box-sizing: border-box;
    width: auto;
    transition: border-color 0.1s, box-shadow 0.1s;
    border: 1px solid #d9d9d9;
    border-radius: 0.1875em;
    background: 0 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;
    color: inherit;
    font-size: 1.125em;
}
.swal2-file.swal2-inputerror,
.swal2-input.swal2-inputerror,
.swal2-textarea.swal2-inputerror {
    border-color: #f27474 !important;
    box-shadow: 0 0 2px #f27474 !important;
}
.swal2-file:focus,
.swal2-input:focus,
.swal2-textarea:focus {
    border: 1px solid #b4dbed;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);
}
.swal2-file::-moz-placeholder,
.swal2-input::-moz-placeholder,
.swal2-textarea::-moz-placeholder {
    color: #ccc;
}
.swal2-file:-ms-input-placeholder,
.swal2-input:-ms-input-placeholder,
.swal2-textarea:-ms-input-placeholder {
    color: #ccc;
}
.swal2-file::placeholder,
.swal2-input::placeholder,
.swal2-textarea::placeholder {
    color: #ccc;
}
.swal2-range {
    margin: 1em 2em 3px;
    background: #fff;
}
.swal2-range input {
    width: 80%;
}
.swal2-range output {
    width: 20%;
    color: inherit;
    font-weight: 600;
    text-align: center;
}
.swal2-range input,
.swal2-range output {
    height: 2.625em;
    padding: 0;
    font-size: 1.125em;
    line-height: 2.625em;
}
.swal2-input {
    height: 2.625em;
    padding: 0 0.75em;
}
.swal2-file {
    width: 75%;
    margin-right: auto;
    margin-left: auto;
    background: 0 0;
    font-size: 1.125em;
}
.swal2-textarea {
    height: 6.75em;
    padding: 0.75em;
}
.swal2-select {
    min-width: 50%;
    max-width: 100%;
    padding: 0.375em 0.625em;
    background: 0 0;
    color: inherit;
    font-size: 1.125em;
}
.swal2-checkbox,
.swal2-radio {
    align-items: center;
    justify-content: center;
    background: #fff;
    color: inherit;
}
.swal2-checkbox label,
.swal2-radio label {
    margin: 0 0.6em;
    font-size: 1.125em;
}
.swal2-checkbox input,
.swal2-radio input {
    flex-shrink: 0;
    margin: 0 0.4em;
}
.swal2-input-label {
    display: flex;
    justify-content: center;
    margin: 1em auto 0;
}
.swal2-validation-message {
    align-items: center;
    justify-content: center;
    margin: 1em 0 0;
    padding: 0.625em;
    overflow: hidden;
    background: #f0f0f0;
    color: #666;
    font-size: 1em;
    font-weight: 300;
}
.swal2-validation-message::before {
    content: '!';
    display: inline-block;
    width: 1.5em;
    min-width: 1.5em;
    height: 1.5em;
    margin: 0 0.625em;
    border-radius: 50%;
    background-color: #f27474;
    color: #fff;
    font-weight: 600;
    line-height: 1.5em;
    text-align: center;
}
.swal2-icon {
    position: relative;
    box-sizing: content-box;
    justify-content: center;
    width: 5em;
    height: 5em;
    margin: 2.5em auto 0.6em;
    border: 0.25em solid transparent;
    border-radius: 50%;
    border-color: #000;
    font-family: inherit;
    line-height: 5em;
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.swal2-icon .swal2-icon-content {
    display: flex;
    align-items: center;
    font-size: 3.75em;
}
.swal2-icon.swal2-error {
    border-color: #f27474;
    color: #f27474;
}
.swal2-icon.swal2-error .swal2-x-mark {
    position: relative;
    flex-grow: 1;
}
.swal2-icon.swal2-error [class^='swal2-x-mark-line'] {
    display: block;
    position: absolute;
    top: 2.3125em;
    width: 2.9375em;
    height: 0.3125em;
    border-radius: 0.125em;
    background-color: #f27474;
}
.swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {
    left: 1.0625em;
    transform: rotate(45deg);
}
.swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {
    right: 1em;
    transform: rotate(-45deg);
}
.swal2-icon.swal2-error.swal2-icon-show {
    -webkit-animation: swal2-animate-error-icon 0.5s;
    animation: swal2-animate-error-icon 0.5s;
}
.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark {
    -webkit-animation: swal2-animate-error-x-mark 0.5s;
    animation: swal2-animate-error-x-mark 0.5s;
}
.swal2-icon.swal2-warning {
    border-color: #facea8;
    color: #f8bb86;
}
.swal2-icon.swal2-warning.swal2-icon-show {
    -webkit-animation: swal2-animate-error-icon 0.5s;
    animation: swal2-animate-error-icon 0.5s;
}
.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content {
    -webkit-animation: swal2-animate-i-mark 0.5s;
    animation: swal2-animate-i-mark 0.5s;
}
.swal2-icon.swal2-info {
    border-color: #9de0f6;
    color: #3fc3ee;
}
.swal2-icon.swal2-info.swal2-icon-show {
    -webkit-animation: swal2-animate-error-icon 0.5s;
    animation: swal2-animate-error-icon 0.5s;
}
.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content {
    -webkit-animation: swal2-animate-i-mark 0.8s;
    animation: swal2-animate-i-mark 0.8s;
}
.swal2-icon.swal2-question {
    border-color: #c9dae1;
    color: #87adbd;
}
.swal2-icon.swal2-question.swal2-icon-show {
    -webkit-animation: swal2-animate-error-icon 0.5s;
    animation: swal2-animate-error-icon 0.5s;
}
.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content {
    -webkit-animation: swal2-animate-question-mark 0.8s;
    animation: swal2-animate-question-mark 0.8s;
}
.swal2-icon.swal2-success {
    border-color: #a5dc86;
    color: #a5dc86;
}
.swal2-icon.swal2-success [class^='swal2-success-circular-line'] {
    position: absolute;
    width: 3.75em;
    height: 7.5em;
    transform: rotate(45deg);
    border-radius: 50%;
}
.swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {
    top: -0.4375em;
    left: -2.0635em;
    transform: rotate(-45deg);
    transform-origin: 3.75em 3.75em;
    border-radius: 7.5em 0 0 7.5em;
}
.swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {
    top: -0.6875em;
    left: 1.875em;
    transform: rotate(-45deg);
    transform-origin: 0 3.75em;
    border-radius: 0 7.5em 7.5em 0;
}
.swal2-icon.swal2-success .swal2-success-ring {
    position: absolute;
    z-index: 2;
    top: -0.25em;
    left: -0.25em;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    border: 0.25em solid rgba(165, 220, 134, 0.3);
    border-radius: 50%;
}
.swal2-icon.swal2-success .swal2-success-fix {
    position: absolute;
    z-index: 1;
    top: 0.5em;
    left: 1.625em;
    width: 0.4375em;
    height: 5.625em;
    transform: rotate(-45deg);
}
.swal2-icon.swal2-success [class^='swal2-success-line'] {
    display: block;
    position: absolute;
    z-index: 2;
    height: 0.3125em;
    border-radius: 0.125em;
    background-color: #a5dc86;
}
.swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {
    top: 2.875em;
    left: 0.8125em;
    width: 1.5625em;
    transform: rotate(45deg);
}
.swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {
    top: 2.375em;
    right: 0.5em;
    width: 2.9375em;
    transform: rotate(-45deg);
}
.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip {
    -webkit-animation: swal2-animate-success-line-tip 0.75s;
    animation: swal2-animate-success-line-tip 0.75s;
}
.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long {
    -webkit-animation: swal2-animate-success-line-long 0.75s;
    animation: swal2-animate-success-line-long 0.75s;
}
.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right {
    -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;
    animation: swal2-rotate-success-circular-line 4.25s ease-in;
}
.swal2-progress-steps {
    flex-wrap: wrap;
    align-items: center;
    max-width: 100%;
    margin: 1.25em auto;
    padding: 0;
    background: 0 0;
    font-weight: 600;
}
.swal2-progress-steps li {
    display: inline-block;
    position: relative;
}
.swal2-progress-steps .swal2-progress-step {
    z-index: 20;
    flex-shrink: 0;
    width: 2em;
    height: 2em;
    border-radius: 2em;
    background: #2778c4;
    color: #fff;
    line-height: 2em;
    text-align: center;
}
.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {
    background: #2778c4;
}
.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {
    background: #add8e6;
    color: #fff;
}
.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line {
    background: #add8e6;
}
.swal2-progress-steps .swal2-progress-step-line {
    z-index: 10;
    flex-shrink: 0;
    width: 2.5em;
    height: 0.4em;
    margin: 0 -1px;
    background: #2778c4;
}
[class^='swal2'] {
    -webkit-tap-highlight-color: transparent;
}
.swal2-show {
    -webkit-animation: swal2-show 0.3s;
    animation: swal2-show 0.3s;
}
.swal2-hide {
    -webkit-animation: swal2-hide 0.15s forwards;
    animation: swal2-hide 0.15s forwards;
}
.swal2-noanimation {
    transition: none;
}
.swal2-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
}
.swal2-rtl .swal2-close {
    margin-right: initial;
    margin-left: 0;
}
.swal2-rtl .swal2-timer-progress-bar {
    right: 0;
    left: auto;
}
.swal2-no-war {
    display: flex;
    position: fixed;
    z-index: 1061;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.375em;
    background: #20232a;
    color: #fff;
    text-align: center;
}
.swal2-no-war a {
    color: #61dafb;
    text-decoration: none;
}
.swal2-no-war a:hover {
    text-decoration: underline;
}
@-webkit-keyframes swal2-toast-show {
    0% {
        transform: translateY(-0.625em) rotateZ(2deg);
    }
    33% {
        transform: translateY(0) rotateZ(-2deg);
    }
    66% {
        transform: translateY(0.3125em) rotateZ(2deg);
    }
    100% {
        transform: translateY(0) rotateZ(0);
    }
}
@keyframes swal2-toast-show {
    0% {
        transform: translateY(-0.625em) rotateZ(2deg);
    }
    33% {
        transform: translateY(0) rotateZ(-2deg);
    }
    66% {
        transform: translateY(0.3125em) rotateZ(2deg);
    }
    100% {
        transform: translateY(0) rotateZ(0);
    }
}
@-webkit-keyframes swal2-toast-hide {
    100% {
        transform: rotateZ(1deg);
        opacity: 0;
    }
}
@keyframes swal2-toast-hide {
    100% {
        transform: rotateZ(1deg);
        opacity: 0;
    }
}
@-webkit-keyframes swal2-toast-animate-success-line-tip {
    0% {
        top: 0.5625em;
        left: 0.0625em;
        width: 0;
    }
    54% {
        top: 0.125em;
        left: 0.125em;
        width: 0;
    }
    70% {
        top: 0.625em;
        left: -0.25em;
        width: 1.625em;
    }
    84% {
        top: 1.0625em;
        left: 0.75em;
        width: 0.5em;
    }
    100% {
        top: 1.125em;
        left: 0.1875em;
        width: 0.75em;
    }
}
@keyframes swal2-toast-animate-success-line-tip {
    0% {
        top: 0.5625em;
        left: 0.0625em;
        width: 0;
    }
    54% {
        top: 0.125em;
        left: 0.125em;
        width: 0;
    }
    70% {
        top: 0.625em;
        left: -0.25em;
        width: 1.625em;
    }
    84% {
        top: 1.0625em;
        left: 0.75em;
        width: 0.5em;
    }
    100% {
        top: 1.125em;
        left: 0.1875em;
        width: 0.75em;
    }
}
@-webkit-keyframes swal2-toast-animate-success-line-long {
    0% {
        top: 1.625em;
        right: 1.375em;
        width: 0;
    }
    65% {
        top: 1.25em;
        right: 0.9375em;
        width: 0;
    }
    84% {
        top: 0.9375em;
        right: 0;
        width: 1.125em;
    }
    100% {
        top: 0.9375em;
        right: 0.1875em;
        width: 1.375em;
    }
}
@keyframes swal2-toast-animate-success-line-long {
    0% {
        top: 1.625em;
        right: 1.375em;
        width: 0;
    }
    65% {
        top: 1.25em;
        right: 0.9375em;
        width: 0;
    }
    84% {
        top: 0.9375em;
        right: 0;
        width: 1.125em;
    }
    100% {
        top: 0.9375em;
        right: 0.1875em;
        width: 1.375em;
    }
}
@-webkit-keyframes swal2-show {
    0% {
        transform: scale(0.7);
    }
    45% {
        transform: scale(1.05);
    }
    80% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes swal2-show {
    0% {
        transform: scale(0.7);
    }
    45% {
        transform: scale(1.05);
    }
    80% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(1);
    }
}
@-webkit-keyframes swal2-hide {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0.5);
        opacity: 0;
    }
}
@keyframes swal2-hide {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0.5);
        opacity: 0;
    }
}
@-webkit-keyframes swal2-animate-success-line-tip {
    0% {
        top: 1.1875em;
        left: 0.0625em;
        width: 0;
    }
    54% {
        top: 1.0625em;
        left: 0.125em;
        width: 0;
    }
    70% {
        top: 2.1875em;
        left: -0.375em;
        width: 3.125em;
    }
    84% {
        top: 3em;
        left: 1.3125em;
        width: 1.0625em;
    }
    100% {
        top: 2.8125em;
        left: 0.8125em;
        width: 1.5625em;
    }
}
@keyframes swal2-animate-success-line-tip {
    0% {
        top: 1.1875em;
        left: 0.0625em;
        width: 0;
    }
    54% {
        top: 1.0625em;
        left: 0.125em;
        width: 0;
    }
    70% {
        top: 2.1875em;
        left: -0.375em;
        width: 3.125em;
    }
    84% {
        top: 3em;
        left: 1.3125em;
        width: 1.0625em;
    }
    100% {
        top: 2.8125em;
        left: 0.8125em;
        width: 1.5625em;
    }
}
@-webkit-keyframes swal2-animate-success-line-long {
    0% {
        top: 3.375em;
        right: 2.875em;
        width: 0;
    }
    65% {
        top: 3.375em;
        right: 2.875em;
        width: 0;
    }
    84% {
        top: 2.1875em;
        right: 0;
        width: 3.4375em;
    }
    100% {
        top: 2.375em;
        right: 0.5em;
        width: 2.9375em;
    }
}
@keyframes swal2-animate-success-line-long {
    0% {
        top: 3.375em;
        right: 2.875em;
        width: 0;
    }
    65% {
        top: 3.375em;
        right: 2.875em;
        width: 0;
    }
    84% {
        top: 2.1875em;
        right: 0;
        width: 3.4375em;
    }
    100% {
        top: 2.375em;
        right: 0.5em;
        width: 2.9375em;
    }
}
@-webkit-keyframes swal2-rotate-success-circular-line {
    0% {
        transform: rotate(-45deg);
    }
    5% {
        transform: rotate(-45deg);
    }
    12% {
        transform: rotate(-405deg);
    }
    100% {
        transform: rotate(-405deg);
    }
}
@keyframes swal2-rotate-success-circular-line {
    0% {
        transform: rotate(-45deg);
    }
    5% {
        transform: rotate(-45deg);
    }
    12% {
        transform: rotate(-405deg);
    }
    100% {
        transform: rotate(-405deg);
    }
}
@-webkit-keyframes swal2-animate-error-x-mark {
    0% {
        margin-top: 1.625em;
        transform: scale(0.4);
        opacity: 0;
    }
    50% {
        margin-top: 1.625em;
        transform: scale(0.4);
        opacity: 0;
    }
    80% {
        margin-top: -0.375em;
        transform: scale(1.15);
    }
    100% {
        margin-top: 0;
        transform: scale(1);
        opacity: 1;
    }
}
@keyframes swal2-animate-error-x-mark {
    0% {
        margin-top: 1.625em;
        transform: scale(0.4);
        opacity: 0;
    }
    50% {
        margin-top: 1.625em;
        transform: scale(0.4);
        opacity: 0;
    }
    80% {
        margin-top: -0.375em;
        transform: scale(1.15);
    }
    100% {
        margin-top: 0;
        transform: scale(1);
        opacity: 1;
    }
}
@-webkit-keyframes swal2-animate-error-icon {
    0% {
        transform: rotateX(100deg);
        opacity: 0;
    }
    100% {
        transform: rotateX(0);
        opacity: 1;
    }
}
@keyframes swal2-animate-error-icon {
    0% {
        transform: rotateX(100deg);
        opacity: 0;
    }
    100% {
        transform: rotateX(0);
        opacity: 1;
    }
}
@-webkit-keyframes swal2-rotate-loading {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes swal2-rotate-loading {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes swal2-animate-question-mark {
    0% {
        transform: rotateY(-360deg);
    }
    100% {
        transform: rotateY(0);
    }
}
@keyframes swal2-animate-question-mark {
    0% {
        transform: rotateY(-360deg);
    }
    100% {
        transform: rotateY(0);
    }
}
@-webkit-keyframes swal2-animate-i-mark {
    0% {
        transform: rotateZ(45deg);
        opacity: 0;
    }
    25% {
        transform: rotateZ(-25deg);
        opacity: 0.4;
    }
    50% {
        transform: rotateZ(15deg);
        opacity: 0.8;
    }
    75% {
        transform: rotateZ(-5deg);
        opacity: 1;
    }
    100% {
        transform: rotateX(0);
        opacity: 1;
    }
}
@keyframes swal2-animate-i-mark {
    0% {
        transform: rotateZ(45deg);
        opacity: 0;
    }
    25% {
        transform: rotateZ(-25deg);
        opacity: 0.4;
    }
    50% {
        transform: rotateZ(15deg);
        opacity: 0.8;
    }
    75% {
        transform: rotateZ(-5deg);
        opacity: 1;
    }
    100% {
        transform: rotateX(0);
        opacity: 1;
    }
}
body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {
    overflow: hidden;
}
body.swal2-height-auto {
    height: auto !important;
}
body.swal2-no-backdrop .swal2-container {
    background-color: transparent !important;
    pointer-events: none;
}
body.swal2-no-backdrop .swal2-container .swal2-popup {
    pointer-events: all;
}
body.swal2-no-backdrop .swal2-container .swal2-modal {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
@media print {
    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {
        overflow-y: scroll !important;
    }
    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden='true'] {
        display: none;
    }
    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {
        position: static !important;
    }
}
body.swal2-toast-shown .swal2-container {
    box-sizing: border-box;
    width: 360px;
    max-width: 100%;
    background-color: transparent;
    pointer-events: none;
}
body.swal2-toast-shown .swal2-container.swal2-top {
    top: 0;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translateX(-50%);
}
body.swal2-toast-shown .swal2-container.swal2-top-end,
body.swal2-toast-shown .swal2-container.swal2-top-right {
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
}
body.swal2-toast-shown .swal2-container.swal2-top-left,
body.swal2-toast-shown .swal2-container.swal2-top-start {
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
}
body.swal2-toast-shown .swal2-container.swal2-center-left,
body.swal2-toast-shown .swal2-container.swal2-center-start {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 0;
    transform: translateY(-50%);
}
body.swal2-toast-shown .swal2-container.swal2-center {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
}
body.swal2-toast-shown .swal2-container.swal2-center-end,
body.swal2-toast-shown .swal2-container.swal2-center-right {
    top: 50%;
    right: 0;
    bottom: auto;
    left: auto;
    transform: translateY(-50%);
}
body.swal2-toast-shown .swal2-container.swal2-bottom-left,
body.swal2-toast-shown .swal2-container.swal2-bottom-start {
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
}
body.swal2-toast-shown .swal2-container.swal2-bottom {
    top: auto;
    right: auto;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
body.swal2-toast-shown .swal2-container.swal2-bottom-end,
body.swal2-toast-shown .swal2-container.swal2-bottom-right {
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
}

`;

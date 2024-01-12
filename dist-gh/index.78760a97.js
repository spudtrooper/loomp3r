var t={decode:function(t,e){var i,n,r,s;return i=this,n=void 0,r=void 0,s=function*(){let i=new AudioContext({sampleRate:e});return i.decodeAudioData(t).finally(()=>i.close())},new(r||(r=Promise))(function(t,e){function o(t){try{l(s.next(t))}catch(t){e(t)}}function a(t){try{l(s.throw(t))}catch(t){e(t)}}function l(e){var i;e.done?t(e.value):((i=e.value)instanceof r?i:new r(function(t){t(i)})).then(o,a)}l((s=s.apply(i,n||[])).next())})},createBuffer:function(t,e){return"number"==typeof t[0]&&(t=[t]),!function(t){let e=t[0];if(e.some(t=>t>1||t<-1)){let i=e.length,n=0;for(let t=0;t<i;t++){let i=Math.abs(e[t]);i>n&&(n=i)}for(let e of t)for(let t=0;t<i;t++)e[t]/=n}}(t),{duration:e,length:t[0].length,sampleRate:t[0].length/e,numberOfChannels:t.length,getChannelData:e=>null==t?void 0:t[e],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}},e=function(t,e,i,n){return new(i||(i=Promise))(function(r,s){function o(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?r(t.value):((e=t.value)instanceof i?e:new i(function(t){t(e)})).then(o,a)}l((n=n.apply(t,e||[])).next())})},i={fetchBlob:function(t,i,n){return e(this,void 0,void 0,function*(){let r=yield fetch(t,n);if(r.status>=400)throw Error(`Failed to fetch ${t}: ${r.status} (${r.statusText})`);return!function(t,i){e(this,void 0,void 0,function*(){if(!t.body||!t.headers)return;let n=t.body.getReader(),r=Number(t.headers.get("Content-Length"))||0,s=0,o=t=>e(this,void 0,void 0,function*(){i(Math.round((s+=(null==t?void 0:t.length)||0)/r*100))}),a=()=>e(this,void 0,void 0,function*(){let t;try{t=yield n.read()}catch(t){return}t.done||(o(t.value),yield a())});a()})}(r.clone(),i),r.blob()})}},n=class{constructor(){this.listeners={}}on(t,e,i){if(this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),null==i?void 0:i.once){let i=()=>{this.un(t,i),this.un(t,e)};return this.on(t,i),i}return()=>this.un(t,e)}un(t,e){var i;null===(i=this.listeners[t])||void 0===i||i.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach(t=>t(...e))}},r=class extends n{constructor(t){super(),this.isExternalMedia=!1,t.media?(this.media=t.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),t.mediaControls&&(this.media.controls=!0),t.autoplay&&(this.media.autoplay=!0),null!=t.playbackRate&&this.onceMediaEvent("canplay",()=>{null!=t.playbackRate&&(this.media.playbackRate=t.playbackRate)})}onMediaEvent(t,e,i){return this.media.addEventListener(t,e,i),()=>this.media.removeEventListener(t,e)}onceMediaEvent(t,e){return this.onMediaEvent(t,e,{once:!0})}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){let t=this.getSrc();t.startsWith("blob:")&&URL.revokeObjectURL(t)}canPlayType(t){return""!==this.media.canPlayType(t)}setSrc(t,e){if(this.getSrc()===t)return;this.revokeSrc();let i=e instanceof Blob&&this.canPlayType(e.type)?URL.createObjectURL(e):t;this.media.src=i}destroy(){this.media.pause(),this.isExternalMedia||(this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(t){this.media=t}play(){return this.media.play()}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(t){this.media.currentTime=t}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(t){this.media.volume=t}getMuted(){return this.media.muted}setMuted(t){this.media.muted=t}getPlaybackRate(){return this.media.playbackRate}setPlaybackRate(t,e){null!=e&&(this.media.preservesPitch=e),this.media.playbackRate=t}getMediaElement(){return this.media}setSinkId(t){return this.media.setSinkId(t)}};class s extends n{constructor(t,e){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.options=t;let i=this.parentFromOptionsContainer(t.container);this.parent=i;let[n,r]=this.initHtml();i.appendChild(n),this.container=n,this.scrollContainer=r.querySelector(".scroll"),this.wrapper=r.querySelector(".wrapper"),this.canvasWrapper=r.querySelector(".canvases"),this.progressWrapper=r.querySelector(".progress"),this.cursor=r.querySelector(".cursor"),e&&r.appendChild(e),this.initEvents()}parentFromOptionsContainer(t){let e;if("string"==typeof t?e=document.querySelector(t):t instanceof HTMLElement&&(e=t),!e)throw Error("Container not found");return e}initEvents(){let t=t=>{let e=this.wrapper.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientX-e.left;return[i/e.width,n/e.height]};this.wrapper.addEventListener("click",e=>{let[i,n]=t(e);this.emit("click",i,n)}),this.wrapper.addEventListener("dblclick",e=>{let[i,n]=t(e);this.emit("dblclick",i,n)}),this.options.dragToSeek&&this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{let{scrollLeft:t,scrollWidth:e,clientWidth:i}=this.scrollContainer;this.emit("scroll",t/e,(t+i)/e)});let e=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{e(()=>this.onContainerResize())}),this.resizeObserver.observe(this.scrollContainer)}onContainerResize(){let t=this.parent.clientWidth;(t!==this.lastContainerWidth||"auto"===this.options.height)&&(this.lastContainerWidth=t,this.reRender())}initDrag(){!function(t,e,i,n,r=3,s=0){if(!t)return()=>void 0;let o=()=>void 0,a=a=>{if(a.button!==s)return;a.preventDefault(),a.stopPropagation();let l=a.clientX,h=a.clientY,d=!1,u=n=>{n.preventDefault(),n.stopPropagation();let s=n.clientX,o=n.clientY,a=s-l,u=o-h;if(d||Math.abs(a)>r||Math.abs(u)>r){let{left:n,top:r}=t.getBoundingClientRect();d||(null==i||i(l-n,h-r),d=!0),e(a,u,s-n,o-r),l=s,h=o}},c=()=>{d&&(null==n||n()),o()},p=t=>{t.relatedTarget&&t.relatedTarget!==document.documentElement||c()},m=t=>{d&&(t.stopPropagation(),t.preventDefault())},g=t=>{d&&t.preventDefault()};document.addEventListener("pointermove",u),document.addEventListener("pointerup",c),document.addEventListener("pointerout",p),document.addEventListener("pointercancel",p),document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("click",m,{capture:!0}),o=()=>{document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",c),document.removeEventListener("pointerout",p),document.removeEventListener("pointercancel",p),document.removeEventListener("touchmove",g),setTimeout(()=>{document.removeEventListener("click",m,{capture:!0})},10)}};t.addEventListener("pointerdown",a),()=>{o(),t.removeEventListener("pointerdown",a)}}(this.wrapper,(t,e,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))},()=>this.isDragging=!0,()=>this.isDragging=!1)}getHeight(t){return null==t?128:isNaN(Number(t))?"auto"===t&&this.parent.clientHeight||128:Number(t)}initHtml(){let t=document.createElement("div"),e=t.attachShadow({mode:"open"});return e.innerHTML=`
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
    `,[t,e]}setOptions(t){if(this.options.container!==t.container){let e=this.parentFromOptionsContainer(t.container);e.appendChild(this.container),this.parent=e}t.dragToSeek&&!this.options.dragToSeek&&this.initDrag(),this.options=t,this.reRender()}getWrapper(){return this.wrapper}getScroll(){return this.scrollContainer.scrollLeft}destroy(){var t;this.container.remove(),null===(t=this.resizeObserver)||void 0===t||t.disconnect()}createDelay(t=10){let e={};return this.timeouts.push(e),i=>{e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout(i,t)}}convertColorValues(t){if(!Array.isArray(t))return t||"";if(t.length<2)return t[0]||"";let e=document.createElement("canvas"),i=e.getContext("2d"),n=e.height*(window.devicePixelRatio||1),r=i.createLinearGradient(0,0,0,n),s=1/(t.length-1);return t.forEach((t,e)=>{r.addColorStop(e*s,t)}),r}renderBarWaveform(t,e,i,n){let r=t[0],s=t[1]||t[0],o=r.length,{width:a,height:l}=i.canvas,h=l/2,d=window.devicePixelRatio||1,u=e.barWidth?e.barWidth*d:1,c=e.barGap?e.barGap*d:e.barWidth?u/2:0,p=e.barRadius||0,m=a/(u+c)/o,g=p&&"roundRect"in i?"roundRect":"rect";i.beginPath();let v=0,f=0,b=0;for(let t=0;t<=o;t++){let o=Math.round(t*m);if(o>v){let t=Math.round(f*h*n),r=t+Math.round(b*h*n)||1,s=h-t;"top"===e.barAlign?s=0:"bottom"===e.barAlign&&(s=l-r),i[g](v*(u+c),s,u,r,p),v=o,f=0,b=0}let a=Math.abs(r[t]||0),d=Math.abs(s[t]||0);a>f&&(f=a),d>b&&(b=d)}i.fill(),i.closePath()}renderLineWaveform(t,e,i,n){let r=e=>{let r=t[e]||t[0],s=r.length,{height:o}=i.canvas,a=o/2,l=i.canvas.width/s;i.moveTo(0,a);let h=0,d=0;for(let t=0;t<=s;t++){let s=Math.round(t*l);if(s>h){let t=Math.round(d*a*n)||1,r=a+t*(0===e?-1:1);i.lineTo(h,r),h=s,d=0}let o=Math.abs(r[t]||0);o>d&&(d=o)}i.lineTo(h,a)};i.beginPath(),r(0),r(1),i.fill(),i.closePath()}renderWaveform(t,e,i){if(i.fillStyle=this.convertColorValues(e.waveColor),e.renderFunction){e.renderFunction(t,i);return}let n=e.barHeight||1;if(e.normalize){let e=Array.from(t[0]).reduce((t,e)=>Math.max(t,Math.abs(e)),0);n=e?1/e:1}if(e.barWidth||e.barGap||e.barAlign){this.renderBarWaveform(t,e,i,n);return}this.renderLineWaveform(t,e,i,n)}renderSingleCanvas(t,e,i,n,r,s,o,a){let l=window.devicePixelRatio||1,h=document.createElement("canvas"),d=t[0].length;h.width=Math.round(i*(s-r)/d),h.height=n*l,h.style.width=`${Math.floor(h.width/l)}px`,h.style.height=`${n}px`,h.style.left=`${Math.floor(r*i/l/d)}px`,o.appendChild(h);let u=h.getContext("2d");if(this.renderWaveform(t.map(t=>t.slice(r,s)),e,u),h.width>0&&h.height>0){let t=h.cloneNode(),i=t.getContext("2d");i.drawImage(h,0,0),i.globalCompositeOperation="source-in",i.fillStyle=this.convertColorValues(e.progressColor),i.fillRect(0,0,h.width,h.height),a.appendChild(t)}}renderChannel(t,e,i,n){let r=document.createElement("div"),o=this.getHeight(e.height);r.style.height=`${o}px`,this.canvasWrapper.style.minHeight=`${o}px`,this.canvasWrapper.appendChild(r);let a=r.cloneNode();this.progressWrapper.appendChild(a);let{scrollLeft:l,scrollWidth:h,clientWidth:d}=this.scrollContainer,u=t[0].length,c=u/h,p=Math.min(s.MAX_CANVAS_WIDTH,d);if(e.barWidth||e.barGap){let t=e.barWidth||.5,i=e.barGap||t/2,n=t+i;p%n!=0&&(p=Math.floor(p/n)*n)}let m=Math.floor(Math.abs(l)*c),g=Math.floor(m+p*c),v=g-m,f=(n,s)=>{this.renderSingleCanvas(t,e,i,o,Math.max(0,n),Math.min(s,u),r,a)},b={head:!1,tail:g>=u},y=t=>{b[t]=!0,b.head&&b.tail&&n()},C=this.createDelay(),w=this.createDelay(),E=(t,e)=>{f(t,e),t>0?C(()=>{E(t-v,e-v)}):y("head")},x=(t,e)=>{f(t,e),e<u?w(()=>{x(t+v,e+v)}):y("tail")};E(m,g),g<u&&x(g,g+v)}render(t){this.timeouts.forEach(t=>t.timeout&&clearTimeout(t.timeout)),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",null!=this.options.width&&(this.scrollContainer.style.width="number"==typeof this.options.width?`${this.options.width}px`:this.options.width);let e=window.devicePixelRatio||1,i=this.scrollContainer.clientWidth,n=Math.ceil(t.duration*(this.options.minPxPerSec||0));this.isScrollable=n>i;let r=this.options.fillParent&&!this.isScrollable,s=(r?i:n)*e;if(this.wrapper.style.width=r?"100%":`${n}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.options.splitChannels){let e=0,i=()=>{++e===t.numberOfChannels&&this.emit("rendered")};for(let e=0;e<t.numberOfChannels;e++){let n=Object.assign(Object.assign({},this.options),this.options.splitChannels[e]);this.renderChannel([t.getChannelData(e)],n,s,i)}}else{let e=[t.getChannelData(0)];t.numberOfChannels>1&&e.push(t.getChannelData(1)),this.renderChannel(e,this.options,s,()=>this.emit("rendered"))}this.audioData=t,this.emit("render")}reRender(){if(!this.audioData)return;let{scrollWidth:t}=this.scrollContainer,e=this.progressWrapper.clientWidth;if(this.render(this.audioData),this.isScrollable&&t!==this.scrollContainer.scrollWidth){let t=this.progressWrapper.clientWidth;this.scrollContainer.scrollLeft+=t-e}}zoom(t){this.options.minPxPerSec=t,this.reRender()}scrollIntoView(t,e=!1){let{scrollLeft:i,scrollWidth:n,clientWidth:r}=this.scrollContainer,s=t*n,o=i+r,a=r/2;if(this.isDragging)s+30>o?this.scrollContainer.scrollLeft+=30:s-30<i&&(this.scrollContainer.scrollLeft-=30);else{(s<i||s>o)&&(this.scrollContainer.scrollLeft=s-(this.options.autoCenter?a:0));let t=s-i-a;e&&this.options.autoCenter&&t>0&&(this.scrollContainer.scrollLeft+=Math.min(t,10))}{let t=this.scrollContainer.scrollLeft;this.emit("scroll",t/n,(t+r)/n)}}renderProgress(t,e){if(isNaN(t))return;let i=100*t;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.marginLeft=100===Math.round(i)?`-${this.options.cursorWidth}px`:"",this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(t,e)}exportImage(t,e,i){var n,r,s,o;return n=this,r=void 0,s=void 0,o=function*(){let n=this.canvasWrapper.querySelectorAll("canvas");if(!n.length)throw Error("No waveform data");return"dataURL"===i?Promise.resolve(Array.from(n).map(i=>i.toDataURL(t,e))):Promise.all(Array.from(n).map(i=>new Promise((n,r)=>{i.toBlob(t=>{t?n(t):r(Error("Could not export image"))},t,e)})))},new(s||(s=Promise))(function(t,e){function i(t){try{l(o.next(t))}catch(t){e(t)}}function a(t){try{l(o.throw(t))}catch(t){e(t)}}function l(e){var n;e.done?t(e.value):((n=e.value)instanceof s?n:new s(function(t){t(n)})).then(i,a)}l((o=o.apply(n,r||[])).next())})}}s.MAX_CANVAS_WIDTH=4e3;var o=class extends n{constructor(){super(...arguments),this.unsubscribe=()=>void 0}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}},a=function(t,e,i,n){return new(i||(i=Promise))(function(r,s){function o(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?r(t.value):((e=t.value)instanceof i?e:new i(function(t){t(e)})).then(o,a)}l((n=n.apply(t,e||[])).next())})},l=class extends n{constructor(t=new AudioContext){super(),this.bufferNode=null,this.autoplay=!1,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=t,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return a(this,void 0,void 0,function*(){})}get src(){return this.currentSrc}set src(t){if(this.currentSrc=t,!t){this.buffer=null,this.emit("emptied");return}fetch(t).then(t=>t.arrayBuffer()).then(e=>this.currentSrc!==t?null:this.audioContext.decodeAudioData(e)).then(e=>{this.currentSrc===t&&(this.buffer=e,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())})}_play(){var t;this.paused&&(this.paused=!1,null===(t=this.bufferNode)||void 0===t||t.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.bufferNode.buffer=this.buffer,this.bufferNode.connect(this.gainNode),this.playedDuration>=this.duration&&(this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,this.playedDuration),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))})}_pause(){var t;this.paused||(this.paused=!0,null===(t=this.bufferNode)||void 0===t||t.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime)}play(){return a(this,void 0,void 0,function*(){this._play(),this.emit("play")})}pause(){this._pause(),this.emit("pause")}stopAt(t){var e,i;let n=t-this.currentTime;null===(e=this.bufferNode)||void 0===e||e.stop(this.audioContext.currentTime+n),null===(i=this.bufferNode)||void 0===i||i.addEventListener("ended",()=>{this.bufferNode=null,this.pause()},{once:!0})}setSinkId(t){return a(this,void 0,void 0,function*(){return this.audioContext.setSinkId(t)})}get playbackRate(){var t,e;return null!==(e=null===(t=this.bufferNode)||void 0===t?void 0:t.playbackRate.value)&&void 0!==e?e:1}set playbackRate(t){this.bufferNode&&(this.bufferNode.playbackRate.value=t)}get currentTime(){return this.paused?this.playedDuration:this.playedDuration+this.audioContext.currentTime-this.playStartTime}set currentTime(t){this.emit("seeking"),this.paused?this.playedDuration=t:(this._pause(),this.playedDuration=t,this._play()),this.emit("timeupdate")}get duration(){var t;return(null===(t=this.buffer)||void 0===t?void 0:t.duration)||0}get volume(){return this.gainNode.gain.value}set volume(t){this.gainNode.gain.value=t,this.emit("volumechange")}get muted(){return this._muted}set muted(t){this._muted!==t&&(this._muted=t,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(t){return/^(audio|video)\//.test(t)}getGainNode(){return this.gainNode}getChannelData(){let t=[];if(!this.buffer)return t;let e=this.buffer.numberOfChannels;for(let i=0;i<e;i++)t.push(this.buffer.getChannelData(i));return t}},h=function(t,e,i,n){return new(i||(i=Promise))(function(r,s){function o(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?r(t.value):((e=t.value)instanceof i?e:new i(function(t){t(e)})).then(o,a)}l((n=n.apply(t,e||[])).next())})};const d={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class u extends r{static create(t){return new u(t)}constructor(t){let e=t.media||("WebAudio"===t.backend?new l:void 0);super({media:e,mediaControls:t.mediaControls,autoplay:t.autoplay,playbackRate:t.audioRate}),this.plugins=[],this.decodedData=null,this.subscriptions=[],this.mediaSubscriptions=[],this.options=Object.assign({},d,t),this.timer=new o;let i=e?void 0:this.getMediaElement();this.renderer=new s(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins(),Promise.resolve().then(()=>{this.emit("init");let t=this.options.url||this.getSrc()||"";(t||this.options.peaks&&this.options.duration)&&this.load(t,this.options.peaks,this.options.duration)})}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{let t=this.getCurrentTime();this.renderer.renderProgress(t/this.getDuration(),!0),this.emit("timeupdate",t),this.emit("audioprocess",t)}))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",()=>{let t=this.getCurrentTime();this.renderer.renderProgress(t/this.getDuration(),this.isPlaying()),this.emit("timeupdate",t)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop()}),this.onMediaEvent("emptied",()=>{this.timer.stop()}),this.onMediaEvent("ended",()=>{this.emit("finish")}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",(t,e)=>{this.options.interact&&(this.seekTo(t),this.emit("interaction",t*this.getDuration()),this.emit("click",t,e))}),this.renderer.on("dblclick",(t,e)=>{this.emit("dblclick",t,e)}),this.renderer.on("scroll",(t,e)=>{let i=this.getDuration();this.emit("scroll",t*i,e*i)}),this.renderer.on("render",()=>{this.emit("redraw")}),this.renderer.on("rendered",()=>{this.emit("redrawcomplete")}));{let t;this.subscriptions.push(this.renderer.on("drag",e=>{this.options.interact&&(this.renderer.renderProgress(e),clearTimeout(t),t=setTimeout(()=>{this.seekTo(e)},this.isPlaying()?0:200),this.emit("interaction",e*this.getDuration()),this.emit("drag",e))}))}}initPlugins(){var t;(null===(t=this.options.plugins)||void 0===t?void 0:t.length)&&this.options.plugins.forEach(t=>{this.registerPlugin(t)})}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach(t=>t()),this.mediaSubscriptions=[]}setOptions(t){this.options=Object.assign({},this.options,t),this.renderer.setOptions(this.options),t.audioRate&&this.setPlaybackRate(t.audioRate),null!=t.mediaControls&&(this.getMediaElement().controls=t.mediaControls)}registerPlugin(t){return t._init(this),this.plugins.push(t),this.subscriptions.push(t.once("destroy",()=>{this.plugins=this.plugins.filter(e=>e!==t)})),t}getWrapper(){return this.renderer.getWrapper()}getScroll(){return this.renderer.getScroll()}getActivePlugins(){return this.plugins}loadAudio(e,n,r,s){return h(this,void 0,void 0,function*(){this.emit("load",e),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,n||r||(n=yield i.fetchBlob(e,t=>this.emit("loading",t),this.options.fetchParams)),this.setSrc(e,n);let o=s||this.getDuration()||(yield new Promise(t=>{this.onceMediaEvent("loadedmetadata",()=>t(this.getDuration()))}));if(r)this.decodedData=t.createBuffer(r,o||0);else if(n){let e=yield n.arrayBuffer();this.decodedData=yield t.decode(e,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())})}load(t,e,i){return h(this,void 0,void 0,function*(){yield this.loadAudio(t,void 0,e,i)})}loadBlob(t,e,i){return h(this,void 0,void 0,function*(){yield this.loadAudio("blob",t,e,i)})}zoom(t){if(!this.decodedData)throw Error("No audio loaded");this.renderer.zoom(t),this.emit("zoom",t)}getDecodedData(){return this.decodedData}exportPeaks({channels:t=2,maxLength:e=8e3,precision:i=1e4}={}){if(!this.decodedData)throw Error("The audio has not been decoded yet");let n=Math.min(t,this.decodedData.numberOfChannels),r=[];for(let t=0;t<n;t++){let n=this.decodedData.getChannelData(t),s=[],o=Math.round(n.length/e);for(let t=0;t<e;t++){let e=n.slice(t*o,(t+1)*o),r=0;for(let t=0;t<e.length;t++){let i=e[t];Math.abs(i)>Math.abs(r)&&(r=i)}s.push(Math.round(r*i)/i)}r.push(s)}return r}getDuration(){let t=super.getDuration()||0;return(0===t||t===1/0)&&this.decodedData&&(t=this.decodedData.duration),t}toggleInteraction(t){this.options.interact=t}seekTo(t){let e=this.getDuration()*t;this.setTime(e)}playPause(){return h(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(t){this.setTime(this.getCurrentTime()+t)}empty(){this.load("",[[0]],.001)}setMediaElement(t){this.unsubscribePlayerEvents(),super.setMediaElement(t),this.initPlayerEvents()}exportImage(t="image/png",e=1,i="dataURL"){return h(this,void 0,void 0,function*(){return this.renderer.exportImage(t,e,i)})}destroy(){this.emit("destroy"),this.plugins.forEach(t=>t.destroy()),this.subscriptions.forEach(t=>t()),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}class c{constructor(){this.listeners={}}on(t,e,i){if(this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),null==i?void 0:i.once){let i=()=>{this.un(t,i),this.un(t,e)};return this.on(t,i),i}return()=>this.un(t,e)}un(t,e){var i;null===(i=this.listeners[t])||void 0===i||i.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach(t=>t(...e))}}class p extends c{constructor(t){super(),this.subscriptions=[],this.options=t}onInit(){}_init(t){this.wavesurfer=t,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach(t=>t())}}function m(t,e,i,n,r=3,s=0){if(!t)return()=>{};let o=()=>{},a=a=>{if(a.button!==s)return;a.preventDefault(),a.stopPropagation();let l=a.clientX,h=a.clientY,d=!1,u=n=>{n.preventDefault(),n.stopPropagation();let s=n.clientX,o=n.clientY,a=s-l,u=o-h;if(d||Math.abs(a)>r||Math.abs(u)>r){let{left:n,top:r}=t.getBoundingClientRect();d||(null==i||i(l-n,h-r),d=!0),e(a,u,s-n,o-r),l=s,h=o}},c=()=>{d&&(null==n||n()),o()},p=t=>{t.relatedTarget&&t.relatedTarget!==document.documentElement||c()},m=t=>{d&&(t.stopPropagation(),t.preventDefault())},g=t=>{d&&t.preventDefault()};document.addEventListener("pointermove",u),document.addEventListener("pointerup",c),document.addEventListener("pointerout",p),document.addEventListener("pointercancel",p),document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("click",m,{capture:!0}),o=()=>{document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",c),document.removeEventListener("pointerout",p),document.removeEventListener("pointercancel",p),document.removeEventListener("touchmove",g),setTimeout(()=>{document.removeEventListener("click",m,{capture:!0})},10)}};return t.addEventListener("pointerdown",a),()=>{o(),t.removeEventListener("pointerdown",a)}}function g(t,e,i){let n=function t(e,i){let n=i.xmlns?document.createElementNS(i.xmlns,e):document.createElement(e);for(let[e,r]of Object.entries(i))if("children"===e)for(let[e,r]of Object.entries(i))"string"==typeof r?n.appendChild(document.createTextNode(r)):n.appendChild(t(e,r));else"style"===e?Object.assign(n.style,r):"textContent"===e?n.textContent=r:n.setAttribute(e,r.toString());return n}(t,e||{});return null==i||i.appendChild(n),n}class v extends c{constructor(t,e,i=0){var n,r,s,o,a,l,h,d;super(),this.totalDuration=e,this.numberOfChannels=i,this.minLength=0,this.maxLength=1/0,this.contentEditable=!1,this.id=t.id||`region-${Math.random().toString(32).slice(2)}`,this.start=this.clampPosition(t.start),this.end=this.clampPosition(null!==(n=t.end)&&void 0!==n?n:t.start),this.drag=null===(r=t.drag)||void 0===r||r,this.resize=null===(s=t.resize)||void 0===s||s,this.color=null!==(o=t.color)&&void 0!==o?o:"rgba(0, 0, 0, 0.1)",this.minLength=null!==(a=t.minLength)&&void 0!==a?a:this.minLength,this.maxLength=null!==(l=t.maxLength)&&void 0!==l?l:this.maxLength,this.channelIdx=null!==(h=t.channelIdx)&&void 0!==h?h:-1,this.contentEditable=null!==(d=t.contentEditable)&&void 0!==d?d:this.contentEditable,this.element=this.initElement(),this.setContent(t.content),this.setPart(),this.renderPosition(),this.initMouseEvents()}clampPosition(t){return Math.max(0,Math.min(this.totalDuration,t))}setPart(){let t=this.start===this.end;this.element.setAttribute("part",`${t?"marker":"region"} ${this.id}`)}addResizeHandles(t){let e={position:"absolute",zIndex:"2",width:"6px",height:"100%",top:"0",cursor:"ew-resize",wordBreak:"keep-all"},i=g("div",{part:"region-handle region-handle-left",style:Object.assign(Object.assign({},e),{left:"0",borderLeft:"2px solid rgba(0, 0, 0, 0.5)",borderRadius:"2px 0 0 2px"})},t),n=g("div",{part:"region-handle region-handle-right",style:Object.assign(Object.assign({},e),{right:"0",borderRight:"2px solid rgba(0, 0, 0, 0.5)",borderRadius:"0 2px 2px 0"})},t);m(i,t=>this.onResize(t,"start"),()=>null,()=>this.onEndResizing(),1),m(n,t=>this.onResize(t,"end"),()=>null,()=>this.onEndResizing(),1)}removeResizeHandles(t){let e=t.querySelector('[part*="region-handle-left"]'),i=t.querySelector('[part*="region-handle-right"]');e&&t.removeChild(e),i&&t.removeChild(i)}initElement(){let t=this.start===this.end,e=0,i=100;this.channelIdx>=0&&this.channelIdx<this.numberOfChannels&&(e=(i=100/this.numberOfChannels)*this.channelIdx);let n=g("div",{style:{position:"absolute",top:`${e}%`,height:`${i}%`,backgroundColor:t?"none":this.color,borderLeft:t?"2px solid "+this.color:"none",borderRadius:"2px",boxSizing:"border-box",transition:"background-color 0.2s ease",cursor:this.drag?"grab":"default",pointerEvents:"all"}});return!t&&this.resize&&this.addResizeHandles(n),n}renderPosition(){let t=this.start/this.totalDuration,e=(this.totalDuration-this.end)/this.totalDuration;this.element.style.left=100*t+"%",this.element.style.right=100*e+"%"}toggleCursor(t){this.drag&&(this.element.style.cursor=t?"grabbing":"grab")}initMouseEvents(){let{element:t}=this;t&&(t.addEventListener("click",t=>this.emit("click",t)),t.addEventListener("mouseenter",t=>this.emit("over",t)),t.addEventListener("mouseleave",t=>this.emit("leave",t)),t.addEventListener("dblclick",t=>this.emit("dblclick",t)),t.addEventListener("pointerdown",()=>this.toggleCursor(!0)),t.addEventListener("pointerup",()=>this.toggleCursor(!1)),m(t,t=>this.onMove(t),()=>this.toggleCursor(!0),()=>{this.toggleCursor(!1),this.drag&&this.emit("update-end")}),this.contentEditable&&this.content&&(this.content.addEventListener("click",t=>this.onContentClick(t)),this.content.addEventListener("blur",()=>this.onContentBlur())))}_onUpdate(t,e){if(!this.element.parentElement)return;let{width:i}=this.element.parentElement.getBoundingClientRect(),n=t/i*this.totalDuration,r=e&&"start"!==e?this.start:this.start+n,s=e&&"end"!==e?this.end:this.end+n,o=s-r;r>=0&&s<=this.totalDuration&&r<=s&&o>=this.minLength&&o<=this.maxLength&&(this.start=r,this.end=s,this.renderPosition(),this.emit("update"))}onMove(t){this.drag&&this._onUpdate(t)}onResize(t,e){this.resize&&this._onUpdate(t,e)}onEndResizing(){this.resize&&this.emit("update-end")}onContentClick(t){t.stopPropagation(),t.target.focus(),this.emit("click",t)}onContentBlur(){this.emit("update-end")}_setTotalDuration(t){this.totalDuration=t,this.renderPosition()}play(){this.emit("play")}setContent(t){var e;if(null===(e=this.content)||void 0===e||e.remove(),t){if("string"==typeof t){let e=this.start===this.end;this.content=g("div",{style:{padding:`0.2em ${e?.2:.4}em`,display:"inline-block"},textContent:t})}else this.content=t;this.contentEditable&&(this.content.contentEditable="true"),this.content.setAttribute("part","region-content"),this.element.appendChild(this.content)}else this.content=void 0}setOptions(t){var e,i;if(t.color&&(this.color=t.color,this.element.style.backgroundColor=this.color),void 0!==t.drag&&(this.drag=t.drag,this.element.style.cursor=this.drag?"grab":"default"),void 0!==t.start||void 0!==t.end){let n=this.start===this.end;this.start=this.clampPosition(null!==(e=t.start)&&void 0!==e?e:this.start),this.end=this.clampPosition(null!==(i=t.end)&&void 0!==i?i:n?this.start:this.end),this.renderPosition(),this.setPart()}if(t.content&&this.setContent(t.content),t.id&&(this.id=t.id,this.setPart()),void 0!==t.resize&&t.resize!==this.resize){let e=this.start===this.end;this.resize=t.resize,this.resize&&!e?this.addResizeHandles(this.element):this.removeResizeHandles(this.element)}}remove(){this.emit("remove"),this.element.remove(),this.element=null}}class f extends p{constructor(t){super(t),this.regions=[],this.regionsContainer=this.initRegionsContainer()}static create(t){return new f(t)}onInit(){if(!this.wavesurfer)throw Error("WaveSurfer is not initialized");this.wavesurfer.getWrapper().appendChild(this.regionsContainer);let t=[];this.subscriptions.push(this.wavesurfer.on("timeupdate",e=>{let i=this.regions.filter(t=>t.start<=e&&(t.end===t.start?t.start+.05:t.end)>=e);i.forEach(e=>{t.includes(e)||this.emit("region-in",e)}),t.forEach(t=>{i.includes(t)||this.emit("region-out",t)}),t=i}))}initRegionsContainer(){return g("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"3",pointerEvents:"none"}})}getRegions(){return this.regions}avoidOverlapping(t){if(!t.content)return;let e=t.content,i=e.getBoundingClientRect(),n=this.regions.map(e=>{if(e===t||!e.content)return 0;let n=e.content.getBoundingClientRect();return i.left<n.left+n.width&&n.left<i.left+i.width?n.height:0}).reduce((t,e)=>t+e,0);e.style.marginTop=`${n}px`}adjustScroll(t){var e,i;let n=null===(i=null===(e=this.wavesurfer)||void 0===e?void 0:e.getWrapper())||void 0===i?void 0:i.parentElement;if(!n)return;let{clientWidth:r,scrollWidth:s}=n;if(s<=r)return;let o=n.getBoundingClientRect(),a=t.element.getBoundingClientRect(),l=a.left-o.left,h=a.right-o.left;l<0?n.scrollLeft+=l:h>r&&(n.scrollLeft+=h-r)}saveRegion(t){this.regionsContainer.appendChild(t.element),this.avoidOverlapping(t),this.regions.push(t);let e=[t.on("update",()=>{this.adjustScroll(t)}),t.on("update-end",()=>{this.avoidOverlapping(t),this.emit("region-updated",t)}),t.on("play",()=>{var e,i;null===(e=this.wavesurfer)||void 0===e||e.play(),null===(i=this.wavesurfer)||void 0===i||i.setTime(t.start)}),t.on("click",e=>{this.emit("region-clicked",t,e)}),t.on("dblclick",e=>{this.emit("region-double-clicked",t,e)}),t.once("remove",()=>{e.forEach(t=>t()),this.regions=this.regions.filter(e=>e!==t),this.emit("region-removed",t)})];this.subscriptions.push(...e),this.emit("region-created",t)}addRegion(t){var e,i;if(!this.wavesurfer)throw Error("WaveSurfer is not initialized");let n=this.wavesurfer.getDuration(),r=new v(t,n,null===(i=null===(e=this.wavesurfer)||void 0===e?void 0:e.getDecodedData())||void 0===i?void 0:i.numberOfChannels);return n?this.saveRegion(r):this.subscriptions.push(this.wavesurfer.once("ready",t=>{r._setTotalDuration(t),this.saveRegion(r)})),r}enableDragSelection(t,e=3){var i;let n=null===(i=this.wavesurfer)||void 0===i?void 0:i.getWrapper();if(!(n&&n instanceof HTMLElement))return()=>{};let r=null,s=0;return m(n,(t,e,i)=>{r&&r._onUpdate(t,i>s?"end":"start")},e=>{var i,n;if(s=e,!this.wavesurfer)return;let o=this.wavesurfer.getDuration(),a=null===(n=null===(i=this.wavesurfer)||void 0===i?void 0:i.getDecodedData())||void 0===n?void 0:n.numberOfChannels,{width:l}=this.wavesurfer.getWrapper().getBoundingClientRect();r=new v(Object.assign(Object.assign({},t),{start:e/l*o,end:(e+5)/l*o}),o,a),this.regionsContainer.appendChild(r.element)},()=>{r&&(this.saveRegion(r),r=null)},e)}clearRegions(){this.regions.forEach(t=>t.remove())}destroy(){this.clearRegions(),super.destroy(),this.regionsContainer.remove()}}let b=!1,y=0;const C=()=>{b=!0,setTimeout(()=>{b=!1,y=0},100+y)};let w=!1;const E=async(t,e)=>{try{return await x(t,e),!0}catch(t){console.log(`Error loading file: ${t}`)}return!1},x=async(t,e)=>{let i=u.create({container:"#waveform",loop:!0,mediaControls:!0});await i.load(e),i.on("interaction",t=>{console.log("interaction"),w=!1,C()});let n=i.registerPlugin(f.create({container:"#waveform",loop:!0}));n.enableDragSelection({color:"rgba(255, 0, 0, 0.1)",loop:!0}),n.on("region-clicked",(t,e)=>{e.stopPropagation(),t.start,i.getDuration(),t.loop=!0,C(),t.play(),w=!1}),n.on("region-in",async t=>{$(".list-group-item").removeClass("active"),$(`#li-${t.id}`).addClass("active")}),n.on("region-out",async t=>{let e;if(b){b=!1;return}if(w||(w=!0,Math.abs(t.end-i.getCurrentTime())>.1))return;$(`#li-${t.id}`).removeClass("active");let n=t.start/i.getDuration();i.pause(),i.seekTo(n),t.loop=!0;let r=0;try{r=parseInt($("#pause-secs").val())}catch(t){}let s=1e3*r;if(y=s,r){let i=s;console.log("pausing for "+r+" seconds"),$("#timer").text(i+"ms"),$("#timer").css("width","0%"),$("#timer-wrapper").show(),w=!0,e=setInterval(()=>{if(!w){console.log("interrupted"),e&&clearInterval(e),e=null,$("#timer-wrapper").hide();return}let n=(s-(i-=100))/s*100;$("#timer").css("width",n+"%"),$("#timer").text(i+"ms"),i<=0&&($("#timer-wrapper").hide(),t.play(),w=!1,e&&clearInterval(e))},100)}else t.play(),w=!1});let r=`regions-${t}`,s=()=>localStorage.setItem(r,JSON.stringify(n.regions)),o=1,a=(t,e)=>{$(e).html(`<b>${t.content}</b> - ${t.start.toFixed(2)}s to ${t.end.toFixed(2)}s`)};n.on("region-update-end",t=>{t.loop=!0,s(),a(t,$(`#li-${t.id}`))}),n.on("region-created",t=>{t.content=String(o++),s();let e=$("<a>").attr("href","#").addClass("list-group-item").addClass("list-group-item-action").attr("id",`li-${t.id}`);a(t,e),$("#regions-list").append(e),e.click(e=>{e.preventDefault(),e.stopPropagation(),t.play(),w=!1})}),n.on("region-created",s),n.on("region-removed",s),localStorage.getItem(r)?($("#restore-btn").show(),$("#restore-btn").click(()=>JSON.parse(localStorage.getItem(r)).forEach(t=>n.addRegion(t))),$("#clear-btn").show(),$("#clear-btn").click(()=>{localStorage.removeItem(r),$("#restore-btn").hide(),$("#clear-btn").hide()})):($("#restore-btn").hide(),$("#clear-btn").hide()),Object.keys(localStorage).some(t=>t.startsWith("regions-"))?($("#clear-all-btn").show(),$("#clear-all-btn").click(()=>{Object.keys(localStorage).filter(t=>t.startsWith("regions-")).forEach(t=>localStorage.removeItem(t)),$("#restore-btn").hide(),$("#clear-btn").hide(),$("#clear-all-btn").hide()})):$("#clear-all-btn").hide()};(async()=>{let t=new URLSearchParams(document.location.search).get("load");if(t){if(await E(t,t)){$(".before-play").hide(),$(".playing").show();return}$("#waveform").empty(),alert(`problem auto loading ${t}`);return}$(".before-play").show(),$("#upload").change(()=>{let t=document.getElementById("upload").files[0],e=new FileReader;e.readAsDataURL(t),e.onload=async i=>{let n=e.result;if(await E(t.name,n)){$(".before-play").hide(),$(".playing").show();return}$("#waveform").empty(),alert(`problem loading ${t}`)}})})();
//# sourceMappingURL=index.78760a97.js.map

var Nt=Object.defineProperty,zt=Object.defineProperties;var Rt=Object.getOwnPropertyDescriptors;var Ua=Object.getOwnPropertySymbols;var Wn=Object.prototype.hasOwnProperty,Yn=Object.prototype.propertyIsEnumerable;var $n=(a,n,e)=>n in a?Nt(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e,v=(a,n)=>{for(var e in n||(n={}))Wn.call(n,e)&&$n(a,e,n[e]);if(Ua)for(var e of Ua(n))Yn.call(n,e)&&$n(a,e,n[e]);return a},tn=(a,n)=>zt(a,Rt(n));var Jn=(a,n)=>{var e={};for(var t in a)Wn.call(a,t)&&n.indexOf(t)<0&&(e[t]=a[t]);if(a!=null&&Ua)for(var t of Ua(a))n.indexOf(t)<0&&Yn.call(a,t)&&(e[t]=a[t]);return e};import{a as Ja,g as Ue,j as D,u as Ft,H as Ot,L as _t}from"./index-9u7R1aQs.js";import{L as Xn}from"./Layout-qjSqBT-b.js";function Ht(a,n){const e={};return(a[a.length-1]===""?[...a,""]:a).join((e.padRight?" ":"")+","+(e.padLeft===!1?"":" ")).trim()}const Kt=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ut=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Vt={};function Qn(a,n){return(Vt.jsx?Ut:Kt).test(a)}const Gt=/[ \t\n\f\r]/g;function qt(a){return typeof a=="object"?a.type==="text"?Zn(a.value):!1:Zn(a)}function Zn(a){return a.replace(Gt,"")===""}class _a{constructor(n,e,t){this.normal=e,this.property=n,t&&(this.space=t)}}_a.prototype.normal={};_a.prototype.property={};_a.prototype.space=void 0;function Ve(a,n){const e={},t={};for(const i of a)Object.assign(e,i.property),Object.assign(t,i.normal);return new _a(e,t,n)}function cn(a){return a.toLowerCase()}class aa{constructor(n,e){this.attribute=e,this.property=n}}aa.prototype.attribute="";aa.prototype.booleanish=!1;aa.prototype.boolean=!1;aa.prototype.commaOrSpaceSeparated=!1;aa.prototype.commaSeparated=!1;aa.prototype.defined=!1;aa.prototype.mustUseProperty=!1;aa.prototype.number=!1;aa.prototype.overloadedBoolean=!1;aa.prototype.property="";aa.prototype.spaceSeparated=!1;aa.prototype.space=void 0;let $t=0;const T=wa(),$=wa(),bn=wa(),y=wa(),O=wa(),Ea=wa(),ea=wa();function wa(){return 2**++$t}const fn=Object.freeze(Object.defineProperty({__proto__:null,boolean:T,booleanish:$,commaOrSpaceSeparated:ea,commaSeparated:Ea,number:y,overloadedBoolean:bn,spaceSeparated:O},Symbol.toStringTag,{value:"Module"})),rn=Object.keys(fn);class En extends aa{constructor(n,e,t,i){let r=-1;if(super(n,e),ae(this,"space",i),typeof t=="number")for(;++r<rn.length;){const u=rn[r];ae(this,rn[r],(t&fn[u])===fn[u])}}}En.prototype.defined=!0;function ae(a,n,e){e&&(a[n]=e)}function Ta(a){const n={},e={};for(const[t,i]of Object.entries(a.properties)){const r=new En(t,a.transform(a.attributes||{},t),i,a.space);a.mustUseProperty&&a.mustUseProperty.includes(t)&&(r.mustUseProperty=!0),n[t]=r,e[cn(t)]=t,e[cn(r.attribute)]=t}return new _a(n,e,a.space)}const Ge=Ta({properties:{ariaActiveDescendant:null,ariaAtomic:$,ariaAutoComplete:null,ariaBusy:$,ariaChecked:$,ariaColCount:y,ariaColIndex:y,ariaColSpan:y,ariaControls:O,ariaCurrent:null,ariaDescribedBy:O,ariaDetails:null,ariaDisabled:$,ariaDropEffect:O,ariaErrorMessage:null,ariaExpanded:$,ariaFlowTo:O,ariaGrabbed:$,ariaHasPopup:null,ariaHidden:$,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:O,ariaLevel:y,ariaLive:null,ariaModal:$,ariaMultiLine:$,ariaMultiSelectable:$,ariaOrientation:null,ariaOwns:O,ariaPlaceholder:null,ariaPosInSet:y,ariaPressed:$,ariaReadOnly:$,ariaRelevant:null,ariaRequired:$,ariaRoleDescription:O,ariaRowCount:y,ariaRowIndex:y,ariaRowSpan:y,ariaSelected:$,ariaSetSize:y,ariaSort:null,ariaValueMax:y,ariaValueMin:y,ariaValueNow:y,ariaValueText:null,role:null},transform(a,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function qe(a,n){return n in a?a[n]:n}function $e(a,n){return qe(a,n.toLowerCase())}const Wt=Ta({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ea,acceptCharset:O,accessKey:O,action:null,allow:null,allowFullScreen:T,allowPaymentRequest:T,allowUserMedia:T,alt:null,as:null,async:T,autoCapitalize:null,autoComplete:O,autoFocus:T,autoPlay:T,blocking:O,capture:null,charSet:null,checked:T,cite:null,className:O,cols:y,colSpan:null,content:null,contentEditable:$,controls:T,controlsList:O,coords:y|Ea,crossOrigin:null,data:null,dateTime:null,decoding:null,default:T,defer:T,dir:null,dirName:null,disabled:T,download:bn,draggable:$,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:T,formTarget:null,headers:O,height:y,hidden:bn,high:y,href:null,hrefLang:null,htmlFor:O,httpEquiv:O,id:null,imageSizes:null,imageSrcSet:null,inert:T,inputMode:null,integrity:null,is:null,isMap:T,itemId:null,itemProp:O,itemRef:O,itemScope:T,itemType:O,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:T,low:y,manifest:null,max:null,maxLength:y,media:null,method:null,min:null,minLength:y,multiple:T,muted:T,name:null,nonce:null,noModule:T,noValidate:T,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:T,optimum:y,pattern:null,ping:O,placeholder:null,playsInline:T,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:T,referrerPolicy:null,rel:O,required:T,reversed:T,rows:y,rowSpan:y,sandbox:O,scope:null,scoped:T,seamless:T,selected:T,shadowRootClonable:T,shadowRootDelegatesFocus:T,shadowRootMode:null,shape:null,size:y,sizes:null,slot:null,span:y,spellCheck:$,src:null,srcDoc:null,srcLang:null,srcSet:null,start:y,step:null,style:null,tabIndex:y,target:null,title:null,translate:null,type:null,typeMustMatch:T,useMap:null,value:$,width:y,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:O,axis:null,background:null,bgColor:null,border:y,borderColor:null,bottomMargin:y,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:T,declare:T,event:null,face:null,frame:null,frameBorder:null,hSpace:y,leftMargin:y,link:null,longDesc:null,lowSrc:null,marginHeight:y,marginWidth:y,noResize:T,noHref:T,noShade:T,noWrap:T,object:null,profile:null,prompt:null,rev:null,rightMargin:y,rules:null,scheme:null,scrolling:$,standby:null,summary:null,text:null,topMargin:y,valueType:null,version:null,vAlign:null,vLink:null,vSpace:y,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:T,disableRemotePlayback:T,prefix:null,property:null,results:y,security:null,unselectable:null},space:"html",transform:$e}),Yt=Ta({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ea,accentHeight:y,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:y,amplitude:y,arabicForm:null,ascent:y,attributeName:null,attributeType:null,azimuth:y,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:y,by:null,calcMode:null,capHeight:y,className:O,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:y,diffuseConstant:y,direction:null,display:null,dur:null,divisor:y,dominantBaseline:null,download:T,dx:null,dy:null,edgeMode:null,editable:null,elevation:y,enableBackground:null,end:null,event:null,exponent:y,externalResourcesRequired:null,fill:null,fillOpacity:y,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ea,g2:Ea,glyphName:Ea,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:y,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:y,horizOriginX:y,horizOriginY:y,id:null,ideographic:y,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:y,k:y,k1:y,k2:y,k3:y,k4:y,kernelMatrix:ea,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:y,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:y,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:y,overlineThickness:y,paintOrder:null,panose1:null,path:null,pathLength:y,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:O,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:y,pointsAtY:y,pointsAtZ:y,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ea,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ea,rev:ea,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ea,requiredFeatures:ea,requiredFonts:ea,requiredFormats:ea,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:y,specularExponent:y,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:y,strikethroughThickness:y,string:null,stroke:null,strokeDashArray:ea,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:y,strokeOpacity:y,strokeWidth:null,style:null,surfaceScale:y,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ea,tabIndex:y,tableValues:null,target:null,targetX:y,targetY:y,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ea,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:y,underlineThickness:y,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:y,values:null,vAlphabetic:y,vMathematical:y,vectorEffect:null,vHanging:y,vIdeographic:y,version:null,vertAdvY:y,vertOriginX:y,vertOriginY:y,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:y,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:qe}),We=Ta({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(a,n){return"xlink:"+n.slice(5).toLowerCase()}}),Ye=Ta({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:$e}),Je=Ta({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(a,n){return"xml:"+n.slice(3).toLowerCase()}}),Jt={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Xt=/[A-Z]/g,ne=/-[a-z]/g,Qt=/^data[-\w.:]+$/i;function Zt(a,n){const e=cn(n);let t=n,i=aa;if(e in a.normal)return a.property[a.normal[e]];if(e.length>4&&e.slice(0,4)==="data"&&Qt.test(n)){if(n.charAt(4)==="-"){const r=n.slice(5).replace(ne,ni);t="data"+r.charAt(0).toUpperCase()+r.slice(1)}else{const r=n.slice(4);if(!ne.test(r)){let u=r.replace(Xt,ai);u.charAt(0)!=="-"&&(u="-"+u),n="data"+u}}i=En}return new i(t,n)}function ai(a){return"-"+a.toLowerCase()}function ni(a){return a.charAt(1).toUpperCase()}const ei=Ve([Ge,Wt,We,Ye,Je],"html"),Cn=Ve([Ge,Yt,We,Ye,Je],"svg");function ti(a){return a.join(" ").trim()}var Tn={},ee=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,ii=/\n/g,ri=/^\s*/,ui=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,li=/^:\s*/,si=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,oi=/^[;\s]*/,mi=/^\s+|\s+$/g,gi=`
`,te="/",ie="*",Sa="",di="comment",pi="declaration",ki=function(a,n){if(typeof a!="string")throw new TypeError("First argument must be a string");if(!a)return[];n=n||{};var e=1,t=1;function i(b){var x=b.match(ii);x&&(e+=x.length);var E=b.lastIndexOf(gi);t=~E?b.length-E:t+b.length}function r(){var b={line:e,column:t};return function(x){return x.position=new u(b),m(),x}}function u(b){this.start=b,this.end={line:e,column:t},this.source=n.source}u.prototype.content=a;function l(b){var x=new Error(n.source+":"+e+":"+t+": "+b);if(x.reason=b,x.filename=n.source,x.line=e,x.column=t,x.source=a,!n.silent)throw x}function o(b){var x=b.exec(a);if(x){var E=x[0];return i(E),a=a.slice(E.length),x}}function m(){o(ri)}function s(b){var x;for(b=b||[];x=d();)x!==!1&&b.push(x);return b}function d(){var b=r();if(!(te!=a.charAt(0)||ie!=a.charAt(1))){for(var x=2;Sa!=a.charAt(x)&&(ie!=a.charAt(x)||te!=a.charAt(x+1));)++x;if(x+=2,Sa===a.charAt(x-1))return l("End of comment missing");var E=a.slice(2,x-2);return t+=2,i(E),a=a.slice(x),t+=2,b({type:di,comment:E})}}function h(){var b=r(),x=o(ui);if(x){if(d(),!o(li))return l("property missing ':'");var E=o(si),S=b({type:pi,property:re(x[0].replace(ee,Sa)),value:E?re(E[0].replace(ee,Sa)):Sa});return o(oi),S}}function g(){var b=[];s(b);for(var x;x=h();)x!==!1&&(b.push(x),s(b));return b}return m(),g()};function re(a){return a?a.replace(mi,Sa):Sa}var hi=Ja&&Ja.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Tn,"__esModule",{value:!0});Tn.default=bi;var ci=hi(ki);function bi(a,n){var e=null;if(!a||typeof a!="string")return e;var t=(0,ci.default)(a),i=typeof n=="function";return t.forEach(function(r){if(r.type==="declaration"){var u=r.property,l=r.value;i?n(u,l,r):l&&(e=e||{},e[u]=l)}}),e}var Za={};Object.defineProperty(Za,"__esModule",{value:!0});Za.camelCase=void 0;var fi=/^--[a-zA-Z0-9_-]+$/,yi=/-([a-z])/g,xi=/^[^-]+$/,Si=/^-(webkit|moz|ms|o|khtml)-/,wi=/^-(ms)-/,Pi=function(a){return!a||xi.test(a)||fi.test(a)},Ai=function(a,n){return n.toUpperCase()},ue=function(a,n){return"".concat(n,"-")},ji=function(a,n){return n===void 0&&(n={}),Pi(a)?a:(a=a.toLowerCase(),n.reactCompat?a=a.replace(wi,ue):a=a.replace(Si,ue),a.replace(yi,Ai))};Za.camelCase=ji;var Ii=Ja&&Ja.__importDefault||function(a){return a&&a.__esModule?a:{default:a}},Ei=Ii(Tn),Ci=Za;function yn(a,n){var e={};return!a||typeof a!="string"||(0,Ei.default)(a,function(t,i){t&&i&&(e[(0,Ci.camelCase)(t,n)]=i)}),e}yn.default=yn;var Ti=yn;const Bi=Ue(Ti),Xe=Qe("end"),Bn=Qe("start");function Qe(a){return n;function n(e){const t=e&&e.position&&e.position[a]||{};if(typeof t.line=="number"&&t.line>0&&typeof t.column=="number"&&t.column>0)return{line:t.line,column:t.column,offset:typeof t.offset=="number"&&t.offset>-1?t.offset:void 0}}}function Mi(a){const n=Bn(a),e=Xe(a);if(n&&e)return{start:n,end:e}}function za(a){return!a||typeof a!="object"?"":"position"in a||"type"in a?le(a.position):"start"in a||"end"in a?le(a):"line"in a||"column"in a?xn(a):""}function xn(a){return se(a&&a.line)+":"+se(a&&a.column)}function le(a){return xn(a&&a.start)+"-"+xn(a&&a.end)}function se(a){return a&&typeof a=="number"?a:1}class X extends Error{constructor(n,e,t){super(),typeof e=="string"&&(t=e,e=void 0);let i="",r={},u=!1;if(e&&("line"in e&&"column"in e?r={place:e}:"start"in e&&"end"in e?r={place:e}:"type"in e?r={ancestors:[e],place:e.position}:r=v({},e)),typeof n=="string"?i=n:!r.cause&&n&&(u=!0,i=n.message,r.cause=n),!r.ruleId&&!r.source&&typeof t=="string"){const o=t.indexOf(":");o===-1?r.ruleId=t:(r.source=t.slice(0,o),r.ruleId=t.slice(o+1))}if(!r.place&&r.ancestors&&r.ancestors){const o=r.ancestors[r.ancestors.length-1];o&&(r.place=o.position)}const l=r.place&&"start"in r.place?r.place.start:r.place;this.ancestors=r.ancestors||void 0,this.cause=r.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=za(r.place)||"1:1",this.place=r.place||void 0,this.reason=this.message,this.ruleId=r.ruleId||void 0,this.source=r.source||void 0,this.stack=u&&r.cause&&typeof r.cause.stack=="string"?r.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}X.prototype.file="";X.prototype.name="";X.prototype.reason="";X.prototype.message="";X.prototype.stack="";X.prototype.column=void 0;X.prototype.line=void 0;X.prototype.ancestors=void 0;X.prototype.cause=void 0;X.prototype.fatal=void 0;X.prototype.place=void 0;X.prototype.ruleId=void 0;X.prototype.source=void 0;const Mn={}.hasOwnProperty,vi=new Map,Li=/[A-Z]/g,Di=new Set(["table","tbody","thead","tfoot","tr"]),Ni=new Set(["td","th"]),Ze="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function zi(a,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const e=n.filePath||void 0;let t;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");t=Vi(e,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");t=Ui(e,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:t,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:e,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Cn:ei,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},r=at(i,a,void 0);return r&&typeof r!="string"?r:i.create(a,i.Fragment,{children:r||void 0},void 0)}function at(a,n,e){if(n.type==="element")return Ri(a,n,e);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return Fi(a,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return _i(a,n,e);if(n.type==="mdxjsEsm")return Oi(a,n);if(n.type==="root")return Hi(a,n,e);if(n.type==="text")return Ki(a,n)}function Ri(a,n,e){const t=a.schema;let i=t;n.tagName.toLowerCase()==="svg"&&t.space==="html"&&(i=Cn,a.schema=i),a.ancestors.push(n);const r=et(a,n.tagName,!1),u=Gi(a,n);let l=Ln(a,n);return Di.has(n.tagName)&&(l=l.filter(function(o){return typeof o=="string"?!qt(o):!0})),nt(a,u,r,n),vn(u,l),a.ancestors.pop(),a.schema=t,a.create(n,r,u,e)}function Fi(a,n){if(n.data&&n.data.estree&&a.evaluater){const t=n.data.estree.body[0];return t.type,a.evaluater.evaluateExpression(t.expression)}Oa(a,n.position)}function Oi(a,n){if(n.data&&n.data.estree&&a.evaluater)return a.evaluater.evaluateProgram(n.data.estree);Oa(a,n.position)}function _i(a,n,e){const t=a.schema;let i=t;n.name==="svg"&&t.space==="html"&&(i=Cn,a.schema=i),a.ancestors.push(n);const r=n.name===null?a.Fragment:et(a,n.name,!0),u=qi(a,n),l=Ln(a,n);return nt(a,u,r,n),vn(u,l),a.ancestors.pop(),a.schema=t,a.create(n,r,u,e)}function Hi(a,n,e){const t={};return vn(t,Ln(a,n)),a.create(n,a.Fragment,t,e)}function Ki(a,n){return n.value}function nt(a,n,e,t){typeof e!="string"&&e!==a.Fragment&&a.passNode&&(n.node=t)}function vn(a,n){if(n.length>0){const e=n.length>1?n:n[0];e&&(a.children=e)}}function Ui(a,n,e){return t;function t(i,r,u,l){const m=Array.isArray(u.children)?e:n;return l?m(r,u,l):m(r,u)}}function Vi(a,n){return e;function e(t,i,r,u){const l=Array.isArray(r.children),o=Bn(t);return n(i,r,u,l,{columnNumber:o?o.column-1:void 0,fileName:a,lineNumber:o?o.line:void 0},void 0)}}function Gi(a,n){const e={};let t,i;for(i in n.properties)if(i!=="children"&&Mn.call(n.properties,i)){const r=$i(a,i,n.properties[i]);if(r){const[u,l]=r;a.tableCellAlignToStyle&&u==="align"&&typeof l=="string"&&Ni.has(n.tagName)?t=l:e[u]=l}}if(t){const r=e.style||(e.style={});r[a.stylePropertyNameCase==="css"?"text-align":"textAlign"]=t}return e}function qi(a,n){const e={};for(const t of n.attributes)if(t.type==="mdxJsxExpressionAttribute")if(t.data&&t.data.estree&&a.evaluater){const r=t.data.estree.body[0];r.type;const u=r.expression;u.type;const l=u.properties[0];l.type,Object.assign(e,a.evaluater.evaluateExpression(l.argument))}else Oa(a,n.position);else{const i=t.name;let r;if(t.value&&typeof t.value=="object")if(t.value.data&&t.value.data.estree&&a.evaluater){const l=t.value.data.estree.body[0];l.type,r=a.evaluater.evaluateExpression(l.expression)}else Oa(a,n.position);else r=t.value===null?!0:t.value;e[i]=r}return e}function Ln(a,n){const e=[];let t=-1;const i=a.passKeys?new Map:vi;for(;++t<n.children.length;){const r=n.children[t];let u;if(a.passKeys){const o=r.type==="element"?r.tagName:r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement"?r.name:void 0;if(o){const m=i.get(o)||0;u=o+"-"+m,i.set(o,m+1)}}const l=at(a,r,u);l!==void 0&&e.push(l)}return e}function $i(a,n,e){const t=Zt(a.schema,n);if(!(e==null||typeof e=="number"&&Number.isNaN(e))){if(Array.isArray(e)&&(e=t.commaSeparated?Ht(e):ti(e)),t.property==="style"){let i=typeof e=="object"?e:Wi(a,String(e));return a.stylePropertyNameCase==="css"&&(i=Yi(i)),["style",i]}return[a.elementAttributeNameCase==="react"&&t.space?Jt[t.property]||t.property:t.attribute,e]}}function Wi(a,n){try{return Bi(n,{reactCompat:!0})}catch(e){if(a.ignoreInvalidStyle)return{};const t=e,i=new X("Cannot parse `style` attribute",{ancestors:a.ancestors,cause:t,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=a.filePath||void 0,i.url=Ze+"#cannot-parse-style-attribute",i}}function et(a,n,e){let t;if(!e)t={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let r=-1,u;for(;++r<i.length;){const l=Qn(i[r])?{type:"Identifier",name:i[r]}:{type:"Literal",value:i[r]};u=u?{type:"MemberExpression",object:u,property:l,computed:!!(r&&l.type==="Literal"),optional:!1}:l}t=u}else t=Qn(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(t.type==="Literal"){const i=t.value;return Mn.call(a.components,i)?a.components[i]:i}if(a.evaluater)return a.evaluater.evaluateExpression(t);Oa(a)}function Oa(a,n){const e=new X("Cannot handle MDX estrees without `createEvaluater`",{ancestors:a.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw e.file=a.filePath||void 0,e.url=Ze+"#cannot-handle-mdx-estrees-without-createevaluater",e}function Yi(a){const n={};let e;for(e in a)Mn.call(a,e)&&(n[Ji(e)]=a[e]);return n}function Ji(a){let n=a.replace(Li,Xi);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function Xi(a){return"-"+a.toLowerCase()}const un={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Qi={};function Zi(a,n){const e=Qi,t=typeof e.includeImageAlt=="boolean"?e.includeImageAlt:!0,i=typeof e.includeHtml=="boolean"?e.includeHtml:!0;return tt(a,t,i)}function tt(a,n,e){if(ar(a)){if("value"in a)return a.type==="html"&&!e?"":a.value;if(n&&"alt"in a&&a.alt)return a.alt;if("children"in a)return oe(a.children,n,e)}return Array.isArray(a)?oe(a,n,e):""}function oe(a,n,e){const t=[];let i=-1;for(;++i<a.length;)t[i]=tt(a[i],n,e);return t.join("")}function ar(a){return!!(a&&typeof a=="object")}const me=document.createElement("i");function Dn(a){const n="&"+a+";";me.innerHTML=n;const e=me.textContent;return e.charCodeAt(e.length-1)===59&&a!=="semi"||e===n?!1:e}function ga(a,n,e,t){const i=a.length;let r=0,u;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,e=e>0?e:0,t.length<1e4)u=Array.from(t),u.unshift(n,e),a.splice(...u);else for(e&&a.splice(n,e);r<t.length;)u=t.slice(r,r+1e4),u.unshift(n,0),a.splice(...u),r+=1e4,n+=1e4}function ia(a,n){return a.length>0?(ga(a,a.length,0,n),a):n}const ge={}.hasOwnProperty;function nr(a){const n={};let e=-1;for(;++e<a.length;)er(n,a[e]);return n}function er(a,n){let e;for(e in n){const i=(ge.call(a,e)?a[e]:void 0)||(a[e]={}),r=n[e];let u;if(r)for(u in r){ge.call(i,u)||(i[u]=[]);const l=r[u];tr(i[u],Array.isArray(l)?l:l?[l]:[])}}}function tr(a,n){let e=-1;const t=[];for(;++e<n.length;)(n[e].add==="after"?a:t).push(n[e]);ga(a,0,0,t)}function it(a,n){const e=Number.parseInt(a,n);return e<9||e===11||e>13&&e<32||e>126&&e<160||e>55295&&e<57344||e>64975&&e<65008||(e&65535)===65535||(e&65535)===65534||e>1114111?"�":String.fromCodePoint(e)}function Ca(a){return a.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ma=fa(/[A-Za-z]/),ta=fa(/[\dA-Za-z]/),ir=fa(/[#-'*+\--9=?A-Z^-~]/);function Sn(a){return a!==null&&(a<32||a===127)}const wn=fa(/\d/),rr=fa(/[\dA-Fa-f]/),ur=fa(/[!-/:-@[-`{-~]/);function I(a){return a!==null&&a<-2}function Z(a){return a!==null&&(a<0||a===32)}function N(a){return a===-2||a===-1||a===32}const lr=fa(new RegExp("\\p{P}|\\p{S}","u")),sr=fa(/\s/);function fa(a){return n;function n(e){return e!==null&&e>-1&&a.test(String.fromCharCode(e))}}function Ba(a){const n=[];let e=-1,t=0,i=0;for(;++e<a.length;){const r=a.charCodeAt(e);let u="";if(r===37&&ta(a.charCodeAt(e+1))&&ta(a.charCodeAt(e+2)))i=2;else if(r<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(r))||(u=String.fromCharCode(r));else if(r>55295&&r<57344){const l=a.charCodeAt(e+1);r<56320&&l>56319&&l<57344?(u=String.fromCharCode(r,l),i=1):u="�"}else u=String.fromCharCode(r);u&&(n.push(a.slice(t,e),encodeURIComponent(u)),t=e+i+1,u=""),i&&(e+=i,i=0)}return n.join("")+a.slice(t)}function _(a,n,e,t){const i=t?t-1:Number.POSITIVE_INFINITY;let r=0;return u;function u(o){return N(o)?(a.enter(e),l(o)):n(o)}function l(o){return N(o)&&r++<i?(a.consume(o),l):(a.exit(e),n(o))}}const or={tokenize:mr};function mr(a){const n=a.attempt(this.parser.constructs.contentInitial,t,i);let e;return n;function t(l){if(l===null){a.consume(l);return}return a.enter("lineEnding"),a.consume(l),a.exit("lineEnding"),_(a,n,"linePrefix")}function i(l){return a.enter("paragraph"),r(l)}function r(l){const o=a.enter("chunkText",{contentType:"text",previous:e});return e&&(e.next=o),e=o,u(l)}function u(l){if(l===null){a.exit("chunkText"),a.exit("paragraph"),a.consume(l);return}return I(l)?(a.consume(l),a.exit("chunkText"),r):(a.consume(l),u)}}const gr={tokenize:dr},de={tokenize:pr};function dr(a){const n=this,e=[];let t=0,i,r,u;return l;function l(P){if(t<e.length){const K=e[t];return n.containerState=K[1],a.attempt(K[0].continuation,o,m)(P)}return m(P)}function o(P){if(t++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&B();const K=n.events.length;let V=K,f;for(;V--;)if(n.events[V][0]==="exit"&&n.events[V][1].type==="chunkFlow"){f=n.events[V][1].end;break}S(t);let z=K;for(;z<n.events.length;)n.events[z][1].end=v({},f),z++;return ga(n.events,V+1,0,n.events.slice(K)),n.events.length=z,m(P)}return l(P)}function m(P){if(t===e.length){if(!i)return h(P);if(i.currentConstruct&&i.currentConstruct.concrete)return b(P);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},a.check(de,s,d)(P)}function s(P){return i&&B(),S(t),h(P)}function d(P){return n.parser.lazy[n.now().line]=t!==e.length,u=n.now().offset,b(P)}function h(P){return n.containerState={},a.attempt(de,g,b)(P)}function g(P){return t++,e.push([n.currentConstruct,n.containerState]),h(P)}function b(P){if(P===null){i&&B(),S(0),a.consume(P);return}return i=i||n.parser.flow(n.now()),a.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:r}),x(P)}function x(P){if(P===null){E(a.exit("chunkFlow"),!0),S(0),a.consume(P);return}return I(P)?(a.consume(P),E(a.exit("chunkFlow")),t=0,n.interrupt=void 0,l):(a.consume(P),x)}function E(P,K){const V=n.sliceStream(P);if(K&&V.push(null),P.previous=r,r&&(r.next=P),r=P,i.defineSkip(P.start),i.write(V),n.parser.lazy[P.start.line]){let f=i.events.length;for(;f--;)if(i.events[f][1].start.offset<u&&(!i.events[f][1].end||i.events[f][1].end.offset>u))return;const z=n.events.length;let G=z,R,H;for(;G--;)if(n.events[G][0]==="exit"&&n.events[G][1].type==="chunkFlow"){if(R){H=n.events[G][1].end;break}R=!0}for(S(t),f=z;f<n.events.length;)n.events[f][1].end=v({},H),f++;ga(n.events,G+1,0,n.events.slice(z)),n.events.length=f}}function S(P){let K=e.length;for(;K-- >P;){const V=e[K];n.containerState=V[1],V[0].exit.call(n,a)}e.length=P}function B(){i.write([null]),r=void 0,i=void 0,n.containerState._closeFlow=void 0}}function pr(a,n,e){return _(a,a.attempt(this.parser.constructs.document,n,e),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function pe(a){if(a===null||Z(a)||sr(a))return 1;if(lr(a))return 2}function Nn(a,n,e){const t=[];let i=-1;for(;++i<a.length;){const r=a[i].resolveAll;r&&!t.includes(r)&&(n=r(n,e),t.push(r))}return n}const Pn={name:"attention",resolveAll:kr,tokenize:hr};function kr(a,n){let e=-1,t,i,r,u,l,o,m,s;for(;++e<a.length;)if(a[e][0]==="enter"&&a[e][1].type==="attentionSequence"&&a[e][1]._close){for(t=e;t--;)if(a[t][0]==="exit"&&a[t][1].type==="attentionSequence"&&a[t][1]._open&&n.sliceSerialize(a[t][1]).charCodeAt(0)===n.sliceSerialize(a[e][1]).charCodeAt(0)){if((a[t][1]._close||a[e][1]._open)&&(a[e][1].end.offset-a[e][1].start.offset)%3&&!((a[t][1].end.offset-a[t][1].start.offset+a[e][1].end.offset-a[e][1].start.offset)%3))continue;o=a[t][1].end.offset-a[t][1].start.offset>1&&a[e][1].end.offset-a[e][1].start.offset>1?2:1;const d=v({},a[t][1].end),h=v({},a[e][1].start);ke(d,-o),ke(h,o),u={type:o>1?"strongSequence":"emphasisSequence",start:d,end:v({},a[t][1].end)},l={type:o>1?"strongSequence":"emphasisSequence",start:v({},a[e][1].start),end:h},r={type:o>1?"strongText":"emphasisText",start:v({},a[t][1].end),end:v({},a[e][1].start)},i={type:o>1?"strong":"emphasis",start:v({},u.start),end:v({},l.end)},a[t][1].end=v({},u.start),a[e][1].start=v({},l.end),m=[],a[t][1].end.offset-a[t][1].start.offset&&(m=ia(m,[["enter",a[t][1],n],["exit",a[t][1],n]])),m=ia(m,[["enter",i,n],["enter",u,n],["exit",u,n],["enter",r,n]]),m=ia(m,Nn(n.parser.constructs.insideSpan.null,a.slice(t+1,e),n)),m=ia(m,[["exit",r,n],["enter",l,n],["exit",l,n],["exit",i,n]]),a[e][1].end.offset-a[e][1].start.offset?(s=2,m=ia(m,[["enter",a[e][1],n],["exit",a[e][1],n]])):s=0,ga(a,t-1,e-t+3,m),e=t+m.length-s-2;break}}for(e=-1;++e<a.length;)a[e][1].type==="attentionSequence"&&(a[e][1].type="data");return a}function hr(a,n){const e=this.parser.constructs.attentionMarkers.null,t=this.previous,i=pe(t);let r;return u;function u(o){return r=o,a.enter("attentionSequence"),l(o)}function l(o){if(o===r)return a.consume(o),l;const m=a.exit("attentionSequence"),s=pe(o),d=!s||s===2&&i||e.includes(o),h=!i||i===2&&s||e.includes(t);return m._open=!!(r===42?d:d&&(i||!h)),m._close=!!(r===42?h:h&&(s||!d)),n(o)}}function ke(a,n){a.column+=n,a.offset+=n,a._bufferIndex+=n}const cr={name:"autolink",tokenize:br};function br(a,n,e){let t=0;return i;function i(g){return a.enter("autolink"),a.enter("autolinkMarker"),a.consume(g),a.exit("autolinkMarker"),a.enter("autolinkProtocol"),r}function r(g){return ma(g)?(a.consume(g),u):g===64?e(g):m(g)}function u(g){return g===43||g===45||g===46||ta(g)?(t=1,l(g)):m(g)}function l(g){return g===58?(a.consume(g),t=0,o):(g===43||g===45||g===46||ta(g))&&t++<32?(a.consume(g),l):(t=0,m(g))}function o(g){return g===62?(a.exit("autolinkProtocol"),a.enter("autolinkMarker"),a.consume(g),a.exit("autolinkMarker"),a.exit("autolink"),n):g===null||g===32||g===60||Sn(g)?e(g):(a.consume(g),o)}function m(g){return g===64?(a.consume(g),s):ir(g)?(a.consume(g),m):e(g)}function s(g){return ta(g)?d(g):e(g)}function d(g){return g===46?(a.consume(g),t=0,s):g===62?(a.exit("autolinkProtocol").type="autolinkEmail",a.enter("autolinkMarker"),a.consume(g),a.exit("autolinkMarker"),a.exit("autolink"),n):h(g)}function h(g){if((g===45||ta(g))&&t++<63){const b=g===45?h:d;return a.consume(g),b}return e(g)}}const an={partial:!0,tokenize:fr};function fr(a,n,e){return t;function t(r){return N(r)?_(a,i,"linePrefix")(r):i(r)}function i(r){return r===null||I(r)?n(r):e(r)}}const rt={continuation:{tokenize:xr},exit:Sr,name:"blockQuote",tokenize:yr};function yr(a,n,e){const t=this;return i;function i(u){if(u===62){const l=t.containerState;return l.open||(a.enter("blockQuote",{_container:!0}),l.open=!0),a.enter("blockQuotePrefix"),a.enter("blockQuoteMarker"),a.consume(u),a.exit("blockQuoteMarker"),r}return e(u)}function r(u){return N(u)?(a.enter("blockQuotePrefixWhitespace"),a.consume(u),a.exit("blockQuotePrefixWhitespace"),a.exit("blockQuotePrefix"),n):(a.exit("blockQuotePrefix"),n(u))}}function xr(a,n,e){const t=this;return i;function i(u){return N(u)?_(a,r,"linePrefix",t.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u):r(u)}function r(u){return a.attempt(rt,n,e)(u)}}function Sr(a){a.exit("blockQuote")}const ut={name:"characterEscape",tokenize:wr};function wr(a,n,e){return t;function t(r){return a.enter("characterEscape"),a.enter("escapeMarker"),a.consume(r),a.exit("escapeMarker"),i}function i(r){return ur(r)?(a.enter("characterEscapeValue"),a.consume(r),a.exit("characterEscapeValue"),a.exit("characterEscape"),n):e(r)}}const lt={name:"characterReference",tokenize:Pr};function Pr(a,n,e){const t=this;let i=0,r,u;return l;function l(d){return a.enter("characterReference"),a.enter("characterReferenceMarker"),a.consume(d),a.exit("characterReferenceMarker"),o}function o(d){return d===35?(a.enter("characterReferenceMarkerNumeric"),a.consume(d),a.exit("characterReferenceMarkerNumeric"),m):(a.enter("characterReferenceValue"),r=31,u=ta,s(d))}function m(d){return d===88||d===120?(a.enter("characterReferenceMarkerHexadecimal"),a.consume(d),a.exit("characterReferenceMarkerHexadecimal"),a.enter("characterReferenceValue"),r=6,u=rr,s):(a.enter("characterReferenceValue"),r=7,u=wn,s(d))}function s(d){if(d===59&&i){const h=a.exit("characterReferenceValue");return u===ta&&!Dn(t.sliceSerialize(h))?e(d):(a.enter("characterReferenceMarker"),a.consume(d),a.exit("characterReferenceMarker"),a.exit("characterReference"),n)}return u(d)&&i++<r?(a.consume(d),s):e(d)}}const he={partial:!0,tokenize:jr},ce={concrete:!0,name:"codeFenced",tokenize:Ar};function Ar(a,n,e){const t=this,i={partial:!0,tokenize:V};let r=0,u=0,l;return o;function o(f){return m(f)}function m(f){const z=t.events[t.events.length-1];return r=z&&z[1].type==="linePrefix"?z[2].sliceSerialize(z[1],!0).length:0,l=f,a.enter("codeFenced"),a.enter("codeFencedFence"),a.enter("codeFencedFenceSequence"),s(f)}function s(f){return f===l?(u++,a.consume(f),s):u<3?e(f):(a.exit("codeFencedFenceSequence"),N(f)?_(a,d,"whitespace")(f):d(f))}function d(f){return f===null||I(f)?(a.exit("codeFencedFence"),t.interrupt?n(f):a.check(he,x,K)(f)):(a.enter("codeFencedFenceInfo"),a.enter("chunkString",{contentType:"string"}),h(f))}function h(f){return f===null||I(f)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),d(f)):N(f)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),_(a,g,"whitespace")(f)):f===96&&f===l?e(f):(a.consume(f),h)}function g(f){return f===null||I(f)?d(f):(a.enter("codeFencedFenceMeta"),a.enter("chunkString",{contentType:"string"}),b(f))}function b(f){return f===null||I(f)?(a.exit("chunkString"),a.exit("codeFencedFenceMeta"),d(f)):f===96&&f===l?e(f):(a.consume(f),b)}function x(f){return a.attempt(i,K,E)(f)}function E(f){return a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),S}function S(f){return r>0&&N(f)?_(a,B,"linePrefix",r+1)(f):B(f)}function B(f){return f===null||I(f)?a.check(he,x,K)(f):(a.enter("codeFlowValue"),P(f))}function P(f){return f===null||I(f)?(a.exit("codeFlowValue"),B(f)):(a.consume(f),P)}function K(f){return a.exit("codeFenced"),n(f)}function V(f,z,G){let R=0;return H;function H(L){return f.enter("lineEnding"),f.consume(L),f.exit("lineEnding"),j}function j(L){return f.enter("codeFencedFence"),N(L)?_(f,A,"linePrefix",t.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):A(L)}function A(L){return L===l?(f.enter("codeFencedFenceSequence"),U(L)):G(L)}function U(L){return L===l?(R++,f.consume(L),U):R>=u?(f.exit("codeFencedFenceSequence"),N(L)?_(f,q,"whitespace")(L):q(L)):G(L)}function q(L){return L===null||I(L)?(f.exit("codeFencedFence"),z(L)):G(L)}}}function jr(a,n,e){const t=this;return i;function i(u){return u===null?e(u):(a.enter("lineEnding"),a.consume(u),a.exit("lineEnding"),r)}function r(u){return t.parser.lazy[t.now().line]?e(u):n(u)}}const ln={name:"codeIndented",tokenize:Er},Ir={partial:!0,tokenize:Cr};function Er(a,n,e){const t=this;return i;function i(m){return a.enter("codeIndented"),_(a,r,"linePrefix",5)(m)}function r(m){const s=t.events[t.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?u(m):e(m)}function u(m){return m===null?o(m):I(m)?a.attempt(Ir,u,o)(m):(a.enter("codeFlowValue"),l(m))}function l(m){return m===null||I(m)?(a.exit("codeFlowValue"),u(m)):(a.consume(m),l)}function o(m){return a.exit("codeIndented"),n(m)}}function Cr(a,n,e){const t=this;return i;function i(u){return t.parser.lazy[t.now().line]?e(u):I(u)?(a.enter("lineEnding"),a.consume(u),a.exit("lineEnding"),i):_(a,r,"linePrefix",5)(u)}function r(u){const l=t.events[t.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(u):I(u)?i(u):e(u)}}const Tr={name:"codeText",previous:Mr,resolve:Br,tokenize:vr};function Br(a){let n=a.length-4,e=3,t,i;if((a[e][1].type==="lineEnding"||a[e][1].type==="space")&&(a[n][1].type==="lineEnding"||a[n][1].type==="space")){for(t=e;++t<n;)if(a[t][1].type==="codeTextData"){a[e][1].type="codeTextPadding",a[n][1].type="codeTextPadding",e+=2,n-=2;break}}for(t=e-1,n++;++t<=n;)i===void 0?t!==n&&a[t][1].type!=="lineEnding"&&(i=t):(t===n||a[t][1].type==="lineEnding")&&(a[i][1].type="codeTextData",t!==i+2&&(a[i][1].end=a[t-1][1].end,a.splice(i+2,t-i-2),n-=t-i-2,t=i+2),i=void 0);return a}function Mr(a){return a!==96||this.events[this.events.length-1][1].type==="characterEscape"}function vr(a,n,e){let t=0,i,r;return u;function u(d){return a.enter("codeText"),a.enter("codeTextSequence"),l(d)}function l(d){return d===96?(a.consume(d),t++,l):(a.exit("codeTextSequence"),o(d))}function o(d){return d===null?e(d):d===32?(a.enter("space"),a.consume(d),a.exit("space"),o):d===96?(r=a.enter("codeTextSequence"),i=0,s(d)):I(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),o):(a.enter("codeTextData"),m(d))}function m(d){return d===null||d===32||d===96||I(d)?(a.exit("codeTextData"),o(d)):(a.consume(d),m)}function s(d){return d===96?(a.consume(d),i++,s):i===t?(a.exit("codeTextSequence"),a.exit("codeText"),n(d)):(r.type="codeTextData",m(d))}}class Lr{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,e){const t=e==null?Number.POSITIVE_INFINITY:e;return t<this.left.length?this.left.slice(n,t):n>this.left.length?this.right.slice(this.right.length-t+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-t+this.left.length).reverse())}splice(n,e,t){const i=e||0;this.setCursor(Math.trunc(n));const r=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return t&&Da(this.left,t),r.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Da(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Da(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const e=this.left.splice(n,Number.POSITIVE_INFINITY);Da(this.right,e.reverse())}else{const e=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Da(this.left,e.reverse())}}}function Da(a,n){let e=0;if(n.length<1e4)a.push(...n);else for(;e<n.length;)a.push(...n.slice(e,e+1e4)),e+=1e4}function st(a){const n={};let e=-1,t,i,r,u,l,o,m;const s=new Lr(a);for(;++e<s.length;){for(;e in n;)e=n[e];if(t=s.get(e),e&&t[1].type==="chunkFlow"&&s.get(e-1)[1].type==="listItemPrefix"&&(o=t[1]._tokenizer.events,r=0,r<o.length&&o[r][1].type==="lineEndingBlank"&&(r+=2),r<o.length&&o[r][1].type==="content"))for(;++r<o.length&&o[r][1].type!=="content";)o[r][1].type==="chunkText"&&(o[r][1]._isInFirstContentOfListItem=!0,r++);if(t[0]==="enter")t[1].contentType&&(Object.assign(n,Dr(s,e)),e=n[e],m=!0);else if(t[1]._container){for(r=e,i=void 0;r--;)if(u=s.get(r),u[1].type==="lineEnding"||u[1].type==="lineEndingBlank")u[0]==="enter"&&(i&&(s.get(i)[1].type="lineEndingBlank"),u[1].type="lineEnding",i=r);else if(!(u[1].type==="linePrefix"||u[1].type==="listItemIndent"))break;i&&(t[1].end=v({},s.get(i)[1].start),l=s.slice(i,e),l.unshift(t),s.splice(i,e-i+1,l))}}return ga(a,0,Number.POSITIVE_INFINITY,s.slice(0)),!m}function Dr(a,n){const e=a.get(n)[1],t=a.get(n)[2];let i=n-1;const r=[];let u=e._tokenizer;u||(u=t.parser[e.contentType](e.start),e._contentTypeTextTrailing&&(u._contentTypeTextTrailing=!0));const l=u.events,o=[],m={};let s,d,h=-1,g=e,b=0,x=0;const E=[x];for(;g;){for(;a.get(++i)[1]!==g;);r.push(i),g._tokenizer||(s=t.sliceStream(g),g.next||s.push(null),d&&u.defineSkip(g.start),g._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=!0),u.write(s),g._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=void 0)),d=g,g=g.next}for(g=e;++h<l.length;)l[h][0]==="exit"&&l[h-1][0]==="enter"&&l[h][1].type===l[h-1][1].type&&l[h][1].start.line!==l[h][1].end.line&&(x=h+1,E.push(x),g._tokenizer=void 0,g.previous=void 0,g=g.next);for(u.events=[],g?(g._tokenizer=void 0,g.previous=void 0):E.pop(),h=E.length;h--;){const S=l.slice(E[h],E[h+1]),B=r.pop();o.push([B,B+S.length-1]),a.splice(B,2,S)}for(o.reverse(),h=-1;++h<o.length;)m[b+o[h][0]]=b+o[h][1],b+=o[h][1]-o[h][0]-1;return m}const Nr={resolve:Rr,tokenize:Fr},zr={partial:!0,tokenize:Or};function Rr(a){return st(a),a}function Fr(a,n){let e;return t;function t(l){return a.enter("content"),e=a.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?r(l):I(l)?a.check(zr,u,r)(l):(a.consume(l),i)}function r(l){return a.exit("chunkContent"),a.exit("content"),n(l)}function u(l){return a.consume(l),a.exit("chunkContent"),e.next=a.enter("chunkContent",{contentType:"content",previous:e}),e=e.next,i}}function Or(a,n,e){const t=this;return i;function i(u){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(u),a.exit("lineEnding"),_(a,r,"linePrefix")}function r(u){if(u===null||I(u))return e(u);const l=t.events[t.events.length-1];return!t.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(u):a.interrupt(t.parser.constructs.flow,e,n)(u)}}function ot(a,n,e,t,i,r,u,l,o){const m=o||Number.POSITIVE_INFINITY;let s=0;return d;function d(S){return S===60?(a.enter(t),a.enter(i),a.enter(r),a.consume(S),a.exit(r),h):S===null||S===32||S===41||Sn(S)?e(S):(a.enter(t),a.enter(u),a.enter(l),a.enter("chunkString",{contentType:"string"}),x(S))}function h(S){return S===62?(a.enter(r),a.consume(S),a.exit(r),a.exit(i),a.exit(t),n):(a.enter(l),a.enter("chunkString",{contentType:"string"}),g(S))}function g(S){return S===62?(a.exit("chunkString"),a.exit(l),h(S)):S===null||S===60||I(S)?e(S):(a.consume(S),S===92?b:g)}function b(S){return S===60||S===62||S===92?(a.consume(S),g):g(S)}function x(S){return!s&&(S===null||S===41||Z(S))?(a.exit("chunkString"),a.exit(l),a.exit(u),a.exit(t),n(S)):s<m&&S===40?(a.consume(S),s++,x):S===41?(a.consume(S),s--,x):S===null||S===32||S===40||Sn(S)?e(S):(a.consume(S),S===92?E:x)}function E(S){return S===40||S===41||S===92?(a.consume(S),x):x(S)}}function mt(a,n,e,t,i,r){const u=this;let l=0,o;return m;function m(g){return a.enter(t),a.enter(i),a.consume(g),a.exit(i),a.enter(r),s}function s(g){return l>999||g===null||g===91||g===93&&!o||g===94&&!l&&"_hiddenFootnoteSupport"in u.parser.constructs?e(g):g===93?(a.exit(r),a.enter(i),a.consume(g),a.exit(i),a.exit(t),n):I(g)?(a.enter("lineEnding"),a.consume(g),a.exit("lineEnding"),s):(a.enter("chunkString",{contentType:"string"}),d(g))}function d(g){return g===null||g===91||g===93||I(g)||l++>999?(a.exit("chunkString"),s(g)):(a.consume(g),o||(o=!N(g)),g===92?h:d)}function h(g){return g===91||g===92||g===93?(a.consume(g),l++,d):d(g)}}function gt(a,n,e,t,i,r){let u;return l;function l(h){return h===34||h===39||h===40?(a.enter(t),a.enter(i),a.consume(h),a.exit(i),u=h===40?41:h,o):e(h)}function o(h){return h===u?(a.enter(i),a.consume(h),a.exit(i),a.exit(t),n):(a.enter(r),m(h))}function m(h){return h===u?(a.exit(r),o(u)):h===null?e(h):I(h)?(a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),_(a,m,"linePrefix")):(a.enter("chunkString",{contentType:"string"}),s(h))}function s(h){return h===u||h===null||I(h)?(a.exit("chunkString"),m(h)):(a.consume(h),h===92?d:s)}function d(h){return h===u||h===92?(a.consume(h),s):s(h)}}function Ra(a,n){let e;return t;function t(i){return I(i)?(a.enter("lineEnding"),a.consume(i),a.exit("lineEnding"),e=!0,t):N(i)?_(a,t,e?"linePrefix":"lineSuffix")(i):n(i)}}const _r={name:"definition",tokenize:Kr},Hr={partial:!0,tokenize:Ur};function Kr(a,n,e){const t=this;let i;return r;function r(g){return a.enter("definition"),u(g)}function u(g){return mt.call(t,a,l,e,"definitionLabel","definitionLabelMarker","definitionLabelString")(g)}function l(g){return i=Ca(t.sliceSerialize(t.events[t.events.length-1][1]).slice(1,-1)),g===58?(a.enter("definitionMarker"),a.consume(g),a.exit("definitionMarker"),o):e(g)}function o(g){return Z(g)?Ra(a,m)(g):m(g)}function m(g){return ot(a,s,e,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(g)}function s(g){return a.attempt(Hr,d,d)(g)}function d(g){return N(g)?_(a,h,"whitespace")(g):h(g)}function h(g){return g===null||I(g)?(a.exit("definition"),t.parser.defined.push(i),n(g)):e(g)}}function Ur(a,n,e){return t;function t(l){return Z(l)?Ra(a,i)(l):e(l)}function i(l){return gt(a,r,e,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function r(l){return N(l)?_(a,u,"whitespace")(l):u(l)}function u(l){return l===null||I(l)?n(l):e(l)}}const Vr={name:"hardBreakEscape",tokenize:Gr};function Gr(a,n,e){return t;function t(r){return a.enter("hardBreakEscape"),a.consume(r),i}function i(r){return I(r)?(a.exit("hardBreakEscape"),n(r)):e(r)}}const qr={name:"headingAtx",resolve:$r,tokenize:Wr};function $r(a,n){let e=a.length-2,t=3,i,r;return a[t][1].type==="whitespace"&&(t+=2),e-2>t&&a[e][1].type==="whitespace"&&(e-=2),a[e][1].type==="atxHeadingSequence"&&(t===e-1||e-4>t&&a[e-2][1].type==="whitespace")&&(e-=t+1===e?2:4),e>t&&(i={type:"atxHeadingText",start:a[t][1].start,end:a[e][1].end},r={type:"chunkText",start:a[t][1].start,end:a[e][1].end,contentType:"text"},ga(a,t,e-t+1,[["enter",i,n],["enter",r,n],["exit",r,n],["exit",i,n]])),a}function Wr(a,n,e){let t=0;return i;function i(s){return a.enter("atxHeading"),r(s)}function r(s){return a.enter("atxHeadingSequence"),u(s)}function u(s){return s===35&&t++<6?(a.consume(s),u):s===null||Z(s)?(a.exit("atxHeadingSequence"),l(s)):e(s)}function l(s){return s===35?(a.enter("atxHeadingSequence"),o(s)):s===null||I(s)?(a.exit("atxHeading"),n(s)):N(s)?_(a,l,"whitespace")(s):(a.enter("atxHeadingText"),m(s))}function o(s){return s===35?(a.consume(s),o):(a.exit("atxHeadingSequence"),l(s))}function m(s){return s===null||s===35||Z(s)?(a.exit("atxHeadingText"),l(s)):(a.consume(s),m)}}const Yr=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],be=["pre","script","style","textarea"],Jr={concrete:!0,name:"htmlFlow",resolveTo:Zr,tokenize:au},Xr={partial:!0,tokenize:eu},Qr={partial:!0,tokenize:nu};function Zr(a){let n=a.length;for(;n--&&!(a[n][0]==="enter"&&a[n][1].type==="htmlFlow"););return n>1&&a[n-2][1].type==="linePrefix"&&(a[n][1].start=a[n-2][1].start,a[n+1][1].start=a[n-2][1].start,a.splice(n-2,2)),a}function au(a,n,e){const t=this;let i,r,u,l,o;return m;function m(k){return s(k)}function s(k){return a.enter("htmlFlow"),a.enter("htmlFlowData"),a.consume(k),d}function d(k){return k===33?(a.consume(k),h):k===47?(a.consume(k),r=!0,x):k===63?(a.consume(k),i=3,t.interrupt?n:p):ma(k)?(a.consume(k),u=String.fromCharCode(k),E):e(k)}function h(k){return k===45?(a.consume(k),i=2,g):k===91?(a.consume(k),i=5,l=0,b):ma(k)?(a.consume(k),i=4,t.interrupt?n:p):e(k)}function g(k){return k===45?(a.consume(k),t.interrupt?n:p):e(k)}function b(k){const la="CDATA[";return k===la.charCodeAt(l++)?(a.consume(k),l===la.length?t.interrupt?n:A:b):e(k)}function x(k){return ma(k)?(a.consume(k),u=String.fromCharCode(k),E):e(k)}function E(k){if(k===null||k===47||k===62||Z(k)){const la=k===47,ya=u.toLowerCase();return!la&&!r&&be.includes(ya)?(i=1,t.interrupt?n(k):A(k)):Yr.includes(u.toLowerCase())?(i=6,la?(a.consume(k),S):t.interrupt?n(k):A(k)):(i=7,t.interrupt&&!t.parser.lazy[t.now().line]?e(k):r?B(k):P(k))}return k===45||ta(k)?(a.consume(k),u+=String.fromCharCode(k),E):e(k)}function S(k){return k===62?(a.consume(k),t.interrupt?n:A):e(k)}function B(k){return N(k)?(a.consume(k),B):H(k)}function P(k){return k===47?(a.consume(k),H):k===58||k===95||ma(k)?(a.consume(k),K):N(k)?(a.consume(k),P):H(k)}function K(k){return k===45||k===46||k===58||k===95||ta(k)?(a.consume(k),K):V(k)}function V(k){return k===61?(a.consume(k),f):N(k)?(a.consume(k),V):P(k)}function f(k){return k===null||k===60||k===61||k===62||k===96?e(k):k===34||k===39?(a.consume(k),o=k,z):N(k)?(a.consume(k),f):G(k)}function z(k){return k===o?(a.consume(k),o=null,R):k===null||I(k)?e(k):(a.consume(k),z)}function G(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||Z(k)?V(k):(a.consume(k),G)}function R(k){return k===47||k===62||N(k)?P(k):e(k)}function H(k){return k===62?(a.consume(k),j):e(k)}function j(k){return k===null||I(k)?A(k):N(k)?(a.consume(k),j):e(k)}function A(k){return k===45&&i===2?(a.consume(k),J):k===60&&i===1?(a.consume(k),W):k===62&&i===4?(a.consume(k),ua):k===63&&i===3?(a.consume(k),p):k===93&&i===5?(a.consume(k),da):I(k)&&(i===6||i===7)?(a.exit("htmlFlowData"),a.check(Xr,pa,U)(k)):k===null||I(k)?(a.exit("htmlFlowData"),U(k)):(a.consume(k),A)}function U(k){return a.check(Qr,q,pa)(k)}function q(k){return a.enter("lineEnding"),a.consume(k),a.exit("lineEnding"),L}function L(k){return k===null||I(k)?U(k):(a.enter("htmlFlowData"),A(k))}function J(k){return k===45?(a.consume(k),p):A(k)}function W(k){return k===47?(a.consume(k),u="",ra):A(k)}function ra(k){if(k===62){const la=u.toLowerCase();return be.includes(la)?(a.consume(k),ua):A(k)}return ma(k)&&u.length<8?(a.consume(k),u+=String.fromCharCode(k),ra):A(k)}function da(k){return k===93?(a.consume(k),p):A(k)}function p(k){return k===62?(a.consume(k),ua):k===45&&i===2?(a.consume(k),p):A(k)}function ua(k){return k===null||I(k)?(a.exit("htmlFlowData"),pa(k)):(a.consume(k),ua)}function pa(k){return a.exit("htmlFlow"),n(k)}}function nu(a,n,e){const t=this;return i;function i(u){return I(u)?(a.enter("lineEnding"),a.consume(u),a.exit("lineEnding"),r):e(u)}function r(u){return t.parser.lazy[t.now().line]?e(u):n(u)}}function eu(a,n,e){return t;function t(i){return a.enter("lineEnding"),a.consume(i),a.exit("lineEnding"),a.attempt(an,n,e)}}const tu={name:"htmlText",tokenize:iu};function iu(a,n,e){const t=this;let i,r,u;return l;function l(p){return a.enter("htmlText"),a.enter("htmlTextData"),a.consume(p),o}function o(p){return p===33?(a.consume(p),m):p===47?(a.consume(p),V):p===63?(a.consume(p),P):ma(p)?(a.consume(p),G):e(p)}function m(p){return p===45?(a.consume(p),s):p===91?(a.consume(p),r=0,b):ma(p)?(a.consume(p),B):e(p)}function s(p){return p===45?(a.consume(p),g):e(p)}function d(p){return p===null?e(p):p===45?(a.consume(p),h):I(p)?(u=d,W(p)):(a.consume(p),d)}function h(p){return p===45?(a.consume(p),g):d(p)}function g(p){return p===62?J(p):p===45?h(p):d(p)}function b(p){const ua="CDATA[";return p===ua.charCodeAt(r++)?(a.consume(p),r===ua.length?x:b):e(p)}function x(p){return p===null?e(p):p===93?(a.consume(p),E):I(p)?(u=x,W(p)):(a.consume(p),x)}function E(p){return p===93?(a.consume(p),S):x(p)}function S(p){return p===62?J(p):p===93?(a.consume(p),S):x(p)}function B(p){return p===null||p===62?J(p):I(p)?(u=B,W(p)):(a.consume(p),B)}function P(p){return p===null?e(p):p===63?(a.consume(p),K):I(p)?(u=P,W(p)):(a.consume(p),P)}function K(p){return p===62?J(p):P(p)}function V(p){return ma(p)?(a.consume(p),f):e(p)}function f(p){return p===45||ta(p)?(a.consume(p),f):z(p)}function z(p){return I(p)?(u=z,W(p)):N(p)?(a.consume(p),z):J(p)}function G(p){return p===45||ta(p)?(a.consume(p),G):p===47||p===62||Z(p)?R(p):e(p)}function R(p){return p===47?(a.consume(p),J):p===58||p===95||ma(p)?(a.consume(p),H):I(p)?(u=R,W(p)):N(p)?(a.consume(p),R):J(p)}function H(p){return p===45||p===46||p===58||p===95||ta(p)?(a.consume(p),H):j(p)}function j(p){return p===61?(a.consume(p),A):I(p)?(u=j,W(p)):N(p)?(a.consume(p),j):R(p)}function A(p){return p===null||p===60||p===61||p===62||p===96?e(p):p===34||p===39?(a.consume(p),i=p,U):I(p)?(u=A,W(p)):N(p)?(a.consume(p),A):(a.consume(p),q)}function U(p){return p===i?(a.consume(p),i=void 0,L):p===null?e(p):I(p)?(u=U,W(p)):(a.consume(p),U)}function q(p){return p===null||p===34||p===39||p===60||p===61||p===96?e(p):p===47||p===62||Z(p)?R(p):(a.consume(p),q)}function L(p){return p===47||p===62||Z(p)?R(p):e(p)}function J(p){return p===62?(a.consume(p),a.exit("htmlTextData"),a.exit("htmlText"),n):e(p)}function W(p){return a.exit("htmlTextData"),a.enter("lineEnding"),a.consume(p),a.exit("lineEnding"),ra}function ra(p){return N(p)?_(a,da,"linePrefix",t.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p):da(p)}function da(p){return a.enter("htmlTextData"),u(p)}}const zn={name:"labelEnd",resolveAll:su,resolveTo:ou,tokenize:mu},ru={tokenize:gu},uu={tokenize:du},lu={tokenize:pu};function su(a){let n=-1;const e=[];for(;++n<a.length;){const t=a[n][1];if(e.push(a[n]),t.type==="labelImage"||t.type==="labelLink"||t.type==="labelEnd"){const i=t.type==="labelImage"?4:2;t.type="data",n+=i}}return a.length!==e.length&&ga(a,0,a.length,e),a}function ou(a,n){let e=a.length,t=0,i,r,u,l;for(;e--;)if(i=a[e][1],r){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;a[e][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(u){if(a[e][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(r=e,i.type!=="labelLink")){t=2;break}}else i.type==="labelEnd"&&(u=e);const o={type:a[r][1].type==="labelLink"?"link":"image",start:v({},a[r][1].start),end:v({},a[a.length-1][1].end)},m={type:"label",start:v({},a[r][1].start),end:v({},a[u][1].end)},s={type:"labelText",start:v({},a[r+t+2][1].end),end:v({},a[u-2][1].start)};return l=[["enter",o,n],["enter",m,n]],l=ia(l,a.slice(r+1,r+t+3)),l=ia(l,[["enter",s,n]]),l=ia(l,Nn(n.parser.constructs.insideSpan.null,a.slice(r+t+4,u-3),n)),l=ia(l,[["exit",s,n],a[u-2],a[u-1],["exit",m,n]]),l=ia(l,a.slice(u+1)),l=ia(l,[["exit",o,n]]),ga(a,r,a.length,l),a}function mu(a,n,e){const t=this;let i=t.events.length,r,u;for(;i--;)if((t.events[i][1].type==="labelImage"||t.events[i][1].type==="labelLink")&&!t.events[i][1]._balanced){r=t.events[i][1];break}return l;function l(h){return r?r._inactive?d(h):(u=t.parser.defined.includes(Ca(t.sliceSerialize({start:r.end,end:t.now()}))),a.enter("labelEnd"),a.enter("labelMarker"),a.consume(h),a.exit("labelMarker"),a.exit("labelEnd"),o):e(h)}function o(h){return h===40?a.attempt(ru,s,u?s:d)(h):h===91?a.attempt(uu,s,u?m:d)(h):u?s(h):d(h)}function m(h){return a.attempt(lu,s,d)(h)}function s(h){return n(h)}function d(h){return r._balanced=!0,e(h)}}function gu(a,n,e){return t;function t(d){return a.enter("resource"),a.enter("resourceMarker"),a.consume(d),a.exit("resourceMarker"),i}function i(d){return Z(d)?Ra(a,r)(d):r(d)}function r(d){return d===41?s(d):ot(a,u,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function u(d){return Z(d)?Ra(a,o)(d):s(d)}function l(d){return e(d)}function o(d){return d===34||d===39||d===40?gt(a,m,e,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):s(d)}function m(d){return Z(d)?Ra(a,s)(d):s(d)}function s(d){return d===41?(a.enter("resourceMarker"),a.consume(d),a.exit("resourceMarker"),a.exit("resource"),n):e(d)}}function du(a,n,e){const t=this;return i;function i(l){return mt.call(t,a,r,u,"reference","referenceMarker","referenceString")(l)}function r(l){return t.parser.defined.includes(Ca(t.sliceSerialize(t.events[t.events.length-1][1]).slice(1,-1)))?n(l):e(l)}function u(l){return e(l)}}function pu(a,n,e){return t;function t(r){return a.enter("reference"),a.enter("referenceMarker"),a.consume(r),a.exit("referenceMarker"),i}function i(r){return r===93?(a.enter("referenceMarker"),a.consume(r),a.exit("referenceMarker"),a.exit("reference"),n):e(r)}}const ku={name:"labelStartImage",resolveAll:zn.resolveAll,tokenize:hu};function hu(a,n,e){const t=this;return i;function i(l){return a.enter("labelImage"),a.enter("labelImageMarker"),a.consume(l),a.exit("labelImageMarker"),r}function r(l){return l===91?(a.enter("labelMarker"),a.consume(l),a.exit("labelMarker"),a.exit("labelImage"),u):e(l)}function u(l){return l===94&&"_hiddenFootnoteSupport"in t.parser.constructs?e(l):n(l)}}const cu={name:"labelStartLink",resolveAll:zn.resolveAll,tokenize:bu};function bu(a,n,e){const t=this;return i;function i(u){return a.enter("labelLink"),a.enter("labelMarker"),a.consume(u),a.exit("labelMarker"),a.exit("labelLink"),r}function r(u){return u===94&&"_hiddenFootnoteSupport"in t.parser.constructs?e(u):n(u)}}const sn={name:"lineEnding",tokenize:fu};function fu(a,n){return e;function e(t){return a.enter("lineEnding"),a.consume(t),a.exit("lineEnding"),_(a,n,"linePrefix")}}const Wa={name:"thematicBreak",tokenize:yu};function yu(a,n,e){let t=0,i;return r;function r(m){return a.enter("thematicBreak"),u(m)}function u(m){return i=m,l(m)}function l(m){return m===i?(a.enter("thematicBreakSequence"),o(m)):t>=3&&(m===null||I(m))?(a.exit("thematicBreak"),n(m)):e(m)}function o(m){return m===i?(a.consume(m),t++,o):(a.exit("thematicBreakSequence"),N(m)?_(a,l,"whitespace")(m):l(m))}}const Q={continuation:{tokenize:Pu},exit:ju,name:"list",tokenize:wu},xu={partial:!0,tokenize:Iu},Su={partial:!0,tokenize:Au};function wu(a,n,e){const t=this,i=t.events[t.events.length-1];let r=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,u=0;return l;function l(g){const b=t.containerState.type||(g===42||g===43||g===45?"listUnordered":"listOrdered");if(b==="listUnordered"?!t.containerState.marker||g===t.containerState.marker:wn(g)){if(t.containerState.type||(t.containerState.type=b,a.enter(b,{_container:!0})),b==="listUnordered")return a.enter("listItemPrefix"),g===42||g===45?a.check(Wa,e,m)(g):m(g);if(!t.interrupt||g===49)return a.enter("listItemPrefix"),a.enter("listItemValue"),o(g)}return e(g)}function o(g){return wn(g)&&++u<10?(a.consume(g),o):(!t.interrupt||u<2)&&(t.containerState.marker?g===t.containerState.marker:g===41||g===46)?(a.exit("listItemValue"),m(g)):e(g)}function m(g){return a.enter("listItemMarker"),a.consume(g),a.exit("listItemMarker"),t.containerState.marker=t.containerState.marker||g,a.check(an,t.interrupt?e:s,a.attempt(xu,h,d))}function s(g){return t.containerState.initialBlankLine=!0,r++,h(g)}function d(g){return N(g)?(a.enter("listItemPrefixWhitespace"),a.consume(g),a.exit("listItemPrefixWhitespace"),h):e(g)}function h(g){return t.containerState.size=r+t.sliceSerialize(a.exit("listItemPrefix"),!0).length,n(g)}}function Pu(a,n,e){const t=this;return t.containerState._closeFlow=void 0,a.check(an,i,r);function i(l){return t.containerState.furtherBlankLines=t.containerState.furtherBlankLines||t.containerState.initialBlankLine,_(a,n,"listItemIndent",t.containerState.size+1)(l)}function r(l){return t.containerState.furtherBlankLines||!N(l)?(t.containerState.furtherBlankLines=void 0,t.containerState.initialBlankLine=void 0,u(l)):(t.containerState.furtherBlankLines=void 0,t.containerState.initialBlankLine=void 0,a.attempt(Su,n,u)(l))}function u(l){return t.containerState._closeFlow=!0,t.interrupt=void 0,_(a,a.attempt(Q,n,e),"linePrefix",t.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Au(a,n,e){const t=this;return _(a,i,"listItemIndent",t.containerState.size+1);function i(r){const u=t.events[t.events.length-1];return u&&u[1].type==="listItemIndent"&&u[2].sliceSerialize(u[1],!0).length===t.containerState.size?n(r):e(r)}}function ju(a){a.exit(this.containerState.type)}function Iu(a,n,e){const t=this;return _(a,i,"listItemPrefixWhitespace",t.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(r){const u=t.events[t.events.length-1];return!N(r)&&u&&u[1].type==="listItemPrefixWhitespace"?n(r):e(r)}}const fe={name:"setextUnderline",resolveTo:Eu,tokenize:Cu};function Eu(a,n){let e=a.length,t,i,r;for(;e--;)if(a[e][0]==="enter"){if(a[e][1].type==="content"){t=e;break}a[e][1].type==="paragraph"&&(i=e)}else a[e][1].type==="content"&&a.splice(e,1),!r&&a[e][1].type==="definition"&&(r=e);const u={type:"setextHeading",start:v({},a[t][1].start),end:v({},a[a.length-1][1].end)};return a[i][1].type="setextHeadingText",r?(a.splice(i,0,["enter",u,n]),a.splice(r+1,0,["exit",a[t][1],n]),a[t][1].end=v({},a[r][1].end)):a[t][1]=u,a.push(["exit",u,n]),a}function Cu(a,n,e){const t=this;let i;return r;function r(m){let s=t.events.length,d;for(;s--;)if(t.events[s][1].type!=="lineEnding"&&t.events[s][1].type!=="linePrefix"&&t.events[s][1].type!=="content"){d=t.events[s][1].type==="paragraph";break}return!t.parser.lazy[t.now().line]&&(t.interrupt||d)?(a.enter("setextHeadingLine"),i=m,u(m)):e(m)}function u(m){return a.enter("setextHeadingLineSequence"),l(m)}function l(m){return m===i?(a.consume(m),l):(a.exit("setextHeadingLineSequence"),N(m)?_(a,o,"lineSuffix")(m):o(m))}function o(m){return m===null||I(m)?(a.exit("setextHeadingLine"),n(m)):e(m)}}const Tu={tokenize:Bu};function Bu(a){const n=this,e=a.attempt(an,t,a.attempt(this.parser.constructs.flowInitial,i,_(a,a.attempt(this.parser.constructs.flow,i,a.attempt(Nr,i)),"linePrefix")));return e;function t(r){if(r===null){a.consume(r);return}return a.enter("lineEndingBlank"),a.consume(r),a.exit("lineEndingBlank"),n.currentConstruct=void 0,e}function i(r){if(r===null){a.consume(r);return}return a.enter("lineEnding"),a.consume(r),a.exit("lineEnding"),n.currentConstruct=void 0,e}}const Mu={resolveAll:pt()},vu=dt("string"),Lu=dt("text");function dt(a){return{resolveAll:pt(a==="text"?Du:void 0),tokenize:n};function n(e){const t=this,i=this.parser.constructs[a],r=e.attempt(i,u,l);return u;function u(s){return m(s)?r(s):l(s)}function l(s){if(s===null){e.consume(s);return}return e.enter("data"),e.consume(s),o}function o(s){return m(s)?(e.exit("data"),r(s)):(e.consume(s),o)}function m(s){if(s===null)return!0;const d=i[s];let h=-1;if(d)for(;++h<d.length;){const g=d[h];if(!g.previous||g.previous.call(t,t.previous))return!0}return!1}}}function pt(a){return n;function n(e,t){let i=-1,r;for(;++i<=e.length;)r===void 0?e[i]&&e[i][1].type==="data"&&(r=i,i++):(!e[i]||e[i][1].type!=="data")&&(i!==r+2&&(e[r][1].end=e[i-1][1].end,e.splice(r+2,i-r-2),i=r+2),r=void 0);return a?a(e,t):e}}function Du(a,n){let e=0;for(;++e<=a.length;)if((e===a.length||a[e][1].type==="lineEnding")&&a[e-1][1].type==="data"){const t=a[e-1][1],i=n.sliceStream(t);let r=i.length,u=-1,l=0,o;for(;r--;){const m=i[r];if(typeof m=="string"){for(u=m.length;m.charCodeAt(u-1)===32;)l++,u--;if(u)break;u=-1}else if(m===-2)o=!0,l++;else if(m!==-1){r++;break}}if(n._contentTypeTextTrailing&&e===a.length&&(l=0),l){const m={type:e===a.length||o||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:r?u:t.start._bufferIndex+u,_index:t.start._index+r,line:t.end.line,column:t.end.column-l,offset:t.end.offset-l},end:v({},t.end)};t.end=v({},m.start),t.start.offset===t.end.offset?Object.assign(t,m):(a.splice(e,0,["enter",m,n],["exit",m,n]),e+=2)}e++}return a}const Nu={42:Q,43:Q,45:Q,48:Q,49:Q,50:Q,51:Q,52:Q,53:Q,54:Q,55:Q,56:Q,57:Q,62:rt},zu={91:_r},Ru={[-2]:ln,[-1]:ln,32:ln},Fu={35:qr,42:Wa,45:[fe,Wa],60:Jr,61:fe,95:Wa,96:ce,126:ce},Ou={38:lt,92:ut},_u={[-5]:sn,[-4]:sn,[-3]:sn,33:ku,38:lt,42:Pn,60:[cr,tu],91:cu,92:[Vr,ut],93:zn,95:Pn,96:Tr},Hu={null:[Pn,Mu]},Ku={null:[42,95]},Uu={null:[]},Vu=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Ku,contentInitial:zu,disable:Uu,document:Nu,flow:Fu,flowInitial:Ru,insideSpan:Hu,string:Ou,text:_u},Symbol.toStringTag,{value:"Module"}));function Gu(a,n,e){let t={_bufferIndex:-1,_index:0,line:e&&e.line||1,column:e&&e.column||1,offset:e&&e.offset||0};const i={},r=[];let u=[],l=[];const o={attempt:z(V),check:z(f),consume:B,enter:P,exit:K,interrupt:z(f,{interrupt:!0})},m={code:null,containerState:{},defineSkip:x,events:[],now:b,parser:a,previous:null,sliceSerialize:h,sliceStream:g,write:d};let s=n.tokenize.call(m,o);return n.resolveAll&&r.push(n),m;function d(j){return u=ia(u,j),E(),u[u.length-1]!==null?[]:(G(n,0),m.events=Nn(r,m.events,m),m.events)}function h(j,A){return $u(g(j),A)}function g(j){return qu(u,j)}function b(){const{_bufferIndex:j,_index:A,line:U,column:q,offset:L}=t;return{_bufferIndex:j,_index:A,line:U,column:q,offset:L}}function x(j){i[j.line]=j.column,H()}function E(){let j;for(;t._index<u.length;){const A=u[t._index];if(typeof A=="string")for(j=t._index,t._bufferIndex<0&&(t._bufferIndex=0);t._index===j&&t._bufferIndex<A.length;)S(A.charCodeAt(t._bufferIndex));else S(A)}}function S(j){s=s(j)}function B(j){I(j)?(t.line++,t.column=1,t.offset+=j===-3?2:1,H()):j!==-1&&(t.column++,t.offset++),t._bufferIndex<0?t._index++:(t._bufferIndex++,t._bufferIndex===u[t._index].length&&(t._bufferIndex=-1,t._index++)),m.previous=j}function P(j,A){const U=A||{};return U.type=j,U.start=b(),m.events.push(["enter",U,m]),l.push(U),U}function K(j){const A=l.pop();return A.end=b(),m.events.push(["exit",A,m]),A}function V(j,A){G(j,A.from)}function f(j,A){A.restore()}function z(j,A){return U;function U(q,L,J){let W,ra,da,p;return Array.isArray(q)?pa(q):"tokenize"in q?pa([q]):ua(q);function ua(Y){return Ma;function Ma(ca){const Pa=ca!==null&&Y[ca],Aa=ca!==null&&Y.null,Ka=[...Array.isArray(Pa)?Pa:Pa?[Pa]:[],...Array.isArray(Aa)?Aa:Aa?[Aa]:[]];return pa(Ka)(ca)}}function pa(Y){return W=Y,ra=0,Y.length===0?J:k(Y[ra])}function k(Y){return Ma;function Ma(ca){return p=R(),da=Y,Y.partial||(m.currentConstruct=Y),Y.name&&m.parser.constructs.disable.null.includes(Y.name)?ya():Y.tokenize.call(A?Object.assign(Object.create(m),A):m,o,la,ya)(ca)}}function la(Y){return j(da,p),L}function ya(Y){return p.restore(),++ra<W.length?k(W[ra]):J}}}function G(j,A){j.resolveAll&&!r.includes(j)&&r.push(j),j.resolve&&ga(m.events,A,m.events.length-A,j.resolve(m.events.slice(A),m)),j.resolveTo&&(m.events=j.resolveTo(m.events,m))}function R(){const j=b(),A=m.previous,U=m.currentConstruct,q=m.events.length,L=Array.from(l);return{from:q,restore:J};function J(){t=j,m.previous=A,m.currentConstruct=U,m.events.length=q,l=L,H()}}function H(){t.line in i&&t.column<2&&(t.column=i[t.line],t.offset+=i[t.line]-1)}}function qu(a,n){const e=n.start._index,t=n.start._bufferIndex,i=n.end._index,r=n.end._bufferIndex;let u;if(e===i)u=[a[e].slice(t,r)];else{if(u=a.slice(e,i),t>-1){const l=u[0];typeof l=="string"?u[0]=l.slice(t):u.shift()}r>0&&u.push(a[i].slice(0,r))}return u}function $u(a,n){let e=-1;const t=[];let i;for(;++e<a.length;){const r=a[e];let u;if(typeof r=="string")u=r;else switch(r){case-5:{u="\r";break}case-4:{u=`
`;break}case-3:{u=`\r
`;break}case-2:{u=n?" ":"	";break}case-1:{if(!n&&i)continue;u=" ";break}default:u=String.fromCharCode(r)}i=r===-2,t.push(u)}return t.join("")}function Wu(a){const t={constructs:nr([Vu,...(a||{}).extensions||[]]),content:i(or),defined:[],document:i(gr),flow:i(Tu),lazy:{},string:i(vu),text:i(Lu)};return t;function i(r){return u;function u(l){return Gu(t,r,l)}}}function Yu(a){for(;!st(a););return a}const ye=/[\0\t\n\r]/g;function Ju(){let a=1,n="",e=!0,t;return i;function i(r,u,l){const o=[];let m,s,d,h,g;for(r=n+(typeof r=="string"?r.toString():new TextDecoder(u||void 0).decode(r)),d=0,n="",e&&(r.charCodeAt(0)===65279&&d++,e=void 0);d<r.length;){if(ye.lastIndex=d,m=ye.exec(r),h=m&&m.index!==void 0?m.index:r.length,g=r.charCodeAt(h),!m){n=r.slice(d);break}if(g===10&&d===h&&t)o.push(-3),t=void 0;else switch(t&&(o.push(-5),t=void 0),d<h&&(o.push(r.slice(d,h)),a+=h-d),g){case 0:{o.push(65533),a++;break}case 9:{for(s=Math.ceil(a/4)*4,o.push(-2);a++<s;)o.push(-1);break}case 10:{o.push(-4),a=1;break}default:t=!0,a=1}d=h+1}return l&&(t&&o.push(-5),n&&o.push(n),o.push(null)),o}}const Xu=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Qu(a){return a.replace(Xu,Zu)}function Zu(a,n,e){if(n)return n;if(e.charCodeAt(0)===35){const i=e.charCodeAt(1),r=i===120||i===88;return it(e.slice(r?2:1),r?16:10)}return Dn(e)||a}const kt={}.hasOwnProperty;function al(a,n,e){return typeof n!="string"&&(e=n,n=void 0),nl(e)(Yu(Wu(e).document().write(Ju()(a,n,!0))))}function nl(a){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:r(Gn),autolinkProtocol:R,autolinkEmail:R,atxHeading:r(Kn),blockQuote:r(Aa),characterEscape:R,characterReference:R,codeFenced:r(Ka),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:r(Ka,u),codeText:r(It,u),codeTextData:R,data:R,codeFlowValue:R,definition:r(Et),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:r(Ct),hardBreakEscape:r(Un),hardBreakTrailing:r(Un),htmlFlow:r(Vn,u),htmlFlowData:R,htmlText:r(Vn,u),htmlTextData:R,image:r(Tt),label:u,link:r(Gn),listItem:r(Bt),listItemValue:h,listOrdered:r(qn,d),listUnordered:r(qn),paragraph:r(Mt),reference:k,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:r(Kn),strong:r(vt),thematicBreak:r(Dt)},exit:{atxHeading:o(),atxHeadingSequence:V,autolink:o(),autolinkEmail:Pa,autolinkProtocol:ca,blockQuote:o(),characterEscapeValue:H,characterReferenceMarkerHexadecimal:ya,characterReferenceMarkerNumeric:ya,characterReferenceValue:Y,characterReference:Ma,codeFenced:o(E),codeFencedFence:x,codeFencedFenceInfo:g,codeFencedFenceMeta:b,codeFlowValue:H,codeIndented:o(S),codeText:o(L),codeTextData:H,data:H,definition:o(),definitionDestinationString:K,definitionLabelString:B,definitionTitleString:P,emphasis:o(),hardBreakEscape:o(A),hardBreakTrailing:o(A),htmlFlow:o(U),htmlFlowData:H,htmlText:o(q),htmlTextData:H,image:o(W),label:da,labelText:ra,lineEnding:j,link:o(J),listItem:o(),listOrdered:o(),listUnordered:o(),paragraph:o(),referenceString:la,resourceDestinationString:p,resourceTitleString:ua,resource:pa,setextHeading:o(G),setextHeadingLineSequence:z,setextHeadingText:f,strong:o(),thematicBreak:o()}};ht(n,(a||{}).mdastExtensions||[]);const e={};return t;function t(c){let w={type:"root",children:[]};const C={stack:[w],tokenStack:[],config:n,enter:l,exit:m,buffer:u,resume:s,data:e},M=[];let F=-1;for(;++F<c.length;)if(c[F][1].type==="listOrdered"||c[F][1].type==="listUnordered")if(c[F][0]==="enter")M.push(F);else{const sa=M.pop();F=i(c,sa,F)}for(F=-1;++F<c.length;){const sa=n[c[F][0]];kt.call(sa,c[F][1].type)&&sa[c[F][1].type].call(Object.assign({sliceSerialize:c[F][2].sliceSerialize},C),c[F][1])}if(C.tokenStack.length>0){const sa=C.tokenStack[C.tokenStack.length-1];(sa[1]||xe).call(C,void 0,sa[0])}for(w.position={start:ba(c.length>0?c[0][1].start:{line:1,column:1,offset:0}),end:ba(c.length>0?c[c.length-2][1].end:{line:1,column:1,offset:0})},F=-1;++F<n.transforms.length;)w=n.transforms[F](w)||w;return w}function i(c,w,C){let M=w-1,F=-1,sa=!1,xa,ka,va,La;for(;++M<=C;){const na=c[M];switch(na[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{na[0]==="enter"?F++:F--,La=void 0;break}case"lineEndingBlank":{na[0]==="enter"&&(xa&&!La&&!F&&!va&&(va=M),La=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:La=void 0}if(!F&&na[0]==="enter"&&na[1].type==="listItemPrefix"||F===-1&&na[0]==="exit"&&(na[1].type==="listUnordered"||na[1].type==="listOrdered")){if(xa){let ja=M;for(ka=void 0;ja--;){const ha=c[ja];if(ha[1].type==="lineEnding"||ha[1].type==="lineEndingBlank"){if(ha[0]==="exit")continue;ka&&(c[ka][1].type="lineEndingBlank",sa=!0),ha[1].type="lineEnding",ka=ja}else if(!(ha[1].type==="linePrefix"||ha[1].type==="blockQuotePrefix"||ha[1].type==="blockQuotePrefixWhitespace"||ha[1].type==="blockQuoteMarker"||ha[1].type==="listItemIndent"))break}va&&(!ka||va<ka)&&(xa._spread=!0),xa.end=Object.assign({},ka?c[ka][1].start:na[1].end),c.splice(ka||M,0,["exit",xa,na[2]]),M++,C++}if(na[1].type==="listItemPrefix"){const ja={type:"listItem",_spread:!1,start:Object.assign({},na[1].start),end:void 0};xa=ja,c.splice(M,0,["enter",ja,na[2]]),M++,C++,va=void 0,La=!0}}}return c[w][1]._spread=sa,C}function r(c,w){return C;function C(M){l.call(this,c(M),M),w&&w.call(this,M)}}function u(){this.stack.push({type:"fragment",children:[]})}function l(c,w,C){this.stack[this.stack.length-1].children.push(c),this.stack.push(c),this.tokenStack.push([w,C||void 0]),c.position={start:ba(w.start),end:void 0}}function o(c){return w;function w(C){c&&c.call(this,C),m.call(this,C)}}function m(c,w){const C=this.stack.pop(),M=this.tokenStack.pop();if(M)M[0].type!==c.type&&(w?w.call(this,c,M[0]):(M[1]||xe).call(this,c,M[0]));else throw new Error("Cannot close `"+c.type+"` ("+za({start:c.start,end:c.end})+"): it’s not open");C.position.end=ba(c.end)}function s(){return Zi(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function h(c){if(this.data.expectingFirstListItemValue){const w=this.stack[this.stack.length-2];w.start=Number.parseInt(this.sliceSerialize(c),10),this.data.expectingFirstListItemValue=void 0}}function g(){const c=this.resume(),w=this.stack[this.stack.length-1];w.lang=c}function b(){const c=this.resume(),w=this.stack[this.stack.length-1];w.meta=c}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function E(){const c=this.resume(),w=this.stack[this.stack.length-1];w.value=c.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function S(){const c=this.resume(),w=this.stack[this.stack.length-1];w.value=c.replace(/(\r?\n|\r)$/g,"")}function B(c){const w=this.resume(),C=this.stack[this.stack.length-1];C.label=w,C.identifier=Ca(this.sliceSerialize(c)).toLowerCase()}function P(){const c=this.resume(),w=this.stack[this.stack.length-1];w.title=c}function K(){const c=this.resume(),w=this.stack[this.stack.length-1];w.url=c}function V(c){const w=this.stack[this.stack.length-1];if(!w.depth){const C=this.sliceSerialize(c).length;w.depth=C}}function f(){this.data.setextHeadingSlurpLineEnding=!0}function z(c){const w=this.stack[this.stack.length-1];w.depth=this.sliceSerialize(c).codePointAt(0)===61?1:2}function G(){this.data.setextHeadingSlurpLineEnding=void 0}function R(c){const C=this.stack[this.stack.length-1].children;let M=C[C.length-1];(!M||M.type!=="text")&&(M=Lt(),M.position={start:ba(c.start),end:void 0},C.push(M)),this.stack.push(M)}function H(c){const w=this.stack.pop();w.value+=this.sliceSerialize(c),w.position.end=ba(c.end)}function j(c){const w=this.stack[this.stack.length-1];if(this.data.atHardBreak){const C=w.children[w.children.length-1];C.position.end=ba(c.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(w.type)&&(R.call(this,c),H.call(this,c))}function A(){this.data.atHardBreak=!0}function U(){const c=this.resume(),w=this.stack[this.stack.length-1];w.value=c}function q(){const c=this.resume(),w=this.stack[this.stack.length-1];w.value=c}function L(){const c=this.resume(),w=this.stack[this.stack.length-1];w.value=c}function J(){const c=this.stack[this.stack.length-1];if(this.data.inReference){const w=this.data.referenceType||"shortcut";c.type+="Reference",c.referenceType=w,delete c.url,delete c.title}else delete c.identifier,delete c.label;this.data.referenceType=void 0}function W(){const c=this.stack[this.stack.length-1];if(this.data.inReference){const w=this.data.referenceType||"shortcut";c.type+="Reference",c.referenceType=w,delete c.url,delete c.title}else delete c.identifier,delete c.label;this.data.referenceType=void 0}function ra(c){const w=this.sliceSerialize(c),C=this.stack[this.stack.length-2];C.label=Qu(w),C.identifier=Ca(w).toLowerCase()}function da(){const c=this.stack[this.stack.length-1],w=this.resume(),C=this.stack[this.stack.length-1];if(this.data.inReference=!0,C.type==="link"){const M=c.children;C.children=M}else C.alt=w}function p(){const c=this.resume(),w=this.stack[this.stack.length-1];w.url=c}function ua(){const c=this.resume(),w=this.stack[this.stack.length-1];w.title=c}function pa(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function la(c){const w=this.resume(),C=this.stack[this.stack.length-1];C.label=w,C.identifier=Ca(this.sliceSerialize(c)).toLowerCase(),this.data.referenceType="full"}function ya(c){this.data.characterReferenceType=c.type}function Y(c){const w=this.sliceSerialize(c),C=this.data.characterReferenceType;let M;C?(M=it(w,C==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):M=Dn(w);const F=this.stack[this.stack.length-1];F.value+=M}function Ma(c){const w=this.stack.pop();w.position.end=ba(c.end)}function ca(c){H.call(this,c);const w=this.stack[this.stack.length-1];w.url=this.sliceSerialize(c)}function Pa(c){H.call(this,c);const w=this.stack[this.stack.length-1];w.url="mailto:"+this.sliceSerialize(c)}function Aa(){return{type:"blockquote",children:[]}}function Ka(){return{type:"code",lang:null,meta:null,value:""}}function It(){return{type:"inlineCode",value:""}}function Et(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ct(){return{type:"emphasis",children:[]}}function Kn(){return{type:"heading",depth:0,children:[]}}function Un(){return{type:"break"}}function Vn(){return{type:"html",value:""}}function Tt(){return{type:"image",title:null,url:"",alt:null}}function Gn(){return{type:"link",title:null,url:"",children:[]}}function qn(c){return{type:"list",ordered:c.type==="listOrdered",start:null,spread:c._spread,children:[]}}function Bt(c){return{type:"listItem",spread:c._spread,checked:null,children:[]}}function Mt(){return{type:"paragraph",children:[]}}function vt(){return{type:"strong",children:[]}}function Lt(){return{type:"text",value:""}}function Dt(){return{type:"thematicBreak"}}}function ba(a){return{line:a.line,column:a.column,offset:a.offset}}function ht(a,n){let e=-1;for(;++e<n.length;){const t=n[e];Array.isArray(t)?ht(a,t):el(a,t)}}function el(a,n){let e;for(e in n)if(kt.call(n,e))switch(e){case"canContainEols":{const t=n[e];t&&a[e].push(...t);break}case"transforms":{const t=n[e];t&&a[e].push(...t);break}case"enter":case"exit":{const t=n[e];t&&Object.assign(a[e],t);break}}}function xe(a,n){throw a?new Error("Cannot close `"+a.type+"` ("+za({start:a.start,end:a.end})+"): a different token (`"+n.type+"`, "+za({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+za({start:n.start,end:n.end})+") is still open")}function tl(a){const n=this;n.parser=e;function e(t){return al(t,tn(v(v({},n.data("settings")),a),{extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]}))}}function il(a,n){const e={type:"element",tagName:"blockquote",properties:{},children:a.wrap(a.all(n),!0)};return a.patch(n,e),a.applyData(n,e)}function rl(a,n){const e={type:"element",tagName:"br",properties:{},children:[]};return a.patch(n,e),[a.applyData(n,e),{type:"text",value:`
`}]}function ul(a,n){const e=n.value?n.value+`
`:"",t={};n.lang&&(t.className=["language-"+n.lang]);let i={type:"element",tagName:"code",properties:t,children:[{type:"text",value:e}]};return n.meta&&(i.data={meta:n.meta}),a.patch(n,i),i=a.applyData(n,i),i={type:"element",tagName:"pre",properties:{},children:[i]},a.patch(n,i),i}function ll(a,n){const e={type:"element",tagName:"del",properties:{},children:a.all(n)};return a.patch(n,e),a.applyData(n,e)}function sl(a,n){const e={type:"element",tagName:"em",properties:{},children:a.all(n)};return a.patch(n,e),a.applyData(n,e)}function ol(a,n){const e=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",t=String(n.identifier).toUpperCase(),i=Ba(t.toLowerCase()),r=a.footnoteOrder.indexOf(t);let u,l=a.footnoteCounts.get(t);l===void 0?(l=0,a.footnoteOrder.push(t),u=a.footnoteOrder.length):u=r+1,l+=1,a.footnoteCounts.set(t,l);const o={type:"element",tagName:"a",properties:{href:"#"+e+"fn-"+i,id:e+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(u)}]};a.patch(n,o);const m={type:"element",tagName:"sup",properties:{},children:[o]};return a.patch(n,m),a.applyData(n,m)}function ml(a,n){const e={type:"element",tagName:"h"+n.depth,properties:{},children:a.all(n)};return a.patch(n,e),a.applyData(n,e)}function gl(a,n){if(a.options.allowDangerousHtml){const e={type:"raw",value:n.value};return a.patch(n,e),a.applyData(n,e)}}function ct(a,n){const e=n.referenceType;let t="]";if(e==="collapsed"?t+="[]":e==="full"&&(t+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+t}];const i=a.all(n),r=i[0];r&&r.type==="text"?r.value="["+r.value:i.unshift({type:"text",value:"["});const u=i[i.length-1];return u&&u.type==="text"?u.value+=t:i.push({type:"text",value:t}),i}function dl(a,n){const e=String(n.identifier).toUpperCase(),t=a.definitionById.get(e);if(!t)return ct(a,n);const i={src:Ba(t.url||""),alt:n.alt};t.title!==null&&t.title!==void 0&&(i.title=t.title);const r={type:"element",tagName:"img",properties:i,children:[]};return a.patch(n,r),a.applyData(n,r)}function pl(a,n){const e={src:Ba(n.url)};n.alt!==null&&n.alt!==void 0&&(e.alt=n.alt),n.title!==null&&n.title!==void 0&&(e.title=n.title);const t={type:"element",tagName:"img",properties:e,children:[]};return a.patch(n,t),a.applyData(n,t)}function kl(a,n){const e={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};a.patch(n,e);const t={type:"element",tagName:"code",properties:{},children:[e]};return a.patch(n,t),a.applyData(n,t)}function hl(a,n){const e=String(n.identifier).toUpperCase(),t=a.definitionById.get(e);if(!t)return ct(a,n);const i={href:Ba(t.url||"")};t.title!==null&&t.title!==void 0&&(i.title=t.title);const r={type:"element",tagName:"a",properties:i,children:a.all(n)};return a.patch(n,r),a.applyData(n,r)}function cl(a,n){const e={href:Ba(n.url)};n.title!==null&&n.title!==void 0&&(e.title=n.title);const t={type:"element",tagName:"a",properties:e,children:a.all(n)};return a.patch(n,t),a.applyData(n,t)}function bl(a,n,e){const t=a.all(n),i=e?fl(e):bt(n),r={},u=[];if(typeof n.checked=="boolean"){const s=t[0];let d;s&&s.type==="element"&&s.tagName==="p"?d=s:(d={type:"element",tagName:"p",properties:{},children:[]},t.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),r.className=["task-list-item"]}let l=-1;for(;++l<t.length;){const s=t[l];(i||l!==0||s.type!=="element"||s.tagName!=="p")&&u.push({type:"text",value:`
`}),s.type==="element"&&s.tagName==="p"&&!i?u.push(...s.children):u.push(s)}const o=t[t.length-1];o&&(i||o.type!=="element"||o.tagName!=="p")&&u.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:r,children:u};return a.patch(n,m),a.applyData(n,m)}function fl(a){let n=!1;if(a.type==="list"){n=a.spread||!1;const e=a.children;let t=-1;for(;!n&&++t<e.length;)n=bt(e[t])}return n}function bt(a){const n=a.spread;return n==null?a.children.length>1:n}function yl(a,n){const e={},t=a.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(e.start=n.start);++i<t.length;){const u=t[i];if(u.type==="element"&&u.tagName==="li"&&u.properties&&Array.isArray(u.properties.className)&&u.properties.className.includes("task-list-item")){e.className=["contains-task-list"];break}}const r={type:"element",tagName:n.ordered?"ol":"ul",properties:e,children:a.wrap(t,!0)};return a.patch(n,r),a.applyData(n,r)}function xl(a,n){const e={type:"element",tagName:"p",properties:{},children:a.all(n)};return a.patch(n,e),a.applyData(n,e)}function Sl(a,n){const e={type:"root",children:a.wrap(a.all(n))};return a.patch(n,e),a.applyData(n,e)}function wl(a,n){const e={type:"element",tagName:"strong",properties:{},children:a.all(n)};return a.patch(n,e),a.applyData(n,e)}function Pl(a,n){const e=a.all(n),t=e.shift(),i=[];if(t){const u={type:"element",tagName:"thead",properties:{},children:a.wrap([t],!0)};a.patch(n.children[0],u),i.push(u)}if(e.length>0){const u={type:"element",tagName:"tbody",properties:{},children:a.wrap(e,!0)},l=Bn(n.children[1]),o=Xe(n.children[n.children.length-1]);l&&o&&(u.position={start:l,end:o}),i.push(u)}const r={type:"element",tagName:"table",properties:{},children:a.wrap(i,!0)};return a.patch(n,r),a.applyData(n,r)}function Al(a,n,e){const t=e?e.children:void 0,r=(t?t.indexOf(n):1)===0?"th":"td",u=e&&e.type==="table"?e.align:void 0,l=u?u.length:n.children.length;let o=-1;const m=[];for(;++o<l;){const d=n.children[o],h={},g=u?u[o]:void 0;g&&(h.align=g);let b={type:"element",tagName:r,properties:h,children:[]};d&&(b.children=a.all(d),a.patch(d,b),b=a.applyData(d,b)),m.push(b)}const s={type:"element",tagName:"tr",properties:{},children:a.wrap(m,!0)};return a.patch(n,s),a.applyData(n,s)}function jl(a,n){const e={type:"element",tagName:"td",properties:{},children:a.all(n)};return a.patch(n,e),a.applyData(n,e)}const Se=9,we=32;function Il(a){const n=String(a),e=/\r?\n|\r/g;let t=e.exec(n),i=0;const r=[];for(;t;)r.push(Pe(n.slice(i,t.index),i>0,!0),t[0]),i=t.index+t[0].length,t=e.exec(n);return r.push(Pe(n.slice(i),i>0,!1)),r.join("")}function Pe(a,n,e){let t=0,i=a.length;if(n){let r=a.codePointAt(t);for(;r===Se||r===we;)t++,r=a.codePointAt(t)}if(e){let r=a.codePointAt(i-1);for(;r===Se||r===we;)i--,r=a.codePointAt(i-1)}return i>t?a.slice(t,i):""}function El(a,n){const e={type:"text",value:Il(String(n.value))};return a.patch(n,e),a.applyData(n,e)}function Cl(a,n){const e={type:"element",tagName:"hr",properties:{},children:[]};return a.patch(n,e),a.applyData(n,e)}const Tl={blockquote:il,break:rl,code:ul,delete:ll,emphasis:sl,footnoteReference:ol,heading:ml,html:gl,imageReference:dl,image:pl,inlineCode:kl,linkReference:hl,link:cl,listItem:bl,list:yl,paragraph:xl,root:Sl,strong:wl,table:Pl,tableCell:jl,tableRow:Al,text:El,thematicBreak:Cl,toml:Va,yaml:Va,definition:Va,footnoteDefinition:Va};function Va(){}const ft=-1,nn=0,Fa=1,Xa=2,Rn=3,Fn=4,On=5,_n=6,yt=7,xt=8,Ae=typeof self=="object"?self:globalThis,Bl=(a,n)=>{const e=(i,r)=>(a.set(r,i),i),t=i=>{if(a.has(i))return a.get(i);const[r,u]=n[i];switch(r){case nn:case ft:return e(u,i);case Fa:{const l=e([],i);for(const o of u)l.push(t(o));return l}case Xa:{const l=e({},i);for(const[o,m]of u)l[t(o)]=t(m);return l}case Rn:return e(new Date(u),i);case Fn:{const{source:l,flags:o}=u;return e(new RegExp(l,o),i)}case On:{const l=e(new Map,i);for(const[o,m]of u)l.set(t(o),t(m));return l}case _n:{const l=e(new Set,i);for(const o of u)l.add(t(o));return l}case yt:{const{name:l,message:o}=u;return e(new Ae[l](o),i)}case xt:return e(BigInt(u),i);case"BigInt":return e(Object(BigInt(u)),i);case"ArrayBuffer":return e(new Uint8Array(u).buffer,u);case"DataView":{const{buffer:l}=new Uint8Array(u);return e(new DataView(l),u)}}return e(new Ae[r](u),i)};return t},je=a=>Bl(new Map,a)(0),Ia="",{toString:Ml}={},{keys:vl}=Object,Na=a=>{const n=typeof a;if(n!=="object"||!a)return[nn,n];const e=Ml.call(a).slice(8,-1);switch(e){case"Array":return[Fa,Ia];case"Object":return[Xa,Ia];case"Date":return[Rn,Ia];case"RegExp":return[Fn,Ia];case"Map":return[On,Ia];case"Set":return[_n,Ia];case"DataView":return[Fa,e]}return e.includes("Array")?[Fa,e]:e.includes("Error")?[yt,e]:[Xa,e]},Ga=([a,n])=>a===nn&&(n==="function"||n==="symbol"),Ll=(a,n,e,t)=>{const i=(u,l)=>{const o=t.push(u)-1;return e.set(l,o),o},r=u=>{if(e.has(u))return e.get(u);let[l,o]=Na(u);switch(l){case nn:{let s=u;switch(o){case"bigint":l=xt,s=u.toString();break;case"function":case"symbol":if(a)throw new TypeError("unable to serialize "+o);s=null;break;case"undefined":return i([ft],u)}return i([l,s],u)}case Fa:{if(o){let h=u;return o==="DataView"?h=new Uint8Array(u.buffer):o==="ArrayBuffer"&&(h=new Uint8Array(u)),i([o,[...h]],u)}const s=[],d=i([l,s],u);for(const h of u)s.push(r(h));return d}case Xa:{if(o)switch(o){case"BigInt":return i([o,u.toString()],u);case"Boolean":case"Number":case"String":return i([o,u.valueOf()],u)}if(n&&"toJSON"in u)return r(u.toJSON());const s=[],d=i([l,s],u);for(const h of vl(u))(a||!Ga(Na(u[h])))&&s.push([r(h),r(u[h])]);return d}case Rn:return i([l,u.toISOString()],u);case Fn:{const{source:s,flags:d}=u;return i([l,{source:s,flags:d}],u)}case On:{const s=[],d=i([l,s],u);for(const[h,g]of u)(a||!(Ga(Na(h))||Ga(Na(g))))&&s.push([r(h),r(g)]);return d}case _n:{const s=[],d=i([l,s],u);for(const h of u)(a||!Ga(Na(h)))&&s.push(r(h));return d}}const{message:m}=u;return i([l,{name:o,message:m}],u)};return r},Ie=(a,{json:n,lossy:e}={})=>{const t=[];return Ll(!(n||e),!!n,new Map,t)(a),t},Qa=typeof structuredClone=="function"?(a,n)=>n&&("json"in n||"lossy"in n)?je(Ie(a,n)):structuredClone(a):(a,n)=>je(Ie(a,n));function Dl(a,n){const e=[{type:"text",value:"↩"}];return n>1&&e.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),e}function Nl(a,n){return"Back to reference "+(a+1)+(n>1?"-"+n:"")}function zl(a){const n=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",e=a.options.footnoteBackContent||Dl,t=a.options.footnoteBackLabel||Nl,i=a.options.footnoteLabel||"Footnotes",r=a.options.footnoteLabelTagName||"h2",u=a.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let o=-1;for(;++o<a.footnoteOrder.length;){const m=a.footnoteById.get(a.footnoteOrder[o]);if(!m)continue;const s=a.all(m),d=String(m.identifier).toUpperCase(),h=Ba(d.toLowerCase());let g=0;const b=[],x=a.footnoteCounts.get(d);for(;x!==void 0&&++g<=x;){b.length>0&&b.push({type:"text",value:" "});let B=typeof e=="string"?e:e(o,g);typeof B=="string"&&(B={type:"text",value:B}),b.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+h+(g>1?"-"+g:""),dataFootnoteBackref:"",ariaLabel:typeof t=="string"?t:t(o,g),className:["data-footnote-backref"]},children:Array.isArray(B)?B:[B]})}const E=s[s.length-1];if(E&&E.type==="element"&&E.tagName==="p"){const B=E.children[E.children.length-1];B&&B.type==="text"?B.value+=" ":E.children.push({type:"text",value:" "}),E.children.push(...b)}else s.push(...b);const S={type:"element",tagName:"li",properties:{id:n+"fn-"+h},children:a.wrap(s,!0)};a.patch(m,S),l.push(S)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:r,properties:tn(v({},Qa(u)),{id:"footnote-label"}),children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:a.wrap(l,!0)},{type:"text",value:`
`}]}}const St=function(a){if(a==null)return _l;if(typeof a=="function")return en(a);if(typeof a=="object")return Array.isArray(a)?Rl(a):Fl(a);if(typeof a=="string")return Ol(a);throw new Error("Expected function, string, or object as test")};function Rl(a){const n=[];let e=-1;for(;++e<a.length;)n[e]=St(a[e]);return en(t);function t(...i){let r=-1;for(;++r<n.length;)if(n[r].apply(this,i))return!0;return!1}}function Fl(a){const n=a;return en(e);function e(t){const i=t;let r;for(r in a)if(i[r]!==n[r])return!1;return!0}}function Ol(a){return en(n);function n(e){return e&&e.type===a}}function en(a){return n;function n(e,t,i){return!!(Hl(e)&&a.call(this,e,typeof t=="number"?t:void 0,i||void 0))}}function _l(){return!0}function Hl(a){return a!==null&&typeof a=="object"&&"type"in a}const wt=[],Kl=!0,Ee=!1,Ul="skip";function Vl(a,n,e,t){let i;typeof n=="function"&&typeof e!="function"?(t=e,e=n):i=n;const r=St(i),u=t?-1:1;l(a,void 0,[])();function l(o,m,s){const d=o&&typeof o=="object"?o:{};if(typeof d.type=="string"){const g=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(o.type+(g?"<"+g+">":""))+")"})}return h;function h(){let g=wt,b,x,E;if((!n||r(o,m,s[s.length-1]||void 0))&&(g=Gl(e(o,s)),g[0]===Ee))return g;if("children"in o&&o.children){const S=o;if(S.children&&g[0]!==Ul)for(x=(t?S.children.length:-1)+u,E=s.concat(S);x>-1&&x<S.children.length;){const B=S.children[x];if(b=l(B,x,E)(),b[0]===Ee)return b;x=typeof b[1]=="number"?b[1]:x+u}}return g}}}function Gl(a){return Array.isArray(a)?a:typeof a=="number"?[Kl,a]:a==null?wt:[a]}function Pt(a,n,e,t){let i,r,u;typeof n=="function"&&typeof e!="function"?(r=void 0,u=n,i=e):(r=n,u=e,i=t),Vl(a,r,l,i);function l(o,m){const s=m[m.length-1],d=s?s.children.indexOf(o):void 0;return u(o,d,s)}}const An={}.hasOwnProperty,ql={};function $l(a,n){const e=n||ql,t=new Map,i=new Map,r=new Map,u=v(v({},Tl),e.handlers),l={all:m,applyData:Yl,definitionById:t,footnoteById:i,footnoteCounts:r,footnoteOrder:[],handlers:u,one:o,options:e,patch:Wl,wrap:Xl};return Pt(a,function(s){if(s.type==="definition"||s.type==="footnoteDefinition"){const d=s.type==="definition"?t:i,h=String(s.identifier).toUpperCase();d.has(h)||d.set(h,s)}}),l;function o(s,d){const h=s.type,g=l.handlers[h];if(An.call(l.handlers,h)&&g)return g(l,s,d);if(l.options.passThrough&&l.options.passThrough.includes(h)){if("children"in s){const x=s,{children:E}=x,S=Jn(x,["children"]),B=Qa(S);return B.children=l.all(s),B}return Qa(s)}return(l.options.unknownHandler||Jl)(l,s,d)}function m(s){const d=[];if("children"in s){const h=s.children;let g=-1;for(;++g<h.length;){const b=l.one(h[g],s);if(b){if(g&&h[g-1].type==="break"&&(!Array.isArray(b)&&b.type==="text"&&(b.value=Ce(b.value)),!Array.isArray(b)&&b.type==="element")){const x=b.children[0];x&&x.type==="text"&&(x.value=Ce(x.value))}Array.isArray(b)?d.push(...b):d.push(b)}}}return d}}function Wl(a,n){a.position&&(n.position=Mi(a))}function Yl(a,n){let e=n;if(a&&a.data){const t=a.data.hName,i=a.data.hChildren,r=a.data.hProperties;if(typeof t=="string")if(e.type==="element")e.tagName=t;else{const u="children"in e?e.children:[e];e={type:"element",tagName:t,properties:{},children:u}}e.type==="element"&&r&&Object.assign(e.properties,Qa(r)),"children"in e&&e.children&&i!==null&&i!==void 0&&(e.children=i)}return e}function Jl(a,n){const e=n.data||{},t="value"in n&&!(An.call(e,"hProperties")||An.call(e,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:a.all(n)};return a.patch(n,t),a.applyData(n,t)}function Xl(a,n){const e=[];let t=-1;for(n&&e.push({type:"text",value:`
`});++t<a.length;)t&&e.push({type:"text",value:`
`}),e.push(a[t]);return n&&a.length>0&&e.push({type:"text",value:`
`}),e}function Ce(a){let n=0,e=a.charCodeAt(n);for(;e===9||e===32;)n++,e=a.charCodeAt(n);return a.slice(n)}function Te(a,n){const e=$l(a,n),t=e.one(a,void 0),i=zl(e),r=Array.isArray(t)?{type:"root",children:t}:t||{type:"root",children:[]};return i&&r.children.push({type:"text",value:`
`},i),r}function Ql(a,n){return a&&"run"in a?async function(e,t){const i=Te(e,v({file:t},n));await a.run(i,t)}:function(e,t){return Te(e,v({file:t},a||n))}}function Be(a){if(a)throw a}var Ya=Object.prototype.hasOwnProperty,At=Object.prototype.toString,Me=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,Le=function(n){return typeof Array.isArray=="function"?Array.isArray(n):At.call(n)==="[object Array]"},De=function(n){if(!n||At.call(n)!=="[object Object]")return!1;var e=Ya.call(n,"constructor"),t=n.constructor&&n.constructor.prototype&&Ya.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!e&&!t)return!1;var i;for(i in n);return typeof i=="undefined"||Ya.call(n,i)},Ne=function(n,e){Me&&e.name==="__proto__"?Me(n,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):n[e.name]=e.newValue},ze=function(n,e){if(e==="__proto__")if(Ya.call(n,e)){if(ve)return ve(n,e).value}else return;return n[e]},Zl=function a(){var n,e,t,i,r,u,l=arguments[0],o=1,m=arguments.length,s=!1;for(typeof l=="boolean"&&(s=l,l=arguments[1]||{},o=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});o<m;++o)if(n=arguments[o],n!=null)for(e in n)t=ze(l,e),i=ze(n,e),l!==i&&(s&&i&&(De(i)||(r=Le(i)))?(r?(r=!1,u=t&&Le(t)?t:[]):u=t&&De(t)?t:{},Ne(l,{name:e,newValue:a(s,u,i)})):typeof i!="undefined"&&Ne(l,{name:e,newValue:i}));return l};const on=Ue(Zl);function jn(a){if(typeof a!="object"||a===null)return!1;const n=Object.getPrototypeOf(a);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function as(){const a=[],n={run:e,use:t};return n;function e(...i){let r=-1;const u=i.pop();if(typeof u!="function")throw new TypeError("Expected function as last argument, not "+u);l(null,...i);function l(o,...m){const s=a[++r];let d=-1;if(o){u(o);return}for(;++d<i.length;)(m[d]===null||m[d]===void 0)&&(m[d]=i[d]);i=m,s?ns(s,l)(...m):u(null,...m)}}function t(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return a.push(i),n}}function ns(a,n){let e;return t;function t(...u){const l=a.length>u.length;let o;l&&u.push(i);try{o=a.apply(this,u)}catch(m){const s=m;if(l&&e)throw s;return i(s)}l||(o&&o.then&&typeof o.then=="function"?o.then(r,i):o instanceof Error?i(o):r(o))}function i(u,...l){e||(e=!0,n(u,...l))}function r(u){i(null,u)}}const oa={basename:es,dirname:ts,extname:is,join:rs,sep:"/"};function es(a,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');Ha(a);let e=0,t=-1,i=a.length,r;if(n===void 0||n.length===0||n.length>a.length){for(;i--;)if(a.codePointAt(i)===47){if(r){e=i+1;break}}else t<0&&(r=!0,t=i+1);return t<0?"":a.slice(e,t)}if(n===a)return"";let u=-1,l=n.length-1;for(;i--;)if(a.codePointAt(i)===47){if(r){e=i+1;break}}else u<0&&(r=!0,u=i+1),l>-1&&(a.codePointAt(i)===n.codePointAt(l--)?l<0&&(t=i):(l=-1,t=u));return e===t?t=u:t<0&&(t=a.length),a.slice(e,t)}function ts(a){if(Ha(a),a.length===0)return".";let n=-1,e=a.length,t;for(;--e;)if(a.codePointAt(e)===47){if(t){n=e;break}}else t||(t=!0);return n<0?a.codePointAt(0)===47?"/":".":n===1&&a.codePointAt(0)===47?"//":a.slice(0,n)}function is(a){Ha(a);let n=a.length,e=-1,t=0,i=-1,r=0,u;for(;n--;){const l=a.codePointAt(n);if(l===47){if(u){t=n+1;break}continue}e<0&&(u=!0,e=n+1),l===46?i<0?i=n:r!==1&&(r=1):i>-1&&(r=-1)}return i<0||e<0||r===0||r===1&&i===e-1&&i===t+1?"":a.slice(i,e)}function rs(...a){let n=-1,e;for(;++n<a.length;)Ha(a[n]),a[n]&&(e=e===void 0?a[n]:e+"/"+a[n]);return e===void 0?".":us(e)}function us(a){Ha(a);const n=a.codePointAt(0)===47;let e=ls(a,!n);return e.length===0&&!n&&(e="."),e.length>0&&a.codePointAt(a.length-1)===47&&(e+="/"),n?"/"+e:e}function ls(a,n){let e="",t=0,i=-1,r=0,u=-1,l,o;for(;++u<=a.length;){if(u<a.length)l=a.codePointAt(u);else{if(l===47)break;l=47}if(l===47){if(!(i===u-1||r===1))if(i!==u-1&&r===2){if(e.length<2||t!==2||e.codePointAt(e.length-1)!==46||e.codePointAt(e.length-2)!==46){if(e.length>2){if(o=e.lastIndexOf("/"),o!==e.length-1){o<0?(e="",t=0):(e=e.slice(0,o),t=e.length-1-e.lastIndexOf("/")),i=u,r=0;continue}}else if(e.length>0){e="",t=0,i=u,r=0;continue}}n&&(e=e.length>0?e+"/..":"..",t=2)}else e.length>0?e+="/"+a.slice(i+1,u):e=a.slice(i+1,u),t=u-i-1;i=u,r=0}else l===46&&r>-1?r++:r=-1}return e}function Ha(a){if(typeof a!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(a))}const ss={cwd:os};function os(){return"/"}function In(a){return!!(a!==null&&typeof a=="object"&&"href"in a&&a.href&&"protocol"in a&&a.protocol&&a.auth===void 0)}function ms(a){if(typeof a=="string")a=new URL(a);else if(!In(a)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+a+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(a.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return gs(a)}function gs(a){if(a.hostname!==""){const t=new TypeError('File URL host must be "localhost" or empty on darwin');throw t.code="ERR_INVALID_FILE_URL_HOST",t}const n=a.pathname;let e=-1;for(;++e<n.length;)if(n.codePointAt(e)===37&&n.codePointAt(e+1)===50){const t=n.codePointAt(e+2);if(t===70||t===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const mn=["history","path","basename","stem","extname","dirname"];class jt{constructor(n){let e;n?In(n)?e={path:n}:typeof n=="string"||ds(n)?e={value:n}:e=n:e={},this.cwd="cwd"in e?"":ss.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let t=-1;for(;++t<mn.length;){const r=mn[t];r in e&&e[r]!==void 0&&e[r]!==null&&(this[r]=r==="history"?[...e[r]]:e[r])}let i;for(i in e)mn.includes(i)||(this[i]=e[i])}get basename(){return typeof this.path=="string"?oa.basename(this.path):void 0}set basename(n){dn(n,"basename"),gn(n,"basename"),this.path=oa.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?oa.dirname(this.path):void 0}set dirname(n){Re(this.basename,"dirname"),this.path=oa.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?oa.extname(this.path):void 0}set extname(n){if(gn(n,"extname"),Re(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=oa.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){In(n)&&(n=ms(n)),dn(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?oa.basename(this.path,this.extname):void 0}set stem(n){dn(n,"stem"),gn(n,"stem"),this.path=oa.join(this.dirname||"",n+(this.extname||""))}fail(n,e,t){const i=this.message(n,e,t);throw i.fatal=!0,i}info(n,e,t){const i=this.message(n,e,t);return i.fatal=void 0,i}message(n,e,t){const i=new X(n,e,t);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function gn(a,n){if(a&&a.includes(oa.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+oa.sep+"`")}function dn(a,n){if(!a)throw new Error("`"+n+"` cannot be empty")}function Re(a,n){if(!a)throw new Error("Setting `"+n+"` requires `path` to be set too")}function ds(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const ps=function(a){const t=this.constructor.prototype,i=t[a],r=function(){return i.apply(r,arguments)};return Object.setPrototypeOf(r,t),r},ks={}.hasOwnProperty;class Hn extends ps{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=as()}copy(){const n=new Hn;let e=-1;for(;++e<this.attachers.length;){const t=this.attachers[e];n.use(...t)}return n.data(on(!0,{},this.namespace)),n}data(n,e){return typeof n=="string"?arguments.length===2?(hn("data",this.frozen),this.namespace[n]=e,this):ks.call(this.namespace,n)&&this.namespace[n]||void 0:n?(hn("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[e,...t]=this.attachers[this.freezeIndex];if(t[0]===!1)continue;t[0]===!0&&(t[0]=void 0);const i=e.call(n,...t);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const e=qa(n),t=this.parser||this.Parser;return pn("parse",t),t(String(e),e)}process(n,e){const t=this;return this.freeze(),pn("process",this.parser||this.Parser),kn("process",this.compiler||this.Compiler),e?i(void 0,e):new Promise(i);function i(r,u){const l=qa(n),o=t.parse(l);t.run(o,l,function(s,d,h){if(s||!d||!h)return m(s);const g=d,b=t.stringify(g,h);bs(b)?h.value=b:h.result=b,m(s,h)});function m(s,d){s||!d?u(s):r?r(d):e(void 0,d)}}}processSync(n){let e=!1,t;return this.freeze(),pn("processSync",this.parser||this.Parser),kn("processSync",this.compiler||this.Compiler),this.process(n,i),Oe("processSync","process",e),t;function i(r,u){e=!0,Be(r),t=u}}run(n,e,t){Fe(n),this.freeze();const i=this.transformers;return!t&&typeof e=="function"&&(t=e,e=void 0),t?r(void 0,t):new Promise(r);function r(u,l){const o=qa(e);i.run(n,o,m);function m(s,d,h){const g=d||n;s?l(s):u?u(g):t(void 0,g,h)}}}runSync(n,e){let t=!1,i;return this.run(n,e,r),Oe("runSync","run",t),i;function r(u,l){Be(u),i=l,t=!0}}stringify(n,e){this.freeze();const t=qa(e),i=this.compiler||this.Compiler;return kn("stringify",i),Fe(n),i(n,t)}use(n,...e){const t=this.attachers,i=this.namespace;if(hn("use",this.frozen),n!=null)if(typeof n=="function")o(n,e);else if(typeof n=="object")Array.isArray(n)?l(n):u(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function r(m){if(typeof m=="function")o(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[s,...d]=m;o(s,d)}else u(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function u(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(m.plugins),m.settings&&(i.settings=on(!0,i.settings,m.settings))}function l(m){let s=-1;if(m!=null)if(Array.isArray(m))for(;++s<m.length;){const d=m[s];r(d)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function o(m,s){let d=-1,h=-1;for(;++d<t.length;)if(t[d][0]===m){h=d;break}if(h===-1)t.push([m,...s]);else if(s.length>0){let[g,...b]=s;const x=t[h][1];jn(x)&&jn(g)&&(g=on(!0,x,g)),t[h]=[m,g,...b]}}}}const hs=new Hn().freeze();function pn(a,n){if(typeof n!="function")throw new TypeError("Cannot `"+a+"` without `parser`")}function kn(a,n){if(typeof n!="function")throw new TypeError("Cannot `"+a+"` without `compiler`")}function hn(a,n){if(n)throw new Error("Cannot call `"+a+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Fe(a){if(!jn(a)||typeof a.type!="string")throw new TypeError("Expected node, got `"+a+"`")}function Oe(a,n,e){if(!e)throw new Error("`"+a+"` finished async. Use `"+n+"` instead")}function qa(a){return cs(a)?a:new jt(a)}function cs(a){return!!(a&&typeof a=="object"&&"message"in a&&"messages"in a)}function bs(a){return typeof a=="string"||fs(a)}function fs(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const ys="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",_e=[],He={allowDangerousHtml:!0},xs=/^(https?|ircs?|mailto|xmpp)$/i,Ss=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function ws(a){const n=Ps(a),e=As(a);return js(n.runSync(n.parse(e),e),a)}function Ps(a){const n=a.rehypePlugins||_e,e=a.remarkPlugins||_e,t=a.remarkRehypeOptions?v(v({},a.remarkRehypeOptions),He):He;return hs().use(tl).use(e).use(Ql,t).use(n)}function As(a){const n=a.children||"",e=new jt;return typeof n=="string"&&(e.value=n),e}function js(a,n){const e=n.allowedElements,t=n.allowElement,i=n.components,r=n.disallowedElements,u=n.skipHtml,l=n.unwrapDisallowed,o=n.urlTransform||Is;for(const s of Ss)Object.hasOwn(n,s.from)&&(""+s.from+(s.to?"use `"+s.to+"` instead":"remove it")+ys+s.id,void 0);return Pt(a,m),zi(a,{Fragment:D.Fragment,components:i,ignoreInvalidStyle:!0,jsx:D.jsx,jsxs:D.jsxs,passKeys:!0,passNode:!0});function m(s,d,h){if(s.type==="raw"&&h&&typeof d=="number")return u?h.children.splice(d,1):h.children[d]={type:"text",value:s.value},d;if(s.type==="element"){let g;for(g in un)if(Object.hasOwn(un,g)&&Object.hasOwn(s.properties,g)){const b=s.properties[g],x=un[g];(x===null||x.includes(s.tagName))&&(s.properties[g]=o(String(b||""),g,s))}}if(s.type==="element"){let g=e?!e.includes(s.tagName):r?r.includes(s.tagName):!1;if(!g&&t&&typeof d=="number"&&(g=!t(s,d,h)),g&&h&&typeof d=="number")return l&&s.children?h.children.splice(d,1,...s.children):h.children.splice(d,1),d}}}function Is(a){const n=a.indexOf(":"),e=a.indexOf("?"),t=a.indexOf("#"),i=a.indexOf("/");return n===-1||i!==-1&&n>i||e!==-1&&n>e||t!==-1&&n>t||xs.test(a.slice(0,n))?a:""}const Ke=[{id:1,title:"Cara Memaksimalkan Pertumbuhan Benur dengan Nutrisi yang Tepat",date:"2025-08-01",summary:"Kenali pentingnya pakan benur dan strategi pemberian nutrisi di tahap awal budidaya udang untuk hasil panen yang maksimal.",slug:"cara-memaksimalkan-pertumbuhan-benur",category:"Shrimp Farming",readTime:"3 min read",image:"/BlogImage/Banner toko.png",content:`
## Pentingnya Nutrisi di Tahap Awal Budidaya Benur

Tahapan awal dalam budidaya udang, khususnya pada masa benur (larva udang), merupakan fase kritis yang menentukan keberhasilan budidaya secara keseluruhan. Di sinilah peran **pakan benur** berkualitas dan strategi pemberian nutrisi menjadi sangat penting.

![Pakan Benur Berkualitas](/BlogImage/pakan-benur.png)

### Kenapa Nutrisi Itu Menentukan?

Dengan nutrisi yang optimal sejak dini, kamu bisa mendapatkan manfaat seperti:

- ✅ Tingkat kelangsungan hidup benur yang tinggi
- ✅ Pertumbuhan yang lebih cepat dan merata
- ✅ Efisiensi pakan yang lebih baik
- ✅ Daya tahan terhadap penyakit yang lebih tinggi

### Strategi Memberikan Pakan Benur

Berikut adalah beberapa strategi pemberian pakan benur yang terbukti efektif:

1. **Gunakan pakan mikro berkualitas tinggi**  
   Pilih pakan dengan kandungan protein tinggi dan mudah dicerna untuk mendukung pertumbuhan awal.

2. **Frekuensi pemberian yang konsisten**  
   Berikan pakan dalam jumlah kecil namun sering (3–5 kali per hari) untuk menghindari overfeeding dan menjaga kualitas air.

3. **Pantau kualitas air dan stres benur**  
   Nutrisi tidak akan maksimal jika lingkungan tidak mendukung. Pastikan kadar oksigen, suhu, dan amonia terjaga dengan baik.

4. **Kombinasi pakan alami dan buatan**  
   Untuk fase awal, paduan antara fitoplankton alami dan pakan mikro buatan akan memberikan hasil optimal.

> 💡 _Pakan itu bukan cuma soal memberi makan, tapi juga soal strategi jangka panjang untuk budidaya yang berkelanjutan._

---

Dengan memahami pentingnya pakan benur dan strategi nutrisi sejak dini, kamu dapat meningkatkan hasil panen secara signifikan dan menjaga kualitas pertumbuhan benur hingga tahap juvenil.

#GrowWithNutrition #PakanBenur #BudidayaUdang
`},{id:2,title:"Panduan Memberi Pakan Benih Ikan dengan Benar",date:"2024-01-10",summary:"Panduan lengkap memberi pakan benih ikan dengan nutrisi yang tepat di waktu yang tepat untuk pertumbuhan optimal.",slug:"panduan-pakan-benih-ikan",category:"Fish Farming",readTime:"7 min read",image:"/BlogImage/fish-food-1204648_960_720.jpg",content:`
# Panduan Memberi Pakan Benih Ikan dengan Benar

![Pakan Benih Ikan](/BlogImage/pelet-ikan.png)

Memberi pakan benih ikan bukan hanya soal frekuensi, tapi juga tentang kualitas nutrisi dan teknik yang digunakan. Benih ikan yang sehat akan tumbuh lebih cepat dan tahan terhadap penyakit.

## Pentingnya Nutrisi untuk Benih

Nutrisi yang seimbang memberikan:
- Daya tahan tubuh yang lebih kuat
- Pertumbuhan seragam
- Efisiensi pakan lebih baik

## Kapan dan Bagaimana Memberi Pakan?

1. **Berikan pakan 4–6 kali sehari** dalam porsi kecil.
2. Gunakan pakan berbentuk crumble atau micro pellet.
3. Pantau respon makan ikan setiap pemberian.

## Tips Memilih Pakan

- Pilih pakan khusus benih dengan kandungan protein > 40%.
- Hindari pakan tenggelam total agar tidak mengotori air.
- Pastikan pakan tidak kadaluarsa.

_“Pakan yang baik, diberikan dengan cara yang tepat, adalah kunci panen ikan yang sehat.”_
`},{id:3,title:"Akuakultur Berkelanjutan: Masa Depan Budidaya Laut",date:"2024-01-05",summary:"Mengenal praktik akuakultur yang ramah lingkungan untuk keberlanjutan jangka panjang.",slug:"akuakultur-berkelanjutan",category:"Sustainability",readTime:"6 min read",image:"/BlogImage/Hero_cropped-1900x653.jpg",content:`
# Akuakultur Berkelanjutan: Masa Depan Budidaya Laut

![Akuakultur Berkelanjutan](/BlogImage/tambak-udang-aceh-tamiang-perikanan-budidaya.jpeg)

Seiring meningkatnya permintaan pangan laut, praktik budidaya berkelanjutan menjadi semakin penting. Akuakultur berkelanjutan memastikan produksi yang efisien tanpa merusak ekosistem.

## Prinsip Dasar Akuakultur Berkelanjutan

- Mengurangi limbah budidaya
- Penggunaan pakan ramah lingkungan
- Menjaga keseimbangan ekosistem perairan

## Langkah Nyata untuk Petambak

1. Gunakan pakan berkualitas tinggi agar tidak banyak sisa.
2. Terapkan sistem bioflok atau resirkulasi air.
3. Pilih lokasi budidaya yang minim dampak lingkungan.

_Dengan budidaya yang bertanggung jawab, laut tetap lestari dan bisnis tetap berkelanjutan._
`},{id:4,title:"Manajemen Kualitas Air dalam Akuakultur",date:"2023-12-28",summary:"Memahami pentingnya kualitas air dalam kesuksesan budidaya dan bagaimana nutrisi turut berpengaruh.",slug:"manajemen-kualitas-air",category:"Farm Management",readTime:"8 min read",image:"/BlogImage/istockphoto-1414455321-612x612.jpg",content:`
# Manajemen Kualitas Air dalam Akuakultur

![Kualitas Air Budidaya](/BlogImage/istockphoto-1133379498-612x612.jpg)

Kualitas air adalah fondasi dari akuakultur yang sukses. Air yang bersih dan stabil menjamin kesehatan benur dan benih ikan sepanjang siklus budidaya.

## Parameter Penting yang Harus Dipantau

- **Suhu:** Ideal antara 28–30°C
- **pH:** 7,5 – 8,5
- **DO (Oksigen Terlarut):** > 5 mg/L
- **Amonia dan Nitrit:** < 0,1 mg/L

## Peran Nutrisi terhadap Kualitas Air

- Pakan berkualitas tinggi akan mengurangi sisa dan limbah.
- Frekuensi pemberian yang tepat menghindari pencemaran.
- Prebiotik dalam pakan membantu menjaga stabilitas mikroba.

_Semakin stabil air tambak, semakin minim risiko stres dan penyakit._
`},{id:5,title:"3 Rekomendasi Pakan Benur agar Tumbuh Optimal",date:"2025-08-09",summary:"Panduan memilih pakan benur terbaik dari INVE Series Frippak, Series Lansy, dan Bio-Marine Series Artemac untuk pertumbuhan benur yang sehat dan cepat.",slug:"rekomendasi-pakan-benur-terbaik",category:"Nutrition",readTime:"5 min read",content:`
# 3 Rekomendasi Pakan Benur untuk budidaya Benur F1, Benur Windu dan Vannamei Lokal

Memilih **pakan benur** yang tepat adalah salah satu faktor terpenting dalam keberhasilan budidaya udang, terutama udang vaname. Pakan yang berkualitas membantu benur tumbuh lebih cepat, sehat, dan memiliki daya tahan tinggi terhadap penyakit.

Pada artikel ini, kami akan membahas **3 rekomendasi seri pakan terbaik** untuk benur, yaitu:
- **INVE Series Frippak**
- **INVE Series Lansy**
- **Bio-Marine Artemac**

---

## Pentingnya Pakan Berkualitas untuk Benur

Benur adalah tahap awal kehidupan udang yang sangat sensitif terhadap kualitas nutrisi. Pakan yang tepat dapat memberikan:
- **Pertumbuhan lebih cepat** dan seragam
- **Daya tahan tubuh kuat**
- **Kualitas panen lebih baik**
- **Efisiensi biaya pakan**

> Pakan yang tidak sesuai kebutuhan benur bisa mengakibatkan pertumbuhan lambat dan tingkat kematian tinggi.

---

## 1. INVE Series Frippak

![INVE Series Frippak](/BlogImage/Inve-FRiPPAK-Series-Banner.png)

**INVE Frippak** adalah salah satu pakan mikro terbaik yang digunakan di berbagai hatchery profesional di dunia.  
Keunggulan utamanya adalah **kandungan nutrisi lengkap** dan **ukuran partikel yang konsisten** sehingga mudah dicerna oleh benur.

**Keunggulan:**
- Kandungan **protein tinggi (>55%)**
- Diperkaya **vitamin dan mineral esensial**
- Bentuk partikel tidak mudah hancur di air
- Cocok untuk tahap **nauplius hingga PL** (Post Larva)

**Tips penggunaan:**
- Gunakan Frippak CAR #1, Frippak CD #2, Frippak PL + 150 dan Froppak PL + 300 sesuai tahap pertumbuhan benur
- Simpan di tempat kering dan sejuk untuk menjaga kualitas

---

## 2. INVE Series Lansy

![Series Lansy](/BlogImage/Inve-Lansy-Series-Banner.png)

**Series Lansy** dikenal dengan formulasi **high-performance diet** yang dibuat khusus untuk benur dan larva udang.  
Pakan ini diformulasikan agar mendekati pakan alami baik dari segi tekstur maupun kandungan gizi.

**Keunggulan:**
- Kandungan **lipid & HUFA** yang mendukung pertumbuhan optimal
- Formulasi mudah dicerna
- Mengandung antioksidan untuk meningkatkan kekebalan tubuh

**Tahapan penggunaan:**
- Lansy ZM, Lansy MPL, dan Lansy PL sesuai ukuran benur
- Cocok untuk **fase awal hingga akhir larva**

---

## 3. Aquafauna Bio-Marine Series Artemac

![BioMarine x OSI](/BlogImage/Biomarine-Artemac-Series.png)

Produk **BioMarine - Artemac menawarkan pakan hidup dan pengganti pakan alami berkualitas tinggi, seperti:
- **Artemac No 0,1,2**: Pakan berkualitas premium yang berisi pakan bubuk dengan campuran artemia

**Keunggulan:**
- Pakan alami yang disukai benur
- Kaya akan **asam lemak esensial**
- Mendukung perkembangan organ pencernaan
- Meningkatkan tingkat kelangsungan hidup (survival rate)

**Penggunaan efektif:**
- Kombinasikan pakan ini dengan pakan buatan untuk hasil terbaik
- Ideal pada tahap awal larva hingga PL10

---

## Cara Memilih Pakan Benur yang Tepat

Berikut panduan singkat untuk memilih pakan benur berkualitas:
1. **Perhatikan kandungan protein** minimal 50–55%.
2. **Pilih pakan sesuai tahap pertumbuhan** benur.
3. **Periksa tanggal kadaluarsa** dan kondisi kemasan.
4. Kombinasikan **pakan buatan** dan **pakan alami**.

---

## Kesimpulan

Memilih pakan benur yang tepat seperti **INVE Frippak**, **INVE Lansy**, atau **Bio-Marine Artemac** akan membantu Anda mencapai pertumbuhan optimal dan meningkatkan keberhasilan budidaya.  
Pastikan selalu mengikuti dosis dan jadwal pemberian yang sesuai agar benur mendapatkan nutrisi yang maksimal.

---

_“Pakan yang baik, diberikan dengan cara yang tepat, adalah kunci panen udang yang sukses.”_

#GrowWithNutrition #PakanBenur #BudidayaUdang
  `},{id:6,title:"Penyakit Umum dalam Budidaya dan Cara Pencegahannya",date:"2023-12-15",summary:"Kenali penyakit umum pada ikan dan udang serta bagaimana nutrisi dapat membantu mencegahnya.",slug:"penyakit-dalam-budidaya",category:"Health & Disease",readTime:"9 min read",image:"/BlogImage/istockphoto-1491029995-612x612.jpg",content:`
# Penyakit Umum dalam Budidaya dan Cara Pencegahannya

![Penyakit Budidaya](/BlogImage/istockphoto-1652115952-612x612.jpg)

Penyakit bisa menjadi mimpi buruk dalam budidaya. Oleh karena itu, deteksi dini dan pencegahan adalah hal paling penting.

## Jenis Penyakit Umum

- **Vibriosis** (bakteri): Menyerang udang dan ikan.
- **White Spot**: Umum pada udang.
- **Aeromonas**: Infeksi bakteri pada ikan air tawar.

## Strategi Pencegahan

1. Jaga kualitas air tetap ideal.
2. Gunakan benih sehat dan bersertifikat.
3. Pakan berkualitas tinggi untuk imunitas optimal.
4. Hindari overstocking.

_Pencegahan lebih murah daripada pengobatan—mulailah dari nutrisi dan manajemen yang baik._
`},{id:7,title:"Indonesia Jadi Tuan Rumah APA 2024: Peluang Emas Akuakultur Nasional",date:"2023-12-15",summary:"Indonesia kembali dipercaya sebagai tuan rumah ajang akbar Asian Pacific Aquaculture (APA) 2024",slug:"asian-pacific-aquaculture-2024-indonesia",category:"Konferensi",readTime:"5 min read",image:"/BlogImage/maxresdefault.jpg",content:`

Indonesia kembali dipercaya sebagai tuan rumah ajang akbar Asian Pacific Aquaculture (APA) 2024, konferensi dan pameran akuakultur terbesar se-Asia Pasifik. Acara ini akan diselenggarakan di Surabaya, Jawa Timur, dan menjadi kali kedua Indonesia menjadi tuan rumah setelah kesuksesan APA 2016.

![Pakan Benur Berkualitas](/BlogImage/hq720.jpg)

### Kenapa Indonesia Dipilih Lagi?

Menurut Direktur Jenderal Perikanan Budidaya KKP, Tb Haeru Rahayu, pemilihan Indonesia bukan tanpa alasan. Sebagai salah satu produsen akuakultur terbesar di dunia, Indonesia memiliki potensi sumber daya alam yang melimpah dan pasar yang sangat menjanjikan.
"Indonesia adalah magnet bagi investor luar negeri di sektor perikanan. Potensi budidayanya luar biasa besar," jelasnya.
Dengan digelarnya APA 2024, diharapkan akan ada peningkatan investasi sekaligus penguatan pasar domestik, yang akhirnya bisa menjadi pengungkit pertumbuhan ekonomi nasional.

### Surabaya Jadi Tuan Rumah

Kota Surabaya kembali dipilih sebagai lokasi penyelenggaraan. Selain memiliki fasilitas lengkap dan akses transportasi yang memadai, Surabaya juga dikenal sebagai pusat budidaya ikan dan rumah bagi banyak perguruan tinggi yang fokus di bidang perikanan.
Surabaya dinilai mampu menampung ribuan peserta dan pengunjung. Acara ini juga diharapkan menggugah partisipasi masyarakat luas, tidak hanya di Jawa Timur, tetapi juga di seluruh Indonesia.

### Tentang APA 2024: “Aquaculture - Driving the Blue Economy”

APA 2024 akan diselenggarakan oleh World Aquaculture Society bekerja sama dengan Ditjen Perikanan Budidaya KKP dan PT Tirta Anugrah Agung. Tema yang diangkat adalah “Aquaculture - Driving the Blue Economy”, menekankan pentingnya sektor budidaya dalam pembangunan ekonomi berbasis kelautan.

### Apa yang Bisa Diharapkan?
1. **232 booth pameran dari berbagai negara**

2. **6.000 pengunjung dari dalam dan luar negeri**

3. **Sesi konferensi 3 hari, membahas:**
- ✅ Teknologi budidaya udang, ikan air tawar, ikan laut, hingga rumput laut
- ✅ Pakan, sistem budidaya, manajemen penyakit & lingkungan
- ✅ Tren global dan solusi inovatif industri akuakultur

### Harapan untuk Masa Depan Budidaya Indonesia

Menteri Kelautan dan Perikanan, Sakti Wahyu Trenggono, menyampaikan bahwa Indonesia memiliki visi besar menjadikan komoditas budidaya seperti udang, lobster, kepiting, tilapia, dan rumput laut sebagai penguasa pasar ekspor global dalam 10–20 tahun ke depan.
APA 2024 akan menjadi panggung strategis untuk memperkuat posisi Indonesia di mata dunia sebagai pusat inovasi dan produksi akuakultur yang berkelanjutan.

### Penutup
Dengan menjadi tuan rumah APA 2024, Indonesia tidak hanya menunjukkan kekuatannya di bidang perikanan budidaya, tetapi juga membuka peluang kolaborasi internasional yang luas. Dari teknologi hingga pasar, acara ini akan mempertemukan pelaku industri, akademisi, investor, dan masyarakat untuk membentuk masa depan akuakultur Indonesia.

#GrowWithNutrition #PakanBenur #BudidayaUdang
`},{id:8,title:"Panduan Lengkap Budidaya Udang Vaname untuk Pemula",date:"2025-10-29",summary:"Langkah memulai budidaya udang vaname dari skala kecil: persiapan kolam, sterilisasi, planktonisasi, tebar benur, pakan, kualitas air, bioflok, serta simulasi keuntungan.",slug:"panduan-budidaya-udang-vaname-pemula",category:"Farming",readTime:"6 min read",image:"/BlogImage/udang-vaname.png",content:`
# Panduan Lengkap Budidaya Udang Vaname untuk Pemula
Udang vannamei (Litopenaeus vannamei), atau udang putih, kini menjadi primadona dalam dunia akuakultur. Daya tahan tinggi, masa panen singkat, dan harga yang stabil membuat udang ini jadi pilihan utama petambak di Indonesia.
Tapi bagaimana cara memulai budidaya udang vaname yang efisien, bahkan dari skala kecil? Artikel ini merangkum langkah-langkah penting, tips praktis, dan simulasi keuntungan yang bisa kamu terapkan.

---

## Kenapa Memilih Udang Vaname?
- ✅ Cepat panen → 100–110 hari sejak tebar benur.
- ✅Sintasan tinggi → tingkat hidup relatif stabil.
- ✅Adaptif → mampu bertahan pada suhu dan salinitas yang bervariasi.
- ✅Permintaan tinggi → pasar lokal & ekspor terus tumbuh.

Menurut data BPS, konsumsi udang nasional mengalami peningkatan signifikan dalam beberapa tahun terakhir. Bahkan pemerintah menargetkan Indonesia menjadi eksportir udang nomor 1 dunia. Ini menunjukkan bahwa usaha budidaya udang vannamei adalah peluang bisnis yang menjanjikan.

---

## Langkah-Langkah Cara Budidaya Udang Vannamei
### 1. Persiapan Lahan & Kolam
- ✅ Kolam bisa fleksibel, dari skala kecil hingga besar.
- ✅Gunakan air laut atau payau dengan salinitas 15–30 ppt.
- ✅ Sediakan kolam utama, kolam tandon, dan kolam outlet.
- ✅ Pasang pompa & aerator (jet bubble, kincir, atau nanobubble).

### 2. Sterilisasi Kolam
- ✅ Bersihkan dan sterilisasi dasar kolam serta air sebelum tebar benur.
- ✅ Gunakan bahan aman, tanpa residu berbahaya.

Tujuan: mencegah masuknya bakteri patogen sejak awal.

### 3. Tumbuhkan Plankton & Mikroorganisme
- ✅ Plankton alami jadi pakan awal benur.
- ✅ Bakteri dekomposer membantu menjaga kualitas air.
- ✅ Proses planktonisasi dilakukan ±5–7 hari sebelum tebar.

---

## Tebar Benur: Tahap Kritis Budidaya
### Ciri Benur Berkualitas
- ✅ Ukuran minimal 0,8 cm
- ✅ Gerak aktif & responsif
- ✅ Bersertifikat SPF (Specific Pathogen Free)
- ✅ Lolos uji bolitas & PCR

### Padat Tebar Ideal
- ✅ Intensif: 75–100 ekor/m²
- ✅ Tradisional: 5–8 ekor/m²
- ✅ Sesuaikan dengan sistem tambak & manajemen yang tersedia.

---

## Pakan & Manajemen Kesehatan
### Jenis Pakan
- ✅ 0–15 hari → pakan tepung
- ✅ 16–45 hari → crumble
- ✅ 45 hari → pelet

Gunakan pakan berkualitas tinggi, stabil di air, dan bebas patogen. Atur jumlah pakan sesuai umur & berat udang untuk mencegah limbah berlebih.

### Pemantauan Kualitas Air
- ✅ Parameter penting: DO, pH, suhu, salinitas, kecerahan.
- ✅ Gunakan alat: DO meter, pH meter, refraktometer.


### Probiotik & Sistem Bioflok
- ✅ Bioflok → meningkatkan efisiensi pakan & menjaga kualitas air.
- ✅ Probiotik → menekan bakteri jahat & mempercepat dekomposisi limbah.

---

## Panen & Simulasi Keuntungan
### Contoh Simulasi (Kolam 1 Ha, Sistem Tradisional)
- ✅ Padat tebar: 80.000 ekor
- ✅ Tingkat hidup (70–80%): 56.000–64.000 ekor
- ✅ Berat rata-rata: ±12–15 g → total biomassa 700–900 kg
- ✅ Harga jual (size kecil): Rp35.000–40.000/kg
- ✅ Omzet kotor: ±Rp25–36 juta
- ✅ Modal (kolam + operasional): ±Rp20 juta

Dengan manajemen yang baik, budidaya masih berpotensi balik modal bahkan memberikan keuntungan pada siklus pertama.
(Catatan: hasil panen sangat bergantung pada kualitas benur, pakan, manajemen air, dan kondisi lingkungan. Angka di atas hanya contoh perhitungan sederhana.)

---

## Penutup
Budidaya udang vaname bisa dimulai dari skala kecil hingga skala industri. Kuncinya ada pada manajemen air, pakan, dan kesehatan benur. Dengan penerapan teknologi modern seperti bioflok dan probiotik, hasil panen bisa lebih maksimal sekaligus menjaga ekosistem tambak tetap sehat.
Ingin mulai budidaya? Mulailah dengan benur sehat, pakan berkualitas, dan manajemen yang konsisten.
_Disclaimer: Informasi ini bersifat edukasi dan bukan jaminan hasil. Keberhasilan budidaya sangat dipengaruhi faktor teknis dan lingkungan._
#Vaname #Akuakultur #BudidayaUdang
  `},{id:9,title:"Uji Bolitas dan PCR: Standar Kualitas Benur Udang",date:"2025-10-29",summary:"Pentingnya uji bolitas dan PCR untuk memastikan benur udang sehat, bebas patogen, dan siap tebar di tambak dengan risiko penyakit rendah.",slug:"uji-bolitas-pcr-benur-udang",category:"Quality Control",readTime:"5 min read",image:"/BlogImage/zoea-phase.png",content:`
# Uji Bolitas dan PCR: Standar Kualitas Benur Udang
Salah satu tahap krusial sebelum menebar benur udang ke tambak adalah memastikan kondisinya benar-benar sehat. Benur yang tampak baik secara fisik belum tentu bebas dari masalah internal atau infeksi tersembunyi. Karena itu, hatchery maupun petambak biasanya menggunakan dua metode pemeriksaan: uji bolitas dan PCR (Polymerase Chain Reaction). Keduanya memberikan gambaran menyeluruh mengenai kondisi fisiologis dan potensi penyakit pada benur.

---

## Apa Itu Bolitas dan Mengapa Perlu Dicek?
Bolitas adalah kondisi abnormal pada hepatopankreas benur (organ pencernaan utama), ditandai dengan adanya gumpalan kecil berbentuk bulat. Gumpalan ini terbentuk akibat akumulasi sel epitel yang terlepas dari jaringan.
Kenapa ini penting? Karena munculnya bolitas sering menjadi indikasi awal adanya masalah metabolisme atau stres pada benur. Jika dibiarkan, hal ini dapat memengaruhi pencernaan, daya tahan tubuh, dan nafsu makan, yang pada akhirnya menurunkan tingkat kelangsungan hidup.
Gejala umum yang sering diamati pada benur dengan bolitas adalah:
- Aktivitas berenang yang melemah
- Nafsu makan berkurang
- Kerentanan lebih tinggi terhadap penyakit

---

## Jenis Uji Bolitas
Secara umum, terdapat dua jenis pemeriksaan bolitas yang dilakukan di hatchery:
**BHP (Bolitas Hepatopankreas)**: fokus pada organ hepatopankreas, yaitu pusat pencernaan dan metabolisme.
**BGI (Bolitas Gastrointestinal)**: memeriksa bagian saluran usus.
Standar ideal benur sehat biasanya adalah 0% bolitas, karena organ pencernaan harus berfungsi optimal. Bila hasil pemeriksaan menunjukkan persentase bolitas tinggi (misalnya lebih dari 50%), benur tersebut sebaiknya tidak digunakan untuk penebaran karena berisiko gagal tumbuh.

---

## PCR: Deteksi Patogen Lebih Dalam
Jika uji bolitas menilai kondisi fisik organ, PCR (Polymerase Chain Reaction) bekerja di tingkat molekuler. Dengan metode ini, materi genetik dari patogen dapat diperbanyak dan dideteksi, bahkan pada jumlah yang sangat kecil.
Teknologi qPCR (quantitative PCR) kini banyak digunakan di hatchery modern karena mampu mendeteksi keberadaan patogen sebelum benur menunjukkan gejala klinis. Beberapa patogen yang umum diuji antara lain:
- Bakteri Vibrio sp.
- Bakteri mirip ricketsia (RLB)
- Virus atau mikroorganisme lain yang berpotensi menginfeksi benur
Pemeriksaan PCR tetap direkomendasikan meskipun benur sudah memiliki sertifikat SPF (Specific Pathogen Free) atau SPR (Specific Pathogen Resistant). Hal ini untuk memastikan tidak ada kontaminasi silang yang mungkin terjadi selama proses pemeliharaan di hatchery.

---

## Keunggulan PCR Dibanding Uji Fisik Saja
**Lebih presisi**: PCR mampu mengidentifikasi keberadaan patogen secara spesifik, bukan hanya gejala umum.
**Deteksi dini**: Patogen bisa terdeteksi bahkan sebelum benur tampak sakit.
**Data kuantitatif**: Dengan qPCR, hasil bisa menunjukkan seberapa banyak kontaminasi yang ada, bukan hanya "positif" atau "negatif".
Dengan keunggulan ini, petambak bisa membuat keputusan lebih cepat dan akurat untuk mencegah kerugian lebih besar.

---

## Kombinasi Keduanya untuk Hasil Maksimal
Uji bolitas dan PCR bukan metode yang saling menggantikan, melainkan saling melengkapi.
**Bolitas** memberikan gambaran visual mengenai kondisi organ pencernaan benur.
**PCR** memastikan benur bebas dari patogen berbahaya yang mungkin tidak terlihat dari luar.
Dengan menggabungkan keduanya, petambak bisa memilih benur yang tidak hanya terlihat sehat, tetapi juga benar-benar siap tumbuh optimal di tambak dengan risiko penyakit yang lebih rendah.

---

## Kesimpulan
Memastikan benur berkualitas adalah investasi awal yang menentukan keberhasilan budidaya. Uji bolitas membantu menilai kesehatan organ pencernaan, sementara PCR memberikan kepastian bahwa benur bebas dari patogen berbahaya.
Keduanya bersama-sama memberikan data yang dapat diandalkan untuk mengurangi risiko, meningkatkan survival rate, dan menunjang produktivitas tambak. Dengan langkah seleksi yang tepat sejak awal, petambak bisa memulai budidaya dengan lebih percaya diri dan berpeluang besar mencapai hasil panen yang optimal.

#QualityControl #BolitasTest #PCR #BenurSehat
  `},{id:10,title:"Artemia: Dari Danau Asin hingga Hatchery Anda",date:"2025-10-29",summary:"Mengenal asal-usul Artemia dari danau hipersalin, siklus hidup, manfaat untuk pembenihan, dan tips memilih Artemia berkualitas untuk budidaya benur dan ikan.",slug:"artemia-danau-asin-hatchery",category:"Live Feed",readTime:"5 min read",image:"/BlogImage/artemia.png",content:`
# Artemia: Dari Danau Asin hingga Hatchery Anda
Bagi pembudidaya benur dan ikan, nama Artemia tentu sudah tidak asing lagi. Pakan hidup mungil ini menjadi pilihan utama karena nutrisi yang lengkap dan daya cerna yang tinggi. Tapi, tahukah Anda kalau Artemia bukan berasal dari laut? Mari kita bahas asal-usul, proses pembiakannya, serta mengapa pakan hidup ini begitu penting dalam dunia budidaya.

---

## Asal-Usul Artemia: Hidup di Danau Super Asin
Berbeda dari anggapan banyak orang, Artemia tidak hidup di laut, melainkan di danau-danau hipersalin — yaitu danau dengan kadar garam jauh lebih tinggi dari air laut.
Beberapa habitat alami Artemia yang terkenal di dunia antara lain:
- Great Salt Lake, Utah, Amerika Serikat
- Danau-danau asin di Kazakhstan
- Danau hipersalin di Tiongkok dan wilayah Asia Tengah lainnya
Lingkungan ekstrem ini menjadikan Artemia sebagai salah satu sedikit organisme yang mampu bertahan hidup di kadar garam ekstrem (hingga lebih dari 250 ppt). Karena bebas dari predator alami dan kompetitor, Artemia dapat berkembang dengan baik, menghasilkan biomassa dan telur (cyst) dalam jumlah besar.
Adaptasi luar biasa ini juga yang menjadikan Artemia kaya nutrisi dan memiliki kandungan gizi unik yang sangat bermanfaat untuk larva udang dan ikan.

---

## Siklus Hidup Artemia dan Proses Produksi
Dalam kondisi alam atau budidaya, Artemia dewasa akan berkembang biak dan menghasilkan telur dorman yang disebut cyst. Telur ini sangat istimewa karena bisa:
- Bertahan dalam kondisi kering selama bertahun-tahun,
- Ditetaskan kembali kapan pun dibutuhkan, dengan cara yang sederhana.
Prosesnya biasanya seperti ini:
- Cyst Artemia dikumpulkan dari habitat alami (misalnya Great Salt Lake).
- Dikeringkan dan disimpan dalam kondisi terkontrol.
- Dikirim ke hatchery di berbagai negara, termasuk Indonesia.
- Saat dibutuhkan, cyst ditetaskan di air asin dengan aerasi dan suhu tertentu. Dalam waktu sekitar 24 jam, akan menetas menjadi nauplius Artemia — bentuk larva kecil yang aktif berenang dan siap jadi pakan hidup.
Cyst inilah yang menjadi komoditas penting di dunia budidaya. Karena mudah disimpan dan ditetaskan sesuai kebutuhan, hatchery bisa mengatur stok pakan hidup dengan efisien tanpa khawatir kehilangan nutrisi.

---

## Manfaat Artemia bagi Pembenihan dan Budidaya
Pakan hidup ini bukan hanya sumber nutrisi, tapi juga punya keunggulan biologis yang mendukung keberhasilan budidaya:
**Ukuran Ideal untuk Larva**
Nauplius Artemia berukuran sekitar 400–500 mikron, sangat sesuai untuk mulut benur udang atau larva ikan laut.
**Gerakan Alami yang Menarik**
Gerak renangnya merangsang naluri makan larva, sehingga meningkatkan asupan pakan.
**Daya Cerna Tinggi**
Struktur tubuh Artemia mudah dicerna, membantu penyerapan nutrisi maksimal.
**Meningkatkan Survival Rate (SR)**
Hatchery yang rutin menggunakan Artemia berkualitas melaporkan tingkat kelangsungan hidup benur yang lebih tinggi dan pertumbuhan yang lebih seragam.
**Fleksibilitas Produksi**
Karena cyst bisa disimpan lama dan ditetaskan kapan saja, hatchery bisa menyesuaikan kebutuhan tanpa takut kekurangan stok pakan hidup.

---

## Hal yang Perlu Diperhatikan dalam Penggunaan Artemia
Meski terlihat sederhana, kualitas Artemia bisa bervariasi tergantung:
- Asal cyst (misalnya Great Salt Lake vs. Tiongkok vs. Asia Tengah)
- Proses penyimpanan
- Kondisi penetasan (salinitas, suhu, cahaya, aerasi)
- Tingkat kebersihan media
Untuk hasil terbaik:
- Gunakan air bersalinitas 30–35 ppt, suhu 28–30°C, dan aerasi konstan.
- Pastikan cyst bebas kontaminasi dan tidak melewati masa simpan optimal (biasanya 2–3 tahun).
- Jika diperlukan, lakukan enrichment agar profil gizinya sesuai kebutuhan benur.

---

## Pilih Artemia Berkualitas: Investasi untuk Sukses Budidaya
Di Gizi Laut, kami memahami bahwa pakan hidup berkualitas adalah kunci keberhasilan hatchery. Karena itu, kami hanya menyediakan Artemia dari sumber terpercaya dengan mutu teruji, seperti OSI Artemia Crystal — produk dengan tingkat penetasan tinggi, nutrisi konsisten, dan bebas kontaminan.
Dengan memilih Artemia yang tepat, pembudidaya bisa:
- Memastikan benur mendapat asupan nutrisi optimal,
- Mengurangi risiko stres dan mortalitas,
- Meningkatkan efisiensi pakan serta hasil panen secara keseluruhan.

---

## Kesimpulan
Artemia bukan sekadar pakan hidup — ia adalah fondasi penting dalam keberhasilan pembenihan udang dan ikan. Dari danau super asin hingga hatchery modern, perjalanan Artemia menunjukkan bagaimana alam menyediakan solusi alami yang luar biasa untuk dunia akuakultur.
Dengan pemilihan kualitas yang tepat dan pengelolaan yang baik, Artemia akan terus menjadi sahabat utama pembudidaya dalam menghasilkan benur unggul dan panen melimpah.

#Artemia #LiveFeed #Hatchery #Akuakultur
  `},{id:11,title:"Teknologi RAS: Sistem Air Tertutup",date:"2025-11-3",summary:"Recirculating Aquaculture System merupakan teknologi modern yang membuat air kolam bisa dipakai ulang terus-menerus.",slug:"recirculating-aquaculture-system",category:"Technology",readTime:"3-4 min read",image:"/BlogImage/SYSTEM BIG-2.png",content:`
  # RAS (Recirculating Aquaculture System): Budidaya Ikan Masa Depan
Tahukah kamu kalau budidaya ikan kini bisa dilakukan tanpa sering mengganti air kolam? Inilah fungsi dari RAS, atau Recirculating Aquaculture System—teknologi modern yang membuat air kolam bisa dipakai ulang terus-menerus tanpa mencemari lingkungan.

---

## Apa Itu Sistem RAS?
RAS adalah sistem budidaya ikan dengan sirkulasi air tertutup, di mana air dari kolam dipompa menuju serangkaian filter untuk dibersihkan, lalu dikembalikan lagi ke kolam. Air yang digunakan bisa dihemat hingga 90–99%, karena sistem ini memanfaatkan air secara berulang.
Sistem ini sangat populer di daerah dengan lahan dan sumber air terbatas, karena semua proses pengolahan air—dari penyaringan, oksigenasi, hingga sterilisasi—berlangsung otomatis di satu rangkaian alat.

---

## Bagaimana Cara Kerjanya?
Air dari kolam ikan mengalir menuju beberapa jenis filter yang bekerja berurutan:
- Filter mekanis, untuk menyaring kotoran padat seperti sisa pakan dan feses ikan.
- Biofilter, berisi koloni bakteri baik yang mengubah amonia hasil limbah menjadi nitrat yang tidak beracun bagi ikan.
- Sterilisasi dan aerasi, tahap terakhir di mana air diberi oksigen tambahan dan disterilisasi (biasanya dengan sinar UV), lalu dikembalikan ke kolam ikan dalam kondisi bersih dan sehat.
Dengan sistem ini, kualitas air tetap stabil, oksigen terjaga, dan kadar racun terkontrol secara otomatis.

---

## Keunggulan Teknologi RAS
Teknologi RAS kini disebut sebagai masa depan akuakultur modern karena manfaatnya yang sangat luas. Beberapa keunggulannya antara lain:
- Hemat air hingga 99%, cocok untuk wilayah minim sumber air.
- Pertumbuhan ikan lebih cepat berkat air yang selalu bersih dan kaya oksigen.
- Tingkat kematian rendah, karena penyakit dan bakteri lebih mudah dikendalikan.
- Minim dampak lingkungan, karena tidak ada pembuangan limbah berlebihan.
- Cocok untuk budidaya intensif di lahan sempit seperti perkotaan.
Sistem RAS juga bisa diintegrasikan dengan aquaponik atau budidaya lain seperti cacing sutera, menjadikannya solusi lengkap untuk pertanian berkelanjutan.

---

## Penutup
Secara sederhana, RAS menciptakan ekosistem tertutup yang efisien, di mana air terus berputar, dibersihkan, dan digunakan kembali. Sistem ini bukan hanya menghemat air, tapi juga membantu petani ikan mendapat hasil panen yang lebih cepat dan lebih stabil—tanpa harus tergantung pada kondisi lingkungan sekitar.
Teknologi ini membuktikan bahwa dengan inovasi, budidaya ikan kini bisa dilakukan di mana saja—dari tambak luas hingga ruang terbatas perkotaan—secara bersih, hemat, dan berkelanjutan.

#RAS #AkuakulturModern #BudidayaIkan #Berkelanjutan
  `},{id:12,title:"Teknologi Bioflok: Rahasia Kolam Ikan yang Hemat",date:"2025-11-5",summary:"Bioflok adalah sistem budidaya ikan modern yang memanfaatkan mikroorganisme.",slug:"apa-itu-bioflok",category:"Technology",readTime:"3-4 min read",image:"/BlogImage/biofloc.png",content:`
  # Bioflok: Revolusi Budidaya Ikan Hemat dan Ramah Lingkungan
Pernah dengar istilah bioflok? Teknologi ini sedang naik daun di dunia akuakultur karena bisa membuat budidaya ikan jadi lebih efisien, ramah lingkungan, dan hemat biaya. Tapi apa sebenarnya bioflok itu?

---

## Apa Itu Bioflok?
Bioflok adalah sistem budidaya ikan modern yang memanfaatkan mikroorganisme seperti bakteri, alga, dan jamur baik di dalam kolam. Mikroorganisme itu hidup berkoloni, membentuk gumpalan-gumpalan kecil yang disebut "flok". Dalam sistem bioflok, sisa pakan dan kotoran ikan tidak lagi dianggap limbah—mereka justru jadi bahan makanan mikroba.
Flok ini kemudian dimakan kembali oleh ikan, menjadikannya pakan alami yang kaya protein. Hasilnya, penggunaan pakan buatan bisa dikurangi hingga 30%, sementara air di kolam tetap jernih dan sehat.

---

## Cara Kerja Sistem Bioflok
Di kolam bioflok, oksigen yang cukup sangat penting. Aerator menjaga air tetap bergelembung agar mikroorganisme bisa hidup aktif. Begitu sisa pakan dan kotoran ikan muncul, bakteri "baik" segera menguraikannya menjadi amonia, lalu diubah menjadi bentuk nitrogen yang tidak beracun. Semua proses ini berjalan alami, seperti mini-ekosistem yang seimbang.
Flok yang terbentuk juga kaya nutrisi—campuran dari sel mikroba, mineral, dan sisa organik yang telah terurai. Ketika ikan memakannya, mereka mendapat tambahan protein sekaligus membantu "membersihkan" kolam. Dengan kata lain, kolam bioflok bisa jadi pabrik pakan sekaligus sistem filtrasi alami.

---

## Keuntungan Teknologi Bioflok
Salah satu daya tarik utama sistem bioflok adalah efisiensi. Petani ikan bisa menghemat air, pakan, dan tenaga kerja. Selain itu, sistem ini juga ramah lingkungan, karena tidak menimbulkan limbah cair berlebih.
Berikut beberapa manfaat utama sistem bioflok:
- Hemat pakan – karena flok menjadi tambahan nutrisi alami bagi ikan.
- Hemat air – tak perlu sering mengganti air kolam.
- Ramah lingkungan – sisa organik diolah langsung, bukan dibuang.
- Meningkatkan pertumbuhan ikan – kualitas air stabil, stres ikan berkurang, dan pertumbuhan lebih cepat.
Bukan cuma lele atau nila, kini banyak hatchery udang juga mulai adaptasi sistem bioflok berkat efisiensinya.

---

## Penutup
Jadi, kalau diibaratkan, sistem bioflok adalah cara membuat "ekosistem mini yang mandiri" di kolam—air tetap bersih, ikan mendapat pakan alami, dan petani bisa panen dengan biaya lebih hemat. Teknologi ini bukan hanya ramah lingkungan, tapi juga pintar memanfaatkan limbah menjadi sumber daya baru.
Budidaya hemat, hasil maksimal—itulah kekuatan sesungguhnya di balik flok kecil yang bekerja siang malam menjaga kolam tetap hidup.

#Bioflok #BudidayaHemat #AkuakulturModern #RamahLingkungan
  `},{id:13,title:"Rahasia Telur Ajaib Artemia: Bisa Tidur Bertahun-tahun!",date:"2025-11-15",summary:"Telur Artemia disebut cyst, yaitu bentuk telur khusus yang punya lapisan luar super keras.",slug:"telur-artemia-cyst",category:"Live Feed",readTime:"2-3 min read",image:"/BlogImage/cysts.png",content:`
  # Cyst Artemia: Telur Ajaib yang Bisa Tidur Bertahun-Tahun
Tahukah kamu kalau ada hewan laut mini yang telurnya bisa hidup meski sudah bertahun-tahun "tidur"? Yup, itu adalah Artemia, si udang kecil air asin yang sering disebut brine shrimp. Dan bagian paling ajaibnya—telurnya bisa disimpan dalam keadaan kering hingga 10 tahun dan tetap hidup!

---

## Telur Super: Disebut Cyst
Telur Artemia disebut cyst, yaitu bentuk telur khusus yang punya lapisan luar super keras. Lapisan ini membuat telur bisa tetap bertahan hidup meski disimpan di kondisi ekstrem—bahkan pada suhu antara -20°C hingga 100°C. Dalam keadaan kering dan tanpa oksigen, embrio di dalamnya masuk ke fase "tidur panjang" atau dorman. Artinya, aktivitas biologisnya berhenti total tapi tetap hidup di dalam cangkang keras itu.
Cyst bisa tetap aktif hingga 5 sampai 10 tahun asal disimpan di tempat kering, sejuk, dan jauh dari sinar matahari langsung. Karena daya tahannya yang luar biasa, para pembudidaya ikan dan udang di seluruh dunia gemar menyimpannya sebagai stok makanan alami berkualitas tinggi.

---

## Bangun dari "Tidur": Proses Penetasan
Begitu telur kering ini bersentuhan dengan air asin hangat (berkadar garam sekitar 30–35 ppt dan suhu 28–30°C), sesuatu yang ajaib terjadi—embrio di dalamnya mulai aktif kembali!
Dalam waktu 20–36 jam, cangkang cyst akan pecah dan keluarlah larva kecil berwarna oranye yang disebut nauplius. Larva ini kaya protein, lemak, dan asam lemak esensial, sehingga menjadi pakan terbaik untuk larva udang dan ikan di hatchery. Itulah mengapa telur Artemia dianggap "makanan hidup instan" bagi dunia akuakultur.

---

## Praktis dan Efisien untuk Hatchery
Keunggulan telur Artemia yang bisa "tidur panjang" membuatnya sangat praktis untuk hatchery. Tak perlu pakan hidup rumit—cukup simpan cyst dalam wadah tertutup, lalu tetaskan sesuai kebutuhan. Setiap 1 gram cyst bahkan bisa berisi hingga 250.000 butir telur!
Selain praktis, Artemia juga mudah ditangani dan bebas risiko penyakit, terutama jika menggunakan metode dekapsulasi (mengupas lapisan luar tanpa membunuh embrio). Dengan cara ini, hasil penetasan bisa sangat tinggi—mencapai 90% hatch rate jika kualitas dan penyimpanannya baik.

---

## Dari "Tidur" ke "Hidup" Sepenuhnya
Menakjubkan, bukan? Artemia adalah contoh sempurna adaptasi alam. Ia bisa bertahan di danau super asin yang nyaris tak ada kehidupan lain, lalu memastikan kelangsungan hidup spesiesnya lewat telur yang bisa "tidur" selama bertahun-tahun. Jadi, setiap kali melihat deretan bubuk kecil berlabel Artemia cyst di hatchery, ingatlah—itu bukan sekadar telur kering, tapi kehidupan yang menunggu untuk bangun kembali saat bertemu air asin hangat!

#ArtemiaCyst #PakanHidup #Hatchery #Akuakultur
  `},{id:14,title:"Mengenal Zoea, Mysis, dan PL: Tahapan Penting dalam Hidup Udang",date:"2025-11-18",summary:"Pernah dengar istilah Zoea, Mysis, atau PL di dunia udang? Istilah-istilah ini adalah sebutan untuk fase larva udang,",slug:"fase-benur",category:"Growth",readTime:"3-4 min read",image:"/BlogImage/siklus hidup udang.png",content:`
  # Zoea, Mysis, dan PL: Fase-Fase Larva Udang yang Menakjubkan
Pernah dengar istilah Zoea, Mysis, atau PL di dunia udang? Istilah-istilah ini adalah sebutan untuk fase larva udang—tahapan awal dalam siklus hidupnya sebelum tumbuh menjadi udang muda hingga dewasa. Dalam industri tambak, memahami setiap fase ini penting untuk menghasilkan benur (bibit udang) yang sehat dan kuat.

---

## Dari Telur ke Zoea
Semua dimulai dari telur. Setelah dibuahi, telur udang menetas menjadi larva tahap pertama yang disebut Nauplius. Pada fase ini udang berukuran mikroskopis dan belum membutuhkan pakan karena masih bergantung pada cadangan kuning telur sebagai sumber energi.
Beberapa jam kemudian, setelah enam kali pergantian kulit, Nauplius berubah menjadi Zoea—fase di mana tubuh udang mulai memanjang dan organ pencernaannya sudah berfungsi. Zoea terdiri dari tiga tahap: Zoea 1, Zoea 2, dan Zoea 3.
Selama fase Zoea (sekitar 3–4 hari), larva mulai aktif makan fitoplankton seperti Chaetoceros dan Thalassiosira. Mata udang juga mulai terlihat, karapas (cangkang) terbentuk, dan bagian kepala berkembang membentuk tonjolan kecil yang disebut rostrum.
Namun di tahap ini, Zoea masih sangat sensitif terhadap perubahan lingkungan seperti suhu dan salinitas. Karena itu, kondisi air di hatchery harus benar-benar stabil agar tingkat kelangsungan hidupnya tinggi.

---

## Fase Mysis: Mulai Menyerupai Udang
Setelah Zoea, udang memasuki fase Mysis—fase transisi di mana bentuknya mulai menyerupai udang kecil. Mereka sudah memiliki antena, ekor, dan mulai bergerak mundur layaknya udang dewasa. Fase ini juga terdiri dari tiga tahap: Mysis 1, Mysis 2, dan Mysis 3.
Selama 3–5 hari, Mysis mulai menunjukkan perilaku berenang aktif dan membutuhkan pakan kombinasi fitoplankton serta zooplankton seperti Artemia nauplii. Ukurannya pun bertambah menjadi sekitar 3–5 mm.
Mysis juga sudah memiliki tunas kaki renang (pleopod) yang kelak menjadi alat gerak utama saat dewasa. Pada tahap akhir (Mysis 3), pleopod mulai beruas-ruas dan udang hampir siap beralih ke fase berikutnya—Post Larva.

---

## Fase PL: Si Benur Siap Tebar
Memasuki fase Post Larva (PL), udang telah berbentuk sempurna seperti udang dewasa mini. Semua organ tubuhnya sudah berkembang, dari kaki renang hingga ekor berbentuk kipas. Pada usia inilah larva mulai disebut benur, terutama setelah berumur lebih dari 8 hari—dikenal dengan sebutan PL 8, PL 10, atau PL 12.
PL sudah bisa berenang lurus, mencari makan sendiri, bahkan menempel pada dinding kolam. Makanan utamanya kini bukan lagi plankton tapi pakan organik seperti Artemia dan pakan buatan berbentuk halus.
Dalam praktik budidaya, benur PL 10–12 adalah yang paling ideal untuk ditebar di tambak karena organ tubuh, ukuran (8–12 mm), dan daya tahannya sudah optimal. Benur di fase ini umumnya mampu bertahan hidup dengan tingkat survival 95% jika berasal dari indukan sehat.

---

## Penutup
Dalam waktu kurang dari tiga minggu, udang mengalami metamorfosis luar biasa: dari telur kecil berubah melalui fase Zoea yang lembut, Mysis yang gesit, dan akhirnya Post Larva yang siap hidup mandiri. Setiap tahap membutuhkan perhatian berbeda—dari jenis pakan hingga kondisi air—agar menghasilkan benur yang kuat dan siap tumbuh menjadi udang dewasa yang sehat dan bernilai tinggi di tambak.

#Zoea #Mysis #PostLarva #Hatchery #Udang
  `},{id:15,title:"Rahasia di Balik Ganti Baju Udang: Mengenal Proses Molting",date:"2025-12-20",summary:"Beginilah cara udang bertumbuh, Proses ini disebut molting atau moulting.",slug:"apa-itu-molting",category:"Growth",readTime:"5 min read",image:"/BlogImage/shrimp-molt.png",content:`
# Molting: Proses Ganti Baju Udang yang Menentukan Hidup Mati
Pernah lihat udang ganti baju? Mungkin terdengar aneh, tapi inilah cara udang bertumbuh. Proses ini disebut molting atau moulting—sebuah fenomena alami di mana udang melepaskan cangkang atau kulit lamanya supaya bisa tumbuh lebih besar. Berbeda dengan manusia yang kulitnya elastis dan ikut membesar seiring pertumbuhan tubuh, udang memiliki eksoskeleton (kulit luar) yang keras dan kaku, sehingga tidak bisa ikut membesar ketika tubuhnya tumbuh.
Jadi, untuk mengatasi masalah ini, udang harus melepaskan cangkang lamanya dan membentuk cangkang baru yang lebih besar. Proses "ganti baju" ini bukan hanya terjadi sekali, tetapi berulang kali sepanjang hidup udang—semakin muda udang, semakin sering ia molting.

---

## Mengapa Molting Begitu Penting?
Molting adalah kunci utama pertumbuhan udang. Tanpa molting, udang tidak akan bisa bertambah besar. Pertumbuhan udang vaname dipengaruhi oleh dua faktor utama: frekuensi molting (seberapa sering udang ganti kulit) dan pertambahan ukuran pada setiap molting.
Frekuensi molting sangat bervariasi tergantung usia udang:
- Pada tahap larva, molting terjadi setiap 30 hingga 40 jam pada suhu sekitar 28°C.
- Pada udang muda (juvenile) dengan berat 1–5 gram, molting terjadi setiap 4 hingga 6 hari.
- Udang berukuran sekitar 15 gram akan molting setiap 2 minggu sekali.
- Dalam kondisi terbaik, udang dewasa akan mengalami molting setiap 3 hingga 4 minggu.
Semakin bertambah usia dan ukuran udang, interval molting semakin panjang.
Proses pelepasan cangkang lama ke cangkang baru hanya membutuhkan waktu beberapa jam saja, bahkan kadang hanya beberapa menit untuk tahap ecdysis (pelepasan cangkang). Namun, meski singkat, fase ini sangat krusial—jika udang gagal dalam fase ini, konsekuensinya bisa fatal hingga kematian.

---

## Tahapan Molting: Siklus yang Kompleks dan Teratur
Molting bukan sekadar proses melepas kulit lama. Ini adalah siklus yang sangat kompleks yang melibatkan koordinasi hormonal dan perubahan fisiologis bertahap. Para ilmuwan membagi siklus molting menjadi 4 tahapan utama:

### Postmolt (Pasca Molting)
Postmolt adalah tahapan beberapa saat setelah udang berhasil melepaskan eksoskeleton yang lama. Pada tahap ini, kulit udang yang baru masih sangat lunak, licin, dan hanya berupa membran tipis transparan. Udang berada di dasar tambak dan cenderung diam karena kondisi tubuhnya sangat lemah.
Yang terjadi pada fase ini adalah pengembangan eksoskeleton akibat meningkatnya volume hemolymph (darah udang) karena udang menyerap banyak air ke dalam tubuh. Air diserap melalui epidermis, insang, dan usus. Proses ini membuat tubuh udang "mengembang" untuk menyesuaikan ukuran cangkang baru yang lebih besar. Setelah beberapa jam atau hari (tergantung panjangnya siklus molting), eksoskeleton yang baru akan mulai mengeras.

### Intermolt (Antar Molting)
Pada tahapan intermolt, eksoskeleton semakin keras karena adanya deposisi mineral—terutama kalsium—dan protein. Eksoskeleton udang meskipun relatif lebih tipis dan lunak dibandingkan kepiting dan lobster, tetap memerlukan pengerasan yang maksimal untuk melindungi tubuh.
Pada fase ini, pertumbuhan bobot udang semakin bertambah sehingga aktivitas makan udang pun semakin tinggi hingga maksimal. Udang dalam kondisi paling sehat dan stabil di tahap ini. Volume serta berat seluruh tubuh udang meningkat sekitar 3–4% selama periode intermolt.

### Premolt (Pra Molting)
Premolt adalah tahapan persiapan sebelum molting dimulai. Pada tahap early premolt (premolt awal), mulai terbentuk epicuticle baru di bawah lapisan endocuticle. Tahapan premolt ditandai dengan suatu peningkatan konsentrasi hormon molting (ecdysteroid) dalam hemolymph (darah udang).
Memasuki late premolt (premolt akhir), terbentuk lagi lapisan exocuticle baru di bawah lapisan epicuticle yang terbentuk pada tahap sebelumnya. Kemudian terjadi pemisahan cangkang lama dengan cangkang yang baru. Eksoskeleton lama akan terserap sebagian dan cadangan energi dimobilisasi dari hepatopankreas.
Pada fase ini, nafsu makan udang mulai menurun. Lapisan kutikula baru mulai terbentuk di bawah kulit lama. Udang juga tampak lebih tenang dan kurang aktif karena sedang mempersiapkan energi untuk proses berat yang akan datang.

### Molt (Ecdysis - Pelepasan Cangkang)
Tahap molt atau ecdysis adalah puncak dari seluruh siklus—saat udang benar-benar melepaskan cangkang lamanya. Meskipun ini adalah momen paling dramatis, tahap ini hanya berlangsung beberapa menit saja.
Proses dimulai dengan membukanya cangkang lama pada jaringan penghubung bagian dorsal antara thorax dengan abdomen. Udang kemudian menggembungkan tubuhnya dan mendorong cangkang keluar sambil melonggarkan seluruh otot anggota tubuhnya. Proses ini selesai ketika udang berhasil melepaskan diri sepenuhnya dari cangkang lamanya.
Pada fase ini, udang mengalami pelepasan kulit lama yang diikuti dengan penyerapan air dari media dalam jumlah yang sangat tinggi. Seluruh otot anggota tubuh melemas untuk memungkinkan udang terlepas dari eksoskeleton lama.

---

## Kontrol Hormonal: Orkestra Biokimia di Balik Molting
Proses molting bukanlah kejadian acak—ia dikendalikan dengan sangat presisi oleh sistem hormonal yang kompleks. Dua hormon utama yang memainkan peran krusial adalah ecdysteroid (hormon molting) dan Molt-Inhibiting Hormone (MIH) (hormon penghambat molting).
Ecdysteroid, yang disintesis oleh organ Y (Y-organ), adalah hormon yang memicu dan mengkoordinasikan proses premolt seperti sintesis eksoskeleton baru, degradasi dan reabsorpsi eksoskeleton lama, serta pertumbuhan jaringan. Ketika kadar ecdysteroid dalam hemolymph meningkat, udang memasuki fase premolt dan mulai mempersiapkan molting.
Sebaliknya, Molt-Inhibiting Hormone (MIH), yang diproduksi oleh kompleks X-organ/sinus gland di tangkai mata, berfungsi menekan produksi ecdysteroid oleh organ Y. Ketika kadar MIH tinggi, organ Y dihambat dan udang berada dalam fase intermolt—tidak molting.
Yang menarik adalah adanya mekanisme feedback loop antara kedua hormon ini. Pada awal premolt, peningkatan kadar ecdysteroid justru merangsang ekspresi MIH di tangkai mata, menciptakan sistem regulasi yang sangat halus. Penurunan drastis ecdysteroid di akhir premolt kemudian memicu ecdysis (pelepasan cangkang). Setelah molting, kadar MIH yang tinggi menghambat kembali organ Y, sehingga siklus molting berikutnya dapat di-reset.
Inilah mengapa teknik ablasi tangkai mata begitu efektif dalam mempercepat reproduksi—karena dengan memotong tangkai mata, sumber MIH dihilangkan, sehingga organ Y tidak lagi dihambat dan dapat memproduksi hormon secara bebas.

---

## Peran Krusial Mineral: Kalsium dan Magnesium
Eksoskeleton udang tersusun dari dua komponen utama: 55% mineral anorganik (terutama kalsium dan magnesium, serta 21 mineral lainnya) dan 45% kitin (senyawa protein yang terdiri dari karbohidrat dan protein). Karena komposisi ini, mineral—terutama kalsium—menjadi sangat penting dalam proses molting.
Kalsium sangat dominan dalam proses pengerasan kulit udang. Setelah molting selesai, kalsium yang berada di hemolimfa digunakan untuk pengerasan eksoskeleton. Namun, kalsium dari hemolimfa hanya memenuhi sekitar 10% dari kebutuhan total—sisanya 90% diperoleh dari kalsium yang ada di lingkungan perairan.
Ini artinya, kadar kalsium pada air tambak harus tetap stabil dan mencukupi. Jika kebutuhan mineral kalsium tidak tercukupi, cangkang baru pada udang akan berpotensi lembek dan tidak dapat mengeras dengan sempurna. Kondisi ini sangat berbahaya karena membuat udang rentan terhadap serangan predator, penyakit, dan kanibalisme dari udang lain.
Magnesium juga memainkan peran penting dalam proses molting, membantu metabolisme tubuh udang dan keseimbangan osmoregulasi serta elektrolit tubuh selama fase molting.

---

## Bahaya Gagal Molting: Ancaman Kematian Massal
Waktu proses molting sangat kritis bagi kelangsungan hidup udang. Jika udang gagal molting, bisa-bisa ia berhenti tumbuh atau bahkan mati. Gagal molting adalah kondisi di mana udang tidak berhasil melewati proses molting dengan sempurna—entah gagal melepaskan kulit lama (tersangkut atau tidak bisa keluar) atau gagal membentuk kulit baru dengan baik (masih lunak).
Beberapa penyebab utama gagal molting meliputi:
- **Kekurangan Nutrisi dan Mineral**: Udang sangat memerlukan mineral, khususnya kalsium, untuk membentuk cangkang baru. Kekurangan kalsium membuat pembentukan cangkang baru berpotensi gagal, udang menjadi rentan terhadap serangan predator dan penyakit, bahkan mengalami kematian.
- **Stres Lingkungan**: Penurunan kualitas air seperti pH yang terlalu asam, kadar amonia terlalu tinggi, fluktuasi suhu yang cepat, salinitas tidak ideal, serta kepadatan populasi terlalu tinggi dapat menyebabkan udang stres.
- **Alkalinitas Tinggi**: Alkalinitas yang terlalu tinggi dapat menyebabkan kulit lama udang menjadi terlalu keras dan mempersulit udang untuk keluar dan membentuk kulit baru.
- **Infeksi Penyakit**: Udang yang terserang penyakit sebelum molting akan mengalami penurunan daya tahan tubuh yang semakin parah saat molting berlangsung, menyebabkan kesulitan molting bahkan kematian.
- **Gangguan Hormonal**: Ketidakseimbangan hormon molting juga dapat menghambat proses molting normal.
Kegagalan molting memiliki konsekuensi serius: udang menjadi stres, lebih mudah terkena penyakit, atau bahkan mati secara massal. Dalam praktik budidaya, kematian udang akibat gagal molting tampak terjadi secara mendadak dan bersamaan di tambak.

---

## Fase Paling Rentan: Kanibalisme dan Penyakit
Selama proses molting, udang berada dalam kondisi sangat lemah dan rentan. Ada beberapa risiko besar yang mengancam:
**Kanibalisme Meningkat**: Udang yang sedang mengalami ganti kulit akan lebih lemah dan sangat rentan dimangsa udang lain, terutama yang ukurannya lebih besar. Ditambah lagi, zat-zat asam amino dan enzim yang dikeluarkan oleh udang saat proses molting justru menstimulasi nafsu makan udang lainnya. Jika udang kekurangan makan, perilaku kanibalisme bisa semakin tinggi.
**Kondisi Tubuh Kritis**: Udang telah mengeluarkan energi yang besar untuk penggantian kulit, membuat tubuhnya menjadi sangat lemah. Kondisi kulit udang yang baru tumbuh juga sangat rentan terserang penyakit karena kulit udang merupakan pertahanan pertama terhadap patogen di tambak.
**Risiko Kematian**: Kombinasi dari faktor-faktor di atas membuat fase molting menjadi periode dengan tingkat mortalitas tertinggi dalam budidaya udang.
Oleh karena itu, para pembudidaya biasanya akan selalu menjaga stabilitas kolam supaya proses molting berjalan lancar dan udang bisa tumbuh sehat sampai panen.

---

## Fenomena Molting Massal: Pengaruh Bulan Purnama
Salah satu fenomena menarik dalam budidaya udang adalah molting massal yang sering terjadi saat bulan purnama atau bulan penuh. Molting udang vaname biasanya terjadi pada saat malam bulan penuh atau saat air laut pasang naik.
Penelitian menunjukkan bahwa selama fase bulan baru (new moon), sekitar 80% udang mencapai tahap ecdysis (proses pelepasan eksoskeleton). Fenomena ini berkaitan dengan sifat fototaksis negatif yang dimiliki udang—yaitu kecenderungan untuk menjauh dari sumber cahaya.
Cahaya bulan purnama merangsang fungsi fisiologis dan biokimia udang untuk melakukan pergantian kulit. Pada saat bulan purnama, pH air cenderung lebih rendah, yang merupakan kondisi optimal untuk molting. Kondisi terbaik untuk molting udang vaname adalah pH 7.8–8.2.
Pengetahuan tentang waktu molting massal ini sangat penting bagi pembudidaya. Dengan mengetahui waktu perkiraan molting, petambak dapat melakukan penyesuaian manajemen seperti menghindari perlakuan teknis yang terlalu ekstrim, mengurangi pergantian air, dan memastikan asupan mineral serta pakan tercukupi.

---

## Strategi Pembudidaya: Mengawal Molting dengan Cermat
Karena pentingnya fase molting, pembudidaya profesional menerapkan berbagai strategi untuk memastikan udang bisa melewati fase ini dengan aman dan cepat:
- **Pemberian Mineral Tambak**: Memberikan asupan mineral secara langsung—terutama kalsium, magnesium, dan fosfor—untuk mempercepat pembentukan karapas baru. Mineral dapat diberikan langsung ke air tambak atau dicampur dalam pakan.
- **Pengurangan Pergantian Air**: Pergantian air yang berlebihan akan membuang mineral yang telah diaplikasikan dan membuat udang harus beradaptasi dengan air baru, yang menambah stres. Pada fase molting, frekuensi pergantian air sebaiknya dikurangi.
- **Penyesuaian Pemberian Pakan**: Pada fase awal molting, nafsu makan udang menurun sehingga pemberian pakan harus disesuaikan agar tidak terbuang dan mencemari air. Sebaliknya, saat fase intermolt, nafsu makan meningkat sehingga dosis pakan perlu ditingkatkan.
- **Menjaga Kualitas Air Stabil**: Parameter seperti pH, salinitas, oksigen terlarut, dan kadar amonia harus dijaga tetap ideal. Selama molting, udang membutuhkan oksigen terlarut dua kali lebih banyak dari biasanya.
- **Sampling Rutin**: Melakukan pemeriksaan berkala untuk mengecek kondisi fisik udang dan mendeteksi fase molting yang sedang dilalui, sehingga perlakuan tepat dapat diberikan.
- **Observasi Permukaan Tambak**: Memantau adanya cangkang udang yang mengapung di kolam—ini adalah tanda bahwa udang baru selesai ganti "baju".

---

## Kesimpulan: Molting sebagai Barometer Kesuksesan Budidaya
Jadi, kalau kamu lihat ada kulit udang kosong mengapung di kolam atau tambak, itu bukan sampah—itu adalah bukti bahwa udang di dalamnya sedang tumbuh dan berkembang. Cangkang kosong tersebut, yang disebut exuvium, adalah "baju lama" yang ditinggalkan udang setelah berhasil molting.
Molting adalah proses alami yang penuh tantangan namun sangat penting bagi pertumbuhan udang. Keberhasilan molting menentukan apakah udang akan terus tumbuh sehat atau justru mengalami kematian. Semakin sering udang molting, menunjukkan semakin cepat pula pertumbuhannya.
Bagi para pembudidaya, memahami dan mengawal proses molting dengan cermat adalah kunci untuk memastikan produktivitas tambak tetap optimal. Dengan manajemen yang tepat—mulai dari pemberian mineral yang cukup, menjaga kualitas air stabil, hingga memahami waktu molting massal—risiko gagal molting dan kematian massal dapat diminimalisir.
Proses "ganti baju" ini mungkin terlihat sederhana dari luar, tetapi di baliknya terdapat orkestra biokimia yang rumit, koordinasi hormonal yang presisi, dan kebutuhan nutrisi yang harus terpenuhi dengan tepat. Itulah mengapa molting bukan hanya sekadar fenomena biologis biasa—ia adalah momen kritis yang menentukan hidup dan mati dalam dunia budidaya udang.

#Molting #BiologiUdang #BudidayaUdang #Pertumbuhan
  `},{id:16,title:"Ketika Udang Harus Kehilangan Mata Demi Telur: Realitas Ablasi",date:"2025-12-22",summary:"Ablasi adalah metode yang telah dipraktikkan secara rutin di hampir setiap fasilitas pembenihan udang.",slug:"apa-itu-ablasi",category:"Growth",readTime:"5 min read",image:"/BlogImage/ablasi.png",content:`
# Ablasi Tangkai Mata Udang: Praktik Kontroversial dan Alternatif Etis
Bayangkan jika manusia harus kehilangan matanya demi bisa lebih gampang punya anak. Kedengarannya seperti cerita fiksi ilmiah yang mengerikan, bukan? Tapi sayangnya, ini adalah realitas nyata yang dialami jutaan udang setiap harinya melalui sebuah teknik bernama ablasi tangkai mata atau eyestalk ablation.

---

## Apa Itu Ablasi dan Mengapa Dilakukan?
Ablasi adalah metode yang telah dipraktikkan secara rutin di hampir setiap fasilitas pembenihan udang komersial di seluruh dunia sejak tahun 1970-an. Prosedur ini melibatkan pemotongan, pembakaran, atau pengikatan salah satu atau kedua tangkai mata udang betina untuk merangsang produksi telur yang lebih cepat dan lebih banyak.
Alasan di balik praktik ini terletak pada sistem hormonal udang yang unik. Di dalam tangkai mata udang, terdapat organ yang disebut kompleks X-organ-sinus-gland yang menghasilkan hormon penghambat gonad atau Gonad Inhibiting Hormone (GIH). Hormon ini berfungsi mengontrol kematangan organ reproduksi dan mencegah udang bertelur terlalu cepat di alam liar.
Ketika tangkai mata dipotong, produksi GIH dihentikan, sehingga hormon perangsang gonad atau Gonad Stimulating Hormone (GSH) yang diproduksi oleh organ Y dapat bekerja lebih aktif. Hasilnya? Pematangan ovarium lengkap bisa terjadi dalam waktu hanya 3 hingga 10 hari, jauh lebih cepat dibandingkan proses alami.
Efektivitas teknik ini tidak bisa dipungkiri. Ablasi dapat meningkatkan total produksi telur dengan menghasilkan pemijahan yang lebih sering, meskipun tidak menghasilkan pemijahan yang lebih besar per siklus. Praktik ini menjadi terobosan besar yang memungkinkan komersialisasi budidaya udang pada tahun 1970-an dan 1980-an karena memungkinkan produksi yang dapat diandalkan.

---

## Metode Ablasi yang Dipraktikkan
Ada beberapa teknik ablasi yang umum digunakan di hatchery:
- **Metode Unilateral (Pemotongan)**: Memotong satu tangkai mata menggunakan gunting yang dipanaskan. Ini adalah metode paling populer karena dianggap paling sederhana.
- **Metode Enukleasi**: Mengiris satu mata dengan pisau, kemudian menghancurkan tangkai mata dengan ibu jari dan telunjuk. Metode ini meninggalkan kerangka eksoskeleton transparan sehingga pembekuan hemolimfa dan penutupan luka dapat terjadi lebih cepat.
- **Kauterisasi**: Membakar tangkai mata dengan alat elektrokauterisasi atau kawat panas untuk menutup luka dan membentuk jaringan parut lebih cepat.
- **Ligasi**: Mengikat tangkai mata dengan benang bedah atau kawat sampai mati dan terlepas dengan sendirinya.

---

## Dampak Buruk pada Kesejahteraan Udang
Meskipun efektif untuk meningkatkan produksi, ablasi menimbulkan konsekuensi serius bagi kesejahteraan dan kesehatan udang. Penelitian ilmiah telah mengungkap berbagai dampak negatif dari praktik ini:
**Peningkatan Tingkat Kematian**: Udang yang diablasi mengalami tingkat kematian hingga tiga kali lipat lebih tinggi dibandingkan udang normal. Dalam beberapa penelitian, tingkat kematian udang yang diablasi di fasilitas hatchery dilaporkan mencapai 50%.
**Stres dan Trauma Fisik**: Penelitian yang diterbitkan dalam jurnal Applied Animal Behaviour Science menemukan bahwa udang yang mengalami ablasi menunjukkan respons stres perilaku dan fisiologis yang signifikan. Udang menunjukkan upaya untuk melarikan diri, mengibaskan ekor, dan menggosok area mata mereka sebagai tanda kesakitan.
**Penurunan Daya Tahan Tubuh**: Ablasi menyebabkan sistem kekebalan tubuh udang melemah, membuat mereka lebih rentan terhadap penyakit. Penelitian menunjukkan penurunan signifikan dalam Total Haemocyte Count (THC) dalam 6 jam pertama setelah ablasi, meskipun pemulihan parsial terjadi setelah 5 hari.
**Gangguan Metabolisme dan Fisiologis**: Karena tangkai mata adalah sumber berbagai hormon yang diperlukan untuk molting (pergantian kulit), keseimbangan gula, dan metabolisme, ablasi mengganggu berbagai proses fisiologis dalam tubuh udang. Udang yang diablasi sering mengalami metabolisme asam lemak yang terganggu dan peningkatan permintaan energi.
**Penurunan Kualitas Telur dan Keturunan**: Seiring waktu, kualitas telur menurun dan tingkat penetasan menjadi lebih rendah. Yang lebih mengkhawatirkan, keturunan dari induk yang diablasi lebih rentan terhadap penyakit seperti White Spot Syndrome Virus (WSSV).
**Kondisi Induk yang Memburuk**: Induk udang yang diablasi mengalami penurunan kondisi tubuh secara keseluruhan dan siklus molting yang lebih pendek, yang menyebabkan kelelahan reproduksi.

---

## Pertanyaan tentang Sentiensi dan Rasa Sakit
Perdebatan tentang ablasi semakin intensif setelah berbagai negara secara resmi mengakui udang dan krustasea lainnya sebagai makhluk sentien—yaitu makhluk yang dapat merasakan sakit, ketakutan, dan penderitaan. Inggris melalui Animal Welfare Sentience Act 2022, serta Swiss, Selandia Baru, dan Norwegia telah memberikan pengakuan dan perlindungan tertentu bagi udang.
Bukti ilmiah perilaku dan neurologis yang semakin berkembang menunjukkan bahwa udang dapat merasakan rasa sakit yang nyata dan subjektif—bukan hanya respons mekanis terhadap stimulus berbahaya. Ketika luka pada udang ditutup atau diberikan obat, udang menjadi lebih tenang, menunjukkan bahwa ablasi menyebabkan rasa sakit dan tekanan.

---

## Alternatif yang Lebih Ramah: Masa Depan Tanpa Ablasi
Kabar baiknya, industri aquaculture tidak lagi terpaku pada metode ablasi. Berbagai alternatif yang lebih ramah dan berkelanjutan telah dikembangkan dan mulai diterapkan di berbagai belahan dunia:
**Injeksi dan Manipulasi Hormon**: Penggunaan hormon gonadotropin (GTH) yang dikombinasikan dengan antidopamin (AD) telah terbukti efektif dalam mempercepat pematangan gonad tanpa ablasi. Penelitian dari Balai Penelitian dan Pengembangan Budidaya Air Payau (BPPBAP) Maros menunjukkan bahwa injeksi hormon pada induk udang windu alam tanpa ablasi dapat menghasilkan pemijahan yang berhasil. Keuntungannya, hormon memiliki waktu paruh yang pendek sehingga tidak menimbulkan efek samping jangka panjang.
**Peningkatan Nutrisi**: Pemberian pakan berkualitas tinggi dengan kandungan protein 50% menggunakan bahan seperti tepung cumi-cumi, cacing laut, kerang, dan cacing tanah dapat meningkatkan kematangan gonad secara alami. Nutrisi yang tepat tidak hanya meningkatkan tingkat pemijahan alami tetapi juga meningkatkan kualitas telur dan keturunan.
**Manipulasi Lingkungan**: Dengan mengoptimalkan kondisi hatchery seperti siklus cahaya, kualitas air, dan suhu, pematangan ovarium dan pemijahan alami dapat distimulasi tanpa memerlukan ablasi. Teknik ini meniru isyarat alami yang direspons udang di alam liar dan memerlukan keahlian daripada intervensi konstan.
**Pemuliaan Selektif**: Program pemuliaan yang ditargetkan dapat meningkatkan sifat-sifat produktivitas alami dan efisiensi reproduksi dalam lingkungan captive. Dengan memperbanyak garis keturunan udang yang berkembang baik tanpa intervensi, industri dapat secara bertahap menghentikan ketergantungan pada ablasi sambil mengamankan indukan yang lebih kuat dan lebih tangguh untuk jangka panjang.
**Teknologi Hatchery Modern**: Fasilitas hatchery modern kini dilengkapi dengan sistem pengolahan air limbah (IPAL), kontrol kualitas air yang ketat, laboratorium uji kesehatan, dan infrastruktur pendukung lainnya yang memungkinkan budidaya udang yang ramah lingkungan tanpa bergantung pada teknik ablasi.

---

## Perubahan Global: Industri Bergerak Menuju Penghapusan Ablasi
Tekanan dari kelompok kesejahteraan hewan, konsumen, dan retailer besar telah mendorong perubahan signifikan dalam industri udang global. Beberapa perkembangan penting meliputi:
**Global Seafood Alliance (GSA)**: Mengumumkan bahwa semua fasilitas produksi udang bersertifikat Best Aquaculture Practices (BAP) harus menghentikan ablasi tangkai mata atau pengadaan postlarva dari hatchery yang mempraktikkan ablasi paling lambat akhir 2030. Keputusan ini didasarkan pada penelitian ekstensif dan kolaborasi dengan mitra akademis, NGO, dan industri untuk mengidentifikasi metode alternatif yang layak secara komersial.
**Retailer Besar di Inggris**: Beberapa retailer besar seperti Tesco, Co-op, Morrisons, dan Iceland telah berkomitmen untuk menghapus ablasi tangkai mata dari rantai pasokan udang mereka. Tesco, retailer terbesar di Inggris yang memasok sekitar 5 miliar udang per tahun, telah menetapkan kebijakan kesejahteraan udang yang melarang ablasi.
**Standar Organik dan Sertifikasi**: Standar organik Uni Eropa telah melarang ablasi tangkai mata selama bertahun-tahun, dan GLOBALG.A.P. juga akan mewajibkan produksi bebas ablasi untuk postlarva mulai 2024.

---

## Kesimpulan: Menuju Aquaculture yang Lebih Etis
Ablasi tangkai mata udang adalah contoh nyata bagaimana praktik yang dulunya dianggap revolusioner kini dipertanyakan dari segi etika dan keberlanjutannya. Meskipun teknik ini efektif meningkatkan produksi telur dalam jangka pendek, dampak negatifnya terhadap kesejahteraan udang, kualitas keturunan, dan keberlanjutan jangka panjang tidak bisa diabaikan lagi.
Dengan kemajuan teknologi, penelitian ilmiah, dan meningkatnya kesadaran akan sentiensi hewan akuatik, industri aquaculture kini memiliki berbagai alternatif yang lebih ramah dan berkelanjutan. Transisi menuju produksi udang tanpa ablasi bukan hanya masalah kesejahteraan hewan, tetapi juga tentang menciptakan industri yang lebih sehat, lebih kuat, dan lebih bertanggung jawab untuk masa depan.
Perubahan ini memerlukan kolaborasi antara peneliti, produsen, pemerintah, dan konsumen. Namun dengan komitmen yang tepat dan dukungan infrastruktur yang memadai, masa depan di mana udang tidak lagi harus kehilangan mata mereka demi reproduksi bukan lagi sekadar impian—tetapi sebuah tujuan yang realistis dan dapat dicapai.

#AblationFree #Shrimp #AnimalWelfare #SustainableAquaculture
  `},{id:17,title:"Artemia Standar vs SEP-Art Artemia",date:"2026-05-20",summary:"Mengenal perbedaan Artemia standar dan SEP-Art Artemia, termasuk cara kerja, keunggulan, dan brand yang umum digunakan di hatchery.",slug:"artemia-standar-vs-separt-artemia",category:"Live Feed",readTime:"5 min read",image:"/BlogImage/artemia.png",content:`
# Artemia Standar vs SEP-Art Artemia



Artemia adalah pakan hidup penting di hatchery karena ukurannya kecil, mudah dicerna, dan cocok untuk larva udang maupun ikan. Di lapangan, Artemia umumnya digunakan dalam dua pendekatan: Artemia standar dan SEP-Art Artemia.

---

## Artemia Standar

![Artemia Standar](/BlogImage/artemiastandar.png)

Artemia standar adalah Artemia cyst yang ditetaskan dengan metode biasa. Proses ini paling umum dipakai karena sederhana, praktis, dan cocok untuk kebutuhan harian hatchery.

Dalam pemakaian standar, kualitas hasil sangat dipengaruhi oleh mutu cyst, salinitas, suhu, aerasi, dan kebersihan media penetasan. Karena itu, meski prosesnya mudah, hasil nauplii tetap perlu dikelola dengan baik agar kebersihannya tetap terjaga.

Brand dan merk yang umum dipakai:
- O.S.I. - Artemia Crystal
- GSLA - Artemia Supreme Plus / Golden West
- GSLA - Artemia Sanders
- GSLA - Artemia Mackay

Kelebihannya:
- Mudah digunakan.
- Praktis untuk kultur rutin.
- Umumnya lebih ekonomis untuk kebutuhan harian.
- Banyak tersedia di pasaran.

---

## SEP-Art Artemia

![SEP-Art Artemia](/BlogImage/ArtemiaSepart.png)

SEP-Art Artemia adalah Artemia cyst dengan teknologi magnetik yang membuat hasil penetasan lebih mudah dipisahkan dari shell dan partikel pengotor. Teknologi ini dirancang untuk menghasilkan nauplii yang lebih bersih, lebih aktif, dan lebih efisien dipanen.

Pada prosesnya, cyst dilapisi material magnetik non-toksik, lalu saat penetasan selesai, shell yang belum menetas bisa ditarik atau ditahan oleh magnet separator. Hasilnya, nauplii yang didapat lebih bersih dan lebih siap digunakan untuk kebutuhan hatchery yang butuh kontrol kualitas lebih tinggi.

Brand dan merk yang umum dipakai:
- GSLA - Artemia Supreme Plus / Golden West (Sep-Art)
- GSLA - Artemia Mackay (Sep-Art)
- INVE - Artemia EG (Sep-Art)

Kelebihannya:
- Hasil lebih bersih.
- Lebih mudah dipisahkan dari shell.
- Mengurangi partikel pengotor ikut terbawa.
- Cocok untuk hatchery yang mengejar kualitas pakan hidup yang lebih konsisten.

---

## Perbedaan Singkat
- Artemia standar: proses biasa, lebih sederhana, cocok untuk pemakaian umum dan kebutuhan rutin.
- SEP-Art Artemia: memakai teknologi magnetik, hasil lebih bersih, dan lebih cocok untuk hatchery yang mengutamakan efisiensi serta kebersihan hasil panen.

Kalau kamu mau beli Artemia, kamu bisa cek toko online kami di Gizi Laut melalui [Shopee](https://shopee.co.id/gizilaut). 
Kamu juga bisa hubungi kami langsung via WhatsApp di [0823-2965-3189](https://wa.me/6282329653189) untuk info produk dan pemesanan.

---

## Kesimpulan
Kalau kebutuhanmu adalah pakan hidup harian yang praktis, Artemia standar sudah cukup. Tapi kalau kamu ingin hasil yang lebih bersih dan lebih mudah dipisahkan, SEP-Art Artemia lebih unggul karena memakai teknologi magnetik yang memang dirancang untuk meningkatkan efisiensi hatchery.

#Artemia #SEPArt #LiveFeed #Hatchery
  `},{id:18,title:"Artemia Standar: Contoh Artemia Crystal O.S.I",date:"2026-05-30",summary:"Penjelasan singkat tentang Artemia standar dengan contoh Artemia Crystal dari O.S.I Amerika sebagai pakan hidup untuk larva udang dan ikan.",slug:"artemia-crystal-untuk-benur",category:"Live Feed",readTime:"5 min read",image:"/BlogImage/artemia.png",content:`
# Mengenal Artemia Standar: Contoh Artemia Crystal O.S.I

Artemia adalah pakan hidup yang sangat populer di hatchery karena ukurannya kecil, gerakannya aktif, dan mudah dicerna oleh larva udang maupun ikan. Artemia standar merujuk pada Artemia cyst (telur kering) yang ditetaskan dengan metode biasa tanpa teknologi magnetik atau proses khusus lainnya.

---

## Apa Itu Artemia Standar?

Artemia standar berasal dari cyst yang dikeringkan dan bisa disimpan dalam waktu lama, lalu sewaktu-waktu ditetaskan menjadi nauplii (larva Artemia) di air asin. Proses ini disukai banyak pembudidaya karena praktis: cukup siapkan air bersalinitas sesuai, aerasi kuat, dan pencahayaan yang cukup, maka nauplii akan menetas dalam beberapa belas jam saja.

Dalam pemakaian harian, kualitas Artemia standar sangat dipengaruhi oleh mutu cyst (asal dan grade), cara penyimpanan, serta kebersihan selama proses penetasan. Kalau faktor-faktor ini dijaga, hasil nauplii bisa stabil, bersih, dan aman diberikan ke larva tanpa banyak kotoran ikut terbawa.

---

## Contoh Produk: Artemia Crystal O.S.I Amerika

![Artemia Crystal O.S.I](/BlogImage/crystal.png)

Salah satu contoh Artemia standar terbaik yang banyak dipakai adalah Artemia Crystal dari O.S.I (Ocean Star International, Inc.), Amerika. Produk ini berisi Artemia cyst yang dipanen dari Great Salt Lake di Utah, kemudian dicuci, dikeringkan, dan dikemas vakum untuk menjaga kesegaran serta daya tetasnya.

Artemia Crystal dikenal punya tingkat penetasan yang tinggi dengan nauplii berwarna oranye kemerahan yang aktif, sehingga sangat menarik bagi larva. Nauplii yang dihasilkan kaya protein dan lemak esensial, sehingga membantu pertumbuhan cepat, warna lebih cerah, dan daya tahan tubuh yang lebih baik pada larva ikan maupun udang.

---

## Kenapa Hatchery Suka Artemia Crystal?

Untuk hatchery, keunggulan utama Artemia Crystal adalah konsistensi: satu kaleng bisa digunakan bertahap, dan selama penyimpanan dijaga dengan baik, daya tetas tetap stabil dari satu batch ke batch berikutnya. Hal ini memudahkan perencanaan pakan hidup harian tanpa khawatir kualitas turun drastis.

Selain itu, karena berasal dari sumber yang jelas dan diproses dengan kontrol mutu ketat, Artemia Crystal membantu mengurangi risiko masalah kualitas pakan hidup yang bisa berpengaruh ke performa benur. Ditambah lagi, cara penetasannya sederhana dan bisa diadaptasi di berbagai skala, mulai dari akuarium hobi sampai hatchery komersial.

---

## Tips Singkat Menggunakan Artemia Standar

Untuk mendapatkan hasil maksimal dari Artemia standar seperti Artemia Crystal, ada beberapa hal dasar yang perlu dijaga:
- Gunakan air dengan salinitas dan pH yang sesuai, serta aerasi kuat agar cyst selalu tersuspensi.
- Jaga suhu penetasan stabil sesuai rekomendasi (umumnya kisaran suhu tropis hangat).
- Simpan kaleng atau kemasan dalam kondisi kering dan sejuk lebih baik lagi jika masuk kedalam freezer, sebaiknya tertutup rapat setelah dibuka.

Dengan mengikuti langkah-langkah dasar ini, Artemia standar bisa menjadi pakan hidup yang andal dan ekonomis untuk mendukung pertumbuhan larva di hatchery.

#Artemia #ArtemiaStandar #ArtemiaCrystal #LiveFeed #Hatchery
  `},{id:19,title:"Artemia SEP-Art: Contoh Artemia EG INVE",date:"2026-05-30",summary:"Mengenal Artemia SEP-Art dengan contoh Artemia EG INVE sebagai pilihan Artemia berkualitas tinggi dengan pemanenan lebih bersih dan efisien untuk hatchery.",slug:"artemia-separt-eg-inve",category:"Live Feed",readTime:"5 min read",image:"/BlogImage/artemia.png",content:`
# Artemia SEP-Art: Contoh Artemia EG INVE

Di hatchery, tantangan utama saat memakai Artemia adalah bukan cuma menetas banyak, tapi juga bagaimana memanen nauplii yang benar-benar bersih dari shell dan cyst yang tidak menetas. Di sinilah Artemia dengan teknologi SEP-Art masuk sebagai solusi yang membuat proses panen jadi jauh lebih rapi dan efisien.

---

## Apa Itu Artemia SEP-Art?

Artemia SEP-Art pada dasarnya adalah Artemia cyst biasa yang diberi lapisan magnetik non-toksik di bagian shell-nya. Lapisan ini membuat shell dan cyst yang belum menetas bisa ditarik oleh alat dengan magnet saat panen, sementara nauplii yang aktif tetap bebas di air.

Keuntungannya, setelah penetasan kamu bisa memisahkan nauplii dari kotoran secara jauh lebih bersih hanya dengan alat separator berbasis magnet, tanpa perlu proses kimia yang rumit. Hasil akhirnya adalah suspensi nauplii yang lebih murni, lebih aman, dan siap diberikan ke larva udang maupun ikan di hatchery.

---

## Contoh Produk: Artemia EG INVE (SEP-Art)

![Artemia EG INVE SEP-Art](/BlogImage/eg.png)

Artemia EG dari INVE adalah salah satu contoh Artemia SEP-Art yang banyak dipakai di hatchery modern. Produk ini menggunakan cyst berkualitas tinggi dengan karakter penetasan yang seragam, kemudian diproses dengan teknologi SEP-Art sehingga shell-nya bisa ditarik oleh magnet saat panen.

Bagi pembudidaya, ini berarti dua hal penting: pertama, nauplii yang dipanen jauh lebih bersih karena hampir tidak ada shell yang ikut; kedua, hampir semua nauplii yang menetas bisa diambil, sehingga hasil nyata per kaleng Artemia terasa lebih maksimal. Kombinasi kualitas cyst EG dan teknologi SEP-Art membuat Artemia ini cocok untuk hatchery yang mengejar standar pakan hidup yang lebih konsisten.

---

## Keunggulan Artemia SEP-Art untuk Hatchery

Dibandingkan Artemia standar, Artemia SEP-Art seperti Artemia EG INVE menawarkan beberapa keunggulan praktis untuk operasional harian:

- Pemanenan nauplii jauh lebih bersih karena shell dan cyst yang tidak menetas tertahan di magnet.
- Efisiensi lebih tinggi, karena hampir semua nauplii bisa dipanen tanpa takut kotoran ikut terbawa.
- Tidak perlu proses decapsulation dengan bahan kimia keras, sehingga lebih aman untuk pekerja dan lingkungan.
- Menghemat waktu dan tenaga, sehingga tim di hatchery bisa fokus ke pengelolaan larva dan kualitas air.

Dengan kombinasi faktor-faktor ini, Artemia EG SEP-Art membantu hatchery menjaga kualitas pakan hidup sambil menekan potensi masalah dari kotoran dan sisa shell yang berlebihan di bak larva.

---

## Tips Singkat Menggunakan Artemia EG SEP-Art

Secara umum, cara menetas Artemia EG SEP-Art mirip dengan Artemia cyst biasa: gunakan air dengan salinitas sesuai, aerasi kuat, dan suhu hangat yang stabil. Perbedaannya ada di tahap panen, di mana kamu menggunakan alat separator dengan magnet untuk menahan shell dan cyst di satu sisi, sementara nauplii yang aktif tetap bebas di air dan siap diambil.

Yang penting, pastikan peralatan penetasan dan separator selalu bersih, dan ikuti petunjuk pemakaian dari pabrik (waktu penetasan, dosis per liter, serta cara menggunakan magnet). Dengan begitu, kamu bisa menikmati semua keunggulan teknologi SEP-Art: nauplii lebih bersih, panen lebih mudah, dan hasil yang lebih efisien untuk hatchery.

#Artemia #SEPArt #ArtemiaEG #INVE #LiveFeed #Hatchery
  `},{id:20,title:"Udang Vaname Diam di Dasar: Normal atau Tanda Masalah?",date:"2026-7-3",summary:"Udang vaname yang berada di dasar kolam bukan berarti selalu sakit. Perilaku tersebut merupakan bagian dari kebiasaan alaminya.",slug:"perilaku-udang-vaname",category:"Manajemen Tambak",readTime:"5 min read",image:"/BlogImage/udang-diam.png",content:`
# Pernah melihat udang vaname lebih banyak diam di dasar kolam?

Kondisi ini belum tentu menunjukkan adanya masalah. Udang vaname memang memiliki kebiasaan hidup di dasar perairan (benthic) dan umumnya lebih aktif mencari makan pada sore hingga malam hari. Karena itu, berada di dasar kolam merupakan perilaku yang normal.

Namun, jika udang yang sebelumnya aktif tiba-tiba menjadi sangat pasif, bergerombol, atau menunjukkan perubahan perilaku yang tidak biasa, kondisi tersebut patut diperhatikan. Dalam budidaya, perubahan perilaku sering menjadi salah satu tanda awal bahwa lingkungan kolam sedang mengalami gangguan.

---

## Apa yang Bisa Menyebabkan Udang Lebih Pasif?

Salah satu penyebab yang paling umum adalah penurunan kadar oksigen terlarut (DO). Saat oksigen berkurang, udang dapat menjadi kurang aktif, berkumpul di area yang memiliki sirkulasi air lebih baik, atau mendekati titik aerasi.

Selain itu, kualitas air yang menurun akibat tingginya amonia, nitrit, atau penumpukan bahan organik juga dapat memicu stres. Dalam kondisi tersebut, aktivitas udang biasanya berkurang dan respons terhadap pakan dapat ikut menurun.

Perubahan suhu yang terjadi secara tiba-tiba juga dapat memengaruhi metabolisme udang sehingga gerakannya menjadi lebih lambat. Di sisi lain, udang yang sedang mengalami pergantian kulit (molting) memang cenderung bersembunyi dan mengurangi aktivitas untuk sementara waktu. Gangguan dari predator atau aktivitas di sekitar kolam juga dapat membuat udang menjadi lebih waspada dan tidak banyak bergerak.

---

## Perhatikan Perubahan Polanya

Hal yang paling penting bukan hanya melihat posisi udang di dasar kolam, tetapi membandingkan perilakunya dengan kondisi pada hari-hari sebelumnya.

Jika udang yang biasanya aktif mencari pakan tiba-tiba lebih banyak diam, respons makannya menurun, atau berkumpul di lokasi tertentu, sebaiknya segera lakukan pemeriksaan kualitas air. Perubahan kecil seperti ini sering kali muncul lebih awal sebelum masalah yang lebih serius terjadi.

---

## Apa yang Perlu Dicek?

Saat menemukan perubahan perilaku, lakukan pemeriksaan terhadap kadar oksigen terlarut, pH, suhu, amonia, dan nitrit. Kondisi dasar kolam juga perlu diperhatikan, terutama jika terdapat penumpukan bahan organik atau lumpur yang dapat memengaruhi kualitas air.

Selain itu, amati respons makan udang pada setiap waktu pemberian pakan. Penurunan konsumsi pakan sering menjadi indikator awal bahwa kondisi lingkungan atau kesehatan udang sedang terganggu.

---

## Kesimpulan

Udang vaname yang berada di dasar kolam bukan berarti selalu sakit. Perilaku tersebut merupakan bagian dari kebiasaan alaminya. Namun, jika pola aktivitas berubah secara tiba-tiba, berlangsung terus-menerus, atau disertai penurunan nafsu makan dan perubahan kualitas air, kondisi tersebut perlu segera dievaluasi.

Dalam budidaya, keberhasilan sering ditentukan oleh kemampuan membaca perubahan kecil sejak dini. Semakin cepat penyebabnya ditemukan, semakin besar peluang untuk menjaga kesehatan udang dan mempertahankan produktivitas tambak.

#Artemia #SEPArt #ArtemiaEG #INVE #LiveFeed #Hatchery
  `},{id:21,title:"Kenapa Ikan Tetap Butuh Oksigen?",date:"2026-7-15",summary:"Ikan memang hidup di dalam air, tetapi tetap membutuhkan oksigen untuk bernapas.",slug:"kebutuhan-oksigen-pada-ikan",category:"Growth",readTime:"5 min read",image:"/BlogImage/nafas-ikan.png",content:`
# Bagaimana Ikan Bernapas?

Saat berenang, air masuk melalui mulut ikan lalu mengalir melewati insang. Di dalam insang terdapat banyak pembuluh darah halus yang memungkinkan oksigen terlarut berpindah dari air ke dalam darah, sementara karbon dioksida dilepaskan kembali ke air.

Proses ini sangat efisien, tetapi hanya dapat berlangsung dengan baik jika kadar oksigen terlarut (DO) di dalam air tetap mencukupi.

---

## Kenapa Ikan Sering Megap di Permukaan?

Ketika kadar oksigen terlarut mulai menurun, ikan biasanya akan menunjukkan tanda-tanda stres. Salah satu gejala yang paling mudah dikenali adalah ikan sering naik ke permukaan dan membuka-tutup mulut dengan cepat atau terlihat "megap".

Perilaku ini terjadi karena lapisan permukaan air umumnya memiliki kandungan oksigen yang sedikit lebih tinggi akibat kontak langsung dengan udara. Jika banyak ikan berkumpul di permukaan atau di dekat aerator, kondisi tersebut dapat menjadi tanda bahwa kadar oksigen di kolam perlu segera diperiksa.

---

## Berapa Kadar Oksigen yang Baik?

Kebutuhan oksigen berbeda pada setiap spesies, tetapi secara umum kadar oksigen terlarut di atas **5 mg/L** dianggap baik untuk banyak jenis ikan budidaya. Ketika kadar oksigen turun hingga sekitar **3–5 mg/L**, beberapa spesies mulai mengalami stres. Jika turun di bawah **3 mg/L**, banyak ikan akan menunjukkan gangguan pernapasan, dan kondisi yang lebih rendah lagi dapat meningkatkan risiko kematian apabila berlangsung terlalu lama.

Karena itu, aerasi yang memadai dan pengelolaan kualitas air menjadi bagian penting dalam budidaya maupun pemeliharaan ikan.

---

## Tidak Semua Ikan Memiliki Kemampuan yang Sama

Beberapa ikan memiliki adaptasi khusus untuk menghadapi kondisi oksigen rendah. Cupang, misalnya, memiliki organ labirin yang memungkinkan mereka mengambil oksigen langsung dari udara. Lele juga relatif lebih toleran terhadap kadar oksigen yang rendah dibandingkan banyak spesies lainnya.

Meski begitu, kemampuan tersebut bukan berarti ikan dapat dipelihara dalam kondisi kualitas air yang buruk. Lingkungan dengan oksigen yang cukup tetap dibutuhkan agar ikan dapat tumbuh sehat dan optimal.

---

## Kesimpulan

Ikan memang hidup di dalam air, tetapi tetap membutuhkan oksigen untuk bernapas. Oksigen tersebut diperoleh dari air melalui insang, sehingga kualitas air dan kadar oksigen terlarut menjadi faktor penting dalam menjaga kesehatan ikan.

Jika ikan mulai sering megap di permukaan, jangan abaikan tanda tersebut. Bisa jadi, ikan sedang memberi sinyal bahwa kondisi air perlu segera diperiksa sebelum masalah berkembang menjadi lebih serius.

#Oksigen #Aerasi #IkanBernafas #LiveFeed #Hatchery
  `}],$a="https://gizilaut.com";function Es(a){try{return new Date(a).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"})}catch(n){return a}}function Ms(){const{slug:a}=Ft(),n=Ke.find(s=>s.slug===a);if(!n)return D.jsx(Xn,{title:"Blog tidak ditemukan",description:"Halaman blog tidak ditemukan",children:D.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-20 text-center",children:[D.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Blog tidak ditemukan"}),D.jsx("p",{className:"text-gray-500",children:"Maaf, blog yang kamu cari tidak tersedia."})]})});const e=`${n.title} | Gizi Laut`,t=(n.summary||n.title).slice(0,155),i=`${$a}/blog/${n.slug}/`,r=n.image&&n.image.length>0?n.image.startsWith("http")?n.image:`${$a}${n.image}`:`${$a}/favicon.ico`,u=n.date,l=n.updatedAt||n.dateModified||n.date,o={"@context":"https://schema.org","@type":"BlogPosting",headline:n.title,description:t,image:[r],author:[{"@type":"Organization",name:"Gizi Laut"}],publisher:{"@type":"Organization",name:"Gizi Laut",logo:{"@type":"ImageObject",url:`${$a}/favicon.ico`}},datePublished:u,dateModified:l,mainEntityOfPage:{"@type":"WebPage","@id":i}},m=Ke.filter(s=>s.slug!==n.slug).slice(0,3);return D.jsxs(Xn,{title:e,description:t,canonical:i,keywords:`gizi laut, blog, ${n.category||"akuakultur"}, ${n.slug}`,children:[D.jsxs(Ot,{children:[D.jsx("meta",{property:"og:title",content:e}),D.jsx("meta",{property:"og:description",content:t}),D.jsx("meta",{property:"og:type",content:"article"}),D.jsx("meta",{property:"og:url",content:i}),D.jsx("meta",{property:"og:image",content:r}),D.jsx("meta",{property:"og:site_name",content:"Gizi Laut"}),D.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),D.jsx("meta",{name:"twitter:title",content:e}),D.jsx("meta",{name:"twitter:description",content:t}),D.jsx("meta",{name:"twitter:image",content:r}),D.jsx("script",{type:"application/ld+json",children:JSON.stringify(o)})]}),D.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-16",children:[D.jsx("h1",{className:"text-3xl font-bold mb-4",children:n.title}),D.jsxs("p",{className:"text-sm text-gray-500 mb-6",children:[n.category?`${n.category} • `:"",n.readTime?`${n.readTime} • `:"",Es(n.date)]}),n.image&&D.jsx("img",{src:n.image,alt:n.title,className:"w-full h-auto rounded-xl mb-8 shadow-md",loading:"eager"}),D.jsx("article",{className:"prose lg:prose-lg max-w-none",children:D.jsx(ws,{children:n.content})}),D.jsx("hr",{className:"my-10"}),D.jsxs("section",{className:"mt-8",children:[D.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Artikel terkait"}),D.jsx("ul",{className:"list-disc ml-6 space-y-2",children:m.map(s=>D.jsx("li",{children:D.jsx(_t,{to:`/blog/${s.slug}/`,className:"text-primary hover:underline",children:s.title})},s.slug))})]})]})]})}export{Ms as default};

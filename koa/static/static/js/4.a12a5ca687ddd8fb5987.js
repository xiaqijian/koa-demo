webpackJsonp([4],{GKmE:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e,t){return e.some(function(e){return t.indexOf(e)>-1})}},HQMC:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.btngetqr[data-v-93161848] {\n  margin-bottom: 20px;\n}\n.markred[data-v-93161848] {\n  color: red;\n}\n.tablebox[data-v-93161848] {\n  height: 300px;\n  background: #fff;\n  padding: 10px;\n}\n.bg[data-v-93161848] {\n  background: #efefef;\n  height: 100%;\n}\n.infoselect[data-v-93161848] {\n  background: #fff;\n  padding-top: 24px;\n  margin-bottom: 10px;\n  padding-left: 10px;\n}\n.pagina[data-v-93161848] {\n  background: #fff;\n  padding: 10px;\n}\n",""])},"Q/nU":function(e,t,a){var r=a("HQMC");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("2eda2aa7",r,!0)},W77Z:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8};function n(e){this.mode=r.MODE_8BIT_BYTE,this.data=e}n.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}};var i=n,s={L:1,M:0,Q:3,H:2};function o(e,t){this.totalCount=e,this.dataCount=t}o.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.getRSBlocks=function(e,t){var a=o.getRsBlockTable(e,t);if(void 0==a)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var r=a.length/3,n=new Array,i=0;i<r;i++)for(var s=a[3*i+0],l=a[3*i+1],c=a[3*i+2],u=0;u<s;u++)n.push(new o(l,c));return n},o.getRsBlockTable=function(e,t){switch(t){case s.L:return o.RS_BLOCK_TABLE[4*(e-1)+0];case s.M:return o.RS_BLOCK_TABLE[4*(e-1)+1];case s.Q:return o.RS_BLOCK_TABLE[4*(e-1)+2];case s.H:return o.RS_BLOCK_TABLE[4*(e-1)+3];default:return}};var l=o;function c(){this.buffer=new Array,this.length=0}c.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var a=0;a<t;a++)this.putBit(1==(e>>>t-a-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};for(var u=c,d={glog:function(e){if(e<1)throw new Error("glog("+e+")");return d.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return d.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;h<8;h++)d.EXP_TABLE[h]=1<<h;for(h=8;h<256;h++)d.EXP_TABLE[h]=d.EXP_TABLE[h-4]^d.EXP_TABLE[h-5]^d.EXP_TABLE[h-6]^d.EXP_TABLE[h-8];for(h=0;h<255;h++)d.LOG_TABLE[d.EXP_TABLE[h]]=h;var f=d;function m(e,t){if(void 0==e.length)throw new Error(e.length+"/"+t);for(var a=0;a<e.length&&0==e[a];)a++;this.num=new Array(e.length-a+t);for(var r=0;r<e.length-a;r++)this.num[r]=e[r+a]}m.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),a=0;a<this.getLength();a++)for(var r=0;r<e.getLength();r++)t[a+r]^=f.gexp(f.glog(this.get(a))+f.glog(e.get(r)));return new m(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=f.glog(this.get(0))-f.glog(e.get(0)),a=new Array(this.getLength()),r=0;r<this.getLength();r++)a[r]=this.get(r);for(r=0;r<e.getLength();r++)a[r]^=f.gexp(f.glog(e.get(r))+t);return new m(a,0).mod(e)}};var v=m,g=0,p=1,_=2,b=3,I=4,C=5,y=6,w=7,k={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;k.getBCHDigit(t)-k.getBCHDigit(k.G15)>=0;)t^=k.G15<<k.getBCHDigit(t)-k.getBCHDigit(k.G15);return(e<<10|t)^k.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;k.getBCHDigit(t)-k.getBCHDigit(k.G18)>=0;)t^=k.G18<<k.getBCHDigit(t)-k.getBCHDigit(k.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return k.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,a){switch(e){case g:return(t+a)%2==0;case p:return t%2==0;case _:return a%3==0;case b:return(t+a)%3==0;case I:return(Math.floor(t/2)+Math.floor(a/3))%2==0;case C:return t*a%2+t*a%3==0;case y:return(t*a%2+t*a%3)%2==0;case w:return(t*a%3+(t+a)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new v([1],0),a=0;a<e;a++)t=t.multiply(new v([1,f.gexp(a)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:case r.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),a=0,r=0;r<t;r++)for(var n=0;n<t;n++){for(var i=0,s=e.isDark(r,n),o=-1;o<=1;o++)if(!(r+o<0||t<=r+o))for(var l=-1;l<=1;l++)n+l<0||t<=n+l||0==o&&0==l||s==e.isDark(r+o,n+l)&&i++;i>5&&(a+=3+i-5)}for(r=0;r<t-1;r++)for(n=0;n<t-1;n++){var c=0;e.isDark(r,n)&&c++,e.isDark(r+1,n)&&c++,e.isDark(r,n+1)&&c++,e.isDark(r+1,n+1)&&c++,0!=c&&4!=c||(a+=3)}for(r=0;r<t;r++)for(n=0;n<t-6;n++)e.isDark(r,n)&&!e.isDark(r,n+1)&&e.isDark(r,n+2)&&e.isDark(r,n+3)&&e.isDark(r,n+4)&&!e.isDark(r,n+5)&&e.isDark(r,n+6)&&(a+=40);for(n=0;n<t;n++)for(r=0;r<t-6;r++)e.isDark(r,n)&&!e.isDark(r+1,n)&&e.isDark(r+2,n)&&e.isDark(r+3,n)&&e.isDark(r+4,n)&&!e.isDark(r+5,n)&&e.isDark(r+6,n)&&(a+=40);var u=0;for(n=0;n<t;n++)for(r=0;r<t;r++)e.isDark(r,n)&&u++;return a+=10*(Math.abs(100*u/t/t-50)/5)}},D=k;function F(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var B=F.prototype;B.addData=function(e){var t=new i(e);this.dataList.push(t),this.dataCache=null},B.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},B.getModuleCount=function(){return this.moduleCount},B.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=l.getRSBlocks(e,this.errorCorrectLevel),a=new u,r=0,n=0;n<t.length;n++)r+=t[n].dataCount;for(n=0;n<this.dataList.length;n++){var i=this.dataList[n];a.put(i.mode,4),a.put(i.getLength(),D.getLengthInBits(i.mode,e)),i.write(a)}if(a.getLengthInBits()<=8*r)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},B.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++){this.modules[a]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[a][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=F.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},B.setupPositionProbePattern=function(e,t){for(var a=-1;a<=7;a++)if(!(e+a<=-1||this.moduleCount<=e+a))for(var r=-1;r<=7;r++)t+r<=-1||this.moduleCount<=t+r||(this.modules[e+a][t+r]=0<=a&&a<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==a||6==a)||2<=a&&a<=4&&2<=r&&r<=4)},B.getBestMaskPattern=function(){for(var e=0,t=0,a=0;a<8;a++){this.makeImpl(!0,a);var r=D.getLostPoint(this);(0==a||e>r)&&(e=r,t=a)}return t},B.createMovieClip=function(e,t,a){var r=e.createEmptyMovieClip(t,a);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,s=0;s<this.modules[n].length;s++){var o=1*s;this.modules[n][s]&&(r.beginFill(0,100),r.moveTo(o,i),r.lineTo(o+1,i),r.lineTo(o+1,i+1),r.lineTo(o,i+1),r.endFill())}return r},B.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},B.setupPositionAdjustPattern=function(){for(var e=D.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var a=0;a<e.length;a++){var r=e[t],n=e[a];if(null==this.modules[r][n])for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)this.modules[r+i][n+s]=-2==i||2==i||-2==s||2==s||0==i&&0==s}},B.setupTypeNumber=function(e){for(var t=D.getBCHTypeNumber(this.typeNumber),a=0;a<18;a++){var r=!e&&1==(t>>a&1);this.modules[Math.floor(a/3)][a%3+this.moduleCount-8-3]=r}for(a=0;a<18;a++){r=!e&&1==(t>>a&1);this.modules[a%3+this.moduleCount-8-3][Math.floor(a/3)]=r}},B.setupTypeInfo=function(e,t){for(var a=this.errorCorrectLevel<<3|t,r=D.getBCHTypeInfo(a),n=0;n<15;n++){var i=!e&&1==(r>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;n<15;n++){i=!e&&1==(r>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i}this.modules[this.moduleCount-8][8]=!e},B.mapData=function(e,t){for(var a=-1,r=this.moduleCount-1,n=7,i=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var o=0;o<2;o++)if(null==this.modules[r][s-o]){var l=!1;i<e.length&&(l=1==(e[i]>>>n&1)),D.getMask(t,r,s-o)&&(l=!l),this.modules[r][s-o]=l,-1==--n&&(i++,n=7)}if((r+=a)<0||this.moduleCount<=r){r-=a,a=-a;break}}},F.PAD0=236,F.PAD1=17,F.createData=function(e,t,a){for(var r=l.getRSBlocks(e,t),n=new u,i=0;i<a.length;i++){var s=a[i];n.put(s.mode,4),n.put(s.getLength(),D.getLengthInBits(s.mode,e)),s.write(n)}var o=0;for(i=0;i<r.length;i++)o+=r[i].dataCount;if(n.getLengthInBits()>8*o)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*o+")");for(n.getLengthInBits()+4<=8*o&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*o||(n.put(F.PAD0,8),n.getLengthInBits()>=8*o));)n.put(F.PAD1,8);return F.createBytes(n,r)},F.createBytes=function(e,t){for(var a=0,r=0,n=0,i=new Array(t.length),s=new Array(t.length),o=0;o<t.length;o++){var l=t[o].dataCount,c=t[o].totalCount-l;r=Math.max(r,l),n=Math.max(n,c),i[o]=new Array(l);for(var u=0;u<i[o].length;u++)i[o][u]=255&e.buffer[u+a];a+=l;var d=D.getErrorCorrectPolynomial(c),h=new v(i[o],d.getLength()-1).mod(d);s[o]=new Array(d.getLength()-1);for(u=0;u<s[o].length;u++){var f=u+h.getLength()-s[o].length;s[o][u]=f>=0?h.get(f):0}}var m=0;for(u=0;u<t.length;u++)m+=t[u].totalCount;var g=new Array(m),p=0;for(u=0;u<r;u++)for(o=0;o<t.length;o++)u<i[o].length&&(g[p++]=i[o][u]);for(u=0;u<n;u++)for(o=0;o<t.length;o++)u<s[o].length&&(g[p++]=s[o][u]);return g};var E=F;var L={render:function(e){var t=this.className,a=this.value,r=this.level,n=this.background,i=this.foreground,s=this.size;return e("div",{class:t,attrs:{value:a,level:r,background:n,foreground:i}},[e("canvas",{attrs:{height:s,width:s},style:{width:s+"px",height:s+"px"},ref:"qrcode-vue"},[])])},props:{value:{type:String,required:!0,default:""},className:{type:String,default:""},size:{type:[Number,String],default:100,validator:function(e){return!0!==isNaN(Number(e))}},level:{type:String,default:"L",validator:function(e){return["L","Q","M","H"].indexOf(e)>-1}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"}},methods:{render:function(){var e=this.value,t=this.size,a=this.level,r=this.background,n=this.foreground,i=t>>>0,o=new E(-1,s[a]);o.addData(function(e){for(var t="",a=0;a<e.length;a++){var r=e.charCodeAt(a);r<128?t+=String.fromCharCode(r):r<2048?(t+=String.fromCharCode(192|r>>6),t+=String.fromCharCode(128|63&r)):r<55296||r>=57344?(t+=String.fromCharCode(224|r>>12),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r)):(a++,r=65536+((1023&r)<<10|1023&e.charCodeAt(a)),t+=String.fromCharCode(240|r>>18),t+=String.fromCharCode(128|r>>12&63),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r))}return t}(e)),o.make();var l=this.$refs["qrcode-vue"],c=l.getContext("2d"),u=o.modules,d=i/u.length,h=i/u.length,f=(window.devicePixelRatio||1)/function(e){return e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1}(c);l.height=l.width=i*f,c.scale(f,f),u.forEach(function(e,t){e.forEach(function(e,a){c.fillStyle=e?n:r;var i=Math.ceil((a+1)*d)-Math.floor(a*d),s=Math.ceil((t+1)*h)-Math.floor(t*h);c.fillRect(Math.round(a*d),Math.round(t*h),i,s)})})}},updated:function(){this.render()},mounted:function(){this.render()}},A=a("GKmE"),x={watch:{filterText:function(e){this.$refs.tree2.filter(e)}},components:{QrcodeVue:L},methods:{resetaddForm:function(e){this.saveDialogVisible=!1,this.$refs[e].resetFields()},resetForm:function(e){this.$refs[e].resetFields()},upload:function(){this.$emit("test")},getQr:function(){this.addFormInline.archives_code=this.addFormInline.archives_age+this.addFormInline.archives_sex+this.addFormInline.archives_certificate_number},inputUpload:function(e){console.log(e.target.files[0]),this.addFormInline.imagefile=e.target.files[0],this.addFormInline.imagefileName=e.target.files[0].name},getData:function(){var e=this;this.$axios.get("tianyujia/ArchivesAction!queryByAhInfo.action").then(function(t){console.log("查询所有人员信息");var a=t.data.data;e.olddata=a,e.newdata=a;var r=e._.chunk(e.olddata,e.pageSize);e.tableDatas=r,e.tableData=r[0]}).catch(function(e){console.log(e)})},selectDept:function(e){console.log(e);var t=this._.find(this.alldepts,{name:e});console.log(t),this.user_deptCode=t.deptCode},findDept:function(e){console.log(e);var t=this.allorgs,a=this._.find(t,{orgName:e});this.alldepts=a.dept,this.addFormInline.user_orgCode=a.dept[0].orgNo,console.log(a)},notifyTit:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"成功";this.$notify({title:t,message:e,type:"success"})},removeClickbox:function(){var e=this,t=this.postData;e.$axios({method:"post",url:"tianyujia/ArchivesAction!deleteById.action",data:e.qs.stringify(t)}).then(function(t){console.log(t),"true"==t.data.result&&(e.deleDialogVisible=!1,e.notifyTit("删除一条批次信息"),e.getData())}).catch(function(e){console.log(e)})},removeClick:function(e){console.log(e);var t=JSON.parse(localStorage.getItem("user")),a={archives_id:e.archives_id,userNo:e.user_workCode,user:t.list[0].archives_name};this.postData=a,this.deleDialogVisible=!0},editClick:function(e){this.actstate=0,this.saveDialogVisible=!0,console.log(e),this.addFormInline={archives_name:e.archives_name,archives_sex:e.archives_sex,archives_age:e.archives_age,user_org:e.user_org,user_orgCode:e.user_orgCode,user_dept:e.user_dept,user_deptCode:e.user_deptCode,user_type:e.user_type,archives_insurance_state:e.archives_insurance_state,archives_certificate_type:e.archives_certificate_type,archives_certificate_number:e.archives_certificate_number,archives_test_state:e.archives_test_state,archives_physical_state:e.archives_physical_state,archives_state:e.archives_state,archives_code:e.archives_code,user_workCode:e.user_workCode},this.editdata=e},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},handleCurrentChange:function(e){console.log("当前页: "+e);var t=e-1;console.log(e),this.tableData=this.tableDatas[t],console.log(this.tableDatas),console.log(this.tableData)},handleClose:function(e){this.$confirm("确认关闭？").then(function(t){e()}).catch(function(e){})},updataFrom:function(){var e,t=this;e={"integratedProject.integratedProjectId":t.editdata.integratedProjectId,"integratedProject.integratedProjectName":t.addFormInline.name,"integratedProject.integratedProjectYear":t.addFormInline.year,"integratedProject.integratedProjectState":"未下达"==t.addFormInline.state?0:t.addFormInline.state},console.log(e),t.$axios({method:"post",url:"tianyujia/IntegratedAction!updateZhpc.action",data:t.qs.stringify(e)}).then(function(e){"true"==e.data.result?(t.saveDialogVisible=!1,t.$notify({title:"成功",message:e.data.message,type:"success"}),t.getData()):t.$notify.error({title:"错误",message:e.data.message})}).catch(function(e){console.log(e)})},saveFrom:function(){console.log(this.addFormInline);var e=this,t=new FormData;t.append("gspw_archives.archives_name",this.addFormInline.archives_name),t.append("gspw_archives.archives_sex",this.addFormInline.archives_sex),t.append("gspw_archives.archives_age",this.addFormInline.archives_age),t.append("gspw_archives.user_org",this.addFormInline.user_org),t.append("gspw_archives.user_orgCode",this.addFormInline.user_orgCode),t.append("gspw_archives.user_dept",this.addFormInline.user_dept),t.append("gspw_archives.user_deptCode",this.addFormInline.user_deptCode),t.append("gspw_archives.user_type",this.addFormInline.user_type),t.append("gspw_archives.archives_insurance_state",this.addFormInline.archives_insurance_state),t.append("gspw_archives.archives_certificate_type",this.addFormInline.archives_certificate_type),t.append("gspw_archives.archives_certificate_number",this.addFormInline.archives_certificate_number),t.append("gspw_archives.archives_test_state",this.addFormInline.archives_test_state),t.append("gspw_archives.archives_physical_state",this.addFormInline.archives_physical_state),t.append("gspw_archives.archives_state",this.addFormInline.archives_state),t.append("gspw_archives.archives_code",this.getRrData),t.append("gspw_archives.user_workCode",this.addFormInline.user_workCode),t.append("password",this.addFormInline.password),t.append("imagefile",this.addFormInline.imagefile),t.append("imagefileName",this.addFormInline.imagefileName),console.log(t),console.log("*********"),e.$axios({method:"post",url:"tianyujia/ArchivesAction!addArchives.action",data:t,headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),console.log(t.data),console.log(t.data.result),"true"==t.data.result?(e.saveDialogVisible=!1,e.$notify({title:"成功",message:t.data.message,type:"success"}),e.getData()):e.$notify.error({title:"错误",message:t.data.message})}).catch(function(e){console.log(e)})},search:function(){console.log(this.formInline);var e=this,t={"gspw_archives.archives_id":"","gspw_archives.archives_name":this.formInline.name,"gspw_archives.user_org":this.formInline.user_org,"gspw_archives.user_type":this.formInline.user_type,"gspw_archives.archives_test_state":this.formInline.archives_test_state,"gspw_archives.archives_insurance_state":this.formInline.archives_insurance_state,"gspw_archives.user_workCode":"","gspw_archives.archives_code":""};e.$axios({method:"post",url:"tianyujia/ArchivesAction!queryByAhInfo.action",data:e.qs.stringify(t)}).then(function(t){console.log("查询");var a=t.data.data;e.newdata=a;var r=e._.chunk(a,e.pageSize);e.tableDatas=r,e.tableData=r[0]}).catch(function(e){})}},computed:{roleP:function(){var e=localStorage.getItem("userType");return Object(A.a)(["业主","市公司管理"],e)},pagesNum:function(){return this.newdata.length},getRrData:function(){return this.addFormInline.archives_age+this.addFormInline.archives_sex+this.addFormInline.archives_certificate_number}},mounted:function(){this.getData()},data:function(){return{formInline:{name:"",user_org:"",user_type:"",archives_test_state:"",archives_insurance_state:""},users:[],addFormInline:{archives_name:"",archives_sex:"",archives_age:"",user_org:"",user_orgCode:"",user_dept:"",user_deptCode:"",user_type:"",archives_insurance_state:"",archives_certificate_type:"",archives_certificate_number:"",archives_test_state:"",archives_physical_state:"",archives_state:"",archives_code:"",user_workCode:"",password:"",imagefile:"",imagefileName:""},allorgs:"",alldepts:"",tableDatas:[],tableData:[],pageSize:4,saveDialogVisible:!1,deleDialogVisible:!1,olddata:"",newdata:"",postData:"",actstate:1,updDatapost:"",editdata:"",qrvalue:"36男63686",qrsize:200}}},P={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container bg"},[a("div",{staticClass:"infoselect"},[a("el-form",{ref:"formInline",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"姓名:",prop:"name"}},[a("el-select",{attrs:{placeholder:"姓名"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}},e._l(e.users,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"所属单位",prop:"user_org"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.findDept},model:{value:e.formInline.user_org,callback:function(t){e.$set(e.formInline,"user_org",t)},expression:"formInline.user_org"}},e._l(e.allorgs,function(e){return a("el-option",{key:e.orgName,attrs:{label:e.orgName,value:e.orgName}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"人员类型",prop:"user_type"}},[a("el-select",{attrs:{placeholder:"选中状态"},model:{value:e.formInline.user_type,callback:function(t){e.$set(e.formInline,"user_type",t)},expression:"formInline.user_type"}},[a("el-option",{attrs:{label:"业主",value:"业主"}}),e._v(" "),a("el-option",{attrs:{label:"施工",value:"施工"}}),e._v(" "),a("el-option",{attrs:{label:"监事",value:"监事"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"安置考试",prop:"archives_test_state"}},[a("el-select",{attrs:{placeholder:"选中状态"},model:{value:e.formInline.archives_test_state,callback:function(t){e.$set(e.formInline,"archives_test_state",t)},expression:"formInline.archives_test_state"}},[a("el-option",{attrs:{label:"通过",value:"通过"}}),e._v(" "),a("el-option",{attrs:{label:"未通过",value:"未通过"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"保险购置",prop:"archives_insurance_state"}},[a("el-select",{attrs:{placeholder:"选中状态"},model:{value:e.formInline.archives_insurance_state,callback:function(t){e.$set(e.formInline,"archives_insurance_state",t)},expression:"formInline.archives_insurance_state"}},[a("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"否"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("formInline")}}},[e._v("重置")]),e._v(" "),e.roleP?a("div",{staticStyle:{display:"inline-block"}},[a("el-button",{attrs:{type:"warn"},on:{click:function(t){e.saveDialogVisible=!0}}},[e._v("新增")])],1):e._e()],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增人员",visible:e.saveDialogVisible,width:"56%"},on:{"update:visible":function(t){e.saveDialogVisible=t}}},[a("div",{staticClass:"infoselect"},[a("el-form",{ref:"addFormInline",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.addFormInline}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.addFormInline.archives_name,callback:function(t){e.$set(e.addFormInline,"archives_name",t)},expression:"addFormInline.archives_name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"性别"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addFormInline.archives_sex,callback:function(t){e.$set(e.addFormInline,"archives_sex",t)},expression:"addFormInline.archives_sex"}},[a("el-option",{attrs:{label:"男",value:"男"}}),e._v(" "),a("el-option",{attrs:{label:"女",value:"女"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"年龄"}},[a("el-input",{model:{value:e.addFormInline.archives_age,callback:function(t){e.$set(e.addFormInline,"archives_age",t)},expression:"addFormInline.archives_age"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所属单位："}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.findDept},model:{value:e.addFormInline.user_org,callback:function(t){e.$set(e.addFormInline,"user_org",t)},expression:"addFormInline.user_org"}},e._l(e.allorgs,function(e){return a("el-option",{key:e.orgName,attrs:{label:e.orgName,value:e.orgName}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所属部门："}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.selectDept},model:{value:e.addFormInline.user_dept,callback:function(t){e.$set(e.addFormInline,"user_dept",t)},expression:"addFormInline.user_dept"}},e._l(e.alldepts,function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}))],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"人员类型："}},[a("el-select",{attrs:{placeholder:"选中状态"},model:{value:e.addFormInline.user_type,callback:function(t){e.$set(e.addFormInline,"user_type",t)},expression:"addFormInline.user_type"}},[a("el-option",{attrs:{label:"业主",value:"业主"}}),e._v(" "),a("el-option",{attrs:{label:"施工",value:"施工"}}),e._v(" "),a("el-option",{attrs:{label:"监事",value:"监事"}})],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"证书类型："}},[a("el-input",{model:{value:e.addFormInline.archives_certificate_type,callback:function(t){e.$set(e.addFormInline,"archives_certificate_type",t)},expression:"addFormInline.archives_certificate_type"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"证书编号："}},[a("el-input",{model:{value:e.addFormInline.archives_certificate_number,callback:function(t){e.$set(e.addFormInline,"archives_certificate_number",t)},expression:"addFormInline.archives_certificate_number"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"安排考试："}},[a("el-select",{attrs:{placeholder:"选中状态"},model:{value:e.addFormInline.archives_test_state,callback:function(t){e.$set(e.addFormInline,"archives_test_state",t)},expression:"addFormInline.archives_test_state"}},[a("el-option",{attrs:{label:"通过",value:"通过"}}),e._v(" "),a("el-option",{attrs:{label:"未通过",value:"未通过"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"保险购置："}},[a("el-select",{attrs:{placeholder:"选中状态"},model:{value:e.addFormInline.archives_insurance_state,callback:function(t){e.$set(e.addFormInline,"archives_insurance_state",t)},expression:"addFormInline.archives_insurance_state"}},[a("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"否"}})],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"体检状况："}},[a("el-select",{attrs:{placeholder:"选中状态"},model:{value:e.addFormInline.archives_physical_state,callback:function(t){e.$set(e.addFormInline,"archives_physical_state",t)},expression:"addFormInline.archives_physical_state"}},[a("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"否"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"人员状况："}},[a("el-select",{attrs:{placeholder:"选中状态"},model:{value:e.addFormInline.archives_state,callback:function(t){e.$set(e.addFormInline,"archives_state",t)},expression:"addFormInline.archives_state"}},[a("el-option",{attrs:{label:"离职",value:"离职"}}),e._v(" "),a("el-option",{attrs:{label:"在职",value:"在职"}})],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"用户工号："}},[a("el-input",{attrs:{placeholder:"新添加人员工号"},model:{value:e.addFormInline.user_workCode,callback:function(t){e.$set(e.addFormInline,"user_workCode",t)},expression:"addFormInline.user_workCode"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"密码："}},[a("el-input",{attrs:{placeholder:"新添加人员密码,8位数字加密码"},model:{value:e.addFormInline.password,callback:function(t){e.$set(e.addFormInline,"password",t)},expression:"addFormInline.password"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"上传头像："}},[a("input",{attrs:{type:"file"},on:{change:e.inputUpload}})])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"自动生成个人资料二维码："}},[a("qrcode-vue",{attrs:{value:e.getRrData,size:e.qrsize,level:"H"}})],1)],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.resetaddForm(e.addFormInline)}}},[e._v("取 消")]),e._v(" "),1==e.actstate?a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.saveFrom}},[e._v("保存")])],1):a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.updataFrom}},[e._v("修改")])],1)],1)]),e._v(" "),a("div",{staticClass:"tablebox"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"archives_name",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"user_type",label:"岗位",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"archives_test_state",label:"安置考试",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"archives_insurance_state",label:"保险购置",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"user_org",label:"所属单位"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.editClick(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.removeClick(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"pagina"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","page-size":e.pageSize,total:e.pagesNum},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("div",[a("el-dialog",{attrs:{title:"提示",visible:e.deleDialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.deleDialogVisible=t}}},[a("span",[e._v("你将删除一条批次")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.deleDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.removeClickbox}},[e._v("确 定")])],1)])],1)],1)},staticRenderFns:[]};var M=a("VU/8")(x,P,!1,function(e){a("Q/nU")},"data-v-93161848",null);t.default=M.exports}});
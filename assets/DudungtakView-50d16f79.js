import{d as kl,i as Gl,j as Vl,c as Wl,o as ql,a as U,v as Xl}from"./index-19900206.js";const Yl="/dudungtak/logo.webp";/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uo="128",jl=0,va=1,Zl=2,ko=1,Jl=2,Ii=3,Vr=0,ue=1,An=2,Go=1,Fi=0,Bi=1,ya=2,_a=3,Ma=4,$l=5,si=100,Ql=101,Kl=102,wa=103,ba=104,tc=200,ec=201,nc=202,ic=203,Vo=204,Wo=205,rc=206,sc=207,ac=208,oc=209,lc=210,cc=0,hc=1,uc=2,Os=3,dc=4,fc=5,pc=6,mc=7,Wr=0,gc=1,xc=2,zi=0,vc=1,yc=2,_c=3,Mc=4,wc=5,qo=300,Zs=301,Js=302,Sa=303,Ea=304,$s=306,Qs=307,Hs=1e3,Ge=1001,Us=1002,Me=1003,Ta=1004,Aa=1005,Ne=1006,bc=1007,Ks=1008,ta=1009,Sc=1010,Ec=1011,Fr=1012,Tc=1013,Ir=1014,xn=1015,Br=1016,Ac=1017,Lc=1018,Cc=1019,Oi=1020,Rc=1021,Ln=1022,Ve=1023,Pc=1024,Dc=1025,ci=1026,Gi=1027,Ic=1028,Nc=1029,Fc=1030,Bc=1031,zc=1032,Oc=1033,La=33776,Ca=33777,Ra=33778,Pa=33779,Da=35840,Ia=35841,Na=35842,Fa=35843,Hc=36196,Ba=37492,za=37496,Uc=37808,kc=37809,Gc=37810,Vc=37811,Wc=37812,qc=37813,Xc=37814,Yc=37815,jc=37816,Zc=37817,Jc=37818,$c=37819,Qc=37820,Kc=37821,th=36492,eh=37840,nh=37841,ih=37842,rh=37843,sh=37844,ah=37845,oh=37846,lh=37847,ch=37848,hh=37849,uh=37850,dh=37851,fh=37852,ph=37853,mh=2200,gh=2201,xh=2202,zr=2300,Or=2301,ns=2302,ai=2400,oi=2401,Hr=2402,ea=2500,Xo=2501,vh=0,Zi=3e3,na=3001,yh=3007,_h=3002,Mh=3003,wh=3004,bh=3005,Sh=3006,Eh=3200,Th=3201,di=0,Ah=1,is=7680,Lh=519,Vi=35044,Ur=35048,Oa="300 es";class Pn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ge=[];for(let r=0;r<256;r++)ge[r]=(r<16?"0":"")+r.toString(16);const rs=Math.PI/180,ks=180/Math.PI;function Je(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[r&255]+ge[r>>8&255]+ge[r>>16&255]+ge[r>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toUpperCase()}function De(r,t,e){return Math.max(t,Math.min(e,r))}function Ch(r,t){return(r%t+t)%t}function ss(r,t,e){return(1-e)*r+e*t}function Ha(r){return(r&r-1)===0&&r!==0}function Rh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ph(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class nt{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}nt.prototype.isVector2=!0;class xe{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],v=i[3],g=i[6],p=i[1],C=i[4],R=i[7],A=i[2],y=i[5],z=i[8];return s[0]=a*x+o*p+l*A,s[3]=a*v+o*C+l*y,s[6]=a*g+o*R+l*z,s[1]=c*x+h*p+u*A,s[4]=c*v+h*C+u*y,s[7]=c*g+h*R+u*z,s[2]=d*x+f*p+m*A,s[5]=d*v+f*C+m*y,s[8]=d*g+f*R+m*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=e*s+n*l,i[3]=e*a+n*c,i[6]=e*o+n*h,i[1]=-n*s+e*l,i[4]=-n*a+e*c,i[7]=-n*o+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}xe.prototype.isMatrix3=!0;let Gn;class fi{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gn===void 0&&(Gn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Gn.width=t.width,Gn.height=t.height;const n=Gn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}}let Dh=0;class ve extends Pn{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=Ge,i=Ge,s=Ne,a=Ks,o=Ve,l=ta,c=1,h=Zi){super(),Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Je(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Je()),!e&&t.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(as(i[a].image)):s.push(as(i[a]))}else s=as(i);t.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hs:t.x=t.x-Math.floor(t.x);break;case Ge:t.x=t.x<0?0:1;break;case Us:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hs:t.y=t.y-Math.floor(t.y);break;case Ge:t.y=t.y<0?0:1;break;case Us:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&this.version++}}ve.DEFAULT_IMAGE=void 0;ve.DEFAULT_MAPPING=qo;ve.prototype.isTexture=!0;function as(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fi.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Zt{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],v=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+v)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(c+1)/2,R=(f+1)/2,A=(g+1)/2,y=(h+d)/4,z=(u+x)/4,T=(m+v)/4;return C>R&&C>A?C<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(C),i=y/n,s=z/n):R>A?R<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(R),n=y/i,s=T/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=z/s,i=T/s),this.set(n,i,s,e),this}let p=Math.sqrt((v-m)*(v-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(p)<.001&&(p=1),this.x=(v-m)/p,this.y=(u-x)/p,this.z=(d-h)/p,this.w=Math.acos((c+f+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Zt.prototype.isVector4=!0;class Cn extends Pn{constructor(t,e,n){super(),this.width=t,this.height=e,this.depth=1,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e),n=n||{},this.texture=new ve(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ne,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(t){t.image={width:this.width,height:this.height,depth:this.depth},this.texture=t}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Cn.prototype.isWebGLRenderTarget=!0;class Ih extends Cn{constructor(t,e,n){super(t,e,n),this.samples=4}copy(t){return super.copy.call(this,t),this.samples=t.samples,this}}Ih.prototype.isWebGLMultisampleRenderTarget=!0;class we{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],m=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let v=1-o;const g=l*d+c*f+h*m+u*x,p=g>=0?1:-1,C=1-g*g;if(C>Number.EPSILON){const A=Math.sqrt(C),y=Math.atan2(A,g*p);v=Math.sin(v*y)/A,o=Math.sin(o*y)/A}const R=o*p;if(l=l*v+d*R,c=c*v+f*R,h=h*v+m*R,u=u*v+x*R,v===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){this.copy(t).slerp(e,n)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}we.prototype.isQuaternion=!0;class w{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ua.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ua.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,h=l*n+o*e-s*i,u=l*i+s*n-a*e,d=-s*e-a*n-o*i;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return os.copy(this).projectOnVector(t),this.sub(os)}reflect(t){return this.sub(os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}w.prototype.isVector3=!0;const os=new w,Ua=new we;class Be{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],d=t[l+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(e,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),d=t.getZ(l);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(e,n,i),this.max.set(s,a,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t){return this.makeEmpty(),this.expandByObject(t)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return t===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new w),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new w),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t){t.updateWorldMatrix(!1,!1);const e=t.geometry;e!==void 0&&(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox),ls.applyMatrix4(t.matrixWorld),this.union(ls));const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),e=new w),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),ir.subVectors(this.max,Si),Vn.subVectors(t.a,Si),Wn.subVectors(t.b,Si),qn.subVectors(t.c,Si),cn.subVectors(Wn,Vn),hn.subVectors(qn,Wn),En.subVectors(Vn,qn);let e=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-En.z,En.y,cn.z,0,-cn.x,hn.z,0,-hn.x,En.z,0,-En.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-En.y,En.x,0];return!cs(e,Vn,Wn,qn,ir)||(e=[1,0,0,0,1,0,0,0,1],!cs(e,Vn,Wn,qn,ir))?!1:(rr.crossVectors(cn,hn),e=[rr.x,rr.y,rr.z],cs(e,Vn,Wn,qn,ir))}clampPoint(t,e){return e===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),e=new w),e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return bi.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return t===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}Be.prototype.isBox3=!0;const en=[new w,new w,new w,new w,new w,new w,new w,new w],bi=new w,ls=new Be,Vn=new w,Wn=new w,qn=new w,cn=new w,hn=new w,En=new w,Si=new w,ir=new w,rr=new w,Tn=new w;function cs(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Tn.fromArray(r,s);const o=i.x*Math.abs(Tn.x)+i.y*Math.abs(Tn.y)+i.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Nh=new Be,ka=new w,hs=new w,us=new w;class pi{constructor(t=new w,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),e=new w),e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return t===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),t=new Be),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){us.subVectors(t,this.center);const e=us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(us.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return hs.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(ka.copy(t.center).add(hs)),this.expandByPoint(ka.copy(t.center).sub(hs)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new w,ds=new w,sr=new w,un=new w,fs=new w,ar=new w,ps=new w;class Dn{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e===void 0&&(console.warn("THREE.Ray: .at() target is now required"),e=new w),e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),e=new w),e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.direction).multiplyScalar(e).add(this.origin),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ds.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),un.copy(this.origin).sub(ds);const s=t.distanceTo(e)*.5,a=-this.direction.dot(sr),o=un.dot(this.direction),l=-un.dot(sr),c=un.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(sr).multiplyScalar(d).add(ds),f}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,i,s){fs.subVectors(e,t),ar.subVectors(n,t),ps.crossVectors(fs,ar);let a=this.direction.dot(ps),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,t);const l=o*this.direction.dot(ar.crossVectors(un,ar));if(l<0)return null;const c=o*this.direction.dot(fs.cross(un));if(c<0||l+c>a)return null;const h=-o*un.dot(ps);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,a,o,l,c,h,u,d,f,m,x,v){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=x,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Xn.setFromMatrixColumn(t,0).length(),s=1/Xn.setFromMatrixColumn(t,1).length(),a=1/Xn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fh,t,Bh)}lookAt(t,e,n){const i=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),dn.crossVectors(n,Re),dn.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),dn.crossVectors(n,Re)),dn.normalize(),or.crossVectors(Re,dn),i[0]=dn.x,i[4]=or.x,i[8]=Re.x,i[1]=dn.y,i[5]=or.y,i[9]=Re.y,i[2]=dn.z,i[6]=or.z,i[10]=Re.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],v=n[10],g=n[14],p=n[3],C=n[7],R=n[11],A=n[15],y=i[0],z=i[4],T=i[8],N=i[12],F=i[1],H=i[5],B=i[9],S=i[13],D=i[2],I=i[6],L=i[10],k=i[14],E=i[3],K=i[7],ft=i[11],Z=i[15];return s[0]=a*y+o*F+l*D+c*E,s[4]=a*z+o*H+l*I+c*K,s[8]=a*T+o*B+l*L+c*ft,s[12]=a*N+o*S+l*k+c*Z,s[1]=h*y+u*F+d*D+f*E,s[5]=h*z+u*H+d*I+f*K,s[9]=h*T+u*B+d*L+f*ft,s[13]=h*N+u*S+d*k+f*Z,s[2]=m*y+x*F+v*D+g*E,s[6]=m*z+x*H+v*I+g*K,s[10]=m*T+x*B+v*L+g*ft,s[14]=m*N+x*S+v*k+g*Z,s[3]=p*y+C*F+R*D+A*E,s[7]=p*z+C*H+R*I+A*K,s[11]=p*T+C*B+R*L+A*ft,s[15]=p*N+C*S+R*k+A*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],v=t[11],g=t[15];return m*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+x*(+e*l*f-e*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+v*(+e*c*u-e*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+g*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],v=t[14],g=t[15],p=u*v*c-x*d*c+x*l*f-o*v*f-u*l*g+o*d*g,C=m*d*c-h*v*c-m*l*f+a*v*f+h*l*g-a*d*g,R=h*x*c-m*u*c+m*o*f-a*x*f-h*o*g+a*u*g,A=m*u*l-h*x*l-m*o*d+a*x*d+h*o*v-a*u*v,y=e*p+n*C+i*R+s*A;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/y;return t[0]=p*z,t[1]=(x*d*s-u*v*s-x*i*f+n*v*f+u*i*g-n*d*g)*z,t[2]=(o*v*s-x*l*s+x*i*c-n*v*c-o*i*g+n*l*g)*z,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*z,t[4]=C*z,t[5]=(h*v*s-m*d*s+m*i*f-e*v*f-h*i*g+e*d*g)*z,t[6]=(m*l*s-a*v*s-m*i*c+e*v*c+a*i*g-e*l*g)*z,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*f+e*l*f)*z,t[8]=R*z,t[9]=(m*u*s-h*x*s-m*n*f+e*x*f+h*n*g-e*u*g)*z,t[10]=(a*x*s-m*o*s+m*n*c-e*x*c-a*n*g+e*o*g)*z,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*f-e*o*f)*z,t[12]=A*z,t[13]=(h*x*i-m*u*i+m*n*d-e*x*d-h*n*v+e*u*v)*z,t[14]=(m*o*i-a*x*i-m*n*l+e*x*l+a*n*v-e*o*v)*z,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*z,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n){return this.set(1,e,n,0,t,1,n,0,t,e,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,m=s*u,x=a*h,v=a*u,g=o*u,p=l*c,C=l*h,R=l*u,A=n.x,y=n.y,z=n.z;return i[0]=(1-(x+g))*A,i[1]=(f+R)*A,i[2]=(m-C)*A,i[3]=0,i[4]=(f-R)*y,i[5]=(1-(d+g))*y,i[6]=(v+p)*y,i[7]=0,i[8]=(m+C)*z,i[9]=(v-p)*z,i[10]=(1-(d+x))*z,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Xn.set(i[0],i[1],i[2]).length();const a=Xn.set(i[4],i[5],i[6]).length(),o=Xn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Oe.copy(this);const c=1/s,h=1/a,u=1/o;return Oe.elements[0]*=c,Oe.elements[1]*=c,Oe.elements[2]*=c,Oe.elements[4]*=h,Oe.elements[5]*=h,Oe.elements[6]*=h,Oe.elements[8]*=u,Oe.elements[9]*=u,Oe.elements[10]*=u,e.setFromRotationMatrix(Oe),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(a+s)/(a-s),f=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,a){const o=this.elements,l=1/(e-t),c=1/(n-i),h=1/(a-s),u=(e+t)*l,d=(n+i)*c,f=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}Tt.prototype.isMatrix4=!0;const Xn=new w,Oe=new Tt,Fh=new w(0,0,0),Bh=new w(1,1,1),dn=new w,or=new w,Re=new w,Ga=new Tt,Va=new we;class mi{constructor(t=0,e=0,n=0,i=mi.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e,n){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e=e||this._order,e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ga.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ga,e,n)}setFromVector3(t,e){return this.set(t.x,t.y,t.z,e||this._order)}reorder(t){return Va.setFromEuler(this),this.setFromQuaternion(Va,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}mi.prototype.isEuler=!0;mi.DefaultOrder="XYZ";mi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Yo{constructor(){this.mask=1}set(t){this.mask=1<<t|0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}}let zh=0;const Wa=new w,Yn=new we,rn=new Tt,lr=new w,Ei=new w,Oh=new w,Hh=new we,qa=new w(1,0,0),Xa=new w(0,1,0),Ya=new w(0,0,1),Uh={type:"added"},ja={type:"removed"};class Xt extends Pn{constructor(){super(),Object.defineProperty(this,"id",{value:zh++}),this.uuid=Je(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DefaultUp.clone();const t=new w,e=new mi,n=new we,i=new w(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Tt},normalMatrix:{value:new xe}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Xt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.premultiply(Yn),this}rotateX(t){return this.rotateOnAxis(qa,t)}rotateY(t){return this.rotateOnAxis(Xa,t)}rotateZ(t){return this.rotateOnAxis(Ya,t)}translateOnAxis(t,e){return Wa.copy(t).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qa,t)}translateY(t){return this.translateOnAxis(Xa,t)}translateZ(t){return this.translateOnAxis(Ya,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ei,lr,this.up):rn.lookAt(lr,Ei,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),Yn.setFromRotationMatrix(rn),this.quaternion.premultiply(Yn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Uh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ja)),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ja)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new w),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new we),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,t,Oh),t}getWorldScale(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new w),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Hh,t),t}getWorldDirection(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new w),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Xt.DefaultUp=new w(0,1,0);Xt.DefaultMatrixAutoUpdate=!0;Xt.prototype.isObject3D=!0;const ms=new w,kh=new w,Gh=new xe;class Ye{constructor(t=new w(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ms.subVectors(n,e).cross(kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),e=new w),e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){e===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),e=new w);const n=t.delta(ms),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new w),t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gh.getNormalMatrix(t),i=this.coplanarPoint(ms).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}Ye.prototype.isPlane=!0;const He=new w,sn=new w,gs=new w,an=new w,jn=new w,Zn=new w,Za=new w,xs=new w,vs=new w,ys=new w;class le{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new w),i.subVectors(n,e),He.subVectors(t,e),i.cross(He);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){He.subVectors(i,e),sn.subVectors(n,e),gs.subVectors(t,e);const a=He.dot(He),o=He.dot(sn),l=He.dot(gs),c=sn.dot(sn),h=sn.dot(gs),u=a*c-o*o;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new w),u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,an),l.set(0,0),l.addScaledVector(s,an.x),l.addScaledVector(a,an.y),l.addScaledVector(o,an.z),l}static isFrontFacing(t,e,n,i){return He.subVectors(n,e),sn.subVectors(t,e),He.cross(sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),He.cross(sn).length()*.5}getMidpoint(t){return t===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new w),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return le.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),t=new Ye),t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return le.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return le.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return le.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return le.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){e===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),e=new w);const n=this.a,i=this.b,s=this.c;let a,o;jn.subVectors(i,n),Zn.subVectors(s,n),xs.subVectors(t,n);const l=jn.dot(xs),c=Zn.dot(xs);if(l<=0&&c<=0)return e.copy(n);vs.subVectors(t,i);const h=jn.dot(vs),u=Zn.dot(vs);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(jn,a);ys.subVectors(t,s);const f=jn.dot(ys),m=Zn.dot(ys);if(m>=0&&f<=m)return e.copy(s);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Zn,o);const v=h*m-f*u;if(v<=0&&u-h>=0&&f-m>=0)return Za.subVectors(s,i),o=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Za,o);const g=1/(v+x+d);return a=x*g,o=d*g,e.copy(n).addScaledVector(jn,a).addScaledVector(Zn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Vh=0;function fe(){Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Je(),this.name="",this.type="Material",this.fog=!0,this.blending=Bi,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Vo,this.blendDst=Wo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}fe.prototype=Object.assign(Object.create(Pn.prototype),{constructor:fe,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(r){if(r!==void 0)for(const t in r){const e=r[t];if(e===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===Go;continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(e):n&&n.isVector3&&e&&e.isVector3?n.copy(e):this[t]=e}},toJSON:function(r){const t=r===void 0||typeof r=="string";t&&(r={textures:{},images:{}});const e={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),this.roughness!==void 0&&(e.roughness=this.roughness),this.metalness!==void 0&&(e.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(e.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),this.shininess!==void 0&&(e.shininess=this.shininess),this.clearcoat!==void 0&&(e.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(e.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(e.clearcoatMap=this.clearcoatMap.toJSON(r).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(e.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(r).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(e.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(r).uuid,e.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(r).uuid),this.matcap&&this.matcap.isTexture&&(e.matcap=this.matcap.toJSON(r).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(r).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(r).uuid,e.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(r).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(r).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(r).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(r).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(r).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(r).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(r).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(r).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(r).uuid,this.combine!==void 0&&(e.combine=this.combine)),this.envMapIntensity!==void 0&&(e.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(e.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(e.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(r).uuid),this.size!==void 0&&(e.size=this.size),this.shadowSide!==null&&(e.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(e.blending=this.blending),this.side!==Vr&&(e.side=this.side),this.vertexColors&&(e.vertexColors=!0),this.opacity<1&&(e.opacity=this.opacity),this.transparent===!0&&(e.transparent=this.transparent),e.depthFunc=this.depthFunc,e.depthTest=this.depthTest,e.depthWrite=this.depthWrite,e.colorWrite=this.colorWrite,e.stencilWrite=this.stencilWrite,e.stencilWriteMask=this.stencilWriteMask,e.stencilFunc=this.stencilFunc,e.stencilRef=this.stencilRef,e.stencilFuncMask=this.stencilFuncMask,e.stencilFail=this.stencilFail,e.stencilZFail=this.stencilZFail,e.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(e.rotation=this.rotation),this.polygonOffset===!0&&(e.polygonOffset=!0),this.polygonOffsetFactor!==0&&(e.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(e.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(e.linewidth=this.linewidth),this.dashSize!==void 0&&(e.dashSize=this.dashSize),this.gapSize!==void 0&&(e.gapSize=this.gapSize),this.scale!==void 0&&(e.scale=this.scale),this.dithering===!0&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(e.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(e.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(e.wireframe=this.wireframe),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(e.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(e.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(e.morphTargets=!0),this.morphNormals===!0&&(e.morphNormals=!0),this.skinning===!0&&(e.skinning=!0),this.flatShading===!0&&(e.flatShading=this.flatShading),this.visible===!1&&(e.visible=!1),this.toneMapped===!1&&(e.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(e.userData=this.userData);function n(i){const s=[];for(const a in i){const o=i[a];delete o.metadata,s.push(o)}return s}if(t){const i=n(r.textures),s=n(r.images);i.length>0&&(e.textures=i),s.length>0&&(e.images=s)}return e},clone:function(){return new this.constructor().copy(this)},copy:function(r){this.name=r.name,this.fog=r.fog,this.blending=r.blending,this.side=r.side,this.vertexColors=r.vertexColors,this.opacity=r.opacity,this.transparent=r.transparent,this.blendSrc=r.blendSrc,this.blendDst=r.blendDst,this.blendEquation=r.blendEquation,this.blendSrcAlpha=r.blendSrcAlpha,this.blendDstAlpha=r.blendDstAlpha,this.blendEquationAlpha=r.blendEquationAlpha,this.depthFunc=r.depthFunc,this.depthTest=r.depthTest,this.depthWrite=r.depthWrite,this.stencilWriteMask=r.stencilWriteMask,this.stencilFunc=r.stencilFunc,this.stencilRef=r.stencilRef,this.stencilFuncMask=r.stencilFuncMask,this.stencilFail=r.stencilFail,this.stencilZFail=r.stencilZFail,this.stencilZPass=r.stencilZPass,this.stencilWrite=r.stencilWrite;const t=r.clippingPlanes;let e=null;if(t!==null){const n=t.length;e=new Array(n);for(let i=0;i!==n;++i)e[i]=t[i].clone()}return this.clippingPlanes=e,this.clipIntersection=r.clipIntersection,this.clipShadows=r.clipShadows,this.shadowSide=r.shadowSide,this.colorWrite=r.colorWrite,this.precision=r.precision,this.polygonOffset=r.polygonOffset,this.polygonOffsetFactor=r.polygonOffsetFactor,this.polygonOffsetUnits=r.polygonOffsetUnits,this.dithering=r.dithering,this.alphaTest=r.alphaTest,this.alphaToCoverage=r.alphaToCoverage,this.premultipliedAlpha=r.premultipliedAlpha,this.visible=r.visible,this.toneMapped=r.toneMapped,this.userData=JSON.parse(JSON.stringify(r.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(fe.prototype,"needsUpdate",{set:function(r){r===!0&&this.version++}});const jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ue={h:0,s:0,l:0},cr={h:0,s:0,l:0};function _s(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function Ms(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class wt{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}setRGB(t,e,n){return this.r=t,this.g=e,this.b=n,this}setHSL(t,e,n){if(t=Ch(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,s=2*n-i;this.r=_s(s,i,t+1/3),this.g=_s(s,i,t),this.b=_s(s,i,t-1/3)}return this}setStyle(t){function e(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,e(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,e(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return e(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){const e=jo[t.toLowerCase()];return e!==void 0?this.setHex(e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copyGammaToLinear(t,e=2){return this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this}copyLinearToGamma(t,e=2){const n=e>0?1/e:1;return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this}convertGammaToLinear(t){return this.copyGammaToLinear(this,t),this}convertLinearToGamma(t){return this.copyLinearToGamma(this,t),this}copySRGBToLinear(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){t===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});const e=this.r,n=this.g,i=this.b,s=Math.max(e,n,i),a=Math.min(e,n,i);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const h=s-a;switch(l=c<=.5?h/(s+a):h/(2-s-a),s){case e:o=(n-i)/h+(n<i?6:0);break;case n:o=(i-e)/h+2;break;case i:o=(e-n)/h+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(t,e,n){return this.getHSL(Ue),Ue.h+=t,Ue.s+=e,Ue.l+=n,this.setHSL(Ue.h,Ue.s,Ue.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ue),t.getHSL(cr);const n=ss(Ue.h,cr.h,e),i=ss(Ue.s,cr.s,e),s=ss(Ue.l,cr.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}wt.NAMES=jo;wt.prototype.isColor=!0;wt.prototype.r=1;wt.prototype.g=1;wt.prototype.b=1;class Wi extends fe{constructor(t){super(),this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this}}Wi.prototype.isMeshBasicMaterial=!0;const te=new w,hr=new nt;class de{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Vi,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new wt),e[n++]=a.r,e[n++]=a.g,e[n++]=a.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new nt),e[n++]=a.x,e[n++]=a.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new w),e[n++]=a.x,e[n++]=a.y,e[n++]=a.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Zt),e[n++]=a.x,e[n++]=a.y,e[n++]=a.z,e[n++]=a.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyMatrix3(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)te.x=this.getX(e),te.y=this.getY(e),te.z=this.getZ(e),te.applyMatrix4(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)te.x=this.getX(e),te.y=this.getY(e),te.z=this.getZ(e),te.applyNormalMatrix(t),this.setXYZ(e,te.x,te.y,te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)te.x=this.getX(e),te.y=this.getY(e),te.z=this.getZ(e),te.transformDirection(t),this.setXYZ(e,te.x,te.y,te.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vi&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}de.prototype.isBufferAttribute=!0;class Zo extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jo extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wh extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}}Wh.prototype.isFloat16BufferAttribute=!0;class Qt extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}}function $o(r){if(r.length===0)return-1/0;let t=r[0];for(let e=1,n=r.length;e<n;++e)r[e]>t&&(t=r[e]);return t}let qh=0;const Xe=new Tt,bs=new Xt,Jn=new w,Pe=new Be,Ti=new Be,he=new w;class jt extends Pn{constructor(){super(),Object.defineProperty(this,"id",{value:qh++}),this.uuid=Je(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($o(t)>65535?Jo:Zo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new xe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return bs.lookAt(t),bs.updateMatrix(),this.applyMatrix4(bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Pe.setFromBufferAttribute(s),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(Pe.min,Ti.min),Pe.expandByPoint(he),he.addVectors(Pe.max,Ti.max),Pe.expandByPoint(he)):(Pe.expandByPoint(Ti.min),Pe.expandByPoint(Ti.max))}Pe.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)he.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(he));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)he.fromBufferAttribute(o,c),l&&(Jn.fromBufferAttribute(t,c),he.add(Jn)),i=Math.max(i,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new de(new Float32Array(4*o),4));const l=e.tangent.array,c=[],h=[];for(let F=0;F<o;F++)c[F]=new w,h[F]=new w;const u=new w,d=new w,f=new w,m=new nt,x=new nt,v=new nt,g=new w,p=new w;function C(F,H,B){u.fromArray(i,F*3),d.fromArray(i,H*3),f.fromArray(i,B*3),m.fromArray(a,F*2),x.fromArray(a,H*2),v.fromArray(a,B*2),d.sub(u),f.sub(u),x.sub(m),v.sub(m);const S=1/(x.x*v.y-v.x*x.y);isFinite(S)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(f,-x.y).multiplyScalar(S),p.copy(f).multiplyScalar(x.x).addScaledVector(d,-v.x).multiplyScalar(S),c[F].add(g),c[H].add(g),c[B].add(g),h[F].add(p),h[H].add(p),h[B].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let F=0,H=R.length;F<H;++F){const B=R[F],S=B.start,D=B.count;for(let I=S,L=S+D;I<L;I+=3)C(n[I+0],n[I+1],n[I+2])}const A=new w,y=new w,z=new w,T=new w;function N(F){z.fromArray(s,F*3),T.copy(z);const H=c[F];A.copy(H),A.sub(z.multiplyScalar(z.dot(H))).normalize(),y.crossVectors(T,H);const S=y.dot(h[F])<0?-1:1;l[F*4]=A.x,l[F*4+1]=A.y,l[F*4+2]=A.z,l[F*4+3]=S}for(let F=0,H=R.length;F<H;++F){const B=R[F],S=B.start,D=B.count;for(let I=S,L=S+D;I<L;I+=3)N(n[I+0]),N(n[I+1]),N(n[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,s=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),x=t.getX(d+1),v=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,v),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const a=n[i].array,o=t.attributes[i],l=o.array,c=o.itemSize*e,h=Math.min(l.length,a.length-c);for(let u=0,d=c;u<h;u++,d++)a[d]=l[u]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,v=l.length;x<v;x++){f=l[x]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new de(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new jt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new jt().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}jt.prototype.isBufferGeometry=!0;const Ja=new Tt,$n=new Dn,Ss=new pi,fn=new w,pn=new w,mn=new w,Es=new w,Ts=new w,As=new w,ur=new w,dr=new w,fr=new w,pr=new nt,mr=new nt,gr=new nt,Ls=new w,xr=new w;class Wt extends Xt{constructor(t=new jt,e=new Wi){super(),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),t.ray.intersectsSphere(Ss)===!1)||(Ja.copy(s).invert(),$n.copy(t.ray).applyMatrix4(Ja),n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(i))for(let x=0,v=f.length;x<v;x++){const g=f[x],p=i[g.materialIndex],C=Math.max(g.start,m.start),R=Math.min(g.start+g.count,m.start+m.count);for(let A=C,y=R;A<y;A+=3){const z=o.getX(A),T=o.getX(A+1),N=o.getX(A+2);a=vr(this,p,t,$n,l,c,h,u,d,z,T,N),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=g.materialIndex,e.push(a))}}else{const x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let g=x,p=v;g<p;g+=3){const C=o.getX(g),R=o.getX(g+1),A=o.getX(g+2);a=vr(this,i,t,$n,l,c,h,u,d,C,R,A),a&&(a.faceIndex=Math.floor(g/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let x=0,v=f.length;x<v;x++){const g=f[x],p=i[g.materialIndex],C=Math.max(g.start,m.start),R=Math.min(g.start+g.count,m.start+m.count);for(let A=C,y=R;A<y;A+=3){const z=A,T=A+1,N=A+2;a=vr(this,p,t,$n,l,c,h,u,d,z,T,N),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=g.materialIndex,e.push(a))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=x,p=v;g<p;g+=3){const C=g,R=g+1,A=g+2;a=vr(this,i,t,$n,l,c,h,u,d,C,R,A),a&&(a.faceIndex=Math.floor(g/3),e.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Wt.prototype.isMesh=!0;function Xh(r,t,e,n,i,s,a,o){let l;if(t.side===ue?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side!==An,o),l===null)return null;xr.copy(o),xr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(xr);return c<e.near||c>e.far?null:{distance:c,point:xr.clone(),object:r}}function vr(r,t,e,n,i,s,a,o,l,c,h,u){fn.fromBufferAttribute(i,c),pn.fromBufferAttribute(i,h),mn.fromBufferAttribute(i,u);const d=r.morphTargetInfluences;if(t.morphTargets&&s&&d){ur.set(0,0,0),dr.set(0,0,0),fr.set(0,0,0);for(let m=0,x=s.length;m<x;m++){const v=d[m],g=s[m];v!==0&&(Es.fromBufferAttribute(g,c),Ts.fromBufferAttribute(g,h),As.fromBufferAttribute(g,u),a?(ur.addScaledVector(Es,v),dr.addScaledVector(Ts,v),fr.addScaledVector(As,v)):(ur.addScaledVector(Es.sub(fn),v),dr.addScaledVector(Ts.sub(pn),v),fr.addScaledVector(As.sub(mn),v)))}fn.add(ur),pn.add(dr),mn.add(fr)}r.isSkinnedMesh&&t.skinning&&(r.boneTransform(c,fn),r.boneTransform(h,pn),r.boneTransform(u,mn));const f=Xh(r,t,e,n,fn,pn,mn,Ls);if(f){o&&(pr.fromBufferAttribute(o,c),mr.fromBufferAttribute(o,h),gr.fromBufferAttribute(o,u),f.uv=le.getUV(Ls,fn,pn,mn,pr,mr,gr,new nt)),l&&(pr.fromBufferAttribute(l,c),mr.fromBufferAttribute(l,h),gr.fromBufferAttribute(l,u),f.uv2=le.getUV(Ls,fn,pn,mn,pr,mr,gr,new nt));const m={a:c,b:h,c:u,normal:new w,materialIndex:0};le.getNormal(fn,pn,mn,m.normal),f.face=m}return f}class qr extends jt{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,s,0),m("z","y","x",1,-1,n,e,-t,a,s,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function m(x,v,g,p,C,R,A,y,z,T,N){const F=R/z,H=A/T,B=R/2,S=A/2,D=y/2,I=z+1,L=T+1;let k=0,E=0;const K=new w;for(let ft=0;ft<L;ft++){const Z=ft*H-S;for(let mt=0;mt<I;mt++){const At=mt*F-B;K[x]=At*p,K[v]=Z*C,K[g]=D,c.push(K.x,K.y,K.z),K[x]=0,K[v]=0,K[g]=y>0?1:-1,h.push(K.x,K.y,K.z),u.push(mt/z),u.push(1-ft/T),k+=1}}for(let ft=0;ft<T;ft++)for(let Z=0;Z<z;Z++){const mt=d+Z+I*ft,At=d+Z+I*(ft+1),V=d+(Z+1)+I*(ft+1),kt=d+(Z+1)+I*ft;l.push(mt,At,kt),l.push(At,V,kt),E+=6}o.addGroup(f,E,N),f+=E,d+=k}}}function hi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ye(r){const t={};for(let e=0;e<r.length;e++){const n=hi(r[e]);for(const i in n)t[i]=n[i]}return t}const Yh={clone:hi,merge:ye};var jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends fe{constructor(t){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=jh,this.fragmentShader=Zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}Rn.prototype.isShaderMaterial=!0;class ia extends Xt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new w),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}ia.prototype.isCamera=!0;class Te extends ia{constructor(t=50,e=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}Te.prototype.isPerspectiveCamera=!0;const Qn=90,Kn=1;class ra extends Xt{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Te(Qn,Kn,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);const s=new Te(Qn,Kn,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new w(-1,0,0)),this.add(s);const a=new Te(Qn,Kn,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new w(0,1,0)),this.add(a);const o=new Te(Qn,Kn,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new w(0,-1,0)),this.add(o);const l=new Te(Qn,Kn,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new w(0,0,1)),this.add(l);const c=new Te(Qn,Kn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,h=t.xr.enabled,u=t.getRenderTarget();t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.xr.enabled=h}}class Xr extends ve{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Zs,o=o!==void 0?o:Ln,super(t,e,n,i,s,a,o,l,c,h),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}Xr.prototype.isCubeTexture=!0;class Qo extends Cn{constructor(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),super(t,t,e),e=e||{},this.texture=new Xr(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ne,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.format=Ve,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qr(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ue,blending:Fi});s.uniforms.tEquirect.value=e;const a=new Wt(i,s),o=e.minFilter;return e.minFilter===Ks&&(e.minFilter=Ne),new ra(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}Qo.prototype.isWebGLCubeRenderTarget=!0;class Ko extends ve{constructor(t,e,n,i,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,s,u,d),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:Me,this.minFilter=h!==void 0?h:Me,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ko.prototype.isDataTexture=!0;const ti=new pi,yr=new w;class Yr{constructor(t=new Ye,e=new Ye,n=new Ye,i=new Ye,s=new Ye,a=new Ye){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],m=n[10],x=n[11],v=n[12],g=n[13],p=n[14],C=n[15];return e[0].setComponents(o-i,u-l,x-d,C-v).normalize(),e[1].setComponents(o+i,u+l,x+d,C+v).normalize(),e[2].setComponents(o+s,u+c,x+f,C+g).normalize(),e[3].setComponents(o-s,u-c,x-f,C-g).normalize(),e[4].setComponents(o-a,u-h,x-m,C-p).normalize(),e[5].setComponents(o+a,u+h,x+m,C+p).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(yr.x=i.normal.x>0?t.max.x:t.min.x,yr.y=i.normal.y>0?t.max.y:t.min.y,yr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tl(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Jh(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let m=5126;return u instanceof Float32Array?m=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?e?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:u instanceof Int16Array?m=5122:u instanceof Uint32Array?m=5125:u instanceof Int32Array?m=5124:u instanceof Int8Array?m=5120:u instanceof Uint8Array&&(m=5121),{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class el extends jt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],x=[],v=[];for(let g=0;g<h;g++){const p=g*d-a;for(let C=0;C<c;C++){const R=C*u-s;m.push(R,-p,0),x.push(0,0,1),v.push(C/o),v.push(1-g/l)}}for(let g=0;g<l;g++)for(let p=0;p<o;p++){const C=p+c*g,R=p+c*(g+1),A=p+1+c*(g+1),y=p+1+c*g;f.push(C,R,y),f.push(R,A,y)}this.setIndex(f),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(v,2))}}var $h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,tu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nu="vec3 transformed = vec3( position );",iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ru=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,su=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",wu=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lu=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Cu=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Du=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Iu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fu=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Bu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,zu=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hu=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Gu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Vu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ju=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$u=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,rd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,od=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ld=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,cd=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_d=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Md=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Td=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pd=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Dd=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Id=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Nd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Fd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Bd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,zd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Od=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ud=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gd=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$d=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cf=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,df=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,gf=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const Ht={alphamap_fragment:$h,alphamap_pars_fragment:Qh,alphatest_fragment:Kh,aomap_fragment:tu,aomap_pars_fragment:eu,begin_vertex:nu,beginnormal_vertex:iu,bsdfs:ru,bumpmap_pars_fragment:su,clipping_planes_fragment:au,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:lu,clipping_planes_vertex:cu,color_fragment:hu,color_pars_fragment:uu,color_pars_vertex:du,color_vertex:fu,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:gu,displacementmap_pars_vertex:xu,displacementmap_vertex:vu,emissivemap_fragment:yu,emissivemap_pars_fragment:_u,encodings_fragment:Mu,encodings_pars_fragment:wu,envmap_fragment:bu,envmap_common_pars_fragment:Su,envmap_pars_fragment:Eu,envmap_pars_vertex:Tu,envmap_physical_pars_fragment:zu,envmap_vertex:Au,fog_vertex:Lu,fog_pars_vertex:Cu,fog_fragment:Ru,fog_pars_fragment:Pu,gradientmap_pars_fragment:Du,lightmap_fragment:Iu,lightmap_pars_fragment:Nu,lights_lambert_vertex:Fu,lights_pars_begin:Bu,lights_toon_fragment:Ou,lights_toon_pars_fragment:Hu,lights_phong_fragment:Uu,lights_phong_pars_fragment:ku,lights_physical_fragment:Gu,lights_physical_pars_fragment:Vu,lights_fragment_begin:Wu,lights_fragment_maps:qu,lights_fragment_end:Xu,logdepthbuf_fragment:Yu,logdepthbuf_pars_fragment:ju,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:Ju,map_fragment:$u,map_pars_fragment:Qu,map_particle_fragment:Ku,map_particle_pars_fragment:td,metalnessmap_fragment:ed,metalnessmap_pars_fragment:nd,morphnormal_vertex:id,morphtarget_pars_vertex:rd,morphtarget_vertex:sd,normal_fragment_begin:ad,normal_fragment_maps:od,normalmap_pars_fragment:ld,clearcoat_normal_fragment_begin:cd,clearcoat_normal_fragment_maps:hd,clearcoat_pars_fragment:ud,packing:dd,premultiplied_alpha_fragment:fd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:gd,roughnessmap_fragment:xd,roughnessmap_pars_fragment:vd,shadowmap_pars_fragment:yd,shadowmap_pars_vertex:_d,shadowmap_vertex:Md,shadowmask_pars_fragment:wd,skinbase_vertex:bd,skinning_pars_vertex:Sd,skinning_vertex:Ed,skinnormal_vertex:Td,specularmap_fragment:Ad,specularmap_pars_fragment:Ld,tonemapping_fragment:Cd,tonemapping_pars_fragment:Rd,transmissionmap_fragment:Pd,transmissionmap_pars_fragment:Dd,uv_pars_fragment:Id,uv_pars_vertex:Nd,uv_vertex:Fd,uv2_pars_fragment:Bd,uv2_pars_vertex:zd,uv2_vertex:Od,worldpos_vertex:Hd,background_frag:Ud,background_vert:kd,cube_frag:Gd,cube_vert:Vd,depth_frag:Wd,depth_vert:qd,distanceRGBA_frag:Xd,distanceRGBA_vert:Yd,equirect_frag:jd,equirect_vert:Zd,linedashed_frag:Jd,linedashed_vert:$d,meshbasic_frag:Qd,meshbasic_vert:Kd,meshlambert_frag:tf,meshlambert_vert:ef,meshmatcap_frag:nf,meshmatcap_vert:rf,meshtoon_frag:sf,meshtoon_vert:af,meshphong_frag:of,meshphong_vert:lf,meshphysical_frag:cf,meshphysical_vert:hf,normal_frag:uf,normal_vert:df,points_frag:ff,points_vert:pf,shadow_frag:mf,shadow_vert:gf,sprite_frag:xf,sprite_vert:vf},ht={common:{diffuse:{value:new wt(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new xe},uv2Transform:{value:new xe},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new xe}},sprite:{diffuse:{value:new wt(15658734)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new xe}}},je={basic:{uniforms:ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.fog,ht.lights,{emissive:{value:new wt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:ye([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:ye([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new wt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:ye([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:ye([ht.points,ht.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:ye([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:ye([ht.common,ht.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:ye([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.normal_vert,fragmentShader:Ht.normal_frag},sprite:{uniforms:ye([ht.sprite,ht.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},cube:{uniforms:ye([ht.envmap,{opacity:{value:1}}]),vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:ye([ht.common,ht.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:ye([ht.lights,ht.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};je.physical={uniforms:ye([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new nt(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new wt(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};function yf(r,t,e,n,i){const s=new wt(0);let a=0,o,l,c=null,h=0,u=null;function d(m,x,v,g){let p=x.isScene===!0?x.background:null;p&&p.isTexture&&(p=t.get(p));const C=r.xr,R=C.getSession&&C.getSession();R&&R.environmentBlendMode==="additive"&&(p=null),p===null?f(s,a):p&&p.isColor&&(f(p,1),g=!0),(r.autoClear||g)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),p&&(p.isCubeTexture||p.mapping===$s)?(l===void 0&&(l=new Wt(new qr(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:hi(je.cube.uniforms),vertexShader:je.cube.vertexShader,fragmentShader:je.cube.fragmentShader,side:ue,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,y,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(c!==p||h!==p.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,c=p,h=p.version,u=r.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(o===void 0&&(o=new Wt(new el(2,2),new Rn({name:"BackgroundMaterial",uniforms:hi(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),o.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||h!==p.version||u!==r.toneMapping)&&(o.material.needsUpdate=!0,c=p,h=p.version,u=r.toneMapping),m.unshift(o,o.geometry,o.material,0,0,null))}function f(m,x){e.buffers.color.setClear(m.r,m.g,m.b,x,i)}return{getClearColor:function(){return s},setClearColor:function(m,x=1){s.set(m),a=x,f(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,f(s,a)},render:d}}function _f(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=x(null);let c=l;function h(S,D,I,L,k){let E=!1;if(a){const K=m(L,I,D);c!==K&&(c=K,d(c.object)),E=v(L,k),E&&g(L,k)}else{const K=D.wireframe===!0;(c.geometry!==L.id||c.program!==I.id||c.wireframe!==K)&&(c.geometry=L.id,c.program=I.id,c.wireframe=K,E=!0)}S.isInstancedMesh===!0&&(E=!0),k!==null&&e.update(k,34963),E&&(z(S,D,I,L),k!==null&&r.bindBuffer(34963,e.get(k).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(S){return n.isWebGL2?r.bindVertexArray(S):s.bindVertexArrayOES(S)}function f(S){return n.isWebGL2?r.deleteVertexArray(S):s.deleteVertexArrayOES(S)}function m(S,D,I){const L=I.wireframe===!0;let k=o[S.id];k===void 0&&(k={},o[S.id]=k);let E=k[D.id];E===void 0&&(E={},k[D.id]=E);let K=E[L];return K===void 0&&(K=x(u()),E[L]=K),K}function x(S){const D=[],I=[],L=[];for(let k=0;k<i;k++)D[k]=0,I[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:L,object:S,attributes:{},index:null}}function v(S,D){const I=c.attributes,L=S.attributes;let k=0;for(const E in L){const K=I[E],ft=L[E];if(K===void 0||K.attribute!==ft||K.data!==ft.data)return!0;k++}return c.attributesNum!==k||c.index!==D}function g(S,D){const I={},L=S.attributes;let k=0;for(const E in L){const K=L[E],ft={};ft.attribute=K,K.data&&(ft.data=K.data),I[E]=ft,k++}c.attributes=I,c.attributesNum=k,c.index=D}function p(){const S=c.newAttributes;for(let D=0,I=S.length;D<I;D++)S[D]=0}function C(S){R(S,0)}function R(S,D){const I=c.newAttributes,L=c.enabledAttributes,k=c.attributeDivisors;I[S]=1,L[S]===0&&(r.enableVertexAttribArray(S),L[S]=1),k[S]!==D&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](S,D),k[S]=D)}function A(){const S=c.newAttributes,D=c.enabledAttributes;for(let I=0,L=D.length;I<L;I++)D[I]!==S[I]&&(r.disableVertexAttribArray(I),D[I]=0)}function y(S,D,I,L,k,E){n.isWebGL2===!0&&(I===5124||I===5125)?r.vertexAttribIPointer(S,D,I,k,E):r.vertexAttribPointer(S,D,I,L,k,E)}function z(S,D,I,L){if(n.isWebGL2===!1&&(S.isInstancedMesh||L.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;p();const k=L.attributes,E=I.getAttributes(),K=D.defaultAttributeValues;for(const ft in E){const Z=E[ft];if(Z>=0){const mt=k[ft];if(mt!==void 0){const At=mt.normalized,V=mt.itemSize,kt=e.get(mt);if(kt===void 0)continue;const ut=kt.buffer,Lt=kt.type,st=kt.bytesPerElement;if(mt.isInterleavedBufferAttribute){const Bt=mt.data,bt=Bt.stride,St=mt.offset;Bt&&Bt.isInstancedInterleavedBuffer?(R(Z,Bt.meshPerAttribute),L._maxInstanceCount===void 0&&(L._maxInstanceCount=Bt.meshPerAttribute*Bt.count)):C(Z),r.bindBuffer(34962,ut),y(Z,V,Lt,At,bt*st,St*st)}else mt.isInstancedBufferAttribute?(R(Z,mt.meshPerAttribute),L._maxInstanceCount===void 0&&(L._maxInstanceCount=mt.meshPerAttribute*mt.count)):C(Z),r.bindBuffer(34962,ut),y(Z,V,Lt,At,0,0)}else if(ft==="instanceMatrix"){const At=e.get(S.instanceMatrix);if(At===void 0)continue;const V=At.buffer,kt=At.type;R(Z+0,1),R(Z+1,1),R(Z+2,1),R(Z+3,1),r.bindBuffer(34962,V),r.vertexAttribPointer(Z+0,4,kt,!1,64,0),r.vertexAttribPointer(Z+1,4,kt,!1,64,16),r.vertexAttribPointer(Z+2,4,kt,!1,64,32),r.vertexAttribPointer(Z+3,4,kt,!1,64,48)}else if(ft==="instanceColor"){const At=e.get(S.instanceColor);if(At===void 0)continue;const V=At.buffer,kt=At.type;R(Z,1),r.bindBuffer(34962,V),r.vertexAttribPointer(Z,3,kt,!1,12,0)}else if(K!==void 0){const At=K[ft];if(At!==void 0)switch(At.length){case 2:r.vertexAttrib2fv(Z,At);break;case 3:r.vertexAttrib3fv(Z,At);break;case 4:r.vertexAttrib4fv(Z,At);break;default:r.vertexAttrib1fv(Z,At)}}}}A()}function T(){H();for(const S in o){const D=o[S];for(const I in D){const L=D[I];for(const k in L)f(L[k].object),delete L[k];delete D[I]}delete o[S]}}function N(S){if(o[S.id]===void 0)return;const D=o[S.id];for(const I in D){const L=D[I];for(const k in L)f(L[k].object),delete L[k];delete D[I]}delete o[S.id]}function F(S){for(const D in o){const I=o[D];if(I[S.id]===void 0)continue;const L=I[S.id];for(const k in L)f(L[k].object),delete L[k];delete I[S.id]}}function H(){B(),c!==l&&(c=l,d(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:B,dispose:T,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:p,enableAttribute:C,disableUnusedAttributes:A}}function Mf(r,t,e,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),e.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function wf(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=e.logarithmicDepthBuffer===!0,h=r.getParameter(34930),u=r.getParameter(35660),d=r.getParameter(3379),f=r.getParameter(34076),m=r.getParameter(34921),x=r.getParameter(36347),v=r.getParameter(36348),g=r.getParameter(36349),p=u>0,C=a||t.has("OES_texture_float"),R=p&&C,A=a?r.getParameter(36183):0;return{isWebGL2:a,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:p,floatFragmentTextures:C,floatVertexTextures:R,maxSamples:A}}function bf(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Ye,o=new xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const m=u.length!==0||d||n!==0||i;return i=d,e=h(u,f,0),n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,v=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!v)s?h(null):c();else{const p=s?0:n,C=p*4;let R=g.clippingState||null;l.value=R,R=h(m,d,C,f);for(let A=0;A!==C;++A)R[A]=e[A];g.clippingState=R,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let v=null;if(x!==0){if(v=l.value,m!==!0||v===null){const g=f+x*4,p=d.matrixWorldInverse;o.getNormalMatrix(p),(v===null||v.length<g)&&(v=new Float32Array(g));for(let C=0,R=f;C!==x;++C,R+=4)a.copy(u[C]).applyMatrix4(p,o),a.normal.toArray(v,R),v[R+3]=a.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,v}}function Sf(r){let t=new WeakMap;function e(a,o){return o===Sa?a.mapping=Zs:o===Ea&&(a.mapping=Js),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sa||o===Ea)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=r.getRenderTarget(),h=new Qo(l.height/2);return h.fromEquirectangularTexture(r,a),t.set(a,h),r.setRenderTarget(c),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}function Ef(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tf(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],34962);const f=u.morphAttributes;for(const m in f){const x=f[m];for(let v=0,g=x.length;v<g;v++)t.update(x[v],34962)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(f!==null){const p=f.array;x=f.version;for(let C=0,R=p.length;C<R;C+=3){const A=p[C+0],y=p[C+1],z=p[C+2];d.push(A,y,y,z,z,A)}}else{const p=m.array;x=m.version;for(let C=0,R=p.length/3-1;C<R;C+=3){const A=C+0,y=C+1,z=C+2;d.push(A,y,y,z,z,A)}}const v=new($o(d)>65535?Jo:Zo)(d,1);v.version=x;const g=s.get(u);g&&t.remove(g),s.set(u,v)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Af(r,t,e,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,o,d*l),e.update(f,s,1)}function u(d,f,m){if(m===0)return;let x,v;if(i)x=r,v="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](s,f,o,d*l,m),e.update(f,s,m)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function Lf(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Cf(r,t){return r[0]-t[0]}function Rf(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Pf(r){const t={},e=new Float32Array(8),n=[];for(let s=0;s<8;s++)n[s]=[s,0];function i(s,a,o,l){const c=s.morphTargetInfluences,h=c===void 0?0:c.length;let u=t[a.id];if(u===void 0){u=[];for(let v=0;v<h;v++)u[v]=[v,0];t[a.id]=u}for(let v=0;v<h;v++){const g=u[v];g[0]=v,g[1]=c[v]}u.sort(Rf);for(let v=0;v<8;v++)v<h&&u[v][1]?(n[v][0]=u[v][0],n[v][1]=u[v][1]):(n[v][0]=Number.MAX_SAFE_INTEGER,n[v][1]=0);n.sort(Cf);const d=o.morphTargets&&a.morphAttributes.position,f=o.morphNormals&&a.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const g=n[v],p=g[0],C=g[1];p!==Number.MAX_SAFE_INTEGER&&C?(d&&a.getAttribute("morphTarget"+v)!==d[p]&&a.setAttribute("morphTarget"+v,d[p]),f&&a.getAttribute("morphNormal"+v)!==f[p]&&a.setAttribute("morphNormal"+v,f[p]),e[v]=C,m+=C):(d&&a.hasAttribute("morphTarget"+v)===!0&&a.deleteAttribute("morphTarget"+v),f&&a.hasAttribute("morphNormal"+v)===!0&&a.deleteAttribute("morphNormal"+v),e[v]=0)}const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",e)}return{update:i}}function Df(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class nl extends ve{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=Me,this.minFilter=Me,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}nl.prototype.isDataTexture2DArray=!0;class il extends ve{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=Me,this.minFilter=Me,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}il.prototype.isDataTexture3D=!0;const rl=new ve,If=new nl,Nf=new il,sl=new Xr,$a=[],Qa=[],Ka=new Float32Array(16),to=new Float32Array(9),eo=new Float32Array(4);function gi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=$a[i];if(s===void 0&&(s=new Float32Array(i),$a[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function be(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function _e(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function al(r,t){let e=Qa[t];e===void 0&&(e=new Int32Array(t),Qa[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Ff(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Bf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2fv(this.addr,t),_e(e,t)}}function zf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;r.uniform3fv(this.addr,t),_e(e,t)}}function Of(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4fv(this.addr,t),_e(e,t)}}function Hf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(be(e,n))return;eo.set(n),r.uniformMatrix2fv(this.addr,!1,eo),_e(e,n)}}function Uf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(be(e,n))return;to.set(n),r.uniformMatrix3fv(this.addr,!1,to),_e(e,n)}}function kf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(be(e,n))return;Ka.set(n),r.uniformMatrix4fv(this.addr,!1,Ka),_e(e,n)}}function Gf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Vf(r,t){const e=this.cache;be(e,t)||(r.uniform2iv(this.addr,t),_e(e,t))}function Wf(r,t){const e=this.cache;be(e,t)||(r.uniform3iv(this.addr,t),_e(e,t))}function qf(r,t){const e=this.cache;be(e,t)||(r.uniform4iv(this.addr,t),_e(e,t))}function Xf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Yf(r,t){const e=this.cache;be(e,t)||(r.uniform2uiv(this.addr,t),_e(e,t))}function jf(r,t){const e=this.cache;be(e,t)||(r.uniform3uiv(this.addr,t),_e(e,t))}function Zf(r,t){const e=this.cache;be(e,t)||(r.uniform4uiv(this.addr,t),_e(e,t))}function Jf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.safeSetTexture2D(t||rl,i)}function $f(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nf,i)}function Qf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.safeSetTextureCube(t||sl,i)}function Kf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||If,i)}function tp(r){switch(r){case 5126:return Ff;case 35664:return Bf;case 35665:return zf;case 35666:return Of;case 35674:return Hf;case 35675:return Uf;case 35676:return kf;case 5124:case 35670:return Gf;case 35667:case 35671:return Vf;case 35668:case 35672:return Wf;case 35669:case 35673:return qf;case 5125:return Xf;case 36294:return Yf;case 36295:return jf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return Kf}}function ep(r,t){r.uniform1fv(this.addr,t)}function np(r,t){const e=gi(t,this.size,2);r.uniform2fv(this.addr,e)}function ip(r,t){const e=gi(t,this.size,3);r.uniform3fv(this.addr,e)}function rp(r,t){const e=gi(t,this.size,4);r.uniform4fv(this.addr,e)}function sp(r,t){const e=gi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ap(r,t){const e=gi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function op(r,t){const e=gi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function lp(r,t){r.uniform1iv(this.addr,t)}function cp(r,t){r.uniform2iv(this.addr,t)}function hp(r,t){r.uniform3iv(this.addr,t)}function up(r,t){r.uniform4iv(this.addr,t)}function dp(r,t){r.uniform1uiv(this.addr,t)}function fp(r,t){r.uniform2uiv(this.addr,t)}function pp(r,t){r.uniform3uiv(this.addr,t)}function mp(r,t){r.uniform4uiv(this.addr,t)}function gp(r,t,e){const n=t.length,i=al(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.safeSetTexture2D(t[s]||rl,i[s])}function xp(r,t,e){const n=t.length,i=al(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.safeSetTextureCube(t[s]||sl,i[s])}function vp(r){switch(r){case 5126:return ep;case 35664:return np;case 35665:return ip;case 35666:return rp;case 35674:return sp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35680:case 36300:case 36308:case 36293:return xp}}function yp(r,t,e){this.id=r,this.addr=e,this.cache=[],this.setValue=tp(t.type)}function ol(r,t,e){this.id=r,this.addr=e,this.cache=[],this.size=t.size,this.setValue=vp(t.type)}ol.prototype.updateCache=function(r){const t=this.cache;r instanceof Float32Array&&t.length!==r.length&&(this.cache=new Float32Array(r.length)),_e(t,r)};function ll(r){this.id=r,this.seq=[],this.map={}}ll.prototype.setValue=function(r,t,e){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,t[a.id],e)}};const Cs=/(\w+)(\])?(\[|\.)?/g;function no(r,t){r.seq.push(t),r.map[t.id]=t}function _p(r,t,e){const n=r.name,i=n.length;for(Cs.lastIndex=0;;){const s=Cs.exec(n),a=Cs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){no(e,c===void 0?new yp(o,r,t):new ol(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new ll(o),no(e,u)),e=u}}}function vn(r,t){this.seq=[],this.map={};const e=r.getProgramParameter(t,35718);for(let n=0;n<e;++n){const i=r.getActiveUniform(t,n),s=r.getUniformLocation(t,i.name);_p(i,s,this)}}vn.prototype.setValue=function(r,t,e,n){const i=this.map[t];i!==void 0&&i.setValue(r,e,n)};vn.prototype.setOptional=function(r,t,e){const n=t[e];n!==void 0&&this.setValue(r,e,n)};vn.upload=function(r,t,e,n){for(let i=0,s=t.length;i!==s;++i){const a=t[i],o=e[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}};vn.seqWithValue=function(r,t){const e=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in t&&e.push(s)}return e};function io(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Mp=0;function wp(r){const t=r.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function cl(r){switch(r){case Zi:return["Linear","( value )"];case na:return["sRGB","( value )"];case _h:return["RGBE","( value )"];case wh:return["RGBM","( value, 7.0 )"];case bh:return["RGBM","( value, 16.0 )"];case Sh:return["RGBD","( value, 256.0 )"];case yh:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Mh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ro(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=r.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+e+`
`+i+wp(s)}function Ai(r,t){const e=cl(t);return"vec4 "+r+"( vec4 value ) { return "+e[0]+"ToLinear"+e[1]+"; }"}function bp(r,t){const e=cl(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Sp(r,t){let e;switch(t){case vc:e="Linear";break;case yc:e="Reinhard";break;case _c:e="OptimizedCineon";break;case Mc:e="ACESFilmic";break;case wc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ep(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ni).join(`
`)}function Tp(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ap(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const a=r.getActiveAttrib(t,i).name;e[a]=r.getAttribLocation(t,a)}return e}function Ni(r){return r!==""}function so(r,t){return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ao(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gs(r){return r.replace(Lp,Cp)}function Cp(r,t){const e=Ht[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Gs(e)}const Rp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oo(r){return r.replace(Pp,hl).replace(Rp,Dp)}function Dp(r,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),hl(r,t,e,n)}function hl(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lo(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ip(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ko?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Jl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function Np(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zs:case Js:t="ENVMAP_TYPE_CUBE";break;case $s:case Qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fp(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Js:case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function Bp(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wr:t="ENVMAP_BLENDING_MULTIPLY";break;case gc:t="ENVMAP_BLENDING_MIX";break;case xc:t="ENVMAP_BLENDING_ADD";break}return t}function zp(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ip(e),c=Np(e),h=Fp(e),u=Bp(e),d=r.gammaFactor>0?r.gammaFactor:1,f=e.isWebGL2?"":Ep(e),m=Tp(s),x=i.createProgram();let v,g,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=[m].filter(Ni).join(`
`),v.length>0&&(v+=`
`),g=[f,m].filter(Ni).join(`
`),g.length>0&&(g+=`
`)):(v=[lo(e),"#define SHADER_NAME "+e.shaderName,m,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),g=[f,lo(e),"#define SHADER_NAME "+e.shaderName,m,e.alphaTest?"#define ALPHATEST "+e.alphaTest+(e.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.sheen?"#define USE_SHEEN":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?Ht.tonemapping_pars_fragment:"",e.toneMapping!==zi?Sp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",Ht.encodings_pars_fragment,e.map?Ai("mapTexelToLinear",e.mapEncoding):"",e.matcap?Ai("matcapTexelToLinear",e.matcapEncoding):"",e.envMap?Ai("envMapTexelToLinear",e.envMapEncoding):"",e.emissiveMap?Ai("emissiveMapTexelToLinear",e.emissiveMapEncoding):"",e.lightMap?Ai("lightMapTexelToLinear",e.lightMapEncoding):"",bp("linearToOutputTexel",e.outputEncoding),e.depthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ni).join(`
`)),a=Gs(a),a=so(a,e),a=ao(a,e),o=Gs(o),o=so(o,e),o=ao(o,e),a=oo(a),o=oo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===Oa?"":"out highp vec4 pc_fragColor;",e.glslVersion===Oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=p+v+a,R=p+g+o,A=io(i,35633,C),y=io(i,35632,R);if(i.attachShader(x,A),i.attachShader(x,y),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),r.debug.checkShaderErrors){const N=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(A).trim(),H=i.getShaderInfoLog(y).trim();let B=!0,S=!0;if(i.getProgramParameter(x,35714)===!1){B=!1;const D=ro(i,A,"vertex"),I=ro(i,y,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(x,35715),"gl.getProgramInfoLog",N,D,I)}else N!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",N):(F===""||H==="")&&(S=!1);S&&(this.diagnostics={runnable:B,programLog:N,vertexShader:{log:F,prefix:v},fragmentShader:{log:H,prefix:g}})}i.deleteShader(A),i.deleteShader(y);let z;this.getUniforms=function(){return z===void 0&&(z=new vn(i,x)),z};let T;return this.getAttributes=function(){return T===void 0&&(T=Ap(i,x)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=e.shaderName,this.id=Mp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=y,this}function Op(r,t,e,n,i,s){const a=[],o=n.isWebGL2,l=n.logarithmicDepthBuffer,c=n.floatVertexTextures,h=n.maxVertexUniforms,u=n.vertexTextures;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function x(y){const T=y.skeleton.bones;if(c)return 1024;{const F=Math.floor((h-20)/4),H=Math.min(F,T.length);return H<T.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+T.length+" bones. This GPU supports "+H+"."),0):H}}function v(y){let z;return y&&y.isTexture?z=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),z=y.texture.encoding):z=Zi,z}function g(y,z,T,N,F){const H=N.fog,B=y.isMeshStandardMaterial?N.environment:null,S=t.get(y.envMap||B),D=f[y.type],I=F.isSkinnedMesh?x(F):0;y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let L,k;if(D){const ft=je[D];L=ft.vertexShader,k=ft.fragmentShader}else L=y.vertexShader,k=y.fragmentShader;const E=r.getRenderTarget();return{isWebGL2:o,shaderID:D,shaderName:y.type,vertexShader:L,fragmentShader:k,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:u,outputEncoding:E!==null?v(E.texture):r.outputEncoding,map:!!y.map,mapEncoding:v(y.map),matcap:!!y.matcap,matcapEncoding:v(y.matcap),envMap:!!S,envMapMode:S&&S.mapping,envMapEncoding:v(S),envMapCubeUV:!!S&&(S.mapping===$s||S.mapping===Qs),lightMap:!!y.lightMap,lightMapEncoding:v(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:v(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Ah,tangentSpaceNormalMap:y.normalMapType===di,clearcoatMap:!!y.clearcoatMap,clearcoatRoughnessMap:!!y.clearcoatRoughnessMap,clearcoatNormalMap:!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,alphaMap:!!y.alphaMap,gradientMap:!!y.gradientMap,sheen:!!y.sheen,transmissionMap:!!y.transmissionMap,combine:y.combine,vertexTangents:y.normalMap&&y.vertexTangents,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&F.geometry&&F.geometry.attributes.color&&F.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.transmissionMap)&&!!y.displacementMap,fog:!!H,useFog:y.fog,fogExp2:H&&H.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:l,skinning:y.skinning&&I>0,maxBones:I,useVertexTexture:c,morphTargets:y.morphTargets,morphNormals:y.morphNormals,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&T.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:zi,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,alphaTest:y.alphaTest,doubleSided:y.side===An,flipSided:y.side===ue,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||e.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||e.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||e.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const z=[];if(y.shaderID?z.push(y.shaderID):(z.push(y.fragmentShader),z.push(y.vertexShader)),y.defines!==void 0)for(const T in y.defines)z.push(T),z.push(y.defines[T]);if(y.isRawShaderMaterial===!1){for(let T=0;T<m.length;T++)z.push(y[m[T]]);z.push(r.outputEncoding),z.push(r.gammaFactor)}return z.push(y.customProgramCacheKey),z.join()}function C(y){const z=f[y.type];let T;if(z){const N=je[z];T=Yh.clone(N.uniforms)}else T=y.uniforms;return T}function R(y,z){let T;for(let N=0,F=a.length;N<F;N++){const H=a[N];if(H.cacheKey===z){T=H,++T.usedTimes;break}}return T===void 0&&(T=new zp(r,z,y,i),a.push(T)),T}function A(y){if(--y.usedTimes===0){const z=a.indexOf(y);a[z]=a[a.length-1],a.pop(),y.destroy()}}return{getParameters:g,getProgramCacheKey:p,getUniforms:C,acquireProgram:R,releaseProgram:A,programs:a}}function Hp(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Up(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.program!==t.program?r.program.id-t.program.id:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function kp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function co(r){const t=[];let e=0;const n=[],i=[],s={id:-1};function a(){e=0,n.length=0,i.length=0}function o(d,f,m,x,v,g){let p=t[e];const C=r.get(m);return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,program:C.program||s,groupOrder:x,renderOrder:d.renderOrder,z:v,group:g},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.program=C.program||s,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=v,p.group=g),e++,p}function l(d,f,m,x,v,g){const p=o(d,f,m,x,v,g);(m.transparent===!0?i:n).push(p)}function c(d,f,m,x,v,g){const p=o(d,f,m,x,v,g);(m.transparent===!0?i:n).unshift(p)}function h(d,f){n.length>1&&n.sort(d||Up),i.length>1&&i.sort(f||kp)}function u(){for(let d=e,f=t.length;d<f;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:n,transparent:i,init:a,push:l,unshift:c,finish:u,sort:h}}function Gp(r){let t=new WeakMap;function e(i,s){let a;return t.has(i)===!1?(a=new co(r),t.set(i,[a])):s>=t.get(i).length?(a=new co(r),t.get(i).push(a)):a=t.get(i)[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Vp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new wt};break;case"SpotLight":e={position:new w,direction:new w,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new w,halfWidth:new w,halfHeight:new w};break}return r[t.id]=e,e}}}function Wp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let qp=0;function Xp(r,t){return(t.castShadow?1:0)-(r.castShadow?1:0)}function Yp(r,t){const e=new Vp,n=Wp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new w);const s=new w,a=new Tt,o=new Tt;function l(h){let u=0,d=0,f=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let m=0,x=0,v=0,g=0,p=0,C=0,R=0,A=0;h.sort(Xp);for(let z=0,T=h.length;z<T;z++){const N=h[z],F=N.color,H=N.intensity,B=N.distance,S=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=F.r*H,d+=F.g*H,f+=F.b*H;else if(N.isLightProbe)for(let D=0;D<9;D++)i.probe[D].addScaledVector(N.sh.coefficients[D],H);else if(N.isDirectionalLight){const D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const I=N.shadow,L=n.get(N);L.shadowBias=I.bias,L.shadowNormalBias=I.normalBias,L.shadowRadius=I.radius,L.shadowMapSize=I.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=S,i.directionalShadowMatrix[m]=N.shadow.matrix,C++}i.directional[m]=D,m++}else if(N.isSpotLight){const D=e.get(N);if(D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(F).multiplyScalar(H),D.distance=B,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,N.castShadow){const I=N.shadow,L=n.get(N);L.shadowBias=I.bias,L.shadowNormalBias=I.normalBias,L.shadowRadius=I.radius,L.shadowMapSize=I.mapSize,i.spotShadow[v]=L,i.spotShadowMap[v]=S,i.spotShadowMatrix[v]=N.shadow.matrix,A++}i.spot[v]=D,v++}else if(N.isRectAreaLight){const D=e.get(N);D.color.copy(F).multiplyScalar(H),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=D,g++}else if(N.isPointLight){const D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),D.distance=N.distance,D.decay=N.decay,N.castShadow){const I=N.shadow,L=n.get(N);L.shadowBias=I.bias,L.shadowNormalBias=I.normalBias,L.shadowRadius=I.radius,L.shadowMapSize=I.mapSize,L.shadowCameraNear=I.camera.near,L.shadowCameraFar=I.camera.far,i.pointShadow[x]=L,i.pointShadowMap[x]=S,i.pointShadowMatrix[x]=N.shadow.matrix,R++}i.point[x]=D,x++}else if(N.isHemisphereLight){const D=e.get(N);D.skyColor.copy(N.color).multiplyScalar(H),D.groundColor.copy(N.groundColor).multiplyScalar(H),i.hemi[p]=D,p++}}g>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==m||y.pointLength!==x||y.spotLength!==v||y.rectAreaLength!==g||y.hemiLength!==p||y.numDirectionalShadows!==C||y.numPointShadows!==R||y.numSpotShadows!==A)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=g,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=R,i.spotShadowMatrix.length=A,y.directionalLength=m,y.pointLength=x,y.spotLength=v,y.rectAreaLength=g,y.hemiLength=p,y.numDirectionalShadows=C,y.numPointShadows=R,y.numSpotShadows=A,i.version=qp++)}function c(h,u){let d=0,f=0,m=0,x=0,v=0;const g=u.matrixWorldInverse;for(let p=0,C=h.length;p<C;p++){const R=h[p];if(R.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),d++}else if(R.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),m++}else if(R.isRectAreaLight){const A=i.rectArea[x];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(g),o.identity(),a.copy(R.matrixWorld),a.premultiply(g),o.extractRotation(a),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(R.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(g),f++}else if(R.isHemisphereLight){const A=i.hemi[v];A.direction.setFromMatrixPosition(R.matrixWorld),A.direction.transformDirection(g),A.direction.normalize(),v++}}}return{setup:l,setupView:c,state:i}}function ho(r,t){const e=new Yp(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(){e.setup(n)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function jp(r,t){let e=new WeakMap;function n(s,a=0){let o;return e.has(s)===!1?(o=new ho(r,t),e.set(s,[o])):a>=e.get(s).length?(o=new ho(r,t),e.get(s).push(o)):o=e.get(s)[a],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class ul extends fe{constructor(t){super(),this.type="MeshDepthMaterial",this.depthPacking=Eh,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}ul.prototype.isMeshDepthMaterial=!0;class dl extends fe{constructor(t){super(),this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}dl.prototype.isMeshDistanceMaterial=!0;var Zp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Jp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function fl(r,t,e){let n=new Yr;const i=new nt,s=new nt,a=new Zt,o=[],l=[],c={},h=e.maxTextureSize,u={0:ue,1:Vr,2:An},d=new Rn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Jp,fragmentShader:Zp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new jt;m.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Wt(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ko,this.render=function(y,z,T){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||y.length===0)return;const N=r.getRenderTarget(),F=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Fi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);for(let S=0,D=y.length;S<D;S++){const I=y[S],L=I.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const k=L.getFrameExtents();if(i.multiply(k),s.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/k.x),i.x=s.x*k.x,L.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/k.y),i.y=s.y*k.y,L.mapSize.y=s.y)),L.map===null&&!L.isPointLightShadow&&this.type===Ii){const K={minFilter:Ne,magFilter:Ne,format:Ve};L.map=new Cn(i.x,i.y,K),L.map.texture.name=I.name+".shadowMap",L.mapPass=new Cn(i.x,i.y,K),L.camera.updateProjectionMatrix()}if(L.map===null){const K={minFilter:Me,magFilter:Me,format:Ve};L.map=new Cn(i.x,i.y,K),L.map.texture.name=I.name+".shadowMap",L.camera.updateProjectionMatrix()}r.setRenderTarget(L.map),r.clear();const E=L.getViewportCount();for(let K=0;K<E;K++){const ft=L.getViewport(K);a.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),B.viewport(a),L.updateMatrices(I,K),n=L.getFrustum(),A(z,T,L.camera,I,this.type)}!L.isPointLightShadow&&this.type===Ii&&g(L,T),L.needsUpdate=!1}v.needsUpdate=!1,r.setRenderTarget(N,F,H)};function g(y,z){const T=t.update(x);d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(z,null,T,d,x,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(z,null,T,f,x,null)}function p(y,z,T){const N=y<<0|z<<1|T<<2;let F=o[N];return F===void 0&&(F=new ul({depthPacking:Th,morphTargets:y,skinning:z}),o[N]=F),F}function C(y,z,T){const N=y<<0|z<<1|T<<2;let F=l[N];return F===void 0&&(F=new dl({morphTargets:y,skinning:z}),l[N]=F),F}function R(y,z,T,N,F,H,B){let S=null,D=p,I=y.customDepthMaterial;if(N.isPointLight===!0&&(D=C,I=y.customDistanceMaterial),I===void 0){let L=!1;T.morphTargets===!0&&(L=z.morphAttributes&&z.morphAttributes.position&&z.morphAttributes.position.length>0);let k=!1;y.isSkinnedMesh===!0&&(T.skinning===!0?k=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",y));const E=y.isInstancedMesh===!0;S=D(L,k,E)}else S=I;if(r.localClippingEnabled&&T.clipShadows===!0&&T.clippingPlanes.length!==0){const L=S.uuid,k=T.uuid;let E=c[L];E===void 0&&(E={},c[L]=E);let K=E[k];K===void 0&&(K=S.clone(),E[k]=K),S=K}return S.visible=T.visible,S.wireframe=T.wireframe,B===Ii?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0&&(S.referencePosition.setFromMatrixPosition(N.matrixWorld),S.nearDistance=F,S.farDistance=H),S}function A(y,z,T,N,F){if(y.visible===!1)return;if(y.layers.test(z.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&F===Ii)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const S=t.update(y),D=y.material;if(Array.isArray(D)){const I=S.groups;for(let L=0,k=I.length;L<k;L++){const E=I[L],K=D[E.materialIndex];if(K&&K.visible){const ft=R(y,S,K,N,T.near,T.far,F);r.renderBufferDirect(T,null,S,ft,y,E)}}}else if(D.visible){const I=R(y,S,D,N,T.near,T.far,F);r.renderBufferDirect(T,null,S,I,y,null)}}const B=y.children;for(let S=0,D=B.length;S<D;S++)A(B[S],z,T,N,F)}}function $p(r,t,e){const n=e.isWebGL2;function i(){let P=!1;const it=new Zt;let rt=null;const yt=new Zt(0,0,0,0);return{setMask:function(j){rt!==j&&!P&&(r.colorMask(j,j,j,j),rt=j)},setLocked:function(j){P=j},setClear:function(j,Ct,Vt,se,Ke){Ke===!0&&(j*=se,Ct*=se,Vt*=se),it.set(j,Ct,Vt,se),yt.equals(it)===!1&&(r.clearColor(j,Ct,Vt,se),yt.copy(it))},reset:function(){P=!1,rt=null,yt.set(-1,0,0,0)}}}function s(){let P=!1,it=null,rt=null,yt=null;return{setTest:function(j){j?mt(2929):At(2929)},setMask:function(j){it!==j&&!P&&(r.depthMask(j),it=j)},setFunc:function(j){if(rt!==j){if(j)switch(j){case cc:r.depthFunc(512);break;case hc:r.depthFunc(519);break;case uc:r.depthFunc(513);break;case Os:r.depthFunc(515);break;case dc:r.depthFunc(514);break;case fc:r.depthFunc(518);break;case pc:r.depthFunc(516);break;case mc:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);rt=j}},setLocked:function(j){P=j},setClear:function(j){yt!==j&&(r.clearDepth(j),yt=j)},reset:function(){P=!1,it=null,rt=null,yt=null}}}function a(){let P=!1,it=null,rt=null,yt=null,j=null,Ct=null,Vt=null,se=null,Ke=null;return{setTest:function(ie){P||(ie?mt(2960):At(2960))},setMask:function(ie){it!==ie&&!P&&(r.stencilMask(ie),it=ie)},setFunc:function(ie,ze,Ae){(rt!==ie||yt!==ze||j!==Ae)&&(r.stencilFunc(ie,ze,Ae),rt=ie,yt=ze,j=Ae)},setOp:function(ie,ze,Ae){(Ct!==ie||Vt!==ze||se!==Ae)&&(r.stencilOp(ie,ze,Ae),Ct=ie,Vt=ze,se=Ae)},setLocked:function(ie){P=ie},setClear:function(ie){Ke!==ie&&(r.clearStencil(ie),Ke=ie)},reset:function(){P=!1,it=null,rt=null,yt=null,j=null,Ct=null,Vt=null,se=null,Ke=null}}}const o=new i,l=new s,c=new a;let h={},u=null,d={},f=null,m=!1,x=null,v=null,g=null,p=null,C=null,R=null,A=null,y=!1,z=null,T=null,N=null,F=null,H=null;const B=r.getParameter(35661);let S=!1,D=0;const I=r.getParameter(7938);I.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(I)[1]),S=D>=1):I.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),S=D>=2);let L=null,k={};const E=new Zt(0,0,r.canvas.width,r.canvas.height),K=new Zt(0,0,r.canvas.width,r.canvas.height);function ft(P,it,rt){const yt=new Uint8Array(4),j=r.createTexture();r.bindTexture(P,j),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let Ct=0;Ct<rt;Ct++)r.texImage2D(it+Ct,0,6408,1,1,0,6408,5121,yt);return j}const Z={};Z[3553]=ft(3553,3553,1),Z[34067]=ft(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),mt(2929),l.setFunc(Os),St(!1),Q(va),mt(2884),Bt(Fi);function mt(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function At(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function V(P){P!==u&&(r.bindFramebuffer(36160,P),u=P)}function kt(P,it){it===null&&u!==null&&(it=u),d[P]!==it&&(r.bindFramebuffer(P,it),d[P]=it,n&&(P===36009&&(d[36160]=it),P===36160&&(d[36009]=it)))}function ut(P){return f!==P?(r.useProgram(P),f=P,!0):!1}const Lt={[si]:32774,[Ql]:32778,[Kl]:32779};if(n)Lt[wa]=32775,Lt[ba]=32776;else{const P=t.get("EXT_blend_minmax");P!==null&&(Lt[wa]=P.MIN_EXT,Lt[ba]=P.MAX_EXT)}const st={[tc]:0,[ec]:1,[nc]:768,[Vo]:770,[lc]:776,[ac]:774,[rc]:772,[ic]:769,[Wo]:771,[oc]:775,[sc]:773};function Bt(P,it,rt,yt,j,Ct,Vt,se){if(P===Fi){m===!0&&(At(3042),m=!1);return}if(m===!1&&(mt(3042),m=!0),P!==$l){if(P!==x||se!==y){if((v!==si||C!==si)&&(r.blendEquation(32774),v=si,C=si),se)switch(P){case Bi:r.blendFuncSeparate(1,771,1,771);break;case ya:r.blendFunc(1,1);break;case _a:r.blendFuncSeparate(0,0,769,771);break;case Ma:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Bi:r.blendFuncSeparate(770,771,1,771);break;case ya:r.blendFunc(770,1);break;case _a:r.blendFunc(0,769);break;case Ma:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}g=null,p=null,R=null,A=null,x=P,y=se}return}j=j||it,Ct=Ct||rt,Vt=Vt||yt,(it!==v||j!==C)&&(r.blendEquationSeparate(Lt[it],Lt[j]),v=it,C=j),(rt!==g||yt!==p||Ct!==R||Vt!==A)&&(r.blendFuncSeparate(st[rt],st[yt],st[Ct],st[Vt]),g=rt,p=yt,R=Ct,A=Vt),x=P,y=null}function bt(P,it){P.side===An?At(2884):mt(2884);let rt=P.side===ue;it&&(rt=!rt),St(rt),P.blending===Bi&&P.transparent===!1?Bt(Fi):Bt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const yt=P.stencilWrite;c.setTest(yt),yt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),lt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?mt(32926):At(32926)}function St(P){z!==P&&(P?r.frontFace(2304):r.frontFace(2305),z=P)}function Q(P){P!==jl?(mt(2884),P!==T&&(P===va?r.cullFace(1029):P===Zl?r.cullFace(1028):r.cullFace(1032))):At(2884),T=P}function et(P){P!==N&&(S&&r.lineWidth(P),N=P)}function lt(P,it,rt){P?(mt(32823),(F!==it||H!==rt)&&(r.polygonOffset(it,rt),F=it,H=rt)):At(32823)}function vt(P){P?mt(3089):At(3089)}function dt(P){P===void 0&&(P=33984+B-1),L!==P&&(r.activeTexture(P),L=P)}function b(P,it){L===null&&dt();let rt=k[L];rt===void 0&&(rt={type:void 0,texture:void 0},k[L]=rt),(rt.type!==P||rt.texture!==it)&&(r.bindTexture(P,it||Z[P]),rt.type=P,rt.texture=it)}function M(){const P=k[L];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function X(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(P){E.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),E.copy(P))}function Dt(P){K.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),K.copy(P))}function _t(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},L=null,k={},u=null,d={},f=null,m=!1,x=null,v=null,g=null,p=null,C=null,R=null,A=null,y=!1,z=null,T=null,N=null,F=null,H=null,E.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:mt,disable:At,bindFramebuffer:kt,bindXRFramebuffer:V,useProgram:ut,setBlending:Bt,setMaterial:bt,setFlipSided:St,setCullFace:Q,setLineWidth:et,setPolygonOffset:lt,setScissorTest:vt,activeTexture:dt,bindTexture:b,unbindTexture:M,compressedTexImage2D:X,texImage2D:Y,texImage3D:J,scissor:gt,viewport:Dt,reset:_t}}function Qp(r,t,e,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=new WeakMap;let f,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,M){return m?new OffscreenCanvas(b,M):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(b,M,X,Y){let J=1;if((b.width>Y||b.height>Y)&&(J=Y/Math.max(b.width,b.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const gt=M?Ph:Math.floor,Dt=gt(J*b.width),_t=gt(J*b.height);f===void 0&&(f=x(Dt,_t));const P=X?x(Dt,_t):f;return P.width=Dt,P.height=_t,P.getContext("2d").drawImage(b,0,0,Dt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Dt+"x"+_t+")."),P}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function g(b){return Ha(b.width)&&Ha(b.height)}function p(b){return o?!1:b.wrapS!==Ge||b.wrapT!==Ge||b.minFilter!==Me&&b.minFilter!==Ne}function C(b,M){return b.generateMipmaps&&M&&b.minFilter!==Me&&b.minFilter!==Ne}function R(b,M,X,Y){r.generateMipmap(b);const J=n.get(M);J.__maxMipLevel=Math.log2(Math.max(X,Y))}function A(b,M,X){if(o===!1)return M;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=M;return M===6403&&(X===5126&&(Y=33326),X===5131&&(Y=33325),X===5121&&(Y=33321)),M===6407&&(X===5126&&(Y=34837),X===5131&&(Y=34843),X===5121&&(Y=32849)),M===6408&&(X===5126&&(Y=34836),X===5131&&(Y=34842),X===5121&&(Y=32856)),(Y===33325||Y===33326||Y===34842||Y===34836)&&t.get("EXT_color_buffer_float"),Y}function y(b){return b===Me||b===Ta||b===Aa?9728:9729}function z(b){const M=b.target;M.removeEventListener("dispose",z),N(M),M.isVideoTexture&&d.delete(M),a.memory.textures--}function T(b){const M=b.target;M.removeEventListener("dispose",T),F(M),a.memory.textures--}function N(b){const M=n.get(b);M.__webglInit!==void 0&&(r.deleteTexture(M.__webglTexture),n.remove(b))}function F(b){const M=b.texture,X=n.get(b),Y=n.get(M);if(b){if(Y.__webglTexture!==void 0&&r.deleteTexture(Y.__webglTexture),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)r.deleteFramebuffer(X.__webglFramebuffer[J]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[J]);else r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer&&r.deleteRenderbuffer(X.__webglColorRenderbuffer),X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer);n.remove(M),n.remove(b)}}let H=0;function B(){H=0}function S(){const b=H;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),H+=1,b}function D(b,M){const X=n.get(b);if(b.isVideoTexture&&Q(b),b.version>0&&X.__version!==b.version){const Y=b.image;if(Y===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(X,b,M);return}}e.activeTexture(33984+M),e.bindTexture(3553,X.__webglTexture)}function I(b,M){const X=n.get(b);if(b.version>0&&X.__version!==b.version){mt(X,b,M);return}e.activeTexture(33984+M),e.bindTexture(35866,X.__webglTexture)}function L(b,M){const X=n.get(b);if(b.version>0&&X.__version!==b.version){mt(X,b,M);return}e.activeTexture(33984+M),e.bindTexture(32879,X.__webglTexture)}function k(b,M){const X=n.get(b);if(b.version>0&&X.__version!==b.version){At(X,b,M);return}e.activeTexture(33984+M),e.bindTexture(34067,X.__webglTexture)}const E={[Hs]:10497,[Ge]:33071,[Us]:33648},K={[Me]:9728,[Ta]:9984,[Aa]:9986,[Ne]:9729,[bc]:9985,[Ks]:9987};function ft(b,M,X){if(X?(r.texParameteri(b,10242,E[M.wrapS]),r.texParameteri(b,10243,E[M.wrapT]),(b===32879||b===35866)&&r.texParameteri(b,32882,E[M.wrapR]),r.texParameteri(b,10240,K[M.magFilter]),r.texParameteri(b,10241,K[M.minFilter])):(r.texParameteri(b,10242,33071),r.texParameteri(b,10243,33071),(b===32879||b===35866)&&r.texParameteri(b,32882,33071),(M.wrapS!==Ge||M.wrapT!==Ge)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,10240,y(M.magFilter)),r.texParameteri(b,10241,y(M.minFilter)),M.minFilter!==Me&&M.minFilter!==Ne&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Y=t.get("EXT_texture_filter_anisotropic");if(M.type===xn&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Br&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Z(b,M){b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",z),b.__webglTexture=r.createTexture(),a.memory.textures++)}function mt(b,M,X){let Y=3553;M.isDataTexture2DArray&&(Y=35866),M.isDataTexture3D&&(Y=32879),Z(b,M),e.activeTexture(33984+X),e.bindTexture(Y,b.__webglTexture),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const J=p(M)&&g(M.image)===!1,gt=v(M.image,J,!1,h),Dt=g(gt)||o,_t=s.convert(M.format);let P=s.convert(M.type),it=A(M.internalFormat,_t,P);ft(Y,M,Dt);let rt;const yt=M.mipmaps;if(M.isDepthTexture)it=6402,o?M.type===xn?it=36012:M.type===Ir?it=33190:M.type===Oi?it=35056:it=33189:M.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ci&&it===6402&&M.type!==Fr&&M.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Fr,P=s.convert(M.type)),M.format===Gi&&it===6402&&(it=34041,M.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Oi,P=s.convert(M.type))),e.texImage2D(3553,0,it,gt.width,gt.height,0,_t,P,null);else if(M.isDataTexture)if(yt.length>0&&Dt){for(let j=0,Ct=yt.length;j<Ct;j++)rt=yt[j],e.texImage2D(3553,j,it,rt.width,rt.height,0,_t,P,rt.data);M.generateMipmaps=!1,b.__maxMipLevel=yt.length-1}else e.texImage2D(3553,0,it,gt.width,gt.height,0,_t,P,gt.data),b.__maxMipLevel=0;else if(M.isCompressedTexture){for(let j=0,Ct=yt.length;j<Ct;j++)rt=yt[j],M.format!==Ve&&M.format!==Ln?_t!==null?e.compressedTexImage2D(3553,j,it,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):e.texImage2D(3553,j,it,rt.width,rt.height,0,_t,P,rt.data);b.__maxMipLevel=yt.length-1}else if(M.isDataTexture2DArray)e.texImage3D(35866,0,it,gt.width,gt.height,gt.depth,0,_t,P,gt.data),b.__maxMipLevel=0;else if(M.isDataTexture3D)e.texImage3D(32879,0,it,gt.width,gt.height,gt.depth,0,_t,P,gt.data),b.__maxMipLevel=0;else if(yt.length>0&&Dt){for(let j=0,Ct=yt.length;j<Ct;j++)rt=yt[j],e.texImage2D(3553,j,it,_t,P,rt);M.generateMipmaps=!1,b.__maxMipLevel=yt.length-1}else e.texImage2D(3553,0,it,_t,P,gt),b.__maxMipLevel=0;C(M,Dt)&&R(Y,M,gt.width,gt.height),b.__version=M.version,M.onUpdate&&M.onUpdate(M)}function At(b,M,X){if(M.image.length!==6)return;Z(b,M),e.activeTexture(33984+X),e.bindTexture(34067,b.__webglTexture),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const Y=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),J=M.image[0]&&M.image[0].isDataTexture,gt=[];for(let j=0;j<6;j++)!Y&&!J?gt[j]=v(M.image[j],!1,!0,c):gt[j]=J?M.image[j].image:M.image[j];const Dt=gt[0],_t=g(Dt)||o,P=s.convert(M.format),it=s.convert(M.type),rt=A(M.internalFormat,P,it);ft(34067,M,_t);let yt;if(Y){for(let j=0;j<6;j++){yt=gt[j].mipmaps;for(let Ct=0;Ct<yt.length;Ct++){const Vt=yt[Ct];M.format!==Ve&&M.format!==Ln?P!==null?e.compressedTexImage2D(34069+j,Ct,rt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):e.texImage2D(34069+j,Ct,rt,Vt.width,Vt.height,0,P,it,Vt.data)}}b.__maxMipLevel=yt.length-1}else{yt=M.mipmaps;for(let j=0;j<6;j++)if(J){e.texImage2D(34069+j,0,rt,gt[j].width,gt[j].height,0,P,it,gt[j].data);for(let Ct=0;Ct<yt.length;Ct++){const se=yt[Ct].image[j].image;e.texImage2D(34069+j,Ct+1,rt,se.width,se.height,0,P,it,se.data)}}else{e.texImage2D(34069+j,0,rt,P,it,gt[j]);for(let Ct=0;Ct<yt.length;Ct++){const Vt=yt[Ct];e.texImage2D(34069+j,Ct+1,rt,P,it,Vt.image[j])}}b.__maxMipLevel=yt.length}C(M,_t)&&R(34067,M,Dt.width,Dt.height),b.__version=M.version,M.onUpdate&&M.onUpdate(M)}function V(b,M,X,Y){const J=M.texture,gt=s.convert(J.format),Dt=s.convert(J.type),_t=A(J.internalFormat,gt,Dt);Y===32879||Y===35866?e.texImage3D(Y,0,_t,M.width,M.height,M.depth,0,gt,Dt,null):e.texImage2D(Y,0,_t,M.width,M.height,0,gt,Dt,null),e.bindFramebuffer(36160,b),r.framebufferTexture2D(36160,X,Y,n.get(J).__webglTexture,0),e.bindFramebuffer(36160,null)}function kt(b,M,X){if(r.bindRenderbuffer(36161,b),M.depthBuffer&&!M.stencilBuffer){let Y=33189;if(X){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===xn?Y=36012:J.type===Ir&&(Y=33190));const gt=St(M);r.renderbufferStorageMultisample(36161,gt,Y,M.width,M.height)}else r.renderbufferStorage(36161,Y,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,b)}else if(M.depthBuffer&&M.stencilBuffer){if(X){const Y=St(M);r.renderbufferStorageMultisample(36161,Y,35056,M.width,M.height)}else r.renderbufferStorage(36161,34041,M.width,M.height);r.framebufferRenderbuffer(36160,33306,36161,b)}else{const Y=M.texture,J=s.convert(Y.format),gt=s.convert(Y.type),Dt=A(Y.internalFormat,J,gt);if(X){const _t=St(M);r.renderbufferStorageMultisample(36161,_t,Dt,M.width,M.height)}else r.renderbufferStorage(36161,Dt,M.width,M.height)}r.bindRenderbuffer(36161,null)}function ut(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const Y=n.get(M.depthTexture).__webglTexture;if(M.depthTexture.format===ci)r.framebufferTexture2D(36160,36096,3553,Y,0);else if(M.depthTexture.format===Gi)r.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function Lt(b){const M=n.get(b),X=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ut(M.__webglFramebuffer,b)}else if(X){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)e.bindFramebuffer(36160,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]=r.createRenderbuffer(),kt(M.__webglDepthbuffer[Y],b,!1)}else e.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),kt(M.__webglDepthbuffer,b,!1);e.bindFramebuffer(36160,null)}function st(b){const M=b.texture,X=n.get(b),Y=n.get(M);b.addEventListener("dispose",T),Y.__webglTexture=r.createTexture(),Y.__version=M.version,a.memory.textures++;const J=b.isWebGLCubeRenderTarget===!0,gt=b.isWebGLMultisampleRenderTarget===!0,Dt=M.isDataTexture3D||M.isDataTexture2DArray,_t=g(b)||o;if(o&&M.format===Ln&&(M.type===xn||M.type===Br)&&(M.format=Ve,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),J){X.__webglFramebuffer=[];for(let P=0;P<6;P++)X.__webglFramebuffer[P]=r.createFramebuffer()}else if(X.__webglFramebuffer=r.createFramebuffer(),gt)if(o){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,X.__webglColorRenderbuffer);const P=s.convert(M.format),it=s.convert(M.type),rt=A(M.internalFormat,P,it),yt=St(b);r.renderbufferStorageMultisample(36161,yt,rt,b.width,b.height),e.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,X.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),b.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(X.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(J){e.bindTexture(34067,Y.__webglTexture),ft(34067,M,_t);for(let P=0;P<6;P++)V(X.__webglFramebuffer[P],b,36064,34069+P);C(M,_t)&&R(34067,M,b.width,b.height),e.bindTexture(34067,null)}else{let P=3553;Dt&&(o?P=M.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),e.bindTexture(P,Y.__webglTexture),ft(P,M,_t),V(X.__webglFramebuffer,b,36064,P),C(M,_t)&&R(3553,M,b.width,b.height),e.bindTexture(3553,null)}b.depthBuffer&&Lt(b)}function Bt(b){const M=b.texture,X=g(b)||o;if(C(M,X)){const Y=b.isWebGLCubeRenderTarget?34067:3553,J=n.get(M).__webglTexture;e.bindTexture(Y,J),R(Y,M,b.width,b.height),e.bindTexture(Y,null)}}function bt(b){if(b.isWebGLMultisampleRenderTarget)if(o){const M=b.width,X=b.height;let Y=16384;b.depthBuffer&&(Y|=256),b.stencilBuffer&&(Y|=1024);const J=n.get(b);e.bindFramebuffer(36008,J.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,J.__webglFramebuffer),r.blitFramebuffer(0,0,M,X,0,0,M,X,Y,9728),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,J.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function St(b){return o&&b.isWebGLMultisampleRenderTarget?Math.min(u,b.samples):0}function Q(b){const M=a.render.frame;d.get(b)!==M&&(d.set(b,M),b.update())}let et=!1,lt=!1;function vt(b,M){b&&b.isWebGLRenderTarget&&(et===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),et=!0),b=b.texture),D(b,M)}function dt(b,M){b&&b.isWebGLCubeRenderTarget&&(lt===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),lt=!0),b=b.texture),k(b,M)}this.allocateTextureUnit=S,this.resetTextureUnits=B,this.setTexture2D=D,this.setTexture2DArray=I,this.setTexture3D=L,this.setTextureCube=k,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=bt,this.safeSetTexture2D=vt,this.safeSetTextureCube=dt}function Kp(r,t,e){const n=e.isWebGL2;function i(s){let a;if(s===ta)return 5121;if(s===Ac)return 32819;if(s===Lc)return 32820;if(s===Cc)return 33635;if(s===Sc)return 5120;if(s===Ec)return 5122;if(s===Fr)return 5123;if(s===Tc)return 5124;if(s===Ir)return 5125;if(s===xn)return 5126;if(s===Br)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Rc)return 6406;if(s===Ln)return 6407;if(s===Ve)return 6408;if(s===Pc)return 6409;if(s===Dc)return 6410;if(s===ci)return 6402;if(s===Gi)return 34041;if(s===Ic)return 6403;if(s===Nc)return 36244;if(s===Fc)return 33319;if(s===Bc)return 33320;if(s===zc)return 36248;if(s===Oc)return 36249;if(s===La||s===Ca||s===Ra||s===Pa)if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===La)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ra)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Da||s===Ia||s===Na||s===Fa)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Da)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ia)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Na)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Ba||s===za)&&(a=t.get("WEBGL_compressed_texture_etc"),a!==null)){if(s===Ba)return a.COMPRESSED_RGB8_ETC2;if(s===za)return a.COMPRESSED_RGBA8_ETC2_EAC}if(s===Uc||s===kc||s===Gc||s===Vc||s===Wc||s===qc||s===Xc||s===Yc||s===jc||s===Zc||s===Jc||s===$c||s===Qc||s===Kc||s===eh||s===nh||s===ih||s===rh||s===sh||s===ah||s===oh||s===lh||s===ch||s===hh||s===uh||s===dh||s===fh||s===ph)return a=t.get("WEBGL_compressed_texture_astc"),a!==null?s:null;if(s===th)return a=t.get("EXT_texture_compression_bptc"),a!==null?s:null;if(s===Oi)return n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class pl extends Te{constructor(t=[]){super(),this.cameras=t}}pl.prototype.isArrayCamera=!0;class Ze extends Xt{constructor(){super(),this.type="Group"}}Ze.prototype.isGroup=!0;const tm={type:"move"};class Rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tm))),c&&t.hand){a=!0;for(const x of t.hand.values()){const v=e.getJointPose(x,n);if(c.joints[x.jointName]===void 0){const p=new Ze;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[x.jointName]=p,c.add(p)}const g=c.joints[x.jointName];v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=v.radius),g.visible=v!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class em extends Pn{constructor(t,e){super();const n=this,i=t.state;let s=null,a=1,o=null,l="local-floor",c=null;const h=[],u=new Map,d=new Te;d.layers.enable(1),d.viewport=new Zt;const f=new Te;f.layers.enable(2),f.viewport=new Zt;const m=[d,f],x=new pl;x.layers.enable(1),x.layers.enable(2);let v=null,g=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let S=h[B];return S===void 0&&(S=new Rs,h[B]=S),S.getTargetRaySpace()},this.getControllerGrip=function(B){let S=h[B];return S===void 0&&(S=new Rs,h[B]=S),S.getGripSpace()},this.getHand=function(B){let S=h[B];return S===void 0&&(S=new Rs,h[B]=S),S.getHandSpace()};function p(B){const S=u.get(B.inputSource);S&&S.dispatchEvent({type:B.type,data:B.inputSource})}function C(){u.forEach(function(B,S){B.disconnect(S)}),u.clear(),v=null,g=null,i.bindXRFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){l=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){s.addEventListener("select",p),s.addEventListener("selectstart",p),s.addEventListener("selectend",p),s.addEventListener("squeeze",p),s.addEventListener("squeezestart",p),s.addEventListener("squeezeend",p),s.addEventListener("end",C),s.addEventListener("inputsourceschange",R);const S=e.getContextAttributes();S.xrCompatible!==!0&&await e.makeXRCompatible();const D={antialias:S.antialias,alpha:S.alpha,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a},I=new XRWebGLLayer(s,e,D);s.updateRenderState({baseLayer:I}),o=await s.requestReferenceSpace(l),H.setContext(s),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(B){const S=s.inputSources;for(let D=0;D<h.length;D++)u.set(S[D],h[D]);for(let D=0;D<B.removed.length;D++){const I=B.removed[D],L=u.get(I);L&&(L.dispatchEvent({type:"disconnected",data:I}),u.delete(I))}for(let D=0;D<B.added.length;D++){const I=B.added[D],L=u.get(I);L&&L.dispatchEvent({type:"connected",data:I})}}const A=new w,y=new w;function z(B,S,D){A.setFromMatrixPosition(S.matrixWorld),y.setFromMatrixPosition(D.matrixWorld);const I=A.distanceTo(y),L=S.projectionMatrix.elements,k=D.projectionMatrix.elements,E=L[14]/(L[10]-1),K=L[14]/(L[10]+1),ft=(L[9]+1)/L[5],Z=(L[9]-1)/L[5],mt=(L[8]-1)/L[0],At=(k[8]+1)/k[0],V=E*mt,kt=E*At,ut=I/(-mt+At),Lt=ut*-mt;S.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Lt),B.translateZ(ut),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const st=E+ut,Bt=K+ut,bt=V-Lt,St=kt+(I-Lt),Q=ft*K/Bt*st,et=Z*K/Bt*st;B.projectionMatrix.makePerspective(bt,St,Q,et,st,Bt)}function T(B,S){S===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(S.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.getCamera=function(B){x.near=f.near=d.near=B.near,x.far=f.far=d.far=B.far,(v!==x.near||g!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),v=x.near,g=x.far);const S=B.parent,D=x.cameras;T(x,S);for(let L=0;L<D.length;L++)T(D[L],S);B.matrixWorld.copy(x.matrixWorld),B.matrix.copy(x.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const I=B.children;for(let L=0,k=I.length;L<k;L++)I[L].updateMatrixWorld(!0);return D.length===2?z(x,d,f):x.projectionMatrix.copy(d.projectionMatrix),x};let N=null;function F(B,S){if(c=S.getViewerPose(o),c!==null){const I=c.views,L=s.renderState.baseLayer;i.bindXRFramebuffer(L.framebuffer);let k=!1;I.length!==x.cameras.length&&(x.cameras.length=0,k=!0);for(let E=0;E<I.length;E++){const K=I[E],ft=L.getViewport(K),Z=m[E];Z.matrix.fromArray(K.transform.matrix),Z.projectionMatrix.fromArray(K.projectionMatrix),Z.viewport.set(ft.x,ft.y,ft.width,ft.height),E===0&&x.matrix.copy(Z.matrix),k===!0&&x.cameras.push(Z)}}const D=s.inputSources;for(let I=0;I<h.length;I++){const L=h[I],k=D[I];L.update(k,S,o)}N&&N(B,S)}const H=new tl;H.setAnimationLoop(F),this.setAnimationLoop=function(B){N=B},this.dispose=function(){}}}function nm(r){function t(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function e(g,p,C,R){p.isMeshBasicMaterial?n(g,p):p.isMeshLambertMaterial?(n(g,p),l(g,p)):p.isMeshToonMaterial?(n(g,p),h(g,p)):p.isMeshPhongMaterial?(n(g,p),c(g,p)):p.isMeshStandardMaterial?(n(g,p),p.isMeshPhysicalMaterial?d(g,p):u(g,p)):p.isMeshMatcapMaterial?(n(g,p),f(g,p)):p.isMeshDepthMaterial?(n(g,p),m(g,p)):p.isMeshDistanceMaterial?(n(g,p),x(g,p)):p.isMeshNormalMaterial?(n(g,p),v(g,p)):p.isLineBasicMaterial?(i(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?a(g,p,C,R):p.isSpriteMaterial?o(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap);const C=r.get(p).envMap;if(C){g.envMap.value=C,g.flipEnvMap.value=C.isCubeTexture&&C._needsFlipEnvMap?-1:1,g.reflectivity.value=p.reflectivity,g.refractionRatio.value=p.refractionRatio;const y=r.get(C).__maxMipLevel;y!==void 0&&(g.maxMipLevel.value=y)}p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let R;p.map?R=p.map:p.specularMap?R=p.specularMap:p.displacementMap?R=p.displacementMap:p.normalMap?R=p.normalMap:p.bumpMap?R=p.bumpMap:p.roughnessMap?R=p.roughnessMap:p.metalnessMap?R=p.metalnessMap:p.alphaMap?R=p.alphaMap:p.emissiveMap?R=p.emissiveMap:p.clearcoatMap?R=p.clearcoatMap:p.clearcoatNormalMap?R=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(R=p.clearcoatRoughnessMap),R!==void 0&&(R.isWebGLRenderTarget&&(R=R.texture),R.matrixAutoUpdate===!0&&R.updateMatrix(),g.uvTransform.value.copy(R.matrix));let A;p.aoMap?A=p.aoMap:p.lightMap&&(A=p.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uv2Transform.value.copy(A.matrix))}function i(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function a(g,p,C,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*C,g.scale.value=R*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let A;p.map?A=p.map:p.alphaMap&&(A=p.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uvTransform.value.copy(A.matrix))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let C;p.map?C=p.map:p.alphaMap&&(C=p.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),g.uvTransform.value.copy(C.matrix))}function l(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===ue&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===ue&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===ue&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===ue&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function u(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===ue&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===ue&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),r.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p){u(g,p),g.reflectivity.value=p.reflectivity,g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&g.sheen.value.copy(p.sheen),p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ue&&g.clearcoatNormalScale.value.negate()),g.transmission.value=p.transmission,p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap)}function f(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===ue&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===ue&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function x(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function v(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===ue&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===ue&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:e}}function im(){const r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return r.style.display="block",r}function Jt(r){r=r||{};const t=r.canvas!==void 0?r.canvas:im(),e=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const f=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Zi,this.physicallyCorrectLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;const x=this;let v=!1,g=0,p=0,C=null,R=-1,A=null;const y=new Zt,z=new Zt;let T=null,N=t.width,F=t.height,H=1,B=null,S=null;const D=new Zt(0,0,N,F),I=new Zt(0,0,N,F);let L=!1;const k=new Yr;let E=!1,K=!1;const ft=new Tt,Z=new w,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function At(){return C===null?H:1}let V=e;function kt(_,G){for(let O=0;O<_.length;O++){const W=_[O],ot=t.getContext(W,G);if(ot!==null)return ot}return null}try{const _={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",Vt,!1),V===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),V=kt(G,_),V===null)throw kt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let ut,Lt,st,Bt,bt,St,Q,et,lt,vt,dt,b,M,X,Y,J,gt,Dt,_t,P,it,rt;function yt(){ut=new Ef(V),Lt=new wf(V,ut,r),ut.init(Lt),it=new Kp(V,ut,Lt),st=new $p(V,ut,Lt),Bt=new Lf,bt=new Hp,St=new Qp(V,ut,st,bt,Lt,it,Bt),Q=new Sf(x),et=new Jh(V,Lt),rt=new _f(V,ut,et,Lt),lt=new Tf(V,et,Bt,rt),vt=new Df(V,lt,et,Bt),Dt=new Pf(V),Y=new bf(bt),dt=new Op(x,Q,ut,Lt,rt,Y),b=new nm(bt),M=new Gp(bt),X=new jp(ut,Lt),gt=new yf(x,Q,st,vt,o),J=new fl(x,vt,Lt),_t=new Mf(V,ut,Bt,Lt),P=new Af(V,ut,Bt,Lt),Bt.programs=dt.programs,x.capabilities=Lt,x.extensions=ut,x.properties=bt,x.renderLists=M,x.shadowMap=J,x.state=st,x.info=Bt}yt();const j=new em(x,V);this.xr=j,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const _=ut.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=ut.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize(N,F,!1))},this.getSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),_=new nt),_.set(N,F)},this.setSize=function(_,G,O){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=_,F=G,t.width=Math.floor(_*H),t.height=Math.floor(G*H),O!==!1&&(t.style.width=_+"px",t.style.height=G+"px"),this.setViewport(0,0,_,G)},this.getDrawingBufferSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),_=new nt),_.set(N*H,F*H).floor()},this.setDrawingBufferSize=function(_,G,O){N=_,F=G,H=O,t.width=Math.floor(_*O),t.height=Math.floor(G*O),this.setViewport(0,0,_,G)},this.getCurrentViewport=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),_=new Zt),_.copy(y)},this.getViewport=function(_){return _.copy(D)},this.setViewport=function(_,G,O,W){_.isVector4?D.set(_.x,_.y,_.z,_.w):D.set(_,G,O,W),st.viewport(y.copy(D).multiplyScalar(H).floor())},this.getScissor=function(_){return _.copy(I)},this.setScissor=function(_,G,O,W){_.isVector4?I.set(_.x,_.y,_.z,_.w):I.set(_,G,O,W),st.scissor(z.copy(I).multiplyScalar(H).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(_){st.setScissorTest(L=_)},this.setOpaqueSort=function(_){B=_},this.setTransparentSort=function(_){S=_},this.getClearColor=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),_=new wt),_.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(_,G,O){let W=0;(_===void 0||_)&&(W|=16384),(G===void 0||G)&&(W|=256),(O===void 0||O)&&(W|=1024),V.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",Vt,!1),M.dispose(),X.dispose(),bt.dispose(),Q.dispose(),vt.dispose(),rt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Nn),j.removeEventListener("sessionend",yi),Ie.stop()};function Ct(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const _=Bt.autoReset,G=J.enabled,O=J.autoUpdate,W=J.needsUpdate,ot=J.type;yt(),Bt.autoReset=_,J.enabled=G,J.autoUpdate=O,J.needsUpdate=W,J.type=ot}function se(_){const G=_.target;G.removeEventListener("dispose",se),Ke(G)}function Ke(_){ie(_),bt.remove(_)}function ie(_){const G=bt.get(_).programs;G!==void 0&&G.forEach(function(O){dt.releaseProgram(O)})}function ze(_,G){_.render(function(O){x.renderBufferImmediate(O,G)})}this.renderBufferImmediate=function(_,G){rt.initAttributes();const O=bt.get(_);_.hasPositions&&!O.position&&(O.position=V.createBuffer()),_.hasNormals&&!O.normal&&(O.normal=V.createBuffer()),_.hasUvs&&!O.uv&&(O.uv=V.createBuffer()),_.hasColors&&!O.color&&(O.color=V.createBuffer());const W=G.getAttributes();_.hasPositions&&(V.bindBuffer(34962,O.position),V.bufferData(34962,_.positionArray,35048),rt.enableAttribute(W.position),V.vertexAttribPointer(W.position,3,5126,!1,0,0)),_.hasNormals&&(V.bindBuffer(34962,O.normal),V.bufferData(34962,_.normalArray,35048),rt.enableAttribute(W.normal),V.vertexAttribPointer(W.normal,3,5126,!1,0,0)),_.hasUvs&&(V.bindBuffer(34962,O.uv),V.bufferData(34962,_.uvArray,35048),rt.enableAttribute(W.uv),V.vertexAttribPointer(W.uv,2,5126,!1,0,0)),_.hasColors&&(V.bindBuffer(34962,O.color),V.bufferData(34962,_.colorArray,35048),rt.enableAttribute(W.color),V.vertexAttribPointer(W.color,3,5126,!1,0,0)),rt.disableUnusedAttributes(),V.drawArrays(4,0,_.count),_.count=0},this.renderBufferDirect=function(_,G,O,W,ot,Ot){G===null&&(G=mt);const Rt=ot.isMesh&&ot.matrixWorld.determinant()<0,Et=er(_,G,W,ot);st.setMaterial(W,Rt);let qt=O.index;const Pt=O.attributes.position;if(qt===null){if(Pt===void 0||Pt.count===0)return}else if(qt.count===0)return;let It=1;W.wireframe===!0&&(qt=lt.getWireframeAttribute(O),It=2),(W.morphTargets||W.morphNormals)&&Dt.update(ot,O,W,Et),rt.setup(ot,W,Et,O,qt);let Mt,Gt=_t;qt!==null&&(Mt=et.get(qt),Gt=P,Gt.setIndex(Mt));const Ce=qt!==null?qt.count:Pt.count,ce=O.drawRange.start*It,tn=O.drawRange.count*It,ae=Ot!==null?Ot.start*It:0,We=Ot!==null?Ot.count*It:1/0,ee=Math.max(ce,ae),On=Math.min(Ce,ce+tn,ae+We)-1,pe=Math.max(0,On-ee+1);if(pe!==0){if(ot.isMesh)W.wireframe===!0?(st.setLineWidth(W.wireframeLinewidth*At()),Gt.setMode(1)):Gt.setMode(4);else if(ot.isLine){let Se=W.linewidth;Se===void 0&&(Se=1),st.setLineWidth(Se*At()),ot.isLineSegments?Gt.setMode(1):ot.isLineLoop?Gt.setMode(2):Gt.setMode(3)}else ot.isPoints?Gt.setMode(0):ot.isSprite&&Gt.setMode(4);if(ot.isInstancedMesh)Gt.renderInstances(ee,pe,ot.count);else if(O.isInstancedBufferGeometry){const Se=Math.min(O.instanceCount,O._maxInstanceCount);Gt.renderInstances(ee,pe,Se)}else Gt.render(ee,pe)}},this.compile=function(_,G){d=X.get(_),d.init(),_.traverseVisible(function(O){O.isLight&&O.layers.test(G.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights(),_.traverse(function(O){const W=O.material;if(W)if(Array.isArray(W))for(let ot=0;ot<W.length;ot++){const Ot=W[ot];_i(Ot,_,O)}else _i(W,_,O)})};let Ae=null;function Qr(_){Ae&&Ae(_)}function Nn(){Ie.stop()}function yi(){Ie.start()}const Ie=new tl;Ie.setAnimationLoop(Qr),typeof window<"u"&&Ie.setContext(window),this.setAnimationLoop=function(_){Ae=_,j.setAnimationLoop(_),_===null?Ie.stop():Ie.start()},j.addEventListener("sessionstart",Nn),j.addEventListener("sessionend",yi),this.render=function(_,G){let O,W;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),O=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),W=arguments[3]),G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;_.autoUpdate===!0&&_.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(G=j.getCamera(G)),_.isScene===!0&&_.onBeforeRender(x,_,G,O||C),d=X.get(_,m.length),d.init(),m.push(d),ft.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),k.setFromProjectionMatrix(ft),K=this.localClippingEnabled,E=Y.init(this.clippingPlanes,K,G),u=M.get(_,f.length),u.init(),f.push(u),Fn(_,G,0,x.sortObjects),u.finish(),x.sortObjects===!0&&u.sort(B,S),E===!0&&Y.beginShadows();const ot=d.state.shadowsArray;J.render(ot,_,G),d.setupLights(),d.setupLightsView(G),E===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),O!==void 0&&this.setRenderTarget(O),gt.render(u,_,G,W);const Ot=u.opaque,Rt=u.transparent;Ot.length>0&&Bn(Ot,_,G),Rt.length>0&&Bn(Rt,_,G),C!==null&&(St.updateRenderTargetMipmap(C),St.updateMultisampleRenderTarget(C)),_.isScene===!0&&_.onAfterRender(x,_,G),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1),rt.resetDefaultState(),R=-1,A=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Fn(_,G,O,W){if(_.visible===!1)return;if(_.layers.test(G.layers)){if(_.isGroup)O=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(G);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||k.intersectsSprite(_)){W&&Z.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ft);const Rt=vt.update(_),Et=_.material;Et.visible&&u.push(_,Rt,Et,O,Z.z,null)}}else if(_.isImmediateRenderObject)W&&Z.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ft),u.push(_,null,_.material,O,Z.z,null);else if((_.isMesh||_.isLine||_.isPoints)&&(_.isSkinnedMesh&&_.skeleton.frame!==Bt.render.frame&&(_.skeleton.update(),_.skeleton.frame=Bt.render.frame),!_.frustumCulled||k.intersectsObject(_))){W&&Z.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ft);const Rt=vt.update(_),Et=_.material;if(Array.isArray(Et)){const qt=Rt.groups;for(let Pt=0,It=qt.length;Pt<It;Pt++){const Mt=qt[Pt],Gt=Et[Mt.materialIndex];Gt&&Gt.visible&&u.push(_,Rt,Gt,O,Z.z,Mt)}}else Et.visible&&u.push(_,Rt,Et,O,Z.z,null)}}const Ot=_.children;for(let Rt=0,Et=Ot.length;Rt<Et;Rt++)Fn(Ot[Rt],G,O,W)}function Bn(_,G,O){const W=G.isScene===!0?G.overrideMaterial:null;for(let ot=0,Ot=_.length;ot<Ot;ot++){const Rt=_[ot],Et=Rt.object,qt=Rt.geometry,Pt=W===null?Rt.material:W,It=Rt.group;if(O.isArrayCamera){const Mt=O.cameras;for(let Gt=0,Ce=Mt.length;Gt<Ce;Gt++){const ce=Mt[Gt];Et.layers.test(ce.layers)&&(st.viewport(y.copy(ce.viewport)),d.setupLightsView(ce),Ki(Et,G,ce,qt,Pt,It))}}else Ki(Et,G,O,qt,Pt,It)}}function Ki(_,G,O,W,ot,Ot){if(_.onBeforeRender(x,G,O,W,ot,Ot),_.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),_.isImmediateRenderObject){const Rt=er(O,G,ot,_);st.setMaterial(ot),rt.reset(),ze(_,Rt)}else x.renderBufferDirect(O,G,W,ot,_,Ot);_.onAfterRender(x,G,O,W,ot,Ot)}function _i(_,G,O){G.isScene!==!0&&(G=mt);const W=bt.get(_),ot=d.state.lights,Ot=d.state.shadowsArray,Rt=ot.state.version,Et=dt.getParameters(_,ot.state,Ot,G,O),qt=dt.getProgramCacheKey(Et);let Pt=W.programs;W.environment=_.isMeshStandardMaterial?G.environment:null,W.fog=G.fog,W.envMap=Q.get(_.envMap||W.environment),Pt===void 0&&(_.addEventListener("dispose",se),Pt=new Map,W.programs=Pt);let It=Pt.get(qt);if(It!==void 0){if(W.currentProgram===It&&W.lightsStateVersion===Rt)return tr(_,Et),It}else Et.uniforms=dt.getUniforms(_),_.onBuild(Et,x),_.onBeforeCompile(Et,x),It=dt.acquireProgram(Et,qt),Pt.set(qt,It),W.uniforms=Et.uniforms;const Mt=W.uniforms;(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Mt.clippingPlanes=Y.uniform),tr(_,Et),W.needsLights=zn(_),W.lightsStateVersion=Rt,W.needsLights&&(Mt.ambientLightColor.value=ot.state.ambient,Mt.lightProbe.value=ot.state.probe,Mt.directionalLights.value=ot.state.directional,Mt.directionalLightShadows.value=ot.state.directionalShadow,Mt.spotLights.value=ot.state.spot,Mt.spotLightShadows.value=ot.state.spotShadow,Mt.rectAreaLights.value=ot.state.rectArea,Mt.ltc_1.value=ot.state.rectAreaLTC1,Mt.ltc_2.value=ot.state.rectAreaLTC2,Mt.pointLights.value=ot.state.point,Mt.pointLightShadows.value=ot.state.pointShadow,Mt.hemisphereLights.value=ot.state.hemi,Mt.directionalShadowMap.value=ot.state.directionalShadowMap,Mt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Mt.spotShadowMap.value=ot.state.spotShadowMap,Mt.spotShadowMatrix.value=ot.state.spotShadowMatrix,Mt.pointShadowMap.value=ot.state.pointShadowMap,Mt.pointShadowMatrix.value=ot.state.pointShadowMatrix);const Gt=It.getUniforms(),Ce=vn.seqWithValue(Gt.seq,Mt);return W.currentProgram=It,W.uniformsList=Ce,It}function tr(_,G){const O=bt.get(_);O.outputEncoding=G.outputEncoding,O.instancing=G.instancing,O.numClippingPlanes=G.numClippingPlanes,O.numIntersection=G.numClipIntersection,O.vertexAlphas=G.vertexAlphas}function er(_,G,O,W){G.isScene!==!0&&(G=mt),St.resetTextureUnits();const ot=G.fog,Ot=O.isMeshStandardMaterial?G.environment:null,Rt=C===null?x.outputEncoding:C.texture.encoding,Et=Q.get(O.envMap||Ot),qt=O.vertexColors===!0&&W.geometry&&W.geometry.attributes.color&&W.geometry.attributes.color.itemSize===4,Pt=bt.get(O),It=d.state.lights;if(E===!0&&(K===!0||_!==A)){const ee=_===A&&O.id===R;Y.setState(O,_,ee)}let Mt=!1;O.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==It.state.version||Pt.outputEncoding!==Rt||W.isInstancedMesh&&Pt.instancing===!1||!W.isInstancedMesh&&Pt.instancing===!0||Pt.envMap!==Et||O.fog&&Pt.fog!==ot||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Y.numPlanes||Pt.numIntersection!==Y.numIntersection)||Pt.vertexAlphas!==qt)&&(Mt=!0):(Mt=!0,Pt.__version=O.version);let Gt=Pt.currentProgram;Mt===!0&&(Gt=_i(O,G,W));let Ce=!1,ce=!1,tn=!1;const ae=Gt.getUniforms(),We=Pt.uniforms;if(st.useProgram(Gt.program)&&(Ce=!0,ce=!0,tn=!0),O.id!==R&&(R=O.id,ce=!0),Ce||A!==_){if(ae.setValue(V,"projectionMatrix",_.projectionMatrix),Lt.logarithmicDepthBuffer&&ae.setValue(V,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),A!==_&&(A=_,ce=!0,tn=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const ee=ae.map.cameraPosition;ee!==void 0&&ee.setValue(V,Z.setFromMatrixPosition(_.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ae.setValue(V,"isOrthographic",_.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||O.skinning)&&ae.setValue(V,"viewMatrix",_.matrixWorldInverse)}if(O.skinning){ae.setOptional(V,W,"bindMatrix"),ae.setOptional(V,W,"bindMatrixInverse");const ee=W.skeleton;if(ee){const On=ee.bones;if(Lt.floatVertexTextures){if(ee.boneTexture===null){let pe=Math.sqrt(On.length*4);pe=Rh(pe),pe=Math.max(pe,4);const Se=new Float32Array(pe*pe*4);Se.set(ee.boneMatrices);const Hn=new Ko(Se,pe,pe,Ve,xn);ee.boneMatrices=Se,ee.boneTexture=Hn,ee.boneTextureSize=pe}ae.setValue(V,"boneTexture",ee.boneTexture,St),ae.setValue(V,"boneTextureSize",ee.boneTextureSize)}else ae.setOptional(V,ee,"boneMatrices")}}return(ce||Pt.receiveShadow!==W.receiveShadow)&&(Pt.receiveShadow=W.receiveShadow,ae.setValue(V,"receiveShadow",W.receiveShadow)),ce&&(ae.setValue(V,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&Le(We,tn),ot&&O.fog&&b.refreshFogUniforms(We,ot),b.refreshMaterialUniforms(We,O,H,F),vn.upload(V,Pt.uniformsList,We,St)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(vn.upload(V,Pt.uniformsList,We,St),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ae.setValue(V,"center",W.center),ae.setValue(V,"modelViewMatrix",W.modelViewMatrix),ae.setValue(V,"normalMatrix",W.normalMatrix),ae.setValue(V,"modelMatrix",W.matrixWorld),Gt}function Le(_,G){_.ambientLightColor.needsUpdate=G,_.lightProbe.needsUpdate=G,_.directionalLights.needsUpdate=G,_.directionalLightShadows.needsUpdate=G,_.pointLights.needsUpdate=G,_.pointLightShadows.needsUpdate=G,_.spotLights.needsUpdate=G,_.spotLightShadows.needsUpdate=G,_.rectAreaLights.needsUpdate=G,_.hemisphereLights.needsUpdate=G}function zn(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return C},this.setRenderTarget=function(_,G=0,O=0){C=_,g=G,p=O,_&&bt.get(_).__webglFramebuffer===void 0&&St.setupRenderTarget(_);let W=null,ot=!1,Ot=!1;if(_){const Rt=_.texture;(Rt.isDataTexture3D||Rt.isDataTexture2DArray)&&(Ot=!0);const Et=bt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(W=Et[G],ot=!0):_.isWebGLMultisampleRenderTarget?W=bt.get(_).__webglMultisampledFramebuffer:W=Et,y.copy(_.viewport),z.copy(_.scissor),T=_.scissorTest}else y.copy(D).multiplyScalar(H).floor(),z.copy(I).multiplyScalar(H).floor(),T=L;if(st.bindFramebuffer(36160,W),st.viewport(y),st.scissor(z),st.setScissorTest(T),ot){const Rt=bt.get(_.texture);V.framebufferTexture2D(36160,36064,34069+G,Rt.__webglTexture,O)}else if(Ot){const Rt=bt.get(_.texture),Et=G||0;V.framebufferTextureLayer(36160,36064,Rt.__webglTexture,O||0,Et)}},this.readRenderTargetPixels=function(_,G,O,W,ot,Ot,Rt){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=bt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt]),Et){st.bindFramebuffer(36160,Et);try{const qt=_.texture,Pt=qt.format,It=qt.type;if(Pt!==Ve&&it.convert(Pt)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Mt=It===Br&&(ut.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&ut.has("EXT_color_buffer_float"));if(It!==ta&&it.convert(It)!==V.getParameter(35738)&&!(It===xn&&(Lt.isWebGL2||ut.has("OES_texture_float")||ut.has("WEBGL_color_buffer_float")))&&!Mt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V.checkFramebufferStatus(36160)===36053?G>=0&&G<=_.width-W&&O>=0&&O<=_.height-ot&&V.readPixels(G,O,W,ot,it.convert(Pt),it.convert(It),Ot):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const qt=C!==null?bt.get(C).__webglFramebuffer:null;st.bindFramebuffer(36160,qt)}}},this.copyFramebufferToTexture=function(_,G,O=0){const W=Math.pow(2,-O),ot=Math.floor(G.image.width*W),Ot=Math.floor(G.image.height*W),Rt=it.convert(G.format);St.setTexture2D(G,0),V.copyTexImage2D(3553,O,Rt,_.x,_.y,ot,Ot,0),st.unbindTexture()},this.copyTextureToTexture=function(_,G,O,W=0){const ot=G.image.width,Ot=G.image.height,Rt=it.convert(O.format),Et=it.convert(O.type);St.setTexture2D(O,0),V.pixelStorei(37440,O.flipY),V.pixelStorei(37441,O.premultiplyAlpha),V.pixelStorei(3317,O.unpackAlignment),G.isDataTexture?V.texSubImage2D(3553,W,_.x,_.y,ot,Ot,Rt,Et,G.image.data):G.isCompressedTexture?V.compressedTexSubImage2D(3553,W,_.x,_.y,G.mipmaps[0].width,G.mipmaps[0].height,Rt,G.mipmaps[0].data):V.texSubImage2D(3553,W,_.x,_.y,Rt,Et,G.image),W===0&&O.generateMipmaps&&V.generateMipmap(3553),st.unbindTexture()},this.copyTextureToTexture3D=function(_,G,O,W,ot=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:Ot,height:Rt,data:Et}=O.image,qt=it.convert(W.format),Pt=it.convert(W.type);let It;if(W.isDataTexture3D)St.setTexture3D(W,0),It=32879;else if(W.isDataTexture2DArray)St.setTexture2DArray(W,0),It=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,W.flipY),V.pixelStorei(37441,W.premultiplyAlpha),V.pixelStorei(3317,W.unpackAlignment);const Mt=V.getParameter(3314),Gt=V.getParameter(32878),Ce=V.getParameter(3316),ce=V.getParameter(3315),tn=V.getParameter(32877);V.pixelStorei(3314,Ot),V.pixelStorei(32878,Rt),V.pixelStorei(3316,_.min.x),V.pixelStorei(3315,_.min.y),V.pixelStorei(32877,_.min.z),V.texSubImage3D(It,ot,G.x,G.y,G.z,_.max.x-_.min.x+1,_.max.y-_.min.y+1,_.max.z-_.min.z+1,qt,Pt,Et),V.pixelStorei(3314,Mt),V.pixelStorei(32878,Gt),V.pixelStorei(3316,Ce),V.pixelStorei(3315,ce),V.pixelStorei(32877,tn),ot===0&&W.generateMipmaps&&V.generateMipmap(It),st.unbindTexture()},this.initTexture=function(_){St.setTexture2D(_,0),st.unbindTexture()},this.resetState=function(){g=0,p=0,C=null,st.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class rm extends Jt{}rm.prototype.isWebGL1Renderer=!0;class sa extends Xt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.background!==null&&(e.object.background=this.background.toJSON(t)),this.environment!==null&&(e.object.environment=this.environment.toJSON(t)),this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}sa.prototype.isScene=!0;class In{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Je(),this.onUploadCallback=function(){}}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new In(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}In.prototype.isInterleavedBuffer=!0;const oe=new w;class qi{constructor(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)oe.x=this.getX(e),oe.y=this.getY(e),oe.z=this.getZ(e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.x=this.getX(e),oe.y=this.getY(e),oe.z=this.getZ(e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.x=this.getX(e),oe.y=this.getY(e),oe.z=this.getZ(e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new de(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}qi.prototype.isInterleavedBufferAttribute=!0;class ml extends fe{constructor(t){super(),this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}ml.prototype.isSpriteMaterial=!0;let ei;const Li=new w,ni=new w,ii=new w,ri=new nt,Ci=new nt,gl=new Tt,_r=new w,Ri=new w,Mr=new w,uo=new nt,Ps=new nt,fo=new nt;class sm extends Xt{constructor(t){if(super(),this.type="Sprite",ei===void 0){ei=new jt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new In(e,5);ei.setIndex([0,1,2,0,2,3]),ei.setAttribute("position",new qi(n,3,0,!1)),ei.setAttribute("uv",new qi(n,2,3,!1))}this.geometry=ei,this.material=t!==void 0?t:new ml,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ni.setFromMatrixScale(this.matrixWorld),gl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ii.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ni.multiplyScalar(-ii.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;wr(_r.set(-.5,-.5,0),ii,a,ni,i,s),wr(Ri.set(.5,-.5,0),ii,a,ni,i,s),wr(Mr.set(.5,.5,0),ii,a,ni,i,s),uo.set(0,0),Ps.set(1,0),fo.set(1,1);let o=t.ray.intersectTriangle(_r,Ri,Mr,!1,Li);if(o===null&&(wr(Ri.set(-.5,.5,0),ii,a,ni,i,s),Ps.set(0,1),o=t.ray.intersectTriangle(_r,Mr,Ri,!1,Li),o===null))return;const l=t.ray.origin.distanceTo(Li);l<t.near||l>t.far||e.push({distance:l,point:Li.clone(),uv:le.getUV(Li,_r,Ri,Mr,uo,Ps,fo,new nt),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}sm.prototype.isSprite=!0;function wr(r,t,e,n,i,s){ri.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ci.x=s*ri.x-i*ri.y,Ci.y=i*ri.x+s*ri.y):Ci.copy(ri),r.copy(t),r.x+=Ci.x,r.y+=Ci.y,r.applyMatrix4(gl)}const po=new w,mo=new Zt,go=new Zt,am=new w,xo=new Tt;class xl extends Wt{constructor(t,e){super(t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Tt,this.bindMatrixInverse=new Tt}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Zt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;mo.fromBufferAttribute(i.attributes.skinIndex,t),go.fromBufferAttribute(i.attributes.skinWeight,t),po.fromBufferAttribute(i.attributes.position,t).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=go.getComponent(s);if(a!==0){const o=mo.getComponent(s);xo.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(am.copy(po).applyMatrix4(xo),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}xl.prototype.isSkinnedMesh=!0;class om extends Xt{constructor(){super(),this.type="Bone"}}om.prototype.isBone=!0;const vo=new Tt,yo=new Tt,br=[],Pi=new Wt;class lm extends Wt{constructor(t,e,n){super(t,e),this.instanceMatrix=new de(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Pi.geometry=this.geometry,Pi.material=this.material,Pi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,vo),yo.multiplyMatrices(n,vo),Pi.matrixWorld=yo,Pi.raycast(t,br);for(let a=0,o=br.length;a<o;a++){const l=br[a];l.instanceId=s,l.object=this,e.push(l)}br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new de(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}lm.prototype.isInstancedMesh=!0;class Ji extends fe{constructor(t){super(),this.type="LineBasicMaterial",this.color=new wt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this}}Ji.prototype.isLineBasicMaterial=!0;const _o=new w,Mo=new w,wo=new Tt,Ds=new Dn,Sr=new pi;class aa extends Xt{constructor(t=new jt,e=new Ji){super(),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)_o.fromBufferAttribute(e,i-1),Mo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=_o.distanceTo(Mo);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(i),Sr.radius+=s,t.ray.intersectsSphere(Sr)===!1)return;wo.copy(i).invert(),Ds.copy(t.ray).applyMatrix4(wo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new w,h=new w,u=new w,d=new w,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const m=n.index,v=n.attributes.position;if(m!==null){const g=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let C=g,R=p-1;C<R;C+=f){const A=m.getX(C),y=m.getX(C+1);if(c.fromBufferAttribute(v,A),h.fromBufferAttribute(v,y),Ds.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),p=Math.min(v.count,a.start+a.count);for(let C=g,R=p-1;C<R;C+=f){if(c.fromBufferAttribute(v,C),h.fromBufferAttribute(v,C+1),Ds.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const y=t.ray.origin.distanceTo(d);y<t.near||y>t.far||e.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}aa.prototype.isLine=!0;const bo=new w,So=new w;class oa extends aa{constructor(t,e){super(t,e),this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)bo.fromBufferAttribute(e,i),So.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bo.distanceTo(So);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}oa.prototype.isLineSegments=!0;class cm extends aa{constructor(t,e){super(t,e),this.type="LineLoop"}}cm.prototype.isLineLoop=!0;class vl extends fe{constructor(t){super(),this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this}}vl.prototype.isPointsMaterial=!0;const Eo=new Tt,Vs=new Dn,Er=new pi,Tr=new w;class hm extends Xt{constructor(t=new jt,e=new vl){super(),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(i),Er.radius+=s,t.ray.intersectsSphere(Er)===!1)return;Eo.copy(i).invert(),Vs.copy(t.ray).applyMatrix4(Eo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,x=f;m<x;m++){const v=c.getX(m);Tr.fromBufferAttribute(u,v),To(Tr,v,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)Tr.fromBufferAttribute(u,m),To(Tr,m,l,i,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}hm.prototype.isPoints=!0;function To(r,t,e,n,i,s,a){const o=Vs.distanceSqToPoint(r);if(o<e){const l=new w;Vs.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class um extends ve{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.format=o!==void 0?o:Ln,this.minFilter=a!==void 0?a:Ne,this.magFilter=s!==void 0?s:Ne,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}um.prototype.isVideoTexture=!0;class dm extends ve{constructor(t,e,n,i,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,s,u,d),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}dm.prototype.isCompressedTexture=!0;class yl extends ve{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.needsUpdate=!0}}yl.prototype.isCanvasTexture=!0;class fm extends ve{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:ci,h!==ci&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ci&&(n=Fr),n===void 0&&h===Gi&&(n=Oi),super(null,i,s,a,o,l,h,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:Me,this.minFilter=l!==void 0?l:Me,this.flipY=!1,this.generateMipmaps=!1}}fm.prototype.isDepthTexture=!0;class Nr extends jt{constructor(t=1,e=1,n=1,i=8,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const x=[],v=n/2;let g=0;p(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function p(){const R=new w,A=new w;let y=0;const z=(e-t)/n;for(let T=0;T<=s;T++){const N=[],F=T/s,H=F*(e-t)+t;for(let B=0;B<=i;B++){const S=B/i,D=S*l+o,I=Math.sin(D),L=Math.cos(D);A.x=H*I,A.y=-F*n+v,A.z=H*L,u.push(A.x,A.y,A.z),R.set(I,z,L).normalize(),d.push(R.x,R.y,R.z),f.push(S,1-F),N.push(m++)}x.push(N)}for(let T=0;T<i;T++)for(let N=0;N<s;N++){const F=x[N][T],H=x[N+1][T],B=x[N+1][T+1],S=x[N][T+1];h.push(F,H,S),h.push(H,B,S),y+=6}c.addGroup(g,y,0),g+=y}function C(R){const A=m,y=new nt,z=new w;let T=0;const N=R===!0?t:e,F=R===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,v*F,0),d.push(0,F,0),f.push(.5,.5),m++;const H=m;for(let B=0;B<=i;B++){const D=B/i*l+o,I=Math.cos(D),L=Math.sin(D);z.x=N*L,z.y=v*F,z.z=N*I,u.push(z.x,z.y,z.z),d.push(0,F,0),y.x=I*.5+.5,y.y=L*.5*F+.5,f.push(y.x,y.y),m++}for(let B=0;B<i;B++){const S=A+B,D=H+B;R===!0?h.push(D,D+1,S):h.push(D+1,D,S),T+=3}c.addGroup(g,T,R===!0?1:2),g+=T}}}class pm extends Nr{constructor(t=1,e=1,n=8,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}}const mm={triangulate:function(r,t,e){e=e||2;const n=t&&t.length,i=n?t[0]*e:r.length;let s=_l(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(n&&(s=_m(r,t,s,e)),r.length>80*e){o=c=r[0],l=h=r[1];for(let m=e;m<i;m+=e)u=r[m],d=r[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?1/f:0}return Xi(s,a,e,o,l,f),a}};function _l(r,t,e,n,i){let s,a;if(i===Pm(r,t,e,n)>0)for(s=t;s<e;s+=n)a=Ao(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=Ao(s,r[s],r[s+1],a);return a&&jr(a,a.next)&&(ji(a),a=a.next),a}function _n(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(jr(e,e.next)||re(e.prev,e,e.next)===0)){if(ji(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xi(r,t,e,n,i,s,a){if(!r)return;!a&&s&&Em(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?xm(r,n,i,s):gm(r)){t.push(l.i/e),t.push(r.i/e),t.push(c.i/e),ji(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=vm(_n(r),t,e),Xi(r,t,e,n,i,s,2)):a===2&&ym(r,t,e,n,i,s):Xi(_n(r),t,e,n,i,s,1);break}}}function gm(r){const t=r.prev,e=r,n=r.next;if(re(t,e,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(li(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&re(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function xm(r,t,e,n){const i=r.prev,s=r,a=r.next;if(re(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,h=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,u=Ws(o,l,t,e,n),d=Ws(c,h,t,e,n);let f=r.prevZ,m=r.nextZ;for(;f&&f.z>=u&&m&&m.z<=d;){if(f!==r.prev&&f!==r.next&&li(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&re(f.prev,f,f.next)>=0||(f=f.prevZ,m!==r.prev&&m!==r.next&&li(i.x,i.y,s.x,s.y,a.x,a.y,m.x,m.y)&&re(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=u;){if(f!==r.prev&&f!==r.next&&li(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&re(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=d;){if(m!==r.prev&&m!==r.next&&li(i.x,i.y,s.x,s.y,a.x,a.y,m.x,m.y)&&re(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function vm(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!jr(i,s)&&Ml(i,n,n.next,s)&&Yi(i,s)&&Yi(s,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(s.i/e),ji(n),ji(n.next),n=r=s),n=n.next}while(n!==r);return _n(n)}function ym(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Lm(a,o)){let l=wl(a,o);a=_n(a,a.next),l=_n(l,l.next),Xi(a,t,e,n,i,s),Xi(l,t,e,n,i,s);return}o=o.next}a=a.next}while(a!==r)}function _m(r,t,e,n){const i=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=_l(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Am(c));for(i.sort(Mm),s=0;s<i.length;s++)wm(i[s],e),e=_n(e,e.next);return e}function Mm(r,t){return r.x-t.x}function wm(r,t){if(t=bm(r,t),t){const e=wl(t,r);_n(t,t.next),_n(e,e.next)}}function bm(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,a;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s){if(s=d,d===n){if(i===e.y)return e;if(i===e.next.y)return e.next}a=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!a)return null;if(n===s)return a;const o=a,l=a.x,c=a.y;let h=1/0,u;e=a;do n>=e.x&&e.x>=l&&n!==e.x&&li(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)&&(u=Math.abs(i-e.y)/(n-e.x),Yi(e,r)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Sm(a,e)))&&(a=e,h=u)),e=e.next;while(e!==o);return a}function Sm(r,t){return re(r.prev,r,t.prev)<0&&re(t.next,r,r.next)<0}function Em(r,t,e,n){let i=r;do i.z===null&&(i.z=Ws(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Tm(i)}function Tm(r){let t,e,n,i,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(a>1);return r}function Ws(r,t,e,n,i){return r=32767*(r-e)*i,t=32767*(t-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Am(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function li(r,t,e,n,i,s,a,o){return(i-a)*(t-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(e-a)*(t-o)>=0&&(e-a)*(s-o)-(i-a)*(n-o)>=0}function Lm(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Cm(r,t)&&(Yi(r,t)&&Yi(t,r)&&Rm(r,t)&&(re(r.prev,r,t.prev)||re(r,t.prev,t))||jr(r,t)&&re(r.prev,r,r.next)>0&&re(t.prev,t,t.next)>0)}function re(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function jr(r,t){return r.x===t.x&&r.y===t.y}function Ml(r,t,e,n){const i=Lr(re(r,t,e)),s=Lr(re(r,t,n)),a=Lr(re(e,n,r)),o=Lr(re(e,n,t));return!!(i!==s&&a!==o||i===0&&Ar(r,e,t)||s===0&&Ar(r,n,t)||a===0&&Ar(e,r,n)||o===0&&Ar(e,t,n))}function Ar(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Lr(r){return r>0?1:r<0?-1:0}function Cm(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Ml(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Yi(r,t){return re(r.prev,r,r.next)<0?re(r,t,r.next)>=0&&re(r,r.prev,t)>=0:re(r,t,r.prev)<0||re(r,r.next,t)<0}function Rm(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function wl(r,t){const e=new qs(r.i,r.x,r.y),n=new qs(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Ao(r,t,e,n){const i=new qs(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ji(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function qs(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Pm(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class yn{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return yn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Lo(t),Co(n,t);let a=t.length;e.forEach(Lo);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Co(n,e[l]);const o=mm.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Lo(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Co(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class $i extends jt{constructor(t,e){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Qt(i,3)),this.setAttribute("uv",new Qt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1;let u=e.depth!==void 0?e.depth:100,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:6,m=e.bevelSize!==void 0?e.bevelSize:f-2,x=e.bevelOffset!==void 0?e.bevelOffset:0,v=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,p=e.UVGenerator!==void 0?e.UVGenerator:Dm;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=e.amount);let C,R=!1,A,y,z,T;g&&(C=g.getSpacedPoints(h),R=!0,d=!1,A=g.computeFrenetFrames(h,!1),y=new w,z=new w,T=new w),d||(v=0,f=0,m=0,x=0);const N=o.extractPoints(c);let F=N.shape;const H=N.holes;if(!yn.isClockWise(F)){F=F.reverse();for(let Q=0,et=H.length;Q<et;Q++){const lt=H[Q];yn.isClockWise(lt)&&(H[Q]=lt.reverse())}}const S=yn.triangulateShape(F,H),D=F;for(let Q=0,et=H.length;Q<et;Q++){const lt=H[Q];F=F.concat(lt)}function I(Q,et,lt){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().multiplyScalar(lt).add(Q)}const L=F.length,k=S.length;function E(Q,et,lt){let vt,dt,b;const M=Q.x-et.x,X=Q.y-et.y,Y=lt.x-Q.x,J=lt.y-Q.y,gt=M*M+X*X,Dt=M*J-X*Y;if(Math.abs(Dt)>Number.EPSILON){const _t=Math.sqrt(gt),P=Math.sqrt(Y*Y+J*J),it=et.x-X/_t,rt=et.y+M/_t,yt=lt.x-J/P,j=lt.y+Y/P,Ct=((yt-it)*J-(j-rt)*Y)/(M*J-X*Y);vt=it+M*Ct-Q.x,dt=rt+X*Ct-Q.y;const Vt=vt*vt+dt*dt;if(Vt<=2)return new nt(vt,dt);b=Math.sqrt(Vt/2)}else{let _t=!1;M>Number.EPSILON?Y>Number.EPSILON&&(_t=!0):M<-Number.EPSILON?Y<-Number.EPSILON&&(_t=!0):Math.sign(X)===Math.sign(J)&&(_t=!0),_t?(vt=-X,dt=M,b=Math.sqrt(gt)):(vt=M,dt=X,b=Math.sqrt(gt/2))}return new nt(vt/b,dt/b)}const K=[];for(let Q=0,et=D.length,lt=et-1,vt=Q+1;Q<et;Q++,lt++,vt++)lt===et&&(lt=0),vt===et&&(vt=0),K[Q]=E(D[Q],D[lt],D[vt]);const ft=[];let Z,mt=K.concat();for(let Q=0,et=H.length;Q<et;Q++){const lt=H[Q];Z=[];for(let vt=0,dt=lt.length,b=dt-1,M=vt+1;vt<dt;vt++,b++,M++)b===dt&&(b=0),M===dt&&(M=0),Z[vt]=E(lt[vt],lt[b],lt[M]);ft.push(Z),mt=mt.concat(Z)}for(let Q=0;Q<v;Q++){const et=Q/v,lt=f*Math.cos(et*Math.PI/2),vt=m*Math.sin(et*Math.PI/2)+x;for(let dt=0,b=D.length;dt<b;dt++){const M=I(D[dt],K[dt],vt);Lt(M.x,M.y,-lt)}for(let dt=0,b=H.length;dt<b;dt++){const M=H[dt];Z=ft[dt];for(let X=0,Y=M.length;X<Y;X++){const J=I(M[X],Z[X],vt);Lt(J.x,J.y,-lt)}}}const At=m+x;for(let Q=0;Q<L;Q++){const et=d?I(F[Q],mt[Q],At):F[Q];R?(z.copy(A.normals[0]).multiplyScalar(et.x),y.copy(A.binormals[0]).multiplyScalar(et.y),T.copy(C[0]).add(z).add(y),Lt(T.x,T.y,T.z)):Lt(et.x,et.y,0)}for(let Q=1;Q<=h;Q++)for(let et=0;et<L;et++){const lt=d?I(F[et],mt[et],At):F[et];R?(z.copy(A.normals[Q]).multiplyScalar(lt.x),y.copy(A.binormals[Q]).multiplyScalar(lt.y),T.copy(C[Q]).add(z).add(y),Lt(T.x,T.y,T.z)):Lt(lt.x,lt.y,u/h*Q)}for(let Q=v-1;Q>=0;Q--){const et=Q/v,lt=f*Math.cos(et*Math.PI/2),vt=m*Math.sin(et*Math.PI/2)+x;for(let dt=0,b=D.length;dt<b;dt++){const M=I(D[dt],K[dt],vt);Lt(M.x,M.y,u+lt)}for(let dt=0,b=H.length;dt<b;dt++){const M=H[dt];Z=ft[dt];for(let X=0,Y=M.length;X<Y;X++){const J=I(M[X],Z[X],vt);R?Lt(J.x,J.y+C[h-1].y,C[h-1].x+lt):Lt(J.x,J.y,u+lt)}}}V(),kt();function V(){const Q=i.length/3;if(d){let et=0,lt=L*et;for(let vt=0;vt<k;vt++){const dt=S[vt];st(dt[2]+lt,dt[1]+lt,dt[0]+lt)}et=h+v*2,lt=L*et;for(let vt=0;vt<k;vt++){const dt=S[vt];st(dt[0]+lt,dt[1]+lt,dt[2]+lt)}}else{for(let et=0;et<k;et++){const lt=S[et];st(lt[2],lt[1],lt[0])}for(let et=0;et<k;et++){const lt=S[et];st(lt[0]+L*h,lt[1]+L*h,lt[2]+L*h)}}n.addGroup(Q,i.length/3-Q,0)}function kt(){const Q=i.length/3;let et=0;ut(D,et),et+=D.length;for(let lt=0,vt=H.length;lt<vt;lt++){const dt=H[lt];ut(dt,et),et+=dt.length}n.addGroup(Q,i.length/3-Q,1)}function ut(Q,et){let lt=Q.length;for(;--lt>=0;){const vt=lt;let dt=lt-1;dt<0&&(dt=Q.length-1);for(let b=0,M=h+v*2;b<M;b++){const X=L*b,Y=L*(b+1),J=et+vt+X,gt=et+dt+X,Dt=et+dt+Y,_t=et+vt+Y;Bt(J,gt,Dt,_t)}}}function Lt(Q,et,lt){l.push(Q),l.push(et),l.push(lt)}function st(Q,et,lt){bt(Q),bt(et),bt(lt);const vt=i.length/3,dt=p.generateTopUV(n,i,vt-3,vt-2,vt-1);St(dt[0]),St(dt[1]),St(dt[2])}function Bt(Q,et,lt,vt){bt(Q),bt(et),bt(vt),bt(et),bt(lt),bt(vt);const dt=i.length/3,b=p.generateSideWallUV(n,i,dt-6,dt-3,dt-2,dt-1);St(b[0]),St(b[1]),St(b[3]),St(b[1]),St(b[2]),St(b[3])}function bt(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function St(Q){s.push(Q.x),s.push(Q.y)}}}toJSON(){const t=jt.prototype.toJSON.call(this),e=this.parameters.shapes,n=this.parameters.options;return Im(e,n,t)}}const Dm={generateTopUV:function(r,t,e,n,i){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new nt(s,a),new nt(o,l),new nt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],x=t[s*3],v=t[s*3+1],g=t[s*3+2];return Math.abs(o-h)<.01?[new nt(a,1-l),new nt(c,1-u),new nt(d,1-m),new nt(x,1-g)]:[new nt(o,1-l),new nt(h,1-u),new nt(f,1-m),new nt(v,1-g)]}};function Im(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Nm extends jt{constructor(t,e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qt(i,3)),this.setAttribute("normal",new Qt(s,3)),this.setAttribute("uv",new Qt(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;yn.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,g=m.length;v<g;v++){const p=m[v];yn.isClockWise(p)===!0&&(m[v]=p.reverse())}const x=yn.triangulateShape(f,m);for(let v=0,g=m.length;v<g;v++){const p=m[v];f=f.concat(p)}for(let v=0,g=f.length;v<g;v++){const p=f[v];i.push(p.x,p.y,0),s.push(0,0,1),a.push(p.x,p.y)}for(let v=0,g=x.length;v<g;v++){const p=x[v],C=p[0]+u,R=p[1]+u,A=p[2]+u;n.push(C,R,A),l+=3}}}toJSON(){const t=jt.prototype.toJSON.call(this),e=this.parameters.shapes;return Fm(e,t)}}function Fm(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Ro extends jt{constructor(t=1,e=8,n=6,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new w,d=new w,f=[],m=[],x=[],v=[];for(let g=0;g<=n;g++){const p=[],C=g/n;let R=0;g==0&&a==0?R=.5/e:g==n&&l==Math.PI&&(R=-.5/e);for(let A=0;A<=e;A++){const y=A/e;u.x=-t*Math.cos(i+y*s)*Math.sin(a+C*o),u.y=t*Math.cos(a+C*o),u.z=t*Math.sin(i+y*s)*Math.sin(a+C*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),v.push(y+R,1-C),p.push(c++)}h.push(p)}for(let g=0;g<n;g++)for(let p=0;p<e;p++){const C=h[g][p+1],R=h[g][p],A=h[g+1][p],y=h[g+1][p+1];(g!==0||a>0)&&f.push(C,R,y),(g!==n-1||l<Math.PI)&&f.push(R,A,y)}this.setIndex(f),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(v,2))}}class Cr extends jt{constructor(t=1,e=.4,n=8,i=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new w,u=new w,d=new w;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const x=m/i*s,v=f/n*Math.PI*2;u.x=(t+e*Math.cos(v))*Math.cos(x),u.y=(t+e*Math.cos(v))*Math.sin(x),u.z=e*Math.sin(v),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const x=(i+1)*f+m-1,v=(i+1)*(f-1)+m-1,g=(i+1)*(f-1)+m,p=(i+1)*f+m;a.push(x,v,p),a.push(v,g,p)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}}class Bm extends fe{constructor(t){super(),this.type="ShadowMaterial",this.color=new wt(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}Bm.prototype.isShadowMaterial=!0;class zm extends Rn{constructor(t){super(t),this.type="RawShaderMaterial"}}zm.prototype.isRawShaderMaterial=!0;class Hi extends fe{constructor(t){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.flatShading=t.flatShading,this.vertexTangents=t.vertexTangents,this}}Hi.prototype.isMeshStandardMaterial=!0;class Om extends Hi{constructor(t){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=De(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new wt).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this}}Om.prototype.isMeshPhysicalMaterial=!0;class Hm extends fe{constructor(t){super(),this.type="MeshPhongMaterial",this.color=new wt(16777215),this.specular=new wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.flatShading=t.flatShading,this}}Hm.prototype.isMeshPhongMaterial=!0;class Um extends fe{constructor(t){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this}}Um.prototype.isMeshToonMaterial=!0;class km extends fe{constructor(t){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.flatShading=t.flatShading,this}}km.prototype.isMeshNormalMaterial=!0;class Gm extends fe{constructor(t){super(),this.type="MeshLambertMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this}}Gm.prototype.isMeshLambertMaterial=!0;class Vm extends fe{constructor(t){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new wt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.flatShading=t.flatShading,this}}Vm.prototype.isMeshMatcapMaterial=!0;class Wm extends Ji{constructor(t){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}Wm.prototype.isLineDashedMaterial=!0;const ne={arraySlice:function(r,t,e){return ne.isTypedArray(r)?new r.constructor(r.subarray(t,e!==void 0?e:r.length)):r.slice(t,e)},convertArray:function(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n},sortedArray:function(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=e[s]*t;for(let l=0;l!==t;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,t,e,n,i=30){const s=r.clone();s.name=t;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<e||m>=n)){u.push(c.times[f]);for(let x=0;x<h;++x)d.push(c.values[f*h+x])}}u.length!==0&&(c.times=ne.convertArray(u,c.times.constructor),c.values=ne.convertArray(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,t=0,e=r,n=30){n<=0&&(n=30);const i=e.tracks.length,s=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=o.times.length-1;let x;if(s<=o.times[0]){const g=h,p=u-h;x=ne.arraySlice(o.values,g,p)}else if(s>=o.times[m]){const g=m*u+h,p=g+u-h;x=ne.arraySlice(o.values,g,p)}else{const g=o.createInterpolant(),p=h,C=u-h;g.evaluate(s),x=ne.arraySlice(g.resultBuffer,p,C)}l==="quaternion"&&new we().fromArray(x).normalize().conjugate().toArray(x);const v=c.times.length;for(let g=0;g<v;++g){const p=g*f+d;if(l==="quaternion")we.multiplyQuaternionsFlat(c.values,p,x,0,c.values,p);else{const C=f-d*2;for(let R=0;R<C;++R)c.values[p+R]-=x[R]}}}return r.blendMode=Xo,r}};class Mn{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,s)}if(n===o)break;if(s=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,s,t)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Mn.prototype.beforeStart_=Mn.prototype.copySampleValue_;Mn.prototype.afterEnd_=Mn.prototype.copySampleValue_;class qm extends Mn{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ai,endingEnd:ai}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case oi:s=t,o=2*e-n;break;case Hr:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oi:a=t,l=2*n-e;break;case Hr:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,v=x*m,g=-d*v+2*d*x-d*m,p=(1+d)*v+(-1.5-2*d)*x+(-.5+d)*m+1,C=(-1-f)*v+(1.5+f)*x+.5*m,R=f*v-f*x;for(let A=0;A!==o;++A)s[A]=g*a[h+A]+p*a[c+A]+C*a[l+A]+R*a[u+A];return s}}class bl extends Mn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class Xm extends Mn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Qe{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ne.convertArray(e,this.TimeBufferType),this.values=ne.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ne.convertArray(t.times,Array),values:ne.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case zr:e=this.InterpolantFactoryMethodDiscrete;break;case Or:e=this.InterpolantFactoryMethodLinear;break;case ns:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return ns}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=ne.arraySlice(n,s,a),this.values=ne.arraySlice(this.values,s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&ne.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=ne.arraySlice(this.times),e=ne.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===ns,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=ne.arraySlice(t,0,a),this.values=ne.arraySlice(e,0,a*n)):(this.times=t,this.values=e),this}clone(){const t=ne.arraySlice(this.times,0),e=ne.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=Or;class xi extends Qe{}xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=zr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Sl extends Qe{}Sl.prototype.ValueTypeName="color";class kr extends Qe{}kr.prototype.ValueTypeName="number";class Ym extends Mn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)we.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Qi extends Qe{InterpolantFactoryMethodLinear(t){return new Ym(this.times,this.values,this.getValueSize(),t)}}Qi.prototype.ValueTypeName="quaternion";Qi.prototype.DefaultInterpolation=Or;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;class vi extends Qe{}vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=zr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Gr extends Qe{}Gr.prototype.ValueTypeName="vector";class Po{constructor(t,e=-1,n,i=ea){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Je(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Zm(n[a]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(Qe.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=ne.getKeyframeOrder(l);l=ne.sortedArray(l,1,h),c=ne.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new kr(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,x){if(f.length!==0){const v=[],g=[];ne.flattenJSON(f,v,g,m),v.length!==0&&x.push(new u(d,v,g))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(const x in f){const v=[],g=[];for(let p=0;p!==d[m].morphTargets.length;++p){const C=d[m];v.push(C.time),g.push(C.morphTarget===x?1:0)}i.push(new kr(".morphTargetInfluence["+x+"]",v,g))}l=f.length*(a||1)}else{const f=".bones["+e[u].name+"]";n(Gr,f+".position",d,"pos",i),n(Qi,f+".quaternion",d,"rot",i),n(Gr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jm(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kr;case"vector":case"vector2":case"vector3":case"vector4":return Gr;case"color":return Sl;case"quaternion":return Qi;case"bool":case"boolean":return xi;case"string":return vi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Zm(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=jm(r.type);if(r.times===void 0){const e=[],n=[];ne.flattenJSON(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const ui={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Jm{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const $m=new Jm;class wn{constructor(t){this.manager=t!==void 0?t:$m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const ke={};class Qm extends wn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ui.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;if(ke[t]!==void 0){ke[t].push({onLoad:e,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,l=t.match(o);let c;if(l){const h=l[1],u=!!l[2];let d=l[3];d=decodeURIComponent(d),u&&(d=atob(d));try{let f;const m=(this.responseType||"").toLowerCase();switch(m){case"arraybuffer":case"blob":const x=new Uint8Array(d.length);for(let g=0;g<d.length;g++)x[g]=d.charCodeAt(g);m==="blob"?f=new Blob([x.buffer],{type:h}):f=x.buffer;break;case"document":f=new DOMParser().parseFromString(d,h);break;case"json":f=JSON.parse(d);break;default:f=d;break}setTimeout(function(){e&&e(f),s.manager.itemEnd(t)},0)}catch(f){setTimeout(function(){i&&i(f),s.manager.itemError(t),s.manager.itemEnd(t)},0)}}else{ke[t]=[],ke[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(h){const u=this.response,d=ke[t];if(delete ke[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ui.add(t,u);for(let f=0,m=d.length;f<m;f++){const x=d[f];x.onLoad&&x.onLoad(u)}s.manager.itemEnd(t)}else{for(let f=0,m=d.length;f<m;f++){const x=d[f];x.onError&&x.onError(h)}s.manager.itemError(t),s.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(h){const u=ke[t];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onProgress&&m.onProgress(h)}},!1),c.addEventListener("error",function(h){const u=ke[t];delete ke[t];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(h)}s.manager.itemError(t),s.manager.itemEnd(t)},!1),c.addEventListener("abort",function(h){const u=ke[t];delete ke[t];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(h)}s.manager.itemError(t),s.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const h in this.requestHeader)c.setRequestHeader(h,this.requestHeader[h]);c.send(null)}return s.manager.itemStart(t),c}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class El extends wn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ui.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),ui.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Km extends wn{constructor(t){super(t)}load(t,e,n,i){const s=new Xr,a=new El(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class tg extends wn{constructor(t){super(t)}load(t,e,n,i){const s=new ve,a=new El(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o;const l=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;s.format=l?Ln:Ve,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Fe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new nt:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,i=[],s=[],a=[],o=new w,l=new Tt;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new w),i[f].normalize()}s[0]=new w,a[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(De(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(De(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Zr extends Fe{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new nt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}Zr.prototype.isEllipseCurve=!0;class Tl extends Zr{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.type="ArcCurve"}}Tl.prototype.isArcCurve=!0;function la(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const Rr=new w,Is=new la,Ns=new la,Fs=new la;class Al extends Fe{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new w){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Rr.subVectors(i[0],i[1]).add(i[0]),c=Rr);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Rr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Rr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),v<1e-4&&(v=x),Is.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,v),Ns.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,v),Fs.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,v)}else this.curveType==="catmullrom"&&(Is.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ns.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fs.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Is.calc(l),Ns.calc(l),Fs.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new w().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}Al.prototype.isCatmullRomCurve3=!0;function Do(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function eg(r,t){const e=1-r;return e*e*t}function ng(r,t){return 2*(1-r)*r*t}function ig(r,t){return r*r*t}function Ui(r,t,e,n){return eg(r,t)+ng(r,e)+ig(r,n)}function rg(r,t){const e=1-r;return e*e*e*t}function sg(r,t){const e=1-r;return 3*e*e*r*t}function ag(r,t){return 3*(1-r)*r*r*t}function og(r,t){return r*r*r*t}function ki(r,t,e,n,i){return rg(r,t)+sg(r,e)+ag(r,n)+og(r,i)}class ca extends Fe{constructor(t=new nt,e=new nt,n=new nt,i=new nt){super(),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new nt){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ki(t,i.x,s.x,a.x,o.x),ki(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}ca.prototype.isCubicBezierCurve=!0;class Ll extends Fe{constructor(t=new w,e=new w,n=new w,i=new w){super(),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new w){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ki(t,i.x,s.x,a.x,o.x),ki(t,i.y,s.y,a.y,o.y),ki(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Ll.prototype.isCubicBezierCurve3=!0;class Jr extends Fe{constructor(t=new nt,e=new nt){super(),this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new nt;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Jr.prototype.isLineCurve=!0;class lg extends Fe{constructor(t=new w,e=new w){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ha extends Fe{constructor(t=new nt,e=new nt,n=new nt){super(),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Ui(t,i.x,s.x,a.x),Ui(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}ha.prototype.isQuadraticBezierCurve=!0;class Cl extends Fe{constructor(t=new w,e=new w,n=new w){super(),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Ui(t,i.x,s.x,a.x),Ui(t,i.y,s.y,a.y),Ui(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Cl.prototype.isQuadraticBezierCurve3=!0;class ua extends Fe{constructor(t=[]){super(),this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Do(o,l.x,c.x,h.x,u.x),Do(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new nt().fromArray(i))}return this}}ua.prototype.isSplineCurve=!0;var cg=Object.freeze({__proto__:null,ArcCurve:Tl,CatmullRomCurve3:Al,CubicBezierCurve:ca,CubicBezierCurve3:Ll,EllipseCurve:Zr,LineCurve:Jr,LineCurve3:lg,QuadraticBezierCurve:ha,QuadraticBezierCurve3:Cl,SplineCurve:ua});class hg extends Fe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Jr(e,t))}getPoint(t){const e=t*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=e){const s=n[i]-e,a=this.curves[i],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l)}i++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?t*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new cg[i.type]().fromJSON(i))}return this}}class Xs extends hg{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Jr(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new ha(this.currentPoint.clone(),new nt(t,e),new nt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new ca(this.currentPoint.clone(),new nt(t,e),new nt(n,i),new nt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ua(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new Zr(t,e,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $r extends Xs{constructor(t){super(t),this.uuid=Je(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Xs().fromJSON(i))}return this}}class $e extends Xt{constructor(t,e=1){super(),this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}$e.prototype.isLight=!0;class Rl extends $e{constructor(t,e,n){super(t,n),this.type="HemisphereLight",this.position.copy(Xt.DefaultUp),this.updateMatrix(),this.groundColor=new wt(e)}copy(t){return $e.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}Rl.prototype.isHemisphereLight=!0;const Io=new Tt,No=new w,Fo=new w;class da{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;No.setFromMatrixPosition(t.matrixWorld),e.position.copy(No),Fo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fo),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Pl extends da{constructor(){super(new Te(50,1,.5,500)),this.focus=1}updateMatrices(t){const e=this.camera,n=ks*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}Pl.prototype.isSpotLightShadow=!0;class ug extends $e{constructor(t,e,n=0,i=Math.PI/3,s=0,a=1){super(t,e),this.type="SpotLight",this.position.copy(Xt.DefaultUp),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new Pl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}ug.prototype.isSpotLight=!0;const Bo=new Tt,Di=new w,Bs=new w;class Dl extends da{constructor(){super(new Te(90,1,.5,500)),this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Di.setFromMatrixPosition(t.matrixWorld),n.position.copy(Di),Bs.copy(n.position),Bs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Bs),n.updateMatrixWorld(),i.makeTranslation(-Di.x,-Di.y,-Di.z),Bo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo)}}Dl.prototype.isPointLightShadow=!0;class dg extends $e{constructor(t,e,n=0,i=1){super(t,e),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}dg.prototype.isPointLight=!0;class Il extends ia{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}Il.prototype.isOrthographicCamera=!0;class Nl extends da{constructor(){super(new Il(-5,5,5,-5,.5,500))}}Nl.prototype.isDirectionalLightShadow=!0;class Ys extends $e{constructor(t,e){super(t,e),this.type="DirectionalLight",this.position.copy(Xt.DefaultUp),this.updateMatrix(),this.target=new Xt,this.shadow=new Nl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Ys.prototype.isDirectionalLight=!0;class fg extends $e{constructor(t,e){super(t,e),this.type="AmbientLight"}}fg.prototype.isAmbientLight=!0;class pg extends $e{constructor(t,e,n=10,i=10){super(t,e),this.type="RectAreaLight",this.width=n,this.height=i}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}pg.prototype.isRectAreaLight=!0;class Fl{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new w)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*s),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*s)),e.addScaledVector(a[6],.315392*(3*s*s-1)),e.addScaledVector(a[7],1.092548*(n*s)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*s),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*s),e.addScaledVector(a[6],.743125*s*s-.247708),e.addScaledVector(a[7],2*.429043*n*s),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,s=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-i*i)}}Fl.prototype.isSphericalHarmonics3=!0;class fa extends $e{constructor(t=new Fl,e=1){super(void 0,e),this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}fa.prototype.isLightProbe=!0;class mg{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}}class gg extends jt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}gg.prototype.isInstancedBufferGeometry=!0;class xg extends de{constructor(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(t,e,n),this.meshPerAttribute=i||1}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}xg.prototype.isInstancedBufferAttribute=!0;class vg extends wn{constructor(t){super(t),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ui.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ui.add(t,l),e&&e(l),s.manager.itemEnd(t)}).catch(function(l){i&&i(l),s.manager.itemError(t),s.manager.itemEnd(t)}),s.manager.itemStart(t)}}vg.prototype.isImageBitmapLoader=!0;let Pr;const yg={getContext:function(){return Pr===void 0&&(Pr=new(window.AudioContext||window.webkitAudioContext)),Pr},setContext:function(r){Pr=r}};class _g extends wn{constructor(t){super(t)}load(t,e,n,i){const s=this,a=new Qm(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{const l=o.slice(0);yg.getContext().decodeAudioData(l,function(h){e(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}}class Mg extends fa{constructor(t,e,n=1){super(void 0,n);const i=new wt().set(t),s=new wt().set(e),a=new w(i.r,i.g,i.b),o=new w(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}Mg.prototype.isHemisphereLightProbe=!0;class wg extends fa{constructor(t,e=1){super(void 0,e);const n=new wt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}wg.prototype.isAmbientLightProbe=!0;class bg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=zo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function zo(){return(typeof performance>"u"?Date:performance).now()}class Sg extends Xt{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class Eg{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,a;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,a=i;s!==a;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){we.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const a=this._workIndex*s;we.multiplyQuaternionsFlat(t,a,t,e,t,n),we.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,s){for(let a=0;a!==s;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const pa="\\[\\]\\.:\\/",Tg=new RegExp("["+pa+"]","g"),ma="[^"+pa+"]",Ag="[^"+pa.replace("\\.","")+"]",Lg=/((?:WC+[\/:])*)/.source.replace("WC",ma),Cg=/(WCOD+)?/.source.replace("WCOD",Ag),Rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ma),Pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ma),Dg=new RegExp("^"+Lg+Cg+Rg+Pg+"$"),Ig=["material","materials","bones"];class Ng{constructor(t,e,n){const i=n||Yt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Yt{constructor(t,e,n){this.path=e,this.parsedPath=n||Yt.parseTrackName(e),this.node=Yt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Yt.Composite(t,e,n):new Yt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tg,"")}static parseTrackName(t){const e=Dg.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Ig.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.node[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Yt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Yt.Composite=Ng;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fg{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,a=s.length,o=new Array(a),l={endingStart:ai,endingEnd:ai};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,a=s/i,o=i/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;if(l<0||n===0)return;this._startTime=null,e=n*l}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Xo:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case ea:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const a=n===xh;if(t===0)return s===-1?i:a&&(s&1)===1?e-i:i;if(n===mh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=oi,i.endingEnd=oi):(t?i.endingStart=this.zeroSlopeAtStart?oi:ai:i.endingStart=Hr,e?i.endingEnd=this.zeroSlopeAtEnd?oi:ai:i.endingEnd=Hr)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=e,o[1]=s+t,l[1]=n,this}}class Bg extends Pn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const x=e&&e._propertyBindings[u].binding.parsedPath;m=new Eg(Yt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new bl(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let a=typeof t=="string"?Po.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ea),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Fg(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?Po.findByName(n,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Bg.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class zg extends In{constructor(t,e,n=1){super(t,e),this.meshPerAttribute=n||1}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}zg.prototype.isInstancedInterleavedBuffer=!0;class Og{constructor(t,e,n=0,i=1/0){this.ray=new Dn(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!1,n=[]){return js(t,this,n,e),n.sort(Oo),n}intersectObjects(t,e=!1,n=[]){for(let i=0,s=t.length;i<s;i++)js(t[i],this,n,e);return n.sort(Oo),n}}function Oo(r,t){return r.distance-t.distance}function js(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)js(i[s],t,e,!0)}}class Hg extends Xt{constructor(t){super(),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}Hg.prototype.isImmediateRenderObject=!0;const gn=new w,Dr=new Tt,zs=new Tt;class Ug extends oa{constructor(t){const e=Bl(t),n=new jt,i=[],s=[],a=new wt(0,0,1),o=new wt(0,1,0);for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Qt(i,3)),n.setAttribute("color",new Qt(s,3));const l=new Ji({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");zs.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<e.length;s++){const o=e[s];o.parent&&o.parent.isBone&&(Dr.multiplyMatrices(zs,o.matrixWorld),gn.setFromMatrixPosition(Dr),i.setXYZ(a,gn.x,gn.y,gn.z),Dr.multiplyMatrices(zs,o.parent.matrixWorld),gn.setFromMatrixPosition(Dr),i.setXYZ(a+1,gn.x,gn.y,gn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function Bl(r){const t=[];r&&r.isBone&&t.push(r);for(let e=0;e<r.children.length;e++)t.push.apply(t,Bl(r.children[e]));return t}class kg extends oa{constructor(t=10,e=10,n=4473924,i=8947848){n=new wt(n),i=new wt(i);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,m=-o;d<=e;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const x=d===s?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new jt;h.setAttribute("position",new Qt(l,3)),h.setAttribute("color",new Qt(c,3));const u=new Ji({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const Gg=new Float32Array(1);new Int32Array(Gg.buffer);const Vg=new Wi({side:ue,depthWrite:!1,depthTest:!1});new Wt(new qr,Vg);Fe.create=function(r,t){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Fe.prototype),r.prototype.constructor=r,r.prototype.getPoint=t,r};Xs.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};kg.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Ug.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};wn.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),mg.extractUrlBase(r)};wn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Be.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Be.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Be.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Be.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Be.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};pi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Yr.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};xe.prototype.flattenToArrayOffset=function(r,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,t)};xe.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};xe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};xe.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};xe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};xe.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Tt.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};Tt.prototype.flattenToArrayOffset=function(r,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,t)};Tt.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)};Tt.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};Tt.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Tt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Tt.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Tt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Tt.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};Tt.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Tt.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Tt.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Tt.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Tt.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Tt.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Tt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Tt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Tt.prototype.makeFrustum=function(r,t,e,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,t,n,e,i,s)};Tt.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Ye.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};we.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};we.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Dn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Dn.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};Dn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};le.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};le.prototype.barycoordFromPoint=function(r,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,t)};le.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};le.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};le.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};le.barycoordFromPoint=function(r,t,e,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),le.getBarycoord(r,t,e,n,i)};le.normal=function(r,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),le.getNormal(r,t,e,n)};$r.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};$r.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new $i(this,r)};$r.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Nm(this,r)};nt.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};nt.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};nt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};w.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};w.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};w.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};w.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};w.prototype.getColumnFromMatrix=function(r,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,r)};w.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};w.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};w.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};w.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Zt.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};Zt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Xt.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Xt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Xt.prototype.translate=function(r,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,r)};Xt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Xt.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Xt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Wt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Wt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),vh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});xl.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Te.prototype.setLens=function(r,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(r)};Object.defineProperties($e.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(de.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Ur},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Ur)}}});de.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Ur:Vi),this};de.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},de.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};jt.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};jt.prototype.addAttribute=function(r,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new de(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(r,t)};jt.prototype.addDrawCall=function(r,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,t)};jt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};jt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};jt.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};jt.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(jt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});In.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Ur:Vi),this};In.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};$i.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};$i.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};$i.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};sa.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(fe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new wt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Go}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}}});Object.defineProperties(Rn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Jt.prototype.clearTarget=function(r,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(t,e,n)};Jt.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Jt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Jt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Jt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Jt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Jt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Jt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Jt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Jt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Jt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Jt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Jt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Jt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Jt.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Jt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Jt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Jt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Jt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Jt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Jt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Jt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Jt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Jt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Jt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Jt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?na:Zi}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(fl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Cn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});Sg.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new _g().load(r,function(n){t.setBuffer(n)}),this};ra.prototype.updateCubeMap=function(r,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,t)};ra.prototype.clear=function(r,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,t,e,n)};fi.crossOrigin=void 0;fi.loadTexture=function(r,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new tg;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,e,void 0,n);return t&&(s.mapping=t),s};fi.loadTextureCube=function(r,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Km;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,e,void 0,n);return t&&(s.mapping=t),s};fi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};fi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);function Wg(){let r=!0;const t=[],e=T=>(t.push(T),T),n={ko:{chromeLabel:"초대장 미리보기",fDate:"2026년 12월 11일 금요일",fTime:"저녁 6시",fTimeSub:"6시 입장 · 6시 30분 연주 시작",seeMap:"지도 보기",fPot:"포트럭 · 일인분 음식 하나씩",fPotSub:"연주 후 7시부터 함께 저녁을 나눠요. 아무 음식이나 좋아요.",viewPhone:"휴대폰",viewDesk:"데스크톱",tapHint:"멤버를 눌러보세요",headline:"두둥탁의 첫 크리스마스 공연에 초대합니다",lede:"멤버 대부분이 올해 처음 악기를 잡았어요. 조금 서툴러도 마음만은 꽉 채워 준비했습니다. 따뜻하게 들어주세요.",dateMeta:"금요일 저녁 6시",dday:T=>T>0?`공연까지 ${T}일`:T===0?"오늘 저녁이에요!":"와주셔서 감사했습니다",hProg:"순서",p:[{t:"6:00",n:"입장",d:"자리 잡고 인사 나눠요"},{t:"6:30",n:"연주",songs:!0},{t:"7:00",n:"포트럭 저녁",d:"8시까지 함께 밥 먹어요"}],gift:"인터미션",hPlace:"오시는 길",placeName:"밴쿠버 한인 연합교회",placeSub:"Korean United Church of Vancouver",copy:"주소 복사",copied:"복사했어요",apple:"Apple 지도",google:"Google 지도",parking:"주차는 교회 뒤 주차장이나 길가에 해주세요.",doors:"6시에 문이 열리고, 6시 반에 연주를 시작해요.",hPot:"포트럭",potMain:"일인분 음식 하나, 아무거나 좋아요",potSub:"연주가 끝나면 7시부터 8시까지 함께 저녁을 나눠요.",potTip:"집밥, 간식, 디저트 모두 환영해요.",hMem:"함께하는 열세 명",memIntro:"대부분 올해 시작한 새내기 연주자예요. 끝나고 한마디씩 응원해 주세요.",leader:"리더",sec:{brass:"금관",wood:"목관",rhy:"리듬",str:"현악"},footScript:"See you on Dec 11",footSub:"12월 11일 금요일 저녁 6시 · 밴쿠버 한인 연합교회",sidePreview:"메시지 링크 미리보기",sideNotes:"링크 미리보기에 대해",sideText:"카카오톡이나 문자로 링크를 보내면 이렇게 보여요. 미리보기는 한 가지 언어만 표시되기 때문에 한국어로 하고, 설명에 영어를 함께 넣었어요.",msgText:"12월 11일 저녁에 시간 돼요? 저희 밴드 첫 공연이에요!"},en:{chromeLabel:"Invitation preview",fDate:"Friday, December 11, 2026",fTime:"6:00 PM",fTimeSub:"Doors at 6:00 · music at 6:30",seeMap:"Open map",fPot:"Potluck · bring one dish",fPotSub:"We share dinner together from 7:00. Anything you like is welcome.",viewPhone:"Phone",viewDesk:"Desktop",tapHint:"Tap a player to see who it is",headline:"You're invited to our first Christmas concert",lede:"Most of us picked up our instruments for the very first time this year. It might be a little wobbly, but it's full of heart. Come listen and cheer us on.",dateMeta:"Friday evening · 6:00 PM",dday:T=>T>0?`${T} days to go`:T===0?"It's tonight!":"Thank you for coming",hProg:"Concert program",p:[{t:"6:00",n:"Doors open",d:"Find a seat and say hello"},{t:"6:30",n:"Concert",songs:!0},{t:"7:00",n:"Potluck dinner",d:"We eat together until 8:00"}],gift:"Intermission",hPlace:"How to find us",placeName:"Korean United Church of Vancouver",placeSub:"밴쿠버 한인 연합교회",copy:"Copy address",copied:"Copied",apple:"Apple Maps",google:"Google Maps",parking:"Park in the lot behind the church, or on the street.",doors:"Doors open at 6:00. Music starts at 6:30.",hPot:"Dinner together",potMain:"Bring one serving of anything you like",potSub:"After the music, we'll share dinner together from 7:00 to 8:00.",potTip:"Home cooking, snacks or dessert are all welcome.",hMem:"Meet the thirteen of us",memIntro:"Most of us are first-year players. Come say hi after the show!",leader:"Leader",sec:{brass:"Brass",wood:"Woodwinds",rhy:"Rhythm",str:"Strings"},footScript:"See you on Dec 11",footSub:"Friday, Dec 11 · 6:00 PM · Korean United Church of Vancouver",sidePreview:"Link preview in messages",sideNotes:"About the link preview",sideText:"This is how the link looks when sent in KakaoTalk or iMessage. Previews show only one language, so the title is Korean with English added to the description.",msgText:"Free on the evening of Dec 11? It's our band's first show!"}},i=["Sweet Caroline","Let It Snow","Perfidia","__GIFT__","Blues for a New Day","All of Me","All I Want for Christmas Is You"],s={sax:["색소폰","Saxophone"],tpt:["트럼펫","Trumpet"],ten:["테너 색소폰","Tenor Saxophone"],tbn:["트롬본","Trombone"],vln:["바이올린","Violin"],cla:["클라리넷","Clarinet"],flu:["플루트","Flute"],pno:["피아노 · 글로켄슈필","Piano & Glockenspiel"],slb:["슬레이벨","Sleigh Bells"],bas:["베이스","Bass"],drm:["드럼","Drums"]},a={sax:"wood",ten:"wood",cla:"wood",flu:"wood",tpt:"brass",tbn:"brass",vln:"str",pno:"rhy",bas:"rhy",drm:"rhy",slb:"rhy"},o={jenny:"/dudungtak/members/jenny.webp",baeg:"/dudungtak/members/bae-g.webp",ted:"/dudungtak/members/ted.webp",mike:"/dudungtak/members/mike.webp",shawn:"/dudungtak/members/shawn.webp",scott:"/dudungtak/members/scott.webp",penny:"/dudungtak/members/penny.webp",joanne:"/dudungtak/members/joanne.webp",sohee:"/dudungtak/members/sohee.webp",annie:"/dudungtak/members/annie.webp",jennylee:"/dudungtak/members/jenny-lee.webp"},l=[["Jenny Song","sax",1,o.jenny],["Bae G","tpt",0,o.baeg],["Ted Kim","tpt",0,o.ted],["Michael Lee","ten",0,o.mike],["Shawn Jung","tbn",0,o.shawn],["Scott Park","vln",0,o.scott],["Penny Jang","cla",0,o.penny],["Joanne","flu",0,o.joanne],["Sohee Kim","flu",0,o.sohee],["Annie","pno",0,o.annie],["Gary","slb"],["Bruce","bas"],["Jenny Lee","drm",0,o.jennylee]],c=["#ffb547","#ff6b5e","#7fd38a","#ffd36b","#7cb8ff"];let h="en",u="lights",d=()=>{},f=()=>{};try{const T=localStorage.getItem("ddt-lang");if(T==="ko"||T==="en")h=T;else throw 0}catch{const N=navigator.languages||[navigator.language||"en"];h=/^ko/i.test(N[0]||"")?"ko":"en"}const m=T=>document.querySelector(T);function x(T,N,F,H,B){return B=B||1,`<g class="bulb" style="animation-delay:${H}s"><circle cx="${T}" cy="${N+9*B}" r="${9*B}" fill="${F}" opacity=".25"/><rect x="${T-2.5*B}" y="${N-2*B}" width="${5*B}" height="${5*B}" rx="1" fill="#3a4466"/><ellipse cx="${T}" cy="${N+8*B}" rx="${4.2*B}" ry="${6*B}" fill="${F}"/></g>`}(function(){const T=m("#lightsTop");let N=0;function F(){const H=Math.round(T.clientWidth),B=64;if(!H||H===N)return;N=H;const S=Math.max(110,H/Math.max(1,Math.round(H/150))),D=24,I=8,L=mt=>{const At=(mt%S+S)%S/S;return I+4*D*At*(1-At)};let k=`M0 ${I}`;for(let mt=0;mt<H;mt+=S)k+=` Q ${mt+S/2} ${I+2*D} ${Math.min(H,mt+S)} ${I}`;let E=`<svg viewBox="0 0 ${H} ${B}" width="${H}" height="${B}"><path d="${k}" fill="none" stroke="#2a3350" stroke-width="2"/>`;const K=Math.max(3,Math.round(S/38)),ft=S/K;let Z=0;for(let mt=ft/2;mt<H;mt+=ft,Z++)E+=x(mt,L(mt)+3,c[Z%5],Z*.37%2.4,1.15);T.innerHTML=E+"</svg>"}F(),e(new ResizeObserver(F)).observe(T)})(),document.querySelectorAll(".garland").forEach((T,N)=>{let F='<path d="M4 6 Q 50 30 95 10 T 186 6" fill="none" stroke="#3a4570" stroke-width="1.5"/>';[[30,14],[62,17],[95,9],[128,14],[160,13]].forEach(([H,B],S)=>F+=x(H,B,c[(S+N)%5],(S+N)*.43%2.4,.8)),T.innerHTML=F}),function(){const T=document.getElementById("finScene");if(!T)return;[["6%",64,40],["19%",44,54],["30%",34,60],["65%",36,60],["77%",50,50],["90%",70,40]].forEach(([H,B,S],D)=>{let I="";[[24,30],[36,36],[18,52],[42,58],[28,70],[12,78],[48,80]].forEach(([L,k],E)=>I+=`<circle class="tl" cx="${L}" cy="${k}" r="2.3" fill="${c[(E+D)%5]}" style="animation-delay:${((E*.5+D*.3)%2.2).toFixed(2)}s"/>`),T.insertAdjacentHTML("beforeend",`<svg class="tree" style="left:${H};width:${B}px;bottom:${S}px" viewBox="0 0 60 100"><rect x="27" y="86" width="6" height="12" fill="#2a1c15"/><polygon points="30,4 50,40 10,40" fill="#14382f"/><polygon points="30,22 56,64 4,64" fill="#10302a"/><polygon points="30,42 60,90 0,90" fill="#0c2824"/><path d="M21 20 L30 4 L39 20" stroke="#eef3ff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 52 L30 26 L46 52" stroke="#eef3ff" stroke-width="2" fill="none" opacity=".5" stroke-linecap="round"/>${I}</svg>`)});const F=T.querySelector(".hill-f");T.appendChild(F),T.appendChild(T.querySelector(".fin-credit"))}();function v(){const T=new Date,N=new Date(T.getFullYear(),T.getMonth(),T.getDate());return Math.round((new Date(2026,11,11)-N)/864e5)}function g(){const T=n[h],N=h==="ko"?0:1;document.documentElement.lang=h,document.querySelectorAll("[data-t]").forEach(F=>{const H=T[F.dataset.t];typeof H=="string"&&(F.textContent=H)}),m("#dday")&&(m("#dday").textContent=T.dday(v())),m("#prog").innerHTML=T.p.map((F,H)=>{let B=`<li class="t-item"><svg class="t-bulb" viewBox="0 0 16 20" aria-hidden="true"><circle cx="8" cy="11" r="8" fill="${c[H]}" opacity=".3"/><rect x="5.5" y="0" width="5" height="4" rx="1" fill="#3a4466"/><ellipse cx="8" cy="11" rx="5" ry="7" fill="${c[H]}"/></svg>`;if(B+=`<div class="t-time">${F.t}</div><div class="t-title">${F.n}</div>`,F.d&&(B+=`<div class="t-desc">${F.d}</div>`),F.songs){let S=0;B+='<ol class="songs">'+i.map(D=>D==="__GIFT__"?`<li class="song gift"><span class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5c0 1.2-1 1.5-1 2.7M12 3.5c0 1.2-1 1.5-1 2.7"/></svg></span><span>${T.gift}</span></li>`:(S++,`<li class="song"><span class="no">${S}</span><span>${D}</span></li>`)).join("")+"</ol>"}return B+"</li>"}).join(""),m("#members").innerHTML=l.map(([F,H,B,S])=>{const D=F.split(/\s+/).map(k=>k[0]).join("").slice(0,2).toUpperCase(),I=S?`<span class="av" data-s="${a[H]}"><img src="${S}" alt="" loading="lazy"></span>`:`<span class="av" data-s="${a[H]}" aria-hidden="true">${D}</span>`;return`<li class="m${B?" lead":""}">${I}<span><b>${F}</b><small>${B?'<svg class="star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z"/></svg>':""}${s[H][N]}${B?" · "+T.leader:""}</small></span></li>`}).join(""),m("#legend").innerHTML=["brass","wood","rhy","str"].map(F=>`<span><i data-s="${F}"></i>${T.sec[F]}</span>`).join(""),document.querySelectorAll(".lang button").forEach(F=>F.setAttribute("aria-pressed",F.dataset.lang===h)),d()}document.querySelectorAll(".lang button").forEach(T=>T.onclick=()=>{h=T.dataset.lang;try{localStorage.setItem("ddt-lang",h)}catch{}g()}),m("#toMap")&&(m("#toMap").onclick=()=>document.getElementById("h-place").scrollIntoView({behavior:"smooth",block:"center"})),m("#copy").onclick=async()=>{const T=m("#addr").textContent;try{await navigator.clipboard.writeText(T),m("#copy").textContent=n[h].copied,setTimeout(()=>m("#copy").textContent=n[h].copy,1600)}catch{const F=document.createRange();F.selectNodeContents(m("#addr"));const H=getSelection();H.removeAllRanges(),H.addRange(F)}},function(){const T=m("#snow"),N=T.getContext("2d"),F=m("#phone"),H=matchMedia("(prefers-reduced-motion: reduce)").matches;let B=[];function S(){const I=Math.min(2,devicePixelRatio||1);T.width=F.clientWidth*I,T.height=F.clientHeight*I,N.setTransform(I,0,0,I,0,0),B=Array.from({length:Math.round(F.clientWidth*F.clientHeight/9e3)},()=>({x:Math.random()*F.clientWidth,y:Math.random()*F.clientHeight,r:Math.random()*1.8+.6,s:Math.random()*.4+.2,w:Math.random()*6.3}))}function D(){const I=F.clientWidth,L=F.clientHeight;N.clearRect(0,0,I,L),N.fillStyle="rgba(255,255,255,.7)",B.forEach(k=>{H||(k.y+=k.s,k.w+=.01,k.x+=Math.sin(k.w)*.25,k.y>L&&(k.y=-4,k.x=Math.random()*I)),N.beginPath(),N.arc(k.x,k.y,k.r,0,6.283),N.fill()}),!H&&r&&requestAnimationFrame(D)}S(),D(),e(new ResizeObserver(()=>{S(),H&&D()})).observe(F)}(),g();const p=new Set(["Jenny Song","Penny Jang","Joanne","Sohee Kim","Annie","Jenny Lee"]),C=["Scott Park","Penny Jang","Bae G","Jenny Song","Ted Kim","Michael Lee","Shawn Jung"],R=["Joanne","Sohee Kim","Annie","Gary","Bruce","Jenny Lee"],A=["#2a1c15","#3d2618","#1e1917","#4b2e1b","#332019","#5a3820"],y={brass:"#f2b33d",wood:"#2f9a5c",rhy:"#4a78c8",str:"#d6453d"};function z(){const T=m("#band3d"),N=m("#band"),F=m("#tag");let H;try{H=new Jt({canvas:N,antialias:!0,alpha:!0})}catch{T.hidden=!0;return}H.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),H.outputEncoding=na;const B=new sa,S=new Te(26,1,.1,60),D=new Rl(16774114,6969976,.95);B.add(D);const I=new Ys(16773340,.85);I.position.set(-3,6,7),B.add(I);const L=new Ys(16763279,.5);L.position.set(5,4,-5),B.add(L);const k=Math.PI,E=($,tt,at)=>new w($||0,tt||0,at||0),K=E(0,1,0),ft={};function Z($,tt){const at=$+(tt?JSON.stringify(tt):"");if(!ft[at]){const ct=new Hi(Object.assign({roughness:.6},tt||{}));ct.color=new wt($).convertSRGBToLinear(),ft[at]=ct}return ft[at]}const mt=new Ro(1,22,16),At={},V=($,tt,at)=>{const ct=$+"|"+tt+"|"+!!at;return At[ct]||(At[ct]=new Nr($,tt,1,18,1,!!at))};function kt($,tt,at){const ct=at.clone().sub(tt),xt=ct.length()||1e-4;return $.position.copy(tt).addScaledVector(ct,.5),$.quaternion.setFromUnitVectors(K,ct.multiplyScalar(1/xt)),$.scale.set(1,xt,1),$}const ut=($,tt,at,ct,xt)=>kt(new Wt(V(xt===void 0?ct:xt,ct),$),tt,at),Lt=($,tt,at,ct,xt)=>kt(new Wt(V(xt,ct,!0),$),tt,at);function st($,tt,at,ct){const xt=new Wt(mt,$);return xt.scale.set(tt*(ct?ct[0]:1),tt*(ct?ct[1]:1),tt*(ct?ct[2]:1)),at&&xt.position.copy(at),xt}function Bt($,tt,at,ct,xt){const q=new Wt(new qr(tt,at,ct),$);return q.position.copy(xt),q}function bt($,tt,at,ct){const xt=new Ze;return xt.position.set(tt,at,ct),$.add(xt),xt}const St=($,tt,at,ct)=>($.updateMatrix(),E(tt,at,ct).applyMatrix4($.matrix)),Q=Z("#f6d3b6",{roughness:.7}),et=Z("#fbfaf5",{roughness:.85}),lt=Z("#25252b",{roughness:.85}),vt=Z("#3a2a20",{roughness:.6}),dt=Z("#d3252d",{roughness:.8}),b=Z("#ffffff",{roughness:1}),M=Z("#1c1512",{roughness:.25}),X=Z("#f4a19c",{roughness:.9}),Y=Z("#8f3029",{roughness:.6}),J=Z("#e7b64a",{metalness:.6,roughness:.3}),gt=Z("#e7b64a",{metalness:.6,roughness:.3,side:An}),Dt=Z("#dfe3ea",{metalness:.65,roughness:.25}),_t=Z("#1f1f25",{roughness:.4}),P=Z("#1f1f25",{roughness:.4,side:An}),it=Z("#a8521f",{roughness:.4}),rt=Z("#5a2a12",{roughness:.5}),yt=Z("#fbfbf8",{roughness:.5}),j=Z("#c8242c",{roughness:.35}),Ct=Z("#e9c891",{roughness:.6}),Vt=new Wi({color:16777215}),se=new Cr(.034,.011,6,14,k),Ke=new Cr(.295,.066,10,32),ie=new pm(.29,.48,24),ze=new Ro(.3*1.07,26,14,0,k*2,k*.22,k*.3),Ae=new Nr(.31,.34,.46,22,1,!0,k/2,k),Qr=new Cr(.365,.02,8,40),Nn=new $r;for(let $=0;$<10;$++){const tt=$%2?.045:.1,at=$/10*k*2+k/2;$?Nn.lineTo(Math.cos(at)*tt,Math.sin(at)*tt):Nn.moveTo(Math.cos(at)*tt,Math.sin(at)*tt)}const yi=new $i(Nn,{depth:.03,bevelEnabled:!1});yi.center();const Ie=document.createElement("canvas");Ie.width=Ie.height=64;const Fn=Ie.getContext("2d"),Bn=Fn.createRadialGradient(32,32,0,32,32,32);Bn.addColorStop(0,"rgba(0,0,0,.42)"),Bn.addColorStop(1,"rgba(0,0,0,0)"),Fn.fillStyle=Bn,Fn.fillRect(0,0,64,64);const Ki=new Wi({map:new yl(Ie),transparent:!0,depthWrite:!1}),_i=new el(1,1);function tr($){const tt=new Ze,at=new Ze;tt.add(at),[-1,1].forEach(Nt=>{at.add(ut(lt,E(.085*Nt,.1,0),E(.085*Nt,.36,0),.072)),at.add(st(vt,.085,E(.085*Nt,.055,.035),[1,.65,1.35]))}),at.add(ut(lt,E(0,.32,0),E(0,.43,0),.205)),at.add(ut(et,E(0,.42,0),E(0,.72,0),.2,.16)),at.add(st(et,.16,E(0,.72,0),[1.05,.4,1]));const ct=Z("#1c1c21",{roughness:.6}),xt=Z("#141418",{roughness:.45});[-1,1].forEach(Nt=>{at.add(ut(ct,E(.1*Nt,.44,.19),E(.115*Nt,.72,.128),.024)),at.add(ut(ct,E(.115*Nt,.72,.128),E(.12*Nt,.775,-.02),.024)),at.add(ut(ct,E(.12*Nt,.775,-.02),E(.1*Nt,.44,-.19),.024)),at.add(st(J,.02,E(.1*Nt,.46,.205)))}),[-1,1].forEach(Nt=>at.add(st(xt,.05,E(.05*Nt,.735,.165),[1.1,.75,.5]))),at.add(st(xt,.024,E(0,.735,.19)));const q=.3,pt=bt(at,0,1,0);pt.add(st(Q,q,null,[1.06,.96,1]));const Ut=(Nt,Ee,me,bn)=>E(Nt,Ee,me).normalize().multiplyScalar(q*(bn||1));[-1,1].forEach(Nt=>{const Ee=Ut(.36*Nt,-.06,1,.97);pt.add(st(M,.048,Ee,[.85,1.15,.55])),pt.add(st(Vt,.015,Ee.clone().add(E(.014,.022,.024)))),pt.add(st(X,.045,Ut(.62*Nt,-.32,1,.96),[1,.6,.45])),pt.add(st(Q,.06,E(.31*Nt,-.02,0),[.55,1,.8]))});const Ft=new Wt(se,Y);Ft.position.copy(Ut(0,-.36,1,1)),Ft.rotation.set(-.35,0,k),pt.add(Ft);const zt=Z($.hair,{roughness:.75,side:An}),$t=new Wt(ze,zt);if($t.rotation.x=-.5,pt.add($t),[-.55,-.18,.18,.55].forEach(Nt=>pt.add(st(zt,.085,Ut(Nt,.5,.82,1.03),[1.15,.8,.7]))),[-1,1].forEach(Nt=>pt.add(st(zt,.075,Ut(Nt,.12,.15,1),[.65,1.25,1]))),$.long){const Nt=new Wt(Ae,zt);Nt.position.y=-.2,Nt.scale.x=1.06,pt.add(Nt),[-1,1].forEach(Ee=>pt.add(ut(zt,Ut(.95*Ee,.05,.25,1),E(.26*Ee,-.42,.07),.075,.055)))}const Kt=bt(pt,0,.15,-.02);Kt.rotation.set(-.18,0,$.tilt*.55);const on=new Wt(Ke,b);on.rotation.x=k/2,Kt.add(on);const ln=new Wt(ie,dt);ln.position.y=.24,Kt.add(ln),Kt.add(st(b,.07,E(0,.49,0)));let qe=null;$.lead&&(qe=new Wt(yi,J),qe.position.set(0,1.82,0),at.add(qe));const Un=[-1,1].map(Nt=>{const Ee=E(.2*Nt,.68,.03);at.add(st(et,.066,Ee));const me=new Wt(V(.058,.064),et),bn=new Wt(V(.05,.058),et),kn=st(et,.058),Sn=st(Q,.058);return at.add(me,bn,kn,Sn),{s:Nt,sh:Ee,up:me,lo:bn,el:kn,hd:Sn}});function Kr(Nt,Ee){const me=Ee.clone().sub(Nt.sh),bn=me.length(),kn=Math.max(.2,Math.min(.33,bn*.56)),Sn=Math.min(bn,kn*2-.02);me.normalize();const ts=Nt.sh.clone().addScaledVector(me,Sn),es=E(Nt.s,-.55,-.25);es.addScaledVector(me,-es.dot(me)).normalize();const Ul=Math.sqrt(Math.max(0,kn*kn-Sn*Sn/4)),wi=Nt.sh.clone().addScaledVector(me,Sn/2).addScaledVector(es,Ul);kt(Nt.up,Nt.sh,wi),Nt.el.position.copy(wi);const ga=ts.clone().sub(wi),xa=ga.length()||1e-4;return kt(Nt.lo,wi,wi.clone().addScaledVector(ga,Math.max(.01,xa-.035)/xa)),Nt.hd.position.copy(ts),ts}const Hl=er($.k,at,pt,Un,Kr);return tt.userData={head:pt,update(Nt,Ee){const me=Nt+$.ph;at.position.y=Math.abs(Math.sin(me*2.6))*.025+Ee,at.rotation.z=Math.sin(me*1.3)*.04,pt.rotation.y=Math.sin(me*.9)*.12,pt.rotation.x=Math.sin(me*2.6)*.03,Hl(me),qe&&(qe.rotation.y=Nt*1.6)}},tt}function er($,tt,at,ct,xt){if($==="tpt"){const q=bt(tt,0,.86,.36);return q.add(ut(Dt,E(0,0,-.09),E(0,0,.05),.009,.016)),q.add(ut(J,E(0,0,.05),E(0,0,.26),.018)),q.add(ut(J,E(0,-.06,.06),E(0,-.06,.22),.018)),q.add(st(J,.033,E(0,-.03,.06),[.6,1.1,.6])),[.1,.135,.17].forEach(pt=>{q.add(ut(J,E(0,-.085,pt),E(0,.03,pt),.015)),q.add(st(Dt,.016,E(0,.04,pt)))}),q.add(Lt(gt,E(0,0,.25),E(0,0,.38),.02,.085)),pt=>{q.rotation.x=.12+Math.sin(pt*2.1)*.07,xt(ct[0],St(q,0,.04,.135)),xt(ct[1],St(q,0,-.1,.12))}}if($==="tbn"){const q=bt(tt,0,.86,.36),pt=bt(q,0,0,0);return q.rotation.y=.42,q.add(ut(Dt,E(0,0,-.09),E(0,0,.05),.009,.016)),q.add(ut(J,E(0,0,.05),E(0,0,.24),.011)),q.add(ut(J,E(0,-.07,.05),E(0,-.07,.24),.011)),pt.add(ut(J,E(0,0,.18),E(0,0,.38),.016)),pt.add(ut(J,E(0,-.07,.18),E(0,-.07,.38),.016)),pt.add(st(J,.04,E(0,-.035,.385),[.5,1.15,.5])),pt.add(ut(J,E(0,0,.22),E(0,-.07,.22),.01)),q.add(ut(J,E(0,0,.07),E(.075,.02,.07),.012)),q.add(ut(J,E(.075,.02,.07),E(.075,.02,.2),.016)),q.add(Lt(gt,E(.075,.02,.19),E(.075,.02,.34),.02,.1)),Ut=>{q.rotation.x=.1+Math.sin(Ut*1.7)*.05,pt.position.z=(Math.sin(Ut*2.4)+1)*.05,xt(ct[1],St(q,.04,-.03,.09)),xt(ct[0],St(q,0,-.035,.22+pt.position.z))}}if($==="sax"||$==="ten"){const q=bt(tt,0,.84,.37);q.scale.setScalar($==="ten"?1.12:1);const pt=E(0,-.08,.05),Ut=E(0,-.4,.06),Ft=zt=>pt.clone().lerp(Ut,zt);return q.add(ut(_t,E(0,.01,-.08),E(0,-.03,.03),.009,.013)),q.add(ut(J,E(0,-.03,.03),pt,.016)),q.add(ut(J,pt,Ut,.025,.045)),q.add(st(J,.052,E(0,-.44,.09),[.9,.8,1.15])),q.add(ut(J,E(0,-.43,.13),E(0,-.31,.19),.045,.05)),q.add(Lt(gt,E(0,-.31,.19),E(0,-.21,.26),.05,.095)),[.3,.5,.7].forEach(zt=>q.add(st(Dt,.016,Ft(zt).add(E(0,0,.04))))),zt=>{q.rotation.z=Math.sin(zt*1.8)*.04,q.rotation.x=.05+Math.sin(zt*3.6)*.03;const $t=Ft(.25).add(E(0,0,.05)),Kt=Ft(.68).add(E(0,0,.05));xt(ct[1],St(q,$t.x,$t.y,$t.z)),xt(ct[0],St(q,Kt.x,Kt.y,Kt.z))}}if($==="cla"){const q=bt(tt,0,.84,.36),pt=E(0,0,-.07),Ut=E(0,-.34,.2),Ft=zt=>pt.clone().lerp(Ut,zt);return q.add(ut(_t,pt,Ut,.016,.022)),q.add(Lt(P,Ut,E(0,-.4,.235),.022,.05)),[.35,.5,.65,.8].forEach(zt=>q.add(st(Dt,.012,Ft(zt).add(E(0,.01,.02))))),zt=>{q.rotation.x=Math.sin(zt*2)*.05,q.rotation.y=Math.sin(zt*1.1)*.1;const $t=Ft(.32).add(E(0,0,.03)),Kt=Ft(.72).add(E(0,0,.03));xt(ct[1],St(q,$t.x,$t.y,$t.z)),xt(ct[0],St(q,Kt.x,Kt.y,Kt.z))}}if($==="flu"){const q=bt(tt,.04,.85,.34),pt=E(.06,0,0),Ut=E(-.52,-.03,-.02),Ft=zt=>pt.clone().lerp(Ut,zt);return q.add(ut(Dt,pt,Ut,.015)),[.45,.55,.65,.75,.85].forEach(zt=>q.add(st(Dt,.014,Ft(zt).add(E(0,.013,0))))),at.rotation.z=.16,zt=>{q.rotation.z=Math.sin(zt*1.5)*.05,at.rotation.z=.16;const $t=Ft(.3).add(E(0,-.02,.01)),Kt=Ft(.62).add(E(0,-.02,.01));xt(ct[1],St(q,$t.x,$t.y,$t.z)),xt(ct[0],St(q,Kt.x,Kt.y,Kt.z))}}if($==="vln"){const q=bt(tt,.16,.78,.22);q.rotation.set(.12,.7,0),q.add(st(it,.1,null,[1,.32,1.45])),q.add(ut(_t,E(0,.025,.12),E(0,.03,.3),.013)),q.add(st(rt,.022,E(0,.03,.31)));const pt=new Wt(V(.006,.006),rt);tt.add(pt);const Ut=E(-1,.15,.3).normalize();return Ft=>{at.rotation.z=-.2;const zt=St(q,0,.04,.03),$t=xt(ct[0],zt.clone().addScaledVector(Ut,.13+Math.sin(Ft*2.4)*.1));kt(pt,$t,zt.clone().addScaledVector(zt.clone().sub($t).normalize(),.26)),xt(ct[1],St(q,0,0,.27))}}if($==="pno"){const q=bt(tt,0,0,.44);return q.add(ut(_t,E(-.24,0,-.06),E(.24,.55,.04),.012)),q.add(ut(_t,E(.24,0,-.06),E(-.24,.55,.04),.012)),q.add(Bt(_t,.66,.06,.2,E(0,.58,0))),q.add(Bt(yt,.6,.025,.11,E(0,.62,.04))),[0,1,3,4,5,7,8].forEach(pt=>q.add(Bt(_t,.024,.022,.06,E(-.24+pt*.06,.636,.015)))),pt=>{xt(ct[0],E(-.13+Math.sin(pt*1.3)*.05,.66+Math.max(0,Math.sin(pt*6))*.04,.48)),xt(ct[1],E(.13+Math.sin(pt*1.1)*.05,.66+Math.max(0,Math.sin(pt*6+k))*.04,.48))}}if($==="slb"){const q=new Ze;tt.add(q);const pt=new Wt(new Cr(.075,.014,8,24),Z("#b8312f",{roughness:.6}));q.add(pt);for(let Ut=0;Ut<7;Ut++){const Ft=Ut/7*k*2;q.add(st(J,.03,E(Math.cos(Ft)*.075,Math.sin(Ft)*.075,0)))}return Ut=>{const Ft=xt(ct[0],E(-.32,1.02+Math.sin(Ut*14)*.03,.2));q.position.copy(Ft).add(E(0,.08,0)),q.rotation.set(0,.4,Math.sin(Ut*14)*.3),xt(ct[1],E(.34,.42,.04))}}if($==="bas"){const q=bt(tt,-.05,.5,.31);q.rotation.set(.1,.25,.45);const pt=Z("#a8262a",{roughness:.3}),Ut=Z("#d9a066",{roughness:.5});return q.add(st(pt,.13,null,[1.15,.95,.3])),q.add(st(pt,.07,E(.11,.08,0),[1.3,.7,.3])),q.add(st(pt,.06,E(.1,-.075,0),[1.2,.7,.3])),q.add(st(yt,.075,E(0,.02,.03),[1,.75,.12])),q.add(Bt(_t,.025,.07,.015,E(-.03,0,.045))),q.add(Bt(_t,.025,.07,.015,E(.05,0,.045))),q.add(ut(Ut,E(.1,0,.01),E(.56,0,.01),.022,.018)),q.add(ut(rt,E(.12,0,.025),E(.56,0,.02),.016,.013)),q.add(Bt(Ut,.1,.045,.016,E(.61,0,.01))),[-.012,-.004,.004,.012].forEach(Ft=>q.add(ut(Dt,E(-.07,Ft,.045),E(.57,Ft*.8,.03),.002))),Ft=>{xt(ct[0],St(q,-.02+Math.sin(Ft*9)*.02,.03,.07)),xt(ct[1],St(q,.4+Math.sin(Ft*1.5)*.06,-.01,.05)),q.rotation.z=.45+Math.sin(Ft*2.6)*.03}}if($==="drm"){const q=bt(tt,0,0,.48);q.add(ut(j,E(0,.42,0),E(0,.52,0),.15)),q.add(ut(yt,E(0,.52,0),E(0,.528,0),.15)),q.add(ut(Dt,E(0,0,0),E(0,.42,0),.012)),[0,1,2].forEach(Ft=>{const zt=Ft/3*k*2;q.add(ut(Dt,E(0,.16,0),E(Math.cos(zt)*.13,0,Math.sin(zt)*.13),.008))}),q.add(ut(j,E(.25,.5,-.1),E(.25,.6,-.1),.09)),q.add(ut(yt,E(.25,.6,-.1),E(.25,.606,-.1),.09)),q.add(ut(Dt,E(.25,0,-.1),E(.25,.5,-.1),.01)),q.add(ut(Dt,E(-.28,0,-.12),E(-.28,.74,-.12),.01));const pt=new Wt(V(.02,.16),J);pt.scale.y=.014,pt.position.set(-.28,.75,-.12),q.add(pt);const Ut=[0,1].map(()=>{const Ft=new Wt(V(.007,.01),Ct);return tt.add(Ft),Ft});return Ft=>{[-1,1].forEach((zt,$t)=>{const Kt=Math.max(0,Math.sin(Ft*7+($t?k:0)))*.09,on=xt(ct[$t],E(.1*zt,.63+Kt,.36));kt(Ut[$t],on,on.clone().addScaledVector(E(-.08*zt,-.32+Kt*2.2,1).normalize(),.26))}),pt.rotation.x=.25+Math.sin(Ft*3.5)*.06}}return()=>{}}const Le=new Ze;B.add(Le);const zn=[];function _($,tt,at,ct){$.forEach((xt,q)=>{const pt=l.findIndex(Kr=>Kr[0]===xt);if(pt<0)return;const[Ut,Ft,zt]=l[pt],$t=(q-($.length-1)/2)*ct,Kt=tr({k:Ft,lead:zt,long:p.has(Ut),hair:A[pt%A.length],ph:pt*1.37,tilt:[-.3,.22,-.15,.3][pt%4]});Kt.position.set($t,at,tt),Kt.rotation.y=-$t*.07,Kt.userData.idx=pt,Le.add(Kt);const on=at+.12,ln=new Wt(V(.36,.38),Z(y[a[Ft]],{roughness:.55}));ln.scale.y=on,ln.position.set($t,at-on/2,tt),ln.userData.idx=pt,Le.add(ln);const qe=new Wt(Qr,zt?J:Z("#fff4e0",{roughness:.6}));qe.rotation.x=k/2,qe.position.set($t,at,tt),Le.add(qe);const Un=new Wt(_i,Ki);Un.rotation.x=-k/2,Un.scale.set(1.15,1.15,1),Un.position.set($t,-.118,tt),Le.add(Un),zn.push(Kt),$===R&&G.push({c:Kt,ped:ln,rim:qe})})}const G=[];function O($){G.forEach(({c:tt,ped:at,rim:ct})=>{tt.position.y=$,at.scale.y=$+.12,at.position.y=$-($+.12)/2,ct.position.y=$})}_(R,-.45,.5,.9),_(C,.55,0,.88);const W=new Hi({roughness:.7}),ot=new Hi({roughness:.5}),Ot=new Wt(new Nr(1,1,.14,72),[ot,W,ot]);Ot.scale.set(3.6,1,1.12),Ot.position.set(0,-.19,.05),Le.add(Ot);const Rt={sticker:{top:"#fff3dc",side:"#1b1408",key:16773340,hemi:6969976},program:{top:"#3b2a1d",side:"#d8b25a",key:16770232,hemi:2771514},lights:{top:"#7a4a2a",side:"#3a2012",key:16767400,hemi:3424378},notebook:{top:"#ffffff",side:"#c4302b",key:16777215,hemi:10133680}};f=$=>{const tt=Rt[$]||Rt.sticker;W.color=new wt(tt.top).convertSRGBToLinear(),ot.color=new wt(tt.side).convertSRGBToLinear(),I.color.setHex(tt.key),D.groundColor.setHex(tt.hemi),Et=!0};let Et=!0,qt=!0,Pt=0,It=null,Mt=-1,Gt=0,Ce=0;const ce=matchMedia("(prefers-reduced-motion: reduce)").matches,tn=new bg;function ae(){const $=N.clientWidth,tt=N.clientHeight;if(!$||!tt)return;H.setSize($,tt,!1),S.aspect=$/tt;const at=S.fov*k/180,ct=2*Math.atan(Math.tan(at/2)*S.aspect),xt=Math.max(3.12/Math.tan(ct/2),1.55/Math.tan(at/2)),q=m("#phone").clientWidth>=820;ee=q?window.__og?-.5:-.45:0,We=xt*(q?window.__og?.8:1.12:1),On=q?window.__og?.95:.82:.86,Le.position.x=0,O(q&&!window.__og?.85:.5),pe(),S.updateProjectionMatrix(),Et=!0}let We=8,ee=0,On=.86;function pe(){const $=1+Math.abs(Le.rotation.y-ee)*.55,tt=We*$;S.position.set(0,.8+tt*.36,tt),S.lookAt(0,On,0)}e(new ResizeObserver(ae)).observe(T),ae(),"IntersectionObserver"in window&&e(new IntersectionObserver($=>{qt=$[0].isIntersecting})).observe(T);const Se=new Og,Hn=new nt,Mi=E();function zl($){const tt=N.getBoundingClientRect();Hn.set(($.clientX-tt.left)/tt.width*2-1,-(($.clientY-tt.top)/tt.height)*2+1),Se.setFromCamera(Hn,S);const at=Se.intersectObjects(Le.children,!0)[0];let ct=at&&at.object;for(;ct&&ct.userData.idx===void 0;)ct=ct.parent;if(ct){Mt=ct.userData.idx,Gt=performance.now();const xt=zn.find(q=>q.userData.idx===Mt);xt&&!ce&&(xt.userData.hopT=performance.now()),d(),F.hidden=!1}else Mt=-1,F.hidden=!0;Et=!0}d=()=>{if(Mt<0)return;const $=h==="ko"?0:1,[tt,at,ct]=l[Mt];F.innerHTML=`<b>${tt}</b><span>${s[at][$]}${ct?" · "+n[h].leader:""}</span>`};function Ol(){const $=zn.find(q=>q.userData.idx===Mt);if(!$)return;$.userData.head.getWorldPosition(Mi),Mi.y+=.62,Mi.project(S);const tt=N.getBoundingClientRect(),at=T.getBoundingClientRect(),ct=tt.left-at.left+Math.max(70,Math.min(tt.width-70,(Mi.x+1)/2*tt.width)),xt=tt.top-at.top+Math.max(40,(1-Mi.y)/2*tt.height);F.style.transform=`translate(${ct}px,${xt}px) translate(-50%,-100%)`}N.addEventListener("pointerdown",$=>{It={x:$.clientX,r:Pt,moved:!1,id:$.pointerId}}),N.addEventListener("pointermove",$=>{if(!It)return;const tt=$.clientX-It.x;!It.moved&&Math.abs(tt)>8&&(It.moved=!0)}),N.addEventListener("pointerup",$=>{It&&!It.moved&&zl($),It=null}),N.addEventListener("pointercancel",()=>{It=null});let nr=null;N.addEventListener("pointermove",$=>{$.pointerType==="mouse"&&(nr||requestAnimationFrame(()=>{const tt=nr;nr=null;const at=N.getBoundingClientRect();Hn.set((tt.clientX-at.left)/at.width*2-1,-((tt.clientY-at.top)/at.height)*2+1),Se.setFromCamera(Hn,S);const ct=Se.intersectObjects(Le.children,!0)[0];let xt=ct&&ct.object;for(;xt&&xt.userData.idx===void 0;)xt=xt.parent;N.style.cursor=xt?"pointer":"default"}),nr=$)}),N.addEventListener("pointerleave",()=>{N.style.cursor="default"}),function $(){if(!r){H.dispose();return}requestAnimationFrame($);const tt=Math.min(tn.getDelta(),.05);if(!qt||document.hidden||(!It&&Math.abs(Pt)>5e-4&&(Pt*=.94,Et=!0),ce||(Ce+=tt,Et=!0),Mt>=0&&performance.now()-Gt>4500&&(Mt=-1,F.hidden=!0),!Et))return;Et=!1,Le.rotation.y=ee,pe();const at=performance.now();zn.forEach(ct=>{let xt=0;const q=ct.userData.hopT;if(q!=null){const pt=(at-q)/550;pt<1?(xt=Math.sin(pt*k)*.22,Et=!0):ct.userData.hopT=null}ct.userData.update(Ce,xt)}),Mt>=0&&Ol(),H.render(B,S)}()}try{z(),f(u)}catch(T){console.error(T);const N=document.getElementById("band3d");N&&(N.hidden=!0)}return()=>{r=!1,t.forEach(T=>T.disconnect())}}const qg={class:"ddt"},Xg=U("main",{class:"phone",id:"phone"},[U("canvas",{class:"snow",id:"snow","aria-hidden":"true"}),U("div",{class:"topbanner"},[U("span",{class:"tb-name"},"두둥탁! Jazz Band"),U("div",{class:"lang",role:"group","aria-label":"Language"},[U("button",{type:"button",id:"lang-ko","data-lang":"ko",lang:"ko"},"한국어"),U("button",{type:"button",id:"lang-en","data-lang":"en",lang:"en"},"English")])]),U("div",{class:"inv"},[U("div",{class:"lights-top",id:"lightsTop","aria-hidden":"true"}),U("div",{class:"hero"},[U("div",{class:"hero-art"},[U("img",{class:"logo",src:Yl,alt:"두둥탁! Jazz Band",width:"640",height:"414"}),U("div",{class:"band3d",id:"band3d"},[U("canvas",{id:"band","aria-label":"3D 두둥탁 band"}),U("div",{class:"tag",id:"tag",hidden:""}),U("div",{class:"hint","data-t":"tapHint"})])]),U("div",{class:"hero-info"},[U("div",{class:"script"},"Merry Christmas"),U("h1",{class:"h1","data-t":"headline"}),U("p",{class:"lede","data-t":"lede"}),U("ul",{class:"facts"},[U("li",{class:"fact"},[U("span",{class:"ic","aria-hidden":"true"},[U("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},[U("rect",{x:"3.5",y:"5",width:"17",height:"15.5",rx:"2.5"}),U("path",{d:"M3.5 10h17M8 3v4M16 3v4"})])]),U("div",null,[U("b",{"data-t":"fDate"}),U("span",{id:"dday"})])]),U("li",{class:"fact"},[U("span",{class:"ic","aria-hidden":"true"},[U("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},[U("circle",{cx:"12",cy:"12",r:"8.5"}),U("path",{d:"M12 7.5V12l3 2"})])]),U("div",null,[U("b",{"data-t":"fTime"}),U("span",{"data-t":"fTimeSub"})])]),U("li",{class:"fact"},[U("span",{class:"ic","aria-hidden":"true"},[U("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},[U("path",{d:"M12 21.5s7-6 7-11.8a7 7 0 1 0-14 0c0 5.8 7 11.8 7 11.8z"}),U("circle",{cx:"12",cy:"9.7",r:"2.5"})])]),U("div",null,[U("b",{"data-t":"placeName"}),U("span",null,[Xl("3821 Lister St, Burnaby · "),U("button",{type:"button",class:"link",id:"toMap","data-t":"seeMap"})])])]),U("li",{class:"fact fact-pot"},[U("span",{class:"ic","aria-hidden":"true"},[U("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},[U("path",{d:"M3 11h18a9 9 0 0 1-18 0z"}),U("path",{d:"M8 7.5c0-1.5 1-2 1-3.5M12 7.5c0-1.5 1-2 1-3.5M16 7.5c0-1.5 1-2 1-3.5"})])]),U("div",null,[U("b",{"data-t":"fPot"}),U("span",{"data-t":"fPotSub"})])])])])]),U("div",{class:"body-grid"},[U("svg",{class:"garland",viewBox:"0 0 190 34","aria-hidden":"true"}),U("section",{class:"ddt-sec","aria-labelledby":"h-prog"},[U("div",{class:"en"},"Program"),U("h2",{id:"h-prog","data-t":"hProg"}),U("ol",{class:"timeline",id:"prog"})]),U("svg",{class:"garland",viewBox:"0 0 190 34","aria-hidden":"true"}),U("section",{class:"ddt-sec","aria-labelledby":"h-place"},[U("div",{class:"en"},"Getting there"),U("h2",{id:"h-place","data-t":"hPlace"}),U("div",{class:"place-name","data-t":"placeName"}),U("div",{class:"place-sub","data-t":"placeSub"}),U("div",{class:"addr"},[U("span",{id:"addr"},"3821 Lister St, Burnaby, BC"),U("button",{type:"button",class:"copy",id:"copy","data-t":"copy"})]),U("div",{class:"maps"},[U("a",{class:"btn btn-a",target:"_blank",rel:"noopener",href:"https://maps.apple.com/?q=Korean%20United%20Church%20of%20Vancouver&address=3821%20Lister%20St%2C%20Burnaby%2C%20BC"},[U("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[U("path",{d:"M16.4 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.3.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.8-1-2.8-4.1zM14 5.1c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z"})]),U("span",{"data-t":"apple"})]),U("a",{class:"btn btn-g",target:"_blank",rel:"noopener",href:"https://www.google.com/maps/search/?api=1&query=Korean%20United%20Church%20of%20Vancouver%2C%203821%20Lister%20St%2C%20Burnaby%2C%20BC"},[U("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[U("path",{d:"M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"}),U("circle",{cx:"12",cy:"10",r:"2.5"})]),U("span",{"data-t":"google"})])]),U("ul",{class:"notes"},[U("li",{"data-t":"parking"}),U("li",{"data-t":"doors"})])]),U("svg",{class:"garland",viewBox:"0 0 190 34","aria-hidden":"true"}),U("section",{class:"ddt-sec","aria-labelledby":"h-pot"},[U("div",{class:"en"},"Potluck"),U("h2",{id:"h-pot","data-t":"hPot"}),U("div",{class:"pot-main","data-t":"potMain"}),U("div",{class:"pot-sub","data-t":"potSub"}),U("div",{class:"pot-tip","data-t":"potTip"})]),U("svg",{class:"garland",viewBox:"0 0 190 34","aria-hidden":"true"}),U("section",{class:"ddt-sec","aria-labelledby":"h-mem"},[U("div",{class:"en"},"The band"),U("h2",{id:"h-mem","data-t":"hMem"}),U("p",{class:"band-intro","data-t":"memIntro"}),U("div",{class:"legend",id:"legend","aria-hidden":"true"}),U("ul",{class:"members",id:"members"})])]),U("svg",{class:"garland",viewBox:"0 0 190 34","aria-hidden":"true"}),U("footer",{class:"finale"},[U("div",{class:"fin-script","data-t":"footScript"}),U("p",{class:"fin-sub","data-t":"footSub"}),U("div",{class:"fin-scene",id:"finScene","aria-hidden":"true"},[U("span",{class:"moon"}),U("span",{class:"shoot"}),U("svg",{class:"hill-b",viewBox:"0 0 100 40",preserveAspectRatio:"none"},[U("path",{d:"M0 20 Q 22 6 48 16 T 100 12 V40 H0Z",fill:"#16214a"})]),U("svg",{class:"church",viewBox:"0 0 160 124"},[U("defs",null,[U("filter",{id:"fglow",x:"-50%",y:"-50%",width:"200%",height:"200%"},[U("feGaussianBlur",{stdDeviation:"5"})])]),U("g",{fill:"#ffcf7a",filter:"url(#fglow)",opacity:".85",class:"win"},[U("rect",{x:"42",y:"76",width:"14",height:"22",rx:"7"}),U("rect",{x:"104",y:"76",width:"14",height:"22",rx:"7"}),U("rect",{x:"69",y:"90",width:"22",height:"34",rx:"11"}),U("circle",{cx:"80",cy:"44",r:"6"})]),U("rect",{x:"70",y:"30",width:"20",height:"40",fill:"#0b1228"}),U("polygon",{points:"65,32 80,10 95,32",fill:"#0b1228"}),U("path",{d:"M65 32 L80 10 L95 32",fill:"none",stroke:"#eef3ff","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}),U("path",{d:"M80 0 V10 M75.5 4 H84.5",stroke:"#ffd36b","stroke-width":"2.4","stroke-linecap":"round"}),U("rect",{x:"30",y:"62",width:"100",height:"62",fill:"#0d1530"}),U("polygon",{points:"22,64 80,34 138,64",fill:"#0b1228"}),U("path",{d:"M22 64 L80 34 L138 64",fill:"none",stroke:"#eef3ff","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),U("g",{class:"win"},[U("rect",{x:"44",y:"78",width:"10",height:"18",rx:"5",fill:"#ffcf7a"}),U("rect",{x:"106",y:"78",width:"10",height:"18",rx:"5",fill:"#ffcf7a"}),U("rect",{x:"71",y:"92",width:"18",height:"32",rx:"9",fill:"#ffb547"}),U("circle",{cx:"80",cy:"44",r:"4.5",fill:"#ffcf7a"})])]),U("svg",{class:"hill-f",viewBox:"0 0 100 40",preserveAspectRatio:"none"},[U("defs",null,[U("linearGradient",{id:"snowg",x1:"0",y1:"0",x2:"0",y2:"1"},[U("stop",{offset:"0","stop-color":"#eef3ff"}),U("stop",{offset:"1","stop-color":"#bfcbea"})])]),U("path",{d:"M0 22 Q 30 8 58 18 T 100 14 V40 H0Z",fill:"url(#snowg)"})]),U("div",{class:"fin-credit"},"두둥탁! Jazz Band")])])])],-1),Yg=[Xg],Ho="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Gowun+Dodum&family=Dancing+Script:wght@600&display=swap",Zg=kl({__name:"DudungtakView",setup(r){let t,e="";return Gl(()=>{if(!document.querySelector(`link[href="${Ho}"]`)){const n=document.createElement("link");n.rel="stylesheet",n.href=Ho,document.head.appendChild(n)}e=document.documentElement.lang,t=Wg()}),Vl(()=>{t==null||t(),document.documentElement.lang=e}),(n,i)=>(ql(),Wl("div",qg,Yg))}});export{Zg as default};

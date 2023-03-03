try{
var sha256=function r(o){function f(r,o){return r>>>o|r<<32-o}for(var t,n,a=Math.pow,c=a(2,32),e="length",i="",h=[],u=8*o[e],v=r.h=r.h||[],l=r.k=r.k||[],s=l[e],g={},k=2;s<64;k++)if(!g[k]){for(t=0;t<313;t+=k)g[t]=k;v[s]=a(k,.5)*c|0,l[s++]=a(k,1/3)*c|0}for(o+="";o[e]%64-56;)o+="\0";for(t=0;t<o[e];t++){if((n=o.charCodeAt(t))>>8)return;h[t>>2]|=n<<(3-t)%4*8}for(h[h[e]]=u/c|0,h[h[e]]=u,n=0;n<h[e];){var d=h.slice(n,n+=16),p=v;for(v=v.slice(0,8),t=0;t<64;t++){var w=d[t-15],A=d[t-2],C=v[0],M=v[4],A=v[7]+(f(M,6)^f(M,11)^f(M,25))+(M&v[5]^~M&v[6])+l[t]+(d[t]=t<16?d[t]:d[t-16]+(f(w,7)^f(w,18)^w>>>3)+d[t-7]+(f(A,17)^f(A,19)^A>>>10)|0);(v=[A+((f(C,2)^f(C,13)^f(C,22))+(C&v[1]^C&v[2]^v[1]&v[2]))|0].concat(v))[4]=v[4]+A|0}for(t=0;t<8;t++)v[t]=v[t]+p[t]|0}for(t=0;t<8;t++)for(n=3;n+1;n--){var S=v[t]>>8*n&255;i+=(S<16?0:"")+S.toString(16)}return i};
function hash(e,f){
  if((sha256(f).replace(/\D/g,''))%3===1){
    e=sha1(e).replace(/[e]/g,'!')//+envAR.salt;
  }else if((sha256(f).replace(/\D/g,''))%3===2){
      e=sha256(e)+sha1(e)+(sha256(f)+sha1(e))//+envAR.salt;
  }else if((sha256(f).replace(/\D/g,''))%3===3){
    for(var i=0;i<2;i++){
      e=(sha256(e)+sha1(e)).replace(/\D/g,'')+(sha256(f)+sha1(e+f)).replace(/\D/g,'')//+envAR.salt;
    }
  }
  return e;
}


function sha1(msg){function rotate_left(n,s){var t4=(n<<s)|(n>>>(32-s));return t4;};function lsb_hex(val){var str='';var i;var vh;var vl;for(i=0;i<=6;i+=2){vh=(val>>>(i*4+4))&0x0f;vl=(val>>>(i*4))&0x0f;str+=vh.toString(16)+vl.toString(16);}
return str;};function cvt_hex(val){var str='';var i;var v;for(i=7;i>=0;i--){v=(val>>>(i*4))&0x0f;str+=v.toString(16);}
return str;};function Utf8Encode(string){string=string.replace(/\r\n/g,'\n');var utftext='';for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;};var blockstart;var i,j;var W=new Array(80);var H0=0x67452301;var H1=0xEFCDAB89;var H2=0x98BADCFE;var H3=0x10325476;var H4=0xC3D2E1F0;var A,B,C,D,E;var temp;msg=Utf8Encode(msg);var msg_len=msg.length;var word_array=new Array();for(i=0;i<msg_len-3;i+=4){j=msg.charCodeAt(i)<<24|msg.charCodeAt(i+1)<<16|msg.charCodeAt(i+2)<<8|msg.charCodeAt(i+3);word_array.push(j);}
switch(msg_len % 4){case 0:i=0x080000000;break;case 1:i=msg.charCodeAt(msg_len-1)<<24|0x0800000;break;case 2:i=msg.charCodeAt(msg_len-2)<<24|msg.charCodeAt(msg_len-1)<<16|0x08000;break;case 3:i=msg.charCodeAt(msg_len-3)<<24|msg.charCodeAt(msg_len-2)<<16|msg.charCodeAt(msg_len-1)<<8|0x80;break;}
word_array.push(i);while((word_array.length % 16)!=14)word_array.push(0);word_array.push(msg_len>>>29);word_array.push((msg_len<<3)&0x0ffffffff);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++)W[i]=word_array[blockstart+i];for(i=16;i<=79;i++)W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<=19;i++){temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=20;i<=39;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=40;i<=59;i++){temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=60;i<=79;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
H0=(H0+A)&0x0ffffffff;H1=(H1+B)&0x0ffffffff;H2=(H2+C)&0x0ffffffff;H3=(H3+D)&0x0ffffffff;H4=(H4+E)&0x0ffffffff;}
var temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4);return temp.toLowerCase();}
function rg32(input) {
	var a = [];
	var b = [];
	
	function beltmill() {
		var ap, x, y, r, q, c, i;
		ap = [];
		q = [];

		for(c = 0; c < 3; c++) {
			q[c] = b[c * 13 + 12];
		}
		for(i = 12; i > 0; i--) {
			for(c = 0; c < 3; c++) {
				b[c * 13 + i] = b[c * 13 + i - 1];
			}
		}
		for(c = 0; c < 3; c++) {
			b[c * 13] = q[c];
		}
		for(c = 0; c < 12; c++) {
			i = c + 1 + ((c % 3) * 13);
			b[i] ^= a[c + 1];
		}
		for(c = 0; c < 19; c++) { // RG32 Mill
			y = (c * 7) % 19;
			r = (((c * c) + c) / 2) % 32;
			x = a[y] ^ (a[(y + 1) % 19] | 
					(a[(y + 2) % 19] ^ 0xffffffff));
			ap[c] = (x >>> r) | (x << (32 - r));
		}	
		for(c = 0; c < 19; c++) {
			a[c] = ap[c] ^ ap[(c + 1) % 19] ^ ap[(c + 4) % 19];
		}
		a[0] ^= 1;

		for(c = 0; c < 3; c++) {
			a[c+13]^=q[c];
		}

	}

	// This is a public function used to run the belt+mill a given
	// number of times.  Each iteration is the work needed to generate
	// 64 bits worth of pseudo-random numbers.  This is used for
	// systems (such as password crypting) where we want to expend
	// more work making a given pseudo-random number, to make dictionary
	// attacks and rainbow table generation more difficult.
	this.runbelt = function(iterations) {
		var c;
		for(c = 0; c < iterations; c++) {
			beltmill()
		}
	}

	place = 1;
	function nextword() {
		var output = a[place];
		if(output < 0) {
			output += 0x100000000;
		}
		place++;
		if(place > 2) {
			place = 1;
			beltmill();
		}
		return output;
	}

	this.foo = input;

	// Return the next raw 32-bit number rg32 gives us
	this.rng = function() {
		var endian;
		endian = nextword();
		endian = ((endian & 0xff000000) >>> 24) |
			 ((endian & 0x00ff0000) >>>  8) |
			 ((endian & 0x0000ff00) <<  8) |
			 ((endian & 0x000000ff) << 24);
		return endian;
	};

	this.hexnumber = function() {
        	var z = this.rng();
        	if(z < 0) {
        	        z += 0x100000000;
        	}
        	return z.toString(16);
	}

	this.hash256 = function() {
		var z = "";
		for(var a = 0; a < 8; a++) {
			var y = this.hexnumber();
			// I find it amusing how many Node programs
			// broke because Javascript developers were too 
			// lazy to write the following one line of code
			// (As per http://archive.is/P0vJS )
			while(y.length < 8) { y = "0" + y; }
			z += y;
		}
		return z;
	}

	// Constructor: Input map
	var s, q, c, r, x, d, v, place;
	s = [];
	v = 0;
	d = 0;

	for(c = 0; c < 19; c++) {
		a[c] = 0;
	}
	for(c = 0; c < 39; c++) {
		b[c] = 0;
	}
	
	for(v = 0;v <= input.length;) {
		for(c = 0 ; c < 3 ; c++) { // Blank input words 
			s[c] = 0;
		}
		for(r = 0; r < 3; r++) {
			for(q = 0; q < 4; q++) {
				if(v < input.length) {
					x = input.charCodeAt(v);

					// While this stops high bit
					// characters from corrupting
					// the hash state, strings
					// with Unicode given to rg32
					// should be converted in to
					// UTF-8 first
					x &= 0xff;

					v++;
					s[r] |= x << (q * 8);
				} else {
					s[r] |= 1 << (q * 8);
					for(c = 0; c < 3; c++) {
						b[c * 13] ^= s[c];
						a[16 + c] ^= s[c];
					}	
					for(c = 0; c < 16; c++) {
						beltmill();
					}
					beltmill();
					beltmill();
					return;
				}
			}
		}
		for(c = 0; c < 3; c++) {
			b[c * 13] ^= s[c];
			a[16 + c] ^= s[c];
		}	
		beltmill();
	}

	// 16 blank rounds
	for(c = 0; c < 16; c++) {
		beltmill();
	}

}


}catch(e){logger.FATAL(e)}
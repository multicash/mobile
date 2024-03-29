'use strict'; function q (a) { throw a } var s = void 0; var u = !1; var sjcl = { cipher: {}, hash: {}, keyexchange: {}, mode: {}, misc: {}, codec: {}, exception: { corrupt: function (a) { this.toString = function () { return 'CORRUPT: ' + this.message }; this.message = a }, invalid: function (a) { this.toString = function () { return 'INVALID: ' + this.message }; this.message = a }, bug: function (a) { this.toString = function () { return 'BUG: ' + this.message }; this.message = a }, notReady: function (a) { this.toString = function () { return 'NOT READY: ' + this.message }; this.message = a } } }
typeof module !== 'undefined' && module.exports && (module.exports = sjcl); typeof define === 'function' && define([], function () { return sjcl })
sjcl.cipher.aes = function (a) {
  this.k[0][0][0] || this.D(); var b; var c; var d; var e; var f = this.k[0][4]; var g = this.k[1]; b = a.length; var h = 1; b !== 4 && (b !== 6 && b !== 8) && q(new sjcl.exception.invalid('invalid aes key size')); this.b = [d = a.slice(0), e = []]; for (a = b; a < 4 * b + 28; a++) { c = d[a - 1]; if (a % b === 0 || b === 8 && a % b === 4)c = f[c >>> 24] << 24 ^ f[c >> 16 & 255] << 16 ^ f[c >> 8 & 255] << 8 ^ f[c & 255], a % b === 0 && (c = c << 8 ^ c >>> 24 ^ h << 24, h = h << 1 ^ 283 * (h >> 7)); d[a] = d[a - b] ^ c } for (b = 0; a; b++, a--) {
    c = d[b & 3 ? a : a - 4], e[b] = a <= 4 || b < 4 ? c : g[0][f[c >>> 24]] ^ g[1][f[c >> 16 & 255]] ^ g[2][f[c >> 8 & 255]] ^ g[3][f[c &
255]]
  }
}
sjcl.cipher.aes.prototype = {
  encrypt: function (a) { return w(this, a, 0) },
  decrypt: function (a) { return w(this, a, 1) },
  k: [[[], [], [], [], []], [[], [], [], [], []]],
  D: function () {
    var a = this.k[0]; var b = this.k[1]; var c = a[4]; var d = b[4]; var e; var f; var g; var h = []; var l = []; var k; var n; var m; var p; for (e = 0; e < 0x100; e++)l[(h[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e; for (f = g = 0; !c[f]; f ^= k || 1, g = l[g] || 1) { m = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4; m = m >> 8 ^ m & 255 ^ 99; c[f] = m; d[m] = f; n = h[e = h[k = h[f]]]; p = 0x1010101 * n ^ 0x10001 * e ^ 0x101 * k ^ 0x1010100 * f; n = 0x101 * h[m] ^ 0x1010100 * m; for (e = 0; e < 4; e++)a[e][f] = n = n << 24 ^ n >>> 8, b[e][m] = p = p << 24 ^ p >>> 8 } for (e =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   0; e < 5; e++)a[e] = a[e].slice(0), b[e] = b[e].slice(0)
  }
}
function w (a, b, c) {
  b.length !== 4 && q(new sjcl.exception.invalid('invalid aes block size')); var d = a.b[c]; var e = b[0] ^ d[0]; var f = b[c ? 3 : 1] ^ d[1]; var g = b[2] ^ d[2]; b = b[c ? 1 : 3] ^ d[3]; var h; var l; var k; var n = d.length / 4 - 2; var m; var p = 4; var t = [0, 0, 0, 0]; h = a.k[c]; a = h[0]; var r = h[1]; var v = h[2]; var y = h[3]; var z = h[4]; for (m = 0; m < n; m++)h = a[e >>> 24] ^ r[f >> 16 & 255] ^ v[g >> 8 & 255] ^ y[b & 255] ^ d[p], l = a[f >>> 24] ^ r[g >> 16 & 255] ^ v[b >> 8 & 255] ^ y[e & 255] ^ d[p + 1], k = a[g >>> 24] ^ r[b >> 16 & 255] ^ v[e >> 8 & 255] ^ y[f & 255] ^ d[p + 2], b = a[b >>> 24] ^ r[e >> 16 & 255] ^ v[f >> 8 & 255] ^ y[g & 255] ^ d[p + 3], p += 4, e = h, f = l, g = k; for (m = 0; m <
4; m++)t[c ? 3 & -m : m] = z[e >>> 24] << 24 ^ z[f >> 16 & 255] << 16 ^ z[g >> 8 & 255] << 8 ^ z[b & 255] ^ d[p++], h = e, e = f, f = g, g = b, b = h; return t
}
sjcl.bitArray = {
  bitSlice: function (a, b, c) { a = sjcl.bitArray.P(a.slice(b / 32), 32 - (b & 31)).slice(1); return c === s ? a : sjcl.bitArray.clamp(a, c - b) },
  extract: function (a, b, c) { var d = Math.floor(-b - c & 31); return ((b + c - 1 ^ b) & -32 ? a[b / 32 | 0] << 32 - d ^ a[b / 32 + 1 | 0] >>> d : a[b / 32 | 0] >>> d) & (1 << c) - 1 },
  concat: function (a, b) { if (a.length === 0 || b.length === 0) return a.concat(b); var c = a[a.length - 1]; var d = sjcl.bitArray.getPartial(c); return d === 32 ? a.concat(b) : sjcl.bitArray.P(b, d, c | 0, a.slice(0, a.length - 1)) },
  bitLength: function (a) {
    var b = a.length; return b ===
  0 ? 0 : 32 * (b - 1) + sjcl.bitArray.getPartial(a[b - 1])
  },
  clamp: function (a, b) { if (32 * a.length < b) return a; a = a.slice(0, Math.ceil(b / 32)); var c = a.length; b &= 31; c > 0 && b && (a[c - 1] = sjcl.bitArray.partial(b, a[c - 1] & 2147483648 >> b - 1, 1)); return a },
  partial: function (a, b, c) { return a === 32 ? b : (c ? b | 0 : b << 32 - a) + 0x10000000000 * a },
  getPartial: function (a) { return Math.round(a / 0x10000000000) || 32 },
  equal: function (a, b) {
    if (sjcl.bitArray.bitLength(a) !== sjcl.bitArray.bitLength(b)) return u; var c = 0; var d; for (d = 0; d < a.length; d++)c |= a[d] ^ b[d]; return c ===
    0
  },
  P: function (a, b, c, d) { var e; e = 0; for (d === s && (d = []); b >= 32; b -= 32)d.push(c), c = 0; if (b === 0) return d.concat(a); for (e = 0; e < a.length; e++)d.push(c | a[e] >>> b), c = a[e] << 32 - b; e = a.length ? a[a.length - 1] : 0; a = sjcl.bitArray.getPartial(e); d.push(sjcl.bitArray.partial(b + a & 31, b + a > 32 ? c : d.pop(), 1)); return d },
  l: function (a, b) { return [a[0] ^ b[0], a[1] ^ b[1], a[2] ^ b[2], a[3] ^ b[3]] },
  byteswapM: function (a) { var b, c; for (b = 0; b < a.length; ++b)c = a[b], a[b] = c >>> 24 | c >>> 8 & 0xff00 | (c & 0xff00) << 8 | c << 24; return a }
}
sjcl.codec.utf8String = { fromBits: function (a) { var b = ''; var c = sjcl.bitArray.bitLength(a); var d; var e; for (d = 0; d < c / 8; d++)(d & 3) === 0 && (e = a[d / 4]), b += String.fromCharCode(e >>> 24), e <<= 8; return decodeURIComponent(escape(b)) }, toBits: function (a) { a = unescape(encodeURIComponent(a)); var b = []; var c; var d = 0; for (c = 0; c < a.length; c++)d = d << 8 | a.charCodeAt(c), (c & 3) === 3 && (b.push(d), d = 0); c & 3 && b.push(sjcl.bitArray.partial(8 * (c & 3), d)); return b } }
sjcl.codec.hex = { fromBits: function (a) { var b = ''; var c; for (c = 0; c < a.length; c++)b += ((a[c] | 0) + 0xf00000000000).toString(16).substr(4); return b.substr(0, sjcl.bitArray.bitLength(a) / 4) }, toBits: function (a) { var b; var c = []; var d; a = a.replace(/\s|0x/g, ''); d = a.length; a += '00000000'; for (b = 0; b < a.length; b += 8)c.push(parseInt(a.substr(b, 8), 16) ^ 0); return sjcl.bitArray.clamp(c, 4 * d) } }
sjcl.codec.base64 = {
  J: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  fromBits: function (a, b, c) { var d = ''; var e = 0; var f = sjcl.codec.base64.J; var g = 0; var h = sjcl.bitArray.bitLength(a); c && (f = f.substr(0, 62) + '-_'); for (c = 0; 6 * d.length < h;)d += f.charAt((g ^ a[c] >>> e) >>> 26), e < 6 ? (g = a[c] << 6 - e, e += 26, c++) : (g <<= 6, e -= 6); for (;d.length & 3 && !b;)d += '='; return d },
  toBits: function (a, b) {
    a = a.replace(/\s|=/g, ''); var c = []; var d; var e = 0; var f = sjcl.codec.base64.J; var g = 0; var h; b && (f = f.substr(0, 62) + '-_'); for (d = 0; d < a.length; d++) {
      h = f.indexOf(a.charAt(d)),
      h < 0 && q(new sjcl.exception.invalid("this isn't base64!")), e > 26 ? (e -= 26, c.push(g ^ h >>> e), g = h << 32 - e) : (e += 6, g ^= h << 32 - e)
    }e & 56 && c.push(sjcl.bitArray.partial(e & 56, g, 1)); return c
  }
}; sjcl.codec.base64url = { fromBits: function (a) { return sjcl.codec.base64.fromBits(a, 1, 1) }, toBits: function (a) { return sjcl.codec.base64.toBits(a, 1) } }; sjcl.hash.sha256 = function (a) { this.b[0] || this.D(); a ? (this.r = a.r.slice(0), this.o = a.o.slice(0), this.h = a.h) : this.reset() }; sjcl.hash.sha256.hash = function (a) { return (new sjcl.hash.sha256()).update(a).finalize() }
sjcl.hash.sha256.prototype = {
  blockSize: 512,
  reset: function () { this.r = this.N.slice(0); this.o = []; this.h = 0; return this },
  update: function (a) { typeof a === 'string' && (a = sjcl.codec.utf8String.toBits(a)); var b; var c = this.o = sjcl.bitArray.concat(this.o, a); b = this.h; a = this.h = b + sjcl.bitArray.bitLength(a); for (b = 512 + b & -512; b <= a; b += 512)x(this, c.splice(0, 16)); return this },
  finalize: function () {
    var a; var b = this.o; var c = this.r; var b = sjcl.bitArray.concat(b, [sjcl.bitArray.partial(1, 1)]); for (a = b.length + 2; a & 15; a++)b.push(0); b.push(Math.floor(this.h /
    4294967296)); for (b.push(this.h | 0); b.length;)x(this, b.splice(0, 16)); this.reset(); return c
  },
  N: [],
  b: [],
  D: function () { function a (a) { return 0x100000000 * (a - Math.floor(a)) | 0 } var b = 0; var c = 2; var d; a:for (;b < 64; c++) { for (d = 2; d * d <= c; d++) if (c % d === 0) continue a; b < 8 && (this.N[b] = a(Math.pow(c, 0.5))); this.b[b] = a(Math.pow(c, 1 / 3)); b++ } }
}
function x (a, b) {
  var c; var d; var e; var f = b.slice(0); var g = a.r; var h = a.b; var l = g[0]; var k = g[1]; var n = g[2]; var m = g[3]; var p = g[4]; var t = g[5]; var r = g[6]; var v = g[7]; for (c = 0; c < 64; c++)c < 16 ? d = f[c] : (d = f[c + 1 & 15], e = f[c + 14 & 15], d = f[c & 15] = (d >>> 7 ^ d >>> 18 ^ d >>> 3 ^ d << 25 ^ d << 14) + (e >>> 17 ^ e >>> 19 ^ e >>> 10 ^ e << 15 ^ e << 13) + f[c & 15] + f[c + 9 & 15] | 0), d = d + v + (p >>> 6 ^ p >>> 11 ^ p >>> 25 ^ p << 26 ^ p << 21 ^ p << 7) + (r ^ p & (t ^ r)) + h[c], v = r, r = t, t = p, p = m + d | 0, m = n, n = k, k = l, l = d + (k & n ^ m & (k ^ n)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0; g[0] = g[0] + l | 0; g[1] = g[1] + k | 0; g[2] = g[2] + n | 0; g[3] = g[3] + m | 0; g[4] = g[4] + p | 0; g[5] = g[5] + t | 0; g[6] =
  g[6] + r | 0; g[7] = g[7] + v | 0
}
sjcl.mode.ccm = {
  name: 'ccm',
  encrypt: function (a, b, c, d, e) { var f; var g = b.slice(0); var h = sjcl.bitArray; var l = h.bitLength(c) / 8; var k = h.bitLength(g) / 8; e = e || 64; d = d || []; l < 7 && q(new sjcl.exception.invalid('ccm: iv must be at least 7 bytes')); for (f = 2; f < 4 && k >>> 8 * f; f++);f < 15 - l && (f = 15 - l); c = h.clamp(c, 8 * (15 - f)); b = sjcl.mode.ccm.L(a, b, c, d, e, f); g = sjcl.mode.ccm.p(a, g, c, b, e, f); return h.concat(g.data, g.tag) },
  decrypt: function (a, b, c, d, e) {
    e = e || 64; d = d || []; var f = sjcl.bitArray; var g = f.bitLength(c) / 8; var h = f.bitLength(b); var l = f.clamp(b, h - e); var k = f.bitSlice(b,
      h - e); var h = (h - e) / 8; g < 7 && q(new sjcl.exception.invalid('ccm: iv must be at least 7 bytes')); for (b = 2; b < 4 && h >>> 8 * b; b++);b < 15 - g && (b = 15 - g); c = f.clamp(c, 8 * (15 - b)); l = sjcl.mode.ccm.p(a, l, c, k, e, b); a = sjcl.mode.ccm.L(a, l.data, c, d, e, b); f.equal(l.tag, a) || q(new sjcl.exception.corrupt("ccm: tag doesn't match")); return l.data
  },
  L: function (a, b, c, d, e, f) {
    var g = []; var h = sjcl.bitArray; var l = h.l; e /= 8; (e % 2 || e < 4 || e > 16) && q(new sjcl.exception.invalid('ccm: invalid tag length')); (d.length > 0xffffffff || b.length > 0xffffffff) && q(new sjcl.exception.bug("ccm: can't deal with 4GiB or more data"))
    f = [h.partial(8, (d.length ? 64 : 0) | e - 2 << 2 | f - 1)]; f = h.concat(f, c); f[3] |= h.bitLength(b) / 8; f = a.encrypt(f); if (d.length) { c = h.bitLength(d) / 8; c <= 65279 ? g = [h.partial(16, c)] : c <= 0xffffffff && (g = h.concat([h.partial(16, 65534)], [c])); g = h.concat(g, d); for (d = 0; d < g.length; d += 4)f = a.encrypt(l(f, g.slice(d, d + 4).concat([0, 0, 0]))) } for (d = 0; d < b.length; d += 4)f = a.encrypt(l(f, b.slice(d, d + 4).concat([0, 0, 0]))); return h.clamp(f, 8 * e)
  },
  p: function (a, b, c, d, e, f) {
    var g; var h = sjcl.bitArray; g = h.l; var l = b.length; var k = h.bitLength(b); c = h.concat([h.partial(8,
      f - 1)], c).concat([0, 0, 0]).slice(0, 4); d = h.bitSlice(g(d, a.encrypt(c)), 0, e); if (!l) return { tag: d, data: [] }; for (g = 0; g < l; g += 4)c[3]++, e = a.encrypt(c), b[g] ^= e[0], b[g + 1] ^= e[1], b[g + 2] ^= e[2], b[g + 3] ^= e[3]; return { tag: d, data: h.clamp(b, k) }
  }
}
sjcl.mode.ocb2 = {
  name: 'ocb2',
  encrypt: function (a, b, c, d, e, f) {
    sjcl.bitArray.bitLength(c) !== 128 && q(new sjcl.exception.invalid('ocb iv must be 128 bits')); var g; var h = sjcl.mode.ocb2.H; var l = sjcl.bitArray; var k = l.l; var n = [0, 0, 0, 0]; c = h(a.encrypt(c)); var m; var p = []; d = d || []; e = e || 64; for (g = 0; g + 4 < b.length; g += 4)m = b.slice(g, g + 4), n = k(n, m), p = p.concat(k(c, a.encrypt(k(c, m)))), c = h(c); m = b.slice(g); b = l.bitLength(m); g = a.encrypt(k(c, [0, 0, 0, b])); m = l.clamp(k(m.concat([0, 0, 0]), g), b); n = k(n, k(m.concat([0, 0, 0]), g)); n = a.encrypt(k(n, k(c, h(c)))); d.length &&
  (n = k(n, f ? d : sjcl.mode.ocb2.pmac(a, d))); return p.concat(l.concat(m, l.clamp(n, e)))
  },
  decrypt: function (a, b, c, d, e, f) {
    sjcl.bitArray.bitLength(c) !== 128 && q(new sjcl.exception.invalid('ocb iv must be 128 bits')); e = e || 64; var g = sjcl.mode.ocb2.H; var h = sjcl.bitArray; var l = h.l; var k = [0, 0, 0, 0]; var n = g(a.encrypt(c)); var m; var p; var t = sjcl.bitArray.bitLength(b) - e; var r = []; d = d || []; for (c = 0; c + 4 < t / 32; c += 4)m = l(n, a.decrypt(l(n, b.slice(c, c + 4)))), k = l(k, m), r = r.concat(m), n = g(n); p = t - 32 * c; m = a.encrypt(l(n, [0, 0, 0, p])); m = l(m, h.clamp(b.slice(c), p).concat([0, 0, 0]))
    k = l(k, m); k = a.encrypt(l(k, l(n, g(n)))); d.length && (k = l(k, f ? d : sjcl.mode.ocb2.pmac(a, d))); h.equal(h.clamp(k, e), h.bitSlice(b, t)) || q(new sjcl.exception.corrupt("ocb: tag doesn't match")); return r.concat(h.clamp(m, p))
  },
  pmac: function (a, b) {
    var c; var d = sjcl.mode.ocb2.H; var e = sjcl.bitArray; var f = e.l; var g = [0, 0, 0, 0]; var h = a.encrypt([0, 0, 0, 0]); var h = f(h, d(d(h))); for (c = 0; c + 4 < b.length; c += 4)h = d(h), g = f(g, a.encrypt(f(h, b.slice(c, c + 4)))); c = b.slice(c); e.bitLength(c) < 128 && (h = f(h, d(h)), c = e.concat(c, [-2147483648, 0, 0, 0])); g = f(g, c); return a.encrypt(f(d(f(h,
      d(h))), g))
  },
  H: function (a) { return [a[0] << 1 ^ a[1] >>> 31, a[1] << 1 ^ a[2] >>> 31, a[2] << 1 ^ a[3] >>> 31, a[3] << 1 ^ 135 * (a[0] >>> 31)] }
}
sjcl.mode.gcm = {
  name: 'gcm',
  encrypt: function (a, b, c, d, e) { var f = b.slice(0); b = sjcl.bitArray; d = d || []; a = sjcl.mode.gcm.p(!0, a, f, d, c, e || 128); return b.concat(a.data, a.tag) },
  decrypt: function (a, b, c, d, e) { var f = b.slice(0); var g = sjcl.bitArray; var h = g.bitLength(f); e = e || 128; d = d || []; e <= h ? (b = g.bitSlice(f, h - e), f = g.bitSlice(f, 0, h - e)) : (b = f, f = []); a = sjcl.mode.gcm.p(u, a, f, d, c, e); g.equal(a.tag, b) || q(new sjcl.exception.corrupt("gcm: tag doesn't match")); return a.data },
  Z: function (a, b) {
    var c; var d; var e; var f; var g; var h = sjcl.bitArray.l; e = [0, 0, 0, 0]; f = b.slice(0)
    for (c = 0; c < 128; c++) { (d = (a[Math.floor(c / 32)] & 1 << 31 - c % 32) !== 0) && (e = h(e, f)); g = (f[3] & 1) !== 0; for (d = 3; d > 0; d--)f[d] = f[d] >>> 1 | (f[d - 1] & 1) << 31; f[0] >>>= 1; g && (f[0] ^= -0x1f000000) } return e
  },
  g: function (a, b, c) { var d; var e = c.length; b = b.slice(0); for (d = 0; d < e; d += 4)b[0] ^= 0xffffffff & c[d], b[1] ^= 0xffffffff & c[d + 1], b[2] ^= 0xffffffff & c[d + 2], b[3] ^= 0xffffffff & c[d + 3], b = sjcl.mode.gcm.Z(b, a); return b },
  p: function (a, b, c, d, e, f) {
    var g; var h; var l; var k; var n; var m; var p; var t; var r = sjcl.bitArray; m = c.length; p = r.bitLength(c); t = r.bitLength(d); h = r.bitLength(e); g = b.encrypt([0,
      0, 0, 0]); h === 96 ? (e = e.slice(0), e = r.concat(e, [1])) : (e = sjcl.mode.gcm.g(g, [0, 0, 0, 0], e), e = sjcl.mode.gcm.g(g, e, [0, 0, Math.floor(h / 0x100000000), h & 0xffffffff])); h = sjcl.mode.gcm.g(g, [0, 0, 0, 0], d); n = e.slice(0); d = h.slice(0); a || (d = sjcl.mode.gcm.g(g, h, c)); for (k = 0; k < m; k += 4)n[3]++, l = b.encrypt(n), c[k] ^= l[0], c[k + 1] ^= l[1], c[k + 2] ^= l[2], c[k + 3] ^= l[3]; c = r.clamp(c, p); a && (d = sjcl.mode.gcm.g(g, h, c)); a = [Math.floor(t / 0x100000000), t & 0xffffffff, Math.floor(p / 0x100000000), p & 0xffffffff]; d = sjcl.mode.gcm.g(g, d, a); l = b.encrypt(e); d[0] ^= l[0]
    d[1] ^= l[1]; d[2] ^= l[2]; d[3] ^= l[3]; return { tag: r.bitSlice(d, 0, f), data: c }
  }
}; sjcl.misc.hmac = function (a, b) { this.M = b = b || sjcl.hash.sha256; var c = [[], []]; var d; var e = b.prototype.blockSize / 32; this.n = [new b(), new b()]; a.length > e && (a = b.hash(a)); for (d = 0; d < e; d++)c[0][d] = a[d] ^ 909522486, c[1][d] = a[d] ^ 1549556828; this.n[0].update(c[0]); this.n[1].update(c[1]); this.G = new b(this.n[0]) }
sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac = function (a) { this.Q && q(new sjcl.exception.invalid('encrypt on already updated hmac called!')); this.update(a); return this.digest(a) }; sjcl.misc.hmac.prototype.reset = function () { this.G = new this.M(this.n[0]); this.Q = u }; sjcl.misc.hmac.prototype.update = function (a) { this.Q = !0; this.G.update(a) }; sjcl.misc.hmac.prototype.digest = function () { var a = this.G.finalize(); var a = (new this.M(this.n[1])).update(a).finalize(); this.reset(); return a }
sjcl.misc.pbkdf2 = function (a, b, c, d, e) { c = c || 1E3; (d < 0 || c < 0) && q(sjcl.exception.invalid('invalid params to pbkdf2')); typeof a === 'string' && (a = sjcl.codec.utf8String.toBits(a)); typeof b === 'string' && (b = sjcl.codec.utf8String.toBits(b)); e = e || sjcl.misc.hmac; a = new e(a); var f; var g; var h; var l; var k = []; var n = sjcl.bitArray; for (l = 1; 32 * k.length < (d || 1); l++) { e = f = a.encrypt(n.concat(b, [l])); for (g = 1; g < c; g++) { f = a.encrypt(f); for (h = 0; h < f.length; h++)e[h] ^= f[h] }k = k.concat(e) }d && (k = n.clamp(k, d)); return k }
sjcl.prng = function (a) { this.c = [new sjcl.hash.sha256()]; this.i = [0]; this.F = 0; this.s = {}; this.C = 0; this.K = {}; this.O = this.d = this.j = this.W = 0; this.b = [0, 0, 0, 0, 0, 0, 0, 0]; this.f = [0, 0, 0, 0]; this.A = s; this.B = a; this.q = u; this.w = { progress: {}, seeded: {} }; this.m = this.V = 0; this.t = 1; this.u = 2; this.S = 0x10000; this.I = [0, 48, 64, 96, 128, 192, 0x100, 384, 512, 768, 1024]; this.T = 3E4; this.R = 80 }
sjcl.prng.prototype = {
  randomWords: function (a, b) {
    var c = []; var d; d = this.isReady(b); var e; d === this.m && q(new sjcl.exception.notReady("generator isn't seeded")); if (d & this.u) {
      d = !(d & this.t); e = []; var f = 0; var g; this.O = e[0] = (new Date()).valueOf() + this.T; for (g = 0; g < 16; g++)e.push(0x100000000 * Math.random() | 0); for (g = 0; g < this.c.length && !(e = e.concat(this.c[g].finalize()), f += this.i[g], this.i[g] = 0, !d && this.F & 1 << g); g++);this.F >= 1 << this.c.length && (this.c.push(new sjcl.hash.sha256()), this.i.push(0)); this.d -= f; f > this.j && (this.j = f); this.F++
      this.b = sjcl.hash.sha256.hash(this.b.concat(e)); this.A = new sjcl.cipher.aes(this.b); for (d = 0; d < 4 && !(this.f[d] = this.f[d] + 1 | 0, this.f[d]); d++);
    } for (d = 0; d < a; d += 4)(d + 1) % this.S === 0 && A(this), e = B(this), c.push(e[0], e[1], e[2], e[3]); A(this); return c.slice(0, a)
  },
  setDefaultParanoia: function (a, b) { a === 0 && b !== 'Setting paranoia=0 will ruin your security; use it only for testing' && q('Setting paranoia=0 will ruin your security; use it only for testing'); this.B = a },
  addEntropy: function (a, b, c) {
    c = c || 'user'; var d; var e; var f = (new Date()).valueOf()
    var g = this.s[c]; var h = this.isReady(); var l = 0; d = this.K[c]; d === s && (d = this.K[c] = this.W++); g === s && (g = this.s[c] = 0); this.s[c] = (this.s[c] + 1) % this.c.length; switch (typeof a) {
      case 'number':b === s && (b = 1); this.c[g].update([d, this.C++, 1, b, f, 1, a | 0]); break; case 'object':c = Object.prototype.toString.call(a); if (c === '[object Uint32Array]') { e = []; for (c = 0; c < a.length; c++)e.push(a[c]); a = e } else { c !== '[object Array]' && (l = 1); for (c = 0; c < a.length && !l; c++) typeof a[c] !== 'number' && (l = 1) } if (!l) {
        if (b === s) {
          for (c = b = 0; c < a.length; c++) {
            for (e = a[c]; e > 0;) {
              b++,
              e >>>= 1
            }
          }
        } this.c[g].update([d, this.C++, 2, b, f, a.length].concat(a))
      } break; case 'string':b === s && (b = a.length); this.c[g].update([d, this.C++, 3, b, f, a.length]); this.c[g].update(a); break; default:l = 1
    }l && q(new sjcl.exception.bug('random: addEntropy only supports number, array of numbers or string')); this.i[g] += b; this.d += b; h === this.m && (this.isReady() !== this.m && C('seeded', Math.max(this.j, this.d)), C('progress', this.getProgress()))
  },
  isReady: function (a) {
    a = this.I[a !== s ? a : this.B]; return this.j && this.j >= a ? this.i[0] > this.R &&
  (new Date()).valueOf() > this.O ? this.u | this.t : this.t : this.d >= a ? this.u | this.m : this.m
  },
  getProgress: function (a) { a = this.I[a || this.B]; return this.j >= a ? 1 : this.d > a ? 1 : this.d / a },
  startCollectors: function () {
    this.q || (this.a = { loadTimeCollector: D(this, this.aa), mouseCollector: D(this, this.ba), keyboardCollector: D(this, this.$), accelerometerCollector: D(this, this.U), touchCollector: D(this, this.da) }, window.addEventListener ? (window.addEventListener('load', this.a.loadTimeCollector, u), window.addEventListener('mousemove', this.a.mouseCollector,
      u), window.addEventListener('keypress', this.a.keyboardCollector, u), window.addEventListener('devicemotion', this.a.accelerometerCollector, u), window.addEventListener('touchmove', this.a.touchCollector, u)) : document.attachEvent ? (document.attachEvent('onload', this.a.loadTimeCollector), document.attachEvent('onmousemove', this.a.mouseCollector), document.attachEvent('keypress', this.a.keyboardCollector)) : q(new sjcl.exception.bug("can't attach event")), this.q = !0)
  },
  stopCollectors: function () {
    this.q && (window.removeEventListener
      ? (window.removeEventListener('load', this.a.loadTimeCollector, u), window.removeEventListener('mousemove', this.a.mouseCollector, u), window.removeEventListener('keypress', this.a.keyboardCollector, u), window.removeEventListener('devicemotion', this.a.accelerometerCollector, u), window.removeEventListener('touchmove', this.a.touchCollector, u)) : document.detachEvent && (document.detachEvent('onload', this.a.loadTimeCollector), document.detachEvent('onmousemove', this.a.mouseCollector), document.detachEvent('keypress',
        this.a.keyboardCollector)), this.q = u)
  },
  addEventListener: function (a, b) { this.w[a][this.V++] = b },
  removeEventListener: function (a, b) { var c; var d; var e = this.w[a]; var f = []; for (d in e)e.hasOwnProperty(d) && e[d] === b && f.push(d); for (c = 0; c < f.length; c++)d = f[c], delete e[d] },
  $: function () { E(1) },
  ba: function (a) { var b, c; try { b = a.x || a.clientX || a.offsetX || 0, c = a.y || a.clientY || a.offsetY || 0 } catch (d) { c = b = 0 }b != 0 && c != 0 && sjcl.random.addEntropy([b, c], 2, 'mouse'); E(0) },
  da: function (a) {
    a = a.touches[0] || a.changedTouches[0]; sjcl.random.addEntropy([a.pageX ||
  a.clientX, a.pageY || a.clientY], 1, 'touch'); E(0)
  },
  aa: function () { E(2) },
  U: function (a) { a = a.accelerationIncludingGravity.x || a.accelerationIncludingGravity.y || a.accelerationIncludingGravity.z; if (window.orientation) { var b = window.orientation; typeof b === 'number' && sjcl.random.addEntropy(b, 1, 'accelerometer') }a && sjcl.random.addEntropy(a, 2, 'accelerometer'); E(0) }
}; function C (a, b) { var c; var d = sjcl.random.w[a]; var e = []; for (c in d)d.hasOwnProperty(c) && e.push(d[c]); for (c = 0; c < e.length; c++)e[c](b) }
function E (a) { typeof window !== 'undefined' && window.performance && typeof window.performance.now === 'function' ? sjcl.random.addEntropy(window.performance.now(), a, 'loadtime') : sjcl.random.addEntropy((new Date()).valueOf(), a, 'loadtime') } function A (a) { a.b = B(a).concat(B(a)); a.A = new sjcl.cipher.aes(a.b) } function B (a) { for (var b = 0; b < 4 && !(a.f[b] = a.f[b] + 1 | 0, a.f[b]); b++);return a.A.encrypt(a.f) } function D (a, b) { return function () { b.apply(a, arguments) } }sjcl.random = new sjcl.prng(6)
a:try {
  var F, G, H, I; if (I = typeof module !== 'undefined') { var J; if (J = module.exports) { var K; try { K = null } catch (L) { K = null }J = (G = K) && G.randomBytes }I = J } if (I)F = G.randomBytes(128), F = new Uint32Array((new Uint8Array(F)).buffer), sjcl.random.addEntropy(F, 1024, "crypto['randomBytes']"); else if (typeof window !== 'undefined' && typeof Uint32Array !== 'undefined') {
    H = new Uint32Array(32); if (window.crypto && window.crypto.getRandomValues)window.crypto.getRandomValues(H); else if (window.msCrypto && window.msCrypto.getRandomValues)window.msCrypto.getRandomValues(H)
    else break a; sjcl.random.addEntropy(H, 1024, "crypto['getRandomValues']")
  }
} catch (M) { typeof window !== 'undefined' && window.console && (console.log('There was an error collecting entropy from the browser:'), console.log(M)) }
sjcl.json = {
  defaults: { v: 1, iter: 1E3, ks: 128, ts: 64, mode: 'ccm', adata: '', cipher: 'aes' },
  Y: function (a, b, c, d) {
    c = c || {}; d = d || {}; var e = sjcl.json; var f = e.e({ iv: sjcl.random.randomWords(4, 0) }, e.defaults); var g; e.e(f, c); c = f.adata; typeof f.salt === 'string' && (f.salt = sjcl.codec.base64.toBits(f.salt)); typeof f.iv === 'string' && (f.iv = sjcl.codec.base64.toBits(f.iv)); (!sjcl.mode[f.mode] || !sjcl.cipher[f.cipher] || typeof a === 'string' && f.iter <= 100 || f.ts !== 64 && f.ts !== 96 && f.ts !== 128 || f.ks !== 128 && f.ks !== 192 && f.ks !== 0x100 || f.iv.length < 2 || f.iv.length >
    4) && q(new sjcl.exception.invalid('json encrypt: invalid parameters')); typeof a === 'string' ? (g = sjcl.misc.cachedPbkdf2(a, f), a = g.key.slice(0, f.ks / 32), f.salt = g.salt) : sjcl.ecc && a instanceof sjcl.ecc.elGamal.publicKey && (g = a.kem(), f.kemtag = g.tag, a = g.key.slice(0, f.ks / 32)); typeof b === 'string' && (b = sjcl.codec.utf8String.toBits(b)); typeof c === 'string' && (f.adata = c = sjcl.codec.utf8String.toBits(c)); g = new sjcl.cipher[f.cipher](a); e.e(d, f); d.key = a; f.ct = sjcl.mode[f.mode].encrypt(g, b, f.iv, c, f.ts); return f
  },
  encrypt: function (a, b, c, d) { var e = sjcl.json; var f = e.Y.apply(e, arguments); return e.encode(f) },
  X: function (a, b, c, d) {
    c = c || {}; d = d || {}; var e = sjcl.json; b = e.e(e.e(e.e({}, e.defaults), b), c, !0); var f, g; f = b.adata; typeof b.salt === 'string' && (b.salt = sjcl.codec.base64.toBits(b.salt)); typeof b.iv === 'string' && (b.iv = sjcl.codec.base64.toBits(b.iv)); (!sjcl.mode[b.mode] || !sjcl.cipher[b.cipher] || typeof a === 'string' && b.iter <= 100 || b.ts !== 64 && b.ts !== 96 && b.ts !== 128 || b.ks !== 128 && b.ks !== 192 && b.ks !== 0x100 || !b.iv || b.iv.length < 2 || b.iv.length > 4) &&
  q(new sjcl.exception.invalid('json decrypt: invalid parameters')); typeof a === 'string' ? (g = sjcl.misc.cachedPbkdf2(a, b), a = g.key.slice(0, b.ks / 32), b.salt = g.salt) : sjcl.ecc && a instanceof sjcl.ecc.elGamal.secretKey && (a = a.unkem(sjcl.codec.base64.toBits(b.kemtag)).slice(0, b.ks / 32)); typeof f === 'string' && (f = sjcl.codec.utf8String.toBits(f)); g = new sjcl.cipher[b.cipher](a); f = sjcl.mode[b.mode].decrypt(g, b.ct, b.iv, f, b.ts); e.e(d, b); d.key = a; return c.raw === 1 ? f : sjcl.codec.utf8String.fromBits(f)
  },
  decrypt: function (a, b,
    c, d) { var e = sjcl.json; return e.X(a, e.decode(b), c, d) },
  encode: function (a) { var b; var c = '{'; var d = ''; for (b in a) if (a.hasOwnProperty(b)) switch (b.match(/^[a-z0-9]+$/i) || q(new sjcl.exception.invalid('json encode: invalid property name')), c += d + '"' + b + '":', d = ',', typeof a[b]) { case 'number':case 'boolean':c += a[b]; break; case 'string':c += '"' + escape(a[b]) + '"'; break; case 'object':c += '"' + sjcl.codec.base64.fromBits(a[b], 0) + '"'; break; default:q(new sjcl.exception.bug('json encode: unsupported type')) } return c + '}' },
  decode: function (a) {
    a =
    a.replace(/\s/g, ''); a.match(/^\{.*\}$/) || q(new sjcl.exception.invalid("json decode: this isn't json!")); a = a.replace(/^\{|\}$/g, '').split(/,/); var b = {}; var c; var d; for (c = 0; c < a.length; c++) {
      (d = a[c].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i)) || q(new sjcl.exception.invalid("json decode: this isn't json!")), d[3] ? b[d[2]] = parseInt(d[3], 10) : d[4] ? b[d[2]] = d[2].match(/^(ct|adata|salt|iv)$/) ? sjcl.codec.base64.toBits(d[4]) : unescape(d[4]) : d[5] && (b[d[2]] = d[5] ===
    'true')
    } return b
  },
  e: function (a, b, c) { a === s && (a = {}); if (b === s) return a; for (var d in b)b.hasOwnProperty(d) && (c && (a[d] !== s && a[d] !== b[d]) && q(new sjcl.exception.invalid('required parameter overridden')), a[d] = b[d]); return a },
  fa: function (a, b) { var c = {}; var d; for (d in a)a.hasOwnProperty(d) && a[d] !== b[d] && (c[d] = a[d]); return c },
  ea: function (a, b) { var c = {}; var d; for (d = 0; d < b.length; d++)a[b[d]] !== s && (c[b[d]] = a[b[d]]); return c }
}; sjcl.encrypt = sjcl.json.encrypt; sjcl.decrypt = sjcl.json.decrypt; sjcl.misc.ca = {}
sjcl.misc.cachedPbkdf2 = function (a, b) { var c = sjcl.misc.ca; var d; b = b || {}; d = b.iter || 1E3; c = c[a] = c[a] || {}; d = c[d] = c[d] || { firstSalt: b.salt && b.salt.length ? b.salt.slice(0) : sjcl.random.randomWords(2, 0) }; c = b.salt === s ? d.firstSalt : b.salt; d[c] = d[c] || sjcl.misc.pbkdf2(a, c, b.iter); return { key: d[c].slice(0), salt: c.slice(0) } }

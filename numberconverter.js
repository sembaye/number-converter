'use strict';

// Removes all prefixing zeros from the binary array.
function removezeros(bin){
  var i = 0;
  while((i < bin.length) && (!bin[i])){i++;}
  if(i == bin.length){
    return filledarray(false, 1);
  }else{
    return bin.slice(i);
  }
}

// Computes a binary array out of a decimal input string
function decinputtobin(decinput){
  var len = decinput.length;
  if(len == 0){return filledarray(false, 1);}
  var bin = new Array();
  var digit = new Array(4);
  for (var i = 0; i < len; i++){
    switch (decinput[i]){
    case '0': digit[0] = false; digit[1] = false; digit[2] = false; digit[3] = false; break;
    case '1': digit[0] = false; digit[1] = false; digit[2] = false; digit[3] = true;  break;
    case '2': digit[0] = false; digit[1] = false; digit[2] = true;  digit[3] = false; break;
    case '3': digit[0] = false; digit[1] = false; digit[2] = true;  digit[3] = true;  break;
    case '4': digit[0] = false; digit[1] = true;  digit[2] = false; digit[3] = false; break;
    case '5': digit[0] = false; digit[1] = true;  digit[2] = false; digit[3] = true;  break;
    case '6': digit[0] = false; digit[1] = true;  digit[2] = true;  digit[3] = false; break;
    case '7': digit[0] = false; digit[1] = true;  digit[2] = true;  digit[3] = true;  break;
    case '8': digit[0] = true;  digit[1] = false; digit[2] = false; digit[3] = false; break;
    case '9': digit[0] = true;  digit[1] = false; digit[2] = false; digit[3] = true;  break;
    default: continue;
    }
    bin = binadd(binten(bin), digit);
  }
  return removezeros(bin);
}

// Computes a binary array out of a hexadecimal input string
function hexinputtobin(hexinput){
  var len = hexinput.length;
  if(len == 0){return filledarray(false, 1);}
  var bin = new Array(len * 4);
  var j = 0;
  for (var i = 0; i < len; i++){
    switch (hexinput[i]){
    case '0':           bin[j+0] = false; bin[j+1] = false; bin[j+2] = false; bin[j+3] = false; j+=4; break;
    case '1':           bin[j+0] = false; bin[j+1] = false; bin[j+2] = false; bin[j+3] = true;  j+=4; break;
    case '2':           bin[j+0] = false; bin[j+1] = false; bin[j+2] = true;  bin[j+3] = false; j+=4; break;
    case '3':           bin[j+0] = false; bin[j+1] = false; bin[j+2] = true;  bin[j+3] = true;  j+=4; break;
    case '4':           bin[j+0] = false; bin[j+1] = true;  bin[j+2] = false; bin[j+3] = false; j+=4; break;
    case '5':           bin[j+0] = false; bin[j+1] = true;  bin[j+2] = false; bin[j+3] = true;  j+=4; break;
    case '6':           bin[j+0] = false; bin[j+1] = true;  bin[j+2] = true;  bin[j+3] = false; j+=4; break;
    case '7':           bin[j+0] = false; bin[j+1] = true;  bin[j+2] = true;  bin[j+3] = true;  j+=4; break;
    case '8':           bin[j+0] = true;  bin[j+1] = false; bin[j+2] = false; bin[j+3] = false; j+=4; break;
    case '9':           bin[j+0] = true;  bin[j+1] = false; bin[j+2] = false; bin[j+3] = true;  j+=4; break;
    case 'a': case 'A': bin[j+0] = true;  bin[j+1] = false; bin[j+2] = true;  bin[j+3] = false; j+=4; break;
    case 'b': case 'B': bin[j+0] = true;  bin[j+1] = false; bin[j+2] = true;  bin[j+3] = true;  j+=4; break;
    case 'c': case 'C': bin[j+0] = true;  bin[j+1] = true;  bin[j+2] = false; bin[j+3] = false; j+=4; break;
    case 'd': case 'D': bin[j+0] = true;  bin[j+1] = true;  bin[j+2] = false; bin[j+3] = true;  j+=4; break;
    case 'e': case 'E': bin[j+0] = true;  bin[j+1] = true;  bin[j+2] = true;  bin[j+3] = false; j+=4; break;
    case 'f': case 'F': bin[j+0] = true;  bin[j+1] = true;  bin[j+2] = true;  bin[j+3] = true;  j+=4; break;
    default: break;
    }
  }
  return removezeros(bin.slice(0, j));
}

// Computes a binary array out of a binary input string
function bininputtobin(bininput){
  var len = bininput.length;
  if(len == 0){return filledarray(false, 1);}
  var bin = new Array(len);
  var j = 0;
  for (var i = 0; i < len; i++){
    switch (bininput[i]){
    case '0': bin[j++] = false; break;
    case '1': bin[j++] = true; break;
    default: break;
    }
  }
  return removezeros(bin.slice(0, j));
}

// Computes a binary array out of an octal input string
function octinputtobin(octinput){
  var len = octinput.length;
  if(len == 0){return filledarray(false, 1);}
  var bin = new Array(len * 3);
  var j = 0;
  for (var i = 0; i < len; i++){
    switch (octinput[i]){
    case '0': bin[j+0] = false; bin[j+1] = false; bin[j+2] = false; j+=3; break;
    case '1': bin[j+0] = false; bin[j+1] = false; bin[j+2] = true;  j+=3; break;
    case '2': bin[j+0] = false; bin[j+1] = true;  bin[j+2] = false; j+=3; break;
    case '3': bin[j+0] = false; bin[j+1] = true;  bin[j+2] = true;  j+=3; break;
    case '4': bin[j+0] = true;  bin[j+1] = false; bin[j+2] = false; j+=3; break;
    case '5': bin[j+0] = true;  bin[j+1] = false; bin[j+2] = true;  j+=3; break;
    case '6': bin[j+0] = true;  bin[j+1] = true;  bin[j+2] = false; j+=3; break;
    case '7': bin[j+0] = true;  bin[j+1] = true;  bin[j+2] = true;  j+=3; break;
    default: break;
    }
  }
  return removezeros(bin.slice(0, j));
}

// Formats the given binary array to a decimal output string
function bintodecoutput(bin){
  var len = bin.length;
  var decoutput = String();
  var work = new Array(len);
  var outputlen = 0;
  for(var i=0; i<len; i++){work[i] = bin[i];}
  while(len){
    // as long as a remaining value exists
    var lead = false;
    var bit0;
    var bit1;
    var bit2;
    var bit3;
    var value;
    var i = 0;
    while(i < len-3){
      // walk through the remaining value
      bit0 = work[i+3];
      bit1 = work[i+2];
      bit2 = work[i+1];
      bit3 = work[i+0];
      value = (bit3<<3) | (bit2<<2) | (bit1<<1) | (bit0<<0);
      if(value >= 10){
        // For nibbles greaterequal than 10, adjust the bits accordingly.
        work[i+0] = true; work[i+1] = bit2 && bit1; work[i+2] = !bit1;
      }else{
        work[i+0] = lead;
        if(lead){
          // When the previous nibble was 8 or 9, adjust the bits accordingly
          work[i+1] = !bit1; work[i+2] = !bit1;
          lead = bit1;
        }else{
          // otherwise, just leave the bits as they are.
          if(value >= 8){lead = true;}
        }
      }
      i++;
    }
    // extract the decimal value of the remaining bits
    if(len==1){
      bit0 = work[0];
      bit1 = false;
      bit2 = false;
    }else if(len==2){
      bit0 = work[1];
      bit1 = work[0];
      bit2 = false;
    }else{
      bit0 = work[i + 2];
      bit1 = work[i + 1];
      bit2 = work[i + 0];
    }
    bit3 = lead;
    var value = (bit3<<3) | (bit2<<2) | (bit1<<1) | (bit0<<0);
    if(!(outputlen%3)){decoutput = ' ' + decoutput;}
    decoutput = value + decoutput;
    outputlen++;
    len = i;
  }
  // Remove zeros
  var i = 0;
  outputlen = decoutput.length;
  while((i < outputlen) && ((decoutput[i] == '0') || (decoutput[i] == ' '))){i++;}
  if(i == outputlen){
    return "0";
  }else{
    return decoutput.slice(i);
  }
}

// Formats the given binary array to a hexadecimal output string
function bintohexoutput(bin){
  var len = bin.length;
  var hexoutput = String();
  for(var i=0; i<len; i+=4){
    if((i > 0) && !(i%8)){hexoutput = " " + hexoutput;}
    var value = 0;
    if(bin[len - 1 - i - 0]){value+=1;}
    if(bin[len - 1 - i - 1]){value+=2;}
    if(bin[len - 1 - i - 2]){value+=4;}
    if(bin[len - 1 - i - 3]){value+=8;}
    switch(value){
      case 0:  hexoutput = "0" + hexoutput; break;
      case 1:  hexoutput = "1" + hexoutput; break;
      case 2:  hexoutput = "2" + hexoutput; break;
      case 3:  hexoutput = "3" + hexoutput; break;
      case 4:  hexoutput = "4" + hexoutput; break;
      case 5:  hexoutput = "5" + hexoutput; break;
      case 6:  hexoutput = "6" + hexoutput; break;
      case 7:  hexoutput = "7" + hexoutput; break;
      case 8:  hexoutput = "8" + hexoutput; break;
      case 9:  hexoutput = "9" + hexoutput; break;
      case 10: hexoutput = "a" + hexoutput; break;
      case 11: hexoutput = "b" + hexoutput; break;
      case 12: hexoutput = "c" + hexoutput; break;
      case 13: hexoutput = "d" + hexoutput; break;
      case 14: hexoutput = "e" + hexoutput; break;
      case 15: hexoutput = "f" + hexoutput; break;
      default: break;
    }
  }
  // todo: make faster
  return hexoutput;
}

// Formats the given binary array to a binary output string
function bintobinoutput(bin){
  var len = bin.length;
  var binoutput = String();
  for(var i=0; i<len; i++){
    if((i > 0) && !(i%8)){binoutput = " " + binoutput;}
    if(bin[len - 1 - i]){binoutput = "1" + binoutput;}else{binoutput = "0" + binoutput;}
  }
  // todo: make faster
  return binoutput;
}

// Formats the given binary array to a octal output string
function bintooctoutput(bin){
  var len = bin.length;
  var octoutput = String();
  for(var i=0; i<len; i+=3){
    if((i > 0) && !(i%24)){octoutput = " " + octoutput;}
    var value = 0;
    if(bin[len - 1 - i - 0]){value+=1;}
    if(bin[len - 1 - i - 1]){value+=2;}
    if(bin[len - 1 - i - 2]){value+=4;}
    switch(value){
      case 0: octoutput = "0" + octoutput; break;
      case 1: octoutput = "1" + octoutput; break;
      case 2: octoutput = "2" + octoutput; break;
      case 3: octoutput = "3" + octoutput; break;
      case 4: octoutput = "4" + octoutput; break;
      case 5: octoutput = "5" + octoutput; break;
      case 6: octoutput = "6" + octoutput; break;
      case 7: octoutput = "7" + octoutput; break;
      default: break;
    }
  }
  // todo: make faster
  return octoutput;
}

// Returns an array of a given size filled with the given value.
function filledarray(value, size){
  var a = new Array(size);
  for(var i=0; i<size; i++){a[i] = value;}
  return a;
}

// Addition of two binary arrays
function binadd(bin1, bin2){
  var i1 = bin1.length;
  var i2 = bin2.length;
  var i3 = (i1 > i2) ? (i1 + 1) : (i2 + 1);
  var result = new Array(i3);
  var c = 0;
  // Add the two arrays as long as there exist elements in the arrays
  while((i1 > 0) && (i2 > 0)){
    i1--;
    i2--;
    i3--;
    if(bin1[i1]){c++;}
    if(bin2[i2]){c++;}
    result[i3] = (c%2) ? true : false;
    c >>= 1;
  }
  // copy the remaining elements
  if(i1){
    for(var i=0; i<i1; i++){result[i+1] = bin1[i];}
  }else{
    for(var i=0; i<i2; i++){result[i+1] = bin2[i];}
  }
  // add the remaining carry
  var carry = c ? true : false;
  while(c && (i3 > 1)){
    i3--;
    result[i3] = !result[i3];
    c = !result[i3];
  }
  // Return result with carry if necessary
  if (c==1){
    result[0] = true;
    return result;
  }else{
    return result.slice(1);
  }
}

// Addition of 1 to a binary array
function binaddone(bin){
  var len = bin.length;
  var result = new Array(len + 1);
  var c = true;   // carry bit
  var i = len;   // i points at the bit in bin one after the untouched bit
  while(c && (i > 0)){
    i--;
    c = bin[i];
    result[i+1] = !c;
  }
  if(i){
    // Return remaining untouched bin concatenated with the touched bits
    return bin.slice(0, i).concat(result.slice(i+1));
  }else{
    if(c){
      // Return full result with carry as prefix
      result[0] = true;
      return result;
    }else{
      // Return result without carry
      return result.slice(1);
    }
  }
}

// Multiplication of a binary array with 10 (Ten)
function binten(bin){
  var len = bin.length;
  var result = new Array(len + 4);
  result[len + 3] = false;
  result[len + 2] = bin[len - 1];
  result[len + 1] = bin[len - 2];
  var cnum = 0;
  var c = false
  for(var i=len - 1; i>=2; i--){
    var a = bin[i];
    var b = bin[i-2];
    result[i + 1] = a ^ b ^ c;
//    c = (a & b) | (a & c) | (b & c);
    cnum = a + b + c;
    c = (cnum>>1) ? true : false;
  }
  result[2] = bin[1] ^ c;
  c = bin[1] & c;
  result[1] = bin[0] ^ c;
  c = bin[0] & c;
  if(c){
    result[0] = true;
    return result;
  }else{
    return result.slice(1);
  }
}

// Either truncates the binary array or fills the MSBs with 0 to fit the size.
function bintruncate(bin, size){
  var len = bin.length;
  if(len < size){
    return filledarray(false, size-len).concat(bin);
  }else{
    return bin.slice(len - size);
  }
}

// Computes the one's complement of the binary number
function onescomplement(bin){
  var len = bin.length;
  var onebin = new Array(len);
  for (var i=0; i<len; i++){onebin[i] = !bin[i];}
  return onebin;
}

// Computes the two's complement of the given binary one's complement
function twoscomplement(binonecomplement){
  return binaddone(binonecomplement);
}

// Clears all input fields
function clearallinputs(){
  decinputfield = "";
  hexinputfield = "";
  bininputfield = "";
  octinputfield = "";
  decinputvalue = "";
  hexinputvalue = "";
  bininputvalue = "";
  octinputvalue = "";
}

// The decimal input field has been changed
function updatedec(){
  var dec = decinputfield;
  if(decinputvalue != dec){
    updateall(decinputtobin(dec));
    clearallinputs();
    decinputfield = dec;
    decinputvalue = dec;
  }
}

// The hexadecimal input field has been changed
function updatehex(){
  var hex = hexinputfield;
  if(hexinputvalue != hex){
    updateall(hexinputtobin(hex));
    clearallinputs();
    hexinputfield = hex;
    hexinputvalue = hex;
  }
}

// The binary input field has been changed
function updatebin(){
  var bin = bininputfield;
  if(bininputvalue != bin){
    updateall(bininputtobin(bin));
    clearallinputs();
    bininputfield = bin;
    bininputvalue = bin;
  }
}

// The octal input field has been changed
function updateoct(){
  var oct = octinputfield;
  if(octinputvalue != oct){
    updateall(octinputtobin(oct));
    clearallinputs();
    octinputfield = oct;
    octinputvalue = oct;
  }
}

// Fills all outputs with the correct strings
function updateall(bin){ 
  // Compute all binary representations
  var bin08 = bintruncate(bin, 8);
  var bin18 = onescomplement(bin08);
  var bin28 = bintruncate(twoscomplement(bin18), 8);
  var bin016 = bintruncate(bin, 16);
  var bin116 = onescomplement(bin016);
  var bin216 = bintruncate(twoscomplement(bin116), 16);
  var bin032 = bintruncate(bin, 32);
  var bin132 = onescomplement(bin032);
  var bin232 = bintruncate(twoscomplement(bin132), 32);
  var bin064 = bintruncate(bin, 64);
  var bin164 = onescomplement(bin064);
  var bin264 = bintruncate(twoscomplement(bin164), 64);
  var bin0n = bintruncate(bin, 8 * Math.ceil(bin.length / 8));
  var bin1n = onescomplement(bin0n);
  var bin2n = bintruncate(twoscomplement(bin1n), 8 * Math.ceil(bin.length / 8));
  //  var bin2n = twoscomplement(bin1n);
  
  // Put all formatted strings on screen.
  var o;
  var sign;
  
  // Decimal
  data.dec08=bintodecoutput(bin08);
  data.dec016=bintodecoutput(bin016);
  data.dec032=bintodecoutput(bin032);
  data.dec064=bintodecoutput(bin064);
  data.dec0n=bintodecoutput(bin0n);
  if(bin18[0]){
     data.dec18 = "-" + bintodecoutput(onescomplement(bin18.slice(1)));
  }else{
    data.dec18 = bintodecoutput(bin18);
  }
  if(bin116[0]){
    data.dec116 = "-" + bintodecoutput(onescomplement(bin116.slice(1)));
  }else{
    data.dec116 = bintodecoutput(bin116);
  }
  if(bin132[0]){
    data.dec132 = "-" + bintodecoutput(onescomplement(bin132.slice(1)));
  }else{
    data.dec132 = bintodecoutput(bin132);
  }
  if(bin164[0]){
    data.dec164 = "-" + bintodecoutput(onescomplement(bin164.slice(1)));
   }else{
    data.dec164 = bintodecoutput(bin164);
  }
  if(bin1n[0]){
    data.dec1n = "-" + bintodecoutput(onescomplement(bin1n.slice(1)));
  }else{
    data.dec1n = bintodecoutput(bin1n);
  }
  if(bin28[0]){
    data.dec28 = "-" + bintodecoutput(twoscomplement(onescomplement(bin28.slice(1))));
  }else{
    data.dec28 = bintodecoutput(bin28);
  }
  if(bin216[0]){
    data.dec216 = "-" + bintodecoutput(twoscomplement(onescomplement(bin216.slice(1))));
  }else{
    data.dec216 = bintodecoutput(bin216);
  }
  if(bin232[0]){
    data.dec232 = "-" + bintodecoutput(twoscomplement(onescomplement(bin232.slice(1))));
  }else{
    data.dec232 = bintodecoutput(bin232);
  }
  if(bin264[0]){
    data.dec264 = "-" + bintodecoutput(twoscomplement(onescomplement(bin264.slice(1))));
  }else{
    data.dec264 = bintodecoutput(bin264);
  }
  if(bin2n[0]){
    data.dec2n = "-" + bintodecoutput(twoscomplement(onescomplement(bin2n.slice(1))));
  }else{
    data.dec2n = bintodecoutput(bin2n);
  }
  
  // Hexadecimal
  data.hex08=bintohexoutput(bin08);
  data.hex016=bintohexoutput(bin016);
  data.hex032=bintohexoutput(bin032);
  data.hex064=bintohexoutput(bin064);
  data.hex0n=bintohexoutput(bin0n);
  data.hex18=bintohexoutput(bin18);
  data.hex116=bintohexoutput(bin116);
  data.hex132=bintohexoutput(bin132);
  data.hex164=bintohexoutput(bin164);
  data.hex1n=bintohexoutput(bin1n);
  data.hex28=bintohexoutput(bin28);
  data.hex216=bintohexoutput(bin216);
  data.hex232=bintohexoutput(bin232);
  data.hex264=bintohexoutput(bin264);
  data.hex2n=bintohexoutput(bin2n);

  // Binary
  data.bin08=bintohexoutput(bin08);
  data.bin016=bintohexoutput(bin016);
  data.bin032=bintohexoutput(bin032);
  data.bin064=bintohexoutput(bin064);
  data.bin0n=bintohexoutput(bin0n);
  data.bin18=bintohexoutput(bin18);
  data.bin116=bintohexoutput(bin116);
  data.bin132=bintohexoutput(bin132);
  data.bin164=bintohexoutput(bin164);
  data.bin1n=bintohexoutput(bin1n);
  data.bin28=bintohexoutput(bin28);
  data.bin216=bintohexoutput(bin216);
  data.bin232=bintohexoutput(bin232);
  data.bin264=bintohexoutput(bin264);
  data.bin2n=bintohexoutput(bin2n);

  // Octal
  data.oct08=bintooctoutput(bin08);
  data.oct016=bintooctoutput(bin016);
  data.oct032=bintooctoutput(bin032);
  data.oct064=bintooctoutput(bin064);
  data.oct0n=bintooctoutput(bin0n);
  data.oct18=bintooctoutput(bin18);
  data.oct116=bintooctoutput(bin116);
  data.oct132=bintooctoutput(bin132);
  data.oct164=bintooctoutput(bin164);
  data.oct1n=bintooctoutput(bin1n);
  data.oct28=bintooctoutput(bin28);
  data.oct216=bintooctoutput(bin216);
  data.oct232=bintooctoutput(bin232);
  data.oct264=bintooctoutput(bin264);
  data.oct2n=bintooctoutput(bin2n);
}

// Initialize the input fields and some global variables.
var data={
	//unsign
	dec08:0,hex08:0,bin08:0,oct08:0,
	dec016:0,hex016:0,bin016:0,oct016:0,
	dec032:0,hex032:0,bin032:0,oct032:0,
	dec064:0,hex064:0,bin064:0,oct064:0,
	dec0n:0,hex0n:0,bin0n:0,oct0n:0,
	//onesComplement
	dec18:0,hex18:0,bin18:0,oct18:0,
	dec116:0,hex116:0,bin116:0,oct116:0,
	dec132:0,hex132:0,bin132:0,oct132:0,
	dec164:0,hex164:0,bin164:0,oct164:0,
	dec1n:0,hex1n:0,bin1n:0,oct1n:0,
	//twosComplement
	dec28:0,hex28:0,bin28:0,oct28:0,
	dec216:0,hex216:0,bin216:0,oct216:0,
	dec232:0,hex232:0,bin232:0,oct232:0,
	dec264:0,hex264:0,bin264:0,oct264:0,
	dec2n:0,hex2n:0,bin2n:0,oct2n:0
}

var decinputvalue = "";
var hexinputvalue = "";
var bininputvalue = "0";
var octinputvalue = "";

var decinputfield="";
var hexinputfield="";
var bininputfield="";
var octinputfield="";

function numberconverter(){

}
numberconverter.prototype.convert = function(type,value) {
  var ret=0;
	if(typeof(value) ==="string"){
		switch(type) {
			case "dec":
				decinputfield=value;
				break;
			case "hex":
				decinputfield=value;
				break;
			case "bin":
				decinputfield=value;
				break;
			case "oct":
				decinputfield=value;
				break;
			default:
				ret=-1;
		}		
	}else{
		ret=-1;
	}
  if(ret===-1){
		console.log("Typeerror");
	}else{
		updatedec();
		updatehex();
		updatebin();
		updateoct();
        ret = data;		
	}
	return ret;
}

module.exports = numberconverter;

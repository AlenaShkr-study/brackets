module.exports = function check(str, bracketsConfig) {
  
  let copyStr = str;
  const configLen = bracketsConfig.length;
  
  for ( let i = 0; i < copyStr.length;  i++) {
    for (let j = 0; j < configLen; j++){
      
     if ((copyStr[i] === bracketsConfig[j][0]) && (copyStr[i + 1] === bracketsConfig[j][1])){

        let reg = bracketsConfig[j][0] + bracketsConfig[j][1];
        copyStr = copyStr.replace(reg,'');

        i = i-1;
        j = -1;
      }
    }
  }

  return copyStr === '';
}
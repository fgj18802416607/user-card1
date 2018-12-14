import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {
  // onkeyup='this.value=this.value.replace(/[^0-9]*$/,"")' onblur='this.value=this.value.replace(/^[0]+[0-9]*$/gi,"
  // transform(chinese: any): any {
  //   // const aa = {'1':'车','2':'房子'};
  //   //
  //   // return aa[chinese];
  //   let Chall='';
  //   let Chfirst;
  //   let Chend;
  //   let Chpoint;
  //   const String1 = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  //   const String2 = new Array('', '拾', '佰');
  //   const String3 = new Array('角', '分');
  //   const Chyuan='元';
  //   const reg = /^\d{1,3}(?:\.\d{1,2})?$/;
  //
  //   if(chinese === ""){
  //     return '';
  //   }else if(!reg.test(chinese)){
  //     return '不符合规则';
  //   }
  //   let  chinese1 = parseFloat(chinese);
  //   if ( chinese1 === 0) {
  //     Chall = '这是大零蛋啊';
  //     return Chall;
  //   }
  //
  //   if (chinese.indexOf('.') === -1) {
  //     Chfirst = chinese;
  //     Chend = '';
  //   } else {
  //     Chpoint = chinese.split('.');
  //     Chfirst = Chpoint[0];
  //     Chend = Chpoint[1].substr(0, 2);
  //   }
  //
  //   if (Chfirst !== '' && parseInt (Chfirst, 10)> 0) {
  //     let Chflen = Chfirst.length;
  //     let zero = 0;
  //     for (let i = 0; i < Chflen; i++) {
  //       let firChar = Chfirst.substr(i, 1);
  //       let intSlen = Chflen - i - 1;
  //       let remain = intSlen % 3;
  //       if (firChar === '0') {
  //         zero++;
  //       } else {
  //         if (zero > 0) {
  //           Chall += String1[0];
  //         }
  //         zero = 0;
  //           Chall += String1[parseInt(firChar)] + String2[remain];
  //       }
  //     }
  //     Chall += Chyuan;
  //   }
  //
  //   if (Chend !== '') {
  //     let Chelen = Chend.length;
  //     for (let i = 0; i < Chelen; i++) {
  //       let endChar = Chend.substr(i, 1);
  //       if (endChar !== '0') {
  //         Chall += String1[parseInt(endChar)] + String3[i];
  //       }
  //       if (endChar === '0' && parseInt(Chfirst, 10) > 0) {
  //         Chall += String1[parseInt(endChar)] + String3[i];
  //       }
  //     }
  //   } else {
  //     Chall ;
  //   }
  //   return Chall
  // };
  transform(currencyDigits: any): any {
    let MAXIMUM_NUMBER = 999.99;
    let CN_ZERO = "零";
    let CN_ONE = "壹";
    let CN_TWO = "贰";
    let CN_THREE = "叁";
    let CN_FOUR = "肆";
    let CN_FIVE = "伍";
    let CN_SIX = "陆";
    let CN_SEVEN = "柒";
    let CN_EIGHT = "捌";
    let CN_NINE = "玖";
    let CN_TEN = "拾";
    let CN_HUNDRED = "佰";
    let CN_THOUSAND = "仟";
    let CN_TEN_THOUSAND = "万";
    let CN_HUNDRED_MILLION = "亿";
    let CN_SYMBOL = "人民币";
    let CN_DOLLAR = "元";
    let CN_TEN_CENT = "角";
    let CN_CENT = "分";
    let CN_INTEGER = "整";

    let integral;    // Represent integral part of digit number.
    let decimal;    // Represent decimal part of digit number.
    let outputCharacters;    // The output result.
    let parts;
    let digits, radices, bigRadices, decimals;
    let zeroCount;
    let i, p, d;
    let quotient, modulus;

    currencyDigits = currencyDigits.toString();
    if (currencyDigits == "") {
      currencyDigits = "请输入小写金额！";
      return currencyDigits;
    }
    if (currencyDigits.match(/[^,.\d]/) != null) {
      currencyDigits = "小写金额含有无效字符！";
      return currencyDigits;
    }
    if ((currencyDigits).match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) == null) {
      currencyDigits = "小写金额的格式不正确！";
      return currencyDigits;
    }
    currencyDigits = currencyDigits.replace(/,/g, "");    // Remove comma delimiters.
    currencyDigits = currencyDigits.replace(/^0+/, "");    // Trim zeros at the beginning.
    // Assert the number is not greater than the maximum number.
    if (Number(currencyDigits) > MAXIMUM_NUMBER) {
      currencyDigits = "金额过大，应小于1000元！";
      return currencyDigits;
    }
    parts = currencyDigits.split(".");
    if (parts.length > 1) {
      integral = parts[0];
      decimal = parts[1];
      // Cut down redundant decimal digits that are after the second.
      decimal = decimal.substr(0, 2);
    }
    else {
      integral = parts[0];
      decimal = "";
    }
    digits = new Array(CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE, CN_SIX, CN_SEVEN, CN_EIGHT, CN_NINE);
    radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
    bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
    decimals = new Array(CN_TEN_CENT, CN_CENT);
    outputCharacters = "";
    if (Number(integral) > 0) {
      zeroCount = 0;
      for (i = 0; i < integral.length; i++) {
        p = integral.length - i - 1;
        d = integral.substr(i, 1);
        quotient = p / 4;
        modulus = p % 4;
        if (d == "0") {
          zeroCount++;
        }
        else {
          if (zeroCount > 0)
          {
            outputCharacters += digits[0];
          }
          zeroCount = 0;
          outputCharacters += digits[Number(d)] + radices[modulus];
        }
        if (modulus == 0 && zeroCount < 4) {
          outputCharacters += bigRadices[quotient];
          zeroCount = 0;
        }
      }
      outputCharacters += CN_DOLLAR;
    }
    if (decimal != "") {
      for (i = 0; i < decimal.length; i++) {
        d = decimal.substr(i, 1);
        if (d != "0") {
          outputCharacters += digits[Number(d)] + decimals[i];
        }
      }
    }
    if (outputCharacters == "") {
      outputCharacters = CN_ZERO + CN_DOLLAR;
    }
    if (decimal == "") {
      outputCharacters += CN_INTEGER;
    }
    outputCharacters = CN_SYMBOL + outputCharacters;
    return outputCharacters;
  }
}

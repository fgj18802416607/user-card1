import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {
  // onkeyup='this.value=this.value.replace(/[^0-9]*$/,"")' onblur='this.value=this.value.replace(/^[0]+[0-9]*$/gi,"
  transform(chinese: any): any {
    // const aa = {'1':'车','2':'房子'};
    //
    // return aa[chinese];
    let Chall='';
    let Chfirst;
    let Chend;
    let Chpoint;
    const String1 = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
    const String2 = new Array('', '拾', '佰');
    const String3 = new Array('角', '分');
    const Chyuan='元';
    const reg = /^\d{1,3}(?:\.\d{1,2})?$/;

    if(chinese === ""){
      return '';
    }else if(!reg.test(chinese)){
      return '不符合规则';
    }
    let  chinese1 = parseFloat(chinese);
    if ( chinese1 === 0) {
      Chall = '这是大零蛋啊';
      return Chall;
    }

    if (chinese.indexOf('.') === -1) {
      Chfirst = chinese;
      Chend = '';
    } else {
      Chpoint = chinese.split('.');
      Chfirst = Chpoint[0];
      Chend = Chpoint[1].substr(0, 2);
    }

    if (Chfirst !== '' && parseInt (Chfirst, 10)> 0) {
      let Chflen = Chfirst.length;
      let zero = 0;
      for (let i = 0; i < Chflen; i++) {
        let firChar = Chfirst.substr(i, 1);
        let intSlen = Chflen - i - 1;
        let remain = intSlen % 3;
        if (firChar === '0') {
          zero++;
        } else {
          if (zero > 0) {
            Chall += String1[0];
          }
          zero = 0;
            Chall += String1[parseInt(firChar)] + String2[remain];
        }
      }
      Chall += Chyuan;
    }

    if (Chend !== '') {
      let Chelen = Chend.length;
      for (let i = 0; i < Chelen; i++) {
        let endChar = Chend.substr(i, 1);
        if (endChar !== '0') {
          Chall += String1[parseInt(endChar)] + String3[i];
        }
        if (endChar === '0' && parseInt(Chfirst, 10) > 0) {
          Chall += String1[parseInt(endChar)] + String3[i];
        }
      }
    } else {
      Chall ;
    }
    return Chall
  };
}

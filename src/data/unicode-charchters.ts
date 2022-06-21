/**
 * https://github.com/spencermountain/compromise/blob/52fb03e7a26e8caed08bf04d893b0044aab4c538/src/1-one/tokenize/model/unicode.js
 * MIT License

Copyright (c) 2017 compromise

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

//a hugely-ignorant, and widely subjective transliteration of latin, cryllic, greek unicode characters to english ascii.
//approximate visual (not semantic or phonetic) relationship between unicode and ascii characters
//http://en.wikipedia.org/wiki/List_of_Unicode_characters
//https://docs.google.com/spreadsheet/ccc?key=0Ah46z755j7cVdFRDM1A2YVpwa1ZYWlpJM2pQZ003M0E
//decompress data into two hashes
export const unicodeMap = new Map<string, RegExp>();

unicodeMap.set('!', /[¡]+/g);
unicodeMap.set('?', /[¿Ɂ]+/g);
unicodeMap.set('"', /[“”"❝❞]+/g);
unicodeMap.set("'", /[‘‛❛❜’]+/g);
unicodeMap.set('-', /[—–]+/g);
unicodeMap.set('...', /[…]+/g);
unicodeMap.set(
  'a',
  /[ªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΑΔΛάαλАДадѦѧӐӑӒӓƛɅæ]+/g,
);
unicodeMap.set('b', /[ßþƀƁƂƃƄƅɃΒβϐϦБВЪЬбвъьѢѣҌҍҔҕƥƾ]+/g);
unicodeMap.set('c', /[¢©ÇçĆćĈĉĊċČčƆƇƈȻȼͻͼͽϲϹϽϾϿЄСсєҀҁҪҫ]+/g);
unicodeMap.set('d', /[ÐĎďĐđƉƊȡƋƌǷ]+/g);
unicodeMap.set(
  'e',
  /[ÈÉÊËèéêëĒēĔĕĖėĘęĚěƎƏƐǝȄȅȆȇȨȩɆɇΈΕΞΣέεξϱϵ϶ЀЁЕЭеѐёҼҽҾҿӖӗӘәӚӛӬ]+ӭ/g,
);
unicodeMap.set('f', /[ƑƒϜϝӺӻҒғӶӷſ]+/g);
unicodeMap.set('g', /[ĜĝĞğĠġĢģƓǤǥǦǧǴǵ]+/g);
unicodeMap.set('h', /[ĤĥĦħƕǶȞȟΉΗЂЊЋНнђћҢңҤҥҺһӉӊ]+/g);
unicodeMap.set('I', /[ÌÍÎÏ]+/g);
unicodeMap.set('i', /[ìíîïĨĩĪīĬĭĮįİıƖƗȈȉȊȋΊΐΪίιϊІЇії]+/g);
unicodeMap.set('j', /[ĴĵǰȷɈɉϳЈј]+/g);
unicodeMap.set('k', /[ĶķĸƘƙǨǩΚκЌЖКжкќҚқҜҝҞҟҠҡ]+/g);
unicodeMap.set('l', /[ĹĺĻļĽľĿŀŁłƚƪǀǏǐȴȽΙӀӏ]+/g);
unicodeMap.set('m', /[ΜϺϻМмӍӎ]+/g);
unicodeMap.set('n', /[ÑñŃńŅņŇňŉŊŋƝƞǸǹȠȵΝΠήηϞЍИЙЛПийлпѝҊҋӅӆӢӣӤӥπ]+/g);
unicodeMap.set(
  'o',
  /[ÒÓÔÕÖØðòóôõöøŌōŎŏŐőƟƠơǑǒǪǫǬǭǾǿȌȍȎȏȪȫȬȭȮȯȰȱΌΘΟθοσόϕϘϙϬϭϴОФоѲѳӦӧӨөӪӫ¤ƍΏ]+/g,
);
unicodeMap.set('p', /[ƤƿΡρϷϸϼРрҎҏÞ]+/g);
unicodeMap.set('q', /[Ɋɋ]+/g);
unicodeMap.set('r', /[ŔŕŖŗŘřƦȐȑȒȓɌɍЃГЯгяѓҐґ]+/g);
unicodeMap.set('s', /[ŚśŜŝŞşŠšƧƨȘșȿςϚϛϟϨϩЅѕ]+/g);
unicodeMap.set('t', /[ŢţŤťŦŧƫƬƭƮȚțȶȾΓΤτϮϯТт҂Ҭҭ]+/g);
unicodeMap.set(
  'u',
  /[µÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưƱƲǓǔǕǖǗǘǙǚǛǜȔȕȖȗɄΰμυϋύϑЏЦЧцџҴҵҶҷӋӌӇӈ]+/g,
);
unicodeMap.set('v', /[νѴѵѶѷ]+/g);
unicodeMap.set('w', /[ŴŵƜωώϖϢϣШЩшщѡѿ]+/g);
unicodeMap.set('x', /[×ΧχϗϰХхҲҳӼӽӾӿ]+/g);
unicodeMap.set('y', /[ÝýÿŶŷŸƳƴȲȳɎɏΎΥΫγψϒϓϔЎУучўѰѱҮүҰұӮӯӰӱӲӳ]+/g);
unicodeMap.set('z', /[ŹźŻżŽžƩƵƶȤȥɀΖζ]+/g);

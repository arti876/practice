// task-1--------------------------------------------------------------

function high(x) {
  const wordArr = x.split(' ');
  const wordForNumberArr = wordArr.map(el => el.split('').reduce((acc, el) => acc = acc + el.charCodeAt(0) - 96, []));

  return wordArr[wordForNumberArr.indexOf(Math.max(...wordForNumberArr))]
}

console.log(high('abb baa sdfs dddds sdfs'));

// task-2--------------------------------------------------------------

function inArray(array1, array2) {
  return array1.filter(a1 => array2.find(a2 => a2.match(a1))).sort()
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));

// task-3--------------------------------------------------------------

var encryptThis = function (text) {
  return text.split(' ')
    .map(el => {
      if (el.length === 1) {
        return el.slice(0, 1).charCodeAt(0)
      } else if (el.length === 2) {
        return el.slice(0, 1).charCodeAt(0) + el.slice(1, 2)
      } else {
        return el.slice(0, 1).charCodeAt(0) + el.slice(el.length - 1) + el.slice(2, (el.length - 1)) + el.slice(1, 2)
      }
    }).join(' ')
}

console.log(encryptThis("A wise old owl lived in an oak"));
// const readline = require("readline");

// process.stdin.resume();
// process.stdin.setEncoding("utf8");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function zip(str) {
//   const temp = [];
//   let wide = 1;
//   while (str.length / 2 >= wide) {
//     let store = "";
//     for (let i = 0; i < str.length; i++) {
//       const piece = str.slice(i, i + wide);
//       // const data = {
//       //   w: piece,
//       //   c: 1,
//       // };
//       // console.log(piece);
//       if (str.slice(i + wide).startsWith(piece)) {
//         store[store.length - 1] = Number(store[store.length - 1]) + 1;
//         i += wide;
//       } else {
//         continue;
//       }
//       store += piece + "1";
//       // console.log(store);
//     }
//     temp.push(store);
//     wide++;
//   }
//   console.log(temp);
//   const words = temp.map((t) => t);
//   console.log(words);
//   const len = words.map((_) => _.length);
//   const min = Math.min(...len);
//   const index = len.findIndex((_) => _ === min);
//   return words[index];
// }

// let dump = [];
// console.log("입력하세요.");
// reader.on("line", (line) => {
//   if (line === "x") {
//     reader.close();
//     return;
//   }
//   dump.push(line);
//   console.log("current data:", dump);
//   console.log("추가로 입력하세요.");
// });

// reader.on("close", () => {
//   // console.log("입력 결과", dump);
//   console.log(zip(dump.join("")));
// });

// // console.log(
// //   zip(

// //   )
// // );

/* testasasbobbob 에서 오류가 있음 */
/* 
test2as2bob - 11 최소
testasasbobbob - 14 최대

하지만 아래 솔류션은 test2asbobbob - 13을 최소라고 함
심지어 testasas2bob - 12 는 결과로 나오지도 않음
*/
// function solution(s) {
//   const lengths = [];
//   let length = 1;
//   while (length <= s.length) {
//     let result = compress(length, s);
//     console.log("result", result);
//     lengths.push(result.length);
//     length += 1;
//   }
//   return Math.min(...lengths);
// }

// function compress(length, s) {
//   let result = "";
//   let current = s.slice(0, length);
//   console.log("current", current);
//   let count = 1;
//   for (let i = length; i < s.length; i += length) {
//     let snippet = s.slice(i, i + length);
//     if (snippet === current) {
//       count += 1;
//     } else {
//       if (count > 1) {
//         result += String(count);
//       }
//       count = 1;
//       result += current;
//       current = snippet;
//     }
//   }
//   console.log("compress result", s, length, current, result);
//   if (count > 1) {
//     result += String(count);
//   }
//   result += current;
//   return result;
// }

/* 새로운 솔루션 제작 */
function solution(s) {}

function duplicateRemove(s) {
  let words = s;
  for (let i = 0; i < s.length; i++) {
    if (words.replace(new RegExp(`[${words.at(i)}]+`, "g"), "") === "") {
      words = words.replace(
        new RegExp(`[${words.at(i)}]+`, "g"),
        ($1) => $1[0]
      );
    } else {
      words = words;
    }
  }
  return words;
}

function duplicateItemRemove(arr) {
  let temp = {};
  for (let item of arr) {
    temp[item] = null;
  }
  return Object.keys(temp);
}

function compress(s) {
  if (s.trim() === "") {
    this?.classList?.add?.("error");
    setTimeout(() => {
      this?.removeAttribute?.("class");
    }, 300);
    return;
  }
  this?.classList?.add?.("clicked");
  setTimeout(() => {
    this?.removeAttribute?.("class");
  }, 150);
  let count = 0;
  let words = s;
  for (let word of findDuplicateWord(s).reverse()) {
    const counted = words.replace(new RegExp(word, "g"), ($1, i) => {
      // console.log("slice", words.slice(i, word.length + i), i);
      // console.log(
      //   "next",
      //   words.slice(word.length + i, i + word.length * 2),
      //   word.length + i
      // );
      if (
        i === 0 ||
        i + word.length === words.indexOf(word, i + 1) ||
        words.slice(i, word.length + i) ===
          words.slice(i + word.length, i + word.length * 2)
      ) {
        count++;
        // console.log("continue", $1, i);
        return "";
      } else if (
        (i !== 0 && i + word.length !== words.indexOf(word, i + 1)) ||
        words.slice(i, word.length + i) !==
          words.slice(i + word.length, i + word.length * 2)
      ) {
        // console.log("done", word, i);
        count++;
        let temp = count;
        count = 0;
        return (temp > 1 ? temp : "") + $1;
      } else {
        count = 0;
        // console.log("jump to other word");
        return $1;
      }
    });
    // console.log("counted", counted);
    words = counted;
  }
  // return words;

  const split = words.slice(0, words.match(/[0-9]/).index);
  console.log("words", words);
  if (findDuplicateWord(split).length > 0) {
    const secondCompress = compress(split);
    const done = words.slice(words.match(/[0-9]/).index);
    console.log("done", done);
    console.log("done", secondCompress);
    if (done && secondCompress) {
      words = secondCompress + done;
    }
  }

  result.innerHTML = s ? words : "";

  highlight(result.innerHTML);
  return words;
}

function findDuplicateWord(s) {
  let selector = [];
  for (let q = 1; q < s.length; q++) {
    for (let i = 0; i < s.length; i++) {
      const sliced = s.slice(i, i + q);
      const next = s.slice(i + q, i + q + q);
      // console.log(sliced);
      if (sliced.length < q) continue;
      if (s.match(new RegExp(sliced, "g")).length > 1 && next === sliced) {
        selector.push(sliced);
      }
      // console.log(sliced);
    }
  }
  // console.log("duplicate words", selector);

  /* 마지막 문자가 제일 압축률이 큼. 혹은 길이가 같은 문자가 더 있다면 모두 추출 */
  const filterSelector = duplicateItemRemove(selector);
  const filtereds = filterSelector.filter(
    (item) =>
      item.length ===
        selector[selector.length - 1].length /*  || item.length > 1 */ ||
      !!filterSelector.find((it) => {
        console.log("filter word", item);
        return (
          !it.includes(item) ||
          (it.match(new RegExp(`(${item})`, "g")).length || 0) <= 1
        );
      })
  );

  /* 마지막 문자보다 더 짧은 문자 중 마지막 문자에 포함되는 문자가 있을 시 배제한다. */
  // console.log("filtered", filtered);
  const filtered = duplicateItemRemove(
    filtereds.map((filter) => duplicateRemove(filter))
  );
  const completeFiltered = filtered.filter((item, i) => {
    const currentIndex = filtered.indexOf(item);
    const others = filtered
      .slice(0, currentIndex)
      .concat(...filtered.slice(currentIndex + 1));
    return (
      filtered[i] === filtered[filtered.length - 1] ||
      others.reverse().every((it) => !it.includes(duplicateRemove(item))) ||
      others
        .reverse()
        .every(
          (it) =>
            !it.includes(item) ||
            (it.includes(item) &&
              (it.match(new RegExp(`(${item})`, "g"))?.length || 0) <= 1 &&
              item.length === 1) ||
            it.slice(it.indexOf(item), it.indexOf(item) + item.length) ===
              it.slice(
                it.indexOf(item) + item.length,
                it.indexOf(item) + item.length + item.length
              )
        )
    );
  });
  console.log("complete filtered", completeFiltered);
  return completeFiltered;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const temp = [];
console.log("텍스트를 입력하세요.");
rl.on("line", (line) => {
  if (line.match("x")) {
    rl.close();
  }
  temp.push(line);
});
rl.on("close", () => {
  temp.forEach((line) => {
    console.log("입력 라인", line);
    const rs = compress(line);
    console.log("압축 결과:", rs);
  });
});

/* 개선 완료 */

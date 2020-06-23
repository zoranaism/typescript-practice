function combine(
  input1: number | string,
  input2: number | string,
  resultType: string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultType === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedName = combine("max", "ana", "as-text");
console.log(combinedName);

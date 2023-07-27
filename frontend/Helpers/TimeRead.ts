export function getReadingTime(blocks: any) {
  if (!blocks) {
    console.log("no data availabel");
  } else {
    //assumption of  reading time for an average adult
    const wordsPerMinute = 1000;
    // iterate over each block in the array, and accumulate the length of the text in each child of the block.
    const textLength = blocks.reduce((total: any, block: any) => {
      if (block.children) {
        return (
          total +
          block.children.map((child: { text: any }) => child.text).join(" ")
            .length
        );
      } else {
        return total;
      }
    }, 0);
    const minutes = textLength / wordsPerMinute;
    //round up the reading time to the nearest whole number of minutes
    return Math.ceil(minutes);
  }
}

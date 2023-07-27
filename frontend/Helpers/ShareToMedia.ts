import { getReadingTime } from "./TimeRead";

export function shareToMedia(post: any) {
  const { title, categories, body } = post;
  const timeRead = getReadingTime(body);
  const currentUrl = window.location.href; // Get the current URL
  let textContent = `Title: ${title} \nCategory: ${categories},  ${timeRead} min read\n\n`;

  // loop through each block of postData.body and extract text content
  let sentencesCount = 0;
  body.forEach((block: any) => {
    if (block._type === "block" && block.children) {
      block.children.forEach((child: any) => {
        if (child._type === "span" && child.text) {
          const sentences = child.text.match(/([^.!?]+[.!?]+)\s*/g);
          if (sentences) {
            for (const sentence of sentences) {
              if (sentencesCount === 1) break;
              textContent += sentence.trim() + "...";
              sentencesCount++;
            }
            if (sentencesCount === 1) {
              return;
            }
          }
        }
      });
    }
  });

  textContent += ` Read more: ${currentUrl}`; // Append the current URL
  const encodedText = encodeURIComponent(textContent);
  return encodedText;
}

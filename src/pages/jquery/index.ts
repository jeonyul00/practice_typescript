$("p").removeClass("myClass noClass").addClass("your Class");
$(["p", "t"]).text("hello");
const tag = $("ul li").addClass(function (index) {
  return "item- " + index;
});
$(tag).html(function (i: number) {
  console.log(this);
  return $(this).data("name") + "입니다";
});

export = jQuery; // common js
// === module.exports = jQuery

// ---------------------------------- 만들어보자
interface yulQuery<T> {
  // ? : 매개변수 없어도 된다
  text(
    param?:
      | string
      | number
      | ((this: T, index: number) => boolean | string | number)
  ): this; // return이 this여야 메소드 체이닝이 가능하지
  next(param?: string | Document | DocumentFragment): void;
}

const $tag: yulQuery<HTMLElement> = $([
  "p",
  "t",
]) as unknown as yulQuery<HTMLElement>;

$tag.text("123");

$tag.text(123);

$tag.text(function () {
  console.log(this);
  return true;
});

$tag.text().next(document);

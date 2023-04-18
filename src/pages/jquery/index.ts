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

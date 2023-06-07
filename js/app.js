import { carousel } from "./carousel";
import { addSpan, addSpanReverse, spanText } from "./utils";
import { burgerActive } from "./burger";
import { banner } from "./banner";

carousel();
spanText()
addSpanReverse('banner__panel')
burgerActive()
console.log(banner.banner__panel)

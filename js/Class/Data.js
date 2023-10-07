export default class Data {
    #id;
    #url;
    #title;
    #link;
    #techno;
    #stack;
    #inline;
    #desc;

    constructor(id, url, title, link, techno, stack, inline, desc) {
        this.#id = id;
        this.#url = url;
        this.#title = title;
        this.#link = link;
        this.#techno = techno;
        this.#stack = stack;
        this.#inline = inline;
        this.#desc = desc;
    }
    get id() {
        return this.#id;
    }
    get imgUrl() {
        return this.#url;
    }
    get title() {
        return this.#title;
    }
    get link() {
        return this.#link;
    }
    get techno() {
        return this.#techno;
    }
    get stack() {
        return this.#stack;
    }
    get inline() {
        return this.#inline;
    }
    get desc() {
        return this.#desc;
    }
    set id(id) {
        this.#id = id;
    }
    set imgUrl(imgUrl) {
        this.#url = imgUrl;
    }
    set title(title) {
        this.#title = title;
    }
    set link(link) {
        this.#link = link;
    }
    set techno(techno) {
        this.#techno = techno;
    }
    set stack(stack) {
        this.#stack = stack;
    }
    set inline(inline) {
        this.#inline = inline;
    }
    set desc(desc) {
        this.#desc = desc;
    }
}
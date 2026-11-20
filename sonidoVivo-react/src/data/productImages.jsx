const images = {
    GA001: "assets/img/products/yamahaf310.jpg",
    GA002: "assets/img/products/fendercd60s.jpg",
    GA003: "assets/img/products/yamahac40.jpg",
    GA004: "assets/img/products/TakamineGN20CE.png",
    GA005: "assets/img/products/yamahajr1.webp",

    GE001: "assets/img/products/squireafinitystrat.jpg",
    GE002: "assets/img/products/epiphonelespaulstd.jpg",
    GE003: "assets/img/products/epiphonesgstd.jpg",
    GE004: "assets/img/products/squireaffinitytele.jpg",
    GE005: "assets/img/products/epiphonees335.jpg",

    BA001: "assets/img/products/squireaffinitypj.jpg",
    BA002: "assets/img/products/fenderplayjazz.jpg",
    BA003: "assets/img/products/yamahaapx700iii.jpg",

    BT001: "assets/img/products/pearlroadshadow.jpg",
    BT002: "assets/img/products/rolandtd02kv.jpg",
    BT003: "assets/img/products/pearlste1450.jpg",
    BT004: "assets/img/products/zildjian14hihat.jpg",
    BT005: "assets/img/products/zildjian16crash.jpg",

    TC001: "assets/img/products/yamahapsre373.jpg",
    TC002: "assets/img/products/yamahap45.jpg",
    TC003: "assets/img/products/arturiaminilabmkii.jpg",
    TC004: "assets/img/products/maudiohammer88.webp",

    AM001: "assets/img/products/fenderfrontman15g.jpg",
    AM002: "assets/img/products/marshallmg40gfx.jpeg",
    AM003: "assets/img/products/hartkehd100.webp",
    AM004: "assets/img/products/fishmanloudboxmini.webp",

    MI001: "assets/img/products/shuresm58.jpg",
    MI002: "assets/img/products/shuresm57.jpg",
    MI003: "assets/img/products/audiotechat2020.png",
    MI004: "assets/img/products/blueyeti.jpg",

    PE001: "assets/img/products/bossds1.jpg",
    PE002: "assets/img/products/bossrv6.jpg",
    PE003: "assets/img/products/bossme80.jpg",
    PE004: "assets/img/products/BOSSTU3.jpg",
    PE005: "assets/img/products/mxrcarboncopy.jpg",
    PE006: "assets/img/products/ibanezts9.jpeg",

    AC001: "assets/img/products/superslinky.jpg",
    AC002: "assets/img/products/earthwood.webp",
    AC003: "assets/img/products/regularslinky.webp",
    AC004: "assets/img/products/fender351.jpg",
    AC005: "assets/img/products/dunloptrigger.png",
    AC006: "assets/img/products/snarksn5.webp",
    AC007: "assets/img/products/monsters100-3.jpg",
    AC008: "assets/img/products/monsters100-3.jpg",
    AC009: "assets/img/products/herculesgs302b.webp",
    AC010: "assets/img/products/herculeswah202.jpg",

    ES001: "assets/img/products/focusritescarlet.jpg",
    ES002: "assets/img/products/audiotechathmx20x.jpg",
    ES003: "assets/img/products/audiotemx50x.jpg",
    ES004: "assets/img/products/yamahahs5.jpg",
    ES005: "assets/img/products/sennheisermzp40.jpg"

}

export function getProductImgage(id){
    return images[id] ?? "/assets/img/placeholder.jpg"
}
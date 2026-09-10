const landing = document.getElementById("landing");
const main = document.getElementById("main");
const zine = document.getElementById("zine");
const FlipSound = new Audio('assets/page.mp3');

function playFlipSound() {
    if (!FlipSound) return;

    try {
        FlipSound.currentTime = 0;
        const playPromise = FlipSound.play();

        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => { });
        }
    } catch (error) {
        console.warn("Flip sound could not be played:", error);
    }
}

const chapterData = {

    pagi: {
        title: "Chapter 1: Pagi",
        cover: "assets/PAGES/01-pagi/05. COVER PAGI.png",

        works: [
            {
                title: "01. Artwork by lucky_to_us",
                author: "lucky_to_us",
                rating: "",
                pages: [
                    "assets/CREDIT PAGE/by lucky_to_us.png",
                    "assets/PAGES/01-pagi/01.lucky_to_us/6.png",
                    "assets/PAGES/01-pagi/01.lucky_to_us/7.png",
                    "assets/PAGES/01-pagi/01.lucky_to_us/8.png",
                    "assets/PAGES/01-pagi/01.lucky_to_us/9.png",
                    "assets/PAGES/01-pagi/01.lucky_to_us/10.png"
                ]
            },
            {
                title: "02. Artwork by nyomjae",
                author: "nyomjae",
                rating: "",
                pages: [
                    "assets/CREDIT PAGE/by nyomjae.png",
                    "assets/PAGES/01-pagi/02.nyomjae/11.png"
                ]
            },
            {
                title: "03. The Word I Finally Said",
                author: "udin",
                rating: "",
                pages: [
                    "assets/PAGES/01-pagi/03.udin/12.png",
                    "assets/PAGES/01-pagi/03.udin/13.png",
                    "assets/PAGES/01-pagi/03.udin/14.png",
                    "assets/PAGES/01-pagi/03.udin/15.png",
                    "assets/PAGES/01-pagi/03.udin/16.png"
                ]
            },
            {
                title: "04. I'll Give You My Dawndreams",
                author: "niidjae",
                rating: "",
                pages: [
                    "assets/PAGES/01-pagi/04.niidjae/17.png",
                    "assets/PAGES/01-pagi/04.niidjae/18.png",
                    "assets/PAGES/01-pagi/04.niidjae/19.png",
                    "assets/PAGES/01-pagi/04.niidjae/20.png",
                    "assets/PAGES/01-pagi/04.niidjae/21.png",
                    "assets/PAGES/01-pagi/04.niidjae/22.png",
                    "assets/PAGES/01-pagi/04.niidjae/23.png",
                    "assets/PAGES/01-pagi/04.niidjae/24.png",
                    "assets/PAGES/01-pagi/04.niidjae/25.png",
                    "assets/PAGES/01-pagi/04.niidjae/26.png"
                ]
            },
            {
                title: "05. Moonhare",
                author: "ddoki",
                rating: "",
                pages: [
                    "assets/PAGES/01-pagi/05.ddoki/27.png",
                    "assets/PAGES/01-pagi/05.ddoki/28.png",
                    "assets/PAGES/01-pagi/05.ddoki/29.png",
                    "assets/PAGES/01-pagi/05.ddoki/30.png"
                ]
            },
            {
                title: "06. Dekap Raga Merajut Semi",
                author: "Bil",
                rating: "",
                pages: [
                    "assets/PAGES/01-pagi/06.Bil/31.png",
                    "assets/PAGES/01-pagi/06.Bil/32.png",
                    "assets/PAGES/01-pagi/06.Bil/33.png",
                    "assets/PAGES/01-pagi/06.Bil/34.png",
                    "assets/PAGES/01-pagi/06.Bil/35.png"
                ]
            },
            {
                title: "07. Pagi yang Terlambat Mulai",
                author: "oin",
                rating: "",
                pages: [
                    "assets/PAGES/01-pagi/07.oin/36.png",
                    "assets/PAGES/01-pagi/07.oin/37.png",
                    "assets/PAGES/01-pagi/07.oin/38.png",
                    "assets/PAGES/01-pagi/07.oin/39.png",
                    "assets/PAGES/01-pagi/07.oin/40.png",
                    "assets/PAGES/01-pagi/07.oin/41.png"
                ]
            },
            {
                title: "08. Taburiku dengan Cinta",
                author: "boljjippangyin",
                rating: "",
                pages: [
                    "assets/PAGES/01-pagi/08.boljjippangyin/42.png",
                    "assets/PAGES/01-pagi/08.boljjippangyin/43.png",
                    "assets/PAGES/01-pagi/08.boljjippangyin/44.png",
                    "assets/PAGES/01-pagi/08.boljjippangyin/45.png",
                    "assets/PAGES/01-pagi/08.boljjippangyin/46.png",
                    "assets/PAGES/01-pagi/08.boljjippangyin/47.png"
                ]
            },
            {
                title: "09. Rumah Nomor Tiga Puluh Delapan",
                author: "Sal",
                rating: "",
                pages: [
                    "assets/PAGES/01-pagi/09.Sal/48.png",
                    "assets/PAGES/01-pagi/09.Sal/49.png",
                    "assets/PAGES/01-pagi/09.Sal/50.png",
                    "assets/PAGES/01-pagi/09.Sal/51.png",
                    "assets/PAGES/01-pagi/09.Sal/52.png"
                ]
            }
        ]
    },

    siang: {
        title: "Chapter 2: Siang",
        cover: "assets/PAGES/02-siang/53. COVER SIANG.png",

        works: [
            {
                title: "01. Artwork by owneeon",
                author: "owneeon",
                rating: "",
                pages: [
                    "assets/CREDIT PAGE/by owneeon.png",
                    "assets/PAGES/02-siang/01.owneeon/54.png",
                    "assets/PAGES/02-siang/01.owneeon/55.png",
                    "assets/PAGES/02-siang/01.owneeon/56.png",
                    "assets/PAGES/02-siang/01.owneeon/57.png",
                    "assets/EMPTY_PAGE.png"
                ]
            },
            {
                title: "02.Come (L)over: Let me into your heart",
                author: "Lou",
                rating: "",
                pages: [
                    "assets/PAGES/02-siang/02.Lou/58.png",
                    "assets/PAGES/02-siang/02.Lou/59.png",
                    "assets/PAGES/02-siang/02.Lou/60.png",
                    "assets/PAGES/02-siang/02.Lou/61.png",
                    "assets/PAGES/02-siang/02.Lou/62.png"
                ]
            },
            {
                title: "03. Seminggu Merindu",
                author: "Otto",
                rating: "",
                pages: [
                    "assets/PAGES/02-siang/03.Oto/63.png",
                    "assets/PAGES/02-siang/03.Oto/64.png",
                    "assets/PAGES/02-siang/03.Oto/65.png",
                    "assets/PAGES/02-siang/03.Oto/66.png",
                    "assets/PAGES/02-siang/03.Oto/67.png",
                    "assets/PAGES/02-siang/03.Oto/68.png",
                    "assets/PAGES/02-siang/03.Oto/69.png",
                    "assets/PAGES/02-siang/03.Oto/70.png",
                    "assets/PAGES/02-siang/03.Oto/71.png",
                    "assets/PAGES/02-siang/03.Oto/72.png"
                ]
            },
            {
                title: "04. Enemy",
                author: "Chia",
                rating: "",
                pages: [
                    "assets/PAGES/02-siang/04.Chia/73.png",
                    "assets/PAGES/02-siang/04.Chia/74.png",
                    "assets/PAGES/02-siang/04.Chia/75.png",
                    "assets/PAGES/02-siang/04.Chia/76.png",
                    "assets/PAGES/02-siang/04.Chia/77.png",
                    "assets/PAGES/02-siang/04.Chia/78.png",
                    "assets/PAGES/02-siang/04.Chia/79.png",
                ]
            },
            {
                title: "05. ECHOES IN THE DARK",
                author: "bominight",
                rating: "Suicide Attempt",
                pages: [
                    "assets/PAGES/02-siang/05.bominight/80.png",
                    "assets/PAGES/02-siang/05.bominight/81.png",
                    "assets/PAGES/02-siang/05.bominight/82.png",
                    "assets/PAGES/02-siang/05.bominight/83.png",
                    "assets/PAGES/02-siang/05.bominight/84.png",
                    "assets/PAGES/02-siang/05.bominight/85.png",
                    "assets/PAGES/02-siang/05.bominight/86.png",
                    "assets/PAGES/02-siang/05.bominight/87.png",
                    "assets/PAGES/02-siang/05.bominight/88.png",
                    "assets/PAGES/02-siang/05.bominight/89.png",
                    "assets/PAGES/02-siang/05.bominight/90.png",
                    "assets/PAGES/02-siang/05.bominight/91.png",
                    "assets/PAGES/02-siang/05.bominight/92.png"
                ]
            },
            {
                title: "06. To Love, Forevermore",
                author: "nidjse",
                rating: "",
                pages: [
                    "assets/PAGES/02-siang/06.nidjse/93.png",
                    "assets/PAGES/02-siang/06.nidjse/94.png",
                    "assets/PAGES/02-siang/06.nidjse/95.png",
                    "assets/PAGES/02-siang/06.nidjse/96.png",
                    "assets/PAGES/02-siang/06.nidjse/97.png",
                    "assets/PAGES/02-siang/06.nidjse/98.png",
                    "assets/PAGES/02-siang/06.nidjse/99.png",
                    "assets/PAGES/02-siang/06.nidjse/100.png"
                ]
            },
        ]
    },

    sore: {
        title: "Chapter 3: Sore",
        cover: "assets/PAGES/03-sore/101. COVER SORE.png",

        works: [
            {
                title: "01. Artwork by 96kuchengzz",
                author: "96kuchengzz",
                rating: "",
                pages: [
                    "assets/CREDIT PAGE/by 96kuchengzz - art.png",
                    "assets/PAGES/03-sore/01.96kuchengzz/102.png"
                ]
            },
            {
                title: "02. Artwork by にゃ",
                author: "にゃ",
                rating: "",
                pages: [
                    "assets/CREDIT PAGE/by にゃ.png",
                    "assets/PAGES/03-sore/02.にゃ/103.png"
                ]
            },
            {
                title: "03. Maaf",
                author: "el",
                rating: "",
                pages: [
                    "assets/PAGES/03-sore/03.el/104.png",
                    "assets/PAGES/03-sore/03.el/105.png"
                ]
            },
            {
                title: "04. Mekar Dalam Diam",
                author: "Chococate",
                rating: "",
                pages: [
                    "assets/PAGES/03-sore/04.Chococate/106.png",
                    "assets/PAGES/03-sore/04.Chococate/107.png"]
            },
            {
                title: "05. One Rainy Evening Before Home",
                author: "eLiO",
                rating: "",
                pages: [
                    "assets/PAGES/03-sore/05.eLiO/108.png",
                    "assets/PAGES/03-sore/05.eLiO/109.png",
                    "assets/PAGES/03-sore/05.eLiO/110.png",
                    "assets/PAGES/03-sore/05.eLiO/111.png",
                    "assets/PAGES/03-sore/05.eLiO/112.png",
                    "assets/PAGES/03-sore/05.eLiO/113.png",
                    "assets/PAGES/03-sore/05.eLiO/114.png",
                    "assets/PAGES/03-sore/05.eLiO/115.png",
                    "assets/PAGES/03-sore/05.eLiO/116.png",
                    "assets/PAGES/03-sore/05.eLiO/117.png",
                    "assets/PAGES/03-sore/05.eLiO/118.png"

                ]
            },
            {
                title: "06. Debu dalam Semesta",
                author: "shugarplums",
                rating: "",
                pages: [
                    "assets/PAGES/03-sore/06.shugarplums/119.png",
                    "assets/PAGES/03-sore/06.shugarplums/120.png",
                    "assets/PAGES/03-sore/06.shugarplums/121.png",
                    "assets/PAGES/03-sore/06.shugarplums/122.png",
                    "assets/PAGES/03-sore/06.shugarplums/123.png",
                    "assets/PAGES/03-sore/06.shugarplums/124.png",
                    "assets/PAGES/03-sore/06.shugarplums/125.png",
                    "assets/PAGES/03-sore/06.shugarplums/126.png",
                    "assets/PAGES/03-sore/06.shugarplums/127.png",
                    "assets/PAGES/03-sore/06.shugarplums/128.png",
                    "assets/PAGES/03-sore/06.shugarplums/129.png"
                ]
            },
            {
                title: "07. Labuh ke Pelukan Kala",
                author: "96kuchengzz",
                rating: "",
                pages: [
                    "assets/PAGES/03-sore/07.96kuchengzz/130.png",
                    "assets/PAGES/03-sore/07.96kuchengzz/131.png",
                    "assets/PAGES/03-sore/07.96kuchengzz/132.png",
                    "assets/PAGES/03-sore/07.96kuchengzz/133.png",
                    "assets/PAGES/03-sore/07.96kuchengzz/134.png",
                    "assets/PAGES/03-sore/07.96kuchengzz/135.png",
                    "assets/PAGES/03-sore/07.96kuchengzz/136.png",
                    "assets/PAGES/03-sore/07.96kuchengzz/137.png",
                    "assets/PAGES/03-sore/07.96kuchengzz/138.png"
                ]
            },
            {
                title: "08. A Symphony Only We Can Hear",
                author: "cacaaamor",
                rating: "",
                pages: [
                    "assets/PAGES/03-sore/08.cacaaamor/139.png",
                    "assets/PAGES/03-sore/08.cacaaamor/140.png",
                    "assets/PAGES/03-sore/08.cacaaamor/141.png",
                    "assets/PAGES/03-sore/08.cacaaamor/142.png",
                    "assets/PAGES/03-sore/08.cacaaamor/143.png",
                    "assets/PAGES/03-sore/08.cacaaamor/144.png",
                    "assets/PAGES/03-sore/08.cacaaamor/145.png",
                    "assets/PAGES/03-sore/08.cacaaamor/146.png"]
            },
            {
                title: "09. Rute Sembilan",
                author: "Rad",
                rating: "",
                pages: [
                    "assets/PAGES/03-sore/09.rad/147.png",
                    "assets/PAGES/03-sore/09.rad/148.png",
                    "assets/PAGES/03-sore/09.rad/149.png",
                    "assets/PAGES/03-sore/09.rad/150.png",
                    "assets/PAGES/03-sore/09.rad/151.png",
                    "assets/PAGES/03-sore/09.rad/152.png",
                    "assets/PAGES/03-sore/09.rad/153.png",
                    "assets/PAGES/03-sore/09.rad/154.png"]
            },
            {
                title: "10. As Long as I Am Breathing and My Heart Is Beating (You Don’t Need a Reason to Call)",
                author: "agus",
                rating: "",
                pages: [
                    "assets/PAGES/03-sore/10.agus/155.png",
                    "assets/PAGES/03-sore/10.agus/156.png",
                    "assets/PAGES/03-sore/10.agus/157.png",
                    "assets/PAGES/03-sore/10.agus/158.png"]
            },
            {
                title: "11. Suaramu dalam Sunyiku",
                author: "Sena",
                rating: "",
                pages: [
                    "assets/PAGES/03-sore/11.Sena/159.png",
                    "assets/PAGES/03-sore/11.Sena/160.png",
                    "assets/PAGES/03-sore/11.Sena/161.png",
                    "assets/PAGES/03-sore/11.Sena/162.png",
                    "assets/PAGES/03-sore/11.Sena/163.png"
                ]
            }
        ]
    },

    malam: {
        title: "Chapter 4: Malam",
        cover: "assets/PAGES/04-malam/164. COVER MALAM.png",

        works: [
            {
                title: "01. Artwork by dyata",
                author: "dyata",
                rating: "",
                pages: [
                    "assets/CREDIT PAGE/by dyata.png",
                    "assets/PAGES/04-malam/01. dyata/165.png",
                    "assets/PAGES/04-malam/01. dyata/166.png",
                    "assets/EMPTY_PAGE.png"
                ]
            },
            {
                title: "02. Artwork by tunakaleng",
                author: "tunakaleng",
                rating: "",
                pages: [
                    "assets/CREDIT PAGE/by tunakaleng.png",
                    "assets/PAGES/04-malam/02. tunakaleng/167.png",
                    "assets/PAGES/04-malam/02. tunakaleng/168.png",
                    "assets/EMPTY_PAGE.png"
                ]
            },
            {
                title: "03. Artwork by Day",
                author: "Day",
                rating: "",
                pages: [
                    "assets/CREDIT PAGE/by Day.png",
                    "assets/PAGES/04-malam/03. Day/169.png"
                ]
            },
            {
                title: "04. Artwork by AQy",
                author: "AQy",
                rating: "",
                pages: [
                    "assets/CREDIT PAGE/by AQy.png",
                    "assets/PAGES/04-malam/04. AQy/170.png"
                ]
            },
            {
                title: "05. Artwork by tofumandu_",
                author: "tofumandu_",
                rating: "",
                pages: [
                    "assets/CREDIT PAGE/by tofumandu_.png",
                    "assets/PAGES/04-malam/05. tofumandu_/171.png"
                ]
            },
            {
                title: "05. We Could Always Begin Again",
                author: "vi",
                rating: "adult-content",
                pages: [
                    "assets/PAGES/04-malam/06. vi/172.png",
                    "assets/PAGES/04-malam/06. vi/173.png",
                    "assets/PAGES/04-malam/06. vi/174.png",
                    "assets/PAGES/04-malam/06. vi/175.png",
                    "assets/PAGES/04-malam/06. vi/176.png",
                    "assets/PAGES/04-malam/06. vi/177.png",
                    "assets/PAGES/04-malam/06. vi/177.png",
                    "assets/PAGES/04-malam/06. vi/178.png",
                    "assets/PAGES/04-malam/06. vi/179.png",
                    "assets/PAGES/04-malam/06. vi/180.png",
                ]
            },
            {
                title: "07. A Home between Those Stars; It's You",
                author: "serpentesea",
                rating: "",
                pages: [
                    "assets/PAGES/04-malam/07. serpentesea/181.png",
                    "assets/PAGES/04-malam/07. serpentesea/182.png",
                    "assets/PAGES/04-malam/07. serpentesea/183.png",
                    "assets/PAGES/04-malam/07. serpentesea/184.png",
                    "assets/PAGES/04-malam/07. serpentesea/185.png",
                    "assets/PAGES/04-malam/07. serpentesea/186.png",
                    "assets/PAGES/04-malam/07. serpentesea/187.png",
                    "assets/PAGES/04-malam/07. serpentesea/188.png",
                    "assets/PAGES/04-malam/07. serpentesea/189.png"
                ]
            },
            {
                title: "08. Orbit Ku Singgah",
                author: "dolphinwhisper",
                rating: "",
                pages: [
                    "assets/PAGES/04-malam/08. dolphinwhisper/190.png",
                    "assets/PAGES/04-malam/08. dolphinwhisper/191.png",
                    "assets/PAGES/04-malam/08. dolphinwhisper/192.png",
                    "assets/PAGES/04-malam/08. dolphinwhisper/193.png",
                    "assets/PAGES/04-malam/08. dolphinwhisper/194.png",
                    "assets/PAGES/04-malam/08. dolphinwhisper/195.png",
                    "assets/PAGES/04-malam/08. dolphinwhisper/196.png",
                    "assets/PAGES/04-malam/08. dolphinwhisper/197.png",
                    "assets/PAGES/04-malam/08. dolphinwhisper/198.png",
                    "assets/PAGES/04-malam/08. dolphinwhisper/199.png"]
            },
            {
                title: "09. Hangat Dalam Peluk",
                author: "uyupochuu",
                rating: "",
                pages: [
                    "assets/PAGES/04-malam/09. uyupochuu/200.png"
                ]
            },
            {
                title: "10. After Hours",
                author: "atmidnight",
                rating: "",
                pages: [
                    "assets/PAGES/04-malam/10. atmidnight/201.png",
                    "assets/PAGES/04-malam/10. atmidnight/202.png",
                    "assets/PAGES/04-malam/10. atmidnight/203.png",
                    "assets/PAGES/04-malam/10. atmidnight/204.png",
                    "assets/PAGES/04-malam/10. atmidnight/205.png",
                    "assets/PAGES/04-malam/10. atmidnight/206.png"]
            },
            {
                title: "11. Makan Malam",
                author: "ziowrite",
                rating: "adult-content",
                pages: [
                    "assets/PAGES/04-malam/11. ziowrite/207.png",
                    "assets/PAGES/04-malam/11. ziowrite/208.png"]
            },
            {
                title: "12. Kesempatan Kedua",
                author: "may",
                rating: "",
                pages: [
                    "assets/PAGES/04-malam/12. may/209.png",
                    "assets/PAGES/04-malam/12. may/210.png",
                    "assets/PAGES/04-malam/12. may/211.png",
                    "assets/PAGES/04-malam/12. may/212.png"]
            },
            {
                title: "13. Lentera & Lembar Cinta",
                author: "pijaraya",
                rating: "",
                pages: [
                    "assets/PAGES/04-malam/13. pijaraya/213.png",
                    "assets/PAGES/04-malam/13. pijaraya/214.png",
                    "assets/PAGES/04-malam/13. pijaraya/215.png",
                    "assets/PAGES/04-malam/13. pijaraya/216.png",
                    "assets/PAGES/04-malam/13. pijaraya/217.png",
                    "assets/PAGES/04-malam/13. pijaraya/218.png",
                    "assets/PAGES/04-malam/13. pijaraya/219.png",
                    "assets/PAGES/04-malam/13. pijaraya/220.png",
                    "assets/PAGES/04-malam/13. pijaraya/221.png",
                    "assets/PAGES/04-malam/13. pijaraya/222.png"]
            }
        ]
    }

};


document.querySelectorAll(".chapter").forEach(chapter => {

    const chapterId = chapter.id;
    const data = chapterData[chapterId];

    if (!data) return;

    const link = chapter.querySelector("a");

    link.addEventListener("click", () => {
        window.location.hash = `zine-${chapterId}`;
    });

});


let currentChapter = null;

let flatPages = [];
let spreads = [];
let navItems = [];

let currentSpreadIdx = 0;
let currentWorkIndex = -1;

let isFlipping = false;
let mobileObserver = null;
let mobileScrollTarget = null;
let scrollRevealObserver = null;

let scrollViewEnabled = false;

const FLIP_DURATION = 400;

class ContentWarningNotification {
    constructor() {
        this.overlay = document.getElementById("notification-overlay");
        this.questionEl = document.getElementById("notification-question");
        this.yesBtn = document.getElementById("notification-yes");
        this.noBtn = document.getElementById("notification-no");
        this.closeBtn = document.getElementById("notification-close");

        this.onYes = null;
        this.onNo = null;

        if (this.yesBtn) {
            this.yesBtn.addEventListener("click", () => {
                const callback = this.onYes;
                this.hide();
                if (typeof callback === "function") {
                    callback();
                }
            });
        }

        if (this.noBtn) {
            this.noBtn.addEventListener("click", () => {
                const callback = this.onNo;
                this.hide();
                if (typeof callback === "function") {
                    callback();
                }
            });
        }

        if (this.closeBtn) {
            this.closeBtn.addEventListener("click", () => this.hide());
        }

        if (this.overlay) {
            this.overlay.addEventListener("click", event => {
                if (event.target === this.overlay) {
                    this.hide();
                }
            });
        }
    }

    show({ question, yesLabel = "Yes, Continue", noLabel = "No, Skip this content", onYes, onNo }) {
        if (!this.overlay || !this.questionEl || !this.yesBtn || !this.noBtn) {
            return false;
        }

        this.questionEl.textContent = question;
        this.yesBtn.textContent = yesLabel;
        this.noBtn.textContent = noLabel;
        this.onYes = onYes || null;
        this.onNo = onNo || null;

        this.overlay.classList.add("open");
        this.overlay.setAttribute("aria-hidden", "false");

        return true;
    }

    hide() {
        if (!this.overlay) return;

        this.overlay.classList.remove("open");
        this.overlay.setAttribute("aria-hidden", "true");
    }
}

const contentWarningNotification = new ContentWarningNotification();

function getWorkWarning(workIndex) {
    if (!currentChapter || workIndex < 0) return null;

    const chapter = chapterData[currentChapter];
    const work = chapter?.works?.[workIndex];

    if (!work) return null;

    const tag = (work.rating || "").trim().toLowerCase();

    if (tag === "adult-content") {
        return {
            type: "adult-content",
            question: "Please note: The following material includes explicit and mature themes. Proceeding serves as confirmation that you meet the legal age requirements to access this content and do so voluntarily."
        };
    }

    if (tag === "suicide attempt") {
        return {
            type: "suicide-attempt",
            question: "Please note: The following material might include adult content and or sensitive themes, including depictions of suicide attempts. Proceeding serves as confirmation that you meet the legal age requirements to access this content and do so at your own discretion."
        };
    }

    return null;
}
function renderContributors() {
    document.querySelectorAll(".cont-chapt").forEach(container => {
        const chapterKey = container.dataset.chapter;
        const chapter = chapterData[chapterKey];

        if (!chapter) return;

        const list = container.querySelector("ul");
        if (!list) return;

        list.innerHTML = "";

        chapter.works.forEach(work => {
            if (!work.author) return;

            const li = document.createElement("li");
            li.textContent = work.author;
            list.appendChild(li);
        });
    });
}

renderContributors();
function findNextWorkIndex(startIndex) {
    const chapter = chapterData[currentChapter];
    if (!chapter) return null;

    for (let i = startIndex + 1; i < chapter.works.length; i++) {
        return i;
    }

    return null;
}

function jumpToWorkInternal(workIndex) {
    if (getEffectiveMode() === "mobile") {
        mobileScrollTarget = workIndex;
        currentWorkIndex = workIndex;
        scrollToWork(workIndex);
        updateNavigator();
        return;
    }

    if (workIndex === -1) {
        renderSpread(0);
        return;
    }

    const idx = findSpreadIndexForWork(workIndex);
    renderSpread(idx);
}

function openWorkWithWarning(workIndex) {
    if (!currentChapter) {
        jumpToWorkInternal(workIndex);
        return;
    }

    const warning = getWorkWarning(workIndex);

    if (!warning) {
        jumpToWorkInternal(workIndex);
        return;
    }

    contentWarningNotification.show({
        question: warning.question,
        onYes: () => jumpToWorkInternal(workIndex),
        onNo: () => {
            const nextIndex = findNextWorkIndex(workIndex);

            if (nextIndex !== null) {
                openWorkWithWarning(nextIndex);
                return;
            }

            renderSpread(0);
        }
    });
}

function replayPageAnimation(section) {

    section.classList.remove("page-enter");

    void section.offsetWidth;

    section.classList.add("page-enter");
}

function setupScrollReveal() {

    const revealItems = document.querySelectorAll(
        ".home > div, .chapter-page .chapters, .chapter-page .chapter, .footer-page > *"
    );

    revealItems.forEach((item, index) => {
        item.classList.add("scroll-reveal");
        item.style.transitionDelay = `${Math.min(index % 4, 3) * 90}ms`;
    });

    if (!("IntersectionObserver" in window)) {
        revealItems.forEach(item => item.classList.add("is-visible"));
        return;
    }

    scrollRevealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");
            scrollRevealObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px"
    });

    revealItems.forEach(item => scrollRevealObserver.observe(item));
}


function buildChapterPages(chapterKey) {

    const chapter = chapterData[chapterKey];

    if (!chapter) {
        return { flat: [], navItems: [] };
    }

    const flat = [
        { src: chapter.cover, workIndex: -1 }
    ];

    chapter.works.forEach((work, wIndex) => {

        (work.pages || []).forEach(pagePath => {
            flat.push({ src: pagePath, workIndex: wIndex });
        });

    });

    const nav = [
        { title: "Cover", workIndex: -1 },
        ...chapter.works.map((work, wIndex) => ({
            title: work.title,
            workIndex: wIndex
        }))
    ];

    return { flat, navItems: nav };
}

function buildSpreads(flat) {

    const result = [
        { left: null, right: flat[0] || null }
    ];

    for (let i = 1; i < flat.length; i += 2) {
        result.push({
            left: flat[i] || null,
            right: flat[i + 1] || null
        });
    }

    return result;
}

function findSpreadIndexForWork(workIndex) {

    for (let i = 0; i < spreads.length; i++) {

        const s = spreads[i];

        if ((s.left && s.left.workIndex === workIndex) ||
            (s.right && s.right.workIndex === workIndex)) {
            return i;
        }
    }

    return 0;
}


const book = document.getElementById("book");

const pageLeftEl = document.getElementById("pageLeft");
const pageRightEl = document.getElementById("pageRight");
const imgLeft = document.getElementById("imgLeft");
const imgRight = document.getElementById("imgRight");

const flipPage = document.getElementById("flipPage");
const flipFrontEl = document.querySelector(".flip-front");
const flipBackEl = document.querySelector(".flip-back");
const flipFrontImg = document.getElementById("flipFrontImg");
const flipBackImg = document.getElementById("flipBackImg");


function setPageImage(imgEl, containerEl, entry) {

    if (entry && entry.src) {
        imgEl.src = entry.src;
        containerEl.classList.remove("blank");
    } else {
        imgEl.removeAttribute("src");
        containerEl.classList.add("blank");
    }
}
const preloadedImages = new Set();

function preloadImage(src) {
    if (!src || preloadedImages.has(src)) return;
    preloadedImages.add(src);

    const img = new Image();
    img.src = src;
}

function preloadSpread(idx) {
    const spread = spreads[idx];
    if (!spread) return;

    if (spread.left) preloadImage(spread.left.src);
    if (spread.right) preloadImage(spread.right.src);
}

function preloadAroundSpread(idx) {
    preloadSpread(idx - 1);
    preloadSpread(idx);
    preloadSpread(idx + 1);
    preloadSpread(idx + 2);
}

function preloadAllChapterImages(chapterKey) {
    const chapter = chapterData[chapterKey];
    if (!chapter) return;

    preloadImage(chapter.cover);

    chapter.works.forEach(work => {
        (work.pages || []).forEach(pagePath => preloadImage(pagePath));
    });
}

function applySpreadState(idx) {

    const spread = spreads[idx];

    if (!spread) return;

    currentSpreadIdx = idx;

    book.classList.toggle("open", idx !== 0);

    currentWorkIndex = spread.right
        ? spread.right.workIndex
        : (spread.left ? spread.left.workIndex : -1);

    updateNavigator();

    preloadAroundSpread(idx);
}

function renderSpread(idx) {

    const spread = spreads[idx];

    if (!spread) return;

    setPageImage(imgLeft, pageLeftEl, spread.left);
    setPageImage(imgRight, pageRightEl, spread.right);

    applySpreadState(idx);
}

function flipForward() {

    if (isFlipping) return;
    if (currentSpreadIdx >= spreads.length - 1) return;

    const current = spreads[currentSpreadIdx];
    const next = spreads[currentSpreadIdx + 1];
    const nextWorkIndex = next.right
        ? next.right.workIndex
        : (next.left ? next.left.workIndex : -1);

    if (nextWorkIndex !== currentWorkIndex && getWorkWarning(nextWorkIndex)) {
        openWorkWithWarning(nextWorkIndex);
        return;
    }

    if (!current.right) {
        renderSpread(currentSpreadIdx + 1);
        return;
    }

    isFlipping = true;
    playFlipSound();
    if (currentSpreadIdx === 0) {
        book.classList.add("open");
    }

    flipPage.classList.remove("hidden", "flip-left");
    flipPage.classList.add("flip-right");

    flipPage.style.transition = "none";
    flipPage.style.transform = "rotateY(0deg)";

    setPageImage(flipFrontImg, flipFrontEl, current.right);
    setPageImage(flipBackImg, flipBackEl, next.left);

    void flipPage.offsetWidth;

    flipPage.style.transition = "";

    requestAnimationFrame(() => {
        flipPage.style.transform = "rotateY(-180deg)";
    });

    const swapTimer = setTimeout(() => {
        setPageImage(imgLeft, pageLeftEl, next.left);
        setPageImage(imgRight, pageRightEl, next.right);
    }, FLIP_DURATION / 2);

    const onEnd = (event) => {
        if (event.target !== flipPage || event.propertyName !== "transform") return;

        clearTimeout(swapTimer);
        setPageImage(imgLeft, pageLeftEl, next.left);
        setPageImage(imgRight, pageRightEl, next.right);

        flipPage.removeEventListener("transitionend", onEnd);

        flipPage.classList.add("hidden");
        flipPage.style.transform = "rotateY(0deg)";

        applySpreadState(currentSpreadIdx + 1);

        isFlipping = false;
    };

    flipPage.addEventListener("transitionend", onEnd);
}

function flipBackward() {

    if (isFlipping) return;
    if (currentSpreadIdx <= 0) return;

    const current = spreads[currentSpreadIdx];
    const prev = spreads[currentSpreadIdx - 1];
    const previousWorkIndex = prev.right
        ? prev.right.workIndex
        : (prev.left ? prev.left.workIndex : -1);

    if (previousWorkIndex !== currentWorkIndex && getWorkWarning(previousWorkIndex)) {
        openWorkWithWarning(previousWorkIndex);
        return;
    }

    if (!current.left) {
        renderSpread(currentSpreadIdx - 1);
        return;
    }

    isFlipping = true;
    playFlipSound();

    if (currentSpreadIdx - 1 === 0) {
        book.classList.remove("open");
    }

    flipPage.classList.remove("hidden", "flip-right");
    flipPage.classList.add("flip-left");

    flipPage.style.transition = "none";
    flipPage.style.transform = "rotateY(0deg)";

    setPageImage(flipFrontImg, flipFrontEl, current.left);
    setPageImage(flipBackImg, flipBackEl, prev.right);

    void flipPage.offsetWidth;

    flipPage.style.transition = "";

    requestAnimationFrame(() => {
        flipPage.style.transform = "rotateY(180deg)";
    });

    const swapTimer = setTimeout(() => {
        setPageImage(imgLeft, pageLeftEl, prev.left);
        setPageImage(imgRight, pageRightEl, prev.right);
    }, FLIP_DURATION / 2);

    const onEnd = (event) => {
        if (event.target !== flipPage || event.propertyName !== "transform") return;

        clearTimeout(swapTimer);
        setPageImage(imgLeft, pageLeftEl, prev.left);
        setPageImage(imgRight, pageRightEl, prev.right);

        flipPage.removeEventListener("transitionend", onEnd);

        flipPage.classList.add("hidden");
        flipPage.style.transform = "rotateY(0deg)";

        applySpreadState(currentSpreadIdx - 1);

        isFlipping = false;
    };

    flipPage.addEventListener("transitionend", onEnd);
}

function jumpToWork(workIndex) {

    openWorkWithWarning(workIndex);
}


const mobilePages = document.getElementById("mobile-pages");

function renderMobilePages() {

    mobilePages.innerHTML = "";
    mobileScrollTarget = null;

    if (!currentChapter) return;

    const chapter = chapterData[currentChapter];

    if (!chapter) return;

    const cover = document.createElement("img");

    cover.className = "mobile-page mobile-cover";
    cover.src = chapter.cover;
    cover.alt = chapter.title;
    cover.dataset.workIndex = "-1";

    mobilePages.appendChild(cover);

    chapter.works.forEach((work, wIndex) => {

        if (!work.pages) return;

        work.pages.forEach((pagePath, index) => {

            const page = document.createElement("img");

            page.className = "mobile-page mobile-work-page";
            page.src = pagePath;
            page.alt = `${work.title} - Page ${index + 1}`;
            page.dataset.workIndex = String(wIndex);
            page.dataset.firstPage = String(index === 0);

            mobilePages.appendChild(page);

        });

    });

    setupMobileScrollSpy();
}

function setupMobileScrollSpy() {

    if (mobileObserver) {
        mobileObserver.disconnect();
    }

    if (!("IntersectionObserver" in window)) return;

    mobileObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const workIndex = Number(entry.target.dataset.workIndex);
            const isFirstContentPage = entry.target.dataset.firstPage === "true";

            if (Number.isNaN(workIndex)) return;

            if (mobileScrollTarget !== null) {
                if (workIndex !== mobileScrollTarget) return;

                mobileScrollTarget = null;
                currentWorkIndex = workIndex;
                updateNavigator();
                return;
            }

            if (workIndex === currentWorkIndex) return;

            if (!isFirstContentPage) {
                currentWorkIndex = workIndex;
                updateNavigator();
                return;
            }

            if (getWorkWarning(workIndex)) {
                const previousWorkIndex = currentWorkIndex;

                openWorkWithWarning(workIndex);
                scrollToWork(previousWorkIndex);
                return;
            }

            currentWorkIndex = workIndex;
            updateNavigator();
        });

    }, {
        root: mobilePages,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0
    });

    mobilePages.querySelectorAll("[data-work-index]").forEach(el => {
        mobileObserver.observe(el);
    });
}

function scrollToWork(workIndex) {

    const el = mobilePages.querySelector(`[data-work-index="${workIndex}"]`);

    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function resizeCanvas() {
}

function getEffectiveMode() {

    if (window.innerWidth <= 700) return "mobile";

    return scrollViewEnabled ? "mobile" : "desktop";
}

function showMain() {

    zine.classList.remove("active");

    landing.classList.add("hide");

    main.classList.add("show");
    replayPageAnimation(main);

    currentChapter = null;
    flatPages = [];
    spreads = [];
    navItems = [];
    currentSpreadIdx = 0;
    currentWorkIndex = -1;

    if (mobileObserver) {
        mobileObserver.disconnect();
    }
}

function showZine(chapter) {

    if (!chapterData[chapter]) return;

    landing.classList.add("hide");
    currentChapter = chapter;

    const built = buildChapterPages(chapter);

    flatPages = built.flat;
    navItems = built.navItems;
    spreads = buildSpreads(flatPages);

    currentSpreadIdx = 0;
    currentWorkIndex = -1;

    main.classList.remove("show");
    zine.classList.add("active");
    replayPageAnimation(zine);
    preloadAllChapterImages(chapter);

    lastMode = getEffectiveMode();

    if (lastMode === "mobile") {
        showMobileZine();
    } else {
        showDesktopZine();
    }
}

function showMobileZine() {

    book.style.display = "none";

    document.querySelector(".prev-page").style.display = "none";
    document.querySelector(".next-page").style.display = "none";

    mobilePages.style.display = "flex";

    if (mobileObserver) {
        mobileObserver.disconnect();
    }

    renderMobilePages();

    currentWorkIndex = -1;
    updateNavigator();
}

function showDesktopZine() {

    book.style.display = "block";

    document.querySelector(".prev-page").style.display = "flex";
    document.querySelector(".next-page").style.display = "flex";

    mobilePages.style.display = "none";

    if (mobileObserver) {
        mobileObserver.disconnect();
    }

    flipPage.classList.add("hidden");
    flipPage.style.transform = "rotateY(0deg)";

    renderSpread(currentSpreadIdx || 0);
}

function handleRoute() {

    const hash = window.location.hash;

    if (hash === "") {
        return;
    }

    if (hash === "#main") {
        showMain();
        return;
    }

    if (hash === "#chapter-page") {

        showMain();

        setTimeout(() => {
            document
                .getElementById("chapter-page")
                ?.scrollIntoView({
                    behavior: "smooth"
                });
        }, 50);

        return;
    }

    if (hash.startsWith("#zine-")) {

        const chapter = hash
            .replace("#zine-", "")
            .trim();

        showZine(chapter);

        return;
    }

    showMain();
}

landing.addEventListener("click", () => {

    landing.classList.add("hide");

    let mainShown = false;

    const showMainAfterLanding = () => {
        if (mainShown) {
            return;
        }

        mainShown = true;

        main.classList.add("show");
        replayPageAnimation(main);

        if (!window.location.hash) {
            history.replaceState(
                null,
                "",
                "#main"
            );
        }

    };

    landing.addEventListener(
        "transitionend",
        event => {
            if (event.propertyName === "opacity") {
                showMainAfterLanding();
            }
        },
        { once: true }
    );

    setTimeout(showMainAfterLanding, 800);

});


window.addEventListener("hashchange", handleRoute);

setupScrollReveal();




const pageNav = document.querySelector(".page-nav");
const workTitle = document.querySelector("#work-title");
const menus = document.querySelectorAll(".menu");

menus.forEach(menu => {
    const button = menu.querySelector(":scope > i");

    button.addEventListener("click", event => {
        event.stopPropagation();

        menus.forEach(otherMenu => {
            if (otherMenu !== menu) {
                otherMenu.classList.remove("open");
            }
        });

        menu.classList.toggle("open");
    });
});

document.addEventListener("click", event => {
    menus.forEach(menu => {
        if (!menu.contains(event.target)) {
            menu.classList.remove("open");
        }
    });
});

const zineViewToggle = document.getElementById("zine-view-toggle");

function updateViewToggleLabel() {

    if (!zineViewToggle) return;

    const icon = zineViewToggle.querySelector("i");
    const label = zineViewToggle.querySelector(".menu-label");

    if (scrollViewEnabled) {
        if (icon) icon.className = "fa-solid fa-book-open menu-icon";
        if (label) label.textContent = "Book View";
    } else {
        if (icon) icon.className = "fa-solid fa-mobile-screen-button menu-icon";
        if (label) label.textContent = "Scroll View";
    }
}

if (zineViewToggle) {

    zineViewToggle.addEventListener("click", event => {

        event.preventDefault();
        event.stopPropagation();
        if (window.innerWidth <= 700) return;

        scrollViewEnabled = !scrollViewEnabled;
        updateViewToggleLabel();

        menus.forEach(menu => menu.classList.remove("open"));

        if (!currentChapter) return;

        const mode = getEffectiveMode();

        if (mode === lastMode) return;

        lastMode = mode;

        if (mode === "desktop") {
            showDesktopZine();
        } else {
            showMobileZine();
        }
    });

    updateViewToggleLabel();
}


function updateNavigator() {

    updateZineBookmarkButton();

    workTitle.innerHTML = "";

    if (!navItems.length) return;

    const activeItem =
        navItems.find(item => item.workIndex === currentWorkIndex) ||
        navItems[0];

    if (pageNav.classList.contains("open")) {

        navItems.forEach(item => {

            const el = document.createElement("div");

            el.className = "work-item";

            if (item.workIndex === currentWorkIndex) {
                el.classList.add("active");
            }

            el.textContent = item.title;

            el.addEventListener("click", event => {

                event.stopPropagation();

                pageNav.classList.remove("open");

                if (getEffectiveMode() === "desktop") {
                    jumpToWork(item.workIndex);
                } else {
                    jumpToWork(item.workIndex);
                }
            });

            workTitle.appendChild(el);
        });

    } else {

        const item = document.createElement("div");

        item.className = "work-item active";
        item.textContent = activeItem.title;

        workTitle.appendChild(item);
    }
}


pageNav.addEventListener("click", () => {

    pageNav.classList.toggle("open");

    updateNavigator();

});

document
    .querySelector(".next-page")
    .addEventListener("click", () => {
        flipForward();
    });

document
    .querySelector(".prev-page")
    .addEventListener("click", () => {
        flipBackward();
    });
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            flipBackward();
            break;
        case "ArrowRight":
            flipForward();
            break;
        default:
            return;
    }
    event.preventDefault();
});

let lastMode = window.innerWidth <= 700 ? "mobile" : "desktop";

window.addEventListener("resize", () => {

    if (!currentChapter) return;

    const mode = getEffectiveMode();

    if (mode === lastMode) return;

    lastMode = mode;

    if (mode === "desktop") {
        showDesktopZine();
    } else {
        showMobileZine();
    }

});

const BOOKMARK_STORAGE_KEY = "mmr-bookmarks";

function getBookmarks() {

    try {
        const raw = localStorage.getItem(BOOKMARK_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveBookmarksList(list) {

    try {
        localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
    }
}

function getWorkTitle(chapter, workIndex) {

    const chapter_data = chapterData[chapter];

    if (!chapter_data) return "";

    if (workIndex === -1) return "Cover";

    const work = chapter_data.works[workIndex];

    return work ? work.title : "";
}

function isBookmarked(chapter, workIndex) {

    return getBookmarks().some(
        b => b.chapter === chapter && b.workIndex === workIndex
    );
}

function toggleBookmark(chapter, workIndex) {

    if (!chapter) return;

    const list = getBookmarks();

    const idx = list.findIndex(
        b => b.chapter === chapter && b.workIndex === workIndex
    );

    if (idx !== -1) {
        list.splice(idx, 1);
    } else {
        list.push({
            chapter,
            workIndex,
            title: getWorkTitle(chapter, workIndex),
            chapterTitle: chapterData[chapter] ? chapterData[chapter].title : chapter
        });
    }

    saveBookmarksList(list);

    updateZineBookmarkButton();
    renderBookmarkList();
}

function removeBookmark(chapter, workIndex) {

    const list = getBookmarks().filter(
        b => !(b.chapter === chapter && b.workIndex === workIndex)
    );

    saveBookmarksList(list);

    updateZineBookmarkButton();
    renderBookmarkList();
}

const zineBookmarkBtn = document.getElementById("zine-bookmark-btn");
const navBookmarkButtons = document.querySelectorAll(".nav-bookmark-btn");

const bookmarkOverlay = document.getElementById("bookmark-overlay");
const bookmarkListEl = document.getElementById("bookmark-list");
const bookmarkCloseBtn = document.getElementById("bookmark-close");

function updateZineBookmarkButton() {

    if (!zineBookmarkBtn) return;

    const bookmarked = currentChapter
        ? isBookmarked(currentChapter, currentWorkIndex)
        : false;

    zineBookmarkBtn.classList.toggle("active", bookmarked);
}

function renderBookmarkList() {

    if (!bookmarkListEl) return;

    const list = getBookmarks();

    bookmarkListEl.innerHTML = "";

    if (!list.length) {

        const empty = document.createElement("div");

        empty.className = "bookmark-empty";
        empty.textContent = "Belum ada karya yang di-bookmark.";

        bookmarkListEl.appendChild(empty);

        return;
    }

    list.forEach(item => {

        const el = document.createElement("div");
        el.className = "bookmark-item";

        const info = document.createElement("div");
        info.className = "bookmark-item-info";

        const chapterLabel = document.createElement("div");
        chapterLabel.className = "bookmark-item-chapter";
        chapterLabel.textContent = item.chapterTitle || item.chapter;

        const titleLabel = document.createElement("div");
        titleLabel.className = "bookmark-item-title";
        titleLabel.textContent = item.title;

        info.appendChild(chapterLabel);
        info.appendChild(titleLabel);

        info.addEventListener("click", () => goToBookmark(item));

        const removeBtn = document.createElement("button");

        removeBtn.type = "button";
        removeBtn.className = "bookmark-remove";
        removeBtn.setAttribute("aria-label", "Remove bookmark");
        removeBtn.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';

        removeBtn.addEventListener("click", event => {
            event.stopPropagation();
            removeBookmark(item.chapter, item.workIndex);
        });

        el.appendChild(info);
        el.appendChild(removeBtn);

        bookmarkListEl.appendChild(el);
    });
}

function openBookmarkPanel() {

    if (!bookmarkOverlay) return;

    menus.forEach(menu => menu.classList.remove("open"));

    renderBookmarkList();

    bookmarkOverlay.classList.add("open");
}

function closeBookmarkPanel() {

    if (!bookmarkOverlay) return;

    bookmarkOverlay.classList.remove("open");
}

function goToBookmark(item) {

    closeBookmarkPanel();

    const jumpNow = () => {

        if (item.workIndex === -1) {
            updateZineBookmarkButton();
            return;
        }

        if (getEffectiveMode() === "desktop") {
            jumpToWork(item.workIndex);
        } else {
            jumpToWork(item.workIndex);
        }

        updateZineBookmarkButton();
    };

    if (currentChapter === item.chapter && zine.classList.contains("active")) {
        jumpNow();
    } else {
        window.location.hash = `zine-${item.chapter}`;
        setTimeout(jumpNow, 200);
    }
}

if (zineBookmarkBtn) {

    zineBookmarkBtn.addEventListener("click", event => {

        event.preventDefault();
        event.stopPropagation();

        if (!currentChapter) return;

        toggleBookmark(currentChapter, currentWorkIndex);
    });
}

navBookmarkButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.preventDefault();
        event.stopPropagation();

        openBookmarkPanel();
    });
});

if (bookmarkCloseBtn) {
    bookmarkCloseBtn.addEventListener("click", () => closeBookmarkPanel());
}

if (bookmarkOverlay) {

    bookmarkOverlay.addEventListener("click", event => {

        if (event.target === bookmarkOverlay) {
            closeBookmarkPanel();
        }
    });
}

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeBookmarkPanel();
    }
});

handleRoute();

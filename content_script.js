var targets = {
	"BIC_4graphs.jpg": /^.*\/(BIC_4graphs.jpg)$/,
	"ct.JPG": /^.*\/(ct.JPG)$/,
	"image10.jpg": /^.*\/(image10.jpg)$/,
	"image11.jpg": /^.*\/(image11.jpg)$/,
	"image12.jpg": /^.*\/(image12.jpg)$/,
	"image14.jpg": /^.*\/(image14.jpg)$/,
	"image15.jpg": /^.*\/(image15.jpg)$/,
	"image16.jpg": /^.*\/(image16.jpg)$/,
	"ismarkov.png": /^.*\/(ismarkov.png)$/,
	"new09_q8b.jpg": /^.*\/(new09_q8b.jpg)$/,
	"Q4.jpg": /^.*\/(Q4.jpg)$/,
	"quiz2-Q6-1.jpg": /^.*\/(quiz2-Q6-1.jpg)$/,
	"quiz4q3a.jpg": /^.*\/(quiz4q3a.jpg)$/,
	"scgnetwork.png": /^.*\/(scgnetwork.png)$/,
	"tbn.jpg": /^.*\/(tbn.jpg)$/,
	"ve-ig-g1-o1-1.jpg": /^.*\/(ve-ig-g1-o1-1.jpg)$/,
	"ve-ig-g1-o1-2.jpg": /^.*\/(ve-ig-g1-o1-2.jpg)$/,
	"ve-ig-g1-o1-3.jpg": /^.*\/(ve-ig-g1-o1-3.jpg)$/,
	"ve-ig-g1-o1-4.jpg": /^.*\/(ve-ig-g1-o1-4.jpg)$/,
	"ve-ig-g1-o1-5.jpg": /^.*\/(ve-ig-g1-o1-5.jpg)$/
// Woo hoo! A former Community TA Miguel got it for us! (ve-ig-g1-o1-5.jpg)
}

var imgs = document.getElementsByTagName("img");
for (var img in imgs) {
	if (typeof(imgs[img].src) == "string") {
		for (var key in targets) {
			var reg = targets[key];
			if ((imgs[img].src != null) && (imgs[img].src.search(reg) != -1)) {
				imgs[img].src = chrome.runtime.getURL("images/" + key);
			}
		}
	}
}

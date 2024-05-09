const img =
	"https://cdn0-production-images-kly.akamaized.net/WoI0CgHjSAqQhtTLqtJ0an0oYZY=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1265344/original/074145100_1466000989-Valak.jpg";
const landingBtn = document.querySelector(".landing__btn");

landingBtn.addEventListener("click", () => {
	const newImage = document.createElement("img");
	newImage.src = img;
	newImage.setAttribute(
		"class",
		"fixed inset-0 z-50 w-full h-full object-center object-cover cursor-pointer jumpscare"
	);
	document.body.appendChild(newImage);

	newImage.addEventListener("click", () => {
		document.body.removeChild(newImage);
	});
});

const canvas = document.getElementById("canvas");
const starback = new Starback(canvas, {
	width: 1440,
	height: 600,
	speed: 5,
	spread: 0.2,
	backgroundColor: "transparent",
	starColor: "#ffffff"
});
starback.generateStar(15);

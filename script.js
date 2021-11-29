const cat_btn = document.getElementById('cat_btn');
const cat_image = document.getElementById('cat_image');

cat_btn.addEventListener('click', getRandomCat);

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_image.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

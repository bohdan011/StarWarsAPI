const btn = document.getElementById('btnGet')
const heroesBlock = document.getElementById('heroes-block-js')
let pageNum = 1;


async function getData() {
	return await (await fetch('https://swapi.dev/api/people/' + `${pageNum}`)).json();
}


btn.addEventListener('click', async function () {
	const results = await getData();
	heroesBlock.innerHTML += `<div class="heroes-item">
			<p class="heroes-item__text name">${results.name}</p>
			<p class="heroes-item__text height">${results.height}</p>
			<p class="heroes-item__text mass">${results.mass}</p>
			<p class="heroes-item__text gender">${results.gender}</p>
			</div>`;
	pageNum += 1;
})





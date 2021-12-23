const btn = document.getElementById('btnGet')
const heroesBlock = document.getElementById('heroes-block-js')
let pageNum = 1;


async function getData() {
	return await (await fetch('https://swapi.dev/api/people/' + `${pageNum}`)).json();
}

async function getName() {
	return await (await getData()).name;
}

async function getHeight() {
	return await (await getData()).height;
}

async function getMass() {
	return await (await getData()).mass;
}

async function getGender() {
	return await (await getData()).gender;
}

btn.addEventListener('click', async function () {
	heroesBlock.innerHTML += `<div class="heroes-item">
			<p class="heroes-item__text name">${await getName()}</p>
			<p class="heroes-item__text height">${await getHeight()}</p>
			<p class="heroes-item__text mass">${await getMass()}</p>
			<p class="heroes-item__text gender">${await getGender()}</p>
			</div>`;
	pageNum += 1;
})





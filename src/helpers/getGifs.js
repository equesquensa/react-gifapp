export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&api_key=GU7Wc3ctFzH8Uds4UxDdm13cGkm92aL0`;

	const res = await fetch(url);
	const { data } = await res.json();

	const gifs = data.map((gif) => {
		return {
			id: gif.id,
			title: gif.title,
			url: gif.images.downsized.url,
		};
	});

	return gifs;
};

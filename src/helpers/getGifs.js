export const getGifs = async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=cbIaMVmfeY7wC30Me29tynYFnaiapfkd`;
    const resp = await fetch(url)
    const {data} = await resp.json();

    const gifts = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.embed_url
        }
    });

    return gifts;
}
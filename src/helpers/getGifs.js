
export const getGif=async(category)=> {
    
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=W447jMXKZWWmJeG28B4vSARPidhqZWm1&limit=10`
    const res=await fetch(url)
    const {data}=await res.json()

    const gifs=data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            image:img.images?.downsized_medium.url
        }
    })
    return gifs
}

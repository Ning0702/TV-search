const form = document.querySelector('#searchForm');
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    // console.log("SUBMITTED!");
    // console.dir(form); // got the structure
    const searchTerm = form.elements.name.value;//get the input value
    // console.log(searchTerm)  //Test the input 
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.name.value = ''; //clean the input text
})

const makeImages = (shows) => { 
    for (let result of shows) {
        //console.log(result);
        if (result.show.image) { //if there is a medium image
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
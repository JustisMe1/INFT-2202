/**
 * ADD HEADER COMMENTS WITH YOUR NAME + DATE
 */
console.log('pixabay.js loaded');

// API Key for Pixabay
const PIXABAY_API_KEY = '42719401-7250d144f0b30755c96e0a365'; // normally we would load a key through the .env file
// URL for Pixbay request
const PIXABAY_URL = 'https://pixabay.com/api/?key=<API-KEY>';
// Constant for image count
const imageCount = 30;
//Const for page body
const PgBody = $("body");

/**
 * makePosts
 * Creates posts for pictures.
 */
const makePosts = (pictureData) => {
    //Get img column
    const blogColumn = $('.blog-column')
        .appendTo(PgBody);
    
    //I'm not getting any picture responses at all for some reason.
    console.log(pictureData.length);
    
    //if an image is fetched
    if(pictureData?.length > 0)
    {
        for (let i = 0; i > pictureData?.length; i++)
        {
            let id = i;
            let pixbayPic = pictureData[i];

            let card = $('<div class="card"></div>')
                .attr("id", "card_" + id)
                .attr("style", "width: 18rem")
                .appendTo(blogColumn);

            let img = $("<img")
                .attr("id", "img-" + i)
                .attr("src", pixbayPic.webformatURL)
                .attr("alt", pixbayPic.tags)
                .addClass("card-img-top")
                .appendTo(card);

            let cardBody = $('<div class="card-body"></div>')
                .appendTo(card);

            let cardParagraph = $('<p class="card-text tags"></div>')
                .text(pixbayPic.tags)
                .appendTo(cardBody);
        }
    }
};

/**
 * getPictures
 * retrieves the pictures from Pixabay API
 */
const getPictures = () => 
{
    //get images matching the following: 30 per page, query search cars, horizontal only, type = photo
    const url = `${PIXABAY_URL.replace("<API-KEY>", PIXABAY_API_KEY)}&q=cars&image_type=photo&orientation=horizontal&per_page=${imageCount}`;
    fetch(url)
    .then((res) => {
        /*
        fetching url is returning nothing
        likely due to repeated API calss when running the code improperly
        check with Jen
        */
        console.log(res);
        return res.json;
    })
    .then((data) => {
        makePosts(data);
    })
    .catch((err) => {
        console.log(err);
    }
)};

getPictures();


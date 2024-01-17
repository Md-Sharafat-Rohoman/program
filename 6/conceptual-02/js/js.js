const handleCategory = async () => {
    // console.log('the first');
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await response.json()
    const tabContainer = document.getElementById('tab-container')
    const timeDate = data.data.news_category.slice(0, 3)
    timeDate.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoad('${category.category_id}')" class="tab">${category.category_name}</a> 
        `;
        tabContainer.appendChild(div);
    })

    console.log(data.data.news_category)
};

const handleLoad = async (categoryId) => {
    console.log(categoryId);
    const response = await fetch(`
    https://openapi.programming-hero.com/api/news/category/${categoryId}
    `);
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    data.data.forEach((news) => {
        const div = document.createElement('div');
        div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src=${news.image_url}>
                </figure> 
                <div class="card-body">
                    <h2 class="card-title">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, debitis!
                        <div class="badge badge-secondary p-5">
                            excellent
                        </div>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>
                        Laudantium placeat unde vel iusto ad corrupti itaque <br>
                        consequuntur iure voluptate molestiae.
                    </p>
                    <div class="card-footer flex justify-between mt-8">
                        <div class="flex">
                            <div>
                                <div class="avatar onlin ">
                                    <div class="w-14 rounded-full">
                                        <img src="https://envato-shoebox-0.imgix.net/166b/f123-17e8-4930-96b8-d2a60675a3eb/DSC_18151.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=cbb1bb87a7d6cfcdf95ace17723210e3" alt="">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6>sharafat rohoman</h6>
                                <small>2022-08-24  17:27:34</small>
                            </div>
                        </div>
                        <div class="card-detaild-btn" onclick="handleModal()">
                            <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
                                details
                            </button>
                        </div>
                    </div>
        
                </div>
        
            </div>
    `;
        cardContainer.appendChild(div);
    })

}

const handleModal = (data) => {
    const mordalContainer = document.getElementById("mordal-container");
    const div = document.createElement("div");
    div.innerHTML = `
            <dialog id="my_modal_1" class="modal">
              <form method="dialog" class="modal-box">
                <h3 class="font-bold text-lg">Hello!</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
                <div class="modal-action">
                  <button class="btn">Close</button>
                </div>
              </form>
            </dialog>
    `;
    mordalContainer.appendChild(div);

    const modal = document.getElementById("my_modal_1");
    modal.showModal();
}



handleCategory();
handleLoad("01");

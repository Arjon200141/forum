function loadForum(searchText) {
    fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?searchText=${searchText}`)
        .then(res => res.json())
        .then(data => {displayForum(data.posts);
        });
}

function displayForum(forum) {
    
    const forumContainer = document.getElementById('forum-container');

    for (const details of forum) {
        const divForum = document.createElement('div');
        divForum.classList = 'card p-4 bg-gray-100 shadow-xl';

        divForum.innerHTML = `
            <div class="flex bg-[#F3F3F5]">
            <div class="indicator">
            <div>
            <span class="indicator-item badge ${details.isActive ? 'badge-success' : 'badge-error'} mt-6"></span>
                </div>
             <div class="grid w-20 h-20  mt-6">
            <img src="${details.image}" alt="Post Image" class="rounded-md" />
                </div>
                </div>
                <div class="card-body">
                    <div class="flex font-inter justify-start">
                        <p class='text-start font-inter font-medium text-[#12132DCC]'>#${details.category}</p>
                        <p class='text-start font-inter font-medium text-[#12132DCC]'>Author: ${details.author?.name || 'Unknown'}</p>
                    </div>
                    <p class="text-3xl font-bold text-start text-[#12132D]">${details.title}</p>
                    <p class="text-xl font-bold text-start border-b-2 border-dashed pb-6 text-[#12132D99]">${details.description}</p>
                    <div class="flex justify-between">
                    <div class = "flex justify-between gap-5">
                    <div class = "flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-[#12132D99]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg> 
                    <p><span class='text-lg font-semibold text-center font-inter text-[#12132D99]'>${details.comment_count || 0}</span></p>
                    </div>
                    <div class = "flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-[#12132D99]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <p><span class='text-lg font-semibold text-center font-inter text-[#12132D99]'>${details.view_count || 0}</span></p>
                    </div>
                    <div class = "flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-[#12132D99]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p><span class='text-lg font-semibold text-center font-inter text-[#12132D99]'>${details.posted_time || 'N/A'}</span></p>
                    </div>
                    </div>
                    <div>

                    <button onclick='append(${JSON.stringify(details)})' class="btn bttnt">
                    <svg width="27.999817" height="28.000000" viewBox="0 0 27.9998 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <desc>
                            Created with Pixso.
                    </desc>
                    <defs/>
                    <path id="Vector" d="M13.9997 0C6.26794 0 0 6.26819 0 13.9999C0 21.7314 6.26794 28 13.9997 28C21.7314 28 27.9998 21.7314 27.9998 13.9999C27.9998 6.26819 21.7314 0 13.9997 0ZM13.9999 4.91736L22.2846 10.0835L5.71533 10.0835L13.9999 4.91736ZM22.3878 18.333L22.387 18.333C22.387 19.1616 21.7154 19.833 20.8869 19.833L7.11301 19.833C6.28439 19.833 5.61295 19.1615 5.61295 18.333L5.61295 10.4122C5.61295 10.3246 5.62189 10.2394 5.63644 10.1556L13.5519 15.0914C13.5616 15.0974 13.572 15.1016 13.582 15.1072C13.5925 15.1129 13.6031 15.1185 13.6137 15.1239C13.6696 15.1527 13.7272 15.176 13.7861 15.1912C13.7922 15.1929 13.7982 15.1936 13.8043 15.1949C13.8689 15.2102 13.9343 15.2197 13.9997 15.2197L14.0002 15.2197C14.0006 15.2197 14.0011 15.2197 14.0011 15.2197C14.0664 15.2197 14.1318 15.2104 14.1964 15.1949C14.2025 15.1935 14.2086 15.1929 14.2146 15.1912C14.2734 15.176 14.3308 15.1527 14.387 15.1239C14.3976 15.1185 14.4083 15.1129 14.4187 15.1072C14.4286 15.1016 14.4391 15.0974 14.4488 15.0914L22.3643 10.1556C22.3788 10.2394 22.3878 10.3243 22.3878 10.4122L22.3878 18.333Z" fill="#10B981" fill-opacity="1.000000" fill-rule="nonzero"/>
                </svg>              
                    </button>
                    </div>
                    </div>
                </div>
            </div>
        `;
        forumContainer.appendChild(divForum);
    }
}

function loadLatest(){
    fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    .then(res => res.json())
    .then(data => displayLatest(data))
}


function searchHandler(){
    loader(true);
    const searchFeild = document.getElementById('search-feild');
    const searchText =searchFeild.value.trim();
    if(searchText){
        const forumContainer = document.getElementById('forum-container');
        forumContainer.innerHTML = '';
        search(searchText);
    }
    
    else{
            alert("Please Enter a Valid Category");
            loader(false);
        }
}

function loader(isLoading) {
    const toggleLoader = document.getElementById('spin-loader');
    if (isLoading) {
        toggleLoader.classList.remove('hidden');
    }
    
    else {
        setTimeout(function () {
            toggleLoader.classList.add('hidden');
        }, 2000);
    }
}

function displayLatest(latest) {
     const latestContainer = document.getElementById('latest-post-container');
     for (const detail of latest) {
         const divLatest = document.createElement('div');
         divLatest.classList = 'card p-4 bg-gray-100 shadow-xl ';

         divLatest.innerHTML = `
          </div class="">
                <div class="card-body space-y-3">
                    <img src="${detail.cover_image}" alt="" >
                    <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>

                    <p class="text-[#12132D99]">${detail.author.posted_date || 'No Publish Date'}</p>
                    </div>
                    <p class="text-[#12132D] text-lg font-extrabold">${detail.title}</p>
                    <p class="text-[#12132D99] text-lg">${detail.description}</p>
                    <div class="flex gap-4">
                    <img src="${detail.profile_image}" alt="" class="h-14 w-14 rounded-full">
                    <div>
                    <p class="text-[#12132D] text-lg font-extrabold">${detail.author.name}</p>
                    <p class="text-[#12132D99] text-lg">${detail.author.designation || 'Unknown'}</p>
                    </div>
                    </div>
                </div>
            </div>
        `;
        latestContainer.appendChild(divLatest);
     }
}

    let countTotal = 0;
        function append(details) {
            const appendByClick = document.getElementById('post-container');
            countTotal++;
            document.getElementById('count').innerText = countTotal;

                    const divAppned = document.createElement('div');
                    divAppned.classList = 'flex justify-between bg-gray-100';

                    divAppned.innerHTML=`
                    <div class="flex justify-between gap-4 py-3">
                            <p class="text-lg font-semibold text-[#12132D] ">${details.title}</p>
                            <div class="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    class="w-7 h-7 text-[#12132D99]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p class="text-lg font-semibold text-[#12132D99]">${details.view_count || 0}</p>
                            </div>
                    </div>
                    `;
                    
                    appendByClick.appendChild(divAppned);
            }

//Search
function search(searchText){
    fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`)
    .then(res => res.json())
    .then(data => 
        {displayForum(data.posts);
        loader(false);
    });
}
search();
loadLatest();
loadForum();
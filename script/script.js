let pageCount = 3;
let currentPage = 0;
let pages;

initializePages();

function initializePages() {
    pages = document.getElementsByClassName('page');
    // pages = document.querySelectorAll('.page');
    // console.log(pages.item(0));
    // console.log(pages[0]);
    // console.log(pages.namedItem('page-0'))
    // console.log(pages['page-2']);
}

function nextPage() {
    if(currentPage + 1 >= pageCount)
        return;

    pages[currentPage].classList.toggleClass('hidden')
    
    currentPage++;
    
    pages[currentPage].classList.toggleClass('hidden')
}

function prevPage() {

}
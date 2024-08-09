const arrOfFontSizes = Array.from(document.querySelectorAll('.font-size'));
let activeFontSize = document.querySelector('.font-size_active');

const arrOfColorsAndBackgrounds = Array.from(document.querySelectorAll('.color'));
let activeColor = Array.from(document.querySelectorAll('.color_active'))[0];
let activeBackground = Array.from(document.querySelectorAll('.color_active'))[1];

const book = document.querySelector('.book');

arrOfFontSizes.forEach(clickItem => {
    clickItem.addEventListener('click', function(event) {
        event.preventDefault();
        activeFontSize.classList.remove('font-size_active');
        activeFontSize = clickItem;
        activeFontSize.classList.add('font-size_active');

        if (activeFontSize.classList.contains('font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else if (activeFontSize.classList.contains('font-size_small')) {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        }
    });
});

arrOfColorsAndBackgrounds.forEach(clickItem => {
    if (clickItem.hasAttribute('data-text-color')) {
        clickItem.addEventListener('click', (event) => {
            event.preventDefault();
            activeColor.classList.remove('color_active');
            activeColor = clickItem;
            activeColor.classList.add('color_active');

            if (activeColor.classList.contains('text_color_whitesmoke')) {
                book.classList.remove('book_color-gray');
                book.classList.remove('book_color-black');
                book.classList.add('book_color-whitesmoke');
            } else if (activeColor.classList.contains('text_color_gray')) {
                book.classList.remove('book_color-whitesmoke');
                book.classList.remove('book_color-black');
                book.classList.add('book_color-gray');
            } else {
                book.classList.remove('book_color-gray');
                book.classList.remove('book_color-whitesmoke');
            }
        });
    }

    if (clickItem.hasAttribute('data-bg-color')) {
        clickItem.addEventListener('click', function(event) {
            event.preventDefault();
            activeBackground.classList.remove('color_active');
            activeBackground = clickItem;
            activeBackground.classList.add('color_active');

            if (activeBackground.classList.contains('bg_color_black')) {
                book.classList.remove('book_bg-white');
                book.classList.remove('book_bg-gray');
                book.classList.add('book_bg-black');
            } else if (activeBackground.classList.contains('bg_color_gray')) {
                book.classList.remove('book_bg-white');
                book.classList.remove('book_bg-black');
                book.classList.add('book_bg-gray');
            } else {
                book.classList.remove('book_bg_black');
                book.classList.remove('book_bg-gray');
            }
        });
    }
});
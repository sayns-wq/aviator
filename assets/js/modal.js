const modalOpen = document.querySelector('[data-modal]'),
      modal = document.querySelector('.modal-show'),
      modalShow = document.querySelector('.modal-show'),
      modalClose = document.querySelector('[data-close]');

function openModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    // modal.classList.toggle('show');
};

modalOpen.addEventListener('click', openModal);

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    // modal.classList.toggle('show');
};
   
modalClose.addEventListener('click', closeModal);

modalShow.addEventListener('click', (e) => {
    const target = e.target;
    if (target === modalShow) {
        closeModal();
    };
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    };
});


//  class NewsCard {
//     constructor(src, alt, classText, title, descr, parent, classBlock, classPict) {
//         this.src = src;
//         this.alt = alt;
//         this.classText = classText;
//         this.title = title;
//         this.descr = descr;
//         this.parent = document.querySelector(parent);
//         this.classBlock = classBlock;
//         this.classPict = classPict;
//     }

//     render() {
//         const element = document.createElement('div');

//         element.innerHTML = `
//             <div class=${this.classBlock}>
//                 <div class=${this.classPict}>
//                     <img src=${this.src} alt="${this.alt}">
//                 </div>
//                 <div class=${this.classText}>
//                     <p>${this.title}</p>
//                     <p>${this.descr}</p>
//                     <hr>
//                     <button class="btn">ПОДРОБНЕЕ</button>
//                 </div>
//             </div>
//         `;
//         this.parent.append(element);
//     }
// }

// new NewsCard (
//     'https://whiterabbitmoscow.ru/media/k2/items/cache/67dcc46237b8f15ce4fdbadcc79dc8ea_XL.jpg',
//     'food', 
//     '',
//     '04.09.2020',
//     'НОВЫЙ ДЕГУСТАЦИОННЫЙ СЕТ МЕТАМОРФОЗЫ',
//     '.info-block',
//     'block-left',
//     'block-left__picture'
// ).render();

// new NewsCard (
//     'https://whiterabbitmoscow.ru/media/k2/items/cache/2db073658ef98ff1d00d15e09c24406a_XL.jpg',
//     'food',
//     'block-right__text',
//     '14.08.2020',
//     'БУДУЩЕЕ НАСТУПИЛО',
//     '.info-block',
//     'block-right',
//     'block-right__picture'
// ).render();

// new NewsCard (
//     'https://whiterabbitmoscow.ru/media/k2/items/cache/159fc61fd0fc009a5ca070136f874aef_XL.jpg',
//     'food',
//     '', 
//     '18.09.2020',
//     'ГАСТРОБАР',
//     '.info-block',
//     'block-left',
//     'block-left__picture'
// ).render();

// new NewsCard (
//     'https://whiterabbitmoscow.ru/media/k2/items/cache/daaafcf8e134c30f448bb4ca14d1f6c4_XL.jpg',
//     'food',
//     'block-right__text',
//     '14.08.2020',
//     'ПЯТЫЙ ГОД ПОДРЯД В РЕЙТИНГЕ THE WORLD’S 50 BEST RESTAURANTS',
//     '.info-block',
//     'block-right',
//     'block-right__picture'
// ).render();
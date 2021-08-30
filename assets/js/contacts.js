window.addEventListener('DOMContentLoaded', ()=> {
    let contacts = {
        'Адрес': 'Москва, Смоленская площадь, дом 3, 16 этаж',
        'Телефон': '+7 (495) 510-510-1 ',
        'Работа': 'jobwhiterabbit@wrf.su',
        'Банкеты': 'banquetwhiterabbit@wrf.su',
        'Выездное обслуживание': 'catering@wrf.su',
        'Рекламма': 'adv@wrf.su',
        'Время работы': 'понедельник - воскресенье  12:00 - 00:00'
    }
    let text = document.querySelector('.contacts_text')
    for(contact in contacts){
        let element = document.createElement('p');
        element.classList.add('contact_info')
        element.innerHTML = `${contact}: ${contacts[contact]}`;
        text.append(element);
    }
})
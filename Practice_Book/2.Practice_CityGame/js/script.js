'use strict'

// ! Игра в города на JavaScript

;(function (root) {
    let parent = document.querySelector(root)
    let field = parent.querySelector('#field');
    let message = parent.querySelector('#message');
    let text = parent.querySelector('#text');
    let list = document.querySelector('.sectionGame ul');
    let listLi = document.querySelectorAll('.sectionGame ul')
    let cities = [];
    const allCities = [
        "Абакан",
        "Абинск",
        "Агата",
        "Агинское",
        "Адлер",
        "Адыгейск",
        "Азов",
        "Алагир",
        "Алапаевск",
        "Алдан",
        "Александровск",
        "Александровск-Сахалинский",
        "Алексин",
        "Алушта",
        "Алупка",
        "Амдерма",
        "Амурск",
        "Анадырь",
        "Анапа",
        "Ангарск",
        "Апатиты",
        "Апрелевка",
        "Апшеронск",
        "Аргаяш",
        "Ардон",
        "Арзамас",
        "Армавир",
        "Арсеньев",
        "Архангельск",
        "Архыз",
        "Аршан",
        "Асбест",
        "Асино",
        "Астрахань",
        "Ахтубинск",
        "Ачинск",
        "Ачхой",
        "Аша",
        "Бавлы",
        "Байкальск",
        "Баксан",
        "Балашиха",
        "Балашов",
        "Балтийск",
        "Баргузин",
        "Барнаул",
        "Батайск",
        "Белгород",
        "Белокуриха",
        "Беломорск",
        "Белорецк",
        "Белореченск",
        "Белоярский",
        "Белый Яр",
        "Березники",
        "Беслан",
        "Бийск",
        "Биробиджан",
        "Бирск",
        "Благовещенск",
        "Богучар",
        "Бодайбо",
        "Бологое",
        "Бомнак",
        "Борзя",
        "Боровск",
        "Бреды",
        "Бронницы",
        "Брянск",
        "Бугульма",
        "Бугуруслан",
        "Буденновск",
        "Бузулук",
        "Буйнакск",
        "Быково",
        "Валаам",
        "Валдай",
        "Ведено",
        "Великие Луки",
        "Великий Устюг",
        "Верещагино",
        "Верхнее Пенжино",
        "Верхний Баскунчак",
        "Верхний Уфалей",
        "Верхотурье",
        "Верхоянск",
        "Видное",
        "Вилюйск",
        "Витим",
        "Владивосток",
        "Владикавказ",
        "Владимир",
        "Внуково",
        "Волгоград",
        "Волгодонск",
        "Вологда",
        "Волоколамск",
        "Волхов",
        "Воркута",
        "Воронеж",
        "Воскресенск",
        "Воткинск",
        "Всеволожск",
        "Вуктыл",
        "Выборг",
        "Вытегра",
        "Вязьма",
        "Гаврилов-Ям",
        "Гагарин",
        "Галич",
        "Гатчина",
        "Гдов",
        "Глазов",
        "Голицыно",
        "Горно-Алтайск",
        "Городовиковск",
        "Горячинск",
        "Гремячинск",
        "Грозный",
        "Губаха",
        "Губкин",
        "Губкинский",
        "Гудермес",
        "Гурзуф",
        "Гусь-Хрустальный",
        "Дагомыс",
        "Далматово",
        "Данков",
        "Двинской",
        "Дербент",
        "Джейрах",
        "Джубга",
        "Дзержинск",
        "Дивногорск",
        "Диксон",
        "Дмитров",
        "Дно",
        "Добрянка",
        "Долинск",
        "Домбай",
        "Домодедово",
        "Дубна",
        "Дудинка",
        "Егорьевск",
        "Ейск",
        "Екатеринбург",
        "Елабуга",
        "Елатьма",
        "Елец",
        "Ельня",
        "Енисейск",
        "Ербогачен",
        "Ершов",
        "Ессентуки",
        "Железногорск",
        "Жиганск",
        "Жигулевск",
        "Жуковский",
        "Забайкальск",
        "Заводоуковск",
        "Завьялиха",
        "Зарайск",
        "Звенигород",
        "Зеленогорск",
        "Зеленоград",
        "Златоуст",
        "Змеиногорск",
        "Иваново",
        "Ивдель",
        "Игарка",
        "Игнашино",
        "Ижевск",
        "Избербаш",
        "Инта",
        "Ирбит",
        "Иркутск",
        "Истра",
        "Ишим",
        "Йошкар-Ола",
        "Кабанск",
        "Кажим",
        "Казань",
        "Калач",
        "Калач-на-Дону",
        "Калачинск",
        "Калевала",
        "Калининград",
        "Калуга",
        "Калязин",
        "Каменномостский",
        "Каменск-Уральский",
        "Каменск-Шахтинский",
        "Камень-на-Оби",
        "Камышин",
        "Камышлов",
        "Кандалакша",
        "Каневская",
        "Канск",
        "Карабудахкент",
        "Карабулак",
        "Карачаевск",
        "Каргасок",
        "Каргополь",
        "Карпинск",
        "Карталы",
        "Касимов",
        "Каспийск",
        "Катав-Ивановск",
        "Катайск",
        "Качканар",
        "Кашира",
        "Кашхатау",
        "Кедровый",
        "Кежма",
        "Керчь",
        "Кемерово",
        "Кетченеры",
        "Кижи",
        "Кизел",
        "Кизилюрт",
        "Кизляр",
        "Кимры",
        "Кингисепп",
        "Кинешма",
        "Киренск",
        "Киржач",
        "Кириши",
        "Киров",
        "Кирово-Чепецк",
        "Кировск",
        "Кисловодск",
        "Клин",
        "Ковров",
        "Когалым",
        "Коломна",
        "Колпашево",
        "Комсомольск-на-Амуре",
        "Кондопога",
        "Королев",
        "Корсаков",
        "Костомукша",
        "Кострома",
        "Котельнич",
        "Котлас",
        "Кош-Агач",
        "Красная Поляна",
        "Красновишерск",
        "Красногорск",
        "Краснодар",
        "Краснокамск",
        "Красноселькуп",
        "Краснотурьинск",
        "Красноуральск",
        "Красноуфимск",
        "Красноярск",
        "Кропоткин",
        "Крымск",
        "Кудымкар",
        "Кузнецк",
        "Кулу",
        "Кулунда",
        "Кунгур",
        "Курган",
        "Курганинск",
        "Курильск",
        "Курск",
        "Куртамыш",
        "Курумкан",
        "Курчатов",
        "Кущевская",
        "Кызыл",
        "Кырен",
        "Кыштым",
        "Кяхта",
        "Лабинск",
        "Лабытнанги",
        "Лагань",
        "Лазаревское",
        "Лесной",
        "Липецк",
        "Листвянка",
        "Лодейное Поле",
        "Лотошино",
        "Луга",
        "Луховицы",
        "Лысьва",
        "Льгов",
        "Любань",
        "Люберцы",
        "Лянтор",
        "Магадан",
        "Магас",
        "Магнитогорск",
        "Майкоп",
        "Макаров",
        "Макушино",
        "Малая Вишера",
        "Малгобек",
        "Малоярославец",
        "Махачкала",
        "Медногорск",
        "Междуреченский",
        "Мезень",
        "Мелеуз",
        "Меренга",
        "Миасс",
        "Миллерово",
        "Минеральные Воды",
        "Минусинск",
        "Мирный",
        "Мичуринск",
        "Можайск",
        "Можга",
        "Моздок",
        "Мокшан",
        "Мончегорск",
        "Морозовск",
        "Моршанск",
        "Москва",
        "Мостовской",
        "Муравленко",
        "Мураши",
        "Мурманск",
        "Муром",
        "Мценск",
        "Мыс Шмидта",
        "Мытищи",
        "Набережные Челны",
        "Надым",
        "Назрань",
        "Нальчик",
        "Наро-Фоминск",
        "Нарткала",
        "Нарым",
        "Нарьян-Мар",
        "Находка",
        "Невельск",
        "Невинномысск",
        "Невьянск",
        "Неплюевка",
        "Нерчинск",
        "Нефедова",
        "Нефтегорск",
        "Нефтеюганск",
        "Нижневартовск",
        "Нижнекамск",
        "Нижнеудинск",
        "Нижний Новгород",
        "Нижний Тагил",
        "Новая Игирма",
        "Новгород Великий",
        "Новокузнецк",
        "Новомичуринск",
        "Новомосковск",
        "Новороссийка",
        "Новороссийск",
        "Новосибирск",
        "Новочеркасск",
        "Новый Оскол",
        "Новый Уренгой",
        "Ногинск",
        "Ноглики",
        "Норильск",
        "Ноябрьск",
        "Нурлат",
        "Нягань",
        "Нязепетровск",
        "Обнинск",
        "Обоянь",
        "Объячево",
        "Одинцово",
        "Озеры",
        "Оймякон",
        "Октябрьский",
        "Октябрьское",
        "Оленегорск",
        "Оленек",
        "Омск",
        "Онега",
        "Орел",
        "Оренбург",
        "Орехово-Зуево",
        "Орск",
        "Оса",
        "Осташков",
        "Оха",
        "Охотск",
        "Павловская",
        "Павловский Посад",
        "Палана",
        "Партизанск",
        "Певек",
        "Пенза",
        "Переславль-Залесский",
        "Пермь",
        "Петрозаводск",
        "Петропавловск-Камчатский",
        "Петухово",
        "Петушки",
        "Печенга",
        "Печора",
        "Пинега",
        "Плес",
        "Плесецк",
        "Подольск",
        "Поронайск",
        "Поярково",
        "Приморско-Ахтарск",
        "Приозерск",
        "Прохладный",
        "Псебай",
        "Псков",
        "Пушкин",
        "Пушкино",
        "Пушкинские Горы",
        "Пышма",
        "Пятигорск",
        "Радужный",
        "Раменское",
        "Ребриха",
        "Ревда",
        "Ржев",
        "Рославль",
        "Россошь",
        "Ростов",
        "Ростов-на-Дону",
        "Рубцовск",
        "Руза",
        "Рыбинск",
        "Рыльск",
        "Ряжск",
        "Рязань",
        "Салават",
        "Салехард",
        "Сальск",
        "Самара",
        "Санкт-Петербург",
        "Саранск",
        "Сарапул",
        "Саратов",
        "Саров",
        "Сасово",
        "Саянск",
        "Светлогорск",
        "Севастополь",
        "Северо-Курильск",
        "Северобайкальск",
        "Северодвинск",
        "Североморск",
        "Североуральск",
        "Сеймчан",
        "Семлячики",
        "Серафимович",
        "Сергиев Посад",
        "Серебряные Пруды",
        "Середниково",
        "Серов",
        "Серпухов",
        "Сибай",
        "Симферополь",
        "Сковородино",
        "Славгород",
        "Славянск-на-Кубани",
        "Сладково",
        "Слюдянка",
        "Смирных",
        "Смоленск",
        "Снежинск",
        "Снежногорск",
        "Соболево",
        "Советский",
        "Соликамск",
        "Солнечногорск",
        "Соловки",
        "Соль-Илецк",
        "Сорочинск",
        "Сортавала",
        "Сосновый Бор",
        "Сосногорск",
        "Сосьва",
        "Сочи",
        "Ставрополь",
        "Старая Русса",
        "Старый Оскол",
        "Стерлитамак",
        "Стрежевой",
        "Ступино",
        "Судак",
        "Суздаль",
        "Сузун",
        "Сунтар",
        "Сургут",
        "Сусуман",
        "Сухиничи",
        "Сызрань",
        "Сыктывкар",
        "Тавда",
        "Таганрог",
        "Тайшет",
        "Талдом",
        "Тамбей",
        "Тамбов",
        "Тарко-Сале",
        "Таштагол",
        "Тверь",
        "Теберда",
        "Темрюк",
        "Териберка",
        "Терней",
        "Терскол",
        "Тикси",
        "Тимашевск",
        "Тихвин",
        "Тихорецк",
        "Тобольск",
        "Токма",
        "Токсово",
        "Тольятти",
        "Томари",
        "Томпа",
        "Томск",
        "Торжок",
        "Тосно",
        "Тотьма",
        "Троицк",
        "Троицк",
        "Троицко-Печорск",
        "Туапсе",
        "Тула",
        "Тулпан",
        "Тулун",
        "Тура",
        "Туруханск",
        "Тутаев",
        "Тутончаны",
        "Тымовское",
        "Тында",
        "Тырныауз",
        "Тюмень",
        "Уварово",
        "Углегорск",
        "Углич",
        "Улан-Удэ",
        "Ульяновск",
        "Урай",
        "Уренгой",
        "Урус-Мартан",
        "Урюпинск",
        "Усинск",
        "Усмань",
        "Усолье Сибирское",
        "Уссурийск",
        "Усть-Баргузин",
        "Усть-Джегута",
        "Усть-Илимск",
        "Усть-Ишим",
        "Усть-Калманка",
        "Усть-Камчатск",
        "Усть-Катав",
        "Усть-Кулом",
        "Усть-Кут",
        "Усть-Ордынский",
        "Устюжна",
        "Уфа",
        "Ухта",
        "Учалы",
        "Уэлен",
        "Фатеж",
        "Феодосия",
        "Хабаровск",
        "Ханты-Мансийск",
        "Хасавюрт",
        "Хасан",
        "Хатанга",
        "Химки",
        "Холмогоры",
        "Холмск",
        "Хоста",
        "Хужир",
        "Цимлянск",
        "Чайковский",
        "Чебаркуль",
        "Чебоксары",
        "Чегем",
        "Челюскин",
        "Челябинск",
        "Черемхово",
        "Череповец",
        "Черкесск",
        "Чермоз",
        "Черняховск",
        "Черский",
        "Черусти",
        "Чехов",
        "Чикола",
        "Чита",
        "Чокурдах",
        "Чулым",
        "Чусовой",
        "Шадринск",
        "Шали",
        "Шамары",
        "Шарья",
        "Шатки",
        "Шатой",
        "Шатура",
        "Шаховская",
        "Шахты",
        "Шелагонцы",
        "Шелехов",
        "Шенкурск",
        "Шерегеш",
        "Шереметьево",
        "Шилка",
        "Шумиха",
        "Шуя",
        "Щелково",
        "Щельяюр",
        "Элиста",
        "Эльбрус",
        "Эльтон",
        "Энгельс",
        "Югорск",
        "Южно-Курильск",
        "Южно-Сахалинск",
        "Южноуральск",
        "Юровск",
        "Юрьев-Польский",
        "Юрьевец",
        "Юрюзань",
        "Якутск",
        "Якша",
        "Ялуторовск",
        "Ялта",
        "Ямбург",
        "Яр-Сале",
        "Ярославль",
        "Ясный",
        "Яхрома",
        "Яшалта",
        "Яшкуль"
    ] // Города России

    function test (arr, arr2, val) {
        let filteredArray = arr.filter(item => item.slice(0, 1) === text.textContent).map(item => item);
        let filteredArray2 = arr2.filter(item => item.slice(0, 1) === text.textContent).map(item => item);
        if (filteredArray.length === filteredArray2.length) {
            text.textContent = cities[cities.length - 1].slice(-2, -1).toUpperCase();
        } else {
            checkArrCities(allCities, val);

            text.textContent = cities[cities.length - 1].slice(-1).toUpperCase();

        }
    }
    function Duplicate(arr) {
        arr.filter((el, i, arr) => {
            if (arr.indexOf(el) !== i) {
                cities.pop();
                errorLi(listLi);
                message.textContent = 'Город уже был назван'
                setTimeout(function() {
                    message.textContent = '';
                }, 3000);
                // addIf();
            }
        })
    }
    function checkArrCities(arrCities, val) {
        let filteredArray = allCities.filter(item => item === val).map(item => item);
        if (filteredArray.length === 0) {
            message.textContent = 'Такого города в России нет'
            setTimeout(function() {
                message.textContent = '';
            }, 3000);
        } else if (filteredArray.length !== 0) {
            cities.push(val);
            test(allCities, cities);
            Duplicate(cities,allCities);
            addLi();
        } else {
            console.log('yes');
        }
        // addIf();
    }
    function addLi() {
        let li = document.createElement('li');
        li.textContent = cities[cities.length - 1].charAt(0).toUpperCase() + cities[cities.length - 1].slice(1);
        list.append(li);
    } // Добавление города в список
    function errorLi(arrLi) {
        arrLi.forEach((el) => {
            el.lastElementChild.style.color = 'red'
            el.lastElementChild.style.fontSize = '20px'
            setTimeout(function() {
                el.lastElementChild.remove()
            }, 3000);
        })
    } // Вывод ошибки

    field.addEventListener("keypress", (e) => {
        const enteredValue = field.value.slice(0, 1).toUpperCase();
        const ENTER = 13
        const lengthArr = cities.length;
        // const inputStrLow = field.value.toLowerCase();
        let inputValue = field.value.slice(0, 1).toUpperCase() + field.value.slice(1);

        if (!enteredValue || e.which !== ENTER) {
            return;
        }
        if (lengthArr === 0) { // происходит первая запись в массив
            checkArrCities(allCities, inputValue);

            if (field.value.slice(- 2, -1) === 'ы') {
                text.textContent = cities[cities.length - 1].slice(-3, -2).toUpperCase();
                robot(allCities, inputValue);

            } else if (field.value.slice(-1) === 'ь' || field.value.slice(-1) === 'й' || field.value.slice(-1) === 'ы') { // проверяем последнюю букву в ИНПУТЕ
                text.textContent = cities[cities.length - 1].slice(-2, -1).toUpperCase();
                robot(allCities, inputValue);

            } else {
                text.textContent = cities[cities.length - 1].slice(-1).toUpperCase();
                robot(allCities, inputValue);

            }
        } else if (lengthArr > 0) {  // происходит вторая запись в массив
                if (field.value.slice(-1) === 'ь' || field.value.slice(-1) === 'й' || field.value.slice(-1) === 'ы') {
                    checkArrCities(allCities, inputValue);
                    text.textContent = cities[cities.length - 1].slice(-2, -1).toUpperCase();
                    robot(allCities, inputValue);


                } else if ((cities[cities.length - 1].slice(-1) === 'ь' && cities[cities.length - 1].slice(-2, -1) === field.value.slice(0, 1).toLowerCase()) || (cities[cities.length - 1].slice(-1) === 'й' && cities[cities.length - 1].slice(-2, -1) === field.value.slice(0, 1).toLowerCase())) {
                    checkArrCities(allCities, inputValue);
                    text.textContent = cities[cities.length - 1].slice(-1).toUpperCase();
                    robot(allCities, inputValue);

                } else if (cities[cities.length - 1].slice(-1) === field.value.slice(0, 1).toLowerCase()) {
                    checkArrCities(allCities, inputValue);
                    text.textContent = cities[cities.length - 1].slice(-1).toUpperCase();
                    robot(allCities, inputValue);

                }

            Duplicate(cities,allCities);
            // test(allCities, cities, inputValue);
        }
        console.log(cities)
        field.value = '';
    });
    function robot(arrCiti) {
        let robotCiti = arrCiti.filter(item => {
            if (item.slice(0,1) === text.textContent) {
                return item;
            }
        }).map(item => item);
        let random = Math.floor(Math.random() * robotCiti.length);
        let randomCity = robotCiti[random];

        if (randomCity[randomCity.length - 1] === 'ь' || randomCity[randomCity.length - 1] === 'й' || randomCity[randomCity.length - 1] === 'ы') {
            text.textContent = randomCity[randomCity.length - 2].slice(-1).toUpperCase()
        } else {
            text.textContent = randomCity[randomCity.length - 1].slice(-1).toUpperCase();
        }
        cities.push(randomCity);
        addLi();




    }

})('.sectionGame');



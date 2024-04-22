let date = document.getElementById('date')
let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')



let today = new Date()

let weekDays = ['Дуйшомбу', 'Шейшемби', 'Шаршенби', 'Бейшемби', 'Жума', 'Ишенби', 'Жекшенби',]
let allMonth = ['Учтун айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш оона', 'Аяк оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы',]

date.innerHTML = today.getDate()
day.innerHTML = weekDays[today.getDay() - 1]
month.innerHTML = allMonth[today.getMonth()]
// year.innerHTML = treeYear[today.getFullYear(1)]



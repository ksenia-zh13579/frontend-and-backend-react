function Greeting() {
    const userName = 'Ксения';

    // получаем текущий час (0..23)
    const currentHour = new Date().getHours();
    
    // определяем приветствие в зависимости от времени
    let timeOfDay; // переменная для хранения приветствия
    if (currentHour < 12) {
        timeOfDay = 'Доброе утро';
    } else if (currentHour < 18) {
        timeOfDay = 'Добрый день';
    } else {
        timeOfDay = 'Добрый вечер';
    }

    return (
    <div className="greeting">
        <h1>{timeOfDay}, {userName}!</h1>
        <p>Рады видеть вас в нашем приложении.</p>
    </div>
    );
}

export default Greeting;
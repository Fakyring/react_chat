import './App.css';
import Footer from "./components/footer";

function App() {
    let insertData = "Астахов Никита Иванович Борисов Денис Александрович Вдовичев Никита Сергеевич Жирнов Никита Игоревич Заикин Даниил Юрьевич Зворыкин Глеб Игоревич Козлова Мария Евгеньевна Крутиков Никита Игоревич Лосев Антон Сергеевич Макарова Александра Михайловна Муратов Тимур Шухратович Назаренко Екатерина Михайловна Никитин Артём Александрович Новоселова Татьяна Михайловна Орлов Данил Дмитриевич Пискун Дмитрий Михайлович Проходцев Сергей Олегович Рахманов Амир Ренатович Редков Максим Александрович Романенко Андрей Георгиевич Рыжков Александр Сергеевич Семенов Александр Владимирович Семянников Никита Сергеевич Степанов Константин Константинович Чеснаков Максим Михайлович Чикилев Данил Дмитриевич Чуркин Максим Евгеньевич Широков Антон Дмитриевич Шрестха Алекс Раджинович"
    insertData = insertData.split(' ')
    let users = []
    for (let i = 0; i < insertData.length; i += 3) {
        users.push({'id': (i / 3) + 1, 'surname': insertData[i], 'name': insertData[i + 1], 'patronymic': insertData[i + 2]})
    }
    console.log(users)
    return (
        <div className="container">
            <div className="chats">
                <input type={"checkbox"} className={"check"}></input>
                <table>
                    <caption>Ст*денты</caption>
                    <tr>
                        <th>ID</th>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                    </tr>
                    {users.map(user => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.surname}</td>
                                <td>{user.name}</td>
                                <td>{user.patronymic}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

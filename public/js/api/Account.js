/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
    static URL = '/accaunt';
    /**
     * Получает информацию о счёте
     * */
    static get(id = '', callback) {
        createRequest({
            url: this.URL,
            method: 'GET',
            data: id,
            callback: callback(err, response)
        })
    }
}
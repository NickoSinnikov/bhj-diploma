/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
    /**
     * Производит регистрацию с помощью User.register
     * После успешной регистрации устанавливает
     * состояние App.setState( 'user-logged' )
     * и закрывает окно, в котором находится форма
     * */
    onSubmit(data) {
        let formData = new FormData();
        formData.append('email', this.element.querySelector('[name="email"]').value);
        formData.append('password', this.element.querySelector('[name="password"]').value);
        formData.append('name', this.element.querySelector('[name="name"]').value);

        User.register(formData, () => {
            App.setState('user-logged');
            this.element.reset();
            App.getModal('register').close();
        })
    }
}
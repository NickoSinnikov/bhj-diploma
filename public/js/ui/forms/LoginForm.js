/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
    /**
     * Производит авторизацию с помощью User.login
     * После успешной авторизации, сбрасывает форму,
     * устанавливает состояние App.setState( 'user-logged' ) и
     * закрывает окно, в котором находится форма
     * */
    onSubmit(data) {
        let formData = new FormData();
        formData.append('email', this.element.querySelector('[name="email"]').value);
        formData.append('password', this.element.querySelector('[name="password"]').value);


        User.register(formData, () => {
            App.setState('user-logged');
            this.element.reset();
            App.getModal('register').close();
        })
    }
}
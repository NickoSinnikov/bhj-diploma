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
    formData.append(
      'email',
      this.element.querySelector('[name="email"]').value
    );
    formData.append(
      'password',
      this.element.querySelector('[name="password"]').value
    );

    User.login(formData, (callback) => {
      this.element.reset();
      App.setState('user-logged');

      App.getModal('login').close();
    });
  }
}

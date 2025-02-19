/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    let sidebarMini = document.querySelector('.sidebar-mini');
    let sideBarButton = document.querySelector('.sidebar-toggle');

    let sideBarOpen = function () {
      sidebarMini.classList.toggle('sidebar-open', 'sidebar-collapse');
      return false;
    };

    sideBarButton.addEventListener('click', sideBarOpen);
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    document
      .querySelector('.menu-item_register')
      .addEventListener('click', () => {
        App.getModal('register').open();
      });
    document.querySelector('.menu-item_login').addEventListener('click', () => {
      App.getModal('login').open();
    });
    document
      .querySelector('.menu-item_logout')
      .addEventListener('click', () => {
        User.logout(() => {
          App.setState('init');
        });
      });
  }
}

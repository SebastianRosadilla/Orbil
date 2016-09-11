function Header() {

  return {
    restrict: 'E',
    templateUrl: 'directives/header.html',
    scope: false,
    link: (scope, element) => {
      element.on('click', () => {
        window.alert('Element clicked: ' + scope.message);
      });
    }
  };
}

export default {
  name: 'orbilHeader',
  fn: Header
};

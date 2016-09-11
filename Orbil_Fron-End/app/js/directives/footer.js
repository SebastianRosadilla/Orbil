function Footer() {

  return {
    restrict: 'E',
    templateUrl: 'directives/footer.html',
    scope: false,
    link: (scope, element) => {
      element.on('click', () => {
        window.alert('Element clicked: ' + scope.message);
      });
    }
  };
}

export default {
  name: 'orbilFooter',
  fn: Footer
};

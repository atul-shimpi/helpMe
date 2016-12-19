function appHeaderDirective() {
  'ngInject';
   return {
    restrict: 'E',
    scope: {},
    replace: false,
    templateUrl: './src/views/appHeader/header.html'
   };
}

export {appHeaderDirective};

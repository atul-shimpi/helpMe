import loginComponent from './login';
import registerComponent from './register';
import ticketsComponent from './tickets';

export default angular.module('helpMe.components', [
  loginComponent.name,
  registerComponent.name,
  ticketsComponent.name
]);
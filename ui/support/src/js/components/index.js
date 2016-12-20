import loginComponent from './login';
import ticketsComponent from './tickets';

export default angular.module('helpMe.components', [
  loginComponent.name,
  ticketsComponent.name
]);
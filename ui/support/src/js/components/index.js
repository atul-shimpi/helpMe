import loginComponent from './login';
import registerComponent from './register';
import profileComponent from './profile';
import ticketsComponent from './tickets';

export default angular.module('helpMe.components', [
  loginComponent.name,
  registerComponent.name,
  profileComponent.name,
  ticketsComponent.name
]);
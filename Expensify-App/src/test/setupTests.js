import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('dotenv').config({path: '.env.test'})//for working with test db
Enzyme.configure({
    adapter: new Adapter(),
    
});
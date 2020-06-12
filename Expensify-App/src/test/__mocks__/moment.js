//creating mock version of moment library
//in real application it will use the actual moment
//lib but in test file it will  use mock version

//to create the actual version of moment not the mock version
const moment = require.requireActual('moment');
export default (timestamp = 0)=>{
 return moment(timestamp);
}

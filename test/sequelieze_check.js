const Sequelize = require('sequelize');
const sequelize = new Sequelize('Live_Chat1', 'datapullman', 'system', {
  host: 'localhost',
  dialect: 'mssql',
  operatorsAliases: false,
  multipleStatements: true,


  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
 });

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');

})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
var aa='aaaa';

var status='';

Get_Usr_Id(aa)
function Get_Usr_Id(aa)
{
    sequelize
.query(
  'SELECT Admin_Login_Status FROM Admin_Login WHERE Admin_Name = ?',
  { raw: true, replacements: [aa]}
)
.spread(projects => {
  console.log('projects in get_usr_id',projects);
status=projects[0]['Admin_Login_Status']
console.log(status)


// console.log('userid in',Usr_Id)
 })
 .catch(error=>{

    console.log('err',error)

 })
}

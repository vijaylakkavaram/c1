
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

  });




var clientip1=192168126;

  clickip(clientip1)


function clickip(clientip1) {
	sequelize

.query(
  'Insert into user_ip_room_Id values= ?',
  { raw: true, replacements: [clientip1]}
)
.then(projects => {
  console.log(projects[0][0]['Usr_Id'])
  Usr_Id=projects[0][0]['Usr_Id']
  console.log('userid in',Usr_Id)
})


}

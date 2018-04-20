module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["RDSTransaction"] = {
            host: process.env.EndPoint_rdsRDSTransaction,
            port: process.env.Port_rdsRDSTransaction,
            user: process.env.User_rdsRDSTransaction,
            password: process.env.Password_rdsRDSTransaction,
            database: "Transact",
        };
    };
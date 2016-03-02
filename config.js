module.exports = {
    ip      : '0.0.0.0',
    port    : 6789,
    tls     : false,
    timeout : 60000,
    knex: {
        client: 'pg',
        connection: {
            host     : '127.0.0.1',
            user     : 'your_database_user',
            password : 'your_database_password',
            database : 'myapp_test'
        }
    }
    
};
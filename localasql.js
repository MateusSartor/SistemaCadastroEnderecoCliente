function initializeDatabase() {
    alasql("CREATE LOCALSTORAGE DATABASE IF NOT EXISTS agrosqldb;");
    alasql('ATTACH LOCALSTORAGE DATABASE agrosqldb;');
    alasql("USE agrosqldb;");
}
initializeDatabase();
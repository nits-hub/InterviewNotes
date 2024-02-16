import java.sql.*;

class CreateTableJDBC{
    public static void main(String[] args) {
        try{
                //load the jdbc driver
                Class.forName("com.mysql.cj.jdbc.Driver");

                //creating a connection
                String url="jdbc:mysql://localhost:3306/youtube";
                String username="root";
                String password="root";

                Connection con = DriverManager.getConnection(url, username, password);

                //create a query
                String q = "create table table1(tid int(20) PRIMARY KEY AUTO_INCREMENT, tName varchar(200) NOT NULL, tCity varchar(400))";

                //create a statement
                Statement stmt = con.createStatement();
                stmt.executeUpdate(q);
                System.out.println("table created in database...");

        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
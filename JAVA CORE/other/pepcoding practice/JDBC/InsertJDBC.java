import java.sql.*;

public class InsertJDBC {
    public static void main(String[] args) {
        try{
            //laod the driver   
            Class.forName("com.mysql.cj.jdbc.Driver");

            //creating a connection
            String url="jdbc:mysql://localhost:3306/youtube";
            String username = "root";
            String password = "root";
            Connection con = DriverManager.getConnection(url,username,password);

            //create a query
            String q = "insert into table1(tName,tCity) values(?,?)";

            //get the preparedstatement object
            PreparedStatement pstmt = con.prepareStatement(q);

            //set the value to query
            pstmt.setString(1, "Bravo Kumar");
            pstmt.setString(2, "Pune");
            // pstmt.setString(2, "Delta Sah");

            pstmt.executeUpdate();
            System.out.println("Inserted...");
            con.close();

        }catch(Exception e){
            e.printStackTrace();
        }
    }    
}

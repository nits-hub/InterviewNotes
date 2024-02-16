import java.sql.*;
import java.io.*;

public class InsertDynamic {
    public static void main(String[] args) {

        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            String url = "jdbc:mysql://localhost:3306/youtube";
            String username = "root";
            String password = "root";
            Connection con = DriverManager.getConnection(url, username, password);

            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("enter name: ");
            String name = br.readLine();
            System.out.println("enter city: ");
            String city = br.readLine();

            String q = "insert into table1(tName,tCity) values(?,?)";
            PreparedStatement pstmt = con.prepareStatement(q);

            pstmt.setString(1, name);
            pstmt.setString(2, city);
            pstmt.executeUpdate();
            System.out.println("inserted...");
            con.close();
            

        }catch(Exception e){
            e.printStackTrace();
        }
    }
}

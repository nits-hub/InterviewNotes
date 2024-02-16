import java.io.*;
import java.sql.*;

public class ImageSave {
    public static void main(String[] args) {
        try{
            //laod the driver   
            Class.forName("com.mysql.cj.jdbc.Driver");

            //creating a connection
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/youtube","root","root");
            String q = "insert into images(pic) values(?)";
            PreparedStatement pstmt = con.prepareStatement(q);

            FileInputStream fis = new FileInputStream("7 (1).jpg");
            pstmt.setBinaryStream(1,fis,fis.available());
            pstmt.executeUpdate();
            System.out.println("Inserted...");
            con.close();
        }catch(Exception e)
        {
            System.out.println("Error 1--");
        }
    }    
}

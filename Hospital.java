import java.util.ArrayList;
import java.util.List;

public class Hospital {
    public int capacity;
    public List<String> patients;

    public Hospital(int capacity, String patients){
        this.capacity= capacity;
        this.patients=new ArrayList<>();
    }

    public boolean bedCapacity(){
        return (this.capacity - this.patients.size()>0);
    }

    public boolean admitPatients(String name){
        if(this.bedCapacity()){
            patients.add(name);
            return true;
        }else{
            return false;
        }
    }

    public static void main (String [] args){
        Hospital hospital_one = new Hospital(3, "");
        //create new object
        Hospital hospital_two = new Hospital(4, "");
        List<String> people = new ArrayList<>();
        people.add("Sam");
        people.add("Jane");
        people.add("Mike");
        people.add("Kim");

        for(String p: people){
            if(hospital_two.admitPatients(p)){
                System.out.println("Patient " + p + " successfully admitted");
            }else{
                System.out.println("Patient " + p + " not admitted. Hospital is full");
            }
        }
}}
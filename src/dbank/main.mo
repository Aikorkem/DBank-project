import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var value: Float = 300;
  //value := 300;

  stable var startTime = Time.now();

  public func topUp(amount: Float){
    value += amount;

    Debug.print(debug_show(value));
  };
  
  public func withdrawal(amount: Float){

    let tempValue: Float = value - amount;

    if(tempValue >= 0){
      value -= amount;

      Debug.print(debug_show(value));
    }else{
      Debug.print("The final value is less than zero")
    }
    
  };

  public query func checkValue(): async Float{
    return value;
  };

  public func compound(){
    let currentTime = Time.now();
    let elapsedTimeS = (currentTime - startTime)/ 1000000000;

    value := value * (1.01 ** Float.fromInt(elapsedTimeS));
    startTime := currentTime;
  };
}

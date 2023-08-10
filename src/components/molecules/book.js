import styles from "./book.module.css";

import { Fragment ,useRef,useState} from "react";
export function Book({data}) {
    const seat=useRef("");
    const [check,setCheck]=useState(true)
  function changeColor(){
    if(check){
    switch(data.changeColor){
        case "green":
            seat.current.style.backgroundColor="green";
            seat.current.style.color="white";
            break;
            case "orange":
                seat.current.style.backgroundColor="orange";
                seat.current.style.color="balck";
                break;
    }
}
  }
  function undoColor(){
    if(check){
    switch(data.changeColor){
        case "green":
            seat.current.style.backgroundColor="white";
            seat.current.style.color="black";
            break;
            case "orange":
            seat.current.style.backgroundColor="white";
            seat.current.style.color="black";
            break;
    }
}

  }
function bookFun(){
    // console.log('asdas');
    if(check){
        if(data.status!=="booked"){
    seat.current.style.backgroundColor="green";
    seat.current.style.borderColor="green";
    seat.current.style.color="white";
    setCheck(false)}
    console.log('asdas');

}else{
    setCheck(true)
    seat.current.style.backgroundColor=`${data.color}`
    seat.current.style.color="black";
    seat.current.style.borderColor=`${data.changeColor}`;
}

}



    return (
        <Fragment>
    <div onClick={bookFun} style={{border:`1px solid ${data.changeColor}`,backgroundColor:`${data.color}`}} ref={seat} onMouseOver={changeColor} onMouseLeave={undoColor} className={styles.bookBox}>{
                data.nu
            }

            </div>

        </Fragment>
    )

}
import { Book } from "../molecules/book"
import styles from "./seat.module.css"

export function Seat() {
    let seatArray = [{ "nu": 1, "status": "booked",changeColor:"grey" ,color: "grey" },
    { "nu": 2, "status": "available",changeColor:"green", color: "none" },
    { "nu": 3, "status": "available",changeColor:"green", color: "none" },
    { "nu": 4, "status": "available",changeColor:"green", color: "none" }, 
    { "nu": 5, "status": "booked",changeColor:"grey", color: "grey" }, 
    { "nu": 1, "status": "bestseller",changeColor:"orange", color: "" }, 
    { "nu": 2, "status": "bestseller",changeColor:"orange", color: "" }, 
    { "nu": 1, "status": "bestseller",changeColor:"orange", color: "" }, 
    { "nu": 2, "status": "available",changeColor:"green", color: "none" },
    { "nu": 3, "status": "available", changeColor:"green",color: "none" },
    { "nu": 4, "status": "available", changeColor:"green",color: "none" },
    { "nu": 5, "status": "available", changeColor:"green",color: "none" },
    ]
    return (
        <div className={styles.mainSeatBox}>
            <div className={styles.top}>
                {
                    seatArray.slice(0, 5).map((e, i) => <Book data={e} key={i * 10} />)
                }

            </div>
            <div className={styles.top}>
                {
                    seatArray.slice(5, 7).map((e, i) => <Book data={e} key={i * 10} />)
                }

            </div>
            <div className={styles.top}>
                {
                    seatArray.slice(7).map((e, i) => <Book data={e} key={i * 10} />)
                }

            </div>


        </div>
    )
}
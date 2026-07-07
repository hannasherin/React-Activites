function AddFruit(){
    const[fruits,setFruits]=useState(["Apple","Banana"])
    const[newfrt,setNwefrt]=useState("")
    return(
        <>
      <input type="text"
      placeholder="Enter Fruit"
       />
        </>
    )
}
export default AddFruit
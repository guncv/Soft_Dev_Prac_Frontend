export default function ManageReservationLayout(
    {children , dashboard , manage} : 
    {children:React.ReactNode,
        dashboard:React.ReactNode,
        manage:React.ReactNode}){
    return (
        <div className="flex flex-col w-full m-[20px]">
            {children}
            {dashboard}
            {manage}
        </div>   
    )
}
export default async function getHospital(id:string){
    const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`)

    if (!response){
        throw ("Error to fetch hospital data")
    }
    return response.json();
}
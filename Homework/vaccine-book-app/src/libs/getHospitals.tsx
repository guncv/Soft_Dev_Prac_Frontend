export default async function getHospitals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await fetch("http://localhost:5000/api/v1/hospitals");
    if (!response){
        throw ("Error to fetch hospitals data");
    }
    return response.json()
}
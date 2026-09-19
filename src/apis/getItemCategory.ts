export default async function getItemCategory(id: string) {
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
    const {data} = await response.json()
    return data
}
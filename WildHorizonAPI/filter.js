export const filterData = (data, locationType, res) => {
    const locationName = res.url.split('/').pop()
    return data.filter((destination) => {
        return destination[locationType].toLowerCase() === locationName.toLowerCase()
    })
}
export const getMod = (number,modFrom) => {
    return ((number %modFrom)+modFrom)%modFrom
}
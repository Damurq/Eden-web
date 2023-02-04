const stringToDate = (date) => {
    let d = new Date(date)
    let utcDate = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds())
    return utcDate
}

export {stringToDate}
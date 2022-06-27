const stringifyDate = (date) => {
    const option = { day:'numeric', month:'short', year:'numeric'};
    const newDate = !date ? "undefined":
                    new Date(Date.parse(date)).toLocaleDateString('en_GB', option);
    return newDate;
}
export const useMinMaxDate = (dateArray?: string[], min = false) => {
    if (min && dateArray) {
        let startDate = new Date(dateArray[dateArray.length - 1]).getTime();
        dateArray.forEach((item) => {
            if (new Date(item).getTime() < new Date(startDate).getTime()) {
                startDate = new Date(item).getTime();
            }
        });
        return new Date(startDate).toLocaleDateString();
    }

    let endDate = 0;
    dateArray && dateArray.forEach((item) => {
        if (new Date(item).getTime() > new Date(endDate).getTime()) {
            endDate = new Date(item).getTime();
        }
    });
    return new Date(endDate).toLocaleDateString();
}
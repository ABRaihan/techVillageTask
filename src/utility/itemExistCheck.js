export const isItemExist = (item, data) => {
    const findItem = data.find(({ id }) => item.id === id);
    return Boolean(findItem);
};

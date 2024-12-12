const strContains = (str, searchTerm) => {
    if (typeof str !== 'string' || typeof searchTerm !== 'string') {
        return false;
    }
    return str.toLowerCase().includes(searchTerm.toLowerCase());
};

export default strContains;
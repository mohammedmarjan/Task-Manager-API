const isValidRequest = function(reqBody) {
    try {
        const { title, description, completed, priority } = reqBody;

        // Input validation
        if (!title || !description || completed === undefined || typeof completed !== 'boolean' || !priority) {
            return false
        }
        return true;
    } catch (error) {
        console.error(error)
        return false
    }

}

module.exports = { isValidRequest }

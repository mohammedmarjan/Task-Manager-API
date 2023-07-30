const isValidRequest = function(reqBody) {
    const { title, description, completed } = reqBody;

    // Input validation
    if (!title || !description || completed === undefined || typeof completed !== 'boolean' || !priority) {
        return res.status(400).json({ error: 'Invalid input' });
      }
    return true;
}

module.exports = { isValidRequest }


const ok = data => {
    return json(200, data)
}

const okCreated = (data = undefined) => {
    return json(201, data)
}

const error = (data, code = 400) => {
    return json(code, data)
}

const authError = (data) => {
    return json(401, data)
}

const serverError = (data) => {
    return json(500, data)
}

const json = (statusCode, data, headers = {}) => {
    const response = {
        statusCode,
        headers: Object.assign({
            'Access-Control-Allow-Origin': '*', // For CORS support
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'OPTIONS,PUT,GET,POST',
            'Content-Type': 'application/json'
        }, headers),
    }
    if (data) {
        response.body = JSON.stringify(data)
    }
    console.log(response)
    return response
}

module.exports = {
    ok,
    okCreated,
    error,
    authError,
    serverError
}



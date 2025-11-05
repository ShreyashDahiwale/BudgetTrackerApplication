export default (req, res, next) => {
    // console.log(`response: ${JSON.stringify(req.response)}`)
    let code = (typeof req.response === 'undefined') ? 200 : req.response.code
    let message = (typeof req.response === 'undefined') ? '' : req.response.message
    let data = (typeof req.response === 'undefined') ? {} : req.response.data
    let fields = (typeof req.response === 'undefined') ? {} : req.response.fields
    res.set({'ril-correlation-id': req.sessionID})
    res.status(code || 200).json({
        success: true,
        statusCode : code,
        message: message,
        data: data,
        fields:fields
    })
}

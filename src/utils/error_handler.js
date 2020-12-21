import ErrorTypes from '../fixtures/error_types'

export class ApiErrorHandler {

    _getErrorTypeResponse (parsedErrorResponse) {
        return ErrorTypes.find(value => (value.api_error_message === parsedErrorResponse.error_message) || (value.status === parsedErrorResponse.status)) || parsedErrorResponse
    }

    _parsedApiErrorResponse (apiErrorResponse) {
        const apiErrorObject = {
            status: null,
            error_message: null,
            error_message_to_user: null
        }

        if(!apiErrorResponse) {
            return apiErrorObject
        }

        apiErrorObject.status = apiErrorResponse.status;

        apiErrorObject.error_message = apiErrorResponse.description || apiErrorResponse.error
        
        apiErrorObject.error_message_to_user = apiErrorObject.error_message;

        return apiErrorObject;
    }

    handleApiErrorResponse(apiErrorResponse) {
        const parsedApiErrorResponse = this._parsedApiErrorResponse(apiErrorResponse);

        const errorMessage = (
          this._getErrorTypeResponse(parsedApiErrorResponse).error_message_to_user || 
          process.env.REACT_APP_DEFAULT_ERROR_MESSAGE
        );

        
        return errorMessage;
    }
}